$("#add").on("click",function(){
    if ($(".informations").css("display") == "none") {
        $(".informations").show("slow");
    }else{
        $(".informations").hide("slow");
    }
});

$("#submitButton").on("click", function() {
    const surname  = document.querySelector("#Surname").value
    const firstName = document.querySelector("#firstName").value
    const phoneNumber = document.querySelector("#Number").value

    let register = {
        surname: surname,
        firstName: firstName,
        phoneNumber: phoneNumber
    }

    let arr = []

    information = localStorage.getItem("Information")

    if (information !== null) {
        arr = JSON.parse(information)
    }

    arr.push(register)
    
    localStorage.setItem("Information", JSON.stringify(arr))
});
