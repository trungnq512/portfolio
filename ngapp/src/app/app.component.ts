import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PortfolioHeaderComponent, PortfolioFooterComponent]
})
export class AppComponent {
  title = 'Portfolio';
  constructor() {}
}
