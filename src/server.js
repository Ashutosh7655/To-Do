import express from 'express';
import env from '.env';

const app=express();
const PORT=3000||process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT} `);
})