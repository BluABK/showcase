// Model
// let dropdownOptions = 
let href = "../placeholder.html";
let content = "Please select content from the dropdown menu.";

// View
function updateViews() {
    updateViewTopBar();
    updateViewContent();
}

function updateViewTopBar() {
    document.getElementById("top-bar").innerHTML = `
        <div id="dropdown" class="dropbtn" onClick="showDropdownMenu(this)">Load task…<div>
            <div id="myDropdown" class="dropdown-content" onClick="selectDropdownOption(event.target)"></div>
        </div>
    `;

    $("#myDropdown").load("includes.html"); 
}

function updateViewContent() {
    document.getElementById("app").innerHTML = `
        ${content}
    `;
}

// Controller
function loadContent(path, selector="") {
    // Append a whitespace to selector if used.
    if (selector != "") selector = ' ' + selector;

    // Create a temporary DIV element in memory and use load() on it,
    // in order to load the contents of a file into it using JQuery.
    var $div = $('<div>');
    $div.load(`${path}${selector}`, function(){
        content = $(this)[0].innerHTML;

        updateViews();
    });
}

function showDropdownMenu(a) {
    a.parentNode.getElementsByClassName('dropdown-content')[0].classList.toggle("show");
}

function selectDropdownOption(element) {
    content = loadContent(element.getAttribute("href"));
}

updateViews();