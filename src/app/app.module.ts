import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ExploreComponent } from './explore/explore.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContactComponent } from './contact/contact.component';





const routes:Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'profile' , component:ProfileComponent},
{path:'explore' , component:ExploreComponent},
{path:'favorite' , component:FavoriteComponent},
{path:'contact',component:ContactComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    ExploreComponent,
    FavoriteComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
