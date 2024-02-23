import { PrismaClient } from "@prisma/client";
import { mockDataFromJson } from "./mockdata/converter";

const prisma = new PrismaClient();

if 
	(process.argv.includes("--drop") && (process.argv.includes("--seed") ||
	process.argv.includes("--seed-collections")))
 {
	console.error("You can't drop and seed at the same time. Exiting.");
	process.exit(1);
}

if (process.argv.includes("--drop")) {
	console.log("Dropping database...");
	drop()
		.then(() => {
			console.log("Database dropped!");
			prisma
				.$disconnect()
				.then(() => {
					console.log("Connection to database closed.");
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((e) => {
			console.error(e);
			prisma
				.$disconnect()
				.then(() => {
					console.log("Connection to database closed.");
				})
				.catch((err) => {
					console.log(err);
				});
		});
} else if (process.argv.includes("--seed")) {
	seed()
		.then(() => {
			console.log("Seeding complete!");
			prisma
				.$disconnect()
				.then(() => {
					console.log("Connection to database closed.");
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((e) => {
			console.error(e);
			prisma
				.$disconnect()
				.then(() => {
					console.log("Connection to database closed.");
				})
				.catch((err) => {
					console.log(err);
				});
		});
} else if (process.argv.includes("--seed-collections")) {
	seedCollections()
		.then(() => {
			console.log("Seeding collections complete!");
			prisma
				.$disconnect()
				.then(() => {
					console.log("Connection to database closed.");
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((e) => {
			console.error(e);
			prisma
				.$disconnect()
				.then(() => {
					console.log("Connection to database closed.");
				})
				.catch((err) => {
					console.log(err);
				});
		});
}

async function seed() {
	// initialize categories (genres)
	const allGenres = [
		"electronic",
		"classical",
		"jazz",
		"metal",
		"rock",
		"rap",
		"various",
	];

	for (const genre of allGenres) {
		await prisma.category.create({
			data: {
				name: genre,
			},
		});
	}

	const mockData = await mockDataFromJson();

	for (const product of mockData) {

		// create artist if not exists
		let artist;
		artist = await prisma.artist.findFirst({
			where: {
				name: product.artists[0],
			},
		});
		if (!artist) {
			artist = await prisma.artist.create({
				data: {
					name:
						product.artists[0] !== undefined && product.artists[0] !== ""
							? product.artists[0]
							: "Unknown Artist",
				},
			});
		}
		if (artist === null) throw new Error("Error creating artist.");

		// create product
		const imageUrl = product.images[0] !== undefined ? product.images[0].url : "https://via.placeholder.com/300";
		const productCategory = await prisma.category.findFirst({
			where: {
				name: product.genre,
			},
		});
		await prisma.product.create({
			data: {
				title:
					product.name !== undefined && product.name !== ""
						? product.name
						: "Untitled",
				releaseDate: new Date(product.release_date),
				artist: {
					connect: { id: artist.id },
				},
				coverImageUrl: imageUrl,
				category: {
					connect: { id: productCategory!.id },
				},
				variants: {
					createMany: {
						// create 2 variants for each product, 20% chance of being out of stock
						data: [
							{
								name: "cd",
								stock: Math.floor(Math.random() < 0.2 ? 0 : Math.random() * 100),
								price: Math.floor(20 + Math.random() * 40),
							},
							{
								name: "lp",
								stock: Math.floor(Math.random() < 0.2 ? 0 : Math.random() * 100),
								price: Math.floor(20 + Math.random() * 40),
							},
						],
					}
				},
				tracks: {
					createMany: {
						data: product.tracks.map((track) => {
							return {
								name: track.name,
								number: track.trackNumber,
								url: track.url,
							};
						}),
					},
				},
			},
		});
	}
}

async function seedCollections() {
	const allCollections = [
		"new",
		"bestsellers",
		"staffpicks",
	];

	const allProducts = await prisma.product.findMany();

	// select random products for each collection
	const newProducts = allProducts.sort(() => Math.random() - 0.5).slice(0, 10);
	const bestsellers = allProducts.sort(() => Math.random() - 0.5).slice(0, 10);
	const staffpicks = allProducts.sort(() => Math.random() - 0.5).slice(0, 10);

	// create all collections
	for (const collection of allCollections) {
		await prisma.collection.create({
			data: {
				name: collection,
			},
		});
	}

	// add products to collections
	const newCollection = await prisma.collection.findFirst({
		where: {
			name: "new",
		},
	});
	const bestsellersCollection = await prisma.collection.findFirst({
		where: {
			name: "bestsellers",
		},
	});
	const staffpicksCollection = await prisma.collection.findFirst({
		where: {
			name: "staffpicks",
		},
	});

	for (const product of newProducts) {
		await prisma.collection.update({
			where: { id: newCollection!.id },
			data: {
				products: {
					connect: { id: product.id },
				},
			},
		});
	}

	for (const product of bestsellers) {
		await prisma.collection.update({
			where: { id: bestsellersCollection!.id },
			data: {
				products: {
					connect: { id: product.id },
				},
			},
		});
	}

	for (const product of staffpicks) {
		await prisma.collection.update({
			where: { id: staffpicksCollection!.id },
			data: {
				products: {
					connect: { id: product.id },
				},
			},
		});
	}

}

async function drop() {
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();
	await prisma.collection.deleteMany();
	await prisma.artist.deleteMany();
}
