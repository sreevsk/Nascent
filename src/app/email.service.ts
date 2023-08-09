import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import globalProperties from '@assets/properties/global-properties.json';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private elasticEmailApiUrl = 'https://api.elasticemail.com/v2/email/send';
  private emailConfig = globalProperties["emailConfig"];

  constructor(private http: HttpClient) { }

  sendEmail(
    subject: string,
    bodyHtml: string,
    attachment: File,
  ): Observable<any> {

    const headers = new HttpHeaders();

    // Append API key to headers
    headers.append('Content-Type', 'multipart/form-data');

    // Create a FormData object and add parameters
    const formData = new FormData();
    formData.append('apikey', this.emailConfig["apiKey"]);
    formData.append('subject', subject);
    formData.append('from', this.emailConfig["from"]);
    formData.append('fromName', this.emailConfig["fromName"]);
    formData.append('to', this.emailConfig["to"]);
    formData.append('bodyHtml', bodyHtml);
    if (attachment != null)
      formData.append('attachments', attachment, attachment.name); // Add the attachment

    // Send the request to Elastic Email server
    return this.http.post(this.elasticEmailApiUrl, formData, { headers });

  }
}
