import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
      public pageList = [
    {
        iconName: 'home', displayText: 'Vehicals', expanded: false,hasChild: false,url: '/home'
    },
    {
      iconName: 'notifications', displayText: 'Notifications', expanded: false,hasChild: false,url: '/notification/All'
    },
    {
      iconName: 'ios-photos', displayText: 'Plan', expanded: false,hasChild: false,url: '/plan/862273046816849'
    },
    {
      iconName: 'md-settings', displayText: 'Setting', expanded: false,hasChild: false,url: '/settingC'
    },
    {
      iconName: 'md-call', displayText: 'Help and support', expanded: false,hasChild: false,url: '/help-support'
     
    },
    {
      iconName: 'ios-archive', displayText: 'Distance Report', expanded: false,hasChild: true,
      subOptions: [
        {iconName: 'ios-archive', displayText: 'Report', url: '/distancereport/123'}
    ]
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
