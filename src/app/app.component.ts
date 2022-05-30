import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Call', url: '/call', icon: 'paper-plane' },
    { title: 'About App', url: '/pageone', icon: 'list' },

  ];
  public labels = [];
  constructor() {}

  async initializeApp() {
    await SplashScreen.show({
      showDuration: 5000,
      autoHide: true
    });
}
};

