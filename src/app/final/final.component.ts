const confettis = require('canvas-confetti');
import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/player-model';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
})
export class FinalComponent implements OnInit {
  // this.joueursService.joueurArray
  // public joueursArray:Player[]= PlayersService.getAllPl

  winplayer: Player = this.playersService.winnerPlayer();
  players: Player[] = this.playersService.players;
  btnDelet = false;
  confetti = this.showConfetti();

  constructor(private playersService: PlayersService) {}
  ngOnInit(): void {
    console.log(this.playersService.players);

    // var myConfetti = confettis.create();
    // myConfetti({
    //   particleCount: 1000,
    //   spread: 160,
    //   propagation: 260
    // any other options from the global
    // confetti function
    // });
  }

  showConfetti() {
    var myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    var myConfetti = confettis.create();

    myConfetti(myCanvas, {
      resize: true,
      useWorker: true,
      particleCount: 1000,
      spread: 160,
      propagation: 589,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },

      // any other options from the global
      // confetti function
    });
  }
}
