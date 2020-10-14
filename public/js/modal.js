const modalData = (ele) =>{
    document.getElementById("idModal").innerHTML = "ID: " + ele.children[6].innerHTML;
    document.getElementById("emailModal").innerHTML = ele.children[3].innerHTML;
    document.getElementById("productNameModal").innerHTML = ele.children[0].innerHTML;

    document.getElementById("priceModal").innerHTML = ele.children[5].innerHTML;
    document.getElementById("quantityModal").innerHTML = ele.children[4].innerHTML;
    document.getElementById("purchase_dateModal").innerHTML = ele.children[2].innerHTML;

    document.getElementById("commentsModal").innerHTML = ele.children[1].innerHTML;
};

