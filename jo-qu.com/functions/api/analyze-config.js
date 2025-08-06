// functions/api/analyze-config.js
// Configuration options for the text analysis API

export const DEFAULT_ANALYSIS_OPTIONS = {
  // Enable confidence scoring for each identified tactic
  includeConfidenceScore: true,
  
  // Allow identification of custom tactics not in predefined list
  allowCustomTactics: true,
  
  // Provide overall contextual analysis of the communication
  contextualAnalysis: true,
  
  // Assess severity levels of identified issues
  severityAssessment: true,
  
  // Minimum confidence score to include a tactic in results (0.0 - 1.0)
  minimumConfidence: 0.6,
  
  // Focus on high-impact issues vs. comprehensive analysis
  focusOnSignificantIssues: true,
  
  // Include suggestions for alternative phrasings
  includeAlternatives: true,
  
  // Consider cultural and contextual factors
  culturalSensitivity: true
};

export const ANALYSIS_PRESETS = {
  // Quick analysis focusing only on major issues
  quick: {
    includeConfidenceScore: true,
    allowCustomTactics: false,
    contextualAnalysis: false,
    severityAssessment: true,
    minimumConfidence: 0.8,
    focusOnSignificantIssues: true,
    includeAlternatives: false,
    culturalSensitivity: false
  },
  
  // Comprehensive analysis with all features
  comprehensive: {
    includeConfidenceScore: true,
    allowCustomTactics: true,
    contextualAnalysis: true,
    severityAssessment: true,
    minimumConfidence: 0.5,
    focusOnSignificantIssues: false,
    includeAlternatives: true,
    culturalSensitivity: true
  },
  
  // Academic/research focused analysis
  academic: {
    includeConfidenceScore: true,
    allowCustomTactics: true,
    contextualAnalysis: true,
    severityAssessment: true,
    minimumConfidence: 0.7,
    focusOnSignificantIssues: false,
    includeAlternatives: true,
    culturalSensitivity: true
  },
  
  // Media analysis focused on journalistic integrity
  media: {
    includeConfidenceScore: true,
    allowCustomTactics: true,
    contextualAnalysis: true,
    severityAssessment: true,
    minimumConfidence: 0.6,
    focusOnSignificantIssues: true,
    includeAlternatives: false,
    culturalSensitivity: false
  }
};
