import { prisma } from "../db";
import { client, reqs } from "./client";
import { type RecommenderItemProps } from "./types";

const clearDatabase = async () => {
	await client.send(new reqs.DeleteMoreItems("true"));
};

const prepareData = async () => {
	const data = await prisma.product.findMany({
		include: {
			artist: true,
		},
	});

	const parsedData: RecommenderItemProps[] = data
		.map((product) => {
			return {
        productId: product.id,
        artistName: product.artist.name,
        title: product.title,
        imageUrl: product.coverImageUrl,
      }
		});

	return parsedData;
};

const seed = async () => {
	const data = await prepareData();
  await Promise.all(data.map(async (item) => {
    const res = await client.send(new reqs.AddItem(item.productId));
    console.log(res);
  }));
};

if (process.argv.includes("--clear")) {
	clearDatabase()
		.then(() => {
			console.log("Data cleared!");
			process.exit(0);
		})
		.catch((e) => {
			console.error(e);
			process.exit(1);
		});
}

if (process.argv.includes("--seed")) {
	console.log("Seeding data...");
	seed()
		.then(() => {
			console.log("Seeding complete!");
			process.exit(0);
		})
		.catch((e) => {
			console.error(e);
			process.exit(1);
		});
}