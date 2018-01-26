import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListmediaComponent } from './listmedia/listmedia.component';
import {MediaService} from './services/media.service';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import { RoutesComponent } from './routes/routes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListmediaComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [MediaService, DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
