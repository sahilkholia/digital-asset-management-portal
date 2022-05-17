
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { DetailsComponent } from '../details/details.component';


export interface Season{
  value: string;
  viewValue: string;
}
export interface Style{
  value: string;
  viewValue: string;
}

export interface TableData{
  buyer: string;
  season: string;
  image: string;
  vendor: string;
  styleno: string;
  size: string;
  sampletype: string;
  fabric: string;
  price: string;
  designer: string;
  leadtime: string;
  customerid: number;
  construction: string;
  gsm: number;
}


const DATA: TableData[] = [
  {buyer: 'Nautica', season: 'Summer 21',image: '../../assets/images/img1.jpeg', vendor: 'Paragon Apparels', styleno: 'K1840', size: 'M', sampletype: 'Pre Production', fabric:'90% Cotton',price:'4.5$', designer:'Sudhir Singh', leadtime:'90 days', customerid:12345, construction:'Single Jersey', gsm:135},
  {buyer: 'Aeropostale', season: 'Holiday 19',image: '../../assets/images/img2.jpeg', vendor: 'Azmat Apparels', styleno: '125146', size: 'S', sampletype: 'Pre Production', fabric:'80% Cotton',price:'2.5$', designer:'Varun Arora', leadtime:'90 days', customerid:12121, construction:'', gsm:160},
  {buyer: 'Chaps', season: 'Fall 21',image: '../../assets/images/img3.jpeg', vendor: 'HIfi Fashion', styleno: '131K23', size: 'M', sampletype: 'Production', fabric:'Polyster',price:'4$', designer:'Sudhir Singh', leadtime:'30 days', customerid:17733, construction:'Single Top', gsm:190},
  {buyer: 'Nautica', season: 'Summer 18',image: '../../assets/images/img4.jpeg', vendor: 'Paragon Apparels', styleno: 'PK101', size: 'L', sampletype: 'Production', fabric:'95% Cotton',price:'3$', designer:'Prashant Kumar', leadtime:'10 days', customerid:56789, construction:'Single TOP', gsm:200},
  {buyer: 'American Eagle', season: 'winter 20',image: '../../assets/images/img5.jpeg', vendor: 'Azmat Apparels', styleno: 'K1PW42', size: 'M', sampletype: 'Pre Production', fabric:'Cotton',price:'5.5$', designer:'Varun Arora', leadtime:'90 days', customerid:67890, construction:'Shirt', gsm:175},
  {buyer: 'American Eagle', season: 'Summer 21',image: '../../assets/images/img6.jpeg', vendor: 'Azmat Apparels', styleno: 'K1850', size: 'L', sampletype: 'Production', fabric:'Cotton',price:'6$', designer:'Varun Arora', leadtime:'20 days', customerid:65435, construction:'Shirt', gsm:138},
  {buyer: 'Chaps', season: 'Fall 20',image: '../../assets/images/img7.jpeg', vendor: 'HIfi Fashion', styleno: 'CMS21D', size: 'S', sampletype: 'Pre Production', fabric:'Cotton',price:'3$', designer:'Sudhir Singh', leadtime:'90 days', customerid:12845, construction:'TShirt', gsm:350},
  {buyer: 'Chaps', season: 'Fall 19',image: '../../assets/images/img8.jpeg', vendor: 'HIfi Fashion', styleno: 'CMS22S', size: 'L', sampletype: 'Pre Production', fabric:'Cotton',price:'4.5$', designer:'Sudhir Singh', leadtime:'90 days', customerid:19345, construction:'TShirt', gsm:513},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['buyer', 'season', 'image', 'vendor','styleno','size','sampletype','fabric','price','designer','leadtime','customerid','construction','gsm'];
  

  selectedSeason: string;
  // selectedStyle: string;
  originalData: [] = [];


  // styles: Style[] = [
  //   {value: 'accessories', viewValue: 'Accessories'},
  //   {value: 'apparel', viewValue: 'Apparel'},
  //   {value: 'fabric', viewValue: 'Fabric'},
  //   {value: 'sweaters', viewValue: 'Sweaters'},
  // ];

  seasons: Season[] = [
    {value: 'fall 21', viewValue: 'Fall 21'},
    {value: 'summer 21', viewValue: 'Summer 21'},
    {value: 'spring 21', viewValue: 'Spring 21'},
    {value: 'holiday 20', viewValue: 'Holiday 20'},
    {value: 'summer 20', viewValue: 'Summer 20'},
    {value: 'fall 20', viewValue: 'Fall 20'},
    {value: 'prespring 20', viewValue: 'Pre-Spring 20'},
    {value: 'spring 20', viewValue: 'Spring 20'},
    {value: 'fallhol 19', viewValue: 'FalHol 19'},
    {value: 'holiday 19', viewValue: 'Holiday 19'},
    {value: 'fall 19', viewValue: 'Fall 19'},
    {value: 'summer 19', viewValue: 'Summer 19'},
    {value: 'holiday 18 chase', viewValue: 'Holiday 18 Chase'},
    {value: 'spring 19', viewValue: 'Spring 19'},
    {value: 'fall 18 chase', viewValue: 'Fall 18 Chase'},
    {value: 'holiday 18', viewValue: 'Holiday 18'},
    {value: 'fall 18', viewValue: 'Fall 18'},

  ];


  constructor(
    private MatDialog: MatDialog
  ) { 
    
    this.selectedSeason = "";
    // this.selectedStyle = "";
  
  }

  ngOnInit(): void {
    this.originalData = DATA as any;
  }

  openRecord(record:any){
    // console.log(record);
    this.MatDialog.open(DetailsComponent, {
      width: "800px",
      height: "600px",
      data: {
        datakey: record
      }
    });
  }




  getFilter(event: Event){
    event.preventDefault();
    var filteredData: any = [];
    if(this.selectedSeason.length>0){
      console.log(this.selectedSeason);
      var value = this.selectedSeason.toLowerCase();
      console.log(this.originalData);
      const filter = this.originalData.filter((item:any)=>item.season.toLowerCase().includes(value));
      filteredData.push(...filter);
    }
    // if(this.selectedStyle.length>0){
    //   var value = this.selectedStyle.toLowerCase();
    //   const filter = this.originalData.filter((item:any)=>item.styleCategory.fullName.toLowerCase().includes(value));
    //   filteredData.push(...filter);
    // }
    this.dataSource = new MatTableDataSource<TableData>(filteredData);
    console.log(this.dataSource);
    // this.dataSource.paginator = this.paginator;
  }

  dataSource = new MatTableDataSource<TableData>(DATA);


  addData(){
    this.MatDialog.open(AddComponent, {
      width: "800px",
      height: "600px",
    })
  }

}
