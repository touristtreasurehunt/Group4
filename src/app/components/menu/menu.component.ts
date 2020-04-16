// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';
// import { Observable } from 'rxjs';
// import { MenuItem } from 'src/app/interfaces/interfaces';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public appPages = [{title: 'Home', url: '/home', icon: 'home'}];

  pages:any[] = [];
  navigationName:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages = [
        { pagename: "Home", url: "/home" },
        { pagename: "Map", url: "/map" },
        { pagename: "Language", url: "/frontpage"},
        { pagename: "About Us", url: "/about"}        
      ],

      this.changePageNames();

      this.languageService.componentMethodCalled$.subscribe(() => { this.changePageNames(); });
    });
  }

  Goto(page) { this.router.navigate([page.url]); }

  changePageNames() {
    let navigationName = this.languageService.getWords().navigationName;
    let pagenames = this.languageService.getWords().pages;
    let language = this.languageService.getLanguage();
    this.navigationName = language == 'Spanish'? navigationName.spanish : navigationName.english;
    this.pages.map((e, i) => {
      e.pagename = language == 'Spanish'? pagenames[i].spanish : pagenames[i].english;
    })
  }
}
