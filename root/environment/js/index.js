/* scripts to set background color */

localStorage.bgcolor1;
localStorage.bgcolor2;

var backgroundCode;

function backgroundSunburst() {
    document.body.style.backgroundImage =
                        "radial-gradient(#FFCD28, #FFA500)";
                        localStorage.bgcolor1 = "#FFCD28";
                        localStorage.bgcolor2 = "#FFA500";

                        backgroundCode = 0;
}

function backgroundLava(){
  document.body.style.backgroundImage =
                      "radial-gradient(#db0c0c, #e0780b)";
                      localStorage.bgcolor1 = "#db0c0c";
                      localStorage.bgcolor2 = "#e0780b";

                      backgoundCode = 1;
}

function backgroundSky(){
  document.body.style.backgroundImage =
                      "radial-gradient(#9cd0ee,#0b6ae0)";
                      localStorage.bgcolor1 = "#9cd0ee";
                      localStorage.bgcolor2 = "#0b6ae0";

                      backgroundCode = 2;
}

function backgroundOcean(){
  document.body.style.backgroundImage =
                      "radial-gradient(#1e888b,#0bc0e0)";
                      localStorage.bgcolor1 = "#1e888b";
                      localStorage.bgcolor2 = "#0bc0e0";

                      backgoundCode = 3;
}

function backgroundGrass(){
  document.body.style.backgroundImage =
                      "radial-gradient(#519027,#b1d699)";
                      localStorage.bgcolor1 = "#519027";
                      localStorage.bgcolor2 = "#b1d699";

                      backgroundCode = 4;
}

function backgroundDusk(){
  document.body.style.backgroundImage =
                      "radial-gradient(#949494,#212121)";
                      localStorage.bgcolor1 = "#949494";
                      localStorage.bgcolor2 = "#212121";

                      backgroundCode = 5;
}

function backgroundPurple(){
  document.body.style.backgroundImage =
                      "radial-gradient(#8b00ff,#e5b1eb)";
                      localStorage.bgcolor1 = "#8b00ff";
                      localStorage.bgcolor2 = "#e5b1eb";

                      backgroundCode = 6;
}

function backgroundBubbleGum(){
  document.body.style.backgroundImage =
                      "radial-gradient(#fcaff9,#e00ba0)";
                      localStorage.bgcolor1 = "#fcaff9";
                      localStorage.bgcolor2 = "#e00ba0";

                      backgroundCode = 6;
}


  // //load the bgColor on page load:
  // document.body.style.backgroundImage = "radial-gradient(localStorage.bgcolor1, localStorage.bgcolor2)" || "radial-gradient(#FFCD28, #FFA500)" ;
  //
  //
  // function OnLoad() {
  //         document.getElementById("color").onchange = function () { //Getting the background color from the select
  //           document.body.style.backgroundImage =
  //                               "radial-gradient(#db0c0c, #e0780b)"; //Setting the background color
  //             document.cookie="WebBackgroundColor=" + document.body.style.backgroundImage =
  //                                 "radial-gradient(#db0c0c, #e0780b)"; //Storing in a cookie named: WebBackgroundColor the color that was chosen
  //         }
  //         var color = getCookie("WebBackgroundColor"); //Getting the color stored on the cookie
  //         document.body.style.backgroundImage = color; //Setting the background color to the same color as stored in the cookie
  //     }
  //
  //     function getCookie(cname) {
  //         var name = cname + "=";
  //         var ca = document.cookie.split(';');
  //         for(var i=0; i<ca.length; i++) {
  //             var c = ca[i];
  //             while (c.charAt(0)==' ') c = c.substring(1);
  //             if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  //         }
  //         return "";
  //     }


  // Usage History (DISCLAIMER! All script code is modified from Chartjs.org)

  const labels = [
   '11/1/2021',
   '11/2/2021',
   '11/3/2021',
   '11/4/2021',
   '11/5/2021',
   '11/6/2021',
   '11/7/2021',
   '11/8/2021',
 ];
 const data = {
   labels: labels,
   datasets: [
     {
     label: 'Music (Minutes)',
     backgroundColor: 'rgb(255, 99, 132)',
     borderColor: 'rgb(255, 99, 132)',
     data: [100, 68, 200, 185, 177, 30, 45, 93],
   },
     {
     label: 'Radio (Minutes)',
     backgroundColor: 'red',
     borderColor: 'red',
     data: [20, 40, 30, 26, 95, 44, 55, 99]
   },
     {
     label: 'Cable TV (Minutes)',
     backgroundColor: 'blue',
     borderColor: 'blue',
     data: [10, 60, 120, 76, 75, 90, 65, 220]
   },
     {
     label: 'Social Media (Minutes)',
     backgroundColor: 'teal',
     borderColor: 'teal',
     data: [10, 30, 40, 33, 64, 32, 59, 22]
   },
     {
     label: 'Games (Minutes)',
     backgroundColor: 'green',
     borderColor: 'green',
     data: [100, 90, 102, 55, 70, 224, 180, 240]
   }
 ]
};

 const config = {
 type: 'line',
 data: data,
 options: {}
};

 const myChart = new Chart(
   document.getElementById('myChart'),
   config
 );
