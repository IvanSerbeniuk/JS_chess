import { Game } from './core/Game.js';
import { Events } from './ui/Events.js';

// Инициализация игры
const game = new Game();
game.start(); // Отрисовка доски



// Дополнительно: загрузка сохранённой игры
// window.addEventListener('DOMContentLoaded', () => {
//     let savedGame = localStorage.getItem('chessGame');
//     if (savedGame) game.loadState(JSON.parse(savedGame));
// });