import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  pysakki = 'Tikkurila';
  output;
  constructor(private digitransitService: DigitransitService) {
}
route(pysakki) {
          this.digitransitService.getRoutes(pysakki).subscribe( response => {
              this.output = response.data['stops'];
              // console.log(response);
              // console.log('response.data.stops sisältö: \n');
              // console.log(response.data['stops']);
          });
      }

      stopName(event: any) {
        this.route(event.target.value);
    }
  ngOnInit() {
    this.route(this.pysakki);
  }

}
