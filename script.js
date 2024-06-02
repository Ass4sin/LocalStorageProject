const ul = document.querySelector("ul")


$("#add").on("click",function(){
    if ($(".informations").css("display") == "none") {
        $(".informations").show("slow");
    }else{
        $(".informations").hide("slow");
    }
});


$("#erase").on("click", function(){
    localStorage.clear()
})

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
    // let namesArr = []
    information = localStorage.getItem("Information")
    // names = localStorage.getItem("Names")

    if (information !== null) {
        arr = JSON.parse(information)
        // namesArr = JSON.parse(names)
    }
    
    
    
    
    arr.push(register)
    // namesArr.push(surname, firstName)
    
    
    ul.appendChild(document.createElement("li")).textContent = surname + " " + firstName; //need to be able to stock this new list in the local storage
    
    localStorage.setItem("Information", JSON.stringify(arr))
    // localStorage.setItem("Names", JSON.stringify(namesArr))
    checkInformations(register)
});


function checkInformations(data) {
    console.log(localStorage.length);
    if(localStorage.length !== 0){
        getLocalStorage = JSON.parse(localStorage.getItem("Information"))
        localStorageLength = getLocalStorage.length

        for(let i = 0; i < localStorageLength; i++){
            if (getLocalStorage[i].surname === data.surname && getLocalStorage[i].firstName === data.firstName && getLocalStorage[i].phoneNumber === data.phoneNumber) {
                //working if, not to figure out how to not add the data
                localStorage.removeItem("Information", data)
            }
        }
    } else{
        console.log("empty local storage for now");
    }
    
}
