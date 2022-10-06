let addBtn = document.querySelector(".action-btn-add");
let removeBtn = document.querySelector(".action-btn-remove");

let modalCont = document.querySelector(".modal-cont");

let mainCont = document.querySelector(".main-cont");

let modalContText = document.querySelector(".modal-cont-text");

let modalColors = document.querySelectorAll(".modal-color");

let topColors =  document.querySelectorAll(".color");


let ticketColorArray =  ["lightpink", "lightblue","lightgreen","black"];

let removeBtnState =  false;





//Event Listeners

removeBtn.addEventListener("click",(e)=>{
    if(removeBtnState == true){
        removeBtnState =  false;
    }
    else{
        removeBtnState =  true;
    }


})











for(let i=0; i<topColors.length; i++){
    topColors[i].addEventListener("click",(e)=>{

        
        let color = e.target.classList[0];
        let tickets = document.querySelectorAll(".ticket-cont");
        for(let i=0;i<tickets.length;i++){
            if(tickets[i].children[0].classList[1] !== color ){
               tickets[i].style.display = "none"; 
            }
            else{
                tickets[i].style.display = "block"; 
            }
        }
    })
}

for(let i=0; i<topColors.length; i++){
    topColors[i].addEventListener("dblclick",(e)=>{

        //let color = e.target.classList[0];
        let tickets = document.querySelectorAll(".ticket-cont");
        for(let i=0;i<tickets.length;i++){
            tickets[i].style.display = "block";
        }
    })
}




for(let i=0; i<modalColors.length; i++){
    modalColors[i].addEventListener("click",(e)=>{
        for(let j=0;j<modalColors.length;j++){
            modalColors[j].classList.remove("selected");
        }
        e.target.classList.add("selected");
    })
}

// for(let i=0; i<modalColors.length; i++){
//     modalColors[i].addEventListener("keydown",(e)=>{
//         console.log("Hello");
//         if(e.key === "Control"){
//             //create new ticket
//             //find selected  color
//             let color = "";
//             for(let i=0;i<modalColors.length;i++){
//                 if(modalColors[i].classList.contains("selected")){
//                     switch(modalColors[i].classList[0]){
//                         case "lightpink": {
//                                             color = "lightpink";
//                                             break;
//                                           }
//                         case "lightblue": {
//                                             color = "lightblue";
//                                             break;
//                                           }
//                         case "lightgreen": {
//                                             color = "lightgreen";
//                                             break;
//                                           }
//                         case "black": {
//                                             color = "black";
//                                             break;
//                                           }                  
    
//                     }
//                 }
//             }
//             let ticketCont = createTicket(modalContText.value,color);
//             //add new ticket to container
//             if(ticketCont !==  false)
//             {
//                 mainCont.appendChild(ticketCont);
//             }
            
    
//             //close modal
//             modalCont.style.display = "none";
//             modalContText.value  = "";
//             for(let i=0; i<modalColors.length; i++){
//                 modalColors[i].classList.remove("selected");
//             }
    
            
//         }
//     })
// }







addBtn.addEventListener("click",(e)=>{
    modalCont.style.display = "flex";
})


modalCont.addEventListener("keydown",(e)=>{
    console.log("Hello");
    if(e.key === "Control"){
        //create new ticket
        //find selected  color
        let color = "";
        for(let i=0;i<modalColors.length;i++){
            if(modalColors[i].classList.contains("selected")){
                switch(modalColors[i].classList[0]){
                    case "lightpink": {
                                        color = "lightpink";
                                        break;
                                      }
                    case "lightblue": {
                                        color = "lightblue";
                                        break;
                                      }
                    case "lightgreen": {
                                        color = "lightgreen";
                                        break;
                                      }
                    case "black": {
                                        color = "black";
                                        break;
                                      }                  

                }
            }
        }
        let ticketCont = createTicket(modalContText.value,color);
        //add new ticket to container
        if(ticketCont !==  false)
        {
            mainCont.appendChild(ticketCont);
        }
        

        //close modal
        modalCont.style.display = "none";
        modalContText.value  = "";
        for(let i=0; i<modalColors.length; i++){
            modalColors[i].classList.remove("selected");
        }

        
    }
})




function createTicket(text,color){

    if(text === undefined || text === ""){
        return false;
    }

    if(color === undefined || color=== ""){
        color =  "black";
    }

    let ticketCont = document.createElement("div");
    let ticketColor = document.createElement("div");
    let ticketId = document.createElement("div");
    let ticketText = document.createElement("textarea");
    let ticketLock = document.createElement("div");
   

    ticketCont.classList.add("ticket-cont");

    ticketColor.classList.add("ticket-color");
    ticketColor.classList.add(color);

    ticketId.classList.add("ticket-id");
    ticketId.innerText = Math.random(10).toString();

    ticketText.classList.add("ticket-text");
    ticketText.setAttribute("spellcheck", "false");
    ticketText.setAttribute("disabled" , true);
    ticketText.innerText = text;

    ticketLock.classList.add("ticket-lock");
    ticketLock.innerHTML =  '<i class="fa-solid fa-lock"></i>';


    ticketCont.appendChild(ticketColor);
    ticketCont.appendChild(ticketId);
    ticketCont.appendChild(ticketText);
    ticketCont.appendChild(ticketLock);


    //Adding Event Listeners
    ticketColor.addEventListener("click",(e)=>{
        let oldColor =  e.target.classList[1].toString();

        let index = ticketColorArray.indexOf(oldColor);

        let newColor = ticketColorArray[index<3 ? index+1 : 0];

        e.target.classList.remove(oldColor);
        e.target.classList.add(newColor);
    })

    ticketLock.addEventListener("click",(e)=>{
        if(ticketLock.innerHTML == '<i class="fa-solid fa-lock"></i>'){
            ticketLock.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
            e.currentTarget.parentNode.children[2].removeAttribute("disabled");
            
        }
        else{
            ticketLock.innerHTML = '<i class="fa-solid fa-lock"></i>';
            e.currentTarget.parentNode.children[2].setAttribute("disabled" , true);
            
        }

        

    })


    ticketCont.addEventListener("click",(e)=>{
        if(removeBtnState ==  true){
            e.currentTarget.remove();
        }
    })

    return ticketCont;
}



//<i class="fa-solid fa-lock-open"></i>
//<i class="fa-solid fa-lock"></i>