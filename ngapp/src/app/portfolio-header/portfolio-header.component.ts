import { Component, Input } from '@angular/core';
import { CommonAngularModule } from '../common-angular.module';
import { MaterialModule } from '../material.module';
import { NavItem } from './portfolio-header-nav-item/nav-item';
import { Router } from '@angular/router';
import { navItems } from './portfolio-header-data';
import { PortfolioHeaderNavItemComponent } from './portfolio-header-nav-item/nav-item.component';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrl: './portfolio-header.component.css',
  imports: [MaterialModule,
      CommonAngularModule,
      PortfolioHeaderNavItemComponent
    ]
})
export class PortfolioHeaderComponent {
  constructor(public router: Router) {
    console.log("construct header.")
  }
  navItems = navItems;
}
