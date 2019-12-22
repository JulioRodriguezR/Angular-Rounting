import { NgModule } from '@angular/core';

import { AuthGuardService } from '../auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from 'src/app/pages/servers/edit-server/edit-server.component';
import { CanDeactivateGuardService } from 'src/app/pages/servers/edit-server/can-deactivate-guard.service';
import { ServerResolverService } from 'src/app/pages/servers/server/server-resolver.service';
import { PostsComponent } from './posts/posts.component';
import { ErrorPageComponent } from '../components/alerts/error-page/error-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    ServerResolverService,
    EditServerComponent,
    CanDeactivateGuardService,
    PostsComponent,
    ErrorPageComponent,
    AuthGuardService
  ],
  exports: [
    HomeComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    ServerResolverService,
    EditServerComponent,
    CanDeactivateGuardService,
    PostsComponent,
    ErrorPageComponent,
    AuthGuardService
  ],
  imports: []
})
export class PagesModule { }
