const modalData = (ele) =>{
    document.getElementById("clientName").innerHTML = ele.children[0].innerHTML;
    document.getElementById("clientPhone").innerHTML = ele.children[2].innerHTML;
    document.getElementById("clientComment").innerHTML = ele.children[1].innerHTML;
    document.getElementById("id").innerHTML = ele.id;
};

