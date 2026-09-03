import { Routes } from '@angular/router';
import { MainMenuComponent } from './component/mainmenu-component/mainmenu-component';
import { MainLayoutComponent } from './layout/main-layout-component/main-layout-component';
import { ContactComponent } from './component/contact-component/contact-component';

export const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: MainMenuComponent },
			{
				path: 'contact',
				component: ContactComponent
			}

		],
	},
	{ path: '**', redirectTo: '' },
];
