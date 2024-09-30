import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {}

  addUser(user: any) {
    return this.firestore.collection('users').add(user);
  }

  getUsers() {
    return this.firestore.collection('users').valueChanges({ idField: 'id' });
  }


