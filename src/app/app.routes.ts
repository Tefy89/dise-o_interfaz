import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrizNumero6Component } from './matrices/matriz-numero-6/matriz-numero-6.component';
import { MatrizNumero5Component } from './matrices/matriz-numero-5/matriz-numero-5.component';
import { MatrizNumero4Component } from './matrices/matriz-numero-4/matriz-numero-4.component';
import { MatrizNumero3Component } from './matrices/matriz-numero-3/matriz-numero-3.component';
import { CardsComponent } from './cards/cards.component';
import { Entregable1Component } from './entregable1/entregable1.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { Entregable3Component } from './entregable3/entregable3.component';
import { Entregable4Component } from './entregable4/entregable4.component';
import { FormularioComponent } from './formulario/formulario.component';

// Configuración de las rutas
export const routes: Routes = [
    { path: 'matriz-numero-6', component: MatrizNumero6Component },
    { path: 'matriz-numero-5', component: MatrizNumero5Component },
    { path: 'matriz-numero-4', component: MatrizNumero4Component },
    { path: 'matriz-numero-3', component: MatrizNumero3Component },
    { path: 'card', component: CardsComponent },
    { path: 'entregable1', component: Entregable1Component },
    { path: 'entregable3', component: Entregable3Component },
    { path: 'entregable4', component: Entregable4Component },
    { path: 'formulario', component: FormularioComponent },
    { path: 'inicio', component: InicioComponent },


    // Solo una redirección predeterminada
    { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Redirige a la ruta principal
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Importa las rutas
    exports: [RouterModule]                    // Exporta las rutas
})
export class AppRoutingModule { }


