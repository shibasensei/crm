// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

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
          });
    }else{
      console.log('enter login and password');
    }
  }