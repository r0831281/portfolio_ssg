// Example usage of the improved analyze API
// This demonstrates how the enhanced API can be used from the frontend

// Example 1: Basic usage (default options)
const basicAnalysis = async (text) => {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputText: text
    })
  });
  
  return await response.json();
};

// Example 2: Using custom options
const customAnalysis = async (text) => {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputText: text,
      options: {
        includeConfidenceScore: true,
        allowCustomTactics: true,
        contextualAnalysis: true,
        severityAssessment: true
      }
    })
  });
  
  return await response.json();
};

// Example 3: Processing the enhanced response
const processAnalysisResults = (results) => {
  console.log('Overall Assessment:', results.overallAssessment);
  console.log('Tone:', results.overallAssessment.tone);
  console.log('Severity:', results.overallAssessment.severity);
  
  if (results.identifiedTactics.length > 0) {
    console.log('\nIdentified Issues:');
    results.identifiedTactics.forEach((tactic, index) => {
      console.log(`${index + 1}. ${tactic.tacticName}`);
      console.log(`   Confidence: ${tactic.confidenceScore}`);
      console.log(`   Severity: ${tactic.severity}`);
      console.log(`   Intent: ${tactic.intent}`);
      console.log(`   Quote: "${tactic.exampleFromInput}"`);
      console.log(`   Response: ${tactic.suggestedResponse}`);
      console.log('');
    });
  }
  
  console.log('Constructive Feedback:');
  console.log('Strengths:', results.constructiveFeedback.strengths);
  console.log('Improvements:', results.constructiveFeedback.improvements);
  console.log('Alternatives:', results.constructiveFeedback.alternatives);
  
  console.log('\nSummary:', results.summary);
};

// Example response structure:
const exampleResponse = {
  "overallAssessment": {
    "tone": "adversarial",
    "primaryIssues": ["Straw man arguments", "Loaded language"],
    "context": "Text appears to be from a heated political debate with some inflammatory rhetoric",
    "severity": "medium",
    "generalQuality": "Contains some valid points but undermined by problematic argumentation tactics"
  },
  "identifiedTactics": [
    {
      "tacticName": "Straw Man",
      "category": "Common Bad-Faith Tactics",
      "explanation": "The author misrepresents the opponent's position to make it easier to attack",
      "exampleFromInput": "So you want to completely destroy the economy...",
      "suggestedResponse": "That's not what I said. Let me clarify my actual position...",
      "confidenceScore": 0.85,
      "severity": "high",
      "intent": "likely_intentional",
      "impact": "Derails productive discussion by attacking a position that wasn't actually taken",
      "startPosition": "143"
    }
  ],
  "constructiveFeedback": {
    "strengths": ["Shows passion for the topic", "Raises some valid concerns"],
    "improvements": ["Address actual arguments rather than distorted versions", "Use more neutral language"],
    "alternatives": ["I understand your concern about economic impact. Let me address that specific point..."],
    "contextualNotes": ["Consider that strong emotions about this topic are understandable"]
  },
  "summary": "The text contains several logical fallacies that undermine otherwise valid concerns. Focus on addressing actual arguments and using more measured language for better discourse."
};

export { basicAnalysis, customAnalysis, processAnalysisResults, exampleResponse };
