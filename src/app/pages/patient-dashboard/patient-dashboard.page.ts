import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.page.html',
  styleUrls: ['./patient-dashboard.page.scss'],
})
export class PatientDashboardPage implements OnInit {

  imageBanner: any[];
  constructor() { }

  ngOnInit() {
    this.imageBanner  = [
      "assets/imgs/homeslider/banner1.jpg",
      "assets/imgs/homeslider/banner2.jpg",
      "assets/imgs/homeslider/banner3.jpg",
      "assets/imgs/homeslider/banner4.jpg",
    ]
  }

}
