import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';
import { Condidat } from 'src/model/Condidat';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {
  condidat:Condidat;
  constructor(private service: BlockchainService) { }
  populateForm(cond: Condidat) {
    this.service.formData = Object.assign({}, cond);
  }
  vote(cond){
    this.service.postVote(cond.id)
    .subscribe(data => console.log(data), error => console.log(error));
  }
  ngOnInit() {
    this.service.getAllCondidate()
  }
  

}
