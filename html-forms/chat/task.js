const chatWidget = document.querySelector("div.chat-widget");
const inputMessage = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let newMessage = "";
let today = new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit",
    minute: "2-digit",
});
let botMessage = [
    'Где Ваша совесть?',
    'Вы не купили ни одного товара, чтобы с нами так разговаривать',
    'Кто тут?',
    'Добрый день.  До свидания!',
    'К сожалению все операторы в данный момент заняты. Не пишите нам больше!'

];

function textMessage(e) {
    newMessage = e.target.value;
}

function submitMessage(e) {
    if (e.key === 'Enter' & newMessage !== "") {
        messages.innerHTML += `
    <div class="message message_client">
     <div class="message__time"> ${today}  </div> 
    <div class="message__text">
        ${newMessage}
    </div>
    </div>
    `;
        inputMessage.value = "";
        newMessage = "";
        setTimeout(submitMessageBot, 1000);
    }
}

function submitMessageBot() {
    let randNumber = Math.round(Math.random() * (botMessage.length - 1));
    messages.innerHTML += `
    <div class="message">
    <div class="message__time"> ${today} </div>
    <div class="message__text">
        ${botMessage[randNumber]}
    </div>
    </div>
        `;
}

function open() {
    if (!chatWidget.classList.contains('chat-widget_active')) {
        chatWidget.classList.add('chat-widget_active');
    }
}

document.addEventListener('click', open);
document.addEventListener('keydown', submitMessage);
inputMessage.addEventListener('input', textMessage);