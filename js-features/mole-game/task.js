// if (hole_has-mole){ //крот в лунке
//     dead++ 
// } else {
//     lost++
// }
// let elem = document.getElementById('timer').innerHTML;

let dead = document.getElementById('dead').innerHTML;
let lost = document.getElementById('lost').innerHTML;
function win(){
    alert ("Победа!");
    document.getElementById("dead").innerHTML = 0;
    document.getElementById("lost").innerHTML = 0;
    dead = 0;
    lost = 0;
}
function Lost(){
    alert ("Вы проиграли!");
    document.getElementById("dead").innerHTML = 0;
    document.getElementById("lost").innerHTML = 0;
    dead = 0;
    lost = 0;
}

for (let index = 1; index < 9; index++) {
    
    let elem = document.getElementById('hole'+index);

    elem.addEventListener("click", function() {
        if(elem.classList.contains( 'hole_has-mole' )) {
            console.log("dead = "+dead);
            dead++
            document.getElementById("dead").innerHTML = dead;
            if (dead>=10) win()
        } else {
            lost++
            document.getElementById("lost").innerHTML = lost;
            if (lost>=5) Lost()
        }
    });
}




