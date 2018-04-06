/*Gère le placement de la section intro:*/
var tailleNavBar = getComputedStyle(document.querySelector('nav')).height//récupère la hauteur de ma bare de navigation
var intro = document.querySelector('.header-intro');//sélectionne la class de ma <section> 'intro'
intro.style.marginTop = tailleNavBar;   //Affecte la taille height de la navbar à la propriété margin-top de la section intro

/*Section compétence(a revoir/ optimiser)*/
var computedSkill = document.querySelector('.item1');
var softSkill = document.querySelector('.item2');
var desktopSoft = document.querySelector('.item3');
var projectManage = document.querySelector('.item4');

var language = ['C','Javascript','JAVA', 'HTML'];
var IDE = ['VSCODE', 'Eclipse', 'Sublime Texte', 'code block'];
var projectSkill = ["Découpage d'un projet (OBS, RACI)", "Diagrammes(PERT, GANTT)", "Analyse fonctionnelle(interne, externe)", "toto"];
var deskSoft = ['word', 'powerpoint', 'photoshop', 'ggg'];

for(var i = 0; i < language.length; i++){

    var liTag = document.createElement('li');
    liTag.innerHTML = language[i];
    computedSkill.appendChild(liTag);

    var liTag2 = document.createElement('li');
    liTag2.innerHTML = IDE[i];
    softSkill.appendChild(liTag2);

    var liTag3 = document.createElement('li');
    liTag3.innerHTML = projectSkill[i];
    projectManage.appendChild(liTag3);

    var liTag4 = document.createElement('li');
    liTag4.innerHTML = deskSoft[i];
    desktopSoft.appendChild(liTag4);
}



