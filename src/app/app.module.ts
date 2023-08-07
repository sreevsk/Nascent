import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { GisServicesComponent } from './gis-services/gis-services.component';
import { OurJobsComponent } from './our-jobs/our-jobs.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { SharedDataService } from './shared-data.service';
import { HttpClientModule } from '@angular/common/http';

import { ItProjectServicesComponent } from './it-project-services/it-project-services.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SupportComponent,
    OurPortfolioComponent,
    ItConsultingComponent,
    GisServicesComponent,
    OurJobsComponent,
    JobInfoComponent,
    ItProjectServicesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
