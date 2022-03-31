

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
let res6 =document.querySelector('.result6')
let res7 =document.querySelector('.result7')

//=========================================================

 let ff1=document.querySelector('.faild17');
 ff1.addEventListener('click',faux);
 let ff2=document.querySelector('.faild12');
 ff2.addEventListener('click',faux1);
 let ff3=document.querySelector('.faild13');
 ff3.addEventListener('click',faux2);
 let ff4=document.querySelector('.faild14');
 ff4.addEventListener('click',faux3);
 let ff6=document.querySelector('.faild16');
 ff6.addEventListener('click',faux5);

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
 let R6=document.createElement('div');
 R6.classList.add('resultat6');
 res6.append(R6);
 let R7=document.createElement('div');
 R7.classList.add('resultat7');
 res7.append(R7);
 
 function faux (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R6.innerHTML=`F`;
    R7.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     R16.innerHTML=``
     R17.innerHTML=``
    }
 function faux1 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R6.innerHTML=`F`;
    R7.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     R16.innerHTML=``
     R17.innerHTML=``
    }
 function faux2 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R6.innerHTML=`F`;
    R7.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     R16.innerHTML=``
     R17.innerHTML=``
    }
 function faux3 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R6.innerHTML=`F`;
    R7.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     R16.innerHTML=``
     R17.innerHTML=``
    }
 function faux5 (){
    R1.innerHTML=`F`;
    R2.innerHTML=`F`;
    R3.innerHTML=`F`;
    R4.innerHTML=`F`;
    R5.innerHTML=`F`;
    R6.innerHTML=`F`;
    R7.innerHTML=`F`;
    R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     R16.innerHTML=``
     R17.innerHTML=``
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
     R6.innerHTML=``;
     R7.innerHTML=``;
     cadreAide.innerHTML=``;
     R11.innerHTML=``
     R12.innerHTML=``
     R13.innerHTML=``
     R14.innerHTML=``
     R15.innerHTML=``
     R16.innerHTML=``
     R17.innerHTML=``
     cadreNext.innerHTML=` `
    i=''
    j=''
    k=''
    l=''
    m=''
    n=''
    o=''
 }

 //============================================================

 //============================================================
 //aide
let z=''
let lettttt=document.querySelector('.ch')


 let cadreAide = document.createElement('div');
cadreAide.classList.add('hel');
let Aide = document.querySelector('.aide1');
Aide.addEventListener('click',help);

cadre.append(cadreAide)
function help () {
    z+=1
    if(z==1){
        lettttt.innerHTML=`16`
        cadreAide.innerHTML=`Vous aurez droit qu'a une lettre et est:<br>'L'<br> click sur (clear || !?) pour enlever la notice aide`
    }
}
 //============================================================

 //============================================================
//bon resultat 



let R11=document.createElement('div');
R11.classList.add('resultat11');
res2.append(R11);

let lett1 =document.querySelector('.lettreBB')
lett1.addEventListener('click',boutonB)
let i='';
let j='';
let k='';
let l='';
let m='';
let n='';
let o='';
function boutonB(){
    i+=1
    R11.innerHTML=`E`
}

let R12=document.createElement('div');
R12.classList.add('resultat12');
res5.append(R12);

let lett2 =document.querySelector('.lettreAA')
lett2.addEventListener('click',boutonA)
function boutonA(){
    j+=1
    R12.innerHTML=`L`
}

let R13=document.createElement('div');
R13.classList.add('resultat13');
res3.append(R13);
let lett3 =document.querySelector('.lettreN')
lett3.addEventListener('click',boutonL1)
function boutonL1(){
    k+=1
    R13.innerHTML=`U`
}

let R14=document.createElement('div');
R14.classList.add('resultat14');
let lett4 =document.querySelector('.lettreD')
lett4.addEventListener('click',boutonL)
res6.append(R14);
function boutonL(){
    l+=1
    R14.innerHTML=`L`
}

let lett5=document.querySelector('.lettreS');
lett5.addEventListener('click',boutonS);

let R15=document.createElement('div');
R15.classList.add('resultat15');
res4.append(R15);
function boutonS(){
    n+=1
    R15.innerHTML=`I`
}

let R16=document.createElement('div');
R16.classList.add('resultat16');
res7.append(R16);
let lett6 =document.querySelector('.lettreEE')
lett6.addEventListener('click',boutonE)
function boutonE(){
    m+=1
    R16.innerHTML=`E`
}

let R17=document.createElement('div');
R17.classList.add('resultat17');
res1.append(R17);
let lett7 =document.querySelector('.lettreF')
lett7.addEventListener('click',bouton)
function bouton(){
    o+=1
    R17.innerHTML=`F`
}

let apre =document.querySelector('.next1');
 apre.addEventListener('click',nex)

 let cadreNext = document.querySelector('.lien1');




function nex () {
    if(i=='1' && j=='1' && k=='1' && l=='1' && m=='1' && n=='1'){
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
        R6.innerHTML=``;
        R11.innerHTML=``
        R12.innerHTML=``
        R13.innerHTML=``
        R14.innerHTML=``
        R15.innerHTML=``
        R16.innerHTML=``
       i=''
       j=''
       k=''
       l=''
       m=''
       n=''
    }
  }
