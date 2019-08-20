import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailInput: FormControl;

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.emailInput = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit() {
  }

  registerMail() {
    if (this.emailInput.valid) {
      const email = this.emailInput.value;
      const message = `El correo ${email} fue registrado`;
      const snackBarRef = this.snackBar.open(message, 'Cerrar', {
        duration: 2000,
      });
      snackBarRef.afterDismissed().subscribe(() => {
        this.emailInput.setValue('');
      });
    }
  }

}
