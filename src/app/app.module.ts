import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { HoverDirective } from './hover.directive';
import { HeartPipe } from './heart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HoverDirective,
    HeartPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
