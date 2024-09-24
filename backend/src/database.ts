import mongoose from "mongoose"
import config from "./config";

(async () => {
  try {
    await mongoose.connect(`mongodb://${config.MONGO_HOST}:/${config.MONGO_DATABASE}`, {
      // user: config.MONGO_USER,
      // pass: config.MONGO_PASSWORD
    })

    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})()