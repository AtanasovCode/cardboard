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
    {
      type: "white",
      data: [
        {
          name: "hearts",
          icon: heartsWhite,
        },
        {
          name: "diamonds",
          icon: diamondsWhite,
        },
        {
          name: "spades",
          icon: spadesWhite,
        },
        {
          name: "clubs",
          icon: clubsWhite,
        },
      ],
    },
    {
      type: "black",
      data: [
        {
          name: "hearts",
          icon: heartsBlack,
        },
        {
          name: "diamonds",
          icon: diamondsBlack,
        },
        {
          name: "spades",
          icon: spadesBlack,
        },
        {
          name: "clubs",
          icon: clubsBlack,
        },
      ],
    },
    {
      type: "darker",
      data: [
        {
          name: "hearts",
          icon: heartsDarker,
        },
        {
          name: "diamonds",
          icon: diamondsDarker,
        },
        {
          name: "spades",
          icon: spadesDarker,
        },
        {
          name: "clubs",
          icon: clubsDarker,
        },
      ],
    },
    {
      type: "colorful",
      data: [
        {
          name: "hearts",
          icon: heartsColorful,
        },
        {
          name: "diamonds",
          icon: diamondsColorful,
        },
        {
          name: "spades",
          icon: spadesColorful,
        },
        {
          name: "clubs",
          icon: clubsColorful,
        },
      ],
    },
  ],

  // customization
  suitStyle: "white",
  changeSuitStyle: (style) => set({ suitStyle: style }),

  cardBackground: "black",
  changeCardBackground: (style) => set({ cardStyle: style }),


  displayedCards: [],
  setDisplayedCards: (value) => set({ displayedCards: value }),

  clickedCards: new Set(), // all the cards the user has clicked on
  resetClickedCards: () => set({ clickedCards: [] }), // reset clickedCards to an empty array
  addCard: (card) => set((state) => {
    if(!state.clickedCards.has(card)) {
      const updatedClickedCards = new Set();
      updatedClickedCards.add(card);

      return { clickedCards: updatedClickedCards };
    } else {
      return { gameOver: true };
    }
  }),

  mobileMenu: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),

  // generate a set of unique cards with random suits and ranks
  generateUniqueRandomCards: (numberOfCardsToGenerate) => set((state) => {
    const cards = [];
    const uniqueCards = new Set();

    while (cards.length < numberOfCardsToGenerate && uniqueCards.size < state.ranks.length * state.suits.length) {
      const randomRank = state.ranks[Math.floor(Math.random() * state.ranks.length)];
      const suitGroup = state.suits.find((suit) => suit.type === state.suitStyle);

      if (!suitGroup) continue; // Skip if no suit group matches the style

      const randomSuit = suitGroup.data[Math.floor(Math.random() * suitGroup.data.length)];
      const uniqueID = `${randomSuit.name}-${randomRank}`;

      if (!uniqueCards.has(uniqueID)) {
        uniqueCards.add(uniqueID);
        cards.push({
          rank: randomRank,
          suit: randomSuit.name,
          icon: randomSuit.icon,
          id: uniqueID,
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
}));