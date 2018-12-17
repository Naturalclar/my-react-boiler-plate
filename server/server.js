import Express from 'express'
import Path from 'path'

const app = new Express()
const port = process.env.PORT || 3000

app.use('/', Express.static(Path.join(__dirname, '../public')))
app.get('*', (req, res) => {
  res.sendFile(Path.resolve(__dirname, '../public', 'index.html'))
})

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.log(`Server running at localhost:${port}`)
  }
})
