
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';

export interface Bdivision{
  value: string;
  viewValue: string;
}
export interface Productcategory{
  value: string;
  viewValue: string;
}
export interface Vendor{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  bdivision: string;
  productcategory: string;
  vendor: string;


  bdivisions: Bdivision[] = [
    {value: 'accessories', viewValue: 'Accessories'},
    {value: 'apparel', viewValue: 'Apparel'},
    {value: 'fabric', viewValue: 'Fabric'},
    {value: 'sweaters', viewValue: 'Sweaters'},
  ];

  productcategories: Productcategory[] = [
    {value: 'accessories-bag', viewValue: 'ACCESSORIES-BAG'},
    {value: 'accessories-belt', viewValue: 'ACCESSORIES-BELT'},
    {value: 'accessories-footwear', viewValue: 'ACCESSORIES-FOOTWEAR'},
    {value: 'accessories-gifting', viewValue: 'ACCESSORIES-GIFTING'},
    {value: 'accessories-jewellery', viewValue: 'ACCESSORIES-JEWELLERY'},
    {value: 'accessories-scarves', viewValue: 'ACCESSORIES-SCARVES'},
    {value: 'austyn', viewValue: 'AUSTYN'},
    {value: 'beach wear', viewValue: 'BEACH WEAR'},
    {value: 'casual', viewValue: 'CASUAL'},
    {value: 'combined', viewValue: 'COMBINED'},
    {value: 'dresses', viewValue: 'DRESSES'},
    {value: 'fabric', viewValue: 'FABRIC'},
    {value: 'jackets', viewValue: 'JACKETS'},
    {value: 'jumpsuits', viewValue: 'JUMPSUITS'},
    {value: 'knit top', viewValue: 'KNIT TOP'},
    {value: 'liz', viewValue: 'LIZ'},
    {value: 'lounge', viewValue: 'LOUNGE'},
    {value: 'luke', viewValue: 'LUKE'},
    {value: 'na', viewValue: 'NA'},
  ];

  vendors: Vendor[] = [
    {value: 'tengerin design', viewValue: 'Tengerin Design'},
    {value: 'oc sweaters llp', viewValue: 'OC Sweaters LLP'},
    {value: 'centex', viewValue: 'Centex'},
    {value: 'texport overseas', viewValue: 'Texport Overseas'},
    {value: 'orient craft', viewValue: 'Orient Craft'},
    {value: 'gaurav international', viewValue: 'Gaurav International'},
    {value: 'ranika', viewValue: 'Ranika'},
    {value: 'kapkol', viewValue: 'Kapkol'},
    {value: 'himachal', viewValue: 'Himachal'},
    {value: 'vimal', viewValue: 'Vimal'},
    {value: 'shingora', viewValue: 'Shingora'},
   
  ];

  constructor(
    private dialogRef: MatDialogRef<DashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public options: { positionRelativeToElement: ElementRef }
  ) {
    this.bdivision="";
    this.productcategory="";
    this.vendor="";
   }

  ngOnInit(): void {
  }

}
