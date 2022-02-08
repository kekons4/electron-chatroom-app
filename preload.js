const { BrowserWindow } = require("electron");

window.addEventListener('DOMContentLoader', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if(element) element.innerText = text;
    }

    for(const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});
