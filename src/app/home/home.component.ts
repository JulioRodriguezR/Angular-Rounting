import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  /**
   * Navegar al componente servidores
   *
   * @memberof HomeComponent
   */
  onLoadServers(id: number) {
    this.router.navigate(["/servers", id, "edit"], {
      queryParams: { allowEdit: 1 },
      fragment: "loading"
    });
  }

  onLogin() {
    // Comunicarse con el servicio de autentificación
    this.authService.logIn();
  }

  onLogout() {
    this.authService.logOut();
  }
}
