import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }

  displayedColumns: any[] = ['OrderNo','SKU','Qty', 'Date'];
  dataSource  = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {

  OrderNo: any;
  SKU: any;
  Qty: any;
  Date: any;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
 
];
