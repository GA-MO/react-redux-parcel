import Bundler from 'parcel-bundler'
import express from 'express'
import path from 'path'
import opn from 'opn'

const PORT = 3000
const app = express()
const entryFiles = path.join(__dirname, './index.html')
let shouldOpenBrowser = true

const options = {
  watch: true
}

const bundler = new Bundler(entryFiles, options)

bundler.on('buildEnd', (entryPoints) => {
  console.log(`Your server available at http://localhost:${PORT}`)
  shouldOpenBrowser && opn(`http://localhost:${PORT}`)
  shouldOpenBrowser = false
})

app.use('/JSONMockUp', express.static('JSONMockUp'))

app.use(bundler.middleware())

app.listen(PORT)
