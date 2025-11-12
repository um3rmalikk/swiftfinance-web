const toggleTheme = document.getElementById('theme-toggle');
// NOTE: Removed reference to themeToggleBtn as its ID is usually used internally by the library

// Function to apply theme based on the current mode
const applyTheme = (theme) => {
    if (theme === 'dark') {
        // Apply dark mode classes
        document.documentElement.classList.add('dark');
        document.body.classList.remove('bg-gray-50', 'text-gray-900', 'bg-white', 'text-gray-800');
        document.body.classList.add('bg-gray-900', 'text-gray-100');
    } else {
        // Apply light mode classes
        document.documentElement.classList.remove('dark');
        document.body.classList.add('bg-gray-50', 'text-gray-900');
        document.body.classList.remove('bg-gray-900', 'text-gray-100', 'bg-white', 'text-gray-800');
    }
};

// --- Initial Load Logic (Forces Dark Mode) ---
document.addEventListener('DOMContentLoaded', () => {
    // Check saved preference, otherwise default to 'dark'
    const savedTheme = localStorage.getItem('themeMode');
    
    // 🛑 FIX: Initialize as 'dark' if no preference is saved, to eliminate white flash
    const initialTheme = savedTheme || 'dark'; 

    // Apply the chosen initial theme
    applyTheme(initialTheme);
});

// Toggle theme on button click
const handleThemeToggle = () => {
    // Use 'dark' as load default if localStorage is empty
    const currentTheme = localStorage.getItem('themeMode') || 'dark'; 
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('themeMode', newTheme);
    applyTheme(newTheme);
};

// Check if the button element exists before adding listener (prevents errors)
if (toggleTheme) {
    toggleTheme.addEventListener('click', handleThemeToggle);
}