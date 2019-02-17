import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LuisResultsComponent } from './components/luis-results/luis-results.component';
import { ContentDisplayComponent } from './components/content-display/content-display.component';
import { SignalRResponseComponent } from './components/signal-r-response/signal-r-response.component';

@NgModule({
  declarations: [
    AppComponent,
    LuisResultsComponent,
    ContentDisplayComponent,
    SignalRResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
