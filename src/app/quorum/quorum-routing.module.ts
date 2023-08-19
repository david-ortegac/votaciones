import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuorumPage } from './quorum.page';

const routes: Routes = [
  {
    path: '',
    component: QuorumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuorumPageRoutingModule {}
