let qrBox = document.querySelector('.qrBox');
let qrImage = document.querySelector('#qrImg');
let qrTextBox = document.querySelector('#qrText');
let generateBtn = document.querySelector('.generateBtn');

generateBtn.addEventListener('click',generateQR)

function generateQR(){
    if(qrTextBox.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTextBox.value;
    }
    else{
        qrTextBox.classList.add('error')
        setTimeout(()=>{
            qrTextBox.classList.remove('error')
        },1000)
    }
}