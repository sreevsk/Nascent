import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private elasticEmailApiUrl = 'https://api.elasticemail.com/v2/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(
    apiKey: string,
    subject: string,
    from: string,
    fromName: string,
    to: string,
    bodyHtml: string,
    bodyText: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const data = `apiKey=${apiKey}&subject=${subject}&from=${from}&fromName=${fromName}&to=${to}&bodyHtml=${bodyHtml}&bodyText=${bodyText}`;

    return this.http.post(this.elasticEmailApiUrl, data, { headers });
  }
}
