import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionCreateComponent } from './section-create/section-create.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
