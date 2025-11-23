import  express from 'express';

const app = express();
const PORT = process.env.PORT || 5003;

console.log("Server is starting...");

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});