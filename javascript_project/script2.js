// Add these to your translations object
translations.ka.reg_title = "რეგისტრაცია";
translations.ka.reg_date = "რეგისტრაციის თარიღი";
translations.en.reg_title = "Registration";
translations.en.reg_date = "Registration Date";

// Password Strength Logic
const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strengthText');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = "";
    let color = "";

    const hasLetters = /[a-zA-Z]/.test(val);
    const hasNumbers = /[0-9]/.test(val);
    const hasMixed = /[a-z]/.test(val) && /[A-Z]/.test(val);

    if (val.length === 0) {
        strength = "";
    } else if (hasLetters && hasNumbers && hasMixed) {
        strength = "ძლიერი (Strong)"; // High strength
        color = "green";
    } else if (hasLetters && hasNumbers) {
        strength = "საშუალო (Medium)"; // Medium strength
        color = "orange";
    } else {
        strength = "სუსტი (Weak)"; // Low strength
        color = "red";
    }

    strengthText.textContent = strength;
    strengthText.style.color = color;
});

// Email Validation Logic
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "არასწორი ელ-ფოსტის ფორმატი";
    } else {
        document.getElementById('emailError').textContent = "";
    }
});