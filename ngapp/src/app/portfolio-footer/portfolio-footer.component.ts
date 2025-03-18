import { Component } from '@angular/core';
import { CommonAngularModule } from '../common-angular.module';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './portfolio-footer.component.html',
  styleUrl: './portfolio-footer.component.css',
  imports: [MaterialModule,
        CommonAngularModule]
})
export class PortfolioFooterComponent {

}
