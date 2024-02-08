export type NodeConfig = {
	NODE_PORT: number;
	NODE_ENV: string;
	DATABASE_HOST: string;
	DATABASE_NAME: string;
	DATABASE_USER: string;
	DATABASE_PASS: string;
};

export const config: NodeConfig = {
	NODE_PORT: Number(process.env.NODE_PORT) || 8000,
	NODE_ENV: process.env.NODE_ENV || "development",
	DATABASE_HOST: process.env.DATABASE_HOST || "localhost:5432",
	DATABASE_NAME: process.env.DATABASE_NAME || "njm",
	DATABASE_USER: process.env.DATABASE_USER || "admin",
	DATABASE_PASS: process.env.DATABASE_PASS || "password",
};

/** for prisma programmatic access */ 
export const getDatabaseUri = () => {
	return `postgres://${config.DATABASE_USER}:${config.DATABASE_PASS}@${config.DATABASE_HOST}/${config.DATABASE_NAME}`;
}