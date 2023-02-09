import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfettisService {
// pour API confettis page final
  confettis: any;

  constructor() { }

  //1. retourn une donnée{propriétè} dispo dans le service. A faire à chaque fois. 
  //get est une lecture
  getMonservice(){}
  //2.modifie une donnée{propriétè} dispo dans le service. A faire à chaque fois. 
  //set est une modification ou suppression delete
  setMonservice(){}

//pour mon API
setConfettis(confettis:any){
  console.log('confettis:',confettis)
  this.confettis = confettis;
}

getConfettis(){
  return this.confettis;
}
}
