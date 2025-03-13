import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { CommonBrowserModule } from "./common-browser.module";

@NgModule({
    imports: [
        AppRoutingModule,
        CommonBrowserModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}