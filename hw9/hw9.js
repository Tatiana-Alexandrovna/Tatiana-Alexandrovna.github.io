function randomGame(number, random){ 
  random = Math.floor((Math.random() * 100)+1); 
    while (number!== null) { 
      number = prompt('ВВЕДИТЕ ЧИСЛО ОТ 1 ДО 100',''); 
      if (number <1 || number >100){
        console.log('не валидное число')
        } else if(number > random) {
        console.log("Много!"); 
        } else if (number < random) {
        console.log("Мало!"); 
        } else if (number == random) { 
        console.log("Правильно!"); 
        break; 
      } 
    } 
  }; 
    console.log(randomGame());
    while(true){
    const gameAsk = confirm('сыграть еще раз?');
    if (gameAsk) {
      console.log(randomGame());
    } else {
      break
    }
  };