function compare(a,b) {
		//print 'a' is being compared to 'b'
		comparison.innerHTML = `${a} is being compared to ${b}`;
		nextStep = false;
		if (a - b > 0) {
			return true;
		} else {
		return false;
		}
	}

function bubSort(unsortedArr) {
	let swaps = 1;
	let passNum = 1;

	let currentArr = unsortedArr;
	while(swaps > 0) {
		//print pass #
		passNumber.innerHTML = `bubSort is on pass number ${passNum}`;
		nextStep = false;
		swaps = 0;
		let atIndex = 0;
		unsortedArr = unsortedArr.reduce((newArr, num) => {
			if (newArr.length ===0) {
				newArr.push(num);
				return newArr;
			} else {
				if (compare(newArr[newArr.length-1],num)) {
					//print that it swapped
					//print the new array

					swaps++;
					let biggerNum = newArr[newArr.length -1];
					newArr[newArr.length -1] = num;
					newArr.push(biggerNum);
					swappedOrNot.innerHTML = `${newArr[newArr.length-1]} has been swapped with ${num}`;
					
					nextStep = false;

					currentArr[atIndex] = num;
					currentArr[atIndex + 1] = biggerNum;
					currentArray.innerHTML = 'the current array looks like: '+ '[' + currentArr + ']';
					nextStep = false;
					atIndex++;	
					return newArr;
				} else {
					swappedOrNot.innerHTML = `${newArr[newArr.length-1]} has not been swapped with ${num}`;
					nextStep = false;
					newArr.push(num);
					atIndex++;	
					return newArr;
				}
			}				
		},[]);
		passNum++;
	}
	return unsortedArr;
}

let theRoot = document.getElementById('root');


let intialArr = prompt('Please enter a list of unsorted numbers separated by spaces: ie. 4 2 7 1 2','4 2 7 1 2');

intialArr = intialArr.split(' ');
console.log('intialArr: ',intialArr);

let currentArray = document.createElement('div');
currentArray.innerHTML = 'this will contain what the current array looks like';
theRoot.appendChild(currentArray);

let passNumber = document.createElement('div');
passNumber.innerHTML = 'this will contain what pass the function is on';
theRoot.appendChild(passNumber);

let comparison = document.createElement('div');
comparison.innerHTML = 'this should contain what numbers are being compared';
theRoot.appendChild(comparison);

let swappedOrNot = document.createElement('div');
swappedOrNot.innerHTML = 'this should contain whether the two numbers were swapped';
theRoot.appendChild(swappedOrNot);


let nextStep = false;

let moveToNext = document.createElement('button');
moveToNext.innerHTML = 'Next';
moveToNext.addEventListener('click', () => {
	//print out the current array
	//print out which two elements are being compared
	//print out if an element has been swapped
	nextStep = true;
});
theRoot.appendChild(moveToNext);

let finalArr = bubSort(intialArr);

console.log('finalArr', finalArr);
