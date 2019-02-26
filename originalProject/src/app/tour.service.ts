import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Timestamp } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tour {
  name : string;
  description : string;
  price : number;
  date : Timestamp<string>;
  day : string;
  time : number;
}


@Injectable({
  providedIn: 'root'
})

export class TourService {

  private tourCollection : AngularFirestoreCollection<Tour>;
  private tour : Observable<Tour[]>;

  constructor(db : AngularFirestore) { 
    this.tourCollection = db.collection<Tour>('tour');
    this.tour = this.tourCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

  gettour(){
     return this.tour;
  }

  addtour(tour : Tour){
    return this.tourCollection.add(tour);
  }

  deletetour(id){
    return this.tourCollection.doc(id).delete();
  }

  updatetour(tour : Tour,id){
    return this.tourCollection.doc(id).update(tour);
  }

  




}
