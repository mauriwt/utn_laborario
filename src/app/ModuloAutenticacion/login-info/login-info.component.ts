import { Component, OnInit } from '@angular/core';
import { AuthService } from "../providers/auth.service";
import { CRUDService } from 'app/providers/crud.service';
import { config } from 'app/shared/smartadmin.config';

@Component({

  selector: 'fbg-login-info',
  templateUrl: 'login-info.component.html',
  providers: [CRUDService]
})
export class LoginInfoComponent implements OnInit {

  public user: any = {
    authorities: null,
    authenticated: true,
    dni: null,
    mail: null,
    username: null,
    uuid: null
  };

  constructor(
    private authService: AuthService, private crud: CRUDService) {
  }

  ngOnInit() {
    this.authService.getLoginInfo()
      .subscribe(userData => {
        console.log(userData);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("uuid", userData.uuid);
        this.user = userData;
        /* if (!localStorage.getItem("funcionario"))
          this.crud.obtener(`${config.APIRest.url.local}${config.APIRest.cargo.cedula}/${this.user.uuid}`).subscribe(response => {
            localStorage.setItem("funcionario", JSON.stringify(response[0]))
          }, error => {

          }); */
      });
  }

}

