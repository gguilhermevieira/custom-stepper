import { CdkStep } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-custom-step',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  providers: [{ provide: CdkStep, useExisting: CustomStepComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CustomStepComponent extends CdkStep{

  @Input() icon?: IconProp | undefined;
  @Input() stepInfo?: any | undefined;
  @Input() disabled?: boolean;
  @Input() tooltipDescription?: string;

  ngOnInit(): void {
  }

}
