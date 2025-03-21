import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonAngularModule } from '../common-angular.module';
import { MaterialModule } from '../material.module';
import { NavItem } from '../portfolio-header/portfolio-header-nav-item/nav-item';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.css',
  imports: [RouterOutlet, MaterialModule,
    CommonAngularModule]
})
export class PortfolioDetailComponent {
  constructor() { }
}
