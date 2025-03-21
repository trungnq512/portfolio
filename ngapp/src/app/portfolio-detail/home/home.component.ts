import { Component } from '@angular/core';
import { CommonAngularModule } from '../../common-angular.module';
import { MaterialModule } from '../../material.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MaterialModule,
      CommonAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public router: Router) {};

      onItemSelected(route: string) {
        if (!route.length ) {
          this.router.navigate(['portfolio/' + route]);
        }
      }
}
