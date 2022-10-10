import {remark} from 'remark';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse'
import {unified} from 'unified';
import {read} from 'to-vfile';
import type { NextApiRequest, NextApiResponse } from 'next'

export async function handler(
    res: NextApiResponse
) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(await read('../_posts/example.md'))

  console.log(String(file))
  return (
    res.status(200).json(String(file))
  )
}