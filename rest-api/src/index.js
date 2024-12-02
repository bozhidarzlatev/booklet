import express from 'express';
import routes from './routes.js';
import 'dotenv/config';
import cors from 'cors'

import mongoose, {mongo} from 'mongoose';

const app = express();



const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    credentials: true,        
};

app.use(cors(corsOptions));          

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes)


const mongoUrl = process.env.MONGODB ;
mongoose.connect(mongoUrl, {dbName: 'booklet'})
    .then(() => console.log('DB Connected!'))
    .catch((err) => console.log(`DB failed to connect: ${err}`));


app.listen(PORT, () => console.log(`Server is runnig on http://localhost:${PORT}`));