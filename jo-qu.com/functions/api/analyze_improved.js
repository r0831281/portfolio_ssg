// functions/api/analyze.js
// This file will be deployed as a Cloudflare Pages Function

// Define the definitions for the AI model to use
// This object and the generatePrompt function are now located here in the backend.
const definitions = {
  "Common Bad-Faith Tactics": {
    "Well Actually": {
      description: "Correcting a minor, often irrelevant, detail to feel superior or derail the main point. This tactic avoids engaging with the substance of an argument by fixating on a technicality. It's a form of intellectual nitpicking.",
      example: "You said the new policy would help people in the city, but you used the wrong fiscal year data. Therefore, your whole argument is invalid.",
      response: "That doesn't change the core argument. Let's focus on the main point."
    },
    "Gish Gallop": {
      description: "Overwhelming a conversation with a rapid-fire series of shallow, often misleading, arguments. The goal is to flood the other person with so many points that they can't possibly respond to all of them, creating the illusion of a win.",
      example: "You want to talk about climate change? Well, what about the sun's cycles, and the volcanoes, and the polar bear population isn't actually shrinking, and the ice caps are growing in one place, and also, what about the economic impact on developing nations?",
      response: "You've made many points quickly. Let's slow down. Pick the strongest one, and we'll discuss that properly."
    },
    "Whataboutism": {
      description: "Deflecting a criticism by accusing the other party of a different, unrelated wrongdoing. It's a way of avoiding responsibility and shifting the focus away from the original topic.",
      example: "You're criticizing our country's human rights record? What about the human rights abuses in [another country]?",
      response: "That's an entirely different issue. We can discuss that after we finish this conversation, but it doesn't excuse what we're talking about now."
    },
    "Straw Man": {
      description: "Misrepresenting or exaggerating an opponent's argument to make it easier to attack. Instead of debating the actual point, the person attacks a weaker, distorted version they've created themselves.",
      example: "I think we should invest more in renewable energy. -> So you want to bankrupt our economy and leave millions without jobs by immediately shutting down all fossil fuel plants? That's an irresponsible position.",
      response: "That's not what I said. My point was to invest more in renewables, not to shut everything down immediately. Please respond to the actual point I made."
    },
    "Mocking or Sarcasm": {
      description: "Using mockery, sarcasm, or ridicule to dismiss an argument without engaging it. This tactic is aimed at ego defense and emotional manipulation, not dialogue. It's a way to belittle the other person instead of addressing their ideas.",
      example: "Oh, I'm so sorry, did my perfectly logical argument hurt your feelings? Maybe you should go back to your safe space.",
      response: "If you have a real point to make, please make it without the sarcasm."
    },
    "Condescension": {
      description: "Pretending to 'educate' someone from a position of intellectual superiority rather than engaging in a respectful discussion. This is a status game that undermines genuine exchange.",
      example: "You clearly don't understand the intricacies of economic policy, so let me break it down for you...",
      response: "Instead of talking down to me, explain what you disagree with in a straightforward way."
    },
    "Shifting the Burden of Proof": {
      description: "Making a claim but demanding that others disprove it, rather than providing evidence to support it. The person making an extraordinary claim is responsible for backing it up.",
      example: "I'm telling you, this new supplement cures cancer. Prove that it doesn't work.",
      response: "You made the claim — the burden of proof is on you to back it up with evidence."
    },
    "False Equivalence": {
      description: "Pretending that two two things are the same or equally serious when they are not. This tactic is used to minimize a serious issue by comparing it to a minor one.",
      example: "You think my minor exaggeration is a lie? That's just as bad as the time that politician lied to the whole country!",
      response: "That comparison doesn't hold up. These two things are not the same."
    },
    "Motte and Bailey": {
      description: "Defending an extreme, controversial claim ('motte') by retreating to a more modest, easily defensible claim ('bailey') when challenged. They then return to the extreme claim once the heat is off.",
      example: "All art created after 1900 is garbage. -> Well, I just mean that some modern art is a bit silly. (Then later returns to original extreme claim).",
      response: "Pick one position and defend it. Are you arguing [extreme claim] or [modest claim]?"
    },
    "Tone Policing": {
      description: "Dismissing a person's argument based on the tone they used to express it, rather than the content of the argument itself. This tactic is used to silence a valid point by labeling it as aggressive or emotional.",
      example: "I hear what you're saying about the systemic issue, but you're being so angry about it that I can't take you seriously.",
      response: "The tone doesn't change the facts I'm presenting. Can you address the substance of my argument?"
    },
    "Cherry Picking": {
      description: "Only presenting selective data or examples that support their own side while ignoring everything that contradicts it. This creates a distorted and incomplete picture.",
      example: "This new drug is amazing! The company's study shows it works for 25% of patients! (Ignoring that it has severe side effects for the other 75%).",
      response: "You're leaving out important context. Lets look at the full picture, not just the parts that support your view."
    },
    "Slippery Slope": {
      description: "Asserting that a single step will inevitably lead to a chain of catastrophic or extreme outcomes, without providing evidence for that chain reaction.",
      example: "If we allow students to have phones in class, they'll become distracted, their grades will drop, they'll never learn to focus, and society will collapse!",
      response: "Let's focus on what's actually being proposed, not an imagined worst-case scenario that may never happen."
    },
    "Appeal to Hypocrisy (Tu quoque)": {
      description: "Rejecting an argument by pointing out that the person making the argument is a hypocrite. This avoids the topic at hand by attacking the person's character.",
      example: "You're telling me to stop smoking? But you used to be a smoker yourself!",
      response: "My personal actions don't invalidate the facts I'm bringing up. Let's stick to the issue."
    },
    "Red Herring": {
      description: "Introducing an unrelated or misleading topic to distract from the original subject. This is a classic diversion tactic to avoid an inconvenient argument.",
      example: "We need to address the city's crumbling infrastructure. -> But have you seen the crime rate lately? That's the real problem here.",
      response: "That's a different issue. Let's stick to the topic at hand."
    },
    "Appeal to Emotion": {
      description: "Using emotional manipulation instead of logical reasoning to win an argument. This includes fear-mongering, guilt-tripping, or appeals to anger rather than facts.",
      example: "If you don't support this policy, you clearly don't care about the children who will suffer!",
      response: "I do care about the welfare of children. Let's look at the evidence about whether this policy will actually help them."
    },
    "Bandwagon Appeal": {
      description: "Arguing that something is correct or good because many people believe it or do it, without providing actual evidence for the claim.",
      example: "Everyone knows that this new diet works. Millions of people can't be wrong!",
      response: "Popular opinion doesn't determine truth. What does the scientific evidence say about this diet's effectiveness?"
    }
  },
  "How to Spot Biased Reporting and Propaganda": {
    "Loaded Language": {
      description: "The use of sensational or emotionally charged words to provoke a reaction rather than to inform. This aims to bypass rational thought and go straight for the gut.",
      example: "A headline that reads 'Government's DISASTROUS new spending plan' instead of 'Government proposes new spending plan.'",
      response: "Watch for words like 'disaster,' 'traitor,' 'miracle,' or 'stunning' that indicate a strong opinion or emotion over a neutral fact."
    },
    "False Balance": {
      description: "Giving fringe or disproven views equal weight to expert consensus. This creates the illusion of a legitimate debate where there isn't one.",
      example: "A news segment about climate change that pits a climate scientist against a random person who claims it's a hoax, as if their opinions have equal validity.",
      response: "Just because a news story presents 'both sides' doesn't mean both are equally valid or supported by evidence."
    },
    "Missing Context": {
      description: "Presenting a fact or statistic without the crucial background information that makes it meaningful. This allows the information to be framed in a misleading way.",
      example: "A report states that a city's violent crime rate increased by 20% this year, but fails to mention the crime rate was at an all-time low last year and is still well below historical averages.",
      response: "Ask yourself: 'What's not being said?' or 'What critical information is being left out of this story?'"
    },
    "Anonymous Sources Abuse": {
      description: "Over-relying on unnamed 'insiders' or 'officials' without corroborating their claims with other evidence. While anonymous sources can be necessary, an over-reliance on them is a red flag.",
      example: "A high-ranking official who wished to remain anonymous told us that the President is planning a secret military action.",
      response: "Be skeptical of a report where every major claim comes from a vague, unnamed source."
    },
    "Agenda Framing": {
      description: "Repeatedly focusing on certain topics while ignoring others. This shapes the public's perception of what is important or newsworthy.",
      example: "A news channel that dedicates 24/7 coverage to one particular scandal while completely ignoring a major economic event or natural disaster.",
      response: "Pay attention to what a news outlet consistently focuses on—and what they consistently ignore."
    },
    "Image Manipulation": {
      description: "Using emotionally charged photos or graphics to create a bias, even if the text itself is neutral. The image can tell a story that the words don't.",
      example: "A story about a political protest uses a photo of a single, aggressive-looking protestor, even though the vast majority of participants were peaceful.",
      response: "A photo of one protester yelling doesn't necessarily represent the mood or actions of the entire protest."
    },
    "Clickbait Titles": {
      description: "Headlines designed to provoke a strong emotional reaction and get clicks, often at the expense of accuracy.",
      example: "You Won't BELIEVE What Scientists Just Discovered!\" instead of a simple, informative headline.",
      response: "If a headline feels sensational or exaggerated, read the actual article carefully before reacting or sharing."
    },
    "Selective Quoting": {
      description: "Taking quotes out of context or only using partial quotes that distort the speaker's intended meaning.",
      example: "Taking 'I think in some cases, this policy could work' and reporting it as 'I think... this policy could work' to show stronger support.",
      response: "Always look for the full context of quotes and be suspicious of partial quotes with ellipses."
    }
  }
};

