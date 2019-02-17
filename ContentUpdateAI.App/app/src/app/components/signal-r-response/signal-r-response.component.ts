import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signal-r-response',
  templateUrl: './signal-r-response.component.html',
  styleUrls: ['./signal-r-response.component.sass']
})
export class SignalRResponseComponent implements OnInit {

  constructor(public _signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit() {
    this._signalRService.startConnection();
    this._signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('/api/signalr')
      .subscribe(res => {
        console.log(res);
      })
  }



}
