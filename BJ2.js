

//показ правил по запросу

var flag =1;

rulesButton.addEventListener('click', function() {
	if (flag==1) {
	toHideRules.classList.remove('hiddenrules');
	StartImage.classList.add('hidden');
	document.getElementById('rulesButton').value = 'Убрать правила';

	flag = 0;
	}
	else if (flag==0) {
	toHideRules.classList.add('hiddenrules');
	StartImage.classList.remove('hidden');
	document.getElementById('rulesButton').value = 'Уточнить правила';
	flag = 1;	
	}

});

// обработка начала игры

buttonStart.addEventListener('click', function() {
		header.classList.add('hidden');  
		StartImage.classList.add('hidden');
		toHide1.classList.remove('hidden');
		toHide2.classList.remove('hidden');
		toHide3.classList.remove('hidden');
		toHide4.classList.remove('hidden');		
		startCard.classList.remove('hidden');
		toHideRules.classList.add('hidden');
		bigTitle.classList.add('hidden');
	});

// обработка повтора игры

var cashGamer=0;
var cashDealer=0;
var flagReload=0;

buttonReload.addEventListener('click', funcRestart); 
function funcRestart()	{
		header.classList.remove('hidden');  
		StartImage.classList.remove('hidden');
		toHide1.classList.add('hidden');
		toHide2.classList.add('hidden');
		toHide3.classList.add('hidden');
		toHide4.classList.add('hidden');		
		startCard.classList.add('hidden');
		toHideRules.classList.remove('hidden');
		bigTitle.classList.remove('hidden');

		var DealerArray = [];
		var GamerArray = [];
		document.getElementById('cardPicGamer1').src = "img/img_back.jpg";
		document.getElementById('cardPicGamer2').src = "img/img_back.jpg";
		document.getElementById('cardPicGamer3').src = " ";
		document.getElementById('cardPicGamer4').src = " ";
		document.getElementById('cardPicDealer1').src = "img/img_back.jpg";
		document.getElementById('cardPicDealer2').src = " ";
		document.getElementById('cardPicDealer3').src = " ";
		document.getElementById('cardPicDealer4').src = " ";

		document.getElementById('gamerPack').innerHTML = GamerArray;
		document.getElementById('gamerScore').innerHTML = SumCards(GamerArray);
		document.getElementById('dealPack').innerHTML = DealerArray;
		document.getElementById('dealScore').innerHTML = SumCards(DealerArray);

		//this.removeEventListener('click',funcRestart);
		document.getElementById('gameMessage').innerHTML = " "
		buttonReload.classList.add('hidden');
		flagReload = 1;
}

// обработка первой раздачи карт

startCard.addEventListener('click', funcStart); 
function funcStart() {

	if (flagReload ==1){
	GamerArray = [GetCard(), GetCard()];
	DealerArray = [GetCard()];
	}

	document.getElementById('gamerPack').innerHTML = GamerArray;
	document.getElementById('gamerScore').innerHTML = SumCards(GamerArray);
	document.getElementById('dealPack').innerHTML = DealerArray;
	document.getElementById('dealScore').innerHTML = SumCards(DealerArray);
	deny.classList.remove('hidden');
	moreCard.classList.remove('hidden');
	startCard.classList.add('hidden');
	//this.removeEventListener('click', funcStart);

// цикл для подбора и подставления изображений карт

	let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
	let imgArray = ["img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg", "img/img_6.jpg", "img/img_7.jpg", "img/img_8.jpg", "img/img_9.jpg", "img/img_10.jpg", "img/img_J.jpg", "img/img_D.jpg", "img/img_K.jpg", "img/img_A.jpg"];
	let imgArray_1 = ["img_1/img_2.jpg", "img_1/img_3.jpg", "img_1/img_4.jpg", "img_1/img_5.jpg", "img_1/img_6.jpg", "img_1/img_7.jpg", "img_1/img_8.jpg", "img_1/img_9.jpg", "img_1/img_10.jpg", "img_1/img_J.jpg", "img_1/img_D.jpg", "img_1/img_K.jpg", "img_1/img_A.jpg"];		
	let imgArray_3 = ["img_3/img_2.jpg", "img_3/img_3.jpg", "img_3/img_4.jpg", "img_3/img_5.jpg", "img_3/img_6.jpg", "img_3/img_7.jpg", "img_3/img_8.jpg", "img_3/img_9.jpg", "img_3/img_10.jpg", "img_3/img_J.jpg", "img_3/img_D.jpg", "img_3/img_K.jpg", "img_3/img_A.jpg"];
		
		for (i=0; i<cardArray.length; i++) {
			if (cardArray[i] == GamerArray[0]) {
			document.getElementById('cardPicGamer1').src = imgArray[i];
			} 
		}	
		for (l=0; l<cardArray.length; l++) {
			if (cardArray[l] == GamerArray[1]) {
			document.getElementById('cardPicGamer2').src = imgArray_1[l];
			} 
		}
		for (j=0; j<cardArray.length; j++) {
			if (cardArray[j] == DealerArray[0]) {
			document.getElementById('cardPicDealer1').src = imgArray_3[j];
			} 
		}

// Если первые две карты сразу выдали 21

	GamerSumm = SumCards(GamerArray);
	if (GamerSumm == 21) {
		document.getElementById('gameMessage').innerHTML = "21, Банк пробует сравнять"
		}

}
	

