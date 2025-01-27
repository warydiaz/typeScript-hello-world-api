import express from "express";
import { helloWorldController } from "./controller";

const app = express();
const PORT = 3000;

app.get("/", helloWorldController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
