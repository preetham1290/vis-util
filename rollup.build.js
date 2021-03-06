import packageJSON from "./package.json";
import { generateRollupConfiguration } from "vis-dev-utils";

export default generateRollupConfiguration({
  header: { name: "vis-util" },
  libraryFilename: "vis-util",
  entryPoint: "./src",
  packageJSON,
  tsconfig: "tsconfig.code.json",
});
