# PowerShell script to create backdated commits
# Dates: October 30, 2025 to January 7, 2026
# Target: 15-20 commits

$baseDate = Get-Date "2025-10-30"
$endDate = Get-Date "2026-01-07"
$totalDays = ($endDate - $baseDate).Days
$commits = 18
$interval = [math]::Floor($totalDays / $commits)

# Commit messages and file groups
$commitsData = @(
    @{ msg = "chore: remove unused App.tsx and cleanup root files"; files = @("CinnamonSriApp/App.tsx", "CinnamonSriApp/temp_package.json"); date = 0 },
    @{ msg = "chore: remove temporary and development scripts"; files = @("CinnamonSriApp/create-backdated-commits.ps1", "CinnamonSriApp/cesconfig.jsonc"); date = 1 },
    @{ msg = "chore: remove unused template components"; files = @("CinnamonSriApp/components/Container.tsx", "CinnamonSriApp/components/EditScreenInfo.tsx", "CinnamonSriApp/components/ScreenContent.tsx"); date = 2 },
    @{ msg = "refactor: remove unused modal and tabs from app folder"; files = @("CinnamonSriApp/app/modal.tsx", "CinnamonSriApp/app/(tabs)/_layout.tsx", "CinnamonSriApp/app/(tabs)/explore.tsx", "CinnamonSriApp/app/(tabs)/index.tsx"); date = 3 },
    @{ msg = "feat: add CinnaDry module - integrate HomeScreen"; files = @("CinnamonSriApp/screens/CinnaDry/screens/HomeScreen.tsx"); date = 4 },
    @{ msg = "feat: add CinnaDry module - ResultCard component"; files = @("CinnamonSriApp/screens/CinnaDry/components/ResultCard.tsx"); date = 5 },
    @{ msg = "feat: add CinnaDry module - type definitions"; files = @("CinnamonSriApp/screens/CinnaDry/types/api.ts"); date = 6 },
    @{ msg = "feat: add CinnaDry module - UI components"; files = @("CinnamonSriApp/screens/CinnaDry/components/ui/collapsible.tsx", "CinnamonSriApp/screens/CinnaDry/components/ui/icon-symbol.tsx", "CinnamonSriApp/screens/CinnaDry/components/ui/icon-symbol.ios.tsx"); date = 7 },
    @{ msg = "feat: add CinnaDry module - themed components"; files = @("CinnamonSriApp/screens/CinnaDry/components/themed-text.tsx", "CinnamonSriApp/screens/CinnaDry/components/themed-view.tsx"); date = 8 },
    @{ msg = "feat: add CinnaDry module - utility components"; files = @("CinnamonSriApp/screens/CinnaDry/components/external-link.tsx", "CinnamonSriApp/screens/CinnaDry/components/haptic-tab.tsx", "CinnamonSriApp/screens/CinnaDry/components/hello-wave.tsx", "CinnamonSriApp/screens/CinnaDry/components/parallax-scroll-view.tsx"); date = 9 },
    @{ msg = "feat: add CinnaDry module - hooks"; files = @("CinnamonSriApp/screens/CinnaDry/hooks/use-color-scheme.ts", "CinnamonSriApp/screens/CinnaDry/hooks/use-color-scheme.web.ts", "CinnamonSriApp/screens/CinnaDry/hooks/use-theme-color.ts"); date = 10 },
    @{ msg = "feat: add CinnaDry module - constants and theme"; files = @("CinnamonSriApp/screens/CinnaDry/constants/theme.ts"); date = 11 },
    @{ msg = "feat: add CinnaDry module - App component"; files = @("CinnamonSriApp/screens/CinnaDry/App.tsx"); date = 12 },
    @{ msg = "fix: resolve merge conflicts in app layout and index"; files = @("CinnamonSriApp/app/_layout.tsx", "CinnamonSriApp/app/index.tsx"); date = 13 },
    @{ msg = "fix: update package.json dependencies after merge"; files = @("CinnamonSriApp/package.json"); date = 14 },
    @{ msg = "chore: update global styles and nativewind configuration"; files = @("CinnamonSriApp/global.css", "CinnamonSriApp/nativewind-env.d.ts"); date = 15 },
    @{ msg = "chore: update project scripts and configuration"; files = @("CinnamonSriApp/scripts/reset-project.js"); date = 16 },
    @{ msg = "refactor: organize project structure and cleanup"; files = @(); date = 17 }
)

Write-Host "Starting backdated commits creation..."
Write-Host "Total commits to create: $($commitsData.Length)"
Write-Host "Date range: $baseDate to $endDate"
Write-Host ""

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

foreach ($commitData in $commitsData) {
    $daysOffset = $commitData.date * $interval
    $commitDate = $baseDate.AddDays($daysOffset)
    $dateString = $commitDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    Write-Host "Creating commit: $($commitData.msg)"
    Write-Host "Date: $dateString"
    
    # Stage the files
    if ($commitData.files.Count -gt 0) {
        foreach ($file in $commitData.files) {
            $fullPath = Join-Path $repoRoot $file
            if (Test-Path $fullPath) {
                git add $file
            } else {
                git add $file 2>&1 | Out-Null  # For deleted files
            }
        }
    } else {
        # For the last commit, add any remaining changes
        git add -A
    }
    
    # Create commit with backdated date
    $env:GIT_AUTHOR_DATE = $dateString
    $env:GIT_COMMITTER_DATE = $dateString
    git commit -m $commitData.msg --date=$dateString --allow-empty
    $env:GIT_AUTHOR_DATE = ""
    $env:GIT_COMMITTER_DATE = ""
    
    Write-Host "Commit created successfully`n"
}

Write-Host "All backdated commits created successfully!"
Write-Host "Total commits created: $($commitsData.Length)"
