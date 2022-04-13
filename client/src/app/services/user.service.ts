import { AvcResults } from './../interface/AvcResults';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  body: String | any;
  public resultPost: String | any = 'test';

  constructor(private http: HttpClient) {}

  informationsPerso(
    name: string,
    surname: string,
    gender: string,
    age: number,
    house: string,
    sport: string,
    fruit: string,
    vegetable: string,
    address: string,
    email: string
  ) {
    const body = new HttpParams()
      .append('name', name)
      .append('surname', surname)
      .append('gender', gender)
      .append('age', age)
      .append('house', house)
      .append('sport', sport)
      .append('fruit', fruit)
      .append('vegetable', vegetable)
      .append('address', address)
      .append('email', email);

    console.log(body);
    this.http
      .post(environment.apiUrl + '/users', body, httpOptions)
      .subscribe((result) => (this.resultPost = result));
    console.log(this.resultPost);
  }

  informationsAvc(
    gender: number,
    age: number,
    hypertension: number,
    heartDisease: number,
    married: number,
    work_type: number,
    residence: number,
    glucose: number,
    bmi: number,
    smoking_status: number
  ) {
    const body = new HttpParams()
      .append('gender', gender)
      .append('age', age)
      .append('hypertension', hypertension)
      .append('heartDisease', heartDisease)
      .append('married', married)
      .append('work_type', work_type)
      .append('residence', residence)
      .append('glucose', glucose)
      .append('bmi', bmi)
      .append('smoking_status', smoking_status);

    console.log(body);
    return this.http
      .post(environment.apiUrl + '/diagnostics/avc', body, httpOptions)
      .subscribe((result) => {
        this.resultPost = JSON.stringify(result);
        console.log(`resp : ${this.resultPost}`);
      });
  }

  getAVCResultsModel(): Observable<AvcResults> {
    return this.http.get<AvcResults>(environment.apiUrl + '/diagnostics/avc');
  }

  informationsCardiaque(
    gender: number,
    age: number,
    chest_pain: number,
    pression: number,
    chrolesterol: number,
    glycemie: number,
    electro: number,
    rythme: number,
    angine: number,
    oldpeak: number,
    pente: number

  ) {
    const body = new HttpParams()
      .append('gender', gender)
      .append('age', age)
      .append('chest_pain', chest_pain)
      .append('pression',pression)
      .append('chrolesterol',chrolesterol)
      .append('glycemie',glycemie)
      .append('electro', electro)
      .append('rythme',rythme)
      .append('angine',angine)
      .append('oldpeak',oldpeak)
      .append('pente',pente);

    console.log(body);
    return this.http
      .post(environment.apiUrl + '/diagnostics/cardiaque', body, httpOptions)
      .subscribe((result) => {
        this.resultPost = JSON.stringify(result);
        console.log(`resp : ${this.resultPost}`);
      });
  }
}