// Function to generate the prompt for the Gemini API
const generatePrompt = (text, options = {}) => {
  const {
    includeConfidenceScore = true,
    allowCustomTactics = true,
    contextualAnalysis = true,
    severityAssessment = true
  } = options;

  let prompt = `You are an expert analyst specializing in identifying bad-faith rhetoric, logical fallacies, and biased reporting. Analyze the following text with nuance and flexibility.

ANALYSIS GOALS:
1. Identify known bad-faith tactics and biased reporting techniques
2. Assess the overall tone and context of the communication
3. Provide constructive feedback for better discourse
4. Be sensitive to cultural context and varying communication styles

INSTRUCTIONS:
- Look beyond exact pattern matches - focus on underlying intent and effect
- Consider the severity and impact of each identified issue
- If you identify tactics not in the predefined list, include them as "Custom" tactics
- Provide confidence scores for your assessments
- Consider whether apparent "tactics" might be unintentional or cultural differences
- Focus on the most significant issues rather than minor infractions
- Be nuanced - not every strong statement is a bad-faith tactic

PREDEFINED TACTICS AND RESPONSES:

`;

  for (const category in definitions) {
    prompt += `Category: ${category}\n`;
    for (const tacticName in definitions[category]) {
      const tactic = definitions[category][tacticName];
      prompt += `  - Tactic: ${tacticName}\n`;
      prompt += `    Description: ${tactic.description}\n`;
      prompt += `    Example: "${tactic.example}"\n`;
      prompt += `    Suggested Response: "${tactic.response}"\n`;
    }
    prompt += "\n";
  }

  prompt += `
INPUT TEXT TO ANALYZE:
"${text}"

ANALYSIS APPROACH:
1. Read the entire text for context and overall tone
2. Identify specific instances of problematic rhetoric
3. Assess the intent behind each instance (malicious vs. unintentional)
4. Consider the potential impact on productive discourse
5. Provide balanced, constructive feedback

RESPONSE FORMAT:
Return a JSON object with the following structure:

{
  "overallAssessment": {
    "tone": "constructive|neutral|adversarial|hostile",
    "primaryIssues": ["list of main problems identified"],
    "context": "brief analysis of the communication style and intent",
    "severity": "low|medium|high",
    "generalQuality": "Description of the overall discourse quality"
  },
  "identifiedTactics": [
    {
      "tacticName": "Name from predefined list or 'Custom: [description]'",
      "category": "Common Bad-Faith Tactics|How to Spot Biased Reporting and Propaganda|Custom",
      "explanation": "Detailed explanation of why this qualifies as the tactic",
      "exampleFromInput": "Exact quote from the input text",
      "suggestedResponse": "Contextual response suggestion adapted to this specific case",
      "confidenceScore": 0.85,
      "severity": "low|medium|high",
      "intent": "likely_intentional|possibly_unintentional|unclear",
      "impact": "Description of how this affects productive discourse",
      "startPosition": "approximate character position where this occurs (optional)"
    }
  ],
  "constructiveFeedback": {
    "strengths": ["positive aspects of the communication"],
    "improvements": ["specific suggestions for better discourse"],
    "alternatives": ["better ways to express the same points"],
    "contextualNotes": ["any important context that affects the analysis"]
  },
  "summary": "Brief overall assessment of the text's discourse quality and main recommendations"
}

IMPORTANT GUIDELINES:
- If no significant tactics are found, still provide the overallAssessment and constructiveFeedback sections
- Be proportionate - minor rhetorical flourishes shouldn't be flagged as serious bad-faith tactics
- Consider cultural and contextual differences in communication styles
- Focus on tactics that genuinely harm productive discourse
- Provide actionable, specific feedback rather than generic advice`;

  return prompt;
};

