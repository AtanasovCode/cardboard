import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useCardStore } from "./useCardStore";

export const useGameLogicStore = create(
    persist(
        (set, get) => ({

            allowSound: true,
            toggleAllowSound: () => set((state) => ({ allowSound: !state.allowSound })),

            allowCustomCursor: true,
            toggleCustomCursor: () => set((state) => ({ allowCustomCursor: !state.allowCustomCursor })),

            // return cursor styling
            getCursorStyle: (type) => {
                const { allowCustomCursor } = get();

                return allowCustomCursor ? ("cursor-none") : (type === "hover" ? "cursor-pointer" : "cursor-default");
            },

            displayedCards: [],
            setDisplayedCards: (value) => set({ displayedCards: value }),
            resetDisplayedCards: () => set({ displayedCards: [] }),

            level: 1,
            levelUp: () => set((state) => ({ level: state.level + 1 })),
            resetLevel: () => set({ level: 0 }),

            //number of cards to display on the screen
            cardsToDisplay: 3,
            increaseCardsToDisplay: (numberOfCardsToDisplay) => set({ cardsToDisplay: numberOfCardsToDisplay }),
            resetCardsToDisplay: () => set({ cardsToDisplay: 3 }),

            gameOver: false,
            setGameOver: (gameOver) => set({ gameOver }),

            score: 0,
            increaseScore: () => set((state) => ({ score: state.score + 1 })),
            resetScore: () => set({ score: 0 }),
            personalBest: 0,

            increasePersonalBest: () => {
                const { score, personalBest } = get();
                if (score > personalBest) {
                    set({ personalBest: score });
                }
            },

            // generate a set of unique cards with random suits and ranks
            generateUniqueRandomCards: (numberOfCardsToGenerate) => set((state) => {
                const { ranks, suits, suitType } = useCardStore.getState(); // Get state from `useCardStore`

                const cards = [];
                const uniqueCards = new Set();

                while (cards.length < numberOfCardsToGenerate && uniqueCards.size < ranks.length * suits.length) {
                    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
                    const suitGroup = suits.find((suit) => suit.type === suitType);

                    if (!suitGroup) continue; // Skip if no suit group matches the style

                    const randomSuit = suitGroup.suits[Math.floor(Math.random() * suitGroup.suits.length)];
                    const uniqueID = `${randomSuit.name}-${randomRank}`;

                    if (!uniqueCards.has(uniqueID)) {
                        uniqueCards.add(uniqueID);
                        cards.push({
                            rank: randomRank,
                            suit: randomSuit.name,
                            id: uniqueID,
                        });
                    }
                }
                return { displayedCards: cards };
            }),

            clickedCards: [],
            resetClickedCards: () => set({ clickedCards: [] }),

            // play audio on click 
            playClickSound: () => {
                const { allowSound } = get();

                const clickSound = new Audio(`/audio/play.wav`);
                allowSound && clickSound.play();
            },

            // play audio on card click
            playCardClickSound: () => {
                const { allowSound } = get();

                const clickSound = new Audio(`/audio/click.wav`);
                allowSound && clickSound.play();
            },

            // play audio on click (when same card is clicked twice)
            playMistakeSound: () => {
                const { allowSound } = get();

                const clickSound = new Audio(`/audio/mistake.wav`);
                allowSound && clickSound.play();
            },

            // play audio when new round starts
            playNewRoundSound: () => {
                const { allowSound } = get();

                const clickSound = new Audio(`/audio/new-round.wav`);
                allowSound && clickSound.play();
            },

            // pre load all sounds for a better experience
            preLoadSoundEffects: () => {
                const newRound = new Audio(`/audio/new-round.wav`);
                const mistake = new Audio(`/audio/mistake.wav`);
                const click = new Audio(`/audio/click.wav`);
                const play = new Audio(`/audio/play.wav`);

                // Ensure the audio is fully loaded before starting the game
                const onAudioReady = (audio) => {
                    audio.removeEventListener('canplaythrough', () => onAudioReady(audio));
                };

                // Add event listeners for each audio file
                [newRound, mistake, click, play].forEach(audio => {
                    audio.addEventListener('canplaythrough', () => onAudioReady(audio));
                    audio.load(); // Ensure audio is loaded
                });
            },

            updateDisplayedCards: () => {
                const { clickedCards, cardsToDisplay, playNewRoundSound, resetClickedCards, levelUp, increaseCardsToDisplay, generateUniqueRandomCards } = get();

                if (clickedCards.length === cardsToDisplay) {
                    playNewRoundSound();
                    resetClickedCards();
                    generateUniqueRandomCards(cardsToDisplay + 1);
                    levelUp();
                    increaseCardsToDisplay(cardsToDisplay + 1);
                }
            },

            // Add a card to clickedCards and check game over logic
            addCard: (card) => set((state) => {
                const {
                    increaseScore,
                    playCardClickSound,
                    playMistakeSound,
                } = get();
                const updatedClickedCards = new Set(state.clickedCards);

                if (!updatedClickedCards.has(card)) {
                    updatedClickedCards.add(card);
                    increaseScore();
                    playCardClickSound();

                    return { clickedCards: Array.from(updatedClickedCards) }; // Convert Set to array
                } else {
                    playMistakeSound();
                    return { gameOver: true };
                }
            }),


            shuffleCards: () => set((state) => {
                const currentCards = [...state.displayedCards];

                // shuffle the array (Fisher-Yates)
                for (let i = currentCards.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
                }

                return { displayedCards: currentCards }; // return the updated state
            }),

            resetEverything: () => {
                const {
                    resetScore,
                    resetClickedCards,
                    resetCardsToDisplay,
                    resetLevel,
                    resetDisplayedCards,
                    setGameOver,
                    generateUniqueRandomCards,
                } = get();

                resetScore();
                resetLevel();
                resetClickedCards();
                resetCardsToDisplay();
                resetDisplayedCards();
                setGameOver(false);
                generateUniqueRandomCards(3);
            },
        }),
        {
            name: "game-logic-store",
            partialize: (state) => ({
                personalBest: state.personalBest,
                allowSound: state.allowSound,
            }),
        }
    )
);