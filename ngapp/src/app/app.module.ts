import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { CommonBrowserModule } from "./common-browser.module";
import { MaterialModule } from "./material.module";
import { TopStripComponent } from "./top-strip/top-strip.component";
import { PortfolioDetailComponent } from "./portfolio-detail/portfolio-detail.component";
import { CommonAngularModule } from "./common-angular.module";

@NgModule({
    imports: [
        AppRoutingModule,
        CommonBrowserModule,
        MaterialModule,
        CommonAngularModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        TopStripComponent,
        PortfolioDetailComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}