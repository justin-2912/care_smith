import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-total-order',
  templateUrl: './total-order.component.html',
  styleUrls: ['./total-order.component.css']
})
export class TotalOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: any[] = ['OrderNo','SKU','Qty', 'Date'];
  dataSource  = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  // }
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
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
  {OrderNo: '12346', SKU: '45', Qty: '200', Date: '20-09-2023'},
  

];
