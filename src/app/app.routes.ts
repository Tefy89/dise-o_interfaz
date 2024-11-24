import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrizNumero6Component } from './matriz-numero-6/matriz-numero-6.component';
import { MatrizNumero5Component } from './matriz-numero-5/matriz-numero-5.component';
import { MatrizNumero4Component } from './matriz-numero-4/matriz-numero-4.component';
import { MatrizNumero3Component } from './matriz-numero-3/matriz-numero-3.component';
import { AppComponent } from './app.component';

// Configuración de las rutas
export const routes: Routes = [
    { path: 'matriz-numero-6', component: MatrizNumero6Component },
    { path: 'matriz-numero-5', component: MatrizNumero5Component },
    { path: 'matriz-numero-4', component: MatrizNumero4Component },
    { path: 'matriz-numero-3', component: MatrizNumero3Component },

    // Solo una redirección predeterminada
    { path: '', redirectTo: '/matriz-numero-6', pathMatch: 'full' } // Redirige a la ruta principal
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Importa las rutas
    exports: [RouterModule]                    // Exporta las rutas
})
export class AppRoutingModule { }
