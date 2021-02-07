
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
  
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7zfLV_K_7K3ACUhr-Lkdx4c7sU0KkUTk',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }