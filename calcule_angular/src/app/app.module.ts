import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PerimeterAreaComponent } from './perimeter-area/perimeter-area.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PerimeterAreaComponent
  ],
  imports: [
    BrowserModule,
    //import HttpClientModule.
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
