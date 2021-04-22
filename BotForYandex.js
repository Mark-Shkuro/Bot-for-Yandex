let keywords = ["Гобой","Флейта","Как звучит флейта","Фагот","Кларнет"];
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

