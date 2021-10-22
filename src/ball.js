export const click = "click";

export const handleClick=()=>{
    console.log("hello")
    const h1 = document.querySelector("h1");
    h1.innerText=click;
}