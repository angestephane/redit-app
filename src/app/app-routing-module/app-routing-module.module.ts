import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRouteList: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRouteList)],
})
export class AppRoutingModule {}
