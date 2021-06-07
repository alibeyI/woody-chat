import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ActionModalComponent } from '../components/action-modal/action-modal.component';

@NgModule({
  imports: [ ReactiveFormsModule, CommonModule,NgModule],
  declarations: [
    ActionModalComponent],
  exports: [
    ActionModalComponent,
  ],
  providers: [],
})
export class SharedModule {}
