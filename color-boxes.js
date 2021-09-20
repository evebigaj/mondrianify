var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     let rand = Math.floor(Math.random()*4);
     switch (rand){
     case rand = 0: 
     all[i].style.backgroundColor = "red"
     all[i].style.color = "red"
     break;
     case rand = 1: 
     all[i].style.backgroundColor = "yellow"
     all[i].style.color = "yellow"
     break;
     case rand = 2: 
     all[i].style.backgroundColor = "blue"
     all[i].style.color = "blue"
     break;
     case rand = 3: 
     all[i].style.backgroundColor = "white"
     all[i].style.color = "white"
     break;
     default: break;
    }
}

for (var i=0, max=all.length; i < max; i++){
    all[i].style.border = '0.1em solid'}