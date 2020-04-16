import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.page.html',
  styleUrls: ['./frontpage.page.scss'],
})
export class FrontpagePage implements OnInit {

  constructor(private router: Router, private languageService: LanguageService) { }

  ngOnInit() { }

  beginGameEnglish() {
    this.languageService.setLanguage("English");

    this.languageService.callComponentMethod();

    this.router.navigateByUrl('/home')
  }

  beginGameSpanish() {
    this.languageService.setLanguage("Spanish");

    this.languageService.callComponentMethod();

    this.router.navigateByUrl('/home')
  }
}