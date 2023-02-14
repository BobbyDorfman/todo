import React, { useEffect, useState } from 'react'

// Импорт иконок
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline'

// Кастомные hooks
import uselocalStorage from '../hooks/uselocalStorage'

// Стили   
import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
    const [hue, setHue] = uselocalStorage('react-todo.color', '200')

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = uselocalStorage('react-todo.theme', 
    defaultDark ? "dark" : "light")
    const [isColorPicking, setIsColorPicking] = useState(false)
    
    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme])

    useEffect(() => {
        document.documentElement.style.setProperty('--_hue', hue);
    }, [hue])

    return (
        <aside
            className={styles.wrapper}
            style={{
                backgroundColor: isColorPicking 
                ? 'hsl(var(--muted) / .6'
                : "transparent"
            }}
        >
            {
                isColorPicking
                    ? (
                        <>
                        <button 
                            className={`btn ${styles.close}`}
                            aria-label='Закрыть режим выбора цвета'
                            onClick={() => setIsColorPicking(false)}
                        >
                            <XMarkIcon />
                        </button>
                        <input 
                            className={styles.picker}
                            type="range"
                            min="0"
                            max="360"
                            aria-label='Изменить цвет слайдера темы'
                            value={hue}
                            onInput={(e) => setHue(e.target.value)}
                        />
                        </>
                    )
                    : (
                        <div className={styles.btns}>
                            <button 
                                className='btn'
                                aria-label={`Сменить тему на ${theme === "light" 
                                ? "dark" : "light"} `}
                                role="switch"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            >
                                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                            </button>
                            <button 
                                className='btn'
                                aria-label='Включить режим выбора цвета'
                                onClick={() => setIsColorPicking(true)}
                            >
                                <SwatchIcon />
                            </button>
                        </div>
                    )
            }
        </aside>
    )
}

export default ThemeSwitcher
