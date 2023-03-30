import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { API } from '../services/constants';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor(private http: HttpClient) {}

  getDebugServer() {
    return this.http
      .get(API['base'], {
        responseType: 'text',
      })
      .pipe(tap((val) => console.log(val)));
  }

  validateSocialNumber(social: number) {
    return this.http.post(
      API['socialnumberSim'],
      { social },
      {
        responseType: 'json',
      }
    );
  }

  validateAge(age: number) {
    return this.http.post(
      API['ageSim'],
      { age },
      {
        responseType: 'json',
      }
    );
  }

  financedVsAmountAge(financed: number, amount: number) {
    return this.http.post(
      API['financedSim'],
      { financed, amount },
      {
        responseType: 'json',
      }
    );
  }

  monthsVsFinanced(financed: number, months: number) {
    return this.http.post(
      API['monthsSim'],
      { financed, months },
      {
        responseType: 'json',
      }
    );
  }
}
