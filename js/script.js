function createVueInstance() {
     new Vue({
          el: '#app',

          data: {
               'carousel': {
                    'images': 
                    [
                         "Boolzapp",
                         "Proj",
                         "Boolflix",
                         "Spotify",
                         "DeliverBoo1",
                         "DeliverBoo2",
                         "DeliverBoo3",
                         "DigitalOcean1",
                         "DigitalOcean2",
                         "Hubspot1",
                         "Hubspot2",
                         "Hubspot3"
                    ],
                    'currentSlide': 0,
                    'slideDirection': 1,
                    'transitionName' : 'fade',
                    'showImage': true,
               },
               searchInput: '',
               filter: []
          },

          mounted: function() {
               // setInterval(this.switchLatestPost, 3000);
               console.log('vue mounted');
          },

          methods: {
     
               slideNext: function () {

                    this.carousel.transitionName = 'slides-next'; 
                    if (this. carousel.currentSlide == this.carousel.images.length - 1) {
                         this.carousel.currentSlide = 0;
                    } else {
                         this.carousel.currentSlide++;
                    }
               },

               slidePrev: function() {
                    this.carousel.transitionName = 'slides-prev';
                    if(this.carousel.currentSlide == 0) {
                         this.carousel.currentSlide = this.carousel.images.length -1;
                         console.log(this.carousel.currentSlide);
                    } else {
                         this.carousel.currentSlide--;
                    }
               },

               slideNextFilter: function () {

                    this.carousel.transitionName = 'slides-next'; 
                    if (this. carousel.currentSlide == this.filter.length - 1) {
                         this.carousel.currentSlide = 0;
                    } else {
                         this.carousel.currentSlide++;
                    }
               },

               slidePrevFilter: function() {
                    this.carousel.transitionName = 'slides-prev';
                    if(this.carousel.currentSlide == 0) {
                         this.carousel.currentSlide = this.filter.length -1;
                    } else {
                         this.carousel.currentSlide--;
                    }
               },

               filtering: function() {
                    this.carousel.currentSlide = 0;
                    this.filter = this.carousel.images.filter(element => element.toLowerCase().includes(this.searchInput.toLowerCase()));
                    console.log(this.filter);
               }
              
          }
     });
   }
   
   
   function monogridTest() {
     createVueInstance();
   }
   
   document.addEventListener('DOMContentLoaded', monogridTest);