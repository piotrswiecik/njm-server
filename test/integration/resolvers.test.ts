import { PostgreSqlContainer, type StartedPostgreSqlContainer } from "@testcontainers/postgresql";
import { Client, type ClientConfig } from "pg";

describe("Product resolver integration tests", () => {
  // safe amount of time for testcontainers to pull images
  jest.setTimeout(60000);

  let postgresContainer : StartedPostgreSqlContainer;
  let postgresClient: Client;

  beforeAll(async () => {
    postgresContainer = await new PostgreSqlContainer().start();
    postgresClient = new Client({
      connectionString: postgresContainer.getConnectionUri(),
    } as ClientConfig);
    await postgresClient.connect();
    // TODO verify data types later
    const ddl = `
    CREATE TABLE IF NOT EXISTS products
    (
      id SERIAL PRIMARY KEY,
      artist VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      coverImg VARCHAR(255) NOT NULL,
      format VARCHAR(255) NOT NULL,
      genre VARCHAR(255) NOT NULL,
      price INTEGER NOT NULL,
      description TEXT NOT NULL
    )
    `
    await postgresClient.query(ddl);
    const insert = `
    INSERT INTO products (id, artist, title, coverImg, format, genre, price, description) 
    VALUES
    ('1', 'testArtist', 'testTitle', 'testCoverImg', 'testFormat', 'testGenre', 100, 'testDescription')
    `;
    await postgresClient.query(insert);
  });

  afterAll(async () => {
    await postgresClient.end();
    await postgresContainer.stop();
  });

  it("Postgres testcontainer should initialize", async () => {
    const query = "SELECT NOW()";
    const result = await postgresClient.query(query);
    expect(result.rows).toHaveLength(1);
    const select = "SELECT * FROM products";
    const products = await postgresClient.query(select);
    expect(products.rows).toHaveLength(1);
  })

});