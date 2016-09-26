
let index = 0;

function bubSortOneSwap(unsortedArr,startIndex) {
	let arrayAfterOneSwap = unsortedArr.map(element => {
		return element;
	});

	for (var i = startIndex; i < arrayAfterOneSwap.length - 1; i++) {
		if (arrayAfterOneSwap[i] > arrayAfterOneSwap[i+1]){
			let big = arrayAfterOneSwap[i];
			arrayAfterOneSwap[i] = arrayAfterOneSwap[i+1];
			arrayAfterOneSwap[i+1] = big;
			return [arrayAfterOneSwap,i];
		}
	}
	return false;
}

function isSorted(arr) {
	if(bubSortOneSwap(arr, 0)) {
		return false;
	} else {
		return true;
	}
}

let displayBox = document.getElementById('displayBox');
let buttonBar = document.getElementById('buttonBar');

let bubSortButton = document.createElement('button');
bubSortButton.innerHTML = 'Bubble Sort';
bubSortButton.style.margin = 'auto';
buttonBar.appendChild(bubSortButton);


let reset = document.createElement('button');
reset.innerHTML = 'RESET';
reset.style.margin = 'auto';
buttonBar.appendChild(reset);

let idArr = [];

let amountOfBars = 10;

reset.addEventListener('click',()=> {
	while(displayBox.firstChild) {
		displayBox.removeChild(displayBox.firstChild);
	}
	idArr = [];
	for (var i = 0; i < amountOfBars; i++) {
		let bar = document.createElement('div');
		bar.style.height = Math.floor(Math.random()*10+1)*39 +'px';
		bar.style.width = '40px';
		bar.id = i+1 + ''; 
		idArr.push(parseFloat(bar.style.height.substring(0,bar.style.height.length-2)));
		bar.style.backgroundColor = 'blue';
		displayBox.appendChild(bar);
	}
	console.log('idArr after', idArr);
});

//initial onload displayBox
for (var i = 0; i < amountOfBars; i++) {
	let bar = document.createElement('div');
	bar.style.height = Math.floor(Math.random()*10+1)*39 +'px';
	bar.style.width = '40px';
	bar.id = i + 1 + '' ; 
	idArr.push(parseFloat(bar.style.height.substring(0,bar.style.height.length-2)));
	bar.style.backgroundColor = 'blue';
	displayBox.appendChild(bar);
}


console.log('idArr', idArr);


bubSortButton.addEventListener('click', () => {
	let bSortTracker = setInterval(() =>{
		//perform bubble sort here
		if(isSorted(idArr)) {
			clearInterval(bSortTracker);
		}
		let currentPlaceArr = bubSortOneSwap(idArr,index);
		if(currentPlaceArr === false) {
			index = 0;
			currentPlaceArr = bubSortOneSwap(idArr,index);
		}
		idArr = currentPlaceArr[0];
		console.log('bubble sorting here, idArr',idArr);

		index = currentPlaceArr[1];
		console.log('bubble sorting here, index',index);

		for (var i = 0; i < amountOfBars; i++) {
			let temp = document.getElementById(i+1+'');
			temp.style.height = idArr[i] + 'px';
		}

		},1000);
});




