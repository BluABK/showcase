// Model

// View
function updateViews() {
    updateViewTopBar();
    updateViewContent();
}

function updateViewTopBar() {
    document.getElementById("top-bar").innerHTML = `
        test
    `;
}

function updateViewContent() {
    document.getElementById("app").innerHTML = `
        asdf
    `;
}

// Controller

updateViews();