 $('#calendar').fullCalendar({
   header: {
     left: 'prev,next today',
     center: 'title',
     right: 'month,basicWeek,basicDay'
   },
   editable: true,
   eventLimit: true, // allow "more" link when too many events
   eventSources: [

     // your event source
     {
       url: "/resources/data/ibuhamNehaga.json", // use the `url` property
       color: 'yellow', // an option!
       textColor: 'black' // an option!
     }, {
       url: "http://www.hebcal.com/hebcal/?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=s&s=on"
     }
   ]
 });