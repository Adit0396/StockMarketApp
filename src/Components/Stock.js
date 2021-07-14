import React,{useState,useEffect,Component} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {Button,Badge} from "reactstrap";
function Stock(){
const apiKey='44dcb8ec6911e9f717e6d6e716178531'
const table={
columnDefs:[{ headerName: "Symbol", field: "symbol",resizable: true,cellRenderer: function (params) {
    let value = params.data.symbol;
    let url = `<a href= http://localhost:3000/price/${value}>${value}</a>`;
    return url;
  },width:'250px',filter:true,floatingFilter:true,sortable:true},
{ headerName: "Name", field: "name",resizable: true,width:'550px',sortable:true
},
{ headerName: "Sector", field: "sector",resizable: true,width:'350px',filter:true,floatingFilter:true,sortable:true}
],
}
const[gridApi,setGridApi]=useState(null);
const[gridColumnApi,setGridColumnApi]=useState(null)
const[rowData,setRowData]= useState([]);
useEffect(() => {
fetch('https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey='+apiKey)
.then(response=> response.json())
.then(datas=> 
    datas.map(data=>{
    return{
        symbol:data.symbol,
        name:data.name,
        sector:data.sector
    };
})
).then(datas1=>setRowData(datas1))
}, []);
 
function onGridReady(params){
    setGridApi(params.api);
    setGridColumnApi(params.columnApi)
}
return(
            <div className="container">
                <h1>Stock Market</h1>
                <p>
                    <Badge color="success">{rowData.length}</Badge> Stocks available in the NASDAQ list 
                </p>
                <h5> Click on Stock symbol to check price</h5>
                {/* <form onSubmit={handleSubmit}>
                    <input
                    name="message"
                    type="text"
                    onChange={handleChange}
                    value={message}
                    />
                </form> */}
                    <div className="ag-theme-balham"
                    style={{
                    height: "1000px" ,
                    width: "1200px",
                    }}>
                <AgGridReact
                onGridReady={onGridReady}
                columnDefs={table.columnDefs}
                rowData={rowData}
                pagination={true}
                paginationPageSize={50}    
                />   
                <Button
                color="info"
                size="sm"
                className="mt-3"
                href="https://financialmodelingprep.com/developer/docs/#List-of-Nasdaq-100-companies"
                target="_blank"
                ></Button>
                </div>
                </div>
   )
}
export default Stock;