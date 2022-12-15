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
    { headerName: 'Sec Account Number', field: 's_a_n', filter: true, floatingFilter: true },
    { headerName: 'Sec Account Name', field: 's_a_name', filter: true, floatingFilter: true },
    { headerName: 'operation Type', field: 'operation_type', filter: true, floatingFilter: true },
    { headerName: 'Quantity', field: 'Quantity', filter: true, floatingFilter: true },
    { headerName: 'amount', field: 'amount', filter: true, floatingFilter: true },
    { headerName: 'currency', field: 'currency', filter: true, floatingFilter: true },
    { headerName: 'operation date', field: 'operation_date', filter: true, floatingFilter: true },
    { headerName: 'billing date', field: 'billing_date', filter: true, floatingFilter: true },
    { headerName: 'billing mode', field: 'billing_mode', filter: true, floatingFilter: true },
    { headerName: 'status',field: 'status', filter: true, floatingFilter: true },
];

rowData = [
    { branch: 'London', lcn_number: '432088', lcn_name: 'IT NIBWTY', s_a_n:"1040453782", s_a_name:" AHSS NMY QCE UCX NEW AE V", operation_type:" A_CLIENT_STD_DDT" , Quantity:"1", amount:"0", currency:"", operation_date:"11/1/2022",  billing_date:"11/1/2022", billing_mode:"Automatic", status:"To be served"},
    { branch: 'India', lcn_number: '432088', lcn_name: 'IT NIBWTY', s_a_n:"1040453782", s_a_name:" AHSS NMY QCE UCX NEW AE V", operation_type:" A_CLIENT_STD_DDT" , Quantity:"1", amount:"0", currency:"", operation_date:"11/1/2022",  billing_date:"11/1/2022", billing_mode:"Automatic", status:"To be served"},
];

}
