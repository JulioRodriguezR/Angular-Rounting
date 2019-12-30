import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

import { ServersService } from '../servers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaves = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router // quiero navegar...
  ) {}

  ngOnInit() {
    // Bajo un enfoque de programación reactiva,
    // reaccionar a los params de consulta modificados
    this.route.queryParams
      // Comprobar si esta permitido editar el servidor
      .subscribe((queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false; // Método de cambios guardados
      });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id']; // id real
    this.server = this.serversService.getServer(id);
    // Subscribirse a los params de ruta para actualizar la id si cambian los params
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaves = true;
    // Asc un nivel al último servidor cargado
    // en relación con la ruta activa
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  /**
   * Aplicar siempre que el enrutador compruebe el servicio.
   *
   * @memberof EditServerComponent
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Comprobar posibilidad de edicción
    if (!this.allowEdit) {
      return true;
    }
    // Tomar nombre del enlace bidireccional a las entradas del usuario
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaves
    ) {
      return confirm('Do you want to discart the changes?');
    } else {
      return true;
    }
  }
}
