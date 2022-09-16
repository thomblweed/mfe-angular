import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, pathMatch: 'full' }
];

@NgModule({
  // forChild is important here as it is going to be consumed by the shell router
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
