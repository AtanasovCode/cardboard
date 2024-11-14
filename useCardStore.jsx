import { create } from 'zustand'

//suit icons
import heartsColorful from './src/assets/suits/hearts-colorful.svg';
import spadesColorful from './src/assets/suits/spades-colorful.svg';
import clubsColorful from './src/assets/suits/clubs-colorful.svg';
import diamondsColorful from './src/assets/suits/diamonds-colorful.svg';

import heartsDarker from './src/assets/suits/hearts-darker.svg';
import spadesDarker from './src/assets/suits/spades-darker.svg';
import clubsDarker from './src/assets/suits/clubs-darker.svg';
import diamondsDarker from './src/assets/suits/diamonds-darker.svg';

import heartsBlack from './src/assets/suits/hearts-black.svg';
import spadesBlack from './src/assets/suits/spades-black.svg';
import clubsBlack from './src/assets/suits/clubs-black.svg';
import diamondsBlack from './src/assets/suits/diamonds-black.svg';

import heartsWhite from './src/assets/suits/hearts-white.svg';
import spadesWhite from './src/assets/suits/spades-white.svg';
import clubsWhite from './src/assets/suits/clubs-white.svg';
import diamondsWhite from './src/assets/suits/diamonds-white.svg';

export const useCardStore = create((set) => ({
  ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  suits: [
    { name: "hearts", icon: heartsWhite },
    { name: "diamonds", icon: diamondsWhite },
    { name: "spades", icon: spadesWhite },
    { name: "clubs", icon: clubsWhite },
  ],

  displayedCards: [],
  setDisplayedCards: (value) => set({ displayedCards: value }),

  clickedCards: [], // all the cards the user has clicked on
  resetClickedCards: () => set({ clickedCards: [] }), // reset clickedCards to an empty array
  addCard: (card) => set((state) => ({
    clickedCards: [...state.clickedCards, card] // add a new card to the clickedCards
  })),

  mobileMenu: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),

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

  level: 1,
  levelUp: () => set((state) => ({ level: state.level + 1 })),
  resetLevel: () => set({ level: 0 }),

  cardsToDisplay: 3,
  increaseCardsToDisplay: (numberOfCardsToDisplay) => set({ cardsToDisplay: numberOfCardsToDisplay }),

  gameOver: false,
  setGameOver: (gameOver) => set({ gameOver }),

  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),

  // customization

  suitStyle: "colorful",
  changeSuitStyle: (style) => set({ suitStyle: style }),

  cardStyle: "black",
  changeCardStyle: (style) => set({ cardStyle: style }),
}));