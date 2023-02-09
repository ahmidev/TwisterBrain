import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiQuestionService } from './api-question.service';
export interface Response {
  response_code: number,
  results: []
}

@Injectable({
  providedIn: 'root'
})

export class QuestionService{

  // public generalUrl: string = 'https://opentdb.com/api.php?amount=10'
  // public easyUrl: string = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple'
  // public mediumUrl: string = 'https://opentdb.com/api.php?amount=10&difficulty=medium'
  // public hardUrl: string = 'https://opentdb.com/api.php?amount=10&difficulty=difficult'
  public traductionUrl: string = 'https://api.deepl.com/v2/translate?auth_key=6c3cea4d-d302-e316-59c3-35717d46dfb0&target_lang=fr&text='
  datas: any;
  questions: any;
  timeLeft: number = 10;
  interval: any;

  constructor(private http: HttpClient, public myUrl:ApiQuestionService) { this.getEasyQuestion() }


  getEasyQuestion() {
    return this.http.get<any>(this.myUrl.setParamQuestions()).pipe(
      tap((data) => {
        // this.questions.next(data.results)
        this.questions = new BehaviorSubject(data.results);
      })
    )

  }
  // getMediumQuestion() {
  //   this.http.get(this.mediumUrl).subscribe(data => {
  //     return data
  //   });
  // }
  // getHardQuestion() {
  //   this.http.get(this.hardUrl).subscribe(data => {
  //     return data
  //   });
  // }
  getTraduction(paramToTranslate: string) {
    return this.http.get<any>(`this.traductionUrl${paramToTranslate}`).pipe(
      tap((data) => {
      }))
  };

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
}
