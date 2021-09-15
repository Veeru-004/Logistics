import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { PlantsService } from 'src/app/services/plants.service';
import { LogisticsReports } from 'src/app/shared/logicticsReports';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  ELEMENT_DATA: LogisticsReports[] = [];
  displayedColumns: string[] = ['invoiceNo', 'invoiceDate', 'quantity', 'noOfPkgs', 'netValue', 'invoiceType', 'deliveryNo', 'soldToParty', 'soldToPartyName',
    'division', 'uom', 'poNumber', 'daAsn', 'appointmentDate', 'weightBarCode', 'ewayBillNumber', 'carpId'];
  dataSource = new MatTableDataSource<LogisticsReports>(this.ELEMENT_DATA);

  constructor(private service: PlantsService) { }

  ngOnInit() {

    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.reports();
    resp.subscribe(report => this.dataSource.data = report as LogisticsReports[]);

  }
}
