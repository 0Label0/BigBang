import dotenv from 'dotenv'

dotenv.config()

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'pruebasdb2',
  MONGO_USER: process.env.MONGO_USER || 'admin',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || '1234',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  PORT: process.env.PORT || 1234
}
