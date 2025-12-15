 const http = require('http');
 const {readFileSync} = require('fs')

// get all files 
const homePage = readFileSync('./2-express-tutorial/navbar-app/index.html')
const homeStyles = readFileSync('./2-express-tutorial/navbar-app/style.css')
const homeImage = readFileSync('./2-express-tutorial/navbar-app/logo.svg')
const homeLogic = readFileSync('./2-express-tutorial/navbar-app/browser-app.js')

 const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url)
  if (url=== '/')   
  {
    res.writeHead(200,{'content-type':'text/html'})
      res.write(homePage)
      res.end()
  }
 //about page 
else if (url === '/about')
{
     res.writeHead(200,{'content-type':'text/html'})
      res.write('<h1>about page<h1>')
      res.end()
}

else if (url === '/style.css')
{
     res.writeHead(200,{'content-type':'text/css'})
      res.write(homeStyles)
      res.end()
}

else if (url === '/browser-app.js')
{
     res.writeHead(200,{'content-type':'text/javascript'})
      res.write(homeLogic)
      res.end()
}

else if (url === '/logo.svg')
{
     res.writeHead(200,{'content-type':'image/svg+xml'})
      res.write(homeImage)
      res.end()
}

  else{
    res.writeHead(404,{'content-type':'text/html'})
      res.write('<h1>page not found<h1>')
      res.end()
  }     
 });

 server.listen(5000)
