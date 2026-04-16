import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './container/notfound/notfound.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
