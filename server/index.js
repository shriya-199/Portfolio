import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5050;

app.use(cors({ origin: true }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  console.log("New contact request:", {
    name,
    email,
    company: company || "N/A",
    message,
    receivedAt: new Date().toISOString(),
  });

  return res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
