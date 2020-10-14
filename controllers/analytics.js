const getTotalSales = (db,user) =>(req,res) =>{
    const {id} = req.body;
    db('data')
    .where('email',user.email)
    // .del()
    .then(data=>res.json(777))
    .catch(err=>{
      if(err.code==='23505')
        res.status(400).json(102) // 102 i fucked up
    });
  }


  module.exports = {
    getTotalSales:getTotalSales,
  }