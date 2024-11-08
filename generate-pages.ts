import * as fs from 'fs'

import { Route } from './src/router/route'

const template = fs.readFileSync('index.html', 'utf-8')

for (const route of Object.values(Route)) {
  const fileName = route.replace(/^\//, '')
  if (fileName === '') {
    continue
  }
  fs.writeFileSync(`${fileName}.html`, template, 'utf-8')
}
