import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth/auth.guard';
import { CfcLoginComponent } from './cfc-login/cfc-login.component';
import { CfcMainPageComponent } from './cfc-main-page/cfc-main-page.component'; 

const routes: Routes = [
	{ path: '', 		component: CfcMainPageComponent, canActivate: [AuthGuard] },
	{ path: 'login', 	component: CfcLoginComponent }, 
	{ path: '**', redirectTo: ''}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	//Add an @NgModule.exports array with RouterModule in it. 
	//Exporting RouterModule makes router directives available 
	// for use in the AppModule components that will need them.
  exports :  [RouterModule]

})
export class AppRoutingModule { }
