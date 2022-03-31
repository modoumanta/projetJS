

//======================================================================================================
// le point d'interrogation


let mes = document.querySelector('.messag');
let mese = document.querySelector('.mest');
mes.addEventListener('click',messa);
mese.addEventListener('click',clean);

let cadreMess = document.createElement('div');
cadreMess.classList.add('me');

let cadre = document.querySelector('.mess');

cadre.append(cadreMess);

function messa () {
    cadreMess.innerHTML=`Notice<br><ul><li>Lorsque vous saisissez une lettre qui n'appartient pas au mot cle
    toutes les cases seront noires</li><li>Appuier sur clear pour tout éffacer en cas d'erreure</li><li>Lorsque vous cliquerez sur verify avec le bon resultat; vous verrez un lien next pour passer au level suivant </li><li>Vous aurez droit a une aide au level 5 et vouss perderez des pieces(4)</li></ul>click sur (!?) pour enlever la notice du jeu`
}

function clean () {
    cadreMess.innerHTML=` `
    cadreAide.innerHTML=``
}

console.log(messa);

//===================================================================================================



//====================================================================================================
//========================================================
//resultat faux


let res1 =document.querySelector('.result1');
let res2 =document.querySelector('.result2')
let res3 =document.querySelector('.result3')
let res4 =document.querySelector('.result4')
let res5 =document.querySelector('.result5')

//=========================================================

 let ff1=document.querySelector('.faild11');
 ff1.addEventListener('click',faux);
 let ff2=document.querySelector('.faild12');
 ff2.addEventListener('click',faux1);
 let ff3=document.querySelector('.faild13');
 ff3.addEventListener('click',faux2);
 let ff4=document.querySelector('.faild14');
 ff4.addEventListener('click',faux3);
 let ff5=document.querySelector('.faild15');
 ff5.addEventListener('click',faux4);
 let ff6=document.querySelector('.faild16');
 ff6.addEventListener('click',faux5);
 let ff7=document.querySelector('.faild17');
 ff7.addEventListener('click',faux6);

 let R1=document.createElement('div');
 R1.classList.add('resultat1');
 res1.append(R1);
 let R2=document.createElement('div');
 R2.classList.add('resultat2');
 res2.append(R2);
 let R3=document.createElement('div');
 R3.classList.add('resultat3');
 res3.append(R3);
 let R4=document.createElement('div');
 R4.classList.add('resultat4');
 res4.append(R4);
 let R5=document.createElement('div');
 R5.classList.add('resultat5');
 res5.append(R5);
 
 function faux (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 function faux1 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 function faux2 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 function faux3 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 function faux4 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 function faux5 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 function faux6 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
    }
 //==========================================================
 //==========================================================



 //==========================================================
 // nettoyage

 let clea =document.querySelector('.clean1');
 clea.addEventListener('click',clear);
 
 function clear () {
     R1.innerHTML=``;
     R2.innerHTML=``;
     R3.innerHTML=``;
     R4.innerHTML=``;
     R5.innerHTML=``;
     cadreAide.innerHTML=``;
     R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     cadreNext.innerHTML=` `
    i=''
    j=''
    k=''
    l=''
    m=''
 }

 //============================================================

 //============================================================
 //aide

 let cadreAide = document.createElement('div');
cadreAide.classList.add('hel');
let Aide = document.querySelector('.aide1');
Aide.addEventListener('click',help);

cadre.append(cadreAide)
function help () {
    cadreAide.innerHTML=`Vu votre niveau creuse encore votre meninge  <br> click sur (clear || !?) pour enlever la notice aide`
}
 //============================================================

 //============================================================
//bon resultat 

let R11=document.createElement('div');
R11.classList.add('resultat11');
res1.append(R11);

let lett1 =document.querySelector('.lettreBB')
lett1.addEventListener('click',boutonB)
let i='';
let j='';
let k='';
let l='';
let m='';
function boutonB(){
    i+=1
    R11.innerHTML=`B`
}

let R12=document.createElement('div');
R12.classList.add('resultat12');
res2.append(R12);

let lett2 =document.querySelector('.lettreAA')
lett2.addEventListener('click',boutonA)
function boutonA(){
    j+=1
    R12.innerHTML=`A`
}

let R13=document.createElement('div');
R13.classList.add('resultat13');
res3.append(R13);
let lett3 =document.querySelector('.lettreN')
lett3.addEventListener('click',boutonL1)
function boutonL1(){
    k+=1
    R13.innerHTML=`N`
}

let R14=document.createElement('div');
R14.classList.add('resultat14');
let lett4 =document.querySelector('.lettreD')
lett4.addEventListener('click',boutonL)
res4.append(R14);
function boutonL(){
    l+=1
    R14.innerHTML=`D`
}

let R15=document.createElement('div');
R15.classList.add('resultat15');
res5.append(R15);
let lett5 =document.querySelector('.lettreEE')
lett5.addEventListener('click',boutonE)
function boutonE(){
    m+=1
    R15.innerHTML=`E`
}

let apre =document.querySelector('.next1');
 apre.addEventListener('click',nex)

 let cadreNext = document.querySelector('.lien1');




function nex () {
    if(i=='1' && j=='1' && k=='1' && l=='1' && m=='1'){
        alert(
            "CONGRATULATION"
        )
        cadreNext.innerHTML=`next`
    }
    else{
        alert(
            "RETRY AGAIN"
        )
        R1.innerHTML=``;
        R2.innerHTML=``;
        R3.innerHTML=``;
        R4.innerHTML=``;
        R5.innerHTML=``;
        R11.innerHTML=``
        R12.innerHTML=``
        R13.innerHTML=``
        R14.innerHTML=``
        R15.innerHTML=``
       i=''
       j=''
       k=''
       l=''
       m=''
    }
  }
