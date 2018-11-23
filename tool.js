// 横向柱状统计图
 var img = {
  "barY1":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAACPklEQVRYR+WXQW7aQBiF30OJuqzhAi1S7G3ICUJP0OYEJcvaGzhB0xOELvC29Ab0BE1PULLFlcIJjLNsVPGqcbFlCMaG4FKpXo00M/98eu///xkT/8DHXRkag+AKxPt0v/gx9E66u8TbGaLuBzcQXhIYCuiAmM5cu/33IQCYg2OgxfigEATOywAIGM1c+yK79ml2ZJQoCxEfLg1Dz7lMQA4DAWAO9CLX7huQg0GYw+fgReSejB5B1P3JmOBpSX+/JYm5lR2L4HPpMvKc4RJEw58MAb41hKCiTSCU+gCj3SH0OXSdzpId1mDSqZGfEroiJbJlacbbKCHoduY6raXEtAaTFsGvpL4kdFVBGAD9PG5HvWaqdGyH5QfdGnA9l84izxkXAZj5VSX20qxMQkJ8oYejZpYyD6gSCOv6zuKzX1NIdzPPOStSoxKI2JbBpFUjv0sag9xYHRBaIG7Tu0M4BfHISgLj0LV7GyttddLyf7ypSWnm5m3O3pwLVcyedRDnq216NebeOmZeYprSJ9k3Nuvh+NW6fKscIq6kQTAi8Tqv+iqHSLvwokWvs3dvEHkdU8C9pK65I/Lya28QgCyRa96YR9PoXXO6VXUU9YdkvrI+URagsra9DcD/C2HaOcjnWbX+PGoAk4zZ8ZKi0n2ZW7lUddT9ICKwBFHGPgnRzLPrRWtLQTT8QBA+hJ59VRQwmU9+E0PXLjyjcIEJaiAE3JCI/7TKfBLaBNp7g9j2DZlACohf40XQpZQoCvLU+d9ManIwI6T3wgAAAABJRU5ErkJggg==",
  "barY2":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABdElEQVQoU31TS1LCQBB9PRVkaeACkiqTLXAC8QTqCcQlyUI9gXACcZG4FE8gNwBPAGyJVeQEISyBVNqaaGISA7Oanu7Xn9dvCCWnbrt9Bl8RUYuZ5yRo7Pf0QTGUsg/q80qlk/1EgoqBMgnvKpfBoxYkvhy4bn8NQXwvnQxeEDBnoEWgZgxgevGt84dScM12PSKcAfzum0Y3Cao7yxFAtwz21qahlVd2XJaOiBQt6GleEqS+rhqCw5W0fVNPu821XXPcgIDTiLkdWMb8D+x2BGPCwGZt6uqBmd0+CE8xOaJyI6vLqhTtP2ISGQPf0vul4JjtaujJ6r+keQRq/Nyx4a3SOMi2DFLtZVcQvRVXFTHfBZYxyr7nZk4cNcedEnCR2Ax8rk29c1QkKUH2siWIZoldJLB05mzmVDAFYRxtW5KGatgUwDUAqaZhBIyxVRZZsmSSvLbjtYQzIqS7TOdmBCyUdlY8/wiLfxShUySMGNPsjmXSb3fcpRD4D0tfAAAAAElFTkSuQmCC",
  "barX1":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABsklEQVRYhWP89OnTf4ZBApgG2gHIYNQxuMCoY3CBUcfgAqOOwQVYKDXg77OPDL9uvgKz2dTFGJil+OnvmP+ffzK8qd/C8H3/bRRxTkdVBpFGHwZGXnaSzWQkt256mbKU4efZx1jlOEzkGMRmR5FsJllp5uumyzgdAgI/zjwCq6GLYz4vPQ1ns6mJYVez7Ax9HPPrFiTBMnKzMYj2BzMIljhjqrn5kmRzSU4zoFABRYEA0AEcpvIIy2+8ZPh+AJGYv++/xcAbbcrA7adLtNkkh8w3oCXIDnnftQdMs2mIg2n+DBswBqn5sukSSWaT7BgePz2GDz17wSEBAoJlLnA5kCNAACT3oXcfWC0pgKysDYqCjzOOMIjPiQb7/h+wzAEBJmDZAnLAy9RlDPzp1sAyR432jgEBULoBpR/eGFMGLgeIpd8O3AKKnWHgjTIhKa1Q7BgQAKWXP88/wqMMlG5YJPlRoo4UQFHdxMTHwcD05QcwMcsBeYxA/B8sRi6gyDGcDqoMrNIC8HoIVF/9fvqBbPMoiiZqg0HVnhl1DC4w6hhcYNQxuMCoY3ABxv9AMNCOgAEAMFae3sJiOEcAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAB8ElEQVRYhe2Xu04CQRSGz3JdAgtoAYiJVCCNVNBRSKRVH8DaaKsxlj6A8QV8AK2MhcaOhMYOqGgUKzCYgCbITa6Cc0aWgLiGHQUs9ktIJrtL5ttz/pnNcKVSqQv/AEEQQDVriUEUGSkUGSkUGSkUGSk0rH/slhvQvM9BPZ4B3bKd/GygdlqmL1OLpuDl6Aa6lcbQdctOECy7QWYZ2W1q3uXgef9yRAQpnt5S0anJ4IRfmTtYA53HRsdYMVZktwkrI6J2mGH+MAyGkAeErQDUY2moXifh/anIlB/ZMmozD6ZNHw0s73cBJ+j79/iACxqJR2hlX5lkxm4Tvm35LEYnx5C+kWwMihSOI/QZpBZ9YMrO2DKVqyRthYhxfWXovnFjBVQCT8eGkBvaPbGJyJjIZFUiJIItGUTntfcrha3S9gI9ERnMAO9fgnb2841x08PAiohtqcfTYFh1j8j+qYwohOGtDeQFq4VZwl0YM4OtwiqxIHs1mUlu8nsXdIxLWgSXfOEkQvacMJMIwrGcDnDi3PY5qYIetItW6PS+U7/5HODpQJYMtqdEWqKh+XGBesEMeq+D7iudch1aqTxd8hqnFaxESs5eI0sGq9FIZMiq8g3tL9+BwUaxcZ5lkpk0yiHuJxQZKRQZKRQZKbguYdYSIh8MUb61977VAgAAAABJRU5ErkJggg==",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABx0lEQVRYhWP89OnTf4ZBApgG2gHIYNQxuMCoY3CBUcfgAqOOwQVYKNH8vmsPw+/br8DsnzdeMrBKCzDwRpkwcPvpkmUeI7nVwS+g5S8i52OVkztfQZZjyA6Zf59/MDBL8DHw+OuB+ezGsgz/v/xk+DjjCMOP0w8ZOEzl6ecYkMUs0vwM/Bk2KOJfNl0Gy5EDyHbMr5uvGFik+MGh8Pf5JwYmXnYGRh52BhZJfrAcp6MayWaSnZt4gIn0N9BSJl4OBlY1MQYOE0i0/Hn+ESxHDiA7ZJiBoQLzPZuGOJgGOQwUQiA5cgDZuQkE/n/+yfCmbgswJCCJ+MumSwwiTT4MjEAH0dUxoKwNAqCy5dv+W2A2FzCkfj/9wMDMx0FW6JCVZkDZF1TGfOjdixIKIPb7nj0MT72nM3xedoZkc0lOM2+B0fJ18xUw+8eZR+Dc9GH6YTAflF5+nn0MZr/v3gMOPeEmb6LNJimaQCHyceYRFDEOEzlwlgY55MfpRwx/X3xCkedPt8Eoi6jimKee0zAsIwSYJfkYpLdlEaWWpDQDy8Ik6VEnXg9FWZvaYFC1Z0YdgwuMOgYXGHUMLjDqGFyA8T8QDLQjYAAAteOeJ6bjXK8AAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAB4klEQVRYhe2XPU/CUBSGT/loS6DUxAioESaRRRdgc9DZGGfc1Z9h/APu6mp0J3GWwQ1cdEGY0KhAogkFoVSh9txEoqKpPRBh6JOQ0g9un/S8597CKYqiw5ggSRI4Ri3xHVvIDFvIDFvIjLETcg3yY73eBu2mAlqhyvb5aAD4hSBwkvD/Qlq+ApWtE9Ab7S/HOZ8AwaNN4GNB0rjkktUOLvpkEDyG56gMVDIplYBG+grEZATERBiEeJgdf949I4/JURfX1nkBPKvRH891HmrgnJEtj0leXDE/3Xp/uT5Qc7fsGgrkDDWNJ/QbVBmElCHsINe0DGq2BEIsBM1MARw+0Wj5ADgkERx+kdxl5FCLyTBUt0+B8/K9m7/d16BTViBwmKIOSxfCQDtDfnDKHvBtLLFMqbkSaEw2QhYidxmCWcE5p1tX2T6WS95ZJpcLu4ws9JK+NgSEvtZHyddiFbzriyQhyyXDOebJmPiwtXGZmNoXeiXCkOO5zqPChCf31izPR5bbXjnOMhkElwkMNorgB7+jDJMzrsFrrUIqGd4cs9O+vGP7npV5tm1limwrxOdYlqyGe6AMIfj60c6X2VPBYLuN1w/37ARp2RiK0LCx/yj+BVvIDFvIDFvIDE43GLXEZ94BxObIRKt2p5IAAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACfElEQVRYhe1WTUwTQRR+29Z2tXTbgFgsiZxED3JrPUGiRk+KFxMjysWYKFclelTjERM9oiGGi5HERA/+XTTRRE7KTQ+oJ02oRQTbpZW22I7zvcJKUxZ3oQ172C/ZdDrzZueb97733iq6rgtyCDybTWAlXDJmcMmYwSVjBkeR8a13o5gvUPHTNOUnvlXNq/Fd5N8TJSUUsP1OxW4FLiUzlL4zTr9ffyaRLZAS9JN/b5TXipPTJHJFUpoCtO1gJ0UGuskbCzeGTO7JB5q7+cog0XzlCAWPd9XaDL00SDVfPlxjs2EyuHWqb5TH3jaNYg/PmYYCIUyevEellM7/28bOGt5bC5YFnLk7boxbb59YUxNYg81qe+tCBp4Bgr37jFtCP2Z2sNl6YHfVXN3I+NorQlTjHbQgxTt79RllpT5mLj7isODBeOHNF/4FAYh45d7/nmGVTPhCN/04P0benRrNP5gwwgBiEHU5m2ebZa+BbLC3y9hrBZY9oyY6OINWh6Cynievpv57cVNl7O/cwXutwFbRw62R1nA/bu6LRbjwbb9xjNd/yjkcXJxMsU3pu26r+NmqM7+GKuFokYdDvItT6apbQzcFSWRLe4SLHQijGofOJCy935ZntP4ETR0dlpW1hw/zhFRKnRplUkBAeq71ViXtIeDc049saxW2GiUIhPriNHPpMZWTOqWH37KgoyOn+RFC8BzW5q6/YOE2rB0sA6kLPUQGD9WIM//+K81ee84Ns2VJSw0lA2Rks9TvvyOPzCBoBEC4kFVa/34KD1hL57qQASBYdO8/S5XYJ0OCLFrP58OGydQbjvrSc8mYwSVjBpeMGRxFRhHobg7BX5cWE5bF00XIAAAAAElFTkSuQmCC"],
  "barX2":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABYUlEQVRYhe2Vy0rDQBRA7+Rh06aKKfiA7lRwLwhu/IWu/RD/yS6LS79A8LGxKx8UxEKtxGCaV9MmcXIlRaGzmCY2InMgzJ1hMjnM3Nwhtm0n8EeQyhb4jpBhIWRYCBkWQoaFkGGRS6ZrXsDZ/WlRLkDyXJQvThdUSYOt2l55MpeDNriTd4iTCCQi45iuNuBo+ySXjML7wqv3CPU5H06PLC/cMhk3ww4YWhNjK+hDRa6hKCFkNmezurscmVREV4yvjkbzZ3QHMSR0bB2HBu4DHt1szm/K7Kwd/uj3Pq7o7uigyhr2q0odnNBcjsw8xtMRREmIcUSTm5eFZaxxH27fzjE+2Ghhu0LzRpNXMfaJzb3mwkUvjHwYek/4pHGKUWmCGTzT3IkwoXnh3pkGTdz0N3Zoncno2dcohG3sw8QLwJ1asG8cc62dqwIXzf+5KItGyLAQMiyEDAshw4IklLIlMj4BPV942xia874AAAAASUVORK5CYII=",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABX0lEQVRYhWP8DwQMgwSwfP78eaDdAAdMA+0AZDDqGFxg1DG4wKhjcIHh4Zivf94z3Pt0mppuId8xX369Zfj2+z013TK4oomFHE0vv91hOPxsAcPvfz8Yvvx+x2AhETFwjnn9/R6DrVQCgziXCsPex9Oo4hAQYPz06RNJTYgnX64wXH67i4GNiQNF3Fk2i2LHkBwyN98fYnCRzQTmpDMMAmySDGzMnAznXm2k2CFkOQYEWJk4wbmJm0UQnG6oBchyDAiwM3MBHYWIqlff78LZYpzKZJlJdtZmBUYPMnj17S4YH3++nFwjyXcMKHuDSmFYNAmwS4FpHlYhsh1DdjQp8ZkycLMKwvmCHNJgPsiRdHcMKFcp8pvC+e9/PGX48PMZ2Q4BAbKjyUjMH1zogTAIiHMpoziOHEByyIDSBrZS99DT+RQ5BARILoFpCQZVrT3qGFxg1DG4wKhjcIFRx+ACAHxUZofwAwPWAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABZUlEQVRYhe2Xy0rDQBSG/zRNekmi1iJiiwuLC0GX+gSCD+OTuXXr0i4UvGxEsKJ21WortTHpNb05Z8BSFyNkikZhPgjJHwh8/HMgHG3CwB8h7vt+1A4cx3EQi1piFiUjQsmIUDIilIyI/y8zGHdxXT9Gs1+JXubs5Qgbi7soNYuodR6ik6FWxpMh7pnIcNJn7VSjk6E2kroDy1jGkrnG8ml0MkRCt5E2MvyIbCZFUGNl7/L3ZXLWFgoLe9hfP5yKXLGBDtj9nM2TLHGZj6rtO7SHTZTfL3iudR75PRh155ohqWYyiRxW05vYyR7wfNM4QXvwhjo7NjOWRMktSslINdMb+WgFDbx2n3gmAZJbSRV4/nwfFslm8l+aIUjENrP8kkWqGTd4hqZp/Hkw7oHWC8p0VPOgeZ4XalWhX0CldTvNhp6CFc/AnRncvL3N2wsDbQehZX4Ktap8h5IRoWREKBkRSkbEB75ghC4P3j+tAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABZUlEQVRYhe2Xy0rDQBSG/zRNekmi1iJiiwuLC0GX+gSCD+OTuXXr0i4UvGxEsKJ21WortTHpNb05Z8BSFyNkikZhPgjJHwh8/HMgHG3CwB8h7vt+1A4cx3EQi1piFiUjQsmIUDIilIyI/y8zGHdxXT9Gs1+JXubs5Qgbi7soNYuodR6ik6FWxpMh7pnIcNJn7VSjk6E2kroDy1jGkrnG8ml0MkRCt5E2MvyIbCZFUGNl7/L3ZXLWFgoLe9hfP5yKXLGBDtj9nM2TLHGZj6rtO7SHTZTfL3iudR75PRh155ohqWYyiRxW05vYyR7wfNM4QXvwhjo7NjOWRMktSslINdMb+WgFDbx2n3gmAZJbSRV4/nwfFslm8l+aIUjENrP8kkWqGTd4hqZp/Hkw7oHWC8p0VPOgeZ4XalWhX0CldTvNhp6CFc/AnRncvL3N2wsDbQehZX4Ktap8h5IRoWREKBkRSkbEB75ghC4P3j+tAAAAAElFTkSuQmCC",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABZUlEQVRYhe2Xy0rDQBSG/zRNekmi1iJiiwuLC0GX+gSCD+OTuXXr0i4UvGxEsKJ21WortTHpNb05Z8BSFyNkikZhPgjJHwh8/HMgHG3CwB8h7vt+1A4cx3EQi1piFiUjQsmIUDIilIyI/y8zGHdxXT9Gs1+JXubs5Qgbi7soNYuodR6ik6FWxpMh7pnIcNJn7VSjk6E2kroDy1jGkrnG8ml0MkRCt5E2MvyIbCZFUGNl7/L3ZXLWFgoLe9hfP5yKXLGBDtj9nM2TLHGZj6rtO7SHTZTfL3iudR75PRh155ohqWYyiRxW05vYyR7wfNM4QXvwhjo7NjOWRMktSslINdMb+WgFDbx2n3gmAZJbSRV4/nwfFslm8l+aIUjENrP8kkWqGTd4hqZp/Hkw7oHWC8p0VPOgeZ4XalWhX0CldTvNhp6CFc/AnRncvL3N2wsDbQehZX4Ktap8h5IRoWREKBkRSkbEB75ghC4P3j+tAAAAAElFTkSuQmCC"]
}
var label = {
    normal: {
        show: false,
        position: 'right',
        distance: 10,
        formatter: function(param) {
            return param.percent + '%';
        },
        textStyle: {
            color: '#ffffff',
            fontSize: '16',
        }
    }
};
//处理data
function compareData(data) {
        var sum = 0
        data.map(function(n,i){
            sum += n.value
        })
        data.map(function(n,i){
            n.num = n.value
            n.percent = sum==0?0:(n.value/sum*100).toFixed(2)
            n.value = sum==0?0:(n.value/sum*100).toFixed(2)
        })
        return data
      }
