import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent }, // localhost:...
  {
    path: "users",
    component: UserComponent,
    children: [
      { path: ":id/:name", component: UserComponent } // Cargar dinámicamente una ruta
    ]
  },
  {
    path: "servers",
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService]
      }
    ]
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" } // Reedireccion
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
