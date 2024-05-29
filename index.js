let matches = document.getElementById("matches")
let pathname = window.location.pathname;
console.log(pathname)
switch(pathname) {
   case "/html/matches.html" :
        matches.style.borderBottom = '3px solid red';
        matches.style.bottom = 0;
        matches.style.height = 16;
        console.log(matches)
       break;
   case "/html/events.html" :
       console.log("game");
       break;
    case "/html/ranking.html" :
        console.log("home");
        break;
    case "/html/stats.html" :
        console.log("home");
        break;
}
if(window.location.pathname == '/Matches'){
    matches.style.borderBottom = '3px solid white';
    matches.style.bottom= 0;
    matches.style.height =  16;
    console.log("yo")
} else {
    matches.style.removeProperty('border-bottom')
    matches.style.removeProperty('bottom')
    matches.style.removeProperty('height')

}