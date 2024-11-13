import { create } from 'zustand'

//suit icons
import hearts from './src/assets/suits/heart.svg';
import spades from './src/assets/suits/spades.svg';
import clubs from './src/assets/suits/clubs.svg';
import diamonds from './src/assets/suits/diamond.svg';

export const useCardStore = create((set) => ({
  ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  suits: [
    { name: "hearts", icon: hearts },
    { name: "diamonds", icon: diamonds },
    { name: "spades", icon: spades },
    { name: "clubs", icon: clubs },
  ],

  displayedCards: [],
  setDisplayedCards: (value) => set({ displayedCards: value }),

  clickedCards: [], // all the cards the user has clicked on
  resetClickedCards: () => set({ clickedCards: [] }), // reset clickedCards to an empty array
  addCard: (card) => set((state) => ({
    clickedCards: [...state.clickedCards, card] // add a new card to the clickedCards
  })),

  // generate a set of unique cards with random suits and ranks
  generateUniqueRandomCards: (numberOfCardsToGenerate) => set((state) => {
    const cards = [];
    const uniqueCards = new Set();

    // run the while loop until cards is filled with the correct number of randum unique cards or
    // all possible combinations of cards have been created
    while (cards.length < numberOfCardsToGenerate && uniqueCards.size < state.ranks.length * state.suits.length) {
      const randomRank = state.ranks[Math.floor(Math.random() * state.ranks.length)]; // get a random card rank
      const randomSuit = state.suits[Math.floor(Math.random() * state.suits.length)]; // get a random card suit
      const uniqueID = `${randomSuit.name}-${randomRank}`; // unique ID to track 

      if (!uniqueCards.has(uniqueID)) {
        uniqueCards.add(uniqueID); // add the unique ID to the uniqueCards set in order to track 
        cards.push({
          rank: randomRank,
          suit: randomSuit.name,
          icon: randomSuit.icon,
          id: `${randomSuit.name}-${randomRank}`, // unique id for each card (hearts-2)
        });
      }
    }
    return { displayedCards: cards };
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

  level: 0,
  levelUp: () => set((state) => ({ level: state.level + 1 })),
  resetLevel: () => set({ level: 0 }),

  cardsToDisplay: 2,
  increaseCardsToDisplay: (numberOfCardsToDisplay) => set({ cardsToDisplay: numberOfCardsToDisplay }),

  gameOver: false,
  setGameOver: (gameOver) => set({ gameOver }),

  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
}));