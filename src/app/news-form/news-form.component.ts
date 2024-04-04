import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule, NgClass } from '@angular/common';
@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  template: `
    <main><div><div class="newsFormComponent">
      <h3>iSTYLE Hírlevél feliratkozás</h3>
      <p>Iratkozz fel hírlevelünkre és értesülj elsők közt a legújabb hírekről, ajánlatokról.</p>
    </div>
    <div id="contributionBox">
      <input type="checkbox" id="contribution">
      <label for="hozzajarulas">
        Hozzájárulok ahhoz, hogy a iSTYLE Hungary Kft. az általam megadott e-mail címre marketing anyagot tartalmazó Hírlevelet, valamint személyre szabott reklámot küldjön az
        <a href=""> Adatkezelési Tájékoztatóban</a> foglaltak szerint.
      </label>
    </div></div>
    <div><form [formGroup]="Newslater" (submit)="onSubmit()" id="hirlevelform">
      <div id="nameBox">
        <div class="vnevBox" >
          <input type="text" id="vnev" name="vnev" formControlName="vnev" required minlength="4" placeholder="Vezetéknév"[ngClass]="{'inputError': showErrors && vnevControl?.invalid}">
          <div  *ngIf="showErrors && vnevControl?.hasError('required') && (vnevControl?.touched || vnevControl?.dirty)" class="alert">
          A vezetéknév kitöltése kötelező!
          </div>
          <div *ngIf="showErrors && vnevControl?.hasError('minlength') && (vnevControl?.touched || vnevControl?.dirty)" class="alert">
          A vezetéknév minimum 3 karakter!
          </div>
        </div >
        <div class="knevBox"><input type="text" id="knev" formControlName="knev" required minlength="4" placeholder="Keresztnév" [ngClass]="{'inputError': showErrors && knevControl?.invalid}">
        <div  *ngIf="showErrors && knevControl?.hasError('required') && (knevControl?.touched || knevControl?.dirty)" class="alert">
          A keresztnév kitöltése kötelező!
          </div>
          <div *ngIf="showErrors && knevControl?.hasError('minlength') && (knevControl?.touched || knevControl?.dirty)" class="alert">
          A keresztnév minimum 3 karakter!
          </div>
        </div>
      </div>
      <div id="emailBox">
        <div class=inputEmailBox><input type="email" id=email formControlName="email" required placeholder="E-mail" [ngClass]="{'inputError': showErrors && emailControl?.invalid}">
        <div  *ngIf="showErrors && emailControl?.hasError('required') && (emailControl?.touched || emailControl?.dirty)" class="alert">
          Az email mező kitöltése kötelező!
          </div>
          <div *ngIf="showErrors && emailControl?.hasError('email') && (emailControl?.touched || emailControl?.dirty)" class="alert">
          Hibás email formátum!
          </div>
        </div>
        <button type="submit" id="feliratkozas">Feliratkozom</button>
      </div>
    </form></div></main>
  `,
  styleUrl: './news-form.component.css'
})
export class NewsFormComponent {
  Newslater: FormGroup;
  showErrors = false;
  constructor() {
    this.Newslater = new FormGroup({
      vnev: new FormControl('', [Validators.required, Validators.minLength(4)]),
      knev: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get emailControl() {
    return this.Newslater.get("email");
  }

  get vnevControl() {
    return this.Newslater.get("vnev");
  }

  get knevControl() {
    return this.Newslater.get("knev");
  }

  onSubmit() {
    this.showErrors = true;
    if (this.Newslater.valid) {
      console.log('Ha lenne hová, be lehetne küldeni a formot.')
      this.Newslater.reset(); // Ez törli a formot
    } else {

    }
  }
}
