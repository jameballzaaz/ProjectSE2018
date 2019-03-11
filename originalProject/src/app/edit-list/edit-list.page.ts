import { Component, OnInit } from '@angular/core';
import { TourService, Tour } from '../tour.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.page.html',
  styleUrls: ['./edit-list.page.scss'],
})
export class EditListPage implements OnInit {
  
  tour : Tour[];

  constructor(private tourservice : TourService) { }


    ngOnInit() {
      this.tourservice.gettour().subscribe(
        res => {
          this.tour = res;
        }
      );
    }    

    deletetour(item){
      return this.tourservice.deletetour(item.id)
    }

}
