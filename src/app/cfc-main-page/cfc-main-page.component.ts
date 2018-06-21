import { Component, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { Observable }                   from 'rxjs';
import { CfcLoginServiceService}        from '../services/auth/cfc-login-service.service';

import { CfcMainContentDirective}       from '../cfc-main-content.directive';
import { CfcMainComponentContainer }    from './cfc-main-component-container';
import { CfcMainComponentInterface }    from './cfc-main-component-interface.component';
import { CfcPlayComponentsComponent}    from '../cfc-play-components/cfc-play-components.components';
/*

 This component will be displayed according to 
 the value of the field isLoggedIn$ (the $ is to indicate it's an observable),

*/
@Component({
  selector: 'app-cfc-main-page',
  templateUrl: './cfc-main-page.component.html'
})
export class CfcMainPageComponent implements AfterViewInit {

  isLoggedIn$: Observable<boolean>;

  // Anchor directive : where to insert the dynamic components
  @ViewChild(CfcMainContentDirective) adHost: CfcMainContentDirective;
  
  

  constructor(private cfcLoginService: CfcLoginServiceService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.isLoggedIn$ = this.cfcLoginService.isLoggedIn;
    if (this.isLoggedIn$){
      if (this.adHost == null) {
        console.log(' anchor directive is null :^[ ');
        return;
      }else {
        this.loadPlayPage();
      }
    }
  }


  loadPlayPage(){

    let playPageComponentContainer = new CfcMainComponentContainer(CfcPlayComponentsComponent, {})

    let playPageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(playPageComponentContainer.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    //The createComponent() method returns a reference to the loaded component. 
    let componentRef = viewContainerRef.createComponent(playPageComponentFactory);
    //Use that reference to interact with the component by assigning to its
    // properties or calling its methods.
    (<CfcMainComponentInterface>componentRef.instance).data = playPageComponentContainer.data;

    console.log('play page loaded !');
  }
}
