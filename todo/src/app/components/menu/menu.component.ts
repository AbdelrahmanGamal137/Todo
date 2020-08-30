import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, public hardcodedService: HardcodedAuthenticationService) { }

  ngOnInit(): void {

  }

  logout() {
    this.hardcodedService.logout();
    this.router.navigateByUrl('/');
  }
}
