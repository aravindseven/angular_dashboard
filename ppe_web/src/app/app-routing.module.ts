import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListvideosComponent } from './listvideos/listvideos.component';
import { PpedetectionstreamComponent } from './ppedetectionstream/ppedetectionstream.component';

const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', component: ListvideosComponent },
  { path: 'video/:filename', component: PpedetectionstreamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
