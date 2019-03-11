import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าแรก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'ทัวร์',
      url: '/list',
      icon: 'paper-plane'
    },
    {
      title: 'เข้าสู่ระบบ',
      url: '/login',
      icon: 'person'
      
    },
    {
      title: 'ติดต่อเรา',
      url: '/contacts',
      icon: 'contact'
      
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
