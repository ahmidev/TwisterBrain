import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { Question } from 'src/app/question.interface';
import { Player } from '../models/player-model';
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
  partie:number=0;
  @ViewChildren('box') boxx!:ElementRef<HTMLDivElement>[];

  constructor(
    private questionService: QuestionService,
    private playerService: PlayersService,
    public router: Router,

  ) {
    
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
    this.questionService.getEasyQuestion().subscribe((data) => {
      this.question = data.results[0].question;
      this.category = data.results[0].category;
      this.correct_answer = data.results[0].correct_answer;
      console.log(data);

      this.incorrect_answers = data.results[0].incorrect_answers;
      this.incorrect_answers.push(this.correct_answer);
      this.incorrect_answers = this.randomiseAnswers(this.incorrect_answers);
      console.log(this.incorrect_answers);
    });
  }
  randomiseAnswers(array: string[]) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    console.log(currentIndex);

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  reponse(box:HTMLElement[], boxIndiv:HTMLElement){
   console.log(box)
   this.partie++
   console.log(this.partie);
 if(this.partie <= 5){
  console.log(this.partie);
  
   for(let b of box){
     if(b.textContent!==this.correct_answer){
       b.style.background ='gray'
      //  setTimeout(() => {
      //    this.ngOnInit()
      //    boxIndiv.style.background = ''
      //    b.style.background =''
      //  }, 3000)
     }
    if(boxIndiv.textContent == this.correct_answer){
      boxIndiv.style.background = 'green'
      this.playerService.players[0].score+=10;
    }else{
      boxIndiv.style.background ='red'
    }
   
    if(b.textContent==this.correct_answer){
      b.style.background ='green'
    }
  }
  setTimeout(() => {
            this.ngOnInit()
            boxIndiv.style.background = ''
            for(let b of box){
            b.style.background =''}
            if(this.partie==5){
              this.router.navigateByUrl("/final");
            }
          }, 3000)
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

 

 }
}
//lors du clic sur la reponse on verifie si elle egale à la reponse correction
//si c'est le cas on passe la div en vert, si ce nest pas le cas passe la div en rouge et la div correct en vert
 
}
