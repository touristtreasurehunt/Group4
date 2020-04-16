import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

// API service
import { ApiService } from '../services/api.service';
import { Zone } from '../models/zone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  zones: Array<Zone>;

  constructor(
    private menuCtrl: MenuController,
    private api: ApiService,
    private router: Router) { }


  ngOnInit() {
    this.api.getZones().subscribe(zones => {
      this.zones = zones;
      this.api.setZones(this.zones);
    });
  }

  goTo(zoneId: number, placeId: number) {
    console.log(zoneId);
    this.api.setCurrentZone(zoneId);
    this.api.setCurrentPlace(placeId);
    this.router.navigateByUrl('/information');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
