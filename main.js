const downArrow = document.getElementById("down");
const upArrow = document.getElementById("up");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

const ball = document.getElementById("ball");
const container = document.getElementById("playing-field");

const moveRight = function () {
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    if (left + ball.clientWidth <= container.clientWidth) {
        ball.style.left = left + "px";
    }
};

const moveLeft = function () {
    let left = parseInt(ball.style.left) || 0;
    left -= 15;
    if (left >= 0) {
        ball.style.left = left + "px";
    }
};

const moveUp = function () {
    let top = parseInt(ball.style.top) || 0;
    top -= 15;
    if (top >= 0) {
        ball.style.top = top + "px";
    }
};

const moveDown = function () {
    let top = parseInt(ball.style.top) || 0;
    top += 15;
    if (top + ball.clientHeight <= container.clientHeight) {
        ball.style.top = top + "px";
    }
};


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        moveUp(e);
    }
    if (e.key === "ArrowDown") {
        moveDown(e);
    }
    if (e.key === "ArrowLeft") {
        moveLeft(e);
    }
    if (e.key === "ArrowRight") {
        moveRight(e);
    }
});
