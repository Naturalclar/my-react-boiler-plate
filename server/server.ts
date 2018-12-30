import express from 'express'
import Path from 'path'

type Port = number | string

const app = express()
const port: Port = process.env.PORT || 3000

app.use('/', express.static(Path.join(__dirname, '../public')))
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(Path.resolve(__dirname, '../public', 'index.html'))
})

app.listen(port, (error: Error) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`Server running at localhost:${port}`)
  }
})
