
let global=document.createElement("div");
document.body.prepend(global);
global.id="global";
let menu=document.createElement("div-1");
menu.id="menu"
global.appendChild(menu);
let ul=document.createElement("ul");
menu.appendChild(ul);
let li1=document.createElement("li");
ul.appendChild(li1);

let accueil=document.createElement("button");
accueil.innerText="Accueil";
li1.appendChild(accueil);
accueil.setAttribute("onclick","afficherPage('page-accueil')");

let li2=document.createElement("li");
ul.appendChild(li2);

let contact=document.createElement("button");
contact.innerText="Contact";
li2.appendChild(contact);
contact.setAttribute("onclick","afficherPage('page-contact')");

let contenu=document.createElement("div");
global.appendChild(contenu);
contenu.id="contenu";

let div2=document.createElement("div");
contenu.appendChild(div2);
div2.className="page";
div2.id="page-accueil";

let h2=document.createElement("h2");
div2.appendChild(h2);
h2.innerText="Accueil";

let p1=document.createElement("p");
div2.appendChild(p1);
p1.innerText="Bienvenue sur mon site!";

let div3=document.createElement("div");
div2.appendChild(div3);
div3.id="liste-articles";

let div4=document.createElement("div");
div3.appendChild(div4);
div4.className="article";

let clicbait=document.createElement("h3");
div4.appendChild(clicbait);
clicbait.innerText="CLICBAIT";

let p2=document.createElement("p");
div4.appendChild(p2);
p2.innerText="Je vous ai eu!";

let div5=document.createElement("div");
div3.appendChild(div5);
div5.className="article";

let wow=document.createElement("h3");
div5.appendChild(wow);
wow.innerText="Wow";

let p3=document.createElement("p");
div5.appendChild(p3);
p3.innerText="Ces articles sont de qualité!";

let div6=document.createElement("div");
contenu.appendChild(div6);
div6.id="page-contact";
div6.className="page";
div6.hidden=true;

let h=document.createElement("h2");
div6.appendChild(h);
h.innerText="Contact";

let p4=document.createElement("p");
div6.appendChild(p4);
p4.innerText="Voici mon num:118 218";


//function afficherPage(idPage){
  // console.log(idPage);
  // let divMontrer=document.getElementById(idPage);
   //divMontrer.hidden=false;
//}
function afficherPage(idPage) {
  let pages=document.getElementsByClassName("page");
  let i=0;

  while(i<pages.length){
      pages[i].hidden=true;
      i++;
      // console.log(idPage);
  }

    let divMontrer=document.getElementById(idPage);
    divMontrer.hidden=false;
}
//  if(hidden=false){
  //  page[0].style.visibility="hidden";
// else{
  //  page[0].style.visibility="visible";
//}
//page.hidden=true;

let listearticles=[["Titre1","Hello"],["Titre2","Wow"],["Titre3",""]]