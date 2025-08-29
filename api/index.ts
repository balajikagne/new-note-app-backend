import serverless from "serverless-http";
import app from "../src/index"; // path to your Express app

export default serverless(app);
