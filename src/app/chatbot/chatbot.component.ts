// chatbot.component.ts
import { Component } from '@angular/core';
// import { AiService } from './ai.service';
import { Injectable } from '@angular/core';
import { GptService } from '../gpt.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent {
  userprompt: string = '';
  aiResponse: string = '';

  constructor(private gptService: GptService) { }

  updateUserPrompt(value: string) {
    this.userprompt = value;
  }

  getAiResponse(prompt: string) {
  this.gptService.getGptResponse(prompt).subscribe(response => {
    // Extract the text from the response
    this.aiResponse = response.choices[0].text;

    // Optionally, you can do additional processing here
    // For example, you might want to sanitize or format the response

    // Update any other component properties or UI elements as needed
  });
}


}