import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { ParamQuestions } from '../models/param-question.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiQuestionService {
  constructor(private http: HttpClient){}
  // valeur par defaut envoyer des question du jeu
  defautValueParam: ParamQuestions = {
    nbQuestions: 2,
    category: null,
    difficulty: null,
    type: 'multiple'
  };


  // ⬇ CONSTITUTION DE L'ADRESSE API ⬇

  // envoie des valeur par defaut au formulaire

  getParamdefaut(): ParamQuestions {
    return this.defautValueParam
  }

  // recuperation des elements pour l'APIUrl
  setParamQuestions(param?: any) {
    if (param) { //parametre provenant du Formulaire
      return this.paramQuestion(param)
    } else {
      return this.paramQuestion(this.defautValueParam)//parametre par defaut
    }
  };

  // construction tableau pour la suite de la construction APIUrl
  paramQuestion(param: any) {
    // console.log('mon param', param);

    let i = 0;
    let urlconst = [
      {
        name: 'amount=',
        value: 0
      },
      {
        name: '&category=',
        value: null
      },
      {
        name: '&difficulty=',
        value: null
      },
      {
        name: '&type=',
        value: null
      }
    ];

    for (const key in param) {
      urlconst[i].value = param[key];
      // console.log("ajout de ", urlconst[i].value);
      i++      
      // console.log('mon tableau', urlconst)
    };
    // console.log("envoie au construc url", urlconst)
    return this.urlConstructor(urlconst)
  }


  // array: Choice[]
  urlConstructor(array: any) {
    let urlApi = `https://opentdb.com/api.php?`
    array.forEach((el: { value: string | number | null; name: string; }) => {/* bouclage sur les éléments de la variable urlApiVar et assemblage de ces dernier si il ne sont pas vide*/
      if (el.value !== null && el.value !== "null") {
        urlApi = urlApi + el.name + el.value;
        // console.log("ajourt de :", el.name, el.value);
      } else {
        urlApi = urlApi
        // console.log('on touche pas :', urlApi);
      }
    });
    // console.log("normalement mon url", urlApi)
    return urlApi;
  };

  getUrlAPI(){
return this.http.get(this.setParamQuestions());
  }

}
