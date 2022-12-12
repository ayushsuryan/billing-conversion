import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { field: 'branch', filter: true, floatingFilter: true },
    { headerName: 'LCN Number', field: 'lcn_number', filter: true, floatingFilter: true },
    { headerName: 'LCN Name',field: 'lcn_name', filter: true, floatingFilter: true },
    { field: 'sec Account Number', filter: true, floatingFilter: true },
    { field: 'sec Account Name', filter: true, floatingFilter: true },
    { field: 'operation Type', filter: true, floatingFilter: true },
    { field: 'auantity', filter: true, floatingFilter: true },
    { field: 'amount', filter: true, floatingFilter: true },
    { field: 'currency', filter: true, floatingFilter: true },
    { field: 'operation date', filter: true, floatingFilter: true },
    { field: 'billing date', filter: true, floatingFilter: true },
    { field: 'billing mode', filter: true, floatingFilter: true },
    { field: 'status', filter: true, floatingFilter: true },
];

rowData = [
    { branch: 'London', lcn_number: '432088', lcn_name: 'IT NIBWTY', },
  
];

}
