import { openai } from "../utils/openAIConfig.js";

const getDietPlan = async(req,res) => {
    try {
        const completion = await openai.completions.create({
            model: "text-davinci-003",
            prompt: req.body.prompt,
            max_tokens: 3000,
        })
        const dietplan = completion.choices[0].text
        res.status(200).send(dietplan)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error generating diet plan' });
    }
}

export { getDietPlan }