

const addClient = (db,user) =>(req,res) =>{
  
    const {name, phone, comments} = req.body;
      db('data')
      .insert({
        email: user.email,
        clientname: name,
        clientphone: phone,
        comments: comments
      })
      .then(data=>res.status(200))
      .catch(err=>{
        if(err.code==='23505')
          res.status(400); // 102 i fucked up
      });
    }
    
const deleteClient = (db) =>(req,res) =>{
  const {id} = req.body;
  db('data')
  .where('id',id)
  .del()
  .then(data=>res.json(777))
  .catch(err=>{
    if(err.code==='23505')
      res.status(400).json(102) // 102 i fucked up
  });
}

const getClients = (db,user) =>(req,res) =>{
    db
    .select()
    .from('data')
    .where('email',user.email)
    .then(data=>{
      console.log(data);
      res.json(data);
    })
    .catch(err=>{
      if(err.code==='23505')
        res.status(400).json(102) // 102 i fucked up
    });
}
  module.exports = {
    addClient: addClient,
    deleteClient:deleteClient,
    getClients:getClients
  }

