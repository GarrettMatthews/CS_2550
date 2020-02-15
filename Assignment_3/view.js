// Creating a view controller for the 2048 game


// This function generates the grid
function generateGrid(x = 4, y= 4){
    /* This function will generate a grid of x by y size */
    var html = "";

    for (let i = 0;i < y; i++) {
        for(let j = 0;j < x; j ++) {
            var content = getValue(i,j);
           if (j == 0){
               if (content == ''){
                    html += "<tr><td class =\"blank\">" + content + "</td>";
               }
               else if( content == 2){
                    html += "<tr><td class =\"two\">"+ content +"</td>";
               }
               else if (content == 4){
                    html += "<tr><td class =\"four\">"+ content +"</td>";
               }
               else if (content == 8){
                    html += "<tr><td class =\"eight\">"+ content +"</td>";
               }
               else if (content == 16){
                    html += "<tr><td class =\"sixteen\">"+ content +"</td>";
               }
               else if (content == 32){
                    html += "<tr><td class =\"thirtytwo\">"+ content +"</td>";
               }
               else if (content == 64){
                    html += "<tr><td class =\"sixtyfour\">"+ content +"</td>";
               }
               else if (content == 128){
                    html += "<tr><td class =\"onetwentyeight\">"+ content +"</td>";
               }
               else if (content == 256){
                    html += "<tr><td class =\"twofivesix\">"+ content +"</td>";
               }
               else if (content == 512){
                    html += "<tr><td class =\"fivetwelve\">"+ content +"</td>";
               }
               else if (content == 1024){
                    html += "<tr><td class =\"tentwofour\">"+ content +"</td>";
               }
               else if (content >= 2048){
                    html += "<tr><td class =\"twentyfoureight\">"+ content +"</td>";
               }
           }
           else if (j < x - 1){
                if (content == ''){
                    html += "<td class =\"blank\">" + content + "</td>";
                }
                else if( content == 2){
                    html += "<td class =\"two\">"+ content +"</td>";
                }
                else if (content == 4){
                    html += "<td class =\"four\">"+ content +"</td>";
                }
                else if (content == 8){
                    html += "<td class =\"eight\">"+ content +"</td>";
                }
                else if (content == 16){
                    html += "<td class =\"sixteen\">"+ content +"</td>";
                }
                else if (content == 32){
                    html += "<td class =\"thirtytwo\">"+ content +"</td>";
                }
                else if (content == 64){
                    html += "<td class =\"sixtyfour\">"+ content +"</td>";
                }
                else if (content == 128){
                    html += "<td class =\"onetwentyeight\">"+ content +"</td>";
                }
                else if (content == 256){
                    html += "<td class =\"twofivesix\">"+ content +"</td>";
                }
                else if (content == 512){
                    html += "<td class =\"fivetwelve\">"+ content +"</td>";
                }
                else if (content == 1024){
                    html += "<td class =\"tentwofour\">"+ content +"</td>";
                }
                else if (content >= 2048){
                    html += "<td class =\"twentyfoureight\">"+ content +"</td>";
                }               
           }
           else if (j == x -1){
                if (content == ''){
                    html += "<td class =\"blank\">" + content + "</td></tr>";
                }
                else if( content == 2){
                    html += "<td class =\"two\">"+ content +"</td></tr>";
                }
                else if (content == 4){
                    html += "<td class =\"four\">"+ content +"</td></tr>";
                }
                else if (content == 8){
                    html += "<td class =\"eight\">"+ content +"</td></tr>";
                }
                else if (content == 16){
                    html += "<td class =\"sixteen\">"+ content +"</td></tr>";
                }
                else if (content == 32){
                    html += "<td class =\"thirtytwo\">"+ content +"</td></tr>";
                }
                else if (content == 64){
                    html += "<td class =\"sixtyfour\">"+ content +"</td></tr>";
                }
                else if (content == 128){
                    html += "<td class =\"onetwentyeight\">"+ content +"</td></tr>";
                }
                else if (content == 256){
                    html += "<td class =\"twofivesix\">"+ content +"</td></tr>";
                }
                else if (content == 512){
                    html += "<td class =\"fivetwelve\">"+ content +"</td></tr>";
                }
                else if (content == 1024){
                    html += "<td class =\"tentwofour\">"+ content +"</td></tr>";
                }
                else if (content >= 2048){
                    html += "<td class =\"twentyfoureight\">"+ content +"</td></tr>";
                }
           }       
        }
    }
    return html;
}

function showGrid(){
    /* Function to show the grid generated with a default szie of 4 x 4 */
    var genGrid = document.getElementById("genGrid");
    genGrid.innerHTML = generateGrid();
    displayScore();
}

// This function displays the current score on the html page
function displayScore(){
    var html = "Current score: ";
    html += showScore();
    var scorePortion = document.getElementById("score");
    scorePortion.innerHTML = html;
}
