function ChangeMode() {
    // primaryBackground, darkBackground, primaryColor, darkColor;
}

const detectorId = document.getElementById('change-mode');
const body = document.getElementsByTagName('body')[0];
const name = document.getElementsByClassName('name');
const intro = document.getElementsByClassName('intro');
const subName = document.getElementsByClassName('sub-name');
const header = document.getElementsByClassName('header');
const left = document.getElementById('left');
const right = document.getElementById('right');
const fasIcon = document.getElementsByClassName('fas');
const footer = document.getElementById('footer-body');


ChangeMode.prototype = {
    toDarkMode: (arr, darkBackground, darkColor) => {
        arr.style.background = darkBackground;
        arr.style.color = darkColor;
    },
    toLightMode: (arr, primaryBackground, primaryColor) => {
        arr.style.background = primaryBackground;
        arr.style.color = primaryColor;
    }
}

const [bodyDiv, nameDiv, introContent, subNameContent, leftDiv, rightDiv, footerDiv] =
    [new ChangeMode(), new ChangeMode(), new ChangeMode(), new ChangeMode(), new ChangeMode(), new ChangeMode(), new ChangeMode()];

function detectChange() {
    if (detectorId.value == "dark") {
        // Dark mode //
        bodyDiv.toDarkMode(body, "black", "whitesmoke");
        leftDiv.toDarkMode(left, "black", "whitesmoke");
        rightDiv.toDarkMode(right, "black", "white");
        footerDiv.toDarkMode(footer, "rgba(26, 26, 26, 0.342)", "darkorange");
        for (let i = 0; i < header.length; i++) {
            header[i].style.borderBottom = "3px solid yellow";
        }
        for (let i = 0; i < name.length; i++) {
            nameDiv.toDarkMode(name[i], "none", "white");
            subNameContent.toDarkMode(subName[i], "none", "rgb(170, 170, 170)");
            introContent.toDarkMode(intro[i], "none", "rgb(255, 68, 0)");
        }

    } else if (detectorId.value == "light") {
        // Light mode //
        bodyDiv.toLightMode(body, "white", "black");
        leftDiv.toLightMode(left, "rgb(0, 0, 95)", "whitesmoke");
        rightDiv.toLightMode(right, "white", "black");
        footerDiv.toLightMode(footer, "rgba(226, 226, 226, 0.342)", "black");
        footer.style.backdropFilter = "saturate(180%) blur(5px)";
        for (let i = 0; i < name.length; i++) {
            nameDiv.toLightMode(name[i], "none", "black");
            subNameContent.toLightMode(subName[i], "none", "white");
            introContent.toLightMode(intro[i], "none", "black");
        }
        for (let i = 0; i < header.length; i++) {
            header[i].style.borderBottom = "3px solid black";
            if (window.matchMedia("(max-width: 850px)").matches) {
                // If @media screen == minWidth(arr passed);
                left.style.background = "white";
                left.style.color = "black";
            } else {
                // Change to grey if on big screen
                left.style.background = "rgb(0, 0, 95)";
                left.style.color = "whitesmoke";
            }
        }
    }
}
