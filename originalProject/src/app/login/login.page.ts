import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  @ViewChild("usernameinput") mUser;
  @ViewChild("passwordinput") mPass;
  
  constructor(public navCtrl : NavController,
              public alertCtrl : AlertController) { }

  ngOnInit() {
  }

  loading(){
    
  }

  onClicklogin(){
    alert("Username:" + this.mUser.value + "|Password:" + this.mPass.value);
    //alert("Password:"+this.mPass.value);


    //--this.alertCtrl.create({
      //title : 'Result',
     // subTitle : "Username: " + this.mUser.value + ",Password :" + this.mPass.value,
     // buttons : ['OK']
    //}).present();
  }
}


