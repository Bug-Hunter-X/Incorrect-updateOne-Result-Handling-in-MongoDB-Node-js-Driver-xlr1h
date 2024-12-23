```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument(uri, dbName, collectionName, filter, update) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    const result = await collection.updateOne(filter, update);
    console.log(`Updated ${result.modifiedCount} document(s).`);
  } finally {
    await client.close();
  }
}

// Example usage:
async function main(){
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const dbName = 'myDatabase';
  const collectionName = 'myCollection';
  const filter = { name: 'John Doe' };
  const update = { $set: { age: 30 } };

  await updateDocument(uri, dbName, collectionName, filter, update);
}
main().catch(console.dir);
```