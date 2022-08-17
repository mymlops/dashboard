// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
  methods: ["GET"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// From https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

type HealthResponse = {
  status: "OK";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  await runMiddleware(req, res, cors);

  res.status(200).json({ status: "OK" });
}
