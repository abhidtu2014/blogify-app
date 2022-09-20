import type { NextApiRequest, NextApiResponse } from 'next';
import admin from './firebase';

import { Blog } from '../../interfaces/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Blog>) {
  if (req.method == 'POST') {
    const firebase = admin.firestore();
    const { id, title, author, text, createdAt, owner} = req.body;
    const date = admin.firestore.Timestamp.fromDate(new Date());
    const data = { id, title, author, text, owner, createdAt: createdAt ?? date, updatedAt: date };
    console.log('Incoming Data', {data})

    return new Promise((resolve, reject) => {
      firebase
        .doc(`blogs/${id}`)
        .set({...data})
        .then(() => {
          res.status(200);
          res.json(data as Blog);
          res.end();
          resolve(data);
        })
        .catch(e => {
          console.log(e);
          res.status(405).json(e);
          res.end();
          reject(e);
        });
    });
  }
  res.status(403);
  res.statusMessage = `${req.method} Not Allowed on this route`;
  res.end();
}
