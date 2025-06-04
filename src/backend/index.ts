import { Probot, ProbotOctokit } from "probot";
import express from "express";
import dotenv from "dotenv";
import { handleWebhookEvents } from "./webhookHandlers";

dotenv.config();

const app = new Probot({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY_PATH ? require("fs").readFileSync(process.env.PRIVATE_KEY_PATH, "utf8") : undefined,
  secret: process.env.WEBHOOK_SECRET,
  Octokit: ProbotOctokit,
});

app.load(handleWebhookEvents);

const server = express();

server.use(express.json());

server.post("/webhook", (req, res) => {
  app.receive({
    id: req.headers["x-github-delivery"] as string,
    name: req.headers["x-github-event"] as string,
    payload: req.body,
  }).then(() => {
    res.status(200).send("OK");
  }).catch((error) => {
    console.error("Error handling webhook:", error);
    res.status(500).send("Error");
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`DevOps Copilot backend listening on port ${port}`);
});
