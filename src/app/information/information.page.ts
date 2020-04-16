import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Zone } from '../models/zone';
import { Place } from '../models/place';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  zone: Zone;
  place: Place;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.zone = this.api.getCurrrentZone();
    this.place = this.api.getCurrentPlace();
    console.log(this.zone);
  }

  locatePlace(lat: number, lng: number) {
    this.router.navigateByUrl('/map');
  }

  startQuiz() {
    this.router.navigateByUrl('/home');
  }
}
