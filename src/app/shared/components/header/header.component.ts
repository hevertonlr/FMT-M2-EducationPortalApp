import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from './../../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  routes: Routes = routes;
  open: boolean;
  constructor(private router: Router){
    this.open = false;
    this.routes = this.router.config.filter(route => route.path !== 'login');
  }

  toggleSidebar = () => {
    console.log('teste')
    this.open = !this.open;
  }
}
