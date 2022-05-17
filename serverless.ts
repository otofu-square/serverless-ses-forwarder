import type { Serverless } from "serverless/aws";

const STAGE = process.env["NODE_ENV"] || "development";

module.exports = {
  service: "serverless-ses-forwarder",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: process.env["AWS_DEFAULT_REGION"] || "us-east-1",
    stage: STAGE,
  },
  plugins: ["serverless-esbuild"],
  custom: {
    esbuild: {
      packager: "yarn",
    },
  },
  functions: {
    main: {
      handler: "src/index.default",
      environment: {
        NODE_ENV: STAGE,
      },
    },
  },
} as Serverless;
