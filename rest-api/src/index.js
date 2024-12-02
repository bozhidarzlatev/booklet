import express from 'express';

const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));



app.listen(PORT, () => console.log(`Server is runnig on http://localhost:${PORT}`));