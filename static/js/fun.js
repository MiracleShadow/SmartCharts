;function lst_contains(arr,obj){let i=arr.length;while(i--){if(arr[i]===obj){return true}}return false}function ds_transform(dataset){let seted=[];for(let i=0;i<dataset[1].length;i++){seted[i]=[]}for(i=0;i<dataset.length;i++){for(let j=0;j<dataset[i].length;j++){seted[j][i]=dataset[i][j]}}return seted}function ds_split(data,sep=',',head_add=[]){let dataset=[];if(head_add){dataset.push(head_add.concat(data[0].slice(1)))}else{dataset.push(data[0][0].split(sep).concat(data[0].slice(1)))}for(let i=1;i<data.length;i++){dataset.push(data[i][0].split(sep).concat(data[i].slice(1)))}return dataset}function ds_rowname(dataset,start_row=1){let seted=[];for(let i=start_row;i<dataset.length;i++){seted[i-start_row]=dataset[i][0]}return seted}function ds_remove_column(dataset,remove_list=[0]){let seted=[];for(let i=0;i<dataset.length;i++){seted[i]=[]}for(i=0;i<dataset.length;i++){let k=0;for(let j=0;j<dataset[i].length;j++){if(lst_contains(remove_list,j)===false){seted[i][k]=dataset[i][j];k=k+1}}}return seted}function ds_createMap(data){let map={};for(let i=0;i<data.length;i++){let t1=[];for(let j=1;j<data[i].length;j++){t1.push(data[i][j])}if(data[i][0].length>0){map[data[i][0]]=t1}else{map['0']=t1}}return map}function ds_createMap_all(data){let dataset=[];let tmpmap={};for(let i=1;i<data.length;i++){tmpmap={};for(let j=0;j<data[i].length;j++){tmpmap[data[0][j]]=data[i][j]}dataset.push(tmpmap)}return dataset}function ds_fontSize(res){let docEl=document.documentElement;let clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(!clientWidth)return;let fontSize=100*(clientWidth/1920);return res*fontSize}function addWaterMarker(str){let can=document.createElement('canvas');let body=document.body;body.appendChild(can);can.width=400;can.height=200;can.style.display='none';let cans=can.getContext('2d');cans.rotate(-20*Math.PI/180);cans.font="16px Microsoft JhengHei";cans.fillStyle="rgba(17, 17, 17, 0.50)";cans.textAlign='left';cans.textBaseline='Middle';cans.fillText(str,can.width/3,can.height/2);body.style.backgroundImage="url("+can.toDataURL("image/png")+")"}function ds_getUpdown(param,num=0){let colorUp="green";let colorDown="red";if(num>0){colorUp="red";colorDown="green"}if(param>0){return'<span style="color:'+colorUp+'">'+param+'<span style="color:'+colorUp+'" class="glyphicon glyphicon-arrow-up"></span></span>'}else{return'<span style="color:'+colorDown+'">'+param+'<span style="color:'+colorDown+'" class="glyphicon glyphicon-arrow-down"></span></span>'}}function ds_toThousands(num){num=(num||0).toString(),result='';let flag=num<0?"-":"";let data=(Math.abs(num)+"").split('\.');num=data[0];while(num.length>3){result=','+num.slice(-3)+result;num=num.slice(0,num.length-3)}if(num){result=num+result}if(data.length===1){return flag+result}return flag+result+'.'+data[1]}function ds_distinct(a,b=[]){let arr=a.concat(b);let result=[];let obj={};for(let i=0;i<arr.length;i++){if(!obj[arr[i]]){result.push(arr[i]);obj[arr[i]]=1}}return result}function ds_leftjoin(a,b,withhead=true,type=1){let c=[];let blank=[];let flag=false;let i=1;for(i=1;i<b[0].length;i++){blank.push(0)}if(withhead){c.push(a[0].concat(b[0].slice(1)));a=a.slice(1);b=b.slice(1)}a.forEach(function(val){flag=true;b.forEach(function(val2){if(val[0]===val2[0]){c.push(val.concat(val2.slice(1)));flag=false}});if(flag&&type){c.push(val.concat(blank))}});if(type===2){blank=[];for(i=1;i<a[0].length;i++){blank.push(0)}b.forEach(function(val2){flag=true;for(i=0;i<a.length;i++){if(a[i][0]===val2[0]){flag=false;break}}if(flag){c.push([val2[0]].concat(blank).concat(val2.slice(1)))}})}return c}function ds_crossjoin(a,b,withhead=true){return ds_leftjoin(a,b,withhead,0)}function ds_fulljoin(a,b,withhead=true){return ds_leftjoin(a,b,withhead,2)}function ds_union(a,b,withhead=true){let c=[];if(withhead){c=a.concat(b.slice(1))}else{c=a.concat(b)}return c}function getUndefined(param,defaultValue){if(!param){return defaultValue}return param}function ds_round(num,qty=2){return num.toFixed(qty)}function Decimal(str){return parseFloat(str)}function Mytime(){this.datetime=function(y,m,d,hh,mm,s,ss){hh=hh||0;mm=mm||0;s=s||0;ss=ss||0;return''+y+'-'+m+'-'+d};this.date=function(y,m,d,hh,mm,s,ss){hh=hh||0;mm=mm||0;s=s||0;ss=ss||0;return''+y+'-'+m+'-'+d}}var datetime=new Mytime;function startSelectAnimate(myChart,dataLen,interval=1000,showtip=1){let currentIndex=-1;setInterval(function(){myChart.dispatchAction({type:'downplay',seriesIndex:0,dataIndex:currentIndex});currentIndex=(currentIndex+1)%dataLen;myChart.dispatchAction({type:'highlight',seriesIndex:0,dataIndex:currentIndex});if(showtip){myChart.dispatchAction({type:'showTip',seriesIndex:0,dataIndex:currentIndex})}},interval)}function dismissChangeRelatedObjectPopup(win,objId,newRepr,newId){win.close();console.log(newId);location.reload()};
function ds_param(name) {
 if("undefined" != typeof filter_param){
    return(getUndefined(filter_param[name],''))
} else {return ''}
}