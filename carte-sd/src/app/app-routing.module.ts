import { ArticlesComponent } from './features/articles/articles/articles.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './features/home/home/home.component';

const routes = [
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'articles', component: ArticlesComponent,
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }