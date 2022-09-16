import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, pathMatch: 'full' }
];

@NgModule({
  // forRoot is important here for running this app in isolation
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
