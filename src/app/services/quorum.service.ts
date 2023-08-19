import { Quorum } from './../models/quorum';
import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuorumService {
  
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  quorum$: Observable<Quorum[]>;

  constructor() { 
    // get a reference to the user-profile collection
    const quorumCollection = collection(this.firestore, 'quorum');

    // get documents (data) from the collection using collectionData
    this.quorum$ = collectionData(quorumCollection) as Observable<Quorum[]>;
  }

  allQuorum() {
    return this.quorum$;
  }

  async createRegister(persona: Quorum) {
    return null;
  }

}
