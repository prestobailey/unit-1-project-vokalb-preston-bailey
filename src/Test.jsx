
function Test(){

    const word1 = "Hello";
    const word2 = "There";
    
    return(
        <ul>
           <li>Goodbye</li> 
           <li>{word1}</li>
           <li>{word2.toUpperCase()}</li>
        </ul>
    );
}

export default Test