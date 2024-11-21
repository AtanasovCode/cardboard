import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useCardStore } from "./useCardStore";

export const useGameLogicStore = create(
    persist(
        (set, get) => ({
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
                const { ranks, suits, suitStyle } = useCardStore.getState(); // Get state from `useCardStore`

                const cards = [];
                const uniqueCards = new Set();

                while (cards.length < numberOfCardsToGenerate && uniqueCards.size < ranks.length * suits.length) {
                    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
                    const suitGroup = suits.find((suit) => suit.type === suitStyle);

                    if (!suitGroup) continue; // Skip if no suit group matches the style

                    const randomSuit = suitGroup.data[Math.floor(Math.random() * suitGroup.data.length)];
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


            updateDisplayedCards: () => {
                const { clickedCards, cardsToDisplay, resetClickedCards, levelUp, increaseCardsToDisplay, generateUniqueRandomCards } = get();

                if (clickedCards.length === cardsToDisplay) {
                    resetClickedCards();
                    generateUniqueRandomCards(cardsToDisplay + 1);
                    levelUp();
                    increaseCardsToDisplay(cardsToDisplay + 1);
                }
            },

            // Add a card to clickedCards and check game over logic
            addCard: (card) => set((state) => {
                const { increaseScore } = get();
                const updatedClickedCards = new Set(state.clickedCards);

                if (!updatedClickedCards.has(card)) {
                    updatedClickedCards.add(card);
                    increaseScore();

                    return { clickedCards: Array.from(updatedClickedCards) }; // Convert Set to array
                } else {
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
            }),
        }
    )
);