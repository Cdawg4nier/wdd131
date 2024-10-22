const input = document.querySelector("#favchap");
const addButton = document.querySelector("#add-chapt-button");
const list = document.querySelector("#list");

input.value = '';

addButton.addEventListener("click", () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(item) {
    let li = document.createElement("li");
    let delButton = document.createElement("button")
    li.textContent = input.value;
    delButton.textContent = '❌';
    li.append(delButton);
    list.append(li);
    delButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}