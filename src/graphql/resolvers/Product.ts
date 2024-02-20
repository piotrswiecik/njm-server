import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */
	tracks: async (parent, _args, _ctx) => {
		const tracks = await _ctx.db.track.findMany({
			where: { productId: parent.id },
		});
		return tracks.map((track) => {
			return { ...track, url: track.url ?? "" };
		});
	},
};
