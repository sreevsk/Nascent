import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { GisServicesComponent } from './gis-services/gis-services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'our-portfolio', component: OurPortfolioComponent },
  { path: 'it-consulting', component: ItConsultingComponent },
  { path: 'gis-services', component: GisServicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
