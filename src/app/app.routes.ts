import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/resumes/pages/felipetiwamoto/felipetiwamoto').then((m) => m.FelipeTiwamoto),
	},
	{
		path: 'jane-iwamoto',
		loadComponent: () => import('./features/resumes/pages/janeriwamoto/janeriwamoto').then((m) => m.JaneRIwamoto),
	},
];
