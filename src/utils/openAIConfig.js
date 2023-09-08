import dotenv from 'dotenv'
dotenv.config()

import Configuration from "openai";
import OpenAIApi from 'openai'

const configuration = new Configuration({
    apiKey: process.env.NEW_API_KEY
})

const openai = new OpenAIApi(configuration)

export { openai }