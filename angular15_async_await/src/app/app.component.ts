import { Component } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular15_async_await';

  asyncObservable() {
    return new Observable<string>((observer) => {
      setInterval(() => {
        observer.next('Hi1');
        observer.next('Hi2');
        observer.next('Hi3');
        observer.complete();
      }, 2000);
    });
  }

  async run() {
    // alert('hi');
    // this.asyncObservable().subscribe((result) => {
    //   alert(result);
    // });

    // this.asyncObservable().subscribe({
    //   next: (result) => {
    //     alert(result);
    //   },
    //   error: (error) => {
    //     alert(error);
    //   },
    // });

    // const result: string | undefined = await this.asyncObservable().toPromise();

    // const result = await firstValueFrom(this.asyncObservable());
    const result = await lastValueFrom(this.asyncObservable());
    alert(result);
  }
}
