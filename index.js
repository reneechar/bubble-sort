let updates = {};
let updatesKey = 1;


function compare(a,b) {
		//print 'a' is being compared to 'b'
		updates[updatesKey] += ` ${a} is being compared to ${b}.<br>`;
		
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
		
		swaps = 0;
		let atIndex = 0;
		unsortedArr = unsortedArr.reduce((newArr, num) => {
			updates[updatesKey] = 'current array: '+ '[' + currentArr + '].<br>';
			if (newArr.length ===0) {
				newArr.push(num);
				return newArr;
			} else {
				if (compare(newArr[newArr.length-1],num)) {

					swaps++;
					let biggerNum = newArr[newArr.length -1];
					newArr[newArr.length -1] = num;
					newArr.push(biggerNum);
					updates[updatesKey] += ` ${newArr[newArr.length-1]} has been swapped with ${num}.<br>`;		

					currentArr[atIndex] = num;
					currentArr[atIndex + 1] = biggerNum;
					updates[updatesKey] += ' new array: '+ '[' + currentArr + '].<br>';
					
					atIndex++;	
					updatesKey++;	
					return newArr;
				} else {
					updates[updatesKey] += ` ${newArr[newArr.length-1]} has not been swapped with ${num}.<br>`;
					updates[updatesKey] += ' new array: '+ '[' + currentArr + '].<br>';
					newArr.push(num);
					atIndex++;	
					updatesKey++;	
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

let display = document.createElement('div');
display.innerHTML = 'this will contain what the current array looks like';
theRoot.appendChild(display);



let eachUpdate = 1;

let moveToNext = document.createElement('button');
moveToNext.innerHTML = 'Next';
moveToNext.addEventListener('click', () => {
	//print out the current array
	//print out which two elements are being compared
	//print out if an element has been swapped
	display.innerHTML = updates[eachUpdate];
	eachUpdate++;
});
theRoot.appendChild(moveToNext);

let finalArr = bubSort(intialArr);

console.log('finalArr', finalArr);
console.log('updates object',updates);
