import path from 'path'
import Express from 'express'
import { renderToSring } from 'react-dom/server'
import { match } from 'react-router'

const app = new Express()
app.set('view engine', 'ejs')
app.set('views', __dirname)

// app.get('*', (req, res) => {})

const port = process.env.PORT || 3750
const env = process.env.NODE_ENV || 'production'
server.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.info(`[${env}] listening on ${port}`)
})