import { openai } from "../utils/openAIConfig.js";

async function getDietPlan(req, res) {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ message: "Search value can't be empty" });
  }

  try {
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 350,
    });
    const dietplan = completion.choices[0].text;
    res.status(200).send(dietplan);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error generating diet plan", error: error });
  }
}

export { getDietPlan };
