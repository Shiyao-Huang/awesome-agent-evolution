---
repo: legionio/lex-metacognition
url: https://github.com/legionio/lex-metacognition
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - LegionIO-Archive/lex-metacognition: LegionIO agentic cognitive extension: lex-metacognition · GitHub

**Source**: https://github.com/legionio/lex-metacognition

---

[Skip to content](https://github.com/LegionIO-Archive/lex-metacognition#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[LegionIO-Archive](https://github.com/LegionIO-Archive)

/
**[lex-metacognition](https://github.com/LegionIO-Archive/lex-metacognition)**

Public

- [Notifications](https://github.com/login?return_to=%2FLegionIO-Archive%2Flex-metacognition)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FLegionIO-Archive%2Flex-metacognition)
- 
[Star
          0](https://github.com/login?return_to=%2FLegionIO-Archive%2Flex-metacognition)

[https://github.com/LegionIO-Archive/lex-metacognition](https://github.com/LegionIO-Archive/lex-metacognition)

[Branches](https://github.com/LegionIO-Archive/lex-metacognition/branches)[Tags](https://github.com/LegionIO-Archive/lex-metacognition/tags)

[https://github.com/LegionIO-Archive/lex-metacognition/branches](https://github.com/LegionIO-Archive/lex-metacognition/branches)[https://github.com/LegionIO-Archive/lex-metacognition/tags](https://github.com/LegionIO-Archive/lex-metacognition/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History24 Commits24 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| lib/legion/extensions | lib/legion/extensions |  |  |
| spec | spec |  |  |
| .gitignore | .gitignore |  |  |
| .rspec | .rspec |  |  |
| .rubocop.yml | .rubocop.yml |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| Gemfile | Gemfile |  |  |
| Gemfile.lock | Gemfile.lock |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| lex-metacognition.gemspec | lex-metacognition.gemspec |  |  |
| View all files |  |  |  |

## Repository files navigation

# lex-metacognition

[https://github.com/LegionIO-Archive/lex-metacognition#lex-metacognition](https://github.com/LegionIO-Archive/lex-metacognition#lex-metacognition)

Second-order self-model assembly for LegionIO agents. Part of the LegionIO cognitive architecture extension ecosystem (LEX).

## What It Does

[https://github.com/LegionIO-Archive/lex-metacognition#what-it-does](https://github.com/LegionIO-Archive/lex-metacognition#what-it-does)

`lex-metacognition` enables an agent to build an explicit model of its own architecture, capabilities, and current cognitive state. Unlike performance monitoring, metacognition assembles a structured self-representation from live runtime introspection — the agent knowing what it is, what it can do, and what it is doing right now. Maintains a rolling snapshot history for health trending and architecture change detection.

Key capabilities:

- **Runtime introspection**: discovers loaded extensions, maps capabilities, captures tick state
- **Capability map**: groups 200+ known extensions into 8 categories (perception, cognition, memory, etc.)
- **Health trending**: cognitive health score over rolling snapshot history
- **Architecture change detection**: tracks when extensions are loaded or unloaded
- **Natural language self-description**: generates prose narrative from the self-model

## Installation

[https://github.com/LegionIO-Archive/lex-metacognition#installation](https://github.com/LegionIO-Archive/lex-metacognition#installation)

Add to your Gemfile:

```
gem 'lex-metacognition'
```

Or install directly:

```
gem install lex-metacognition
```

## Usage

[https://github.com/LegionIO-Archive/lex-metacognition#usage](https://github.com/LegionIO-Archive/lex-metacognition#usage)

```
require 'legion/extensions/metacognition'

client = Legion::Extensions::Metacognition::Client.new

# Build and cache a self-model
model = client.introspect(tick_results: tick_output)
# => { loaded_extensions: [...], capability_map: { cognition: [...], ... },
#      cognitive_health: 0.92, tick_mode: :full_active }

# Natural language self-description
narrative = client.self_narrative(tick_results: tick_output)
puts narrative[:prose]
# => "I am a brain_modeled cognitive_agent built on LegionIO with 24 extension slots.
#     18 of 24 extensions are active. Operating in full_active mode.
#     Running 12 phases per tick. Cognitive health: excellent (92%)."

# Explain a specific subsystem
info = client.explain_subsystem(subsystem: :memory)

# Architecture summary
client.architecture_overview

# Health trend over time
trend = client.health_trend(limit: 20)

# Detect when extensions changed
client.architecture_changes
```

## Runner Methods

[https://github.com/LegionIO-Archive/lex-metacognition#runner-methods](https://github.com/LegionIO-Archive/lex-metacognition#runner-methods)

| Method | Description |
|---|---|
| introspect | Build and cache a self-model snapshot |
| self_narrative | Build model and generate prose narrative |
| explain_subsystem | Description and current state of a specific subsystem |
| architecture_overview | Capability map with extension counts per category |
| health_trend | Cognitive health scores over last N snapshots |
| architecture_changes | Snapshots where extension set changed |
| metacognition_stats | Snapshot count, latest health, stale flag |

## Development

[https://github.com/LegionIO-Archive/lex-metacognition#development](https://github.com/LegionIO-Archive/lex-metacognition#development)

```
bundle install
bundle exec rspec
bundle exec rubocop
```

## License

[https://github.com/LegionIO-Archive/lex-metacognition#license](https://github.com/LegionIO-Archive/lex-metacognition#license)

MIT

## About

         LegionIO agentic cognitive extension: lex-metacognition       

### Resources

[Readme](https://github.com/LegionIO-Archive/lex-metacognition#readme-ov-file)

### License

[MIT license](https://github.com/LegionIO-Archive/lex-metacognition#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/LegionIO-Archive/lex-metacognition/activity)

[Custom properties](https://github.com/LegionIO-Archive/lex-metacognition/custom-properties)

### Stars

[0
        stars](https://github.com/LegionIO-Archive/lex-metacognition/stargazers)

### Watchers

[0
        watching](https://github.com/LegionIO-Archive/lex-metacognition/watchers)

### Forks

[0
        forks](https://github.com/LegionIO-Archive/lex-metacognition/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FLegionIO-Archive%2Flex-metacognition&report=LegionIO-Archive+%28user%29)

## [Releases](https://github.com/LegionIO-Archive/lex-metacognition/releases)

No releases published

## [Packages
      0](https://github.com/orgs/LegionIO-Archive/packages?repo_name=lex-metacognition)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/LegionIO-Archive/lex-metacognition/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Ruby
          100.0%](https://github.com/LegionIO-Archive/lex-metacognition/search?l=ruby)

     You can’t perform that action at this time.
