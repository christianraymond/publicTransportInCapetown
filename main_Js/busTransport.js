var displayTable = document.querySelector('.showTable');

var table = document.querySelector('.table');
var showTable = Handlebars.compile(table.innerHTML);


var travelTime = [{
      day: "Monday To Friday",
      time: "04h59am to 05am",
      result: "05h00 BAYVIEW 05h05 SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD 06h20 CAPE TOWN"                                          },
    
    {
    day: "Monday To Friday",
    time: "05am to 05h05am",
    result: "05h05  BAYVIEW 05h15 SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD Via CHUKKER RD 06h25  CAPE TOWN "                          },   
   
    
    { 
    day: "Monday to Friday",
    time: "05h05h15am to 05h15am",
    result: "05h15  BAYVIEW  05h25  SAN REMO Via STRANDFONTEIN VILLVia NEW OTTERY RD Via CHUKKER RD 06h25 CAPE TOWN"                          },
    
    { 
    day: "Monday To Friday",
    time: "05h15am to 05h20am",
    result: " 05h20  BAYVIEW0 5h30 SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD Via  CHUKKER RD 06h30 CAPE TOWN"
    },
    
   {
    day: "Monday To Friday",
    time: "05h20am to 25h40am",
    result:"05h25  BAYVIEW 05h40  SAN REMO Via STRANDFONTEIN VILL 05h50 LOTUS RIVER 07h30 CLAREMONT"
   },
                  
   {day: "Monday To Friday",
    time: "05h25am to 05h30am",
    result: "05h25 BAYVIEW05h40 SAN REMO Via STRANDFONTEIN VILL05h50 LOTUS RIVER 07h30 CLAREMONT"                                     
   },
   {day: "Monday To Friday",
    time: "05h30 to 05h35am",
    result: "05h35  BAYVIEW 05h50 SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD Via CHUKKER RD 07h05 CAPE TOWN"                            },
  {day: "Monday To Friday",
   time: "05h50 To 06am",
   result:"05h50  BAYVIEW Via  SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD 08h20 CAPE TOWN"                              
  },
 {day: "Monday To Friday",
  time:"05h50 To 06hOOam",
  result:"05h50  BAYVIEW Via SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD 08h20 CAPE TOWN"            
},
  {day: "Monday To Friday",
  time: "06h00",
  result:"07h00  BAYVIEW Via  SAN REMO Via STRANDFONTEIN VILL 08h05 CLAREMONT"       
},
                  
{day:"Saturday",
 time:"05h00 To 05h45",
 result:"05h40  BAYVIEW 05h45  SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD Via CHUKKER RD 07h20 CAPE TOWN"                             },
                  
{day:"Saturday",
 time:"06h00 To 06h10",
 result:" 06h10  BAYVIEW 06h15 SAN REMO Via STRANDFONTEIN VILL Via  NEW OTTERY RD Via  CHUKKER RD 07h30  CAPE TOWN"
},
 {day:"Saturday",
 time:"06ham",
 result:"06h30 BAYVIEW Via KENILWORTH 07h20 CLAREMONT "
 },
{day:"Saturday",
 time:"06h35am",
 result:"06h35 BAYVIEW 06h40 SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD Via CHUKKER RD 07h30  CAPE TOWN"
},
{day:"Saturday",
time:"06h55",
result:"  06h55 BAYVIEW Via SAN REMO Via STRANDFONTEIN VILL 08h10  CLAREMONT",
},
{day:"Saturday",
 time:"07h00am",
 result:"  07h00 BAYVIEW Via SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD 08h15  CAPE TOWN"
},
{day:"Sunday",
time:"06h00am",
result:"06h00 BAYVIEW 06h05 SAN REMO Via STRANDFONTEIN VILL Via NEW OTTERY RD Via CHUKKER RD 07h15 CAPE TOWN"
},
{day:"Sunday",
time:"07h00am",
result:"07h00 BAYVIEW 07h05 SAN REMO Via  STRANDFONTEIN VILL Via NEW OTTERY RD Via  CHUKKER RD  08h15  CAPE TOWN "
},
{day:"Public Holiday",
 time:"07h0am",
 result:"No trip could be find!",
},
                                                
];




function uniquedayInfo() {
  'use strict';

  var uniqueday = [];
  var mapday = {};

  for (var x = 0; x < travelTime.length; x++) {
    var dayName = travelTime[x];
    if (mapday[dayName.day] === undefined) {
      mapday[dayName.day] = dayName.day;
      uniqueday.push({
        day: dayName.day
      });
    }
  }
  return uniqueday;

  var dayDrop = document.querySelector('.day').innerHTML = templateCompiled({
    day: uniqueday
  })
}


function uniqueTimeInfo(){
  var uniquetime = [];
  var maptime = {};

  for (var i = 0; i < travelTime.length; i++) {
    var timeTravel = travelTime[i];
    if (maptime[timeTravel.time] === undefined) {
      maptime[timeTravel.time] = timeTravel.time;
      uniquetime.push({
        time: timeTravel.time
      });
    }
  }

  return uniquetime.sort(function(t1, t2) {
    if (t1.time < t2.time) {
      return -1
    }
    if (t1.time > t2.time) {
      return 1
    }
    return 0;
  });
  var timeDrop = document.querySelector('.color').innerHTML = templateCompiled({
    time: uniquetime
  })
}

var dayAndTimeTemplate = document.querySelector(".dayAndTimeSelectField");
var templateCompiled = Handlebars.compile(dayAndTimeTemplate.innerHTML);

function showDropdown() {
  var dropdownHTML = templateCompiled({
    day: uniquedayInfo(),
    time: uniqueTimeInfo(),
  });
 
  document.querySelector('.selectField').innerHTML = dropdownHTML;
}

var searchButton = document.querySelector('.searchButton')

searchButton.addEventListener('click', function showDropdown() {
  var dayFilter = document.querySelector(".day");
  var timeFilter = document.querySelector(".time");
    
if(dayFilter.value == "" &&
   timeFilter.value == ""){
    alert("First enter a proper values")
}
    var result = {};

  function searchDay(input) {
    return dayFilter.value == input.day;
  }

  function searchTime(input) {
    return timeFilter.value == input.time;
  }

  if (dayFilter.value !== ""){
     result = travelTime.filter(searchDay);
  }

if(timeFilter.value !== ""){
  result = travelTime.filter(searchTime);
  }

  var tableDisplay = showTable({
    result
  });

displayTable.innerHTML = showTable({travelTime : result})

});
showDropdown();




























