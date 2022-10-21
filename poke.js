const pokemon = [
    {               //empty array created so that i can use index == 0 if staement for dynamic search
        name: '',
        number: '',
        info: '',
        
       
    },
    {
        name: 'bulbasaur',
        number: '001',
        info: 'Type: grass/poison, Moves :Tackle/Vine Whip, Evo: evolves to ivysaur',
        
       
    },
    {
        name: 'ivysaur',
        number: '002',
        info: 'Type: grass/poison, Moves: Razor Leaf/Vine Whip, Evo: Evolves to venusaur',
        
    },
    {
        name: 'venusaur',
        number: '003',
        info: 'Type: grass/poison, Moves: Razor Leaf/Vine Whip, Evo: Final form',    
        
    },
    {
        name: 'charmander',
        number: '004',   
        info: 'Type: fire/none, Moves: Ember/Scratch, Evo: Evolves to charmeleon',
        
    },
    {
        name: 'charmeleon',
        number: '005',   
        info: 'Type: fire/none, Moves: Ember/Fire Fang, Evo: Evolves to charizard',  
        
    },
    {
        name: 'charizard',
        number: '006',  
        info: 'Type: fire/ flying, Moves: Fire Spin/Air Slash, Evo: Final form',    
        
    },
    {
        name: 'squirtle',
        number: '007', 
        info: 'Type: water/none, Moves: Tackle/Bubble, Evo: Evolves to wartortle',  
        
    },
    {
        name: 'wartortle',
        number: '008', 
        info: 'Type: water/none, Moves: Bite/Water Gun, Evo: Evolves to blastoise', 
          
    },
    {
        name: 'blastoise',
        number: '009',    
        info: 'Type: water/none, Moves: Bite/Water Gun, Evo: Final form', 
        
    },
    {
        name: 'caterpie',
        number: '010',   
        info: 'Type: bug/none, Moves: Tackle/Bug Bite, Evo: Evolves to metapod',    
        
    },
    {
        name: 'metapod',
        number: '011', 
        info: 'Type: bug/none, Moves: Tackle/Bug Bite, Evo: Evolves to butterfree', 
          
    },
    {
        name: 'butterfree',
        number: '012',    
        info: 'Type: bug/flying, Moves: ,Struggle Bug/Confusion, Evo: Final form',
          

    },
    {
        name: 'weedle',
        number: '013',    
        info: 'Type: bug/poison, Moves: Bug Bite/Poison Sting, Evo: Evolves to kakuna', 
           

    },
    {
        name: 'kakuna',
        number: '014',  
        info: 'Type: bug/poison, Moves: Bug Bite/Poison Sting, Evo: Evolves to beedrill',
           

    },
    {
        name: 'beedrill',
        number: '015', 
        info: 'Type: bug/poison, Moves: Infestation/Poison Jab, Evo: Final form',
          

    },
    {
        name: 'pidgey',
        number: '016',   
        info: 'Type: normal/flying, Moves: Tackle/Quick Attack, Evo: Evolves to pidgeotto', 
        


    },
    {
        name: 'pidgeotto',
        number: '017',
        info: 'Type: normal/flying, Moves: Wing Attack/Steel Wing, Evo: Evolves to pidgeot',  
          


    },
    {
        name: 'pidgeot',
        number: '018',
        info: 'Type: normal/flying, Moves: Air Slash/Steel Wing, Evo: Final form', 
         

    },
    {
        name: 'ratatta',
        number: '019', 
        info: 'Type: normal/none, Moves: Tackle/Quick Attack, Evo: Evolves to raticate',  
        
    },
    {
        name: 'raticate',
        number: '020',   
        info: 'Type: normal/none, Moves: Bite/Quick Attack, Evo: Final form',
          

    },

    
]

