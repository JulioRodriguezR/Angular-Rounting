import { NgModule } from '@angular/core';

import { AuthGuardService } from '../services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from 'src/app/pages/servers/edit-server/edit-server.component';
import { CanDeactivateGuardService } from 'src/app/pages/servers/edit-server/can-deactivate-guard.service';
import { ServerResolverService } from 'src/app/pages/servers/server/server-resolver.service';
import { PostsComponent } from './posts/posts.component';
import { ErrorPageComponent } from '../components/alerts/error-page/error-page.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    PostsComponent,
    ErrorPageComponent,
  ],
  exports: [
    HomeComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    PostsComponent,
    ErrorPageComponent,
    // AuthGuardService
  ],
  providers: [
    AuthGuardService,
    CanDeactivateGuardService,
  ]
})
export class PagesModule { }
