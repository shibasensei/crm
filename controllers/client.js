

const addClient = (db,user) =>(req,res) =>{
  
    const {price, quantity, comments,product_name} = req.body;
      db('data')
      .insert({
        email: user.email,
        product_name:product_name,
        price: price,
        quantity: quantity,
        comments: comments
      })
      .then(data=>res.status(200))
      .catch(err=>{
        if(err.code==='23505')
          res.status(400); // 102 i fucked up
      });
    }
    
const deleteClient = (db,user) =>(req,res) =>{
  const {id} = req.body;
  db('data')
  .where('id',id)
  .del()
  .then(data=>res.json(777))
  .catch(err=>{
    if(err.code==='23505')
      res.status(400).json(102) // 102 i fucked up
      else
      console.log(err.code)
  });
}

const getClients = (db,user) =>(req,res) =>{
    db
    .select()
    .from('data')
    .where('email',user.email)
    .then(data=>{
      user.clients = data;
      res.redirect('/data');
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

