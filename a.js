document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;

    
    let name = document.getElementById("name").value;
    if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("nameError").innerText = "Only alphabets and spaces allowed.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

   
    let age = document.getElementById("age").value;
    if (age < 18 || age > 60) {
        document.getElementById("ageError").innerText = "Age must be between 18 and 60.";
        isValid = false;
    } else {
        document.getElementById("ageError").innerText = "";
    }

    
    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    
    let pincode = document.getElementById("pincode").value;
    if (!/^\d{6}$/.test(pincode)) {
        document.getElementById("pinError").innerText = "PIN code must be exactly 6 digits.";
        isValid = false;
    } else {
        document.getElementById("pinError").innerText = "";
    }

    
    let password = document.getElementById("password").value;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = 
        "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    
    if (isValid) {
        alert("Registration successful!");
    }
});

function togglePassword() {
    let passwordField = document.getElementById("password");
    let toggleIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";  
        toggleIcon.textContent = "🙈";  
    } else {
        passwordField.type = "password";  
        toggleIcon.textContent = "👁";  
    }
}






document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.createElement("canvas");
    canvas.id = "snowCanvas";
    document.body.appendChild(canvas);
    
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let snowflakes = [];

    function createSnowflakes() {
        for (let i = 0; i < 100; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 3 + 1
            });
        }
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for (let flake of snowflakes) {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        moveSnowflakes();
    }

    function moveSnowflakes() {
        for (let flake of snowflakes) {
            flake.y += flake.speedY;
            flake.x += flake.speedX;

            if (flake.y > canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * canvas.width;
            }
        }
    }

    function updateSnowfall() {
        drawSnowflakes();
        requestAnimationFrame(updateSnowfall);
    }

    createSnowflakes();
    updateSnowfall();

   
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        snowflakes = [];
        createSnowflakes();
    });
});
