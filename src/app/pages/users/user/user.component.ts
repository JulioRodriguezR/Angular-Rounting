import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubcription: Subscription;

  constructor(private route: ActivatedRoute) {
    // ActivatedRoute puede tener acceso al usuario seleccionado
   }

  ngOnInit() {
    this.user = {
      // Datos recuperables
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    /*
      Pudiendo trabajar con tareas asíncronas...
      Los params de su ruta actualmente cargada podrían cambiar,
      pudiendo ocurrir en el futuro, para luego ejecutarlo.
      Asignándolo al objeto usuario.

      -- No esta estrechamente ligado al componente, no se destruye.
    */
    this.paramsSubcription = this.route.params
      .subscribe(
        (params: Params) => {
           this.user.id = params['id'];
           this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy(): void {
    // Darte de baja manualmente.
    this.paramsSubcription.unsubscribe;
  }


}
