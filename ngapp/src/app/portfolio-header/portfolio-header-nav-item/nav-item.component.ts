import { Component, Input } from "@angular/core";
import { navItems } from "../portfolio-header-data";
import { NavItem } from "./nav-item";
import { Router } from "@angular/router";
import { CommonAngularModule } from "../../common-angular.module";
import { MaterialModule } from "../../material.module";

@Component({
    selector: 'portfolio-header-nav-item',
    templateUrl: './nav-item.component.html',
    imports: [MaterialModule,
          CommonAngularModule]
})
  
export class PortfolioHeaderNavItemComponent {
    constructor(public router: Router) {};
    @Input() item: NavItem | any;
    @Input() depth: any;
    
    onItemSelected(item: NavItem) {
      if (!item.children || !item.children.length) {
        this.router.navigate(['portfolio/' + item.route]);
      }
    }
}
