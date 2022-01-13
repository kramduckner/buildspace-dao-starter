import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0f4569c553a00df82cbeb406f4cd83d036435c8f"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Binkey",
        description: "This NFT will give you access to BabyDAO!",
        image: readFileSync("scripts/assets/binkey.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
