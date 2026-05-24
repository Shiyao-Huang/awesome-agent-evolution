# I made an MCP Agent That Finds Jobs Based on Your LinkedIn Profile

- URL: https://news.ycombinator.com/item?id=44107993
- Platform: Hacker News
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "MCP agents"

## Raw Content

## Show HN: I made an MCP Agent That Finds Jobs Based on Your LinkedIn Profile | Hacker News

**Source**: https://news.ycombinator.com/item?id=44107993

---

| Hacker Newsnew | past | comments | ask | show | jobs | submitlogin |  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Show HN: I made an MCP Agent That Finds Jobs Based on Your LinkedIn Profile6 points by Arindam1729 11 months ago  | hide | past | favorite | 5 commentsRecently, I was exploring the OpenAI Agents SDK and building MCP agents and agentic Workflows.To implement my learnings, I thought, why not solve a real, common problem?So I built this multi-agent job search workflow that takes a LinkedIn profile as input and finds personalized job opportunities based on your experience, skills, and interests.I used:- OpenAI Agents SDK to orchestrate the multi-agent workflow
- Bright Data MCP server for scraping LinkedIn profiles & YC jobs.
- Nebius AI models for fast + cheap inference
- Streamlit for UI(The project isn't that complex - I kept it simple, but it's 100% worth it to understand how multi-agent workflows work with MCP servers)Here's what it does:- Analyzes your LinkedIn profile (experience, skills, career trajectory)
- Scrapes YC job board for current openings
- Matches jobs based on your specific background
- Returns ranked opportunities with direct apply linksHere's a walkthrough of how I built it: https://www.youtube.com/watch?v=zNTWmw72BDsThe Code is public too: https://github.com/Arindam200/awesome-ai-apps/tree/main/adva...Give it a try and let me know how the job matching works for your profile!
toomuchtodo 11 months ago  | next [–]
Can it work with https://hiring.cafe? ie is the search target pluggable?Arindam1729 11 months ago  | parent | next [–]
Yes, it can work with that.Search target is dynamic, you can just mention that in the prompt as a Source for finding jobs, and the agent will find jobs from it.studio1 11 months ago  | prev | next [–]
Curious to know why you choose brightdata mcp server? there are other options like firecrawl?tomasen9987 11 months ago  | prev [–]
This is interesting, But what job boards are you targeting? Only YC ones?Can We add more job portals?Arindam1729 11 months ago  | parent [–]
I have used YC Job boards for the Example, You can use different job boards like Wellfound and others. Just mention it in the prompt as a source, and it will work. |  |  | Show HN: I made an MCP Agent That Finds Jobs Based on Your LinkedIn Profile |  | 6 points by Arindam1729 11 months ago  | hide | past | favorite | 5 comments |  | Recently, I was exploring the OpenAI Agents SDK and building MCP agents and agentic Workflows.To implement my learnings, I thought, why not solve a real, common problem?So I built this multi-agent job search workflow that takes a LinkedIn profile as input and finds personalized job opportunities based on your experience, skills, and interests.I used:- OpenAI Agents SDK to orchestrate the multi-agent workflow
- Bright Data MCP server for scraping LinkedIn profiles & YC jobs.
- Nebius AI models for fast + cheap inference
- Streamlit for UI(The project isn't that complex - I kept it simple, but it's 100% worth it to understand how multi-agent workflows work with MCP servers)Here's what it does:- Analyzes your LinkedIn profile (experience, skills, career trajectory)
- Scrapes YC job board for current openings
- Matches jobs based on your specific background
- Returns ranked opportunities with direct apply linksHere's a walkthrough of how I built it: https://www.youtube.com/watch?v=zNTWmw72BDsThe Code is public too: https://github.com/Arindam200/awesome-ai-apps/tree/main/adva...Give it a try and let me know how the job matching works for your profile! | toomuchtodo 11 months ago  | next [–]
Can it work with https://hiring.cafe? ie is the search target pluggable? |  |  | toomuchtodo 11 months ago  | next [–]
Can it work with https://hiring.cafe? ie is the search target pluggable? | Arindam1729 11 months ago  | parent | next [–]
Yes, it can work with that.Search target is dynamic, you can just mention that in the prompt as a Source for finding jobs, and the agent will find jobs from it. |  |  | Arindam1729 11 months ago  | parent | next [–]
Yes, it can work with that.Search target is dynamic, you can just mention that in the prompt as a Source for finding jobs, and the agent will find jobs from it. | studio1 11 months ago  | prev | next [–]
Curious to know why you choose brightdata mcp server? there are other options like firecrawl? |  |  | studio1 11 months ago  | prev | next [–]
Curious to know why you choose brightdata mcp server? there are other options like firecrawl? | tomasen9987 11 months ago  | prev [–]
This is interesting, But what job boards are you targeting? Only YC ones?Can We add more job portals? |  |  | tomasen9987 11 months ago  | prev [–]
This is interesting, But what job boards are you targeting? Only YC ones?Can We add more job portals? | Arindam1729 11 months ago  | parent [–]
I have used YC Job boards for the Example, You can use different job boards like Wellfound and others. Just mention it in the prompt as a source, and it will work. |  |  | Arindam1729 11 months ago  | parent [–]
I have used YC Job boards for the Example, You can use different job boards like Wellfound and others. Just mention it in the prompt as a source, and it will work. |
|  |  | Show HN: I made an MCP Agent That Finds Jobs Based on Your LinkedIn Profile |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 6 points by Arindam1729 11 months ago  | hide | past | favorite | 5 comments |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Recently, I was exploring the OpenAI Agents SDK and building MCP agents and agentic Workflows.To implement my learnings, I thought, why not solve a real, common problem?So I built this multi-agent job search workflow that takes a LinkedIn profile as input and finds personalized job opportunities based on your experience, skills, and interests.I used:- OpenAI Agents SDK to orchestrate the multi-agent workflow
- Bright Data MCP server for scraping LinkedIn profiles & YC jobs.
- Nebius AI models for fast + cheap inference
- Streamlit for UI(The project isn't that complex - I kept it simple, but it's 100% worth it to understand how multi-agent workflows work with MCP servers)Here's what it does:- Analyzes your LinkedIn profile (experience, skills, career trajectory)
- Scrapes YC job board for current openings
- Matches jobs based on your specific background
- Returns ranked opportunities with direct apply linksHere's a walkthrough of how I built it: https://www.youtube.com/watch?v=zNTWmw72BDsThe Code is public too: https://github.com/Arindam200/awesome-ai-apps/tree/main/adva...Give it a try and let me know how the job matching works for your profile! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| toomuchtodo 11 months ago  | next [–]
Can it work with https://hiring.cafe? ie is the search target pluggable? |  |  | toomuchtodo 11 months ago  | next [–]
Can it work with https://hiring.cafe? ie is the search target pluggable? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | toomuchtodo 11 months ago  | next [–]
Can it work with https://hiring.cafe? ie is the search target pluggable? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Arindam1729 11 months ago  | parent | next [–]
Yes, it can work with that.Search target is dynamic, you can just mention that in the prompt as a Source for finding jobs, and the agent will find jobs from it. |  |  | Arindam1729 11 months ago  | parent | next [–]
Yes, it can work with that.Search target is dynamic, you can just mention that in the prompt as a Source for finding jobs, and the agent will find jobs from it. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Arindam1729 11 months ago  | parent | next [–]
Yes, it can work with that.Search target is dynamic, you can just mention that in the prompt as a Source for finding jobs, and the agent will find jobs from it. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| studio1 11 months ago  | prev | next [–]
Curious to know why you choose brightdata mcp server? there are other options like firecrawl? |  |  | studio1 11 months ago  | prev | next [–]
Curious to know why you choose brightdata mcp server? there are other options like firecrawl? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | studio1 11 months ago  | prev | next [–]
Curious to know why you choose brightdata mcp server? there are other options like firecrawl? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| tomasen9987 11 months ago  | prev [–]
This is interesting, But what job boards are you targeting? Only YC ones?Can We add more job portals? |  |  | tomasen9987 11 months ago  | prev [–]
This is interesting, But what job boards are you targeting? Only YC ones?Can We add more job portals? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | tomasen9987 11 months ago  | prev [–]
This is interesting, But what job boards are you targeting? Only YC ones?Can We add more job portals? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Arindam1729 11 months ago  | parent [–]
I have used YC Job boards for the Example, You can use different job boards like Wellfound and others. Just mention it in the prompt as a source, and it will work. |  |  | Arindam1729 11 months ago  | parent [–]
I have used YC Job boards for the Example, You can use different job boards like Wellfound and others. Just mention it in the prompt as a source, and it will work. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | Arindam1729 11 months ago  | parent [–]
I have used YC Job boards for the Example, You can use different job boards like Wellfound and others. Just mention it in the prompt as a source, and it will work. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
Search: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
