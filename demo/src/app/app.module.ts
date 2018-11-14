import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyComp2Component } from './my-comp2/my-comp2.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MyStyleDirDirective } from './my-style-dir.directive';
import { Mycomp3Component } from './mycomp3/mycomp3.component';
import { CustPipePipe } from './cust-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceComponent } from './http-service/http-service.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyComp2Component,
    DatabindingComponent,
    MyStyleDirDirective,
    Mycomp3Component,
    CustPipePipe,
    HttpServiceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
