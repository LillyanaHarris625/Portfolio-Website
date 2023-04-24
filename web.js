// print selected text to consol
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

// take the user to the top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
} 

