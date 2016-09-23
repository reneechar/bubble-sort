const Chai = require('chai');
const expect = Chai.expect;
const bubbleSort = require('../bubble-sort');

let myBubble = bubbleSort();

describe('bubble sort', () => {
	it('should exist', () => {
		expect(bubbleSort).to.exist;
	})

	it('should be a function', () => {
		expect(bubbleSort).to.be.a('function');
	})

	it('should return an object', () => {
		expect(myBubble).to.be.an('object');
	})

	describe('bubSort()', () => {
		it('should be a function', () => {
			expect(myBubble.bubSort).to.be.a('function');
		})

		it('should return a sorted version of the unsorted array passed in', () => {
			expect(myBubble.bubSort([5,4,1,2,8,9,2,2,2])).to.deep.equal([1,2,2,2,2,4,5,8,9]);
		})
	})
})