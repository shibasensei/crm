
  const handleRegister = (db, bcrypt,user) =>(req,res) =>{
  
    const {email, password} = req.body;
    const hash = bcrypt.hashSync(password);
    // console.log('EMAIL = ',email,' HASH = ',password);
    const lowEmail = email.toLowerCase();

      db('login')
      .returning('email')
      .insert({
        hash: hash,
        email: lowEmail
      })
      .then(data=>{
        user.email = lowEmail;
        res.redirect('/welcome');
      })
      .catch(err=>{
        if(err.code==='23505')
          res.status(402).json(101) // 101 already registered
        else
          res.status(401).json(102) // 102 i fucked up
      });
    }
  
  module.exports = {
    handleRegister: handleRegister
  }