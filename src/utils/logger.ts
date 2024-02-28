import os, { platform } from "os";
import { env } from "process";
import pino from "pino";
import pinoCaller from "pino-caller";

const config = {
	level: process.env.NODE_ENV === "development" ? "debug" : "info",
	base: {
		pid: process.pid,
		hostname: os.hostname(),
		env: env.NODE_ENV,
		platform: platform(),
	},
};

const baseLogger = pino(config);
export const logger = pinoCaller(baseLogger);