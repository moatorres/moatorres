import fs from 'fs'
import path from 'path'

const root = process.cwd()

export const POSTS_PATH = path.join(root, 'posts')

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
