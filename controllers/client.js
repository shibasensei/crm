

const addClient = (db) =>(req,res) =>{
  
    const {email,name, phone, comments} = req.body;
    const lowEmail = email.toLowerCase();
    console.log(email,name, phone, comments)
      db('data')
      .insert({
        email: lowEmail,
        clientname: name,
        clientphone: phone,
        comments: comments
      })
      .then(data=>res.json(777))
      .catch(err=>{
        if(err.code==='23505')
          res.status(400).json(101) // 101 already registered
        else
          res.status(400).json(102) // 102 i fucked up
      });
    }
    
const deleteClient = (db) =>(req,res) =>{
    
}
  module.exports = {
    addClient: addClient,
    deleteClient:deleteClient
  }