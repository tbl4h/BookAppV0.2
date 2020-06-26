import { Fork } from '../_models/fork.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ForkService {

  constructor(private firestore: AngularFirestore) {

  }
  getForks() {
    return this.firestore.collection('Forks').snapshotChanges();
  }

  createFork(fork: Fork) {
    this.firestore.collection('Forks').doc(fork.id).set(Object.assign({}, fork));
  }

  updateFork(fork: Fork) {
    delete fork.id;
    this.firestore.doc('Forks/' + fork.id).update(fork);
  }
  deleteFork(forkId: string) {
    console.log(forkId);

    this.firestore.collection('Forks/').doc(forkId).delete();
  }
  getId(): string {
    return this.firestore.createId();
  }
}
