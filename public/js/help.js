  onSubmitSignIn = () => {

    const signInEmail = document.getElementById("inputEmailLogin").value;
    const signInPass = document.getElementById("inputPasswordLogin").value;

    if(signInEmail!=='' && signInPass!==''){
          fetch('http://localhost:3003/login',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email: signInEmail,
              password:signInPass
            })
          })
          .then(data=>{
            if(data.status===401){document.getElementById("statusLogin").innerHTML = "Wrong credentials";}
            else if(data.status===400){document.getElementById("statusLogin").innerHTML = "Ooops, try again later";}
            else{window.location = data.url}
          })
          .catch(err=>{
            document.getElementById("statusLogin").innerHTML = "Ooops, try again later";
           });
    }else{
      document.getElementById("statusLogin").innerHTML = "Enter email and password";
    }
  }

  onSubmitRegister = () => {
    const registerInEmail = document.getElementById("inputEmail").value;
    const registerPass = document.getElementById("inputPassword").value;

    if(registerInEmail!=='' && registerPass!==''){
          fetch('http://localhost:3003/register',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              email: registerInEmail,
              password:registerPass
            })
          })
          .then(data=>{
            console.log(data.status);
            if(data.status===402){document.getElementById("statusRegister").innerHTML = "Already registered";}
            else if(data.status===401){document.getElementById("statusRegister").innerHTML = "Oops, try again later";}
            else{window.location = data.url}
          })
          .catch(err=>{
            document.getElementById("statusRegister").innerHTML = "Oops, try again later";
           });
    }else{
      document.getElementById("statusRegister").innerHTML = "Enter login and password";
    }
  }

  addClient = () => {
    const emailUser = "test@test.ua";
    const name = document.getElementById("addName").value;
    const phone = document.getElementById("addPhone").value;
    const comments = document.getElementById("addComments").value;
    console.log(emailUser,name,phone,comments);
    if(name!=='' | phone!=='' | comments!==''){
          fetch('http://localhost:3003/client',{
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              phone: phone,
              name: name,
              comments: comments
            })
          })
          .then(data=>{
            if(data.status===200){
              document.getElementById("statusAdd").innerHTML = "Client added!"
            }else{
              document.getElementById("statusAdd").innerHTML = "Oops, try again later :("
            }
          })
          .catch(err=>{ 
            document.getElementById("statusAdd").innerHTML = "Oops, try again later :("
          });
    }else{
      document.getElementById("statusAdd").innerHTML = "Fill the fields, please."
    }
  }

  dataPage = () =>{

  }

  profilePage = () =>{
    
  }
