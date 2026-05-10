// src/sim.ts
import { readFileSync } from "fs";
import { resolve } from "path";

// read the json file
const raw = readFileSync(
  resolve("../assets/openapi_json/3.2_tags.json"),
  "utf-8",
);
// attempt to read the unstructured json
const spec = JSON.parse(raw);
console.log(spec.info.title);
for (const path of Object.keys(spec.paths)) {
  console.log(`\`${path}\` \tmethods: ${Object.keys(spec.paths[path])}`);
}
