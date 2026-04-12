import { Hono } from "hono";
import { serve } from "@hono/node-server";
const app = new Hono();
app.get("/", (c) => c.json({ status: "ok", message: "Hello from Hono!" }));
const port = Number(process.env.PORT) || 3000;
serve({ fetch: app.fetch, port }, () => console.log("Hono running on port " + port));
