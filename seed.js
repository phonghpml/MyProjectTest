
const { MongoClient, ServerApiVersion } = require('mongodb');
const faker = require('@faker-js/faker');

const client = new MongoClient('mongodb+srv://phong:phongml123@cluster0.oasdw8b.mongodb.net/?retryWrites=true&w=majority', {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}); 
async function run() {
    try {
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('users');
        let userData = []
        for (let i = 0; i < 100; i++) {
            const name = faker.faker.person.fullName();
            const pass = faker.faker.person.fullName();
            let newUser = {
                username: name,
                age: faker.faker.number.int(100),
                password: faker.faker.string.alpha(10),
                phoneNumber: faker.faker.string.numeric(9),
                type: "Admin",
            };
            userData.push(newUser);
        }
        collection.insertMany(userData);

        console.log("Database seeded! :)");
        client.close();
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