function searchingFunction2(){
   
    var messages2 = [];// pushed the messages into an array so i can display them all in one alert test
    
     pokemon.findIndex(function(title,index){ //finding the index of the pokemon and assigning a title to it
        
        if(title.name.includes(keyTwo.value.toLowerCase())){ //used to check for if the name in the search bar is in the array and takes user input and converts it to lowercase
            
        messages2.push(JSON.stringify(pokemon[index], null, 4).replaceAll("{","").replaceAll("}","").replaceAll('"',""));} //pop up for the search
          
    })
    
    if(keyTwo.value =="" || messages2 == "" ){ //no inccorect inputs (ex numbers or blanks)
        alert("No Result")
    }
    else{
    
        alert(messages2) }// pushed the messages into an array so i can display them all in one alert
    
}
    function searchingFunction1(){
        var messages1 = []; //empty array to hold messages that want to be pushed into an alert box
        
         pokemon.findIndex(function(title,index){
            if(title.number.includes(keyOne.value)){ //used to check for if the name in the search bar is in the array
               //index from here is used as for the JSON stringify to only popup the element selected 
                
              
            messages1.push((JSON.stringify(pokemon[index], null, 4)).replaceAll("{","").replaceAll("}","").replaceAll('"',""));//pop up for the search and pushing messages into the array
                
            } 
            })
             if(keyOne.value>pokemon.length || keyOne.value ==="" || messages1 == ""){ //doesn't allow for incorrect input (eg strings or blanks)
                alert("No Result");
            }
            else{
            
            alert(messages1) //alert box for the messages
            }
        }

        

var keyOne = document.getElementById('number')
var keyTwo = document.getElementById('name')



const searchInput = document.querySelector("[searcher]") //for the new functionality i created a new search (for name here)


searchInput.addEventListener("input", (e) =>{ //created seperate search to keep my alert messages
    
    const value = e.target.value.toLowerCase(); //allows user input to be tracked
   
   pokemon.findIndex(function(title,index){ //finding the index of the pokemon and assigning a title to it
    
   
    const newDiv = document.createElement("div"); //div created
        const divContainer = document.getElementById("container") //div in html required
       
        
    if(title.name.includes(value.toLowerCase()) && value !== "" && keyTwo.value !==""){ //used to check for if the name in the search bar is in the array and takes user input and converts it to lowercase
       
       
       let imageMachine = document.createElement("img") //create new img element
        
        imageMachine.setAttribute("src","images/"+""+index+".png") // settiung the attribute of the newly created img to the one selected by user
        newDiv.classList.add('div-nice') //for styling purposes i added a class to my div
        divContainer.appendChild(newDiv); //divContainer replaces body and puts this newDiv on the page
        newDiv.textContent =JSON.stringify(pokemon[index], null, 4).replaceAll("{","").replaceAll("}","").replaceAll('"',"")  ; //string information needed
        newDiv.append(imageMachine ) //images needed
    }
    
     if (value =="" || keyTwo.value =="" ){ //checks if anything in search if not clears it
      
        divContainer.replaceChildren();
    }
    else if(index == 0)  //checks if index is ==0 which lets it be dynamic
    {
        
         divContainer.replaceChildren(index); // clears div
   
    }
  
   
})
});

    const searchIn = document.querySelector("[searching]") //for the new functionality i created a new search (for number here)
        searchIn.addEventListener("input", (e) =>{ //created seperate search to keep my alert messages
    
    const value = e.target.value; //allows user input to be tracked
   
   pokemon.findIndex(function(title,index){ //finding the index of the pokemon and assigning a title to it
    
   
    const newDiv = document.createElement("div"); //div created
        const divContainer = document.getElementById("container") //div in html required
       
        
    if(title.number.includes(value) && value !== "" && keyOne.value !==""){ //used to check for if the name in the search bar is in the array and takes user input and converts it to lowercase
       
       
       let imageMachine = document.createElement("img") //create new img element
        
        imageMachine.setAttribute("src","images/"+""+index+".png") // settiung the attribute of the newly created img to the one selected by user
        newDiv.classList.add('div-nice') //for styling purposes i added a class to my div
        divContainer.appendChild(newDiv); //divContainer replaces body and puts this newDiv on the page
        newDiv.textContent =JSON.stringify(pokemon[index], null, 4).replaceAll("{","").replaceAll("}","").replaceAll('"',"")  ; //string information needed
        newDiv.append(imageMachine) //images needed
    }
    
     if (value =="" || keyOne.value =="" ){ //checks if anything in search if not clears it
      
        divContainer.replaceChildren();
    }
    else if(index == 0)  //checks if index is ==0 which lets it be dynamic
    {
        
         divContainer.replaceChildren(index); // clears div
   
    }
  
   
})
});

var buttonOne = document.getElementById('searchButton')
var buttonTwo = document.getElementById('sB')

buttonTwo.name.toLowerCase();
buttonOne.addEventListener('click',searchingFunction1)
buttonTwo.addEventListener('click',searchingFunction2)

