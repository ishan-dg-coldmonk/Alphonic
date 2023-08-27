import dotenv from "dotenv";
dotenv.config();
import OpenAI from 'openai';

const openai = new OpenAI();

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0.2,
    });
    if (response) {
      if (response.choices[0].text) {
        return res.status(200).json(response.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `write a detail paragraph about \n${text}`,
      max_tokens: 500,
      temperature: 0.2,
    });
    if (response) {
      if (response.choices[0].text) {
        return res.status(200).json(response.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `Answer question similar to Google Messenger, Alexa and other AIs would answer
      Me: 'what is your name?'
      'yoda is my name'
      Me: ${text}`,
      max_tokens: 300,
      temperature: 0.2,
    });
    if (response) {
      if (response.choices[0].text) {
        return res.status(200).json(response.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "text-davinci-002",
      prompt: `/* convert these instruction into C++ code \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });
    if (response) {
      if (response.choices[0].text) {
        return res.status(200).json(response.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    const image = await openai.images.generate({
      prompt: `generate an image of ${text}`,
      n: 1,
      size: "512x512",
    });
    if (image) {
      if (image.data[0].url) {
        return res.status(200).json(image.data[0].url);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};