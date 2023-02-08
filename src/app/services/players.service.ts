import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player-model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  //creation de joueur en dur
  players: Player[] = [
    {
      id: 0,
      pseudo: 'joueur 1',
      avatar: '/assets/avatar1.svg',
      score: 5
    },
    {
      id: 1,
      pseudo: 'joueur 2',
      avatar: '/assets/avatar2.svg',
      score: 30
    },
    {
      id: 2,
      pseudo: 'joueur 3',
      avatar: '/assets/avatar3.svg',
      score: 10
    },
    {
      id: 3,
      pseudo: 'joueur 4',
      avatar: '/assets/avatar4.svg',
      score: 200
    }
  ];

  // parti Ahmid
  playerList = new BehaviorSubject(this.players)

  addPlayer(pseudo: string, avatar: string,) {

    const player: Player = { id: this.players.length + 1, pseudo: pseudo, avatar: avatar, score: 0 }
    this.players.push(player);


  }

  removePlayer(i: number) {
    this.players.splice(i, 1)
  }

  // partie ced
  // récuperer les info joueur en dur
  getAllPlayers(): Player[] {


    return this.players;
  }
  // afficher un joueur unique par id 
  getPlayerById(playerId: number): Player {
    const player = this.players.find(player => player.id === playerId);
    //si joueur n'existe pas ("!")
    if (!player) {
      //alors renvoie un message d'erreur
      throw new Error("player not found");
    } else {
      return player
    }
  }

  // manipulation du score du joueur par selection de l'id
  // si win a la question
  scorePlayer(playerId: number, win: boolean) {
    const player = this.getPlayerById(playerId);
    if (win) {
      player.score += 10;
    }
  }

  winnerPlayer() {
    // parcourir les joueurs
    // si score superieur aux autres
    // parcourir les joueurs
    // si score superieur aux autres

    return this.players[1]

  }

}


