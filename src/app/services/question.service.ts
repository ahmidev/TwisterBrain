import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
export interface Response {
  response_code:number,
  results:[]
}

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  public generalUrl: string = 'https://opentdb.com/api.php?amount=10'
  public easyUrl: string = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple'
  public mediumUrl: string = 'https://opentdb.com/api.php?amount=10&difficulty=medium'
  public hardUrl: string = 'https://opentdb.com/api.php?amount=10&difficulty=difficult'
  datas: any;
  questions: any;
  timeLeft: number = 10;
  interval: any;

constructor(private http : HttpClient){ this.getEasyQuestion()}

getEasyQuestion(){
 return this.http.get<any>(this.easyUrl).pipe(
    tap((data)=>{
      // this.questions.next(data.results)
      this.questions = new BehaviorSubject(data.results);
    })
  )
}

getMediumQuestion(){
  this.http.get(this.mediumUrl).subscribe(data => {
    return data
  });
}

getHardQuestion(){
  this.http.get(this.hardUrl).subscribe(data => {
    return data
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
}
