import githubAnalysis from '../../../analysis/github-project-data-analysis.json';
import { projectReports } from './reports';
import { surveyStats } from './survey';

const counts = githubAnalysis.counts ?? {};

export const publicCorpusStats = {
  generatedOn: '2026-06-05',
  rawGithubCaptures: counts.raw_captures ?? 0,
  classifiedGithubRepos: counts.classified_repos ?? 0,
  analyzedProjectReports: counts.analyzed_projects ?? 0,
  strictEvolutionRepos: counts.raw_core_evolution ?? 0,
  broadEvolutionRepos: counts.raw_broad_evolution ?? 0,
  publicProjectReports: projectReports.length,
  surveyDisplayPapers: surveyStats.papers,
  painPointSignals: surveyStats.painPoints,
};
