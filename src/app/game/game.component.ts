import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  btnDelet = false;
  questions: any;
  constructor(private questionService: QuestionService) {

  }

}
