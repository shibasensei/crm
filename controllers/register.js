// const checkCorrectEmail =(email)=>{

//     const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const lowEmail = email.toLowerCase();
  
//     if(lowEmail.match(mailformat))
//       return lowEmail;
//     else
//       return false
  
  const handleRegister = (db, bcrypt) =>(req,res) =>{
  
    const {email, password} = req.body;
    const hash = bcrypt.hashSync(password);
    console.log('EMAIL = ',email,' HASH = ',hash);
    const lowEmail = email.toLowerCase();

      db('login')
      .returning('email')
      .insert({
        hash: hash,
        email: lowEmail
      })
      .then(data=>res.json(data[0]))
      .catch(err=>{
        if(err.code==='23505')
          res.status(400).json(101) // 101 already registered
        else
          res.status(400).json(102) // 102 i fucked up
      });
    }
  
  module.exports = {
    handleRegister: handleRegister
  }