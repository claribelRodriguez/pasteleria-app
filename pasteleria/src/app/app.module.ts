import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostresListaComponent } from './postres-lista/postres-lista.component';

import { FormsModule } from '@angular/forms';
import { PasteleriaContactoComponent } from './pasteleria-contacto/pasteleria-contacto.component';
import { PostresComponent } from './postres/postres.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostresListaComponent,
    PasteleriaContactoComponent,
    PostresComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
