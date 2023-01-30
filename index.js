const API_KEY = `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`;
const got = require('got');
const prompt = `Artist: Megadeth\n\nLyrics:\n`;

(async () => {
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = {
    "prompt": prompt,
    "max_tokens": 160,
    "temperature": 0.7,
    "frequency_penalty": 0.5
  };
  const headers = {
    'Authorization': `Bearer ${API_KEY}`,
  };

  try {
    const response = await got.post(url, { json: params, headers: headers }).json();
    output = `${prompt}${response.choices[0].text}`;
    console.log(output);
  } catch (err) {
    console.log(err);
  }
})();
