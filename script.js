/* calendar script file */

// global variables

   let monthHeader = document.querySelector("h1");
   let allDays = document.querySelectorAll("li");
     const date = new Date();
      let dateProperties = {
                             "month": date.getMonth() ,
                              "year": date.getFullYear(),
                              "date": date.getDate(),
                              "todays background":"rgb(161, 245, 245)",
                               "reset background" : "transparent",
                               "months in a year": ['January','Febuary','March','April',
                                                  'May','June','July','August',
                                                  'September','October','November',
                                                  'December'  ],
      }
        class Calendar{
                    static months(){
                               return dateProperties["months in a year"]
                                      [dateProperties["month"]] ;
                    }
        }

         monthHeader.innerHTML = `${Calendar.months()} <i> 
                                   ${dateProperties["year"]} </i>`;

        function calendarObject(){

        // check and set the background of the current date

                 checkCorrectDay();
                 
        // reset the background color of the passed day back to its original style.
                 resetPassedDay();
        }
         function checkCorrectDay(){

                   // compare dates 
                   
            for(let i = 0 ; i < allDays.length ; i++){
                    if( allDays[i].innerHTML == dateProperties["date"] ){
                        allDays[i].style.background = dateProperties["todays background"]
                      }
                
                } 
         } ; 
          function resetPassedDay(){

                // check and reset all passed date

                for(let i = 0 ; i < allDays.length ; i++){
                    if( allDays[i].innerHTML != dateProperties["date"] ){
                       allDays[i].style.background = dateProperties["reset background"];
                      }
                } 
          }
        
 calendarObject();
        