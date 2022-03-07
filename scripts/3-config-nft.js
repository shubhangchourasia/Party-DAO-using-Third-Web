import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x44D41Be2a8016263Ed55070742FD73f89b1244e7"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Party Village Headband",
        description: "This NFT will give you access to Party DAO!",
        image: readFileSync("scripts/assets/partynft.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
