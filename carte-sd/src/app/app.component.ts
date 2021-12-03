import { ArticlesComponent } from './features/articles/articles.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
    title = 'carte-sd';

    constructor(private router: Router) {}

    ngOnInit(): void {
        console.log(this.router.url);
    }

    navigation(string: string) {
        this.router.navigate(['/' + string]);
    }

    isCurrentPage(): boolean {
        return this.router.url === '/' + this.router.url.split('/')[1];
    }

}
