import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MissionComponent } from './components/mission/mission.component';
import { AreasComponent } from './components/areas/areas.component';
import { DetailComponent } from './components/areas/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { TargetComponent } from './components/target/target.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { TableComponent } from './components/dashboard/table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MissionComponent,
    AreasComponent,
    MapComponent,
    DetailComponent,
    HomeComponent,
    TargetComponent,
    ServicesComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    TableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFXLvCTe0u1YPAxwbtT3UpDTpA2-RYDT4'
    }),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
