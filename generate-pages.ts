import * as fs from 'fs'

import { Route } from './src/router/route'

const template = fs.readFileSync('index.html', 'utf-8')

for (const route of Object.values(Route)) {
  const fileName = route.replace(/^\//, '')
  if (fileName === '') {
    continue
  }
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFileSync(`${fileName}.html`, template, 'utf-8')
}
