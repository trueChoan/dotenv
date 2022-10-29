require('dotenv').config()

const http = require('http')
const port = process.env.PORT

const requestHandler = (req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    res.end(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGAGE}.`)
  } else {
    res.end('page not found')
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});