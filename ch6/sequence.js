function ArraySeq(array) {
	this.curPos = -1;
	this.curElem = array[this.curPos];
	this.size = array.length;
	this.array = array;
}

ArraySeq.prototype.next = function() {
	this.curPos += 1;
	this.curElem = this.array[this.curPos];
	return this.array[this.curPos];
}

ArraySeq.prototype.current = function() {
	return this.array[this.curPos];
}

function RangeSeq(from, to) {
	this.curElem = from - 1;
	this.to = to;
}

RangeSeq.prototype.next = function() {
	if (this.curElem === this.to) {
		return undefined;
	} else {
		this.curElem += 1;
		return this.curElem;
	}
}

RangeSeq.prototype.current = function() {
	return this.curElem;
}

function logFive(sequence) {
	let count = 0;
	
	while (sequence.next() && count != 5) {
		print(sequence.curElem);
		count += 1;
	}
}

let arrSeqShort = new ArraySeq([1, 2, 3]);
let arrSeqLong = new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let rangeSeqShort = new RangeSeq(100, 101);
let rangeSeqLong = new RangeSeq(100, 1000);

logFive(arrSeqShort);
logFive(arrSeqLong);
logFive(rangeSeqShort);
logFive(rangeSeqLong);