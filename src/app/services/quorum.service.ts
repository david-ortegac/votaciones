import {Quorum} from './../models/quorum';
import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuorumService {

  private quorumRef: CollectionReference<DocumentData>;
  q: Quorum = new Quorum;

  constructor(private readonly firestore: Firestore) {
    this.quorumRef = collection(this.firestore, 'quorum');
   }

  allQuorum(): Observable<Quorum[]> {
    return collectionData(this.quorumRef, { idField: 'id' }) as Observable<Quorum[]>;
  }

  createRegister(person: Quorum) {
    this.q.apartment = "123"
    return addDoc(this.quorumRef, {
      apartment: person.apartment
    });
  }

}
