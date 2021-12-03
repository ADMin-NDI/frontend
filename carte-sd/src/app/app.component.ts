import { ArticlesComponent } from './features/articles/articles.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    title = 'carte-sd';

    constructor(private router: Router) {}

    navigation(string: string) {
        this.router.navigate(['/' + string]);
    }


}
