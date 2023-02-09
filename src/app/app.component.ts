import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  title = 'TwisterBrain';
  constructor(private questionService: QuestionService){}

  ngOnInit(): void {
    // this.questionService.getEasyQuestion().subscribe(x=>{
    //   console.log(x.results)
    // })
    
  }
}
