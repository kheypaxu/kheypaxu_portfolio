import snapshot from "@/data/github-snapshot.json";

export async function GET() {
  try {
    const response = await fetch(
      "https://github.com/users/kheypaxu/contributions",
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!response.ok) throw new Error("GitHub unavailable");
    const html = await response.text();
    const days = [
      ...html.matchAll(/<(?:td|rect)\b[^>]*data-date="([^"]+)"[^>]*>/g),
    ]
      .flatMap((match) => {
        const level = match[0].match(/data-level="([0-4])"/);
        return level ? [{ date: match[1], level: Number(level[1]) }] : [];
      })
      .sort((a, b) => a.date.localeCompare(b.date));
    if (!days.length) throw new Error("Calendar unavailable");
    return Response.json({ days });
  } catch {
    return Response.json(snapshot);
  }
}
