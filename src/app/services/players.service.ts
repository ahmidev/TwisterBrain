import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player-model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  // public pseudo: string = "";
  // public avatar: string = "";
  // public score: number = 0;
  // public color: string = "";
  // public title?: string = "";



  players: Player[] = [
    // {
    //   id: 0,
    //   pseudo: 'joueur 1',
    //   avatar: '/assets/avatar1.svg',
    //   score: 5
    // },
    // {
    //   id: 1,
    //   pseudo: 'joueur 2',
    //   avatar: '/assets/avatar2.svg',
    //   score: 30
    // },
    // {
    //   id: 2,
    //   pseudo: 'joueur 3',
    //   avatar: '/assets/avatar3.svg',
    //   score: 10
    // },
    // {
    //   id: 3,
    //   pseudo: 'joueur 4',
    //   avatar: '/assets/avatar4.svg',
    //   score: 200
    // }
  ];
  constructor() {
  }
  playerList = new BehaviorSubject(this.players)
  //methode de creation d'un joueur
  addPlayer(pseudo: string, avatar: string,) {

    const player: Player = { id: this.players.length + 1, pseudo: pseudo, avatar: avatar, score: 0 }
    this.players.push(player);

  }
  //permet de supprimer un joeur dans le tableau
  removePlayer(index: number) {
    this.players.splice(index, 1)
  }
  getAllPlayers(): Player[] {

    return this.players;
  }

  getPlayerById(playerId: number): Player {
    const player = this.players.find(player => player.id === playerId);
    if (!player) {
      throw new Error("player not found");
    } else {
      return player
    }
  }

  scorePlayer(playerId: number, win: boolean) {
    const player = this.getPlayerById(playerId);
    if (win) {
      player.score += 10;
    }

  }
  winnerPlayer() {
    // renvoyer le joueur qui a le plus de points
    const winner = this.players.sort((a,b)=> {
      return b.score - a.score;
    })
    // console.log("Vainqueur" + winner[0]);
    return winner
  }

}


