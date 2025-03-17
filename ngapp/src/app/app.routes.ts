import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
              },
              {
                path: 'home',
                loadChildren: () =>
                  import('./portfolio-detail/portfolio-detail.routes').then((m) => m.PortfolioDetailRoutes),
              }
        ]
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