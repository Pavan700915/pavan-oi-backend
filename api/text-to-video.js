import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl",
      {
        input: { prompt }
      }
    );

    res.status(200).json({ video: output[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
