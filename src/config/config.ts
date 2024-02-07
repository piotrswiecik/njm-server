export type NodeConfig = {
	NODE_PORT: number;
	NODE_ENV: string;
};

export const config: NodeConfig = {
	NODE_PORT: Number(process.env.NODE_PORT) || 8000,
	NODE_ENV: process.env.NODE_ENV || "development",
};
