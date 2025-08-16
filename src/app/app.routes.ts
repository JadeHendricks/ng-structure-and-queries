import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./components/queries/viewchild-example/viewchild-example.component')
            .then(m => m.ViewchildComponent)
    },
    {
        path: 'view-children',
        loadComponent: () => 
            import('./components/queries/viewchildren-example/viewchildren-example.component')
            .then(m => m.ViewchildrenExampleComponent)
    },
    {
        path: 'ng-container',
        loadComponent: () => 
            import('./components/structural/ng-container-example/ng-container-example.component')
            .then(m => m.NgContainerExampleComponent)
    },
    {
        path: 'ng-content',
        loadComponent: () => 
            import('./components/structural/ng-content-example/ng-content-example.component')
            .then(m => m.NgContentExampleComponent)
    },
    {
        path: 'ng-template',
        loadComponent: () => 
            import('./components/structural/ng-template-example/ng-template-example.component')
            .then(m => m.NgtemplateExampleComponent)
    },
    {
        path: 'ng-templateoutlet',
        loadComponent: () => 
            import('./components/structural/ng-templateoutlet-example/ng-templateoutlet-example.component')
            .then(m => m.NgTemplateoutletExampleComponent)
    },
    {
        path: 'signal-viewchild',
        loadComponent: () => 
            import('./components/signal-based-queries/signal-viewchild-example/signal-viewchild-example.component')
            .then(m => m.SignalViewchildExampleComponent)
    },
    {
        path: 'signal-viewchildren',
        loadComponent: () => 
            import('./components/signal-based-queries/signal-viewchildren-example/signal-viewchildren-example.component')
            .then(m => m.SignalViewchildrenExampleComponent)
    },
];
