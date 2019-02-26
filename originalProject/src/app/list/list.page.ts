import { Component, OnInit } from '@angular/core';
import { TourService, Tour } from '../tour.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {

  tour : Tour[];

  constructor(private tourService : TourService) { }
  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.tourService.gettour().subscribe(
      res => {
        this.tour = res;
      }
    );
  }    


  deletetour(item){
    return this.tourService.deletetour(item.id)
  }



}
   


