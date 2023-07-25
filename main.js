var sitename =document.getElementById("sitename")
var  siteurl =document.getElementById('siteurl')
var submit =document.getElementById('submit')

// create data

var alldata ;
if(localStorage.items !=null){
    alldata=JSON.parse(localStorage.items)
}
else {
    alldata=[];
}

submit.onclick=function(){
    var NewElement ={
        sitename:sitename.value,
        siteurl:siteurl.value
    }
    alldata.push(NewElement)
    localStorage.setItem('items', JSON.stringify(alldata))
    console.log(alldata)

    cleardata()
    

}


//clear data 

function cleardata(){
    sitename.value='';
    siteurl.value='';
}


//show data
function showdata(){
    var table ='';
 for(var i=0;i<alldata.length;i++){
    table +=`<tr>
     <td> ${i} </td>
     <td>${alldata[i].sitename}</td>
     <td>
     <button class="btn btn-outline-success"onclick="visitWebsite(${i})">Visit</button> 
     </td>
     <td>
      <button class="btn btn-outline-danger "onclick="deletedata(${i})">Delete</button>
     </td>
       </tr>`;
 }
 document.getElementById("tbody").innerHTML=table;
}
showdata()

//delete data 

function deletedata(index){
  alldata.splice(index,1);
  localStorage.setItem('items', JSON.stringify(alldata))
  showdata();
}

// visit data 
function visitWebsite(e) {
    var websiteIndex = e.target.dataset.index;
    var httpsRegex = /^https?:\/\//;
    if (httpsRegex.test(alldata[websiteIndex].siteurl)) {
      open(alldata[websiteIndex].siteurl);
    } else {
      open(`https://${alldata[websiteIndex].siteurl}`);
    }
  }