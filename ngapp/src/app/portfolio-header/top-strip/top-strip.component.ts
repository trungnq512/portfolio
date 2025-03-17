import { Component } from '@angular/core';
import { CommonAngularModule } from '../../common-angular.module';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-top-strip',
  imports: [MaterialModule,
            CommonAngularModule],
  templateUrl: './top-strip.component.html',
  styleUrl: './top-strip.component.css',
  standalone: true
})
export class TopStripComponent {

}
