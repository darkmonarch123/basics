// const {Collection} = require("mongo");
const {MongoClient} = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
connect();

async function connect() {
     const client = new MongoClient(url);
     try{
          await client.connect();
          const db = client.db('Niit')
          console.log("Connected to " + db.databaseName +" "+ "Database sucessfully")
     }catch(ex){
          console.log("An error occured")
     }
}

