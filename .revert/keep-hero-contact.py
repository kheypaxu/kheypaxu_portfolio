from pathlib import Path
import re
import shutil

root = Path(__file__).resolve().parent.parent
backup = root / '.revert/portfolio-before-ui-review'
current = (root / 'app/page.tsx').read_text(encoding='utf-8')
original = (backup / 'app/page.tsx').read_text(encoding='utf-8')

def extract(text, start, end):
    first = text.index(start)
    last = text.index(end, first) + len(end)
    return text[first:last]

hero_start = '<section id="home" className="hero">'
contact_start = '<Reveal id="contact" className="contact-section">'
hero = extract(current, hero_start, '</section>')
contact = extract(current, contact_start, '</Reveal>')
original = original.replace(extract(original, hero_start, '</section>'), hero)
original = original.replace(extract(original, contact_start, '</Reveal>'), contact)
original = original.replace('  MapPin,', '  Mail,\n  MapPin,')
original = original.replace('  const [copied, setCopied] = useState(false);', '  const [copied, setCopied] = useState(false);\n  const [copyFailed, setCopyFailed] = useState(false);')
original = original.replace('await navigator.clipboard.writeText(profile.github);', 'await navigator.clipboard.writeText(profile.email);\n      setCopyFailed(false);')
original = original.replace('window.open(profile.github, "_blank", "noopener,noreferrer");', 'setCopyFailed(true);')
(root / 'app/page.tsx').write_text(original, encoding='utf-8')

for relative in ['components/Reveal.tsx', 'components/ProjectPreview.tsx', 'README.md']:
    shutil.copyfile(backup / relative, root / relative)
data = (backup / 'data/portfolio.ts').read_text(encoding='utf-8')
data = data.replace('  github: "https://github.com/kheypaxu",', '  github: "https://github.com/kheypaxu",\n  email: "nicolekhey.bengaora@wvsu.edu.ph",\n  linkedin: "",')
(root / 'data/portfolio.ts').write_text(data, encoding='utf-8')

# Retain only the hero and contact rules, including their responsive variants.
css_path = root / 'app/portfolio-review.css'
css = re.sub(r'/\*.*?\*/', '', css_path.read_text(encoding='utf-8'), flags=re.S)
def filter_rules(source):
    output = []
    position = 0
    while position < len(source):
        opening = source.find('{', position)
        if opening < 0:
            break
        selector = source[position:opening].strip()
        depth, closing = 1, opening + 1
        while depth:
            if source[closing] == '{': depth += 1
            elif source[closing] == '}': depth -= 1
            closing += 1
        body = source[opening + 1:closing - 1]
        if selector.startswith('@media'):
            filtered = filter_rules(body)
            if filtered: output.append(selector + ' {\n' + filtered + '\n}')
        else:
            kept = []
            for part in selector.split(','):
                part = part.strip()
                if part.startswith(('.hero', '.portrait', '.dark .portrait', '.location', '.contact-', '.copy-status')):
                    kept.append(part)
                elif part.startswith('.text-link'):
                    kept.extend(['.hero ' + part, '.contact-section ' + part])
                elif part == 'h2':
                    kept.append('.contact-section h2')
            if kept: output.append(',\n'.join(kept) + ' {' + body + '}')
        position = closing
    return '\n'.join(output)
css_path.write_text('/* Retained hero and contact improvements only. */\n' + filter_rules(css) + '\n.contact-section .wrap { max-width: 1120px; }\n', encoding='utf-8')
print('Restored original portfolio sections; retained updated hero and contact with scoped styles.')
