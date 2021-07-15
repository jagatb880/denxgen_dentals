import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'dg-image-slider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss'],
})
export class ImagesliderComponent implements OnInit {
  @ViewChild('slider') public slider: IonSlides;
  @Input() silderImages = [];
  @Input() imageWidth: string = "500px";
  slideOpts = {
    zoom: false
  };

  firstLoad = true;
  public homeOptions: any;
  constructor() {}

  ngOnInit() {
    if(typeof this.silderImages == 'string'){
      this.silderImages = [];
    }
    // console.log(this.silderImages);
    this.homeOptions = {
      initialSlide: 0,
      loop: true,
      autoplay:2000
    };
  }

  slidesDidLoad(silderImages) {
    if (silderImages.length) {
      silderImages.startAutoplay();
    }
    //slides.startAutoplay();
  }

  loadNext() {
    // console.log('Prev');
 
  }

  loadPrev() {
    // console.log('Next'); 
  }

  async ad_details() {
    
  }

}