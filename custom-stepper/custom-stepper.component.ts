import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { CustomStepComponent } from '../custom-step/custom-step.component';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }, {provide: CdkStep, useExisting: CustomStepComponent}],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomStepperComponent extends CdkStepper implements OnInit{
  

  @Input() initialIndex: number;

  @ContentChildren(CustomStepComponent, {descendants: true}) override _steps: QueryList<CustomStepComponent>;

  override readonly steps: QueryList<CustomStepComponent> = new QueryList<CustomStepComponent>();

  override get selected(): CustomStepComponent | undefined {
    return super.selected as CustomStepComponent;
  }
  override set selected(step: CustomStepComponent | undefined) {
      super.selected = step;
  }

  override get selectedIndex(): number {
      return this.initialIndex;
  }
  set selectedIndex(index: number) {
      super.selectedIndex = this.initialIndex;
  }
  
  ngOnInit(): void {
    this.selectedIndex = this.initialIndex;
  }

  onClick(index: number): void {
    this.initialIndex = index;
    this.selectedIndex = index;
  } 

}
