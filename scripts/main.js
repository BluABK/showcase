// Model
let menuBarDiv = `<div id="menu-bar"></div>`;
let menusDivHTML = "";
let href = "../placeholder.html";
let content = "Please select content from the dropdown menu.";
let shownMenu = null;

// View
function updateViews() {
    updateViewTopBar();
    updateViewContent();
}

function updateViewTopBar() {
    // console.log("menusDiv (view)", menusDivHTML);

    menuBarDiv = `
        <div id="menu-bar">${menusDivHTML}</div>
    `;

    document.getElementById("top-bar").innerHTML = `
        ${menuBarDiv}
    `;
    // Populate item contents
    // $("#dropdown-includes-menus").load("includes.html", ".menu");
    // $("#dropdown-element-outer").load("includes.html", ".dropdown-outer-item");
    // $("#dropdown-element-inner").load("includes.html");
}

function updateViewContent() {
    document.getElementById("app").innerHTML = `
        ${content}
    `;
}

// Controller
/**
 *
 * @param {String} name
 * @param {HTMLCollection} items
 */
function addMenu(name, items) {
    let itemsHTML = "";
    let menuDiv = document.createElement("div");
    // console.log("name", name);
    // console.log("items", items);

    for (let item of items) {
        itemsHTML += item.outerHTML;
    }

    menuDiv = `
        <div class="dropbtn">
            <div class="menu-label" onClick="showDropdownMenu(this)">${name}▾</div>

            <div class="dropdown-content" onClick="selectDropdownOption(event.target)">
                ${itemsHTML}
            </div>
        </div>
    `;

    menusDivHTML += menuDiv;

    return menuDiv;
}

function addMenus(menuElements) {
    console.log("menuElements", menuElements);
    for (let menuElement of menuElements) {
        let retv = addMenu(menuElement.getAttribute("name"), menuElement.children);
        // console.log("Added menu", retv);
    }
}

function loadMenu(path, selector="") {
    // Append a whitespace to selector if used.
    if (selector != "") selector = ' ' + selector;

    // Create a temporary DIV element in memory and use load() on it,
    // in order to load the contents of a file into it using JQuery.
    var $div = $('<div>');
    $div.load(`${path}${selector}`, function(){
        // content = $(this)[0].innerHTML;
        addMenus($(this)[0].children);

        updateViews();
    });
}


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

function closeDropdownMenu(menuElement) {
    menuElement.classList.remove("show");
}

function showDropdownMenu(subMenuElement) {
    let clickedElementParent = subMenuElement.parentNode.getElementsByClassName('dropdown-content')[0]
    
    // Close currently open menu (if any).
    if (shownMenu) {
        closeDropdownMenu(shownMenu);
    }

    // Show the currently opened menu.
    clickedElementParent.classList.toggle("show");

    // Store the currently opened menu.
    shownMenu = clickedElementParent;
}

// function showInnerDropdownMenu(optionElement) {
//     console.log(optionElement);
//     optionElement.parentNode.getElementsByClassName('dropdown-inner-content')[0].classList.toggle("show");
// }

// function hoverOuterDropdownOption(optionElement) {
//     console.log(optionElement);
//     showInnerDropdownMenu(optionElement);
//}

function selectDropdownOption(element) {
    console.log("element", element);
    console.log("element href ", element.getAttribute("href"));
    content = loadContent(element.getAttribute("href"));
}

updateViews();
loadMenu("../includes.html");