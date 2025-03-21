import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.css',
  imports: [RouterOutlet]
})
export class PortfolioDetailComponent implements OnInit {
  constructor() {
    console.log('load')
  }
  ngOnInit() {}
}
