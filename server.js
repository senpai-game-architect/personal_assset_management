import dotenv from "dotenv";
dotenv.config();

import app from './app.js'
import mongoose from 'mongoose';
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con => {
    console.log("Mongod DB connected!")
}).catch(err => {
    console.log(`ERROR ${err.message}`)
})




// Server Start
const port = process.env.PORT || 5000;
app.listen(port, () => {

    console.log(`Server started at port ${port}`);
});
