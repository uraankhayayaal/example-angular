import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionCreateComponent } from './section-create/section-create.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { PortfolioEditComponent } from './portfolio-edit/portfolio-edit.component'
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:  '', redirectTo:  'sections', pathMatch:  'full' },
  {
    path:  'sections',
    component:  SectionListComponent
  },
  {
      path:  'create-section',
      component:  SectionCreateComponent
  },
  {
    path:  'portfolios',
    component:  PortfolioListComponent
  },
  {
      path:  'create-portfolio',
      component:  PortfolioCreateComponent
  },
  {
      path:  'view-portfolio/:id',
      component:  PortfolioViewComponent
  },
  {
      path:  'edit-portfolio/:id',
      component:  PortfolioEditComponent
  },

  {
    path:  'signup',
    component:  SignupComponent
  },
  {
      path:  'login',
      component:  LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
