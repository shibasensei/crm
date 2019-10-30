
const handleLogin = (db,bcrypt)=>(req,res)=>{
    const email = req.body.email.toLowerCase()
    //console.log(req.body.password,email)
    db.select('hash','email').from('login')
      .where('email','=',email)
      .then(data=>{
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if(isValid){
          console.log('done')
          res.render('welcome');//asd
        }else{
          res.status(400).json('wrong credentials');
        }
    })
    .catch(err => res.status(400).json('wrong credentials'));
  }
  
  module.exports = {
    handleLogin: handleLogin
  }
 