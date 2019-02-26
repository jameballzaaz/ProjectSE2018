import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-ListEditComponent',
  templateUrl: 'list-edit.component.html'
})
export class ListEditComponent {
  public appPages = [
    {
      title: 'หน้าแรก2',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'ทัวร์ต่างประเทศ2',
      url: '/list',
      icon: 'paper-plane'
    },
    {
      title: 'Login2',
      url: '/login',
      icon: 'person'
      
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
