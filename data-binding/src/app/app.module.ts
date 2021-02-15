import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {MeuFormModule} from './meu-form/meu-form.module';
import { InputPropertisComponent } from './input-propertis/input-propertis.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
