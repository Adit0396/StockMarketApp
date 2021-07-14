import React, { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2';
import { useParams} from 'react-router-dom'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
const Price = () => {
  const apiKey='44dcb8ec6911e9f717e6d6e716178531'
  const {handle} =useParams()
  const [rowData, setRowData] = useState([]);
  const columns = [
    { headerName: "Date", field: "date",sortable:true,filter:true,floatingFilter: true,width:'auto',sortable:true},
    { headerName: "Open", field: "open",filter:true,width:'auto',sortable:true },
   { headerName: "High", field: "high",filter:true,width:'auto' ,sortable:true},
   { headerName: "Low", field: "low",filter:true,width:'auto',sortable:true},
   { headerName: "Close", field: "close" ,width:'auto',sortable:true},
   { headerName: "Change Percentage", field: "changePercent" ,width:'auto',sortable:true},
   { headerName: "Volume", field: "volume" ,width:'auto',sortable:true},
 ]
 let URL= 'https://financialmodelingprep.com/api/v3/historical-price-full/'+handle+'?from=2021-01-01&to=2021-05-09&apikey='+apiKey;
 useEffect(() =>{
   fetch(URL)
     .then(resonse => resonse.json())
     .then(data=>data.historical)
     .then((historical)=>
         historical.map((value) => {
         return {
           date: value.date,
           open: value.open,
           high: value.high,
           low: value.low,
           close: value.close,
           changePercent:value.changePercent,
           volume:value.volume
         };
       })
     )
     .then((values) => setRowData(values));
 }, []);

 let stock= handle;
 let price=[];
      let date=[];
      for(var i in rowData)
      {
          price[i]=(rowData[i].close);
          date[i]=(rowData[i].date);
      }
date=date.reverse();
price=price.reverse();
 return (     
   <div className='Price'>
     <h3> Price History for Stock : {stock}</h3>
       <div
       className="ag-theme-balham"
       style={{
       height: "500px" ,
       // width: "600px"
       width: "1500px"
       }}>
       <AgGridReact
       columnDefs={columns}
       rowData={rowData}
       pagination={true}
       paginationPageSize={50}
       />
       </div>
       <div className="Line">
       <Line
      data={{
          labels:date,
          datasets:[
          {
          label: 'Price Stock Close',
          data:price,
          borderColor: 'rgb(100,100,100)',
          backgroundColor: 'rgb(0,0,0)'
          },
          ]
      }}
      height={400}
      width={600}
      options={{
          maintainAspectRatio : false,
          scales: {
              x: {
                beginAtZero: true
              }
          }}
        }
        />
        </div>
  </div>
  );
     }
export default Price;