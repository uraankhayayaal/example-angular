import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionCreateComponent } from './section-create/section-create.component';

import { HttpClientModule } from  '@angular/common/http';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { PortfolioEditComponent } from './portfolio-edit/portfolio-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionListComponent,
    SectionCreateComponent,
    PortfolioListComponent,
    PortfolioCreateComponent,
    SignupComponent,
    LoginComponent,
    PortfolioViewComponent,
    PortfolioEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
