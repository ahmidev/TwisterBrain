
import { Component, OnInit } from '@angular/core';
import { ApiQuestionService } from '../services/api-question.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // ⬇ BORDEL DE RICK ⬇ c'est pour afficher l'adresse API dynamic...normalement c'est vide
  questions:any;
  constructor(private myUrl: ApiQuestionService,
    private questionsApi: QuestionService) { }
  ngOnInit(): void {
    console.log(this.myUrl.setParamQuestions());
    this.questionsApi.getQuestion()
    
  }
}
