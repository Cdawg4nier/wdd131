const input = document.querySelector("#favchap");
const addButton = document.querySelector("#add-chapt-button");
const list = document.querySelector("#list");

input.value = '';

addButton.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        let li = document.createElement("li");
        let delButton = document.createElement("button")
        li.textContent = input.value;
        delButton.textContent = '❌';
        li.append(delButton);
        list.append(li);
        delButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        })
        input.value = '';
    }
})
input.focus();