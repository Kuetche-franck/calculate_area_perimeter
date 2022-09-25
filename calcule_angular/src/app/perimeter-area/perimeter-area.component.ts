import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-perimeter-area',
  templateUrl: './perimeter-area.component.html',
  styleUrls: ['./perimeter-area.component.scss']
})

export class PerimeterAreaComponent implements OnInit {

public datas:any;
public result!: number;
public dataconverted! : number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.getDatas();
    this.result=0;
    this.dataconverted=0;
  }

  //funtion to calculate the perimeter of the triangle
  trianglePerimeter(side1: number,side2: number,side3: number){
    if(side1>0 && side2>0 && side3>0)
    {
      let perimeter = side1+side2+side3;
      return perimeter;
    }else
    {
      alert("please enter the good values");
      return this.result;
    }

  }
  //funtion to calculate the area of the triangle
  triangleArea(base: number,height: number){
    if(base>0 && height>0)
    {
      let area = base*height/2;
      return area;
    }else
    {
      alert("please enter the good values");
      return this.result;
    }

  }
  //funtion to return the either the perimeter or the area of the cicle
  circlePerimeterOrArea(radius: number, calcul: string){
    if (radius>0) {
      return (calcul=="area"? Math.PI*Math.pow(radius,2): 2*Math.PI*radius);
    } else {
      //bad values sent send an alert
      alert("please enter the good values");
      return this.result
    }
  }
  //funtion to return the either the perimeter or the area of the cicle
  squarePerimeterOrArea(side: number, calcul: string){
    //to make sure the side is a positive value
    if(side>0){
      return (calcul=="area"? Math.pow(side,2): 4*side);
    }else{
      //bad values sent send an alert
      alert("please enter the good values");
      return this.result
    }

  }
  //funtion to return the either the perimeter or the area of a rectangle
  rectanglePerimeterOrArea(long: number, large:number, calcul: string){
    //to confirme it's a rectangle
    if((long>0 && large>0) && long>large){
      return (calcul=="area"? long*large: 2*(long + large));
    }else
    {
      //bad values sent send an alert
      alert("please enter the good values");
      return this.result
    }

  }

  //function to calcule the perimeter or the area
  calcul(data:any){
    if(data.value.figureName == "rectangle"){
      this.result=this.rectanglePerimeterOrArea(data.value.longueur,data.value.largeur,data.value.figurecal);
    }else if(data.value.figureName == "square"){
      this.result=this.squarePerimeterOrArea(data.value.side,data.value.figurecal);
    }else if(data.value.figureName == "circle")
    {
      this.result = this.circlePerimeterOrArea(data.value.radius, data.value.figurecal)
    }else if(data.value.figureName == "triangle")
    {
      this.result = data.value.figurecal== "area"?this.triangleArea(data.value.base,data.value.height):this.trianglePerimeter(data.value.side1,data.value.side2,data.value.side3);
    }
  }

  //function to convert resut between km, m, dm, cm
  convert(unit:any){
    if(unit == "km"){
      this.dataconverted = this.result*Math.pow(10,-3);
    }else if(unit == "dm"){
      this.dataconverted = this.result*Math.pow(10,1);
    }else if(unit == "cm"){
      this.dataconverted = this.result*Math.pow(10,2);
    }else if(unit=="m")
    {
      this.dataconverted = this.result*Math.pow(10,0);
    }
    if(unit == "km²"){
      this.dataconverted = this.result*Math.pow(10,-6);
    }else if(unit == "dm²"){
      this.dataconverted = this.result*Math.pow(10,2);
    }else if(unit == "cm²"){
      this.dataconverted = this.result*Math.pow(10,4);
    }else if(unit=="m²"){
      this.dataconverted = this.result*Math.pow(10,0);
    }
  }

  getDatas(){
    this.httpClient.get<any>('http://localhost:8080/').subscribe(
      response => {
        //console.log(response);
        this.datas = response;
      }
    );
  }

}
