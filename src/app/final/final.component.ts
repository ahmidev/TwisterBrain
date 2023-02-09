//pour importer mon API canvas confetti
const confettis = require('canvas-confetti');
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/player-model';
import {ConfettisService} from '../services/confettis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
})


export class FinalComponent implements OnInit {
  //tableau pour mes joueurs
    players:Player[]= this.playersService.players;
    winnerAvatar = this.playersService.winnerPlayer().avatar;
    winnerScore = this.playersService.winnerPlayer().score;
    btnDelet = false;

constructor (public confettisService: ConfettisService, private playersService: 
  PlayersService, public router:Router) {}


ngOnInit(){
  //pour afficher mon API
  this.showConfetti();
}
  
  showConfetti() {
  let canvas = document.querySelector('.canvas') as any;
  let confetti = confettis.create(canvas, { resize: true }); // resize: Booléen pour autoriser la taille du canvas s'adapte à ton format de page La taille du canvas ne sera pas modifiée 
  confetti({
    spread: 40,  //jusqu'où peuvent aller les confettis, en degrés. 
    startVelocity: 70, //vitesse des confettis qui commenceront à défiler, en pixels
    particleCount: 500, // nombre de confettis
    gravity: 0.5,    
   origin: { y: 0.5 }
   
  });
  }
  rejouer(){
    this.playersService.players.forEach(score=>{
      score.score = 0;
    });
    this.router.navigateByUrl("/game")
  }

}