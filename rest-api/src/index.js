import express from 'express';
import routes from './routes.js';
import 'dotenv/config';

import mongoose, {mongo} from 'mongoose';

const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}));
app.use(routes)


const mongoUrl = process.env.MONGODB ;
mongoose.connect(mongoUrl, {dbName: 'booklet'})
    .then(() => console.log('DB Connected!'))
    .catch((err) => console.log(`DB failed to connect: ${err}`));


app.listen(PORT, () => console.log(`Server is runnig on http://localhost:${PORT}`));