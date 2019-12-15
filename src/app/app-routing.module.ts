import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorPageComponent } from "./alerts/error-page/error-page.component";
import { AuthGuardService } from "./auth-guard.service";
import { HomeComponent } from "./pages/home/home.component";
import { UserComponent } from "./pages/users/user/user.component";
import { ServersComponent } from "./pages/servers/servers.component";
import { ServerComponent } from "./pages/servers/server/server.component";
import { EditServerComponent } from "./pages/servers/edit-server/edit-server.component";
import { CanDeactivateGuardService } from "./pages/servers/edit-server/can-deactivate-guard.service";
import { ServerResolverService } from "./pages/servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
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
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolverService }
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService]
      }
    ]
  },
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule'
  },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found!" }
  },
  { path: "**", redirectTo: "/not-found" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
