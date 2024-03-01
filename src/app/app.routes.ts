import { Routes, RouterModule  } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '',   redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: MainComponent},
    {path: 'Habilities', component: UserComponent},
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
