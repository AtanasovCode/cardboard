import { create } from 'zustand'

//suit icons
import hearts from './src/assets/suits/heart.svg';
import spades from './src/assets/suits/spades.svg';
import clubs from './src/assets/suits/clubs.svg';
import diamonds from './src/assets/suits/diamond.svg';

export const useCardStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  suits: [
    { name: "hearts", icon: hearts },
    { name: "diamonds", icon: diamonds },
    { name: "spades", icon: spades },
    { name: "clubs", icon: clubs },
  ],

  displayedCards: [],
  setDisplayedCards: (value) => set({ displayedCards: value }),

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

  score: 0,
  resetScore: () => set({ score: 0 }),
}));