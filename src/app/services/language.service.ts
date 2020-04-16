import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  language: any;

  words: any = {
    navigationName: { spanish: "Navegación", english: "Navigation" },
    pages: [
      { spanish: "Inicio", english: "Home" },
      { spanish: "Mapa", english: "Map" },
      { spanish: "Idioma", english: "Language" },
      { spanish: "Sobre Nosotros", english: "About Us" }
    ],
    title: { spanish: "La gran caza", english: "The Great Hunt" },
    map: { spanish: "Mapa", english: "Map" }
  }

  constructor() { }

  getWords() { return this.words; }

  getLanguage() { return this.language; }

  setLanguage(language: string) { this.language = language; }

  // Observable string sources
  private componentMethodCallSource = new Subject<any>();

  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  // Service message commands
  callComponentMethod() { this.componentMethodCallSource.next(); }
}