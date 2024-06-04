const ul = document.querySelector("ul")
const select = document.querySelector("#gender")
let isEditing = -10
$("#add").on("click", function () {
    if ($(".informations").css("display") == "none") {
        $(".informations").show("slow");
    } else {
        $(".informations").hide("slow");
    }
});

$(".input").on("click", function (event) {
    event.target.value = ""
})

$("#erase").on("click", function () {
    localStorage.clear()
})

$("#submitButton").on("click", function () {
    // debugger
    const surname = document.querySelector("#Surname").value
    const firstName = document.querySelector("#firstName").value
    const phoneNumber = document.querySelector("#Number").value

    let register = {
        surname: surname,
        firstName: firstName,
        phoneNumber: phoneNumber
    }

    if (register.surname === "" || register.firstName === "" || register.phoneNumber === "") {
        alert("You must fill in the blanks")
        return
    }

    let arr = []

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

    if (isEditing !== -10) {
        getLocalStorage = JSON.parse(localStorage.getItem("Information"))
        getLocalStorage[isEditing].surname === surname
        getLocalStorage[isEditing].firstName === firstName
        getLocalStorage[isEditing].phoneNumber === phoneNumber
    }

    document.querySelector("#Surname").value = ""
    document.querySelector("#firstName").value = ""
    document.querySelector("#Number").value = ""
    isEditing = -10
    showNames()
    console.log(isEditing);
});

function modifyUser(user) {
    let isEditing = user
    getLocalStorage = JSON.parse(localStorage.getItem("Information"))
    getLocalStorage[user]
    document.querySelector("#Surname").value = getLocalStorage[user].surname
    document.querySelector("#firstName").value = getLocalStorage[user].firstName
    document.querySelector("#Number").value = getLocalStorage[user].phoneNumber
}

function showNames(deleteUser) {
    if (!deleteUser) {
        if (localStorage.length === 0) {
            return
        }
        getLocalStorage = JSON.parse(localStorage.getItem("Information"))
        len = getLocalStorage.length - 1
        newList = document.createElement("li")
        newList.setAttribute("id", `listItem_${len}`)
        newList.setAttribute("onclick", `modifyUser(${len})`)
        names = ul.appendChild(newList)
        names.classList.add("contactList")
        names.innerHTML += getLocalStorage[len].surname + " " + getLocalStorage[len].firstName + " " + getLocalStorage[len].phoneNumber + `<i class="fa-solid fa-trash" onclick="deleteUser(${len})"></i>`
    } else {
        toRemove = document.querySelector(`#listItem_${deleteUser}`)
        ul.removeChild(toRemove)
    }
}

function deleteUser(user) {
    // debugger
    getLocalStorage = JSON.parse(localStorage.getItem("Information"))
    if (Array.isArray(getLocalStorage)) {
        getLocalStorage.splice(user, 1)
        localStorage.setItem("Information", JSON.stringify(getLocalStorage))
        showNames(user)
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