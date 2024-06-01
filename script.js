$("#add").on("click",function(){
    if ($(".informations").css("display") == "none") {
        $(".informations").show("slow");
    }else{
        $(".informations").hide("slow");
    }
});

$("#submitButton").on("click", function() {
    const surname = document.querySelector("#Surname").value;
    const firstName = document.querySelector("#firstName").value;
    const phoneNumber = document.querySelector("#Number").value;
    
    const register = {
        surname: surname,
        firstName: firstName,
        phoneNumber: phoneNumber
    };

    let information = window.localStorage.getItem("Informations");
    console.log(information);
    let arr = [];
    if (information !== null) {
        arr = JSON.parse(information);
    }

    arr.push(register);

    window.localStorage.setItem("Informations", JSON.stringify(arr));

});
