import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultiPipe } from './my-multi.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';
import { MarvellousRevPipe } from './marvellous-rev.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMultiPipe,
    MarvellousChkPipe,
    MarvellousRevPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
