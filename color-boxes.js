var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     let rand = Math.floor(Math.random()*4);
     switch (rand){
     case rand = 0: 
     all[i].style.backgroundColor = "red"
     break;
     case rand = 1: 
     all[i].style.backgroundColor = "yellow"
     break;
     case rand = 2: 
     all[i].style.backgroundColor = "blue"
     break;
     case rand = 3: 
     all[i].style.backgroundColor = "white"
     break;
     default: break;
    }
}

for (var i=0, max=all.length; i < max; i++){
    all[i].style.border = '0.1em solid'}