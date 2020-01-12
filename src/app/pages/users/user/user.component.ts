import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubcription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // Recoverable Data
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    /*
      Being able to work with asynchronous tasks ...
      The parameters of your currently loaded route could change, 
      and may occur in the future, and then execute it. 
      
      Assigning it to the user object.

      -- It is not closely linked to the component, it is not destroyed.
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
    this.paramsSubcription.unsubscribe;
  }


}
