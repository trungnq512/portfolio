import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioDetailComponent } from "./portfolio-detail/portfolio-detail.component";

const routes: Routes = [
    {
        path: '',
        component: PortfolioDetailComponent,
        data: { preload: true }
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    declarations: []
})
export class AppRoutingModule { }