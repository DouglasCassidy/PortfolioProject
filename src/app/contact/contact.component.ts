import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{
  email: string = "DC156@myscc.ca"
  phoneNumber: string = "2263466055"
  linkedIn: string = "https://www.linkedin.com/in/douglas-cassidy-807614340"
  name: string = "Douglas Cassidy"
  }
