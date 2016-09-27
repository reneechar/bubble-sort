
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
			return [arrayAfterOneSwap,i+1];
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
bubSortButton.id = 'bubble';
bubSortButton.innerHTML = 'Bubble Sort';
bubSortButton.style.margin = 'auto';
buttonBar.appendChild(bubSortButton);


let reset = document.createElement('button');
reset.innerHTML = 'Reset';
reset.id = 'reset';
reset.style.margin = 'auto';
buttonBar.appendChild(reset);

let idArr = createUniqueBars();
console.log('initial idArr',idArr)
reset.addEventListener('click',()=> {
	while(displayBox.firstChild) {
		displayBox.removeChild(displayBox.firstChild);
	}
	idArr = createUniqueBars();

	for (var i = 0; i < idArr.length; i++) {
		let bar = document.createElement('div');
		bar.style.height = idArr[i] + 'px';
		bar.style.width = '40px';
		bar.id = i + ''; 
		displayBox.appendChild(bar);
	}
});

//initial onload displayBox
for (var i = 0; i < idArr.length; i++) {
	let bar = document.createElement('div');
	bar.style.height = idArr[i] +'px';
	bar.style.width = '40px';
	bar.id = i + '' ; 
	displayBox.appendChild(bar);
}

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
		index = currentPlaceArr[1];
		for (var i = 0; i < idArr.length; i++) {
			let temp = document.getElementById(i+'');
			temp.style.height = idArr[i] + 'px';
		}
		},1000);
});


//create randomized array of heights
function createUniqueBars() {
	let initialArrHts = [];
	for (var i = 1; i < 11; i++) {
		initialArrHts.push(i*39);
	}

	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	    return a;
	}
	return shuffle(initialArrHts);
}


