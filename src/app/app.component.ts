import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  title = 'chatbot';

  userprompt:string = '';// Declare userprompt inside the AppComponent class
   aiResponse:string = '';// Declare aiResponse inside the AppComponent class

  // Method to update userprompt variable
  updateUserPrompt(value: string) {
    this.userprompt = value;
  }

    // Method to update userprompt variable
  updateAiPrompt(value: string) {
    this.aiResponse = value;
  }
}
// }
