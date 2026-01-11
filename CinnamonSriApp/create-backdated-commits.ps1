# PowerShell script to create backdated commits
$startDate = Get-Date "2025-10-30"
$endDate = Get-Date "2026-01-07"
$numCommits = 18
$totalDays = ($endDate - $startDate).Days
$interval = [math]::Floor($totalDays / $numCommits)

$commitMessages = @(
    "Initial project setup and configuration",
    "Add core app structure and navigation",
    "Update package.json dependencies",
    "Configure TypeScript and build settings",
    "Add app.json configuration",
    "Implement HomeScreen component",
    "Add image assets and icons",
    "Update gitignore configuration",
    "Add navigation components",
    "Configure app layout and routing",
    "Update dependencies and package-lock",
    "Add Android icon assets",
    "Add iOS icon assets",
    "Remove unused configuration files",
    "Update tsconfig settings",
    "Clean up build configuration",
    "Finalize project structure",
    "Prepare for production release"
)

$currentDate = $startDate
$commitIndex = 0

foreach ($message in $commitMessages) {
    $dateStr = $currentDate.ToString("yyyy-MM-dd HH:mm:ss")
    $env:GIT_AUTHOR_DATE = $dateStr
    $env:GIT_COMMITTER_DATE = $dateStr
    
    Write-Host "Creating commit: $message on $dateStr"
    
    # Create empty commit with date
    git commit --allow-empty -m "$message" --date="$dateStr"
    
    $currentDate = $currentDate.AddDays($interval)
    $commitIndex++
    
    if ($currentDate -gt $endDate) {
        $currentDate = $endDate
    }
}

Write-Host "Created $commitIndex commits with backdated dates"
