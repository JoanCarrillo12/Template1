import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    TemplateFormsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-46jj5o0vi0xovmwg.us.auth0.com',
      clientId: 'I3PhhCwszzqTNZXkqeUkt810UZZ9GlAb',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
