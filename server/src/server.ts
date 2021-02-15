import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
app.listen(process.env.API_PORT ?? 3000, () => {
  console.log(`Server listening at port: ${process.env.API_PORT ?? 3000}`);
});