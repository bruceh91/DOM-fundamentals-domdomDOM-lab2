document.addEventListener("DOMContentLoaded", function () {

    // makes button
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    // used in makeBox and giveId for generation id
    count = 1;
    temp = 
    //used to generate box with unique id when clicked
    button.addEventListener("click", function () {
        makeBox();
        count++;
        giveColor(temp);
    })

    //generate box with unique id
    function makeBox() {
        let div = document.createElement('div');
        div.className = "black-box";
        div.id = count;
        temp = div;
        document.body.appendChild(div);
        giveNum(div);
        
    }

    // puts number in square only when hovered on
    function giveNum(div) {

        // displays number
        div.addEventListener("mouseover", function () {
            let p = document.createElement('p');
            let boxText = document.createTextNode(div.id);
            p.appendChild(boxText);
            div.appendChild(p);

            //hides number
            div.addEventListener("mouseout", function () {
                div.removeChild(p);     // <= cosole shows this error   
                //Uncaught DOMException: Failed to execute 'removeChild' on 'Node': 
                //The node to be removed is not a child of this node.
            })
        })
    }

    function giveColor (div) {
        div.addEventListener("click", function() {
            let r = genNums();
            let g = genNums();
            let b = genNums();
            let colorGen = "rgb_number= 'rgb(" + r + "," + g + "," + b + ")';";
            div.setAttribute('class', colorGen); 
        })
    }
    
    function genNums (){
        return Math.floor(Math.random()* 250)
    }


})


//generates random number between 1 and 250
console.log(Math.floor(Math.random()* 250));