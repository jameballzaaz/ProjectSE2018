import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tour {
  name : string; //ชื่อทัวร์
  description : string; //รายละเอียดทัวร์ 
  price : number; //ราคาทัวร์
  day : number; //กี่วัน
  night : number; //กี่คืน
  dd : number;
  mm : string;
  yy : number;
  url : string;
}


@Injectable({
  providedIn: 'root'
})

export class TourService {

  private tourCollection : AngularFirestoreCollection<Tour>;
  private tour : Observable<Tour[]>;

  constructor(db2 : AngularFirestore) { 
    this.tourCollection = db2.collection<Tour>('tour');
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

  getSingletour(id){
    return this.tourCollection.doc<Tour>(id).valueChanges();
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
