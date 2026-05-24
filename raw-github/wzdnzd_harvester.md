---
repo: wzdnzd/harvester
url: https://github.com/wzdnzd/harvester
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - wzdnzd/harvester: Intelligent data acquisition framework for GitHub and web sources · GitHub

**Source**: https://github.com/wzdnzd/harvester

---

[Skip to content](https://github.com/wzdnzd/harvester#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[wzdnzd](https://github.com/wzdnzd)

/
**[harvester](https://github.com/wzdnzd/harvester)**

Public

- [Notifications](https://github.com/login?return_to=%2Fwzdnzd%2Fharvester)You must be signed in to change notification settings
- [Fork
    103](https://github.com/login?return_to=%2Fwzdnzd%2Fharvester)
- 
[Star
          546](https://github.com/login?return_to=%2Fwzdnzd%2Fharvester)

[https://github.com/wzdnzd/harvester](https://github.com/wzdnzd/harvester)

[Branches](https://github.com/wzdnzd/harvester/branches)[Tags](https://github.com/wzdnzd/harvester/tags)

[https://github.com/wzdnzd/harvester/branches](https://github.com/wzdnzd/harvester/branches)[https://github.com/wzdnzd/harvester/tags](https://github.com/wzdnzd/harvester/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History56 Commits56 Commits |  |  |  |
| config | config |  |  |
| constant | constant |  |  |
| core | core |  |  |
| examples | examples |  |  |
| manager | manager |  |  |
| refine | refine |  |  |
| search | search |  |  |
| stage | stage |  |  |
| state | state |  |  |
| storage | storage |  |  |
| tools | tools |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README.zh-CN.md | README.zh-CN.md |  |  |
| __init__.py | __init__.py |  |  |
| entrypoint.sh | entrypoint.sh |  |  |
| main.py | main.py |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Harvester - Universal Data Acquisition Framework

[https://github.com/wzdnzd/harvester#harvester---universal-data-acquisition-framework](https://github.com/wzdnzd/harvester#harvester---universal-data-acquisition-framework)

**📖 [中文文档](https://github.com/wzdnzd/harvester/blob/main/README.zh-CN.md) | English | 🔗 [More Tools](https://github.com/wzdnzd/ai-collector)**

A universal, adaptive data acquisition framework designed for comprehensive information acquisition from multiple sources including GitHub, network mapping platforms (FOFA, Shodan), and arbitrary web endpoints. While the current implementation focuses on AI service provider key discovery as a practical example, the framework is architected for extensibility to support diverse data acquisition scenarios.

---

⭐⭐⭐ **If this project helps you, please give it a star!** Your support motivates us to keep improving and adding new features.

---

## Table of Contents

[https://github.com/wzdnzd/harvester#table-of-contents](https://github.com/wzdnzd/harvester#table-of-contents)

- [Key Features](https://github.com/wzdnzd/harvester#key-features)
- [Quick Start](https://github.com/wzdnzd/harvester#quick-start)
- [Architecture](https://github.com/wzdnzd/harvester#architecture)
- [Directory Structure](https://github.com/wzdnzd/harvester#directory-structure)
- [Troubleshooting](https://github.com/wzdnzd/harvester#troubleshooting)
- [Contributing](https://github.com/wzdnzd/harvester#contributing)

## Project Goals

[https://github.com/wzdnzd/harvester#project-goals](https://github.com/wzdnzd/harvester#project-goals)

The system aims to build a **universal data acquisition framework** primarily targeting:

- **GitHub**: Code repositories, issues, commits, and API endpoints
- **Network Mapping Platforms**: 
  - [FOFA](https://fofa.info) - Cyberspace mapping and asset discovery
  - [Shodan](https://www.shodan.io/) - Internet-connected device search engine

- **Arbitrary Web Endpoints**: Custom APIs, web services, and data sources
- **Extensible Architecture**: Plugin-based system for easy integration of new data sources

## Current Data Source Support

[https://github.com/wzdnzd/harvester#current-data-source-support](https://github.com/wzdnzd/harvester#current-data-source-support)

| Data Source | Status | Description |
|---|---|---|
| GitHub API | ✅ Implemented | Full API integration with rate limiting |
| GitHub Web | ✅ Implemented | Web scraping with intelligent parsing |
| FOFA | 🚧 Planned | Cyberspace asset discovery integration |
| Shodan | 🚧 Planned | IoT and network device enumeration |
| Custom APIs | 🚧 Planned | Generic REST/GraphQL API adapter |

## Architecture

[https://github.com/wzdnzd/harvester#architecture](https://github.com/wzdnzd/harvester#architecture)

### Layered Architecture

[https://github.com/wzdnzd/harvester#layered-architecture](https://github.com/wzdnzd/harvester#layered-architecture)

```
graph TB
    %% Entry Layer
    subgraph Entry["Entry Layer"]
        CLI["CLI Interface<br/>(main.py)"]
        App["Application Core<br/>(main.py)"]
    end

    %% Management Layer
    subgraph Management["Management Layer"]
        TaskMgr["Task Manager<br/>(manager/task.py)"]
        Pipeline["Pipeline Manager<br/>(manager/pipeline.py)"]
        WorkerMgr["Worker Manager<br/>(manager/worker.py)"]
        QueueMgr["Queue Manager<br/>(manager/queue.py)"]
        StatusMgr["Status Manager<br/>(manager/status.py)"]
        Shutdown["Shutdown Coordinator<br/>(manager/shutdown.py)"]
    end

    %% Processing Layer
    subgraph Processing["Processing Layer"]
        StageBase["Stage Framework<br/>(stage/base.py)"]
        StageImpl["Stage Implementations<br/>(stage/definition.py)"]
        StageReg["Stage Registry<br/>(stage/registry.py)"]
        StageFactory["Stage Factory<br/>(stage/factory.py)"]
        StageResolver["Dependency Resolver<br/>(stage/resolver.py)"]
    end

    %% Service Layer
    subgraph Service["Service Layer"]
        SearchSvc["Search Service<br/>(search/client.py)"]
        SearchProviders["Search Providers<br/>(search/provider/)"]
        RefineSvc["Query Refinement<br/>(refine/)"]
        RefineEngine["Refine Engine<br/>(refine/engine.py)"]
        RefineOptimizer["Query Optimizer<br/>(refine/optimizer.py)"]
    end

    %% Core Domain Layer
    subgraph Core["Core Domain Layer"]
        Models["Domain Models & Tasks<br/>(core/models.py)"]
        Types["Type System<br/>(core/types.py)"]
        Enums["Enumerations<br/>(core/enums.py)"]
        Metrics["Metrics<br/>(core/metrics.py)"]
        Auth["Authentication<br/>(core/auth.py)"]
    end

    %% Infrastructure Layer
    subgraph Infrastructure["Infrastructure Layer"]
        Config["Configuration<br/>(config/)"]
        Tools["Tools & Utilities<br/>(tools/)"]
        Constants["Constants<br/>(constant/)"]
        Storage["Storage & Persistence<br/>(storage/)"]
    end

    %% State Management Layer
    subgraph StateLayer["State Management Layer"]
        StateCollector["State Collector<br/>(state/collector.py)"]
        StateDisplay["Display Engine<br/>(state/display.py)"]
        StateBuilder["Status Builder<br/>(state/builder.py)"]
        StateModels["State Models<br/>(state/models.py)"]
        StateMonitor["State Monitor<br/>(state/monitor.py)"]
        StateEnums["State Enums<br/>(state/enums.py)"]
        StateTypes["State Types<br/>(state/types.py)"]
    end

    %% External Systems
    subgraph External["External Systems"]
        GitHub["GitHub<br/>(API + Web)"]
        AIServices["AI Service<br/>Providers"]
        FileSystem["File System<br/>(Local Storage)"]
    end

    %% Dependencies (Top-down)
    Entry --> Management
    Management --> Processing
    Processing --> Service
    Service --> Core

    %% Infrastructure dependencies
    Entry -.-> Infrastructure
    Management -.-> Infrastructure
    Processing -.-> Infrastructure
    Service -.-> Infrastructure
    Core -.-> Infrastructure

    %% State management dependencies
    Entry -.-> StateLayer
    Management -.-> StateLayer

    %% External dependencies
    Service --> External
    Infrastructure --> External
```

Loading

### System Architecture Overview

[https://github.com/wzdnzd/harvester#system-architecture-overview](https://github.com/wzdnzd/harvester#system-architecture-overview)

```
graph TB
    %% User Interface Layer
    subgraph UserLayer["User Interface Layer"]
        User[User]
        CLI[Command Line Interface]
        ConfigMgmt[Configuration Management]
    end

    %% Application Management Layer
    subgraph AppLayer["Application Management Layer"]
        MainApp[Main Application]
        TaskManager[Task Manager]
        StatusManager[Status Manager]
        ResourceManager[Resource Manager]
        ShutdownManager[Shutdown Manager]
    end

    %% Core Pipeline Engine
    subgraph PipelineCore["Pipeline Engine"]
        %% Stage Management System
        subgraph StageSystem["Stage Management System"]
            StageRegistry[Stage Registry]
            DependencyResolver[Dependency Resolver]
            StageFactory[Stage Factory]
        end

        %% Queue Management System
        subgraph QueueSystem["Queue Management System"]
            QueueManager[Queue Manager]
            WorkerManager[Worker Manager]
            MonitoringSystem[System Monitor]
        end

        %% Processing Stages
        subgraph ProcessingStages["Processing Stages"]
            SearchStage[Search Stage]
            GatherStage[Gather Stage]
            CheckStage[Check Stage]
            InspectStage[Inspect Stage]
        end
    end

    %% Search Provider Ecosystem
    subgraph ProviderEcosystem["Search Provider Ecosystem"]
        ProviderRegistry[Provider Registry]
        BaseProvider[Base Provider]
        OpenAIProvider[OpenAI-like Provider]
        CustomProviders[Custom Providers]
    end

    %% Advanced Processing Engines
    subgraph ProcessingEngines["Processing Engines"]
        SearchClient[Search Client]

        %% Query Optimization Engine
        subgraph QueryOptimizer["Query Optimization Engine"]
            RefineEngine[Refine Engine]
            RegexParser[Regex Parser]
            SplittabilityAnalyzer[Splittability Analyzer]
            EnumerationOptimizer[Enumeration Optimizer]
            QueryGenerator[Query Generator]
            OptimizationStrategies[Optimization Strategies]

            %% Internal Flow
            RefineEngine --> RegexParser
            RegexParser --> SplittabilityAnalyzer
            SplittabilityAnalyzer --> EnumerationOptimizer
            EnumerationOptimizer --> OptimizationStrategies
            OptimizationStrategies --> QueryGenerator
        end

        ValidationEngine[API Key Validation]
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

