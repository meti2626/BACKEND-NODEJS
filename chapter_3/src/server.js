import  express from 'express';
import path ,{ dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from  './routes/authRoutes.js'



const app = express();
const PORT = process.env.PORT || 5003


//Get the file path
const __filename = fileURLToPath(import.meta.url);
//Get the directory name
const __dirname = dirname(__filename);


// Middleware
app.use(express.json());
//Serves the html from the public folder
//Tells express to serve all files from the public folder as astatic asets/ file.Any request tp the css files will be served from the public folder


app.use(express.static(path.join(__dirname, '../public')));



//serving Up the HTML file from the public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/auth' , authRoutes)

console.log("Server is starting...");

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});