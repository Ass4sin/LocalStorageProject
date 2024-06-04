const ul = document.querySelector("ul")


$("#add").on("click", function () {
    if ($(".informations").css("display") == "none") {
        $(".informations").show("slow");
    } else {
        $(".informations").hide("slow");
    }
});


$("#erase").on("click", function () {
    localStorage.clear()
})

$("#submitButton").on("click", function () {
    const surname = document.querySelector("#Surname").value
    const firstName = document.querySelector("#firstName").value
    const phoneNumber = document.querySelector("#Number").value

    let register = {
        surname: surname,
        firstName: firstName,
        phoneNumber: phoneNumber
    }

    let arr = []
    // let namesArr = []
    // information = localStorage.getItem("Information")
    // names = localStorage.getItem("Names")

    if (localStorage.length === 0) {
        arr.push(register)
        localStorage.setItem("Information", JSON.stringify(arr))
    } else if (localStorage.length !== 0) {
        if (checkInformations(register)) {
            console.log("same informations");
        } else {
            information = localStorage.getItem("Information")
            arr = JSON.parse(information)
            arr.push(register)
            localStorage.setItem("Information", JSON.stringify(arr))
        }
    }

});


function showNames() {
    const surname = document.querySelector("#Surname").value
    const firstName = document.querySelector("#firstName").value
    const phoneNumber = document.querySelector("#Number").value
    if (localStorage.length === 0){
        return
    }
    getLocalStorage = JSON.parse(localStorage.getItem("Information"))
    len = getLocalStorage.length
    for(let i = 0; i < len; i++){
        names = ul.appendChild(document.createElement("li"))
        names.innerHTML += getLocalStorage[i].surname
    }
}

function checkInformations(data) {
    if (localStorage.length !== 0) {
        getLocalStorage = JSON.parse(localStorage.getItem("Information"))
        localStorageLength = getLocalStorage.length

        for (let i = 0; i < localStorageLength; i++) {
            if (getLocalStorage[i].surname === data.surname && getLocalStorage[i].firstName === data.firstName && getLocalStorage[i].phoneNumber === data.phoneNumber) {
                return true
            }
        }
    } else {
        return false
    }

}

showNames()
