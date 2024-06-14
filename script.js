const ul = document.querySelector("ul")
const select = document.querySelector("#gender")
let isEditing = -10

$("#add").on("click", function () {
    $(".informations").toggle("slow");
});

$(".input").on("click", function (event) {
    event.target.value = ""
});

$("#erase").on("click", function () {
    localStorage.clear();
    ul.innerHTML = "";
});

$("#submitButton").on("click", function () {
    const surname = document.querySelector("#Surname").value
    const firstName = document.querySelector("#firstName").value
    const phoneNumber = document.querySelector("#Number").value
    const gender = $("#gender").val()
    console.log(gender);

    let register = {
        surname: surname,
        firstName: firstName,
        phoneNumber: phoneNumber,
        gender: gender
    }

    if (register.surname === "" || register.firstName === "" || register.phoneNumber === "" || register.gender === null) {
        alert("You must fill in the blanks")
        return
    }

    let arr = JSON.parse(localStorage.getItem("Information")) || []

    if (isEditing !== -10) {
        arr[isEditing] = register
        isEditing = -10
    } else {
        if (checkInformations(register)) {
            console.log("same informations");
        } else {
            arr.push(register)
        }
    }

    localStorage.setItem("Information", JSON.stringify(arr))

    document.querySelector("#Surname").value = ""
    document.querySelector("#firstName").value = ""
    document.querySelector("#Number").value = ""

    showNames()
});

function modifyUser(index) {
    isEditing = index
    const getLocalStorage = JSON.parse(localStorage.getItem("Information"))
    document.querySelector("#Surname").value = getLocalStorage[index].surname
    document.querySelector("#firstName").value = getLocalStorage[index].firstName
    document.querySelector("#Number").value = getLocalStorage[index].phoneNumber
}

function showNames(deleteUser = null) {
    ul.innerHTML = ""
    const getLocalStorage = JSON.parse(localStorage.getItem("Information")) || []
    getLocalStorage.forEach((item, index) => {
        const newList = document.createElement("li")
        newList.setAttribute("id", `listItem_${index}`)
        newList.setAttribute("onclick", `modifyUser(${index});openForm()`)
        // newList.setAttribute("onclick", "openForm()")
        newList.classList.add("contactList")
        newList.innerHTML = `${item.surname} ${item.firstName} <i class="fa-solid fa-trash" onclick="deleteUser(${index})"></i>`
        ul.appendChild(newList)
    })
}

function openForm() {
    if($(".informations").css("display", "none")){
        $(".informations").show("slow")
    }
}

function deleteUser(index) {
    let getLocalStorage = JSON.parse(localStorage.getItem("Information"))
    if (Array.isArray(getLocalStorage)) {
        getLocalStorage.splice(index, 1)
        localStorage.setItem("Information", JSON.stringify(getLocalStorage))
        showNames()
    }
}

function checkInformations(data) {
    const getLocalStorage = JSON.parse(localStorage.getItem("Information")) || []
    return getLocalStorage.some(item => 
        item.surname === data.surname && 
        item.firstName === data.firstName && 
        item.phoneNumber === data.phoneNumber
    )
}

showNames()
