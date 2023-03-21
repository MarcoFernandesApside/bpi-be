import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
// @ts-ignore
import xssClean from "xss-clean";
// @ts-ignore
import hpp from "hpp";
import { UserRouter } from "./routes";
import { CustomErrorHandler } from "./middlewares";

const prisma = new PrismaClient();
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes in milliseconds
  max: 100,
});
const port = process.env.PORT || 3030;
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(xssClean());
app.use(hpp());
app.use(limiter);

app.use("/api", UserRouter);

//Custom error handler must be the last middleware to use it, since we are skipping the default error behavior from express
app.use(CustomErrorHandler);

const boostrap = async () => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

boostrap()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
