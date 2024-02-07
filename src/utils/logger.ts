import os, { platform } from "os";
import { env } from "process";
import pino from "pino";

const config = {
	level: process.env.NODE_ENV === "development" ? "debug" : "info",
	base: {
		pid: process.pid,
		hostname: os.hostname(),
		env: env.NODE_ENV,
		platform: platform(),
	},
};

export const logger = pino(config);