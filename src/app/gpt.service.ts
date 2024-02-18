import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GptService {
  private apiUrl = 'https://api.openai.com/v1/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) { }

  getGptResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    const data = { prompt: prompt, max_tokens: 100 };

    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}
