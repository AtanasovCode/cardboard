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

  //generate a set of cards with random suits and ranks
  generateRandomCards: (number) => set((state) => {
    const cards = [];
    for (let i = 0; i < number; i++) {
      const randomRank = state.ranks[Math.floor(Math.random() * state.ranks.length)];
      const randomSuit = state.suits[Math.floor(Math.random() * state.suits.length)];
      cards.push({
        rank: randomRank,
        suit: randomSuit.name,
        icon: randomSuit.icon,
        id: `${randomSuit.name}-${randomRank}-${i}`, // Unique ID for each card
      });
    }
    return { displayedCards: cards };
  }),

  score: 0,
  resetScore: () => set({ score: 0 }),
}))