var barChartsH = {
    init: function init(chartId,data) {
      data = data.length>0?compareData(data):[]
      var that = this;
      that.option.yAxis.axisLabel.rich.lg.backgroundColor.image = img[chartId]
      that.option.yAxis.data = []
      that.option.series[0].data = []
      that.option.series[1].data = []
      data.map(function(n,i){
        that.option.yAxis.data.push(n.name+'【'+n.num+'】') 
        that.option.series[0].data.push('100') 
        that.option.series[1].data.push(n.percent) 
      })
      var barCharts = echarts.init(document.getElementById(chartId));
      barCharts.setOption(that.option);
      window.addEventListener("resize", function () {
        barCharts.resize();
      });
    },
    option: {
      tooltip: {
          show: "true",
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                  color: 'rgba(112,112,112,0)',
              },
          },
          formatter: function(params) {
              
              return params[0].name
          },
          backgroundColor: 'rgba(0,0,0,0.7)', // 背景
          padding: [8, 10], //内边距
          extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
      },
      xAxis: {
          show: false
      },
      grid: {
            top: '2%',
            bottom: '2',
            left:'30',
            containLabel: true
      },
      yAxis: {
          show: true,
          data: [],
          inverse: true,
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              color: '#1e4f7a',
              formatter: function(value, index) {
                  return [
                      '{lg|}'+'   '+ '{title|'+ value +'}'
                  ].join('\n')
              },
              rich: {
                  lg: {
                      backgroundColor: {
                                image: ''
                            },
                      color: '#1e4f7a',
                      align: 'left',
                      width: 15,
                      height: 15
                  },
              }
          },

      },
      series: [{
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '20', //统计条宽度 
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                    color: '#e4e4e4'
                },
                emphasis: {
                        show: true,
                        color:'#e4e4e4'
                }
            },
            z: 1,
            data: [100, 100, 100, 100]
        },{
          type: 'bar',
          yAxisIndex: 0,
          data: [],
          barWidth: '20',
          itemStyle: {
              normal: {
                  barBorderRadius: 2,
                  color: '#1296db',
              }
          }
      }]
    }
  };
// 竖向折线统计图
var barChartsZ = {
    init: function init(chartId,opt) {
      data = opt.data.length>0?compareData(opt.data):[]
      var that = this;
      that.option.series[0].itemStyle.normal.color = opt.myColor?opt.myColor:'#d4237a'
      that.option.xAxis.data=[] 
      that.option.series[0].data=[]
      that.option.series[0].data = data
      data.map(function(n,i){
        that.option.xAxis.data.push(n.name) 
        that.option.xAxis.axisLabel.rich[i].backgroundColor.image = img[chartId][i]
      })
      var barCharts = echarts.init(document.getElementById(chartId));
      barCharts.setOption(that.option);
      window.addEventListener("resize", function () {
        barCharts.resize();
      });
    },
    option: {
      tooltip: {
          show: "true",
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                  color: 'rgba(112,112,112,0)',
              },
          },
          formatter: function(params) {
              return params[0].name+':'+params[0].data.num+'人'
          },
          backgroundColor: 'rgba(0,0,0,0.7)', // 背景
          padding: [8, 10], //内边距
          extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
      },
      grid: { 
            left: '25',
            bottom: '25',
            containLabel: true
      },
      xAxis: {
        type: 'category',
        data: [],
        splitLine: {
              show: false
          },
        axisLine: {
          show: false
        },
        axisTick: {
           show: false
        },
        axisLabel: {
        	  interval: 0,
              color: '#1e4f7a',
              formatter: function(value, index) {
                return ['{'+index+'|}\n{value|'+value+'}'].join('\n')
              },
              rich: {
                  value: {
                      align: 'center',
                      fontSize:12,
                  },
                  lg:{
                    borderColor: '#449933',
                  },
                  0: {
                      height: 35,
                      align: 'center',
                      backgroundColor: {
                          image: img['barX1'][0],
                      }
                  },
                  1: {
                      height: 35,
                      align: 'center',
                      backgroundColor: {
                          image: img['barX1'][1],
                      }
                  },
                  2: {
                      height: 35,
                      align: 'center',
                      backgroundColor: {
                          image: img['barX1'][2],
                      }
                  },
                  3: {
                      height: 35,
                      align: 'center',
                      backgroundColor: {
                          image: img['barX1'][3],
                      }
                  },
                  4: {
                      height: 35,
                      align: 'center',
                      backgroundColor: {
                          image: img['barX1'][4],
                      }
                  }
              }
          }
        },
        yAxis: {
            type: 'value',
            position: 'right',
            min: 0,
            max: 100,
            interval: 50,
            axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
           splitLine: {lineStyle:{type:'dashed'}},
           axisLabel: {
                    formatter: '{value} %',
                    color: '#ddd'
                },
                
        },
        series: [{
            data: [],
            type: 'bar',
            itemStyle: {
                    normal: {
                        color: '#d4237a'
                    },
                },
        }]
    }
  };

