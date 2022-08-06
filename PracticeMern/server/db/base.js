const {MongoClient } = require('mongodb');
const Db=process.env.ATLAS_URI;
const client = new MongoClient(Db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

var _db;

module.export={
    connectToServer:(callback)=>{
        client.connect((er,db)=>{
            if(db){
                _db=db.db("employees");
                console.log('Successfully connected to MongoDB.')
            }
            return callback(er);
        });
    },
    getDb:()=>{
        return _db;
    },
}