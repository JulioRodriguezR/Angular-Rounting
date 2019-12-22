export class AuthService {
  loggedIn = false;

  /**
   * Verificación del estado.
   *
   * @memberof AuthService
   */
  isAuthenticated() {
    // Simular una demora de tiempo, acercándonos al servidor.
    const promise = new Promise((resolve, reject) => {
      // Espera
      setTimeout(() => {
        // Resolver la promesa
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
