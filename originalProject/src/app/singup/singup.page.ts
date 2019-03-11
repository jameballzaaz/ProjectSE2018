import { Component, OnInit } from '@angular/core';
import { UserAccountService, UserAccount } from '../user.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  userAccount : UserAccount = {
    name : null,
    surname : null,
    email : null,
    mobilenumber : null,
    password : null,
    confirmpassword : null,

  }
  
  userId : number ;
  constructor(private userservice : UserAccountService,
              private nav : NavController,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if(this.userAccount)
      this.loaduser();
  }

  loaduser(){
    this.userservice.getSingleuser(this.userId).subscribe(
      res => {
        this.userAccount = res;
      }
    )
  }
  SaveUser(){
    if(this.userId){ //update
      this.userservice.updateuser(this.userAccount,this.userId).then(
        () => {
          this.nav.back();
        }
      )
    }
    else { //add
    this.userservice.adduser(this.userAccount);
    this.nav.back();
    }
  }

}
