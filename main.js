function check_Winner() {
 
  let grid = [[] , [] , [] , [] , [] , [] , []]
  let x = $('section div div')

  for(let i = 0 ; i < x.length ; ++i) {
    let idx = String(x[i].classList[0])[1] - 1
    if (x[i].classList.contains('TurnBlue')) grid[idx].push('B')
    else if (x[i].classList.contains('TurnRed')) grid[idx].push('R')
    else grid[idx].push('W')
  } 
   
//  console.log(grid)
  for(let i = 0 ; i < 7 ; i++) {
    for (let j = 0 ; j < 6 ; j++) {
      if (j + 3 < 6 && grid[i][j] == grid[i][j+1] && grid[i][j+1] == grid[i][j+2] && grid[i][j+2] == grid[i][j+3]) {
        if (grid[i][j] == 'B') return 1;
        else if (grid[i][j] == 'R') return 2;
      }

      if (i + 3 < 7 && grid[i][j] == grid[i+1][j] && grid[i+1][j] == grid[i+2][j] && grid[i+2][j] == grid[i+3][j]) {
        if (grid[i][j] == 'B') return 1;
        else if (grid[i][j] == 'R') return 2;
      }
      
      if (i+3 < 7 && j + 3 < 6 && grid[i][j] == grid[i+1][j+1] && grid[i+1][j+1] == grid[i+2][j+2] && grid[i+2][j+2] == grid[i+3][j+3]) {
        if (grid[i][j] == 'B') return 1;
        else if (grid[i][j] == 'R') return 2;
      }

      if (i-3 >= 0 && j-3 >= 0 &&  grid[i][j] == grid[i-1][j-1] && grid[i-1][j-1] == grid[i-2][j-2] && grid[i-2][j-2] == grid[i-3][j-3]) {
        if (grid[i][j] == 'B') return 1;
        else if (grid[i][j] == 'R') return 2;
      }

      if (i-3 >= 0 && j+3 < 6 &&  grid[i][j] == grid[i-1][j+1] && grid[i-1][j+1] == grid[i-2][j+2] && grid[i-2][j+2] == grid[i-3][j+3]) {
        if (grid[i][j] == 'B') return 1;
        else if (grid[i][j] == 'R') return 2;
      }

      if (i+3 < 7 && j-3 >= 0 &&  grid[i][j] == grid[i+1][j-1] && grid[i+1][j-1] == grid[i+2][j-2] && grid[i+2][j-2] == grid[i+3][j-3]) {
        if (grid[i][j] == 'B') return 1;
        else if (grid[i][j] == 'R') return 2;
      }
      

    }
  }

   return 0;

}
  

        $('.howToPlay').click( () => {
                if ($('.howToPlayExplain').css('display') == 'none') $('.howToPlayExplain').slideDown();
                else $('.howToPlayExplain').slideUp();       
        } );
        
         let cirs = $('section div');
         let f = 0;
        
        for (let i = 0 ; i < cirs.length ; i++) {
         cirs.eq(i).click(() => {
              
           let ele = cirs.eq(i)[0].children;
           console.log("ele is :: " , ele)
               for (let j = ele.length - 1 ; j >= 0 ; j--) {
                console.log(ele[j])     
                if (!ele[j].classList.contains('TurnBlue') && !ele[j].classList.contains('TurnRed')) {
                        if (f == 0) {
                          ele[j].classList.add('TurnBlue');
                           if (check_Winner() == 1) {
                            setTimeout(alert , 700 , 'Blue is The Winner')
                            
                            setTimeout(() => {
                              if(confirm('Play Again?')) {
                                  location.reload()
                              }   

                              else window.close()

                            }, 1000)
                              
                             
                          }      
                           f = 1;
                         }
                          
                         else {
                               ele[j].classList.add('TurnRed');    
                               if (check_Winner() == 2) {
                                setTimeout(alert , 700 , 'Red is The Winner')
                                
                                setTimeout(()=> {
                                     if (confirm('Play Again?')) {
                                      location.reload()
                                     }  

                                     else window.close()
                                } , 1000)

                              }
                              
                               f = 0; 
                          } 

                          break;
                     }
               }

                      
                             
        }); 
                       
}     
  
