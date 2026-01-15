import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl",
      {
        input: {
          prompt,
          num_frames: 24
        }
      }
    );

    res.status(200).json({ video: output[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
