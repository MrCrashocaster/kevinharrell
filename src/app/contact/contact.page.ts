import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  anio: number = new Date().getFullYear();


  constructor() { }

  ngOnInit() {
  }

}
