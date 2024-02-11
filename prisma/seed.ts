import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const mockData = [
  {
    id: "1",
    artist: "Thievery Corporation",
    title: "The Cosmic Game",
    description: "record",
    price: 48,
    coverImg: "https://i.discogs.com/j58kpLPvBTO5rwuy3zYMEx6zmS2yLNd3bGP-Jq_d7YE/rs:fit/g:sm/q:90/h:546/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxOTYw/ODItMTI2OTIwNTIx/My5qcGVn.jpeg",
    genre: "Electronic",
    format: "Vinyl",
  },
  {
    id: "2",
    artist: "Plastikman",
    title: "Sheet One",
    description: "record",
    price: 53,
    coverImg: "https://i.discogs.com/ccuHmPYK8cBWUQk_VvBFbGSpbGaslosHB0n7ufHloMY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNTYt/MTIyMDIwMzMzNi5q/cGVn.jpeg",
    genre: "Electronic",
    format: "Vinyl",
  },
  {
    id: "3",
    artist: "Autechre",
    title: "Chiastic Slide",
    description: "record",
    price: 22,
    coverImg: "https://i.discogs.com/0-NYLZSAqU1h4B_nbVPC5GvFmG1zvc586xjFhRI6cXI/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTYt/MTE0NDIxMzUyNi5q/cGVn.jpeg",
    genre: "Electronic",
    format: "CD",
  },
  {
    id: "4",
    artist: "DJ Krush",
    title: "Kakusei",
    description: "record",
    price: 15,
    coverImg: "https://i.discogs.com/OprtUC-Xw4Bw23dwNr7r6glUvsBUHySF4zRy5X-cTc8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzYx/My0xNTQ0Mzk2NjY4/LTMwNTUuanBlZw.jpeg",
    genre: "Electronic",
    format: "Vinyl",
  },
  {
    id: "5",
    artist: "John Coltrane",
    title: "My Favorite Things",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/Jqft3ob5f38_4WuaYTC-SLgFUcHX-917pdqcOVpkslQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDQw/ODIxLTE1NDgzNDcx/ODgtNzU3OC5qcGVn.jpeg",
    genre: "Jazz",
    format: "Vinyl",
  },
  {
    id: "6",
    artist: "Aphex Twin",
    title: "Selected Ambient Works 85-92",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/CNUO9Rh7SFL3v9tkDGUSyQcuhHRbX0kdL_GMXIE1yVU/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NDUz/MTMtMTY2NTQ3OTEw/MS02OTk2LmpwZWc.jpeg",
    genre: "Electronic",
    format: "CD",
  },
  {
    id: "7",
    artist: "Krystian Zimerman",
    title: "Chopin: Piano Concertos Nos. 1 & 2",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/9RlOXxIVK2cGeu4fSDtE3D-Ba_MGZcZQqH3kdojeWxk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyODE0/NjAtMTM4MjQ0MzAy/Mi01NzM3LmpwZWc.jpeg",
    genre: "Classical",
    format: "CD",
  },
  {
    id: "8",
    artist: "Sun Ra",
    title: "Monorails and Satellites",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/dfSPYzAKskNVFLlfndv4Gdf-r0VMvyczp7aa7se2dUc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcwNTQx/ODAtMTQzMjYzNjc1/MC00NTE3LmpwZWc.jpeg",
    genre: "Jazz",
    format: "Vinyl",
  },
  {
    id: "9",
    artist: "Biosphere",
    title: "Shenzhou",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/uGiuUWmkkAqW2g3cnEyiteL13Q1BHBKR_fEPAsRaZMo/rs:fit/g:sm/q:90/h:537/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0MzI2/LTE0NzIwNjA4NzAt/NjY5NS5qcGVn.jpeg",
    genre: "Electronic",
    format: "CD",
  },
  {
    id: "10",
    artist: "Future Sound of London",
    title: "ISDN",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/8Qzxz6-IAdH6ZbW_hDCEC1et-_jIvM82jhUScdPDfIw/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDk2/NDQtMTIzMTk1NDk3/MS5qcGVn.jpeg",
    genre: "Electronic",
    format: "CD",
  },
  {
    id: "11",
    artist: "Leonard Bernstein",
    title: "Leonard Bernstein Conducts Mahler",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/dGr20dArUbF56t-xbkEwDYtEGB09KKARB0OKquiUZKE/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MTQ1/ODY0LTE2MTc3MjM4/MjItMzU2NS5qcGVn.jpeg",
    genre: "Classical",
    format: "CD",
  },
  {
    id: "12",
    artist: "Kryptic Minds",
    title: "Can't Sleep",
    description: "x",
    price: 20,
    coverImg: "https://i.discogs.com/nK5EcaNLNWuWQROX1iOOT2XjiPzPsiSW_MQU-kFHvpU/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MDcx/ODQtMTMwMTkzOTAw/MC5qcGVn.jpeg",
    genre: "Electronic",
    format: "Vinyl",
  }
];

if (process.argv.includes("--drop") && process.argv.includes("--seed")) {
  console.error("You can't drop and seed at the same time. Exiting.");
  process.exit(1);
}

if (process.argv.includes("--drop")) {
  console.log("Dropping database...");
  drop().then(() => {
    console.log("Database dropped!");
    prisma.$disconnect()
      .then(() => {console.log("Connection to database closed.")})
      .catch(err => {console.log(err)});
  }).catch((e) => {
    console.error(e);
    prisma.$disconnect()
      .then(() => {console.log("Connection to database closed.")})
      .catch(err => {console.log(err)});
  });
} else if (process.argv.includes("--seed")) {
  seed().then(() => {
    console.log("Seeding complete!");
    prisma.$disconnect()
      .then(() => {console.log("Connection to database closed.")})
      .catch(err => {console.log(err)});
  }).catch((e) => {
    console.error(e);
    prisma.$disconnect()
      .then(() => {console.log("Connection to database closed.")})
      .catch(err => {console.log(err)});
  });
}

async function seed(){
  for (const product of mockData) {
    await prisma.product.create({
      data: product,
    });
  }
};

async function drop(){
  await prisma.product.deleteMany({});
}

