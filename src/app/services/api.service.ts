import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { Zone } from '../models/zone';
// UNCOMMENT THIS TO USE FIREBASE REALTIME DATABASE
// import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  zones: Array<Zone>;
  currentZone: number = 0;
  currentPlace: number = 0;
  currentQuiz: number = 0;
  currentLat: number;
  currentLng: number;

  // UNCOMMENT THIS TO USE FIREBASE REALTIME DATABASE
  // constructor(private db: AngularFireDatabase) { }

  constructor() { }

  setZones(zones: Array<Zone>) {
    this.zones = zones;
  }

  setCurrentZone(zoneId: number) {
    this.currentZone = zoneId;
  }

  getCurrrentZone() {
    return this.zones[this.currentZone];
  }

  setCurrentPlace(placeId: number) {
    this.currentPlace = placeId;
  }

  getCurrentPlace() {
    return this.getCurrrentZone().places[this.currentPlace];
    // return this.zones[this.currentZone].places[this.currentPlace];
  }

  setQuiz(quizId) {
    this.currentQuiz = quizId;
  }

  getQuiz() {
    return this.getCurrentPlace().questions;
  }

  setCoordinates(lat, lng) {
    this.currentLat = lat;
    this.currentLng = lng;
  }

  getCoordinates() {
    return this.getCurrentPlace().geolocation
  }

  getZones(): Observable<Array<Zone>> {
    // UNCOMMENT THIS TO USE FIREBASE REALTIME DATABASE
    // return from(this.db.database.ref().once("value").then(snap => {
    //   let data = snap.val();
    //   return data;
    // }));

    return of(
      [
        {
          "zone": "Vegueta",
          "places": [
            {
              "name": "Statue of Néstor Álamo",
              "info": "This is a statue in honor of Néstor Álamo, a great writer and a icon of canary music and culture, it was erected in 2003 by Ana Luisa Isabel Benitez",
              "photo": "Nestor.jpg",
              "geolocation": { "lat": 28.101199, "lng": -15.414352 },
              "questions": [
                {
                  "question": "Who is this?",
                  "answers": [
                    { "answer": "Néstor Álamo", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "Cristobal Colón", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Néstor de la Torre", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "When was it build?",
                  "answers": [
                    { "answer": "1987", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "2001", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "2003", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "Who built it?",
                  "answers": [
                    { "answer": "Paula Isabel Benitez", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Ana Luisa Isabel Benitez", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "Ana Vega Benitez", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                }
              ]
            },
            {
              "name": "Santa Ana's Cathedral",
              "info": "This cathedral,built throughout various points in history, is considered the most important religious edification in the islands and, due to the nature of it's construction it mixes two very distinct styles, Neoclassic and Late Gothic. It's two most prominent construction phases date from 1497 to 1570 and from 1781 to present day",
              "photo": "SantaAna.jpg",
              "geolocation": { "lat": 28.100854, "lng": -15.414735 },
              "questions": [
                {
                  "question": "What is this cathedral's name?",
                  "answers": [
                    { "answer": "San José", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Santa Ana", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "Santa María", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "Which was the first period of it's construction?",
                  "answers": [
                    { "answer": "1400-1500", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1497-1570", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "1570-1800", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What architectural styles combines?",
                  "answers": [
                    { "answer": "Baroque and classic", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Classic and Gothic", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Neoclassic and Late Gothic", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                }
              ]
            },
            {
              "name": "Casa de Colón",
              "info": "Inaugurated in 1951 it is one of the most emblematic buildings in Las Palmas, it houses a museum,a library and an specialized study center. It's scope of research revolves around the history of the canaries and it's relation to america. The house, built at the end of the XVI century receives this name because it is said that colon stayed here during reparations of his ship 'La pinta'.",
              "photo": "CasaColon.jpg",
              "geolocation": { "lat": 28.101589, "lng": -15.414095 },
              "questions": [
                {
                  "question": "When was it build?",
                  "answers": [
                    { "answer": "At the end of the XV century", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "At the beginning of the XVI century", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "At the end of the XVI century", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "When was it inaugurated as a study center?",
                  "answers": [
                    { "answer": "1917", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1951", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "1850", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What does this building house?",
                  "answers": [
                    { "answer": "A museum, a library and a study center", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "A museum, a libray and an activity center", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "A library, an office and an archeological center", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                }
              ]
            }
          ]
        },
        {
          "zone": "Triana",
          "places": [
            {
              "name": "Mata's castle",
              "info": "This castle was first elaborated in 1577 and later rebuilt by Francisco de la Rúa due to attacks from the holand army, nowadays it holds a museum about the history of the castle and the history of the town and it's relation to the sea.",
              "photo": "mata.jpg",
              "geolocation": { "lat": 28.107110, "lng": -15.421675 },
              "questions": [
                {
                  "question": "Who rebuilt the castle?",
                  "answers": [
                    { "answer": "José Mata", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Cristobal Colón", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Francisco de la Rúa", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What is it's purpose nowadays?",
                  "answers": [
                    { "answer": "It has no purpose", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "It holds a Museum about history of the place and the city", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "It holds a Museum about history of the city and it's creator", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "When was the castle first elaborated?",
                  "answers": [
                    { "answer": "1755", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1576", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1577", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                }
              ]
            },
            {
              "name": "Palecete",
              "info": "Built by Mariano Belmás by commission of Domingo Rodríguez Quegles at the end of the XX century and finished by Fernando Navarro this building was first a private property and then repurposed to a music conservatory and later abandoned until it was again repurposed,this time as a cultural center and home of the International Film Festival of Las Palmas de Gran Canaria and of the Philharmonic Society",
              "photo": "palacete.jpg",
              "geolocation": { "lat": 28.105579, "lng": -15.418487 },
              "questions": [
                {
                  "question": "Who finished the building?",
                  "answers": [
                    { "answer": "Fernando Navarro", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "Domingo Rodríguez Quegles", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Mariano Belmás", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What was it's second purpose?",
                  "answers": [
                    { "answer": "Music conservatory", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "Private property", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Cultural center", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What is one of it's nowadays purposes?",
                  "answers": [
                    { "answer": "Cultural center", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "It's abandoned", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Musical center", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                }
              ]
            },
            {
              "name": "Triana",
              "info": "The actual Triana street which holds numerous amounts of interesting stores and is one of the most important shopping streets of the island. It was originally a sailor quarter and later a very important point of communication between the north and south part of the city with trains and trolleys running through until 1937. It was deemed a pedestrian street in the 80's and it holds a variety of houses on top of the shops that vary in different architectural styles such as modernism and racionalism.",
              "photo": "Triana.jpg",
              "geolocation": { "lat": 28.107810, "lng": -15.417135 },
              "questions": [
                {
                  "question": "What are some examples of the architecture used in the buildings of Triana?",
                  "answers": [
                    { "answer": "Gothic and Neoclassic", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Modernist and Baroque", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Modernist and racionalist", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What was the original usage of this street?",
                  "answers": [
                    { "answer": "Communication between districts", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Commercial district", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Sailor Street", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "When was it deemed a pedestrian street?",
                  "answers": [
                    { "answer": "1980", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "1880", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1937", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                }
              ]
            }
          ]
        },
        {
          "zone": "Las Canteras",
          "places": [
            {
              "name": "Alfredo Kraus Auditorium",
              "info": "This edification, built by Óscar Tusquets between 1993 and 1997 as a lighthouse to protect Las Canteras, is one of the most singular buildings in Gran Canaria, among different festivals it holds the international Las Palmas film festival and the Canarian musical festival. It is also the home of the Gran Canaria Philharmonic Orchestra. One of the most famous of the archipelago.",
              "photo": "Auditorio.jpg",
              "geolocation": { "lat": 28.130113, "lng": -15.448654 },
              "questions": [
                {
                  "question": "When was the auditorium built?",
                  "answers": [
                    { "answer": "Between 1993 and 1997", "value": true, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Between 1996 and 1998", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Between 1996 and 1997", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What group has it's headquarters in this building?",
                  "answers": [
                    { "answer": "The Gran Canarian orhcestra", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "The Gran Canarian Philharmonic Orchestra", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "The Avengers", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What two festivals are holded within the building?",
                  "answers": [
                    { "answer": "Literature and cinema", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Musical and Theatrical", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Musical and cinema", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                }
              ]
            },
            {
              "name": "Las Arenas",
              "info": "Inaugurated in 1993, it is one of the largest shopping centers in the whole country, it's more identifiable element is the sphinx located at the entrance of the building and it's overall egyptian-like design on the outside with even four pyramid peaks at the top of the place.",
              "photo": "Esfinge.jpg",
              "geolocation": { "lat": 28.128391, "lng": -15.447452 },
              "questions": [
                {
                  "question": "When was the place inaugurated?",
                  "answers": [
                    { "answer": "1990", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1995", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "1993", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What is the name of the statue at the entrance?",
                  "answers": [
                    { "answer": "Effigy", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Lynx", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Sphinx", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "How many pyramids does it have?",
                  "answers": [
                    { "answer": "Four", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "Five", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "Three", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                }
              ]
            },
            {
              "name": "Las canteras Main Beach",
              "info": "Located within the capital. This is one of the most important turistical places in the island, thanks to it's accesibility and the climate in the island it can be enjoyed all year around. It's more iconic feature is the so called 'La Barra', a natural reef that stretches almost the entire length of the beach and can be reached by swimming from the shore and walked upon.",
              "photo": "canteras.jpg",
              "geolocation": { "lat": 28.131788, "lng": -15.444534 },
              "questions": [
                {
                  "question": "What's the name of the iconic feature this beach has?",
                  "answers": [
                    { "answer": "La barra", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "La pana", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "La puntilla", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "Where is this beach located?",
                  "answers": [
                    { "answer": "In Santa Cruz", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "In La Palma", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "In Las Palmas", "value": true, "color": "success", "checked": false, "disabled": false }
                  ]
                },
                {
                  "question": "What allows people to enjoy this beach almost all the year?",
                  "answers": [
                    { "answer": "It's location and cleanness", "value": false, "color": "danger", "checked": false, "disabled": false },
                    { "answer": "It's location and the island weather", "value": true, "color": "success", "checked": false, "disabled": false },
                    { "answer": "It's location and it's reef", "value": false, "color": "danger", "checked": false, "disabled": false }
                  ]
                }
              ]
            }
          ]
        }
      ]
    )
  }
}
