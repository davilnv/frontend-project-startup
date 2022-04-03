import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupListagemComponent } from './startup-listagem/startup-listagem.component';
import { StartupService } from './startup.service';
import { StartupDatailComponent } from './startup-datail/startup-datail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartupListagemComponent,
    StartupDatailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StartupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
