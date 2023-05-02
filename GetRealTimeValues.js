
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.1.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

exports.callJSFunction=function(){
    console.log("Hello Call JS Function From TypeScript ");
    test();
    //getval();
    GetRealtimeValues();
}


function test(){
    console.log("Bismillahirrahmanirrahim");
}

async function getval(){
    async function getData(){
        const response = await fetch( "http://35.158.123.140/dash/dashboardapi/GetRealTimeValue"
      );
        return response.json();
      }
      
      
      getData().then((data) => {
      console.log(response);
      })

}
function GetRealtimeValues() {
    var url = 'http://35.158.123.140/dash/dashboardapi/GetRealTimeValue';
    
    console.log("GetRealtimeValues Callled");
    $.getJSON(url, function (data) {

        var count = data.Result.length;

        for (var item in data.Result) {
            if(data.Result[item].deviceID == 'C01A'){
            //const parent = document.querySelector('#' + 'C01A');
            const parent = document.querySelector('#' + data.Result[item].deviceID);
             const child1 = parent.querySelector('#temp');
             child1.innerHTML = data.Result[item].tempVal;
            // const child2 = parent.querySelector('#hum');
            // child2.innerHTML = data.Result[item].humVal;

        }
            //document.getElementById(data.Result[item].deviceID).innerHTML = data.Result[item].tempVal;
            console.log("device ID");
            console.log(data.Result[item].deviceID);
            console.log("Temp");
            console.log(data.Result[item].tempVal);
            console.log("Hum");
            console.log(data.Result[item].humVal);
           
        }
    }).done(function (data) {

       // do after done

    });
    setTimeout(GetRealtimeValues, 4000);
}