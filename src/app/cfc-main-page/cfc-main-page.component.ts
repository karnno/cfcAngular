import { Component, AfterViewInit, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


import { takeWhile } from 'rxjs/operators'
import { CfcLoginServiceService}        from '../services/auth/cfc-login-service.service';

import { CfcMainContentDirective}       from '../cfc-main-content.directive';
import { CfcMainComponentContainer }    from './cfc-main-component-container';
import { CfcMainComponentInterface }    from './cfc-main-component-interface.component';


import { CfcPlayComponentsComponent}    from '../cfc-play-components/cfc-play-components.components';
import { CfcUserProfileComponentsComponent } from '../cfc-user-profile-components/cfc-user-profile-components.component';
import { CfcUserAchievementsComponentsComponent}  from '../cfc-user-achievements-components/cfc-user-achievements-components.component';

/*

 This component will be displayed if 
 the value of the field isLoggedIn$ (the $ is to indicate it's an observable),

  another interesting way to subscribe-unsubscribe to a service :
 > http://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
*/
@Component({
  selector: 'app-cfc-main-page',
  templateUrl: './cfc-main-page.component.html'
})
export class CfcMainPageComponent implements OnInit, AfterViewInit {

  // The login flag.
  public isLoggedIn         : boolean;

  // The login user name 
  public userLoggedName     : string;
  
  // Alive flag for unsubscribe.
  private _alive            : boolean;

  // Which page to display ? use this action 
  private action            : string = 'play';

  // Anchor directive : where to insert the dynamic components
  @ViewChild(CfcMainContentDirective) anchorMainContent: CfcMainContentDirective;

  constructor(
    private cfcLoginService: CfcLoginServiceService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: NgbModal) {
    // We are alive.
    this._alive = true;
   }

  ngOnInit() {
    // Previous way : 
    // this.isLoggedIn$ = this.cfcLoginService.isLoggedIn;

    // New way :
    // Get the login value (true/false).
    this.cfcLoginService.isLoggedIn
        .subscribe((userIsLoggedIn: boolean) => {this.isLoggedIn = userIsLoggedIn ; this.userLoggedName = this.cfcLoginService.getLoggedUserName();});
  }

  ngAfterViewInit() {
    if (this.isLoggedIn) {
      if (this.anchorMainContent == null) {
        console.log(' anchor directive is null :^[ ');
        return;
      } else {
          // depending on the action value, display the proper page
          this.loadPlayPage(this.action, {userLoggedName : this.userLoggedName});
      }
    }
  }

  ngOnDestroy(): void {
    // We are gone 4ever.
    this._alive = false;
  }

  // if the event emitter is menuEventFromUpbar, the listener method is onMenuEventFromUpbar
  onMenuEventFromUpbar (whichAction : string) {
    const theData = {userLoggedName : this.userLoggedName};
    if ('signout' == whichAction){
      this.cfcLoginService.logout();
    }
    else if ('profile' == whichAction) {
      this.loadPlayPage_openModal(theData);
    } 
    else if (this.action != whichAction){
      this.action = whichAction; 
      console.log ("main page component : received action : " + this.action );
      this.loadPlayPage(this.action, theData);
    }
     
  }


  loadPlayPage(action : string, theData : any){
    
    var pageComponentContainer : CfcMainComponentContainer; 
    switch(action) {
      case "achievements": { 
        pageComponentContainer    = new CfcMainComponentContainer(CfcUserAchievementsComponentsComponent, theData);
        break; 
      }
      case "play": { 
        pageComponentContainer    = new CfcMainComponentContainer(CfcPlayComponentsComponent, theData);
        break; 
      }

      default: { 
        pageComponentContainer    = new CfcMainComponentContainer(CfcPlayComponentsComponent, theData);
        break; 
      } 
    }

    //let pageComponentContainer = whichComponent; 

    let playPageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(pageComponentContainer.component);

    let viewContainerRef = this.anchorMainContent.viewContainerRef;
    viewContainerRef.clear();

    //The createComponent() method returns a reference to the loaded component. 
    const componentRef = viewContainerRef.createComponent(playPageComponentFactory);
    //Use that reference to interact with the component by assigning to its
    // properties or calling its methods.
    (<CfcMainComponentInterface>componentRef.instance).data = pageComponentContainer.data;
     
    console.log('Page loaded !');


  }

  loadPlayPage_openModal(theData : any) {
     
    const modalRef = this.modalService
      .open (CfcUserProfileComponentsComponent, { centered: true });
    //const modalRef = this.modalService.open(NgbdModalContent); 

    modalRef.componentInstance.data = theData;
  }

}