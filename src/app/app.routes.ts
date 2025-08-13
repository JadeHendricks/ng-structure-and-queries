import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'accessing-elements',
        loadComponent: () => import('./components/viewChildvsViewChildren/accessing-elements/accessing-elements.component').then(m => m.AccessingElementsComponent)
    }
];
