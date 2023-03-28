let elem = document.getElementById('timer').innerHTML;

// elem = 10;
timerId = setInterval(function() {
    if (elem <= 0){
        clearTimeout(timerId);
        alert("Вы победили в конкурсе!");
        return; 
    }
	--elem;
    document.getElementById("timer").innerHTML = elem;
    
}, 1000)




