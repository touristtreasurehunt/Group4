import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Map, tileLayer, marker, LatLng } from 'leaflet';
import { NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ApiService } from '../services/api.service';
import { Place } from '../models/place';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  map: any;
  currentMarker: any;
  objectiveMarker: any;
  address: string[];
  position: any;
  
  currentLat: number = 28.101199;
  currentLng: number = -15.414352;

  constructor(private router: Router, private api: ApiService) { }

  ionViewDidEnter() {
    this.initializeMap();
    // Map generation
    // this.map = L.map('map').setView([27.9621806, -15.6279822], 15);
    // this.map = L.map('map', {
    //   zoomControl: true,
    //   center: [27.9621806, -15.6279822],
    //   zoom: 15
    // });

    // Tiles layer generation
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // Marker generation
    // let marker = L.marker([27.9621806, -15.6279822], {draggable: false}).addTo(this.map);
    // let distance: any;

    // Geolocation
    // this.map.locate({ setView: true, watch: true }).on("locationfound", (e: any) => {
    // this.map.locate({ setView: true, watch: true }).on("locationfound", (e: any) => {
    // If exists, change it's position
    // if(this.position != undefined) {
    //   this.position.setLatLng([e.latitude, e.longitude]);
    //   this.map.setView([e.latitude, e.longitude], 16);
    // Distance between current position and the marker
    //     distance = Math.round(this.map.distance([e.latitude, e.longitude], marker.getLatLng()));
    //     this.position.bindPopUp("You're "+ distance +" meters from the objective!").openPopup();
    //   } else {
    //     this.position = L.circle([e.latitude, e.longitude], {radius: 15}).addTo(this.map);
    //     this.map.setView([e.latitude, e.longitude], 16);
    //   }
    // })
  }

  initializeMap() {
    this.currentLat = this.api.getCoordinates().lat;
    this.currentLng = this.api.getCoordinates().lng;

    this.map = new Map("map").setView([this.currentLat, this.currentLng], 13);

    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map);

    this.objectiveMarker = marker([this.currentLat, this.currentLng], {draggable: false}).addTo(this.map);
  }

  locatePosition() {
    this.map.locate({ setView: true }).on("locationfound", (e: any) => {
      this.currentMarker = marker([e.latitude, e.longitude], { draggable: false }).addTo(this.map);
      this.currentMarker.bindPopup("You are located here!").openPopup();
      this.getAddress(e.latitude, e.longitude);

      this.currentMarker.on("dragend", () => {
        const position = this.currentMarker.getLatLng();
        this.getAddress(position.lat, position.lng);
      });
    });
  }

  moveTo(lat, lng) {
    this.map.setView([lat, lng], 15);

    this.objectiveMarker = marker([lat, lng], { draggable: false }).addTo(this.map);
  }

  getAddress(lat: number, long: number) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
  }

  confirmPickupLocation() {
    let navigationextras: NavigationExtras = {
      state: {
        pickupLocation: this.address
      }
    };
    this.router.navigate(["home"], navigationextras);
  }

  goBack() { this.router.navigate(["home"]); }
}
