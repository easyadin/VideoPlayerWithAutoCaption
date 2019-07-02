window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;



const words = document.querySelector('.substitle')

recognition.addEventListener('result', e =>{
    console.log(e);
});
recognition.start()