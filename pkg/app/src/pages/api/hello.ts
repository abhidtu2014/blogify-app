import type { NextApiRequest, NextApiResponse } from 'next'
import { HelloWorldRes } from '../../interfaces/HelloWorld'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloWorldRes>
) {
  res.status(200).json({ text: 'Hello World!' })
}