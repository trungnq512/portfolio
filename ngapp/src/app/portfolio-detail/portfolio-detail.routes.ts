import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ResumeComponent } from "./resume/resume.component";
import { PortfolioDetailComponent } from "./portfolio-detail.component";

export const routes: Routes = [
{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: [
  ]
})
export class PortfolioDetailRoutes { 
  constructor() {
    console.log("Construct route")
  }
}