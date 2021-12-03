import { CommunityComponent } from './features/community/community.component';
import { ArticlesComponent } from './features/articles/articles.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './features/home/home.component';

const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'community', component: CommunityComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }