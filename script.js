const days = document.querySelector(".days-container ul");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const ampm = document.querySelector(".am-pm");
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

const time = [];
const elements = [hour, minute, seconds, date, month, year];

function updateTime () {
    let currentDate = new Date();
    let day = currentDate.getDay();
    currentDate.getHours() >= 12 
    ? ampm.children[1].setAttribute("fill", "#66F759")
    : ampm.children[0].setAttribute("fill", "#66F759");
    days.children[day].children[0].setAttribute("fill","#66F759");
    time[0] = String(currentDate.getHours() % 12 || 12 ).padStart(2, "0");
    time[1] = String(currentDate.getMinutes()).padStart(2, "0");
    time[2] = String(currentDate.getSeconds()).padStart(2, "0");
    time[3] = String(currentDate.getDate()).padStart(2, "0");
    time[4] = String(currentDate.getMonth() + 1).padStart(2, "0");
    time[5] = String(currentDate.getFullYear());
}

function updateDate () {
    for(let i = 0; i < time.length; i++) {
        for(let j = 0; j < time[i].length; j++) {
            if(time[i].charAt(j) === "0") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M7.5 66L14.5 72.5V111L2.5 123.5L0 121.5V72.5L6 66H7.5Z" fill="#66F759"/>
                    <path d="M7.5 61L14.5 54.5V16L2.5 3.5L0 5.5V54.5L6 61H7.5Z" fill="#66F759"/>
                    <path d="M62 66L56 72.5V111L68 123.5L70.5 121.5V72.5L63.5 66H62Z" fill="#66F759"/>
                    <path d="M62 61L56 54.5V16L68 3.5L70.5 5.5V54.5L63.5 61H62Z" fill="#66F759"/>
                    <path d="M54.1176 56.5L16.3725 56L10 62.6239V63.8205L16.3725 70H54.1176L60 63.8205V62.6239L54.1176 56.5Z" fill="#183116"/>
                    <path d="M6 127L4 125L15.5 113.5H54.5L66 125L64 127H6Z" fill="#66F759"/>
                    <path d="M6 0L4 2L15.5 13.5H54.5L66 2L64 0H6Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "1") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M8 66L15 72.5V111L3 123.5L0.5 121.5V72.5L6.5 66H8Z" fill="#183116"/>
                    <path d="M8 61L15 54.5V16L3 3.5L0.5 5.5V54.5L6.5 61H8Z" fill="#183116"/>
                    <path d="M62.5 66L56.5 72.5V111L68.5 123.5L71 121.5V72.5L64 66H62.5Z" fill="#66F759"/>
                    <path d="M62.5 61L56.5 54.5V16L68.5 3.5L71 5.5V54.5L64 61H62.5Z" fill="#66F759"/>
                    <path d="M54.6176 56.5L16.8725 56L10.5 62.6239V63.8205L16.8725 70H54.6176L60.5 63.8205V62.6239L54.6176 56.5Z" fill="#183116"/>
                    <path d="M6.5 127L4.5 125L16 113.5H55L66.5 125L64.5 127H6.5Z" fill="#183116"/>
                    <path d="M6.5 0L4.5 2L16 13.5H55L66.5 2L64.5 0H6.5Z" fill="#183116"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "2") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M7.5 66L14.5 72.5V111L2.5 123.5L0 121.5V72.5L6 66H7.5Z" fill="#66F759"/>
                    <path d="M7.5 61L14.5 54.5V16L2.5 3.5L0 5.5V54.5L6 61H7.5Z" fill="#183116"/>
                    <path d="M62 66L56 72.5V111L68 123.5L70.5 121.5V72.5L63.5 66H62Z" fill="#183116"/>
                    <path d="M62 61L56 54.5V16L68 3.5L70.5 5.5V54.5L63.5 61H62Z" fill="#66F759"/>
                    <path d="M54.1176 56.5L16.3725 56L10 62.6239V63.8205L16.3725 70H54.1176L60 63.8205V62.6239L54.1176 56.5Z" fill="#66F759"/>
                    <path d="M6 127L4 125L15.5 113.5H54.5L66 125L64 127H6Z" fill="#66F759"/>
                    <path d="M6 0L4 2L15.5 13.5H54.5L66 2L64 0H6Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "3") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M8 66L15 72.5V111L3 123.5L0.5 121.5V72.5L6.5 66H8Z" fill="#183116"/>
                    <path d="M8 61L15 54.5V16L3 3.5L0.5 5.5V54.5L6.5 61H8Z" fill="#183116"/>
                    <path d="M62.5 66L56.5 72.5V111L68.5 123.5L71 121.5V72.5L64 66H62.5Z" fill="#66F759"/>
                    <path d="M62.5 61L56.5 54.5V16L68.5 3.5L71 5.5V54.5L64 61H62.5Z" fill="#66F759"/>
                    <path d="M54.6176 56.5L16.8725 56L10.5 62.6239V63.8205L16.8725 70H54.6176L60.5 63.8205V62.6239L54.6176 56.5Z" fill="#66F759"/>
                    <path d="M6.5 127L4.5 125L16 113.5H55L66.5 125L64.5 127H6.5Z" fill="#66F759"/>
                    <path d="M6.5 0L4.5 2L16 13.5H55L66.5 2L64.5 0H6.5Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "4") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M7.5 66L14.5 72.5V111L2.5 123.5L0 121.5V72.5L6 66H7.5Z" fill="#183116"/>
                    <path d="M7.5 61L14.5 54.5V16L2.5 3.5L0 5.5V54.5L6 61H7.5Z" fill="#66F759"/>
                    <path d="M62 66L56 72.5V111L68 123.5L70.5 121.5V72.5L63.5 66H62Z" fill="#66F759"/>
                    <path d="M62 61L56 54.5V16L68 3.5L70.5 5.5V54.5L63.5 61H62Z" fill="#66F759"/>
                    <path d="M54.1176 56.5L16.3725 56L10 62.6239V63.8205L16.3725 70H54.1176L60 63.8205V62.6239L54.1176 56.5Z" fill="#66F759"/>
                    <path d="M6 127L4 125L15.5 113.5H54.5L66 125L64 127H6Z" fill="#183116"/>
                    <path d="M6 0L4 2L15.5 13.5H54.5L66 2L64 0H6Z" fill="#183116"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "5") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M8 66L15 72.5V111L3 123.5L0.5 121.5V72.5L6.5 66H8Z" fill="#183116"/>
                    <path d="M8 61L15 54.5V16L3 3.5L0.5 5.5V54.5L6.5 61H8Z" fill="#66F759"/>
                    <path d="M62.5 66L56.5 72.5V111L68.5 123.5L71 121.5V72.5L64 66H62.5Z" fill="#66F759"/>
                    <path d="M62.5 61L56.5 54.5V16L68.5 3.5L71 5.5V54.5L64 61H62.5Z" fill="#183116"/>
                    <path d="M54.6176 56.5L16.8725 56L10.5 62.6239V63.8205L16.8725 70H54.6176L60.5 63.8205V62.6239L54.6176 56.5Z" fill="#66F759"/>
                    <path d="M6.5 127L4.5 125L16 113.5H55L66.5 125L64.5 127H6.5Z" fill="#66F759"/>
                    <path d="M6.5 0L4.5 2L16 13.5H55L66.5 2L64.5 0H6.5Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "6") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M7.5 66L14.5 72.5V111L2.5 123.5L0 121.5V72.5L6 66H7.5Z" fill="#66F759"/>
                    <path d="M7.5 61L14.5 54.5V16L2.5 3.5L0 5.5V54.5L6 61H7.5Z" fill="#66F759"/>
                    <path d="M62 66L56 72.5V111L68 123.5L70.5 121.5V72.5L63.5 66H62Z" fill="#66F759"/>
                    <path d="M62 61L56 54.5V16L68 3.5L70.5 5.5V54.5L63.5 61H62Z" fill="#183116"/>
                    <path d="M54.1176 56.5L16.3725 56L10 62.6239V63.8205L16.3725 70H54.1176L60 63.8205V62.6239L54.1176 56.5Z" fill="#66F759"/>
                    <path d="M6 127L4 125L15.5 113.5H54.5L66 125L64 127H6Z" fill="#66F759"/>
                    <path d="M6 0L4 2L15.5 13.5H54.5L66 2L64 0H6Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "7") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M8 66L15 72.5V111L3 123.5L0.5 121.5V72.5L6.5 66H8Z" fill="#183116"/>
                    <path d="M8 61L15 54.5V16L3 3.5L0.5 5.5V54.5L6.5 61H8Z" fill="#183116"/>
                    <path d="M62.5 66L56.5 72.5V111L68.5 123.5L71 121.5V72.5L64 66H62.5Z" fill="#66F759"/>
                    <path d="M62.5 61L56.5 54.5V16L68.5 3.5L71 5.5V54.5L64 61H62.5Z" fill="#66F759"/>
                    <path d="M54.6176 56.5L16.8725 56L10.5 62.6239V63.8205L16.8725 70H54.6176L60.5 63.8205V62.6239L54.6176 56.5Z" fill="#183116"/>
                    <path d="M6.5 127L4.5 125L16 113.5H55L66.5 125L64.5 127H6.5Z" fill="#183116"/>
                    <path d="M6.5 0L4.5 2L16 13.5H55L66.5 2L64.5 0H6.5Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "8") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M7.5 66L14.5 72.5V111L2.5 123.5L0 121.5V72.5L6 66H7.5Z" fill="#66F759"/>
                    <path d="M7.5 61L14.5 54.5V16L2.5 3.5L0 5.5V54.5L6 61H7.5Z" fill="#66F759"/>
                    <path d="M62 66L56 72.5V111L68 123.5L70.5 121.5V72.5L63.5 66H62Z" fill="#66F759"/>
                    <path d="M62 61L56 54.5V16L68 3.5L70.5 5.5V54.5L63.5 61H62Z" fill="#66F759"/>
                    <path d="M54.1176 56.5L16.3725 56L10 62.6239V63.8205L16.3725 70H54.1176L60 63.8205V62.6239L54.1176 56.5Z" fill="#66F759"/>
                    <path d="M6 127L4 125L15.5 113.5H54.5L66 125L64 127H6Z" fill="#66F759"/>
                    <path d="M6 0L4 2L15.5 13.5H54.5L66 2L64 0H6Z" fill="#66F759"/>
                </svg>`;
            }
            else if(time[i].charAt(j) === "9") {
                elements[i].children[j].innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="71" height="127" viewBox="0 0 71 127" fill="none">
                    <path d="M8 66L15 72.5V111L3 123.5L0.5 121.5V72.5L6.5 66H8Z" fill="#183116"/>
                    <path d="M8 61L15 54.5V16L3 3.5L0.5 5.5V54.5L6.5 61H8Z" fill="#66F759"/>
                    <path d="M62.5 66L56.5 72.5V111L68.5 123.5L71 121.5V72.5L64 66H62.5Z" fill="#66F759"/>
                    <path d="M62.5 61L56.5 54.5V16L68.5 3.5L71 5.5V54.5L64 61H62.5Z" fill="#66F759"/>
                    <path d="M54.6176 56.5L16.8725 56L10.5 62.6239V63.8205L16.8725 70H54.6176L60.5 63.8205V62.6239L54.6176 56.5Z" fill="#66F759"/>
                    <path d="M6.5 127L4.5 125L16 113.5H55L66.5 125L64.5 127H6.5Z" fill="#66F759"/>
                    <path d="M6.5 0L4.5 2L16 13.5H55L66.5 2L64.5 0H6.5Z" fill="#66F759"/>
                </svg>`;
            }
        }
    }
}

setInterval(function updateTimeDate(){
    updateTime();
    updateDate();
}, 1000);