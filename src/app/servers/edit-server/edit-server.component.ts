import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaves = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router // quiero navegar...
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // Bajo un enfoque de programación reactiva,
    // reaccionar a los params de consulta modificados
    this.route.queryParams
      // Comprobar si esta permitido editar el servidor
      .subscribe((queryParams: Params) => {
        this.allowEdit = queryParams["allowEdit"] === "1" ? true : false; // Método de cambios guardados
        // Info sobre si se ha hecho click en actualizar
      });
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    // Cambiar valor propiedad en cada actualización
    this.changesSaves = true;
    // Asc un nivel al último servidor cargado
    // en relación con la ruta activa
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
