import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) {
    // ActivatedRoute puede tener acceso al usuario seleccionado

   }

  ngOnInit() {
    this.user = {
      // Datos recuperables
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
  }

}
