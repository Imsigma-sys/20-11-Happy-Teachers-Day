// music
const audio = document.getElementById("bgMusic");

// Try to play with error handling
audio.play().catch(error => {
    console.log("Autoplay blocked:", error);
    // Music will play after user interaction
});

const texts = [
    "Chúc cô 20/11 vui vẻ và hạnh phúc!",
    "Cảm ơn cô vì những bài học quý giá📝",
    "Cảm ơn cô vì đã là người lái đò tri thức🎓",
    "Cảm ơn cô vì đã là người lái đò tình thương❤️",
    "Cảm ơn cô vì đã luôn tận tâm với nghề❤️‍🔥",
    "Cảm ơn cô vì đã luôn kiên nhẫn với chúng em🙆‍♀️",
    "Cảm ơn cô vì đã luôn thấu hiểu chúng em🤝z",
    "Cảm ơn cô vì đã luôn đồng hành cùng chúng em🚀",
    "Chúc cô luôn mạnh khỏe, hạnh phúc \n và đạt được nhiều thành công trong cuộc sống!!!",
];
let currentIndex = 0;

function typeText(element, text, speed = 50) {
    element.textContent = "";
    let charIndex = 0;
    
    function type() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => deleteText(element, speed), 2000);
        }
    }
    type();
}

function deleteText(element, speed = 50) {
    let text = element.textContent;
    let charIndex = text.length;
    
    function deleteChar() {
        if (charIndex > 0) {
            charIndex--;
            element.textContent = text.substring(0, charIndex);
            setTimeout(deleteChar, speed);
        } else {
            typeText(element, texts[currentIndex], speed);
            currentIndex = (currentIndex + 1) % texts.length;
        }
    }
    deleteChar();
}

function createEmojiRain() {
    const emojis = ["📚", "✏️", "📝", "🎓", "📖", "🖊️", "📐", "🔬", "🧮", "📊"];
    
    for (let i = 0; i < 7; i++) {
        const emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * 100 + "%";
        emoji.style.top = "-50px";
        emoji.style.fontSize = "30px";
        emoji.style.zIndex = "10";
        emoji.style.pointerEvents = "none";
        emoji.style.animation = `fall ${Math.random() * 3 + 3}s linear forwards`;
        
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 7000);
    }
}

document.getElementById("flower-btn").addEventListener("click", function () {
    audio.play();

    // Create emoji rain repeatedly every 2 seconds
    setInterval(createEmojiRain, 2000);
    
    document.getElementById("content-hidden-id").classList.remove("hidden");
    document.getElementById("content-hidden-id").classList.add("visible");
    document.getElementById("hoa-class").classList.add("hidden");

    
    typeText(document.querySelector(".text-card p"), texts[currentIndex], 50);
    currentIndex = (currentIndex + 1) % texts.length;
});