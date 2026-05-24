---
repo: ngoodman/metaprompt
url: https://github.com/ngoodman/metaprompt
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ngoodman/metaprompt: Meta-prompt: a simple self-improving language agent · GitHub

**Source**: https://github.com/ngoodman/metaprompt

---

[Skip to content](https://github.com/ngoodman/metaprompt#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ngoodman](https://github.com/ngoodman)

/
**[metaprompt](https://github.com/ngoodman/metaprompt)**

Public

- [Notifications](https://github.com/login?return_to=%2Fngoodman%2Fmetaprompt)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fngoodman%2Fmetaprompt)
- 
[Star
          88](https://github.com/login?return_to=%2Fngoodman%2Fmetaprompt)

[https://github.com/ngoodman/metaprompt](https://github.com/ngoodman/metaprompt)

[Branches](https://github.com/ngoodman/metaprompt/branches)[Tags](https://github.com/ngoodman/metaprompt/tags)

[https://github.com/ngoodman/metaprompt/branches](https://github.com/ngoodman/metaprompt/branches)[https://github.com/ngoodman/metaprompt/tags](https://github.com/ngoodman/metaprompt/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| .gitignore | .gitignore |  |  |
| 20Qs.py | 20Qs.py |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| eval.py | eval.py |  |  |
| eval_analysis.py | eval_analysis.py |  |  |
| filters.py | filters.py |  |  |
| llm.py | llm.py |  |  |
| metaprompt.py | metaprompt.py |  |  |
| things.csv | things.csv |  |  |
| trytryagain.py | trytryagain.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Metaprompt

[https://github.com/ngoodman/metaprompt#metaprompt](https://github.com/ngoodman/metaprompt#metaprompt)

[Meta-prompt: a simple self-improving language agent](https://open.substack.com/pub/noahgoodman/p/meta-prompt-a-simple-self-improving?r=n88hp&utm_campaign=post&utm_medium=web)

[https://user-images.githubusercontent.com/461193/232054201-e06b399c-79f4-4b68-8648-550b6a4f1f3e.png](https://user-images.githubusercontent.com/461193/232054201-e06b399c-79f4-4b68-8648-550b6a4f1f3e.png)

## Code organization

[https://github.com/ngoodman/metaprompt#code-organization](https://github.com/ngoodman/metaprompt#code-organization)

metaprompt.py has core code, `loop` is the main function. `reflectionv1` (etc.) are various versions of the meta-prompt I have tried. (Currently only `reflectionv7` works because I changed the setup to extract "Critique: ..." and "Instructions: ..." parts from the response.

tryryagain.py llm.py and filters.py have helper code to interface with language models and simulate "users". In particular, the `try_try_again` helper is used to have a conversation between the LM assistant and the `parser` "user" -- if the parser throws a `Complaint` the LM is prompted with this complaint to try again.

eval.py has the simple base evaluation. eval_analysis.py makes a plot.

20Qs.py uses metaprompt to play 20 Questions.

(Further documentation to come..)

## About

         Meta-prompt: a simple self-improving language agent       

### Resources

[Readme](https://github.com/ngoodman/metaprompt#readme-ov-file)

### License

[MIT license](https://github.com/ngoodman/metaprompt#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ngoodman/metaprompt/activity)

### Stars

[88
        stars](https://github.com/ngoodman/metaprompt/stargazers)

### Watchers

[1
        watching](https://github.com/ngoodman/metaprompt/watchers)

### Forks

[3
        forks](https://github.com/ngoodman/metaprompt/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fngoodman%2Fmetaprompt&report=ngoodman+%28user%29)

## [Releases](https://github.com/ngoodman/metaprompt/releases)

No releases published

## [Packages
      0](https://github.com/users/ngoodman/packages?repo_name=metaprompt)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ngoodman/metaprompt/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/ngoodman/metaprompt/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

