
var albums = ["The Infamous", "The Big Picture", "Ready To Die"];
var culori = ["red", "blue", "green", "purple", "yellow", "cyan", "lightgrey", "black", "white"];
var randomAlbum = Math.floor(Math.random() * albums.length);
console.log(albums[randomAlbum]);

var reloadButton = document.getElementById("reload");
reloadButton.onclick = function() {
    location.reload();
}

var gues = localStorage.getItem("localTest");

if (gues) {
    var lg = document.createElement("p");
    lg.innerHTML = `Last attempt: ${gues}`;
    document.querySelector(".photo-container").appendChild(lg);
}


var startButton = document.getElementById("start")
startButton.onclick = function() {
    var nume = document.getElementById("numeAlbum");
    var sbtButton = document.getElementById("buton");
    var timp = document.getElementById("time");
    var text = document.getElementById("text");
    nume.style.visibility = "visible";    
    sbtButton.style.visibility = "visible";
    timp.style.visibility = "visible";    
    text.style.visibility = "visible";
    startButton.style.visibility = "hidden";
    var time = 60;
    var hint1 = document.createElement("p");
    hint1.setAttribute("id", "h1");
    var hint2 = document.createElement("p");
    hint2.setAttribute("id", "h2");
    var hint3 = document.createElement("p");
    hint3.setAttribute("id", "h3");
    var hint4 = document.createElement("p");
    hint4.setAttribute("id", "h4");
    var pozaFinala = document.createElement("img");
    if (albums[randomAlbum] == "The Infamous") {
        hint1.innerHTML = "East-coast rap";
        hint2.innerHTML = "Aparut in 1995";
        hint3.innerHTML = "Nas, Raekwon, Ghostface Killah, Q-Tip ca guests";
        hint4.innerHTML = "Lansat de un grup de 2 persoane";
        pozaFinala.src = "Poze/infamous.jpg";
        pozaFinala.alt = "The Infamous";
    }
    if (albums[randomAlbum] == "The Big Picture") {
        hint1.innerHTML = "East-coast rap";
        hint2.innerHTML = "Produs de DJ Premier";
        hint3.innerHTML = "Planuit sa fie lansat in 1999";
        hint4.innerHTML = "Lansat postum in 2000";
        pozaFinala.src = "Poze/picture.jpg";
        pozaFinala.alt = "The Big Picture";
    }
    if (albums[randomAlbum] == "Ready To Die") {
        hint1.innerHTML = "East-coast rap";
        hint2.innerHTML = "Album de debut";
        hint3.innerHTML = "Lansat in 1994";
        hint4.innerHTML = "Singurul album lansat in viata artistului";
        pozaFinala.src = "Poze/r2d.jpg";
        pozaFinala.alt = "The Infamous";
    }

var cnt = 0;
var raspuns;
const numeRegex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;

function updateTime() {
    if (time >= 0)
        {
            var culoareRandom = Math.floor(Math.random() * culori.length);
            console.log(culori[culoareRandom]);
            var submit = document.getElementById("time");
            submit.style.color = culori[culoareRandom];
            document.getElementById("buton").onclick = function() {
            raspuns = document.getElementById("text").value;
            console.log(raspuns);
            if (!numeRegex.test(raspuns)) {
                alert("Nume invalid");
            }
            else {
            if (raspuns.toUpperCase() == albums[randomAlbum].toUpperCase()) {
                var bravo = document.createElement('p');
                pozaFinala.style.objectFit = "fill";
                pozaFinala.style.width = "100%";
                pozaFinala.style.height = "100%";
                bravo.innerHTML = "Bravo!";
                document.querySelector(".input").appendChild(pozaFinala);
                document.querySelector(".photo-container").appendChild(bravo);
                localStorage.setItem("localTest", albums[randomAlbum]);
                clearInterval(timerInterval);
            }
            else {
                switch(cnt) {
                    case 0: {
                        document.querySelector(".photo-container").appendChild(hint1);
                        break;
                    }
                    case 1: {
                        document.querySelector(".photo-container").appendChild(hint2);
                        break;
                    }
                    case 2: {
                        document.querySelector(".photo-container").appendChild(hint3);
                        break;
                    }
                    case 3: {
                        document.querySelector(".photo-container").appendChild(hint4);
                        break;
                    }
                }
                time -= 5;
                cnt++;
            }
        }
    }
            time--;
            document.getElementById("time").innerHTML = time;
        
    }
        else {
            var lost = document.createElement('p');
            lost.innerHTML = "Ai pierdut!";
            document.querySelector(".photo-container").appendChild(lost);
            var nume = document.getElementById("numeAlbum");
            var sbtButton = document.getElementById("buton");
            var timp = document.getElementById("time");
            var text = document.getElementById("text");
            document.querySelector(".input").appendChild(pozaFinala);
            pozaFinala.style.objectFit = "fill";
            pozaFinala.style.width = "100%";
            pozaFinala.style.height = "100%";
            document.getElementById("h1").remove();
            document.getElementById("h2").remove();
            document.getElementById("h3").remove();
            document.getElementById("h4").remove();
            var lg = document.createElement("p");
            ultimul = document.createElement("p");
            ultimul.innerHTML = "Ultimul raspuns: ";
            document.querySelector(".photo-container").appendChild(ultimul); 
            localStorage.setItem("localTest", albums[randomAlbum]);
            clearInterval(timerInterval);
        }
}

const timerInterval = setInterval(updateTime, 1000);
}
