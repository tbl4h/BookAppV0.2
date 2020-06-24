import { Fork } from './fork.model';
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
    return this.firestore.collection('Forks').add({...fork});
  }

  updateFork(fork: Fork) {
    delete fork.id;
    this.firestore.doc('Forks/' + fork.id).update(fork);
  }
  deleteFork(forkId: string) {
    this.firestore.doc('Forks/' + forkId).delete();
  }
}
