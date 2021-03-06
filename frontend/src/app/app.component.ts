import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as Highcharts from 'highcharts';


declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  // constructor(private router: Router){}
  // title = '';

  public options: any = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    title: {
        text: 'Question Stats'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Attempt',
        colorByPoint: true,
        data: [{
            name: 'Correctly Attempted',
            y: 50,
            sliced: true,
            selected: true
        }, {
            name: 'Incorrectly Attempted',
            y: 30
        }, {
            name: 'Unattempted',
            y: 20
        }]
    }]
  }

  constructor() { }

  ngOnInit(){
    Highcharts.chart('container', this.options);
  }

 }