import { Component, OnInit } from '@angular/core';
import { TourService, Tour } from '../tour.service';
import { NavController } from '@ionic/angular';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  tour : Tour = {
    name : null,
    description : null,
    day : null,
    price : null,
    time : null,
    date : null
  }

  constructor(private tourservice : TourService,
              private nav : NavController) { }

  ngOnInit() {
  }

  SaveTour(){
    this.tourservice.addtour(this.tour);
    this.nav.back();
  }
}
