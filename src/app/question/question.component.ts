import { HttpClient } from '@angular/common/http';
// import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
// import { Question } from 'src/app/question.interface';
// import { Player } from '../models/player-model';
import { PlayersService } from '../services/players.service';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {

  datAquestion: any;
  category: any;
  correct_answer: any;
  incorrect_answers: string[] = [];
  question: any;
  timer: any;
  partie: number = 1;
  timeLeft: number = 10;
  idTimer: any;
  isFinished: boolean = false;

  @ViewChildren('box') boxx!: ElementRef<HTMLDivElement>[];
  constructor(
    public http: HttpClient,
    private questionService: QuestionService,
    private playerService: PlayersService,
    public router: Router,
  ) {

    // this.startCountdown();
    // this.questionService.getEasyQuestion().subscribe(data=>{
    //   this.datAquestion =data.results;
    //   this.category = data.results[0].category;
    //   this.correct_answer = data.results[0].correct_answer;
    //   this.incorrect_answers = data.results[0].incorrect_answers;
    //   this.question = data.results[0].question;
    //   console.log(this.datAquestion)
    // });
  }
  ngOnInit(): void {


    this.startCountdown();

    // this.getTraduction();

    this.questionService.getEasyQuestion().subscribe((data) => {
      this.question = data.results[0].question;
      this.http.get<any>(`${this.questionService.traductionUrl}${this.question}`).subscribe(data => {
        console.log(data.translations[0].text);
        this.question = data.translations[0].text
      })
      this.category = data.results[0].category;
      this.http.get<any>(`${this.questionService.traductionUrl}${this.category}`).subscribe(data => {
        console.log(data.translations[0].text);
        this.category = data.translations[0].text
      })
      this.correct_answer = data.results[0].correct_answer;
      this.http.get<any>(`${this.questionService.traductionUrl}${this.correct_answer}`).subscribe(data => {
        console.log(data.translations[0].text);
        this.correct_answer = data.translations[0].text
      })
      console.log(data);
      this.incorrect_answers = data.results[0].incorrect_answers;
      // this.http.get<any>(`${this.questionService.traductionUrl}${this.incorrect_answers}`).subscribe(data => {
      //   console.log(data.translations[0].text);
      //   this.incorrect_answers = data.translations[0].text
      //   console.log(this.incorrect_answers);
      // })
      this.incorrect_answers.push(this.correct_answer);

      this.incorrect_answers = this.questionService.randomiseAnswers(this.incorrect_answers);
      console.log(this.incorrect_answers);



    });

    // this.http.get<any>(`${this.questionService.traductionUrl}${this.question}`).subscribe(data => {
    //   console.log(data.translations[0].text);
    //   this.question=data.translations[0].text
    //       })

  }
  //   getTraduction() {
  //     this.http.get<any>(`${this.questionService.traductionUrl}${this.category}`).subscribe(data => {
  // console.log(data);
  //     })};

  // this.timer = setInterval(() => {
  //   let timeLeft = 10
  //   if (timeLeft > 0) {
  //     timeLeft--;
  //   } else {
  //     timeLeft = 10;
  //   }
  // }, 1000)


  startCountdown() {
    if (this.isFinished) { // expression a false a la première lecture
      return
    };// au prochain tour de lecture la fonction sortira grace a la ligne 78
    this.isFinished = true; // on passe l'expression de la ligne 76 a false
    this.idTimer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.ngOnInit();
        this.timeLeft = 10;
        this.partie++
      }
    }, 1000)
  };

  reponse(box: HTMLElement[], boxIndiv: HTMLElement) {
    clearInterval(this.idTimer); // on stoppe le timer
    this.isFinished = false; // on repasse l'expression de la fonction setCountdown a false
    console.log(box)
    this.partie++
    console.log(this.partie);
    if (this.partie <= 10) {
      console.log(this.partie);
      for (let b of box) {
        console.log(b);
        if (b.textContent !== this.correct_answer) {
          b.style.background = 'gray'
        }
        if (b.textContent == this.correct_answer) {
          b.style.background = 'green'
        } };
      }
        this.timeLeft = 10; // on repasse la timer à 10s une fois la question rechargée
      setTimeout(() => {
        this.ngOnInit()
        boxIndiv.style.background = ''
        for (let b of box) {
          b.style.background = ''
        }
        if (this.partie == 10) {
          this.router.navigateByUrl("/final");
        }
      }, 3000)

    }
  }
  //lors du clic sur la reponse on verifie si elle egale à la reponse correction
  //si c'est le cas on passe la div en vert, si ce nest pas le cas passe la div en rouge et la div correct en vert

  // console.log(box.textContent);
  // if(box.textContent=== this.correct_answer){
  //   box.style.background = 'green';
  //   console.log('bravo');
  //   this.boxx.forEach(el=>{
  //     if(el.nativeElement.textContent ==  this.correct_answer){
  //       console.log(el.nativeElement.style.cssText)
  //       setTimeout(() => {
  //         el.nativeElement.style.backgroundColor=' '
  //         this.ngOnInit()
  //         box.style.background = '';
  //       }, 3000)
  //     }
  //   })
  //   this.playerService.players[0].score += 10
  // }else{
  //   box.style.background = 'red';
  //   this.boxx.forEach(el=>{
  //     if(el.nativeElement.textContent ==  this.correct_answer){
  //       console.log(el.nativeElement.style.cssText)
  //       el.nativeElement.style.backgroundColor = 'green'
  //       setTimeout(() => {
  //         this.ngOnInit()
  //         el.nativeElement.style.backgroundColor=' '
  //         box.style.background = '';
  //       }, 3000)
  //     }
  //   })
  //   console.log('dommage');
  // }

