

const addClient = (db) =>(req,res) =>{
  
    const {email,name, phone, comments} = req.body;
    const lowEmail = email.toLowerCase();
    console.log(email,name,phone,comments);
      db('data')
      .insert({
        email: lowEmail,
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

const getClients = (db) =>(req,res) =>{
    const{email} = req.body;
    db
    .select()
    .from('data')
    .where('email',email)
    .then(data=>res.json(data))
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

