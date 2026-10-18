export const aiOverviewStats = [
  {
    key: 'healthScore',
    title: 'ai-insights.overview.health-score',
    value: '92',
    suffix: '/100',
    description: 'ai-insights.overview.health-score-description',
  },
  {
    key: 'potentialSavings',
    title: 'ai-insights.overview.potential-savings',
    value: '$270',
    suffix: '/mo',
    description: 'ai-insights.overview.potential-savings-description',
  },
  {
    key: 'insightsGenerated',
    title: 'ai-insights.overview.insights-generated',
    value: '2',
    description: 'ai-insights.overview.insights-generated-description',
  },
  {
    key: 'lastAnalysis',
    title: 'ai-insights.overview.last-analysis',
    value: '2d ago',
    description: 'ai-insights.overview.last-analysis-description',
  },
] as const;

export const monthlySummary = {
  score: 92,
  description: 'ai-insights.monthly-summary-description',
  topCategory: 'ai-insights.monthly-summary-top-category',
} as const;

export const savingsTipKeys = [
  'ai-insights.tips.dining',
  'ai-insights.tips.subscriptions',
] as const;

export const recentAnalyses = [
  {
    key: 'savingsTips',
    title: 'ai-insights.analyses.savings-tips',
    date: 'ai-insights.analyses.two-days-ago',
    badge: 'ai-insights.analyses.potential-savings-badge',
  },
  {
    key: 'monthlySummary',
    title: 'ai-insights.analyses.monthly-summary',
    date: 'ai-insights.analyses.one-week-ago',
    badge: 'ai-insights.analyses.health-score-badge',
  },
] as const;
