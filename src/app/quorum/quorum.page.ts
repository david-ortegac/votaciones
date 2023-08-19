import { Component, OnInit } from '@angular/core';
import { QuorumService } from '../services/quorum.service';
import { Quorum } from '../models/quorum';
import { AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Component({
  selector: 'app-quorum',
  templateUrl: './quorum.page.html',
  styleUrls: ['./quorum.page.scss'],
})
export class QuorumPage implements OnInit {

  data:any

  constructor(
    private quorumService: QuorumService
  ) { }

  ngOnInit() {
    this.quorumService.allQuorum();
  }

}