// Enhanced error handling and response processing
const processGeminiResponse = (result) => {
  if (!result.candidates || result.candidates.length === 0) {
    return {
      overallAssessment: {
        tone: "neutral",
        primaryIssues: [],
        context: "Unable to analyze text due to API limitations",
        severity: "low",
        generalQuality: "Analysis could not be completed"
      },
      identifiedTactics: [],
      constructiveFeedback: {
        strengths: [],
        improvements: ["Text could not be analyzed - please try again"],
        alternatives: [],
        contextualNotes: ["API response was incomplete"]
      },
      summary: "Analysis could not be completed due to technical issues"
    };
  }

  const candidate = result.candidates[0];
  if (!candidate.content || !candidate.content.parts || candidate.content.parts.length === 0) {
    return processGeminiResponse({ candidates: [] }); // Use fallback
  }

  try {
    const jsonString = candidate.content.parts[0].text;
    const parsedJson = JSON.parse(jsonString);
    
    // Validate the response structure
    if (!parsedJson.overallAssessment) {
      parsedJson.overallAssessment = {
        tone: "neutral",
        primaryIssues: [],
        context: "Response structure was incomplete",
        severity: "low",
        generalQuality: "Analysis was partial"
      };
    }
    
    if (!parsedJson.identifiedTactics) {
      parsedJson.identifiedTactics = [];
    }
    
    if (!parsedJson.constructiveFeedback) {
      parsedJson.constructiveFeedback = {
        strengths: [],
        improvements: [],
        alternatives: [],
        contextualNotes: []
      };
    }
    
    if (!parsedJson.summary) {
      parsedJson.summary = "Analysis completed with limited information";
    }
    
    return parsedJson;
  } catch (parseError) {
    console.error("JSON parsing error:", parseError);
    return processGeminiResponse({ candidates: [] }); // Use fallback
  }
};

