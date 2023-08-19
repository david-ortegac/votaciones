import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'quorum', url: '/quorum', icon: 'finger-print' },
    { title: 'Votaciones', url: '/folder/outbox', icon: 'podium' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
   }

  user$ = this.authService.authSession$.pipe(
    filter(state => !!state)
  );

  async data() {
    let data;
    data = await this.authService.authSession$
    console.log(data)
  }

  async logout() {
    await this.authService.logout()
      .finally(() => {
        this.router.navigate(['/login'])
      })
  }
}
