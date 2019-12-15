import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./auth.service";
import { AppComponent } from "./app.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { ServersComponent } from "./pages/servers/servers.component";
import { UserComponent } from "./pages/users/user/user.component";
import { EditServerComponent } from "./pages/servers/edit-server/edit-server.component";
import { ServerComponent } from "./pages/servers/server/server.component";
import { ServersService } from "./pages/servers/servers.service";
import { CanDeactivateGuardService } from "./pages/servers/edit-server/can-deactivate-guard.service";
import { ServerResolverService } from "./pages/servers/server/server-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ServersService,
    AuthService,
    CanDeactivateGuardService,
    ServerResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
