  onSubmitSignIn = () => {

    const signInEmail = document.getElementById("inputEmailLogin").value;
    const signInPass = document.getElementById("inputPasswordLogin").value;

    if(signInEmail!=='' | signInPass!==''){
          fetch('http://localhost:3003/login',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email: signInEmail,
              password:signInPass
            })
          })
          .then(data=>{
            window.location = data.url
          })
          .catch(err=>{ });
    }else{
      console.log('enter login and password');
    }
  }

  onSubmitRegister = () => {
    const registerInEmail = document.getElementById("inputEmail").value;
    const registerPass = document.getElementById("inputPassword").value;

    if(registerInEmail!=='' | registerPass!==''){
          fetch('http://localhost:3003/register',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email: registerInEmail,
              password:registerPass
            })
          })
          .then(data=>{
            console.log(data);
            window.location = data.url
          })
          .catch(err=>{ });
    }else{
      console.log('enter login and password');
    }
  }
  dataPage = () =>{

  }

  welcomePage = () =>{

  }

  profilePage = () =>{
    
  }