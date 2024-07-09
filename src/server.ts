import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";


async function main() {

    try {

        await mongoose.connect(config.bd_url as string);
        app.listen(config.port, () => {
            console.log(`ClickCraft listening on port ${config.port}`)
          });
        
    } catch (error) {
        console.log(error)
    }

  }

  main();