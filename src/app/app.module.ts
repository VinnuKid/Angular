import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KubectlComponent } from './kubectl/kubectl.component';
import { MyContainerComponent } from './myContainer/myContainer.Component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';



@NgModule({
  declarations: [
    AppComponent,
    KubectlComponent,
    MyContainerComponent,
    TopnavComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
