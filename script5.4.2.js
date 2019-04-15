var p = 0
var i = 0
var f = function() {
    while (p < 7) {
        while (i < 7) {
            var square = document.createElement("div");
            var container = document.getElementById("container")
            container.appendChild(square);
            square.style.width = "50px";
            if (i % 2 == 0) {
            square.style.backgroundColor = "blue";
            } else {
                square.style.backgroundColor = "white";
            }
            square.classList.add("square");
            i = i + 1
        }
        p = p + 1
        i = 0
    }
}
f()