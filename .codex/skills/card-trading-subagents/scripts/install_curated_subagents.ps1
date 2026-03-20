param(
    [string]$Destination = ".codex/agents",
    [switch]$Force,
    [switch]$ListOnly
)

$ErrorActionPreference = "Stop"

$agents = @(
    @{
        Name = "code-mapper.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/01-core-development/code-mapper.toml"
    },
    @{
        Name = "ui-designer.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/01-core-development/ui-designer.toml"
    },
    @{
        Name = "nextjs-developer.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/02-language-specialists/nextjs-developer.toml"
    },
    @{
        Name = "browser-debugger.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/04-quality-security/browser-debugger.toml"
    },
    @{
        Name = "reviewer.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/04-quality-security/reviewer.toml"
    },
    @{
        Name = "test-automator.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/04-quality-security/test-automator.toml"
    },
    @{
        Name = "docs-researcher.toml"
        Url = "https://raw.githubusercontent.com/VoltAgent/awesome-codex-subagents/main/categories/10-research-analysis/docs-researcher.toml"
    }
)

if ($ListOnly) {
    $agents | ForEach-Object { $_.Name }
    exit 0
}

$resolvedDestination = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Destination)
New-Item -ItemType Directory -Force -Path $resolvedDestination | Out-Null

foreach ($agent in $agents) {
    $targetPath = Join-Path $resolvedDestination $agent.Name

    if ((Test-Path $targetPath) -and -not $Force) {
        Write-Output "skip  $($agent.Name)"
        continue
    }

    $content = (Invoke-WebRequest -UseBasicParsing $agent.Url).Content
    Set-Content -Path $targetPath -Value $content -Encoding utf8
    Write-Output "write $($agent.Name)"
}

Write-Output "Installed $($agents.Count) curated subagents into $resolvedDestination"
