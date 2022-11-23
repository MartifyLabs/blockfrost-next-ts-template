import type { NextApiRequest, NextApiResponse } from "next";
import { BlockfrostProvider } from "@martifylabs/mesh";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const blockchainProvider = new BlockfrostProvider(
    process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY!
  );
  const results = await blockchainProvider.fetchProtocolParameters();

  res.status(200).json(results);
}
