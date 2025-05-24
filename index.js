let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let input = document.querySelector("input");
let btn = document.querySelector("button");
let oldQrImg = document.querySelector("img");
let Qr_container = document.querySelector(".Qr_container");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let enter = input.value;
    input.value = "";
    let Qrlink =  generateQr(enter);
    oldQrImg.src = Qrlink;
    Qr_container.classList.add("show");
}) 

 function generateQr(value){
    try{
        let res = url + encodeURIComponent(value);
        return res
    }
    catch(err){
        console.log("Error:",err);
        return "Qr is not generated";
    }
}