import { Injectable, Output, EventEmitter } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSession$ = authState(this.auth)

  @Output()
  logedUser: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private auth: Auth,
  ) { }

  async register(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string) {
    let login = signInWithEmailAndPassword(this.auth, email, password);
    this.logedUser.emit(true);
    return login;
  }


  async logout() {
    let logout = signOut(this.auth);
    this.logedUser.emit(false);
    return logout;
  }
}
