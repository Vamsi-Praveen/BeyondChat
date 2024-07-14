import { useContext, useState, createContext, useEffect } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme hook only used inside ThemeContext')
    }
    return context;
}

export const CustomThemeProvider = ({ children }) => {
    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light'
    }
    const [theme, setTheme] = useState(getTheme);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)

    }
    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}