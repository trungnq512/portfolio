import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./portfolio-detail/portfolio-detail.routes').then((m) => m.PortfolioDetailRoutes)

            }
        ]
    },
    {
        path: '**', component: PageNotFoundComponent  // Wildcard route for a 404 page
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    providers: [
    ]
})

export class AppRoutingModule { }