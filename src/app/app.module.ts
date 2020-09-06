import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { StatModifierPipe } from './pipes/dnd/fifthEdition/stat-modifier.pipe';
import { ModStringPipe } from './pipes/dnd/fifthEdition/mod-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatModifierPipe,
    ModStringPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
