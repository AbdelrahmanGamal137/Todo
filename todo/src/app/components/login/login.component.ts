import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../../services/hardcoded-authentication.service'
import { BasicAuthenticationService } from '../../services/basic-authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "";
  password = "";
  invalidLogin: boolean;
  errorMessage: string = "Invalid username or password";

  constructor(private router: Router, private route: ActivatedRoute,
    private hardcodedService: HardcodedAuthenticationService,
    private basicService: BasicAuthenticationService) { }

  ngOnInit(): void {

  }

  handleLogin() {
    if (this.hardcodedService.authenticate(this.userName, this.password)) {
      let welcomeUrl = 'welcome/' + this.userName;
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

      this.router.navigate([returnUrl || welcomeUrl]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicLogin() {
    this.basicService.excuteAuthenticationService(this.userName, this.password)
      .subscribe(
        data => {
          console.log(data);
          let welcomeUrl = 'welcome/' + this.userName;
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

          this.router.navigate([returnUrl || welcomeUrl]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );

  }

}
