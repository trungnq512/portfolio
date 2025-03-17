import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopStripComponent } from './top-strip/top-strip.component';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrl: './portfolio-header.component.css',
  imports: [HeaderComponent, TopStripComponent]
})
export class PortfolioHeaderComponent {

}
