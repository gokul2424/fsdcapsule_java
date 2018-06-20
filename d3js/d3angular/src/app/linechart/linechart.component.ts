import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  @ViewChild('chart') private container: ElementRef;
  @Input('width') _width:any = 900
  @Input('height') _height:number = 500
  // _height =500
  _margins = { top: 30, left: 30, right: 30, bottom: 30 };
  _x; _y;
  _data = [{x:1,y:2},{x:2,y:3},{x:3,y:9}];
  _colors = d3.scaleOrdinal(d3.schemeCategory10);
  _svg;
  _bodyG:any;
  _line;


  constructor() { }

  ngOnInit() {
    // this.render();
  }

  ngAfterViewInit() {
    this.x(d3.scaleLinear().domain([0, 10]));
    this.y(d3.scaleLinear().domain([0, 10]))
    this.render()

    
  }

  render() { // <-2A
    console.log('In render');

    let element = this.container.nativeElement;
    console.log(element);
    console.log(d3.select(element).nodes())

    var svg = d3.select(element).append("svg") // <-2B
      .attr("height", this._height)
      .attr("width", this._width)
      .attr('style', 'border:1px solid black')
       this.renderAxes(svg)
// this.renderBody(svg)
     

  };

  renderAxes(svg) {
    var axesG = svg.append("g")
      .attr("class", "axes");

    this.renderXAxis(axesG);
    this.renderYAxis(axesG);
    //  this.renderLines();

     
    
  }



  renderXAxis(axesG) {
    var xAxis = d3.axisBottom()
      .scale(this._x.range([0,this.quadrantWidth()]));

    axesG.append("g")
      .attr("class", "x axis")
      .attr("transform", function () {
        return "translate(" + this.xStart() + "," + this.yStart() + ")";
      }.bind(this))
      .call(xAxis);

    d3.selectAll("g.x g.tick")
      .append("line")
      .classed("grid-line", true)
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", - this.quadrantHeight());
  }

  renderYAxis(axesG) {
    var yAxis = d3.axisLeft()
      .scale(this._y.range([this.quadrantHeight(), 0]));

    axesG.append("g")
      .attr("class", "y axis")
      .attr("transform", function () {
        return "translate(" + this.xStart() + "," + this.yEnd() + ")";
      }.bind(this))
      .call(yAxis);

    d3.selectAll("g.y g.tick")
      .append("line")
      .classed("grid-line", true)
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", this.quadrantWidth())
      .attr("y2", 0);
  }

  renderBody(svg) { // <-2D
    if (!this._bodyG)
      this._bodyG = svg.append("g")
        .attr("class", "body")
        .attr("transform", "translate("
        + this.xStart() + ","
        + this.yEnd() + ")") // <-2E
        .attr("clip-path", "url(#body-clip)");

    this.renderLines();

    this.renderDots();
  }

  renderLines() {
   this. _line = d3.line() //<-4A
      .x(function (d) { return this._x(d.x); })
      .y(function (d) { return this._y(d.y); });

    var pathLines = this._bodyG.selectAll("path.line")
      .data(this._data);

    pathLines
      .enter() //<-4B
      .append("path")
      .merge(pathLines)
      /*.style("stroke", function (d, i) {
        return this._colors(i); //<-4C
      })*/
      .attr("class", "line")
      .transition() //<-4D
      .attr("d", function (d) { console.log(this._line(d)); return this._line(d); });
  }

  renderDots() {
    this._data.forEach(function (list, i) {
      var circle = this._bodyG.selectAll("circle._" + i) //<-4E
        .data(list);

      circle.enter()
        .append("circle")
        .merge(circle)
        .attr("class", "dot _" + i)
        .style("stroke", function (d) {
          return this._colors(i); //<-4F
        })
        .transition() //<-4G
        .attr("cx", function (d) { return this._x(d.x); })
        .attr("cy", function (d) { return this._y(d.y); })
        .attr("r", 4.5);
    }.bind(this));
  }

  xStart() {
    return this._margins.left;
  }

  yStart() {
    return this._height - this._margins.bottom;
  }

  xEnd() {
    return this._width - this._margins.right;
  }

  yEnd() {
    return this._margins.top;
  }

  quadrantWidth() {
    return this._width - this._margins.left -this._margins.right;
  }

  quadrantHeight() {
    return this._height - this._margins.top - this._margins.bottom;
  }

 

x(x) {
  if (!arguments.length) return this._x;
  this._x = x;
};

y(y) {
  if (!arguments.length) return this._y;
  this._y = y;
  // return this._chart;
};

addSeries(series) { // <-1D
  this._data.push(series);
  // return _chart;
};




}
