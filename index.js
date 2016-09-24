function bubSortOneSwap(unsortedArr) {

	for (var i = 0; i < unsortedArr.length - 1; i++) {
		if (unsortedArr[i] > unsortedArr[i+1]){
			let big = unsortedArr[i];
			unsortedArr[i] = unsortedArr[i+1];
			unsortedArr[i+1] = big;
			console.log('unsortedArr',unsortedArr);
			return unsortedArr;
		}
	}
	return false;
}


function isSorted(arr) {
	let newArr = bubSortOneSwap(arr);
	if(newArr) {
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

reset.addEventListener('click',()=> {
	while(displayBox.firstChild) {
		displayBox.removeChild(displayBox.firstChild);
	}
	idArr = [];
	for (var i = 0; i < 10; i++) {
		let bar = document.createElement('div');
		bar.style.height = Math.floor(Math.random()*10+1)*39 +'px';
		bar.style.width = '40px';
		bar.id = i+1 + ''; //edited this
		idArr.push(parseFloat(bar.id.substring(0,bar.id.length-2)));
		bar.style.backgroundColor = 'blue';
		displayBox.appendChild(bar);
	}
	console.log('idArr after', idArr);
});

//initial onload displayBox
for (var i = 0; i < 10; i++) {
	let bar = document.createElement('div');
	bar.style.height = Math.floor(Math.random()*10+1)*39 +'px';
	bar.style.width = '40px';
	bar.id = i + 1 + '' ; //edited this
	idArr.push(parseFloat(bar.id.substring(0,bar.id.length-2)));
	bar.style.backgroundColor = 'blue';
	displayBox.appendChild(bar);
}


console.log('idArr', idArr);


bubSortButton.addEventListener('click', () => {
	let bSortTracker = setInterval(() =>{
		//perform bubble sort here
		console.log('bubble sorting here',idArr);
		if(isSorted(idArr)) {
			clearInterval(bSortTracker);
		}
		idArr = bubSortOneSwap(idArr);
		for (var i = 1; i < ; i++) {
			
		}

		},1000);
});




// let theRoot = document.getElementById('root');


// let intialArr = prompt('Please enter a list of unsorted numbers separated by spaces: ie. 4 2 7 1 2','4 2 7 1 2');

// intialArr = intialArr.split(' ');
// console.log('intialArr: ',intialArr);
// for (var i = 0; i < intialArr.length; i++) {
// 	if (parseFloat(intialArr[i]) !== NaN){
// 		console.log('it is ', parseFloat(intialArr[i]));
// 		intialArr[i] = parseFloat(intialArr[i]);
// 	} else {
// 		console.log('tester ',typeof intialArr[i]);
// 		alert('You didn\'t enter numbers separated by spaces');
// 	}
// }



// let display = document.createElement('div');
// display.innerHTML = 'Click Next to start!';
// theRoot.appendChild(display);



// let finalArr = bubSort(intialArr);

// let eachUpdate = 1;

// let moveToNext = document.createElement('button');
// moveToNext.innerHTML = 'Next';
// moveToNext.addEventListener('click', () => {
// 	//print out the current array
// 	//print out which two elements are being compared
// 	//print out if an element has been swapped
// 	if(updates[eachUpdate] === undefined) {
// 		display.innerHTML = 'initial array was: [' + intialArr +'].<br>' + 'final sorted array: [' + finalArr + '].<br>'
// 		if(passNum > 2) {
// 			display.innerHTML += (passNum - 1) + ' passes were made.';
// 		} else {
// 			display.innerHTML += (passNum - 1) + ' pass was made.';
// 		}
// 	} else {
// 		display.innerHTML = updates[eachUpdate];
// 		eachUpdate++;
// 	}
// });
// theRoot.appendChild(moveToNext);



// //extending Array Methods to include .bubSort, comment out html stuff above
// Array.prototype.bSort = function() {
// 	return bubSort(this);
// }

// //test if bSort works


// var tester = [1, 6, 4, 3, 1];
// var testerAfter = tester.bSort();
// console.log(testerAfter);


