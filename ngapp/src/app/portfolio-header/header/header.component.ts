import { Component, OnInit } from '@angular/core';
import { CommonAngularModule } from '../../common-angular.module';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-header',
  imports: [
    MaterialModule,
    CommonAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
}