// 块状统计图
var rectCharts = {
  init:function(chartId,data){
    data = compareData(data)
    var that = this
    $('#'+chartId).find('.xbfb-title :eq(0)').text('【'+data[0].num+'人】')
    $('#'+chartId).find('.xbfb-title :eq(1)').text('【'+data[1].num+'人】')
    var $div = $('#'+chartId).find('#xbfbContainer')
    that.render($div,data)
    window.addEventListener("resize", function () {
        that.render($div,data)
    });
  },
  render: function ($div,data) {
    var width = $div.width()
    var height = 170
    firstWidth = data[0].percent==0&&data[1].percent==0?0.5*width:data[0].percent*width/100
    secondWidth = data[0].percent==0&&data[1].percent==0?0.5*width:data[1].percent*width/100
    $div.empty()
    $div.append('<div></div>')
    $div.append('<div></div>')
    $div.find('div').first().css('width',firstWidth).empty().append('<p>'+data[0].percent+'%</p><div class="span-container"></div>')
    $div.find('div').last().css('width',secondWidth).empty().append('<p>'+data[1].percent+'%</p><div class="span-container"></div>')
    var $green = '<span class="green"></span>'
    var $yellow = '<span class="yellow"></span>'
    var $gray = '<span style="background:#eee"></span>'
    for (var i = 0; i <parseInt(height/17); i++) {
      for(var j = 0; j< parseInt(firstWidth/17); j++){
        $div.find('.span-container :eq(0)').append(data[0].percent==0?$gray:$green)
      }
      for(var k = 0; k< parseInt(secondWidth/17); k++){
        $div.find('.span-container :eq(1)').append(data[1].percent==0?$gray:$yellow)
      }
    }
  }
}

