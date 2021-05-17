import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

monimage:string = "assets/images/casque etudiant.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
