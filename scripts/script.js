let divButton=document.getElementById("button");
// let mot=document.getElementById("mot");
let affichageEssais=document.getElementById("numbre");
let liste=["A","Z","E","R","T","Y","U","I","O","P",
"Q","S","D","F","G","H","J","K","L","M",
"W","X","C","B","N"];
// let generateurMot;
// let mots=document.getElementById("mots");
let listeMots=["HOMME","FEMME","FLEUR","JOUR","SOIR"];
let motMystere="";
let correctLettre=[];
let essaisRestant = 6;

// au chargement de a page js tu fais...
function init() {
    //  reset de la partie
    divButton.innerHTML = "";
    correctLettre = [];
    essaisRestant = 6;
    mots.innerText = "";
    // 🌼 восстановить цветок
    const flower = document.getElementById("flower");
    flower.classList.remove("flower-win", "flower-lose");
    document.querySelectorAll('#flower .petal').forEach(p => p.classList.remove('fallen'));

    const zone = document.getElementById("messageZone");
    if (zone) zone.innerHTML = "";
    // la reation de boutton
    creerButton();
    changeMot();
    updateEssaisRestant();
    creerBoutonRestart();
}
const zone = document.getElementById("messageZone");
if (zone && zone.firstChild) {
    zone.firstChild.classList.add("fadeOut");
    setTimeout(() => zone.innerHTML = "", 1000);
}


function creerButton(){
    divButton.innerHTML = "";
    for (let i=0; i<liste.length; i++){
        let button=document.createElement("button");
        button.className="lettre";
        button.innerText=liste[i];
        button.dataset.letter = liste[i];
        button.addEventListener("click",function(){
            Click(this.dataset.letter, this)} );
        divButton.appendChild(button);
    }
}
// creerButton();
function changeMot(){
    // mots.innerText = "";
    let generateurMot=Math.floor(Math.random()*listeMots.length);
    motMystere=listeMots[generateurMot];
    console.log("Mot mystere :", motMystere);
    for( let i=0; i<motMystere.length; i++){
        mots.innerText+= " _ ";
    
    }
}


function Click(lettreActuel, buttonElement){
    buttonElement.disabled = true;

    if (motMystere.includes(lettreActuel)) {
        if (!correctLettre.includes(lettreActuel)){
            correctLettre.push(lettreActuel);
            }
    } else {
        essaisRestant--;
        removePetal();
    }
    
    let displayText = ""
    for (let i = 0; i < motMystere.length; i++) {
        const letter = motMystere[i];
        displayText += (correctLettre.includes(letter) ? letter : "_") + " ";
    }
    mots.innerHTML = displayText.trim();

    updateEssaisRestant();
}
function updateEssaisRestant() {
    if (affichageEssais) {
        affichageEssais.innerHTML = `Essais restant(s) : ${essaisRestant}`;
    }
    if (essaisRestant <= 0) {
        revealWord();
        disableAllButtons();
        showLoseMessage();
        showMessage(`Perdu 😢<br>Le mot était : <span>${motMystere}</span>`, "lose")
    } else if (checkWin()) {
        disableAllButtons();
        showWinMessage();
        showMessage("Bravo ! Vous avez gagné 🎉", "win")
    }

}

function revealWord() {
    if (mots) {
        let reveal = "";
        for (let i = 0; i < motMystere.length; i++) {
            reveal += motMystere[i] + " ";
    }
    mots.innerText = reveal.trim();
    }
}

function showMessage(text, type) {
    const zone = document.getElementById("messageZone");
    zone.innerHTML = ""; // очищаем предыдущие сообщения

    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.innerHTML = text;
    zone.appendChild(msg);

  // автоматически скрыть через 3 сек.
    setTimeout(() => {
        msg.classList.add("fadeOut");
    }, 2500);
}
// выключить все кнопки (когда игра закончена)
function disableAllButtons() {
    const buttons = document.querySelectorAll('#button button');
    buttons.forEach(b => b.disabled = true);
}
function checkWin() {
    if (!motMystere) return false;
    for (let ch of motMystere) {
        if (!correctLettre.includes(ch)) return false;
    }
    return true;
}
function removePetal() {
    const petals = document.querySelectorAll('#flower .petal:not(.fallen)');
    if (petals.length > 0) {
        const petal = petals[0];
        petal.classList.add('fallen');
    }
}
function showWinMessage() {
    showMessage("GAGNÉ !", "win");

    const flower = document.getElementById("flower");
    flower.classList.add("flower-win"); // 🌸 запускаем вращение
}

function showLoseMessage() {
    showMessage("PERDU !", "lose");

    const flower = document.getElementById("flower");
    flower.classList.add("flower-lose"); // 💀 все лепестки опадают
}

// 🔄  Restart
function creerBoutonRestart() {
    const restartDiv = document.getElementById("restartZone");
    restartDiv.innerHTML = "";
    const restartBtn = document.createElement("button");
    restartBtn.id = "recommencer";
    restartBtn.innerText = "RECOMMENCER";
    restartBtn.addEventListener("click", init);
    restartDiv.appendChild(restartBtn);
    // zone.innerHTML = ""; // очищаем предыдущие сообщения
}

window.onload = ()=>{
    init();
    creerBoutonRestart();
} 