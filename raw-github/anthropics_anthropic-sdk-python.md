---
repo: anthropics/anthropic-sdk-python
url: https://github.com/anthropics/anthropic-sdk-python
content_timestamp: 2026-05-19
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - anthropics/anthropic-sdk-python · GitHub

**Source**: https://github.com/anthropics/anthropic-sdk-python

---

[Skip to content](https://github.com/anthropics/anthropic-sdk-python#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[anthropics](https://github.com/anthropics)

/
**[anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python)**

Public

- [Notifications](https://github.com/login?return_to=%2Fanthropics%2Fanthropic-sdk-python)You must be signed in to change notification settings
- [Fork
    682](https://github.com/login?return_to=%2Fanthropics%2Fanthropic-sdk-python)
- 
[Star
          3.5k](https://github.com/login?return_to=%2Fanthropics%2Fanthropic-sdk-python)

[https://github.com/anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python)

[Branches](https://github.com/anthropics/anthropic-sdk-python/branches)[Tags](https://github.com/anthropics/anthropic-sdk-python/tags)

[https://github.com/anthropics/anthropic-sdk-python/branches](https://github.com/anthropics/anthropic-sdk-python/branches)[https://github.com/anthropics/anthropic-sdk-python/tags](https://github.com/anthropics/anthropic-sdk-python/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,111 Commits1,111 Commits |  |  |  |
| .devcontainer | .devcontainer |  |  |
| .github | .github |  |  |
| .inline-snapshot/external | .inline-snapshot/external |  |  |
| .vscode | .vscode |  |  |
| bin | bin |  |  |
| examples | examples |  |  |
| scripts | scripts |  |  |
| src/anthropic | src/anthropic |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .python-version | .python-version |  |  |
| .release-please-manifest.json | .release-please-manifest.json |  |  |
| .stats.yml | .stats.yml |  |  |
| Brewfile | Brewfile |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| api.md | api.md |  |  |
| helpers.md | helpers.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| release-please-config.json | release-please-config.json |  |  |
| requirements-dev.lock | requirements-dev.lock |  |  |
| tools.md | tools.md |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# Claude SDK for Python

[https://github.com/anthropics/anthropic-sdk-python#claude-sdk-for-python](https://github.com/anthropics/anthropic-sdk-python#claude-sdk-for-python)

[https://pypi.org/project/anthropic/](https://pypi.org/project/anthropic/)

The Claude SDK for Python provides access to the [Claude API](https://docs.anthropic.com/en/api/) from Python applications.

## Documentation

[https://github.com/anthropics/anthropic-sdk-python#documentation](https://github.com/anthropics/anthropic-sdk-python#documentation)

Full documentation is available at **[platform.claude.com/docs/en/api/sdks/python](https://platform.claude.com/docs/en/api/sdks/python)**.

## Installation

[https://github.com/anthropics/anthropic-sdk-python#installation](https://github.com/anthropics/anthropic-sdk-python#installation)

```
pip install anthropic
```

## Getting started

[https://github.com/anthropics/anthropic-sdk-python#getting-started](https://github.com/anthropics/anthropic-sdk-python#getting-started)

```
import os
from anthropic import Anthropic

client = Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY"),  # This is the default and can be omitted
)

message = client.messages.create(
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "Hello, Claude",
        }
    ],
    model="claude-opus-4-6",
)
print(message.content)
```

## Requirements

[https://github.com/anthropics/anthropic-sdk-python#requirements](https://github.com/anthropics/anthropic-sdk-python#requirements)

Python 3.9+

## Contributing

[https://github.com/anthropics/anthropic-sdk-python#contributing](https://github.com/anthropics/anthropic-sdk-python#contributing)

See [CONTRIBUTING.md](https://github.com/anthropics/anthropic-sdk-python/blob/main/CONTRIBUTING.md).

## License

[https://github.com/anthropics/anthropic-sdk-python#license](https://github.com/anthropics/anthropic-sdk-python#license)

This project is licensed under the MIT License. See the [LICENSE](https://github.com/anthropics/anthropic-sdk-python/blob/main/LICENSE) file for details.

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/anthropics/anthropic-sdk-python#readme-ov-file)

### License

[MIT license](https://github.com/anthropics/anthropic-sdk-python#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/anthropics/anthropic-sdk-python#contributing-ov-file)

### Security policy

[Security policy](https://github.com/anthropics/anthropic-sdk-python#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/anthropics/anthropic-sdk-python/activity)

[Custom properties](https://github.com/anthropics/anthropic-sdk-python/custom-properties)

### Stars

[3.5k
        stars](https://github.com/anthropics/anthropic-sdk-python/stargazers)

### Watchers

[189
        watching](https://github.com/anthropics/anthropic-sdk-python/watchers)

### Forks

[682
        forks](https://github.com/anthropics/anthropic-sdk-python/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fanthropics%2Fanthropic-sdk-python&report=anthropics+%28user%29)

## [Releases
      188](https://github.com/anthropics/anthropic-sdk-python/releases)

[v0.103.1
        
          Latest
      
      May 19, 2026](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v0.103.1)
[+ 187 releases](https://github.com/anthropics/anthropic-sdk-python/releases)

## [Packages
      0](https://github.com/orgs/anthropics/packages?repo_name=anthropic-sdk-python)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/anthropics/anthropic-sdk-python/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.8%](https://github.com/anthropics/anthropic-sdk-python/search?l=python)
- 

Other

0.2%

     You can’t perform that action at this time.
