# Restore only files changed by the portfolio UI review. Run from any directory.
$ErrorActionPreference = 'Stop'
$projectRoot = $PSScriptRoot
$backupRoot = Join-Path $projectRoot '.revert/portfolio-before-ui-review'
$originalFiles = @('app/page.tsx', 'app/layout.tsx', 'components/Reveal.tsx', 'components/ProjectPreview.tsx', 'data/portfolio.ts', 'README.md')
foreach ($relativePath in $originalFiles) {
    $sourcePath = Join-Path $backupRoot $relativePath
    if (!(Test-Path -LiteralPath $sourcePath)) { throw "Missing backup: $sourcePath" }
}
foreach ($relativePath in $originalFiles) {
    Copy-Item -LiteralPath (Join-Path $backupRoot $relativePath) -Destination (Join-Path $projectRoot $relativePath) -Force
}
foreach ($relativePath in @('app/portfolio-review.css', 'public/images/revia-live.png')) {
    $targetPath = [IO.Path]::GetFullPath((Join-Path $projectRoot $relativePath))
    if (!$targetPath.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Restore target outside project.' }
    if (Test-Path -LiteralPath $targetPath) { Remove-Item -LiteralPath $targetPath }
}
Write-Host 'Portfolio restored to its state before the UI review. Backup retained in .revert.'
