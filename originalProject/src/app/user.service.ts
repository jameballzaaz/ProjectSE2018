import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

export interface UserAccount {
  name : string;
  surname : string;
  email : string;
  mobilenumber : string;
  password : string;
  confirmpassword : string;
}

@Injectable({
  providedIn: 'root'
})

export class UserAccountService {

  private userAccountCollection : AngularFirestoreCollection<UserAccount>;
  private userAccount : Observable<UserAccount[]>;

  constructor(db : AngularFirestore) { 
    this.userAccountCollection = db.collection<UserAccount>('member');
    this.userAccount = this.userAccountCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

    getuser(){
      return this.userAccount;
    }

    getSingleuser(id){
      return this.userAccountCollection.doc<UserAccount>(id).valueChanges();
    }

    adduser(userAccount : UserAccount){
      return this.userAccountCollection.add(userAccount);
    }

    deleteuser(id){
      return this.userAccountCollection.doc(id).delete();
    }

    updateuser(userAccount : UserAccount,id){
      return this.userAccountCollection.doc(id).update(userAccount);
    }






















   
}
