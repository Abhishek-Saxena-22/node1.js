const{Client} = require ('pg')
const studentClient = new Client({
    host: "localhost",
    user: "postgres",
    port:5432,
    password:"abhisheksaxena",
    database: "postgres"
})

studentClient.connect();

studentClient.query('Select * from users',(err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    studentClient.end;
})