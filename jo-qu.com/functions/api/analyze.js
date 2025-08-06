// functions/api/analyze.js
// This file will be deployed as a Cloudflare Pages Function

// Define the definitions for the AI model to use
// This object and the generatePrompt function are now located here in the backend.
const definitions = {
  "Common Bad-Faith Tactics": {
    "Well Actually": {
      description: "Correcting a minor, often irrelevant, detail to feel superior or derail the main point. This tactic avoids engaging with the substance of an argument by fixating on a technicality. It’s a form of intellectual nitpicking.",
      example: "You said the new policy would help people in the city, but you used the wrong fiscal year data. Therefore, your whole argument is invalid.",
      response: "That doesn’t change the core argument. Let's focus on the main point."
    },
    "Gish Gallop": {
      description: "Overwhelming a conversation with a rapid-fire series of shallow, often misleading, arguments. The goal is to flood the other person with so many points that they can't possibly respond to all of them, creating the illusion of a win.",
      example: "You want to talk about climate change? Well, what about the sun's cycles, and the volcanoes, and the polar bear population isn't actually shrinking, and the ice caps are growing in one place, and also, what about the economic impact on developing nations?",
      response: "You’ve made many points quickly. Let’s slow down. Pick the strongest one, and we'll discuss that properly."
    },
    "Whataboutism": {
      description: "Deflecting a criticism by accusing the other party of a different, unrelated wrongdoing. It's a way of avoiding responsibility and shifting the focus away from the original topic.",
      example: "You're criticizing our country's human rights record? What about the human rights abuses in [another country]?",
      response: "That's an entirely different issue. We can discuss that after we finish this conversation, but it doesn't excuse what we're talking about now."
    },
    "Straw Man": {
      description: "Misrepresenting or exaggerating an opponent's argument to make it easier to attack. Instead of debating the actual point, the person attacks a weaker, distorted version they’ve created themselves.",
      example: "I think we should invest more in renewable energy. -> So you want to bankrupt our economy and leave millions without jobs by immediately shutting down all fossil fuel plants? That’s an irresponsible position.",
      response: "That’s not what I said. My point was to invest more in renewables, not to shut everything down immediately. Please respond to the actual point I made."
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
      response: "Let’s focus on what’s actually being proposed, not an imagined worst-case scenario that may never happen."
    },
    "Appeal to Hypocrisy (Tu quoque)": {
      description: "Rejecting an argument by pointing out that the person making the argument is a hypocrite. This avoids the topic at hand by attacking the person's character.",
      example: "You're telling me to stop smoking? But you used to be a smoker yourself!",
      response: "My personal actions don’t invalidate the facts I’m bringing up. Let's stick to the issue."
    },
    "Red Herring": {
      description: "Introducing an unrelated or misleading topic to distract from the original subject. This is a classic diversion tactic to avoid an inconvenient argument.",
      example: "We need to address the city's crumbling infrastructure. -> But have you seen the crime rate lately? That's the real problem here.",
      response: "That's a different issue. Let's stick to the topic at hand."
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
    }
  }
};

// Function to generate the prompt for the Gemini API
const generatePrompt = (text) => {
  let prompt = `Analyze the following text for bad-faith tactics and biased reporting. Identify any of the following tactics and provide the specific part of the input text that exemplifies it. For each identified tactic, provide its name, a brief explanation, the specific example from the input text, and the suggested response from the list below. If no tactics are found, state that clearly.

Here are the definitions of the tactics and suggested responses:

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
Input Text to Analyze:
"${text}"

Please provide your analysis in a JSON array format. Each object in the array should have 'tacticName', 'explanation', 'exampleFromInput', and 'suggestedResponse' fields. If no tactics are found, return an empty array.

Example JSON structure for a found tactic:
[
  {
    "tacticName": "Straw Man",
    "explanation": "Misrepresenting or exaggerating an opponent's argument to make it easier to attack.",
    "exampleFromInput": "So you want to bankrupt our economy and leave millions without jobs by immediately shutting down all fossil fuel plants?",
    "suggestedResponse": "That’s not what I said. My point was to invest more in renewables, not to shut everything down immediately. Please respond to the actual point I made."
  }
]
`;
  return prompt;
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
    const { inputText } = await context.request.json(); // Get only the inputText from the frontend

    // Generate the full prompt here in the backend
    const fullPrompt = generatePrompt(inputText);

    const chatHistory = [{ role: "user", parts: [{ text: fullPrompt }] }];

    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              tacticName: { type: "STRING" },
              explanation: { type: "STRING" },
              exampleFromInput: { type: "STRING" },
              suggestedResponse: { type: "STRING" }
            },
            required: ["tacticName", "explanation", "suggestedResponse"]
          }
        }
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
          return new Response(JSON.stringify({ error: `Gemini API error: ${response.status} - ${errorText}` }), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const jsonString = result.candidates[0].content.parts[0].text;
        const parsedJson = JSON.parse(jsonString);
        return new Response(JSON.stringify(parsedJson), {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return new Response(JSON.stringify([]), { // Return empty array if no tactics found or unexpected structure
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response(JSON.stringify({ error: "Failed to analyze text after multiple retries due to rate limiting or network issues." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    console.error("Pages Function error:", e);
    return new Response(JSON.stringify({ error: `Internal server error: ${e.message}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
