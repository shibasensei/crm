
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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
    const registerInEmail = document.getElementById("inputEmail").value.toLowerCase();
    const registerPass = document.getElementById("inputPassword").value;
    
    if(registerInEmail!=='' && registerPass!==''&& validateEmail(registerInEmail)){
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
      document.getElementById("statusRegister").innerHTML = "Enter email and password";
    }
  }

  addClient = () => {
    const name = document.getElementById("addName").value;
    const phone = document.getElementById("addPhone").value;
    const comments = document.getElementById("addComments").value;
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
            console.log(data.status)
            if(data.status!==200){
              document.getElementById("statusAdd").innerHTML = "Client added!";
            }else{
              document.getElementById("statusAdd").innerHTML = "Oops, try again later :(";
            }
          })
          .catch(err=>{ 
            document.getElementById("statusAdd").innerHTML = "Oops, try again later :(";
          });
    }else{
      document.getElementById("statusAdd").innerHTML = "Fill the fields, please.";
    }
  }

  deleteItem = () =>{
    const id = document.getElementById("id").innerHTML;
    fetch('http://localhost:3003/deleteClient',{
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            id: id
        })
    })
    .then(respose=>{
      if(respose.status===200){
        window.location = "http://localhost:3003/getClients";
      }else{
        console.log("error");
      }
    });
};

 