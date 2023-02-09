import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player-model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[] = [];
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
<<<<<<< HEAD
    return "Vainqueur " + winner[0].pseudo

    // renoyer le joueur qui a le plus de points
    //parcourir tableau de joueur en integrant conditions
    
=======
    return winner[0]
>>>>>>> d2531d45b9061b1291674301cb9a441ab4f84f1c
  }

}


