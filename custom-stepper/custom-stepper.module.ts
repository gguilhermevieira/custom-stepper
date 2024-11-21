import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepperComponent } from './custom-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomStepModule } from '../custom-step/custom-step.module';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    CustomStepperComponent,
  ],
  imports: [
    CommonModule,
    CustomStepModule,
    MatDividerModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  exports:[CustomStepperComponent]
})
export class CustomStepperModule { }
