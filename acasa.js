window.onload = function() {
    var player = document.querySelector(".street-struck");
    var text = document.querySelector(".lyrics");
    var container = document.querySelector(".quote");
    text.addEventListener("click", (event) => {
        window.alert("Big L Lifestylez ov da poor and dangerous -M.V.P");
        event.stopPropagation();
    })
    container.addEventListener("click", (event) => {
        player.play();
        event.stopPropagation();
    })
}