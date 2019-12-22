import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { UserComponent } from 'src/app/pages/users/user/user.component';
import { ServersComponent } from 'src/app/pages/servers/servers.component';
import { ServerComponent } from 'src/app/pages/servers/server/server.component';
import { EditServerComponent } from 'src/app/pages/servers/edit-server/edit-server.component';
import { CanDeactivateGuardService } from 'src/app/pages/servers/edit-server/can-deactivate-guard.service';
import { ServerResolverService } from 'src/app/pages/servers/server/server-resolver.service';
import { ErrorPageComponent } from './components/alerts/error-page/error-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  {
    path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolverService }
      },
      {
        path: ':id/edit',
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
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
