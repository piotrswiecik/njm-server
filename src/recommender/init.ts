import readline from "readline";
import { client, reqs } from "./client";

// careful!!!
const drop = async () => {
	await client.send(new reqs.ResetDatabase());
};

const checkPropsExist = async () => {
	const props = await client.send(new reqs.ListItemProperties());
	if (props.length === 0) {
		return false;
	}
	return true;
};
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

checkPropsExist()
	.then(async (res) => {
		if (res) {
			await new Promise((resolve) => {
				rl.question(
					"Db already exists. Do you want to drop? (yes/no): ",
					async (answer) => {
						if (answer === "yes") {
							await drop();
							console.log(
								"Database dropped, run script again to create schema",
							);
						} else {
							console.log("Ok, quitting...");
						}
						rl.close();
						resolve(null);
					},
				);
			});
		} else {
			await client.send(new reqs.AddItemProperty("productId", "string"));
			await client.send(new reqs.AddItemProperty("artistName", "string"));
			await client.send(new reqs.AddItemProperty("title", "string"));
			await client.send(new reqs.AddItemProperty("imageUrl", "string"));
			console.log("Database schema created");
			process.exit(0);
		}
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
