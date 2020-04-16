import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, NavController, IonSlides } from '@ionic/angular';

// API
import { ApiService } from '../services/api.service';
import { Place } from '../models/place';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  @ViewChild('mySlider', { static: true }) slides: IonSlides;
  userInput: any;
  content: string = '';
  contenido: string = '';
  linkTo: string = '';
  primera: 'uno';
  score = 0;

  place: Place;
  question: Array<Question>;

  Next() { this.slides.slideNext(); }

  JumpTo(index) { this.slides.slideTo(index, 1) }

  constructor(
    private navCtrl: NavController,
    public alertController: AlertController,
    public api: ApiService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
    this.place = this.api.getCurrentPlace();
    this.question = this.api.getQuiz();
  }

  onClick(check) {
    if (check.value != true) {
      for(let answer of this.question[0].answers) {
        answer.checked = true;
        answer.disabled = true;
      }

      setTimeout(() => {
        for(let answer of this.question[0].answers) {
          answer.checked = false;
          answer.disabled = false;
        }
        this.nextSlide();
      }, 1000);
    }
    else {
      for(let answer of this.question[0].answers) {
        answer.disabled = true;
      }
      this.score++;
      console.log(this.score);
      
      setTimeout(() => {
        for(let answer of this.question[0].answers) {
          answer.disabled = false;
        }
        this.nextSlide();
      }, 1000);
    }
  }

  onTap(check) {
    if (check.value != true) {
      for(let answer of this.question[1].answers) {
        answer.checked = true;
        answer.disabled = true;
      }

      setTimeout(() => {
        for(let answer of this.question[1].answers) {
          answer.checked = false;
          answer.disabled = false;
        }
        this.nextSlide();
      }, 1000);
    }
    else {
      for(let answer of this.question[1].answers) {
        answer.disabled = true;
      }
      this.score++;
      console.log(this.score);
      
      setTimeout(() => {
        for(let answer of this.question[1].answers) {
          answer.disabled = false;
        }
        this.nextSlide();
      }, 1000);
    }
  }

  onPush(check) {
    if (check.value != true) {
      for(let answer of this.question[2].answers) {
        answer.checked = true;
        answer.disabled = true;
      }

      setTimeout(() => {
        for(let answer of this.question[2].answers) {
          answer.checked = false;
          answer.disabled = false;
        }
        this.nextSlide();
        this.finalScreen();
      }, 1000);
    }
    else {
      for(let answer of this.question[2].answers) {
        answer.disabled = true;
      }
      this.score++;
      console.log(this.score);
      
      setTimeout(() => {
        for(let answer of this.question[2].answers) {
          answer.disabled = false;
        }
        this.nextSlide();
        this.finalScreen();
      }, 1000);
    }
  }

  finalScreen() {
    if (this.score === 3) {
      this.content = "Congratulations! You win";
      this.contenido = 'Return home';
      this.slides.lockSwipes(false);
      this.JumpTo(4);
      this.slides.lockSwipes(true);
    } else {
      this.content = "Sorry, Try again!";
      this.contenido = 'Return home';
      this.slides.lockSwipes(false);
      this.JumpTo(4);
      this.slides.lockSwipes(true);
    }
  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.Next();
    this.slides.lockSwipes(true);
  }

  Return() {
    this.navCtrl.back();
  }
}
