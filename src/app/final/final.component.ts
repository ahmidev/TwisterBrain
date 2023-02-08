//pour importer mon API canvas confetti
const confettis = require('canvas-confetti');
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/player-model';
import {ConfettisService} from '../services/confettis.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
})


export class FinalComponent implements OnInit {
  //tableau pour mes joueurs
    players:Player[]= this.playersService.players;

    btnDelet = false;

constructor (public confettisService: ConfettisService, private playersService: 
  PlayersService) {}


ngOnInit(){
  //pour afficher mon API
  this.showConfetti();
}
  
  showConfetti() {
  let canvas = document.querySelector('.canvas') as any;
  let confetti = confettis.create(canvas, { resize: true });
  confetti({
    spread: 170,
   origin: { y: 0.5 }
   
  });
  }

}