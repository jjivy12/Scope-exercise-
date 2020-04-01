var slideShow = {
	photoList: ['assignment1.png', 'assignment2.png', 'assignment3.png','assignment4.png'],
	currentPhotoIndex: 0,
		nextPhoto: function() {
			this.currentPhotoIndex++;
		if (this.currentPhotoIndex <= +1) {
			return this.currentPhotoIndex;
} else {
			return ("End of slideshow.");
			this.currentPhotoIndex--;
}
},
		prevPhoto: function() {
			this.currentPhotoIndex--;
	if (this.currentPhotoIndex >= -1) {
		return this.currentPhotoIndex;
	} else {
			return ("Beginning of slideshow.");
			}
},
		getCurrentPhoto: function() {
		return (this.photoList[this.currentPhotoIndex]);
}
};


console.log(slideShow.nextPhoto());
console.log(slideShow.getCurrentPhoto());
console.log(slideShow.prevPhoto());