// обработка последующих раздач карт

moreCard.addEventListener('click', funcGame);
function funcGame() {
	GamerArray.push(GetCard());
	GamerSumm = SumCards(GamerArray);
	document.getElementById('gamerPack').innerHTML = GamerArray;
	document.getElementById('gamerScore').innerHTML = SumCards(GamerArray);


	// цикл для подбора и подставления изображений карт

	let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
	let imgArray_2 = ["img_2/img_2.jpg", "img_2/img_3.jpg", "img_2/img_4.jpg", "img_2/img_5.jpg", "img_2/img_6.jpg", "img_2/img_7.jpg", "img_2/img_8.jpg", "img_2/img_9.jpg", "img_2/img_10.jpg", "img_2/img_J.jpg", "img_2/img_D.jpg", "img_2/img_K.jpg", "img_2/img_A.jpg"];
	let imgArray_3 = ["img_3/img_2.jpg", "img_3/img_3.jpg", "img_3/img_4.jpg", "img_3/img_5.jpg", "img_3/img_6.jpg", "img_3/img_7.jpg", "img_3/img_8.jpg", "img_3/img_9.jpg", "img_3/img_10.jpg", "img_3/img_J.jpg", "img_3/img_D.jpg", "img_3/img_K.jpg", "img_3/img_A.jpg"];

	for (v=0; v<cardArray.length; v++) {
		if (GamerArray[2] == cardArray[v]) {
		document.getElementById('cardPicGamer3').src = imgArray_2[v];
		} 
	}
	
	for (h=0; h<cardArray.length; h++) {
		if (GamerArray[3] == cardArray[h]) {
		document.getElementById('cardPicGamer4').src = imgArray_3[h];
		} 	
	}

// переходы по набранным очкам

	if (GamerSumm > 21) {
		document.getElementById('gameMessage').innerHTML = "Перебор, банк выиграл"
		//this.removeEventListener('click', funcGame);
		deny.classList.add('hidden');
		moreCard.classList.add('hidden');
		buttonReload.classList.remove('hidden');
		cashDealer+=100;
		cashGamer-=100;
		document.getElementById('cashMessageG').innerHTML = cashGamer;
		document.getElementById('cashMessageD').innerHTML = cashDealer;		
		}
			else if (GamerSumm == 21) {
		document.getElementById('gameMessage').innerHTML = "21, банк пробует сравнять"
		//this.removeEventListener('click', funcGame);
		moreCard.classList.add('hidden');
	}
}

// функция при передаче игры банку(дилеру)

