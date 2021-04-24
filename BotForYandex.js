// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


let sites = {
'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai': ["Гобой","Флейта","Как звучит флейта","Фагот","Кларнет"],
'https://crushdrummers.ru':  ["барабанное шоу crush","crushDrummers","Шоу барабанщиков crush"]
}
let site = Object.keys(sites)[Math.floor(Math.random() * Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[Math.floor(Math.random()* keywords.length)];
let buttonSearch = document.querySelector(".button_theme_search");
let yandexInput = document.getElementById('text');
if (buttonSearch != undefined){ // Главная страница яндекс или нет
   document.cookie = "site = " + site;
   let i = 0;
   let timerId = setInterval(function(){
        yandexInput.value += keyword[i++]
        if(keyword.length == i){
          clearInterval(timerId);
          buttonSearch.click();
        }
    },500);
} else if(location.hostname === "yandex.ru"){
    let links = document.links;
    let goToTheNextPage = true;
    let currentPage = document.querySelectorAll(".pager__item_current_yes")[0].innerText;
    site = getCookie('site');
for(let i = 0; i<links.length; i++){
    let link = links[i];
    if(link.href.indexOf(site) != -1){
        link.target = "_self";
        link.click();
        goToTheNextPage = false;
        break;
   }
 }
    let nextPage = document.querySelector(".pager__item_kind_next");
    if(currentPage > 4) location.href = "https://yandex.ru/";
    else if(goToTheNextPage) nextPage.click();
} else {
    if(Math.random() > 0.4) location.href = "https://yandex.ru/";
    let links = document.links;
    setInterval(function() {
        let index = Math.floor(Math.random()*links.length);
        let link = links[index];
        if(link.href.includes(location.hostname)) link.click();
    },3000);
}

// Первый вариант
/*let keywords = ["Гобой","Флейта","Как звучит флейта","Фагот","Кларнет"];
let keyword = keywords[Math.floor(Math.random()* keywords.length)];
let buttonSearch = document.querySelector(".button_theme_search");
if (buttonSearch != undefined){ // Главная страница яндекс или нет
    document.getElementById('text').value = keyword;
    buttonSearch.click();
} else {
    let links = document.links;
    let goToTheNextPage = true;
    let currentPage = document.querySelectorAll(".pager__item_current_yes")[0].innerText;
for(let i = 0; i<links.length; i++){
    let link = links[i];
    if(link.href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai') != -1){
    link.click();
    goToTheNextPage = false;
    break;
  }
 }
    let nextPage = document.querySelector(".pager__item_kind_next");
    if(currentPage > 4 ) location.href = "https://yandex.ru/"
    else if(goToTheNextPage) nextPage.click();
   }
*/