//折线统计图
var lineChart = {
    init: function (data) {
        var that = this
        // 设置横坐标
        that.option.xAxis.data=that.getDayTime()
        // 设置折线颜色
        that.option.series = that.setColor(data)
        var lineChart = echarts.init(document.getElementById('lineChart'), null, {renderer: 'svg'})//svg绘制
        lineChart.setOption(that.option)
        window.addEventListener("resize", function () {
        lineChart.resize();
      });
    },
    option: {
        //color: ['#62d963','#5f94fd', '#f37572'],
        tooltip: {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line' ,       // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: {
                            // 使用深浅的间隔色
                            color: '#f37572'
                        }
            }
        },
        legend: {
            data:['新增','删除','更新'],
            right:'4%',
            top:'20'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [],
            axisTick: {
                        show: false
                    },
            splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd'
                        }
                    },
            axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
            axisLabel: {
                textStyle: {
                    color: '#80849D'
                }
            }
        },
        yAxis: {
            axisTick: {
                        show: false
                    },
            axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
            axisLabel: {
                textStyle: {
                    color: '#80849D'
                }
            }
        },
        series: []
    },
    getDayTime: function() {
        // 获取当前时间
        var len = (new Date()).getHours() + 1
        var xAxisData = []
        for(var i = 0; i<=len; i++){
            var temp = i<10?'0'+i+':00':i+':00'
            xAxisData.push(temp)
        }
        return xAxisData;
    },
    setColor: function(data) {
        $(data).map(function(i,n){
            data[i].symbolSize=10
            data[i].hoverAnimation=false
            if(data[i].name=='新增'){
                data[i].itemStyle={
                    "normal": {
                            "color": "#62d963",
                            "barBorderRadius": 0,
                        }
                }
            } else if (data[i].name=='更新') {
                data[i].itemStyle={
                    "normal": {
                            "color": "#5f94fd",
                            "barBorderRadius": 0,
                        }
                }

            } else if (data[i].name=='删除') {
                data[i].itemStyle={
                    "normal": {
                            "color": "#f37572",
                            "barBorderRadius": 0,
                        }
                }

            }
        })
        return data
    }
}