---
repo: allenai/swe-agent
url: https://github.com/allenai/swe-agent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - allenai/SWE-agent: SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice. It can also be employed for offensive cybersecurity or competitive coding challenges. [NeurIPS 2024] · GitHub

**Source**: https://github.com/allenai/swe-agent

---

[Skip to content](https://github.com/allenai/swe-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[allenai](https://github.com/allenai)

/
**[SWE-agent](https://github.com/allenai/SWE-agent)**

Public

       forked from [SWE-agent/SWE-agent](https://github.com/SWE-agent/SWE-agent)

- [Notifications](https://github.com/login?return_to=%2Fallenai%2FSWE-agent)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fallenai%2FSWE-agent)
- 
[Star
          0](https://github.com/login?return_to=%2Fallenai%2FSWE-agent)

[https://github.com/allenai/SWE-agent](https://github.com/allenai/SWE-agent)

[Branches](https://github.com/allenai/SWE-agent/branches)[Tags](https://github.com/allenai/SWE-agent/tags)

[https://github.com/allenai/SWE-agent/branches](https://github.com/allenai/SWE-agent/branches)[https://github.com/allenai/SWE-agent/tags](https://github.com/allenai/SWE-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2,152 Commits2,152 Commits |  |  |  |
| .cursor/rules | .cursor/rules |  |  |
| .devcontainer | .devcontainer |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| config | config |  |  |
| docs | docs |  |  |
| sweagent | sweagent |  |  |
| tests | tests |  |  |
| tools | tools |  |  |
| trajectories | trajectories |  |  |
| .env.example | .env.example |  |  |
| .git-blame-ignore-revs | .git-blame-ignore-revs |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| codecov.yml | codecov.yml |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| mlc_config.json | mlc_config.json |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://swe-agent.com/latest/](https://swe-agent.com/latest/)

[https://swe-agent.com/latest/](https://swe-agent.com/latest/)[https://join.slack.com/t/swe-bench/shared_invite/zt-36pj9bu5s-o3_yXPZbaH2wVnxnss1EkQ](https://join.slack.com/t/swe-bench/shared_invite/zt-36pj9bu5s-o3_yXPZbaH2wVnxnss1EkQ)[https://arxiv.org/abs/2405.15793](https://arxiv.org/abs/2405.15793)

[https://mini-swe-agent.com/latest/](https://mini-swe-agent.com/latest/)

Warning

Most of our current development effort is on [mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent/), which has superseded SWE-agent. It matches the performance performance of SWE-agent, while being much simpler. See the [FAQ](https://mini-swe-agent.com/latest/faq/) for more details about the differences. Our general recommendation is to use mini-SWE-agent instead of SWE-agent going forward.

SWE-agent enables your language model of choice (e.g. GPT-4o or Claude Sonnet 4) to autonomously use tools to [fix issues in real GitHub repositories](https://swe-agent.com/latest/usage/hello_world), [find cybersecurity vulnerabilities](https://enigma-agent.com/), or [perform any custom task](https://swe-agent.com/latest/usage/coding_challenges).

- ✅ **State of the art** on SWE-bench among open-source projects
- ✅ **Free-flowing & generalizable**: Leaves maximal agency to the LM
- ✅ **Configurable & fully documented**: Governed by a single `yaml` file
- ✅ **Made for research**: Simple & hackable by design

SWE-agent is built and maintained by researchers from Princeton University and Stanford University.

## 📣 News

[https://github.com/allenai/swe-agent#-news](https://github.com/allenai/swe-agent#-news)

- July 24: [Mini-SWE-Agent](https://github.com/SWE-agent/mini-SWE-agent) achieves 65% on SWE-bench verified in 100 lines of python!
- May 2: [SWE-agent-LM-32b](https://github.com/SWE-bench/SWE-smith) achieves open-weights SOTA on SWE-bench
- Feb 28: [SWE-agent 1.0 + Claude 3.7 is SoTA on SWE-Bench full](https://x.com/KLieret/status/1895487966409298067)
- Feb 25: [SWE-agent 1.0 + Claude 3.7 is SoTA on SWE-bench verified](https://x.com/KLieret/status/1894408819670733158)
- Feb 13: [Releasing SWE-agent 1.0: SoTA on SWE-bench light & tons of new features](https://x.com/KLieret/status/1890048205448220849)
- Dec 7: [An interview with the SWE-agent & SWE-bench team](https://www.youtube.com/watch?v=fcr8WzeEXyk)

## 🚀 Get started!

[https://github.com/allenai/swe-agent#-get-started](https://github.com/allenai/swe-agent#-get-started)

👉 Try SWE-agent in your browser: [https://codespaces.new/SWE-agent/SWE-agent](https://codespaces.new/SWE-agent/SWE-agent) ([more information](https://swe-agent.com/latest/installation/codespaces/))

Read our [documentation](https://swe-agent.com) to learn more:

- [Installation](https://swe-agent.com/latest/installation/source/)
- [Hello world from the command line](https://swe-agent.com/latest/usage/hello_world/)
- [Benchmarking on SWE-bench](https://swe-agent.com/latest/usage/batch_mode/)
- [Frequently Asked Questions](https://swe-agent.com/latest/faq/)

## SWE-agent for offensive cybersecurity (EnIGMA) 

[https://github.com/allenai/swe-agent#swe-agent-for-offensive-cybersecurity-enigma-](https://github.com/allenai/swe-agent#swe-agent-for-offensive-cybersecurity-enigma-)

[https://private-user-images.githubusercontent.com/13602468/393649968-84599168-11a7-4776-8a49-33dbf0758bb2.svg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0NDMsIm5iZiI6MTc3OTI5OTE0MywicGF0aCI6Ii8xMzYwMjQ2OC8zOTM2NDk5NjgtODQ1OTkxNjgtMTFhNy00Nzc2LThhNDktMzNkYmYwNzU4YmIyLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDU0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmNGQ3NDlkM2ZlMmFkMTNlYTg1NWE3ZmU4ZTRkZmMzYmFlMTZkMzM5NjY2ZDBkMThlNjAyZWU3NmU2MGVkMjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnN2ZyUyQnhtbCJ9.FJ5H0JPZfaSxEqAgHtoigCV-DdEbBbDB0VRN-LvfXFQ](https://private-user-images.githubusercontent.com/13602468/393649968-84599168-11a7-4776-8a49-33dbf0758bb2.svg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0NDMsIm5iZiI6MTc3OTI5OTE0MywicGF0aCI6Ii8xMzYwMjQ2OC8zOTM2NDk5NjgtODQ1OTkxNjgtMTFhNy00Nzc2LThhNDktMzNkYmYwNzU4YmIyLnN2Zz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDU0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmNGQ3NDlkM2ZlMmFkMTNlYTg1NWE3ZmU4ZTRkZmMzYmFlMTZkMzM5NjY2ZDBkMThlNjAyZWU3NmU2MGVkMjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnN2ZyUyQnhtbCJ9.FJ5H0JPZfaSxEqAgHtoigCV-DdEbBbDB0VRN-LvfXFQ)

[SWE-agent: EnIGMA](https://enigma-agent.com) is a mode for solving offensive cybersecurity (capture the flag) challenges. EnIGMA achieves state-of-the-art results on multiple cybersecurity benchmarks (see [leaderboard](https://enigma-agent.com/#results)). Please use [SWE-agent 0.7](https://github.com/SWE-agent/SWE-agent/tree/v0.7) while we update EnIGMA for 1.0.

In addition, you might be interested in our other projects:

[https://github.com/SWE-agent/mini-SWE-agent](https://github.com/SWE-agent/mini-SWE-agent)[https://github.com/SWE-agent/SWE-ReX](https://github.com/SWE-agent/SWE-ReX)[https://github.com/SWE-bench/SWE-bench](https://github.com/SWE-bench/SWE-bench)[https://github.com/SWE-bench/SWE-smith](https://github.com/SWE-bench/SWE-smith)[https://github.com/SWE-bench/sb-cli](https://github.com/SWE-bench/sb-cli)

## Contributions 

[https://github.com/allenai/swe-agent#contributions-](https://github.com/allenai/swe-agent#contributions-)

If you'd like to contribute to the codebase, we welcome [issues](https://github.com/SWE-agent/SWE-agent/issues) and [pull requests](https://github.com/SWE-agent/SWE-agent/pulls)! For larger code changes, we always encourage discussion in issues first.

## Citation & contact 

[https://github.com/allenai/swe-agent#citation--contact-](https://github.com/allenai/swe-agent#citation--contact-)

SWE-agent is an academic project started at Princeton University by John Yang*, Carlos E. Jimenez*, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan, and Ofir Press. Contact person: [John Yang](https://john-b-yang.github.io/), [Carlos E. Jimenez](http://www.carlosejimenez.com/), and [Kilian Lieret](https://www.lieret.net/) (Email: [johnby@stanford.edu](mailto:johnby@stanford.edu), [carlosej@cs.princeton.edu](mailto:carlosej@cs.princeton.edu), [kl5675@princeton.edu](mailto:kl5675@princeton.edu)).

If you found this work helpful, please consider citing it using the following:

 SWE-agent citation

```
@inproceedings{yang2024sweagent,
  title={{SWE}-agent: Agent-Computer Interfaces Enable Automated Software Engineering},
  author={John Yang and Carlos E Jimenez and Alexander Wettig and Kilian Lieret and Shunyu Yao and Karthik R Narasimhan and Ofir Press},
  booktitle={The Thirty-eighth Annual Conference on Neural Information Processing Systems},
  year={2024},
  url={https://arxiv.org/abs/2405.15793}
}
```

If you used the summarizer, interactive commands or the offensive cybersecurity capabilities in SWE-agent, please also consider citing:

EnIGMA citation

```
@misc{abramovich2024enigmaenhancedinteractivegenerative,
      title={EnIGMA: Enhanced Interactive Generative Model Agent for CTF Challenges},
      author={Talor Abramovich and Meet Udeshi and Minghao Shao and Kilian Lieret and Haoran Xi and Kimberly Milner and Sofija Jancheska and John Yang and Carlos E. Jimenez and Farshad Khorrami and Prashanth Krishnamurthy and Brendan Dolan-Gavitt and Muhammad Shafique and Karthik Narasimhan and Ramesh Karri and Ofir Press},
      year={2024},
      eprint={2409.16165},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2409.16165},
}
```

## 🪪 License 

[https://github.com/allenai/swe-agent#-license-](https://github.com/allenai/swe-agent#-license-)

MIT. Check `LICENSE`.

[https://github.com/SWE-agent/SWE-agent/actions/workflows/pytest.yaml](https://github.com/SWE-agent/SWE-agent/actions/workflows/pytest.yaml)[https://github.com/SWE-agent/SWE-agent/actions/workflows/build-docs.yaml](https://github.com/SWE-agent/SWE-agent/actions/workflows/build-docs.yaml)[https://codecov.io/gh/SWE-agent/SWE-agent](https://codecov.io/gh/SWE-agent/SWE-agent)[https://results.pre-commit.ci/latest/github/SWE-agent/SWE-agent/main](https://results.pre-commit.ci/latest/github/SWE-agent/SWE-agent/main)[https://github.com/SWE-agent/SWE-agent/actions/workflows/check-links-periodic.yaml](https://github.com/SWE-agent/SWE-agent/actions/workflows/check-links-periodic.yaml)

## About

         SWE-agent takes a GitHub issue and tries to automatically fix it, using your LM of choice. It can also be employed for offensive cybersecurity or competitive coding challenges. [NeurIPS 2024]        

[swe-agent.com](https://swe-agent.com)

### Resources

[Readme](https://github.com/allenai/swe-agent#readme-ov-file)

### License

[MIT license](https://github.com/allenai/swe-agent#MIT-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/allenai/swe-agent#coc-ov-file)

### Contributing

[Contributing](https://github.com/allenai/swe-agent#contributing-ov-file)

### Security policy

[Security policy](https://github.com/allenai/swe-agent#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/allenai/SWE-agent/activity)

[Custom properties](https://github.com/allenai/SWE-agent/custom-properties)

### Stars

[0
        stars](https://github.com/allenai/SWE-agent/stargazers)

### Watchers

[0
        watching](https://github.com/allenai/SWE-agent/watchers)

### Forks

[0
        forks](https://github.com/allenai/SWE-agent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fallenai%2FSWE-agent&report=allenai+%28user%29)

## [Releases](https://github.com/allenai/SWE-agent/releases)

No releases published

## [Packages
      0](https://github.com/orgs/allenai/packages?repo_name=SWE-agent)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/allenai/SWE-agent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- 

Python

94.8%

- 

JavaScript

1.6%

- 

CSS

1.3%

- 

Shell

0.8%

- 

C++

0.5%

- 

Perl

0.3%

- 

Other

0.7%

     You can’t perform that action at this time.
