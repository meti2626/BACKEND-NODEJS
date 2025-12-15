 const express = require ('express');
 const path = require('path');
 const app = express();

// whats the difference between  'static' and 'sendFile'?
app.use(express.static('./2-express-tutorial/public'));

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, '2-express-tutorial', 'navbar-app', 'index.html'));
// });

app.all(/.*/, (req,res)=>{
   res.status(404).send('<h1>page not found</h1>');
});

app.listen(5000, ()=>{
    console.log('server is listening on port 5000....');
})

