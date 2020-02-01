/***************************
 * Garrett Matthews
 * Generate a 2048 grid
 **************************/

 function generateGrid(x, y){
     /* This function will generate a grid of x by y size */
     var html = "";
     var i = 0;
     var j = 0;

     for (i;i < y; i++) {
         for(let j = 0;j < x; j ++) {
            if (j == 0){
                if (i % 2 == 0){
                    html += "<tr><td class =\"darkGreen\"></td>";
                }
                else{
                    html += "<tr><td class =\"lightGreen\"></td>";
                }
                
            }
            else if (j < x - 1){
                if (i % 2 == 0){
                    if (j % 2 == 0){
                        html += "<td class=\"darkGreen\"></td>";
                    }
                    else{
                        html += "<td class=\"lightGreen\"></td>";
                    }
                }
                else{
                    if (j % 2 == 0){
                        html += "<td class=\"lightGreen\"></td>";
                    }
                    else{
                        html += "<td class=\"darkGreen\"></td>";
                    }
                }
                
            }
            else if (j == x -1){
                if (i % 2 == 0){
                    html += "<td class=\"lightGreen\"></td></tr>" ;
                }
                else{
                    html += "<td class=\"darkGreen\"></td></tr>" ;
                }
                
            }
            
                 
         }
     }
     return html;
 }
 function showGrid(x = 4, y = 4){
     /* Function to show the grid generated with a default szie of 4 x 4 */
     var genGrid = document.getElementById("genGrid");
     genGrid.innerHTML = generateGrid(x,y);
 }