// development server
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log(`\x1b[1m\x1b[33m%s\x1b[0m`, `-------------------------------------`)
console.log(
  `\x1b[1m\x1b[33m%s\x1b[0m`,
  `⏱️ - The transpilation of threejs is in process, it can take some time.`
)
console.log(`\x1b[1m\x1b[33m%s\x1b[0m`, `-------------------------------------`)

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`✨ Ready on http://localhost:${port} !`)
  })
})
