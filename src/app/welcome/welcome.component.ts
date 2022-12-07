import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

// store the name in localstorage and use the name throught the application
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
