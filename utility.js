function extendOrCollapseWidth(isToggled, sideNavBar){
    if(isToggled){
        sideNavBar.style.width = '8vh';
        
    }else{
        sideNavBar.style.width = '0';        
    }
}

let runningTimer;
function timer(ms){
    return new Promise(res => (runningTimer = setTimeout(res, ms)));
}

function animatedText(domElement, arr){
    innerText = '';

    let index = 0;
    
    let currentElement = arr[index];

    async function typingAnimated(){
        for(let i = 0; i < currentElement.length; i++){
           innerText += currentElement[i]; //current element is the str of arr, so currentElement[i] is a char.
           domElement.innerText = innerText; //changing dom
           await timer(80); //by waiting 100ms we give the impression that these are key strokes.

        }
       await timer(900);//give users half a second to read before beginning to backspace.
        backspaceAnimated();
        if(index === arr.length -1){
            index = 0;
        }else{
            index++;
        }
        currentElement = arr[index];
        let msPerChar = currentElement.length * 163; //this formula is for indicating the length it takes to type out a word. its slightly off; you can test this by inputing a long word in the array.
        await timer(msPerChar); //below will never happen until the word has been typed out/function is resolved.
        typingAnimated(); //recursive loop, will never end! i wonder what thi will do to performance tho...
    }

        
    async function backspaceAnimated(){
        for(let i = innerText.length; i > 0; i--){
            let textArr = innerText.split('');
            textArr.pop();
            innerText = textArr.join('');
            domElement.innerText = innerText;
            await timer(105); //backspace key stroke
        }
    }



    typingAnimated();

    }

function switchOnModal(modal){
    modal.style.display = 'block';
}
function switchOffModal(modal){
    modal.style.display = 'none';
}
