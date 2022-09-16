import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('header/Navigation').then((m) => {
        console.log({ m });
        return m.NavigationModule;
      })
  }
];

@NgModule({
  // forRoot is important here because this is the shell host application
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
