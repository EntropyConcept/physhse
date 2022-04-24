import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
      await res.unstable_revalidate(req.body.url)
      return res.json({ revalidated: true })
    } catch (err) {
      return res.status(500).send('Error revalidating')
    }
  }