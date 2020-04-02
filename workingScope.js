var slideshow = {
	photoList: ['assignment1.png', 'assignment2.png', 'assignment3.png','assignment4.png'],
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if(this.currentPhotoIndex <  (this.photoList.length -1){
			this.currentPhotoIndex = this.currentPhotoIndex + 1;
			return this.photoList[this.currentPhotoIndex];
		} else{
			return ("End of slideshow");
		}
	} ,
	prevPhoto: function(){
		if(this.currentPhotoIndex < this.photoList.length && this.currentPhotoIndex !==0){
			this.currentPhotoIndex = this.currentPhotoIndex - 1;
			return (this.photoList[this.currentPhotoIndex]);
		}else {
			return ("End of slideshow");
		}
	} ,
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	}

playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }

}
 console.log(slideshow.photoList);
 console.log(slideshow.currentPhotoIndex);
 console.log(slideshow.getCurrentPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
 console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
slideshow.play