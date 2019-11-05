
const handleLogin = (db,bcrypt)=>(req,res)=>{
    const email = req.body.email.toLowerCase()
    db.select('hash','email').from('login')
      .where('email','=',email)
      .then(data=>{
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if(isValid){
          // req.session.key_email = email;
          // console.log(req.session.key["userEmail"])
          res.redirect('/welcome');
        }else{
          res.status(401).json('wrong credentials');
        }
    })
    .catch(err => res.status(400).json('try again later'));
  }
  
  module.exports = {
    handleLogin: handleLogin
  }
 