import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [BrowserModule, NavigationRoutingModule]
  // providers: [],
  // bootstrap: [NavigationComponent]
})
export class NavigationModule {}
