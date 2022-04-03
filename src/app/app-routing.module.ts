import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupDatailComponent } from './startup-datail/startup-datail.component';
import { StartupListagemComponent } from './startup-listagem/startup-listagem.component';

const routes: Routes = [
  {
    path: '',
    component: StartupListagemComponent
  },
  {
    path: 'detailStartup',
    component: StartupDatailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
