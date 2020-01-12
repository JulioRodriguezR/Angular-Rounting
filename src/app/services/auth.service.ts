import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  /**
   * Check state.
   *
   * @memberof AuthService
   */
  isAuthenticated() {
    // Simulate a delay of time, approaching the server.
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}