// Cloudflare Pages Function handler
export async function onRequest(context) {
  // context.env contains environment variables, including secrets
  const GEMINI_API_KEY = context.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: "API key not configured." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (context.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const requestBody = await context.request.json();
    const { inputText, options = {} } = requestBody;

    if (!inputText || inputText.trim().length === 0) {
      return new Response(JSON.stringify({ 
        error: "Input text is required and cannot be empty." 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate the full prompt here in the backend
    const fullPrompt = generatePrompt(inputText, options);

    const chatHistory = [{ role: "user", parts: [{ text: fullPrompt }] }];

    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            overallAssessment: {
              type: "OBJECT",
              properties: {
                tone: { type: "STRING" },
                primaryIssues: { type: "ARRAY", items: { type: "STRING" } },
                context: { type: "STRING" },
                severity: { type: "STRING" },
                generalQuality: { type: "STRING" }
              },
              required: ["tone", "primaryIssues", "context", "severity"]
            },
            identifiedTactics: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  tacticName: { type: "STRING" },
                  category: { type: "STRING" },
                  explanation: { type: "STRING" },
                  exampleFromInput: { type: "STRING" },
                  suggestedResponse: { type: "STRING" },
                  confidenceScore: { type: "NUMBER" },
                  severity: { type: "STRING" },
                  intent: { type: "STRING" },
                  impact: { type: "STRING" },
                  startPosition: { type: "STRING" }
                },
                required: ["tacticName", "explanation", "suggestedResponse", "confidenceScore", "severity"]
              }
            },
            constructiveFeedback: {
              type: "OBJECT",
              properties: {
                strengths: { type: "ARRAY", items: { type: "STRING" } },
                improvements: { type: "ARRAY", items: { type: "STRING" } },
                alternatives: { type: "ARRAY", items: { type: "STRING" } },
                contextualNotes: { type: "ARRAY", items: { type: "STRING" } }
              },
              required: ["strengths", "improvements", "alternatives"]
            },
            summary: { type: "STRING" }
          },
          required: ["overallAssessment", "identifiedTactics", "constructiveFeedback", "summary"]
        },
        temperature: 0.3, // Lower temperature for more consistent analysis
        maxOutputTokens: 8192 // Allow for detailed responses
      }
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

    let retries = 0;
    const maxRetries = 5;
    const baseDelay = 1000; // 1 second

    while (retries < maxRetries) {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        if (response.status === 429) { // Too Many Requests
          const delay = baseDelay * Math.pow(2, retries) + Math.random() * 1000; // Exponential backoff with jitter
          console.warn(`Rate limit hit. Retrying in ${delay / 1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          retries++;
          continue; // Retry the request
        } else {
          const errorText = await response.text();
          console.error(`Gemini API error: ${response.status} - ${errorText}`);
          return new Response(JSON.stringify({ 
            error: `Gemini API error: ${response.status}`,
            details: errorText.substring(0, 200) // Limit error details
          }), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      const result = await response.json();
      const processedResponse = processGeminiResponse(result);
      
      return new Response(JSON.stringify(processedResponse), {
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache' // Prevent caching of analysis results
        },
      });
    }

    return new Response(JSON.stringify({ 
      error: "Failed to analyze text after multiple retries due to rate limiting or network issues." 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    console.error("Pages Function error:", e);
    return new Response(JSON.stringify({ 
      error: `Internal server error: ${e.message}`,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
