window.onload = function() {
    function highlight() {
        window.addEventListener("keydown", (event) => {
            var key = event.key;
            console.log(event.currentTarget);
            if (key == 'f'){
                var facebook = document.querySelector(".fa-facebook");
                console.log(facebook);
                var fClasses = facebook.classList.add("highlighted");
                facebook.style.background = 'red';
            }
            if (key == 'y'){
                var youtube = document.querySelector(".fa-youtube");
                var yClasses = youtube.classList.add("highlighted");
                youtube.style.background = 'blue';
            }
            if (key == 'r'){
                var reddit = document.querySelector(".fa-reddit");
                var rClasses = reddit.classList.add("highlighted");
                reddit.style.background = 'cyan';
            }
        })
    }
    setTimeout(highlight, 2000);
}