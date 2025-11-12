const toggleTheme = document.getElementById('theme-toggle');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Function to apply theme based on the current mode
const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.remove('bg-white', 'text-gray-800');
        document.body.classList.add('bg-gray-900', 'text-gray-100');
        themeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.add('bg-white', 'text-gray-800');
        document.body.classList.remove('bg-gray-900', 'text-gray-100');
        themeToggleBtn.textContent = 'Switch to Dark Mode';
    }
};

// On page load, apply the saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('themeMode') || 'light';
    applyTheme(savedTheme);
});

// Toggle theme on button click
const handleThemeToggle = () => {
    const currentTheme = localStorage.getItem('themeMode') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('themeMode', newTheme);
    applyTheme(newTheme);
};

toggleTheme.addEventListener('click', handleThemeToggle);
