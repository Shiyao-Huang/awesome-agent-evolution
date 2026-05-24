---
repo: n8n-io/n8n
url: https://github.com/n8n-io/n8n
content_timestamp: 2026-05-20
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - n8n-io/n8n: Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations. · GitHub

**Source**: https://github.com/n8n-io/n8n

---

[Skip to content](https://github.com/n8n-io/n8n#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[n8n-io](https://github.com/n8n-io)

/
**[n8n](https://github.com/n8n-io/n8n)**

Public

- [Notifications](https://github.com/login?return_to=%2Fn8n-io%2Fn8n)You must be signed in to change notification settings
- [Fork
    57.8k](https://github.com/login?return_to=%2Fn8n-io%2Fn8n)
- 
[Star
          189k](https://github.com/login?return_to=%2Fn8n-io%2Fn8n)

[https://github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

[Branches](https://github.com/n8n-io/n8n/branches)[Tags](https://github.com/n8n-io/n8n/tags)

[https://github.com/n8n-io/n8n/branches](https://github.com/n8n-io/n8n/branches)[https://github.com/n8n-io/n8n/tags](https://github.com/n8n-io/n8n/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History19,934 Commits19,934 Commits |  |  |  |
| .agents | .agents |  |  |
| .claude | .claude |  |  |
| .devcontainer | .devcontainer |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| assets | assets |  |  |
| docker/images | docker/images |  |  |
| packages | packages |  |  |
| patches | patches |  |  |
| scripts | scripts |  |  |
| security | security |  |  |
| .actrc | .actrc |  |  |
| .code-health-baseline.json | .code-health-baseline.json |  |  |
| .dockerignore | .dockerignore |  |  |
| .editorconfig | .editorconfig |  |  |
| .env.local.example | .env.local.example |  |  |
| .git-blame-ignore-revs | .git-blame-ignore-revs |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .npmignore | .npmignore |  |  |
| .npmrc | .npmrc |  |  |
| .poutine.yml | .poutine.yml |  |  |
| .prettierignore | .prettierignore |  |  |
| .prettierrc.js | .prettierrc.js |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| CONTRIBUTOR_LICENSE_AGREEMENT.md | CONTRIBUTOR_LICENSE_AGREEMENT.md |  |  |
| LICENSE.md | LICENSE.md |  |  |
| LICENSE_EE.md | LICENSE_EE.md |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| biome.jsonc | biome.jsonc |  |  |
| codecov.yml | codecov.yml |  |  |
| cubic.yaml | cubic.yaml |  |  |
| jest.config.js | jest.config.js |  |  |
| lefthook.yml | lefthook.yml |  |  |
| package.json | package.json |  |  |
| pnpm-lock.yaml | pnpm-lock.yaml |  |  |
| pnpm-workspace.yaml | pnpm-workspace.yaml |  |  |
| renovate.json | renovate.json |  |  |
| tsconfig.json | tsconfig.json |  |  |
| turbo.json | turbo.json |  |  |
| vitest.workspace.ts | vitest.workspace.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n - Secure Workflow Automation for Technical Teams

[https://github.com/n8n-io/n8n#n8n---secure-workflow-automation-for-technical-teams](https://github.com/n8n-io/n8n#n8n---secure-workflow-automation-for-technical-teams)

n8n is a workflow automation platform that gives technical teams the flexibility of code with the speed of no-code. With 400+ integrations, native AI capabilities, and a fair-code license, n8n lets you build powerful automations while maintaining full control over your data and deployments.

[https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot-readme.png](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-screenshot-readme.png)

## Key Capabilities

[https://github.com/n8n-io/n8n#key-capabilities](https://github.com/n8n-io/n8n#key-capabilities)

- **Code When You Need It**: Write JavaScript/Python, add npm packages, or use the visual interface
- **AI-Native Platform**: Build AI agent workflows based on LangChain with your own data and models
- **Full Control**: Self-host with our fair-code license or use our [cloud offering](https://app.n8n.cloud/login)
- **Enterprise-Ready**: Advanced permissions, SSO, and air-gapped deployments
- **Active Community**: 400+ integrations and 900+ ready-to-use [templates](https://n8n.io/workflows)

## Quick Start

[https://github.com/n8n-io/n8n#quick-start](https://github.com/n8n-io/n8n#quick-start)

Try n8n instantly with [npx](https://docs.n8n.io/hosting/installation/npm/) (requires [Node.js](https://nodejs.org/en/)):

```
npx n8n
```

Or deploy with [Docker](https://docs.n8n.io/hosting/installation/docker/):

```
docker volume create n8n_data
docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
```

Access the editor at [http://localhost:5678](http://localhost:5678)

## Resources

[https://github.com/n8n-io/n8n#resources](https://github.com/n8n-io/n8n#resources)

- 📚 [Documentation](https://docs.n8n.io)
- 🔧 [400+ Integrations](https://n8n.io/integrations)
- 💡 [Example Workflows](https://n8n.io/workflows)
- 🤖 [AI & LangChain Guide](https://docs.n8n.io/advanced-ai/)
- 👥 [Community Forum](https://community.n8n.io)
- 📖 [Community Tutorials](https://community.n8n.io/c/tutorials/28)

## Support

[https://github.com/n8n-io/n8n#support](https://github.com/n8n-io/n8n#support)

Need help? Our community forum is the place to get support and connect with other users: [community.n8n.io](https://community.n8n.io)

## License

[https://github.com/n8n-io/n8n#license](https://github.com/n8n-io/n8n#license)

n8n is [fair-code](https://faircode.io) distributed under the [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) and [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md).

- **Source Available**: Always visible source code
- **Self-Hostable**: Deploy anywhere
- **Extensible**: Add your own nodes and functionality

[Enterprise Licenses](mailto:license@n8n.io) available for additional features and support.

Additional information about the license model can be found in the [docs](https://docs.n8n.io/sustainable-use-license/).

## Contributing

[https://github.com/n8n-io/n8n#contributing](https://github.com/n8n-io/n8n#contributing)

Found a bug 🐛 or have a feature idea ✨? Check our [Contributing Guide](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md) for a setup guide & best practices.

## Join the Team

[https://github.com/n8n-io/n8n#join-the-team](https://github.com/n8n-io/n8n#join-the-team)

Want to shape the future of automation? Check out our [job posts](https://n8n.io/careers) and join our team!

## What does n8n mean?

[https://github.com/n8n-io/n8n#what-does-n8n-mean](https://github.com/n8n-io/n8n#what-does-n8n-mean)

**Short answer:** It means "nodemation" and is pronounced as n-eight-n.

**Long answer:** "I get that question quite often (more often than I expected) so I decided it is probably best to answer it here. While looking for a good name for the project with a free domain I realized very quickly that all the good ones I could think of were already taken. So, in the end, I chose nodemation. 'node-' in the sense that it uses a Node-View and that it uses Node.js and '-mation' for 'automation' which is what the project is supposed to help with. However, I did not like how long the name was and I could not imagine writing something that long every time in the CLI. That is when I then ended up on 'n8n'." - **Jan Oberhauser, Founder and CEO, n8n.io**

## About

         Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.       

[n8n.io](https://n8n.io)

### Topics

[cli](https://github.com/topics/cli)[workflow](https://github.com/topics/workflow)[integrations](https://github.com/topics/integrations)[development](https://github.com/topics/development)[automation](https://github.com/topics/automation)[typescript](https://github.com/topics/typescript)[ai](https://github.com/topics/ai)[mcp](https://github.com/topics/mcp)[data-flow](https://github.com/topics/data-flow)[self-hosted](https://github.com/topics/self-hosted)[ipaas](https://github.com/topics/ipaas)[apis](https://github.com/topics/apis)[workflow-automation](https://github.com/topics/workflow-automation)[low-code](https://github.com/topics/low-code)[no-code](https://github.com/topics/no-code)[integration-framework](https://github.com/topics/integration-framework)[n8n](https://github.com/topics/n8n)[low-code-platform](https://github.com/topics/low-code-platform)[mcp-server](https://github.com/topics/mcp-server)[mcp-client](https://github.com/topics/mcp-client)

### Resources

[Readme](https://github.com/n8n-io/n8n#readme-ov-file)

### License

[View license](https://github.com/n8n-io/n8n#License-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/n8n-io/n8n#coc-ov-file)

### Contributing

[Contributing](https://github.com/n8n-io/n8n#contributing-ov-file)

### Security policy

[Security policy](https://github.com/n8n-io/n8n#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/n8n-io/n8n/activity)

[Custom properties](https://github.com/n8n-io/n8n/custom-properties)

### Stars

[189k
        stars](https://github.com/n8n-io/n8n/stargazers)

### Watchers

[1.1k
        watching](https://github.com/n8n-io/n8n/watchers)

### Forks

[57.8k
        forks](https://github.com/n8n-io/n8n/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fn8n-io%2Fn8n&report=n8n-io+%28user%29)

## [Releases
      632](https://github.com/n8n-io/n8n/releases)

[stable
        
          Latest
      
      May 20, 2026](https://github.com/n8n-io/n8n/releases/tag/stable)
[+ 631 releases](https://github.com/n8n-io/n8n/releases)

## [Packages
      0](https://github.com/orgs/n8n-io/packages?repo_name=n8n)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/n8n-io/n8n/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [TypeScript
          91.4%](https://github.com/n8n-io/n8n/search?l=typescript)
- [Vue
          7.3%](https://github.com/n8n-io/n8n/search?l=vue)
- [JavaScript
          0.5%](https://github.com/n8n-io/n8n/search?l=javascript)
- [SCSS
          0.4%](https://github.com/n8n-io/n8n/search?l=scss)
- [Python
          0.3%](https://github.com/n8n-io/n8n/search?l=python)
- [Handlebars
          0.1%](https://github.com/n8n-io/n8n/search?l=handlebars)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026-05-20
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

