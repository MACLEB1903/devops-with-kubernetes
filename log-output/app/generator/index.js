import fs from "node:fs";
import { randomUUID } from "node:crypto";

console.log("Log Generator started.");

setInterval(() => {
  const now = new Date();
  const uuid = randomUUID();
  const log = `${now.toISOString()}: ${uuid}`;

  fs.writeFileSync("log.txt", log);
}, 5000);
