import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { SafeHtmlPipe } from './safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