deny.addEventListener('click', funcDeny);
function funcDeny() {
	GamerSumm = SumCards(GamerArray);
	DealerSumm = SumCards(DealerArray);
	moreCard.classList.add('hidden');
	deny.classList.add('hidden');


		// переходы по набранным очкам

	if (GamerSumm > 21) {
		document.getElementById('gameMessage').innerHTML = "Перебор, Банк выиграл"
		buttonReload.classList.remove('hidden');
	}
	else
		document.getElementById('gameMessage').innerHTML = "ИГРАЕТ Банк"

		if (GamerSumm <22) {
		document.getElementById('dealPack').innerHTML = DealerArray;
		document.getElementById('dealScore').innerHTML = SumCards(DealerArray);

			while (DealerSumm < 17) 	{
			DealerArray.push(GetCard());
			DealerSumm = SumCards(DealerArray);
			

			document.getElementById('dealPack').innerHTML = DealerArray;
			document.getElementById('dealScore').innerHTML = SumCards(DealerArray);

				// цикл для подбора и подставления изображений карт
					let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];
				let imgArray   = ["img/img_2.jpg", "img/img_3.jpg", "img/img_4.jpg", "img/img_5.jpg", "img/img_6.jpg", "img/img_7.jpg", "img/img_8.jpg", "img/img_9.jpg", "img/img_10.jpg", "img/img_J.jpg", "img/img_D.jpg", "img/img_K.jpg", "img/img_A.jpg"];
				let imgArray_1 = ["img_1/img_2.jpg", "img_1/img_3.jpg", "img_1/img_4.jpg", "img_1/img_5.jpg", "img_1/img_6.jpg", "img_1/img_7.jpg", "img_1/img_8.jpg", "img_1/img_9.jpg", "img_1/img_10.jpg", "img_1/img_J.jpg", "img_1/img_D.jpg", "img_1/img_K.jpg", "img_1/img_A.jpg"];
				let imgArray_2 = ["img_2/img_2.jpg", "img_2/img_3.jpg", "img_2/img_4.jpg", "img_2/img_5.jpg", "img_2/img_6.jpg", "img_2/img_7.jpg", "img_2/img_8.jpg", "img_2/img_9.jpg", "img_2/img_10.jpg", "img_2/img_J.jpg", "img_2/img_D.jpg", "img_2/img_K.jpg", "img_2/img_A.jpg"];


				for (k=0; k<cardArray.length; k++) {
					if (cardArray[k] == DealerArray[1]) {
					document.getElementById('cardPicDealer2').src = imgArray_2[k];
					} 
				}
				for (w=0; w<cardArray.length; w++) {
					if (cardArray[w] == DealerArray[2]) {
					document.getElementById('cardPicDealer3').src = imgArray_1[w];
					}
				} 
				for (s=0; s<cardArray.length; s++) {
					if (cardArray[s] == DealerArray[3]) {
					document.getElementById('cardPicDealer4').src = imgArray[s];
					}
				} 


			}

		//Подчет итога партии

		if (DealerSumm > 21) {
				document.getElementById('gameMessage').innerHTML = "у банка перебор, вы выиграли"
				buttonReload.classList.remove('hidden');
				deny.classList.add('hidden');
				moreCard.classList.add('hidden');
				cashDealer-=100;
				cashGamer+=100;
				document.getElementById('cashMessageG').innerHTML = cashGamer;
				document.getElementById('cashMessageD').innerHTML = cashDealer;		
		}
		else if (DealerSumm > GamerSumm) {
				document.getElementById('gameMessage').innerHTML = "Банк выиграл"
				buttonReload.classList.remove('hidden');	
				deny.classList.add('hidden');
				moreCard.classList.add('hidden');
				cashDealer+=100;
				cashGamer-=100;
				document.getElementById('cashMessageG').innerHTML = cashGamer;
				document.getElementById('cashMessageD').innerHTML = cashDealer;		
		}
		else if (DealerSumm == GamerSumm) {
				document.getElementById('gameMessage').innerHTML = "РОВНО"
				buttonReload.classList.remove('hidden');	
				deny.classList.add('hidden');
				moreCard.classList.add('hidden');	
		}
		else {
				document.getElementById('gameMessage').innerHTML = "Вы выиграли"
				buttonReload.classList.remove('hidden');		
				deny.classList.add('hidden');
				moreCard.classList.add('hidden');
				cashDealer-=100;
				cashGamer+=100;
				document.getElementById('cashMessageG').innerHTML = cashGamer;
				document.getElementById('cashMessageD').innerHTML = cashDealer;		


				}

		}

		

}



let cardArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];



function GetCard() {
	a = Math.floor(Math.random()*(13-0));
	b = cardArray[a];
	return (b);
}


let GamerArray = [GetCard(), GetCard()];
let DealerArray = [GetCard()];

function SumCards(arr) {
	var summ = 0;
	let aces = 0;

	for (let elem of arr) {
	if (elem < 11) {
		summ = (summ+ +elem);
	} else
	if (elem == 'J' || elem =='D' || elem == 'K') {
		summ = (summ +10);
	} else
	aces++;
	}

	if (aces > 0) {
		if (summ + 11 +(aces-1) <= 21) {
			summ = (summ +10 + aces);
		} else
			summ = (summ + aces);
	}

	return summ;
	}


