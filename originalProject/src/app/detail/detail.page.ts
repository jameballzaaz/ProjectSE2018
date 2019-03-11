import { Component, OnInit } from '@angular/core';
import { TourService, Tour } from '../tour.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  tour : Tour = {
    name : null, //ชื่อทัวร์
    description : null, //รายละเอียดทัวร์ 
    price : null, //ราคาทัวร์
    day : null, //กี่วัน
    night : null, //กี่คืน
    dd : null, //วันที่เดินทาง
    mm : null, //เดือนที่เดินทาง  
    yy : null, //ปีทีเดินทาง
    url : null, //รูปภาพ
  }

  tourId : number ;

  constructor(private tourservice : TourService,
              private nav : NavController,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.tourId = this.route.snapshot.params['id'];
    if(this.tour)
      this.loadtour();
  }

  loadtour(){
    this.tourservice.getSingletour(this.tourId).subscribe(
      res => {
        this.tour = res;
      }
    )
  }
  SaveTour(){
    if(this.tourId){ //update
      this.tourservice.updatetour(this.tour,this.tourId).then(
        () => {
          this.nav.back();
        }
      )
    }
    else { //add
    this.tourservice.addtour(this.tour);
    this.nav.back();
    }
  }
}
