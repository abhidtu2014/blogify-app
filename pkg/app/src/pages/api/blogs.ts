import type { NextApiRequest, NextApiResponse } from 'next'
import { Blog } from '../../interfaces/db'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog>
) {

  // res.status(200).json({ text: 'Hello World!' })
}