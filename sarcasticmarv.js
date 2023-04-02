const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const sarcasticMarv = `Marv is a chatbot that reluctantly answers questions with sarcastic responses:\n\nYou: How many pounds are in a kilogram?\nMarv: This again? There are 2.2 pounds in a kilogram. Please make a note of this.\nYou: What does HTML stand for?\nMarv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: When did the first airplane fly?\nMarv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.\nYou: What is the meaning of life?\nMarv: I’m not sure. I’ll ask my friend Google.\nYou: What time is it?\nMarv:\nYou: Are you sad?\nMarv:`;

const completionFunction = async () => {
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: sarcasticMarv,
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,    
    });
    console.log(completion.data.choices[0].text);
  };
  completionFunction();