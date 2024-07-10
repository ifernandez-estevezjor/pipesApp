import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'ezio auditore';
  public nameUpper: string = 'EZIO AUDITORE';
  public fullName: string = 'eZiO aUdItOrE';

  public customDate: Date = new Date();

}
