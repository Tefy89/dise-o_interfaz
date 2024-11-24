import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Solo importarlo
import { MatrizNumero6Component } from './matriz-numero-6/matriz-numero-6.component';
import { MatrizNumero5Component } from './matriz-numero-5/matriz-numero-5.component';
import { MatrizNumero4Component } from './matriz-numero-4/matriz-numero-4.component';
import { MatrizNumero3Component } from './matriz-numero-3/matriz-numero-3.component';
import { AppRoutingModule } from './app.routes'; // Importa el módulo de rutas

@NgModule({
    declarations: [
        // No declares AppComponent aquí si es standalone
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,  // Asegúrate de que AppRoutingModule esté en los imports
        AppComponent,      // Importa AppComponent aquí si es standalone
        MatrizNumero6Component, // Importa componentes standalone aquí
        MatrizNumero5Component,
        MatrizNumero4Component,
        MatrizNumero3Component
    ],
    providers: [],

})
export class AppModule { }
