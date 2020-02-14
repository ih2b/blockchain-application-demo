import { Injectable } from '@angular/core';
import { Condidat } from 'src/model/Condidat';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  readonly rootURL = 'http://localhost:3000/';
  formData:Condidat;
  List:Condidat[];
  
  constructor(private http:HttpClient) { }
  postCondidate(form :Object):Observable<Object>{

    return this.http.post(this.rootURL + 'ajouter_candidate', form);

  }
  postVote(form :Object):Observable<Object>{
    return this.http.post(this.rootURL + 'Vote', form);
  }
  getAllCondidate(){
    this.http.get(this.rootURL + 'getCondidateList')
    .toPromise()
    .then(res => this.List = res as Condidat[])
     }
}
