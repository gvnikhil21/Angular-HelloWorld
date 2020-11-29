import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imageUrl = "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick($event) {
    console.log("Logo is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Input given!", $event);
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
    console.log(nameRegex.test(this.userName));

    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    else
      this.nameError = "Name is Incorrect";
  }
}
