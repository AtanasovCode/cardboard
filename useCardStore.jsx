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

  mobileMenu: false,
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),
}));