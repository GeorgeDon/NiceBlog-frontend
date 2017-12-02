import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const appRoutes=[
	{
		path:'',
		redirectTo:'main',
		pathMatch:'full'
	},
	{
		path:'main',
		component: MainComponent
	},
   {
    path: 'editor',
    loadChildren:'./editor/editor.module#EditorModule'
    },
	{
		path:'**',//fallback router must in the last
		component: MainComponent
	}
];
