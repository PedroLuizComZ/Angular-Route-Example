import { rejects } from "assert";

export class AuthService {
  loggedIn = false;

  isAutenticated() {
    const promisse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1500);
    });
    return promisse;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
