
let index = 0;

function bubSortOneSwap(unsortedArr) {

	for (var i = index; i < unsortedArr.length - 1; i++) {
		if (unsortedArr[i] > unsortedArr[i+1]){
			let big = unsortedArr[i];
			unsortedArr[i] = unsortedArr[i+1];
			unsortedArr[i+1] = big;
			console.log('index bub',index);
			return unsortedArr;
		}
		index++;
	}
	index = 0;
	return false;
}

function isSorted(arr) {
	index = 0;
	if(bubSortOneSwap(arr)) {
		index--;
		return false;
	} else {
		index--;
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
		bar.id = i+1 + ''; //edited this
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
	bar.id = i + 1 + '' ; //edited this
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
		idArr = bubSortOneSwap(idArr);
		console.log('bubble sorting here',idArr);
		for (var i = 0; i < amountOfBars; i++) {
			let temp = document.getElementById(i+1+'');
			temp.style.height = idArr[i] + 'px';
		}

		},1000);
});




