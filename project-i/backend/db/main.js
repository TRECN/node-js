const {MongoClient} = require('mongodb');
const Db=process.env.DB_URI;
const client =  new MongoClient(Db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

var _db;

module.exports={
    connectToServer:(callback)=>{
        client.connect((er,db)=>{
            if(db){
                _db=db.db('passcodes');
                console.log('Successfully connected to mongoDb')
            }
            return callback(er);
        });
    },
    getDb:()=>{
        return _db;
    }
}