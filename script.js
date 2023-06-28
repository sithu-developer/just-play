const inputTags = document.getElementsByClassName("input");
const nameLabel = document.querySelector(".nameLabel");
const emailLabel = document.querySelector(".emailLabel");
const pwdLabel = document.querySelector(".pwdLabel");
const btnTag = document.querySelector(".btnTag");
const container = document.querySelector(".container");
const bodyTag = document.querySelector("body")

// labels
for (let i = 0; i< inputTags.length; i++) {
    let pressedInputBox = inputTags[i];
    pressedInputBox.addEventListener("click", () => {
        if(pressedInputBox.id === "1") {
            nameLabel.classList.add("changeLabels");
        } else if (pressedInputBox.id === "2") {
            emailLabel.classList.add("changeLabels");
        } else {
            pwdLabel.classList.add("changeLabels");
        }
    })
}

//button

btnTag.addEventListener("click", () => {
console.log(inputTags[1].value.includes("@gmail.com"))
    if ((inputTags[0].value =="" || inputTags[1].value.includes("@gmail.com") &&  inputTags[2].value == "") && btnTag.id == "") {
        btnTag.classList.remove("secondChangeBtn")
        btnTag.classList.add("changeBtn");
        btnTag.id = "first";
        console.log('hwlo')
    } else if((inputTags[0].value =="" || inputTags[1].value.includes("@gmail.com") &&  inputTags[2].value == "") && btnTag.id == "first"){
        btnTag.id = "";
        btnTag.classList.remove("changeBtn");
        btnTag.classList.add("secondChangeBtn");

    } else {
        container.style.display = "none";
        let h1Tag = document.createElement("h1");
        let text = document.createTextNode("You are now successfully loged in.");
        h1Tag.append(text);
        bodyTag.append(h1Tag);
    }
})
