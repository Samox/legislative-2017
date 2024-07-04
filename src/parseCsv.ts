import * as fs from "fs";
import * as path from "path";
const csv = require("csv-parser");

export interface ElectionData {
  "Code département": string;
  "Libellé département": string;
  "Code circonscription législative": string;
  "Libellé circonscription législative": string;
  Inscrits: string;
  Votants: number;
  "% Votants": number;
  Abstentions: number;
  "% Abstentions": number;
  Exprimés: number;
  "% Exprimés/inscrits": number;
  "% Exprimés/votants": number;
  Blancs: number;
  "% Blancs/inscrits": number;
  "% Blancs/votants": number;
  Nuls: number;
  "% Nuls/inscrits": number;
  "% Nuls/votants": number;
  [key: string]: any; // To handle dynamic keys for candidates
}

const results: ElectionData[] = [];

fs.createReadStream(path.resolve(__dirname, "../legislativetour1.csv"))
  .pipe(csv({ separator: ";" }))
  .on("data", (data: ElectionData) => results.push(data))
  .on("end", () => {
    console.log(results);
    fs.writeFileSync(
      path.resolve(__dirname, "../legislativetour1.json"),
      JSON.stringify(results, null, 2)
    );
  });
