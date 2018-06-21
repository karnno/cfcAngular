import { Directive, ViewContainerRef } from '@angular/core';

@Directive({selector: '[app-cfc-main-content]'})
export class CfcMainContentDirective {

  /**
   * AdDirective injects ViewContainerRef to gain 
   * access to the view container of the element that will 
   * host the dynamically added component.
   * 
   */
  constructor(public viewContainerRef: ViewContainerRef) { }

}
