import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = 'http://localhost/uploadFiles/subir.php';

  constructor(private http: HttpClient) {}

  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json',
  //   });

  //   return this.http.request(req);
  // }

  subirImagenes(imagenes: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', imagenes);

    return this.http.post(this.baseUrl + '?subirImagenes', formData);
  }

  getFiles(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/files`);
    return this.http.get(this.baseUrl + '?verImagenes');
  }
}
