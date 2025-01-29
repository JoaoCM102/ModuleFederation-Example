import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'App1',
        icon: 'pi pi-home',
        routerLink: ['/app1'],
      },{
        label: 'App2',
        icon: 'pi pi-home',
        routerLink: ['/app2'], 
      },]
}
}
