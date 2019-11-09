var User = {
    email:"",
    clients:{}
};

function getData(db,email){
    db
    .select()
    .from('data')
    .where('email',email)
    .then(data=>{
     console.log(data)
      console.log("user = ",email,"data = ",data);
      res.json(data);
    })
    .catch(err=>{
      if(err.code==='23505')
        res.status(400).json(102) // 102 i fucked up
    });
};
  module.exports = {
    getData:getData,
    User:User
  }
