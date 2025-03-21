import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonAngularModule } from '../common-angular.module';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.css',
  imports: [RouterOutlet, MaterialModule,
        CommonAngularModule]
})
export class PortfolioDetailComponent implements OnInit {
  constructor() {
    console.log('load')
  }
  ngOnInit() {}
}
