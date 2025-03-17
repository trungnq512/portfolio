import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "../app.routes";

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    declarations: [],
    providers: [
    ]
})
export class PortfolioDetailRoutes { }