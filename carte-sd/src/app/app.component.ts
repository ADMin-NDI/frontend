import { ArticlesComponent } from './features/articles/articles.component';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, fromEvent, Subscription, tap } from 'rxjs';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  
    title = 'carte-sd';
    @ViewChild('input') input: ElementRef;

    search: string | undefined;
    inputSearchSub: Subscription = new Subscription;


    constructor(private router: Router) {
        this.input = new ElementRef(document.getElementById('input'));
    }
    ngAfterViewInit(): void {
        this.inputSearchChanges();
    }
    ngOnDestroy(): void {
        if (this.inputSearchSub) {
            this.inputSearchSub.unsubscribe();
        }
    }

    ngOnInit(): void {
        console.log(this.router.url);
    }

    navigation(string: string) {
        this.router.navigate(['/' + string]);
    }

    isCurrentPage(): boolean {
        return this.router.url === '/' + this.router.url.split('/')[1];
    }

    inputSearchChanges(): void {
        this.inputSearchSub = fromEvent(this.input.nativeElement, 'keyup')
            .pipe(
                debounceTime(150),
                tap(() => {
                    console.log(this.search);
                })
            )
            .subscribe();
    }

}
