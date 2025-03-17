import { Component } from '@angular/core';
import { CommonAngularModule } from '../common-angular.module';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrl: './portfolio-header.component.css',
  imports: [MaterialModule,
      CommonAngularModule]
})
export class PortfolioHeaderComponent {

}
