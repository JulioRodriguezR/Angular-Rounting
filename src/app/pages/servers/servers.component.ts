import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onRefresh() {
    // this.router.navigate(['/servers'], {relativeTo: this.route});

    // Indiferentemente como ruta absoluta o relativa.
    // A diferencia de routerLink navigate no sabe en que ruta se encuentra actualmente
  }

  onLoadUsers(id: number) {
    this.router.navigate(['/users', id, 'Max'], {
      queryParams: { allowEdit: 1 },
      fragment: 'loading'
    });
  }
}
