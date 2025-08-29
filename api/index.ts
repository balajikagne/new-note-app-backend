// api/index.ts
import serverless from "serverless-http";
import app from "../src/index"; // path to your Express app

export default serverless(app); // ✅ Vercel now gets a function
