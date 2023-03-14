import { Component, NgModule } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-pagina-chart',
  templateUrl: './pagina-chart.component.html',
  styleUrls: ['./pagina-chart.component.css'],

})



export class PaginaChartComponent {


  // constructor(){
  //   this.gerarGrafico();  
  // }

  gerarGrafico(){
  
    type EChartsOption = echarts.EChartsOption;
  
    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;
    option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  
    option && myChart.setOption(option);
  
  }
}


