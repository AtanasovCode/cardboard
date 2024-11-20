import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export const useCardStore = create(
  persist(
    (set, get) => ({
      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: [
        {
          type: "White",
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
          type: "Black",
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
          type: "Darker",
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
          type: "Colorful",
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
      suitStyle: "Black",
      changeSuitStyle: (style) => set({ suitStyle: style }),
      suitStyles: [
        { name: "Colorful", icon: spadesColorful, handleClick: () => get().changeSuitStyle("Colorful") },
        { name: "Darker", icon: spadesDarker, handleClick: () => get().changeSuitStyle("Darker") },
        { name: "Black", icon: spadesBlack, handleClick: () => get().changeSuitStyle("Black") },
        { name: "White", icon: spadesWhite, handleClick: () => get().changeSuitStyle("White") },
      ],

      getSuitStyle: (suit) => {
        const { suits, suitStyle } = get();
        const suitGroup = suits.find((item) => item.type === suitStyle);
        if (!suitGroup) return null; // Handle case where suitStyle doesn't match any type
        const suitData = suitGroup.data.find((item) => item.name === suit);
        return suitData ? suitData.icon : null; // Return icon or null if not found
      },


      backgroundStyle: "pool-table-background-style",
      changeBackgroundStyle: (style) => set({ backgroundStyle: style }),
      backgroundStyles: [
        { name: "pool-table-background-style", color: "bg-pool-table", handleClick: () => get().changeBackgroundStyle("pool-table-background-style") },
        { name: "poker-table-background-style", color: "bg-poker-table", handleClick: () => get().changeBackgroundStyle("poker-table-background-style") },
        { name: "casino-night-background-style", color: "bg-casino-night", handleClick: () => get().changeBackgroundStyle("casino-night-background-style") },
        { name: "luxury-black-background-style", color: "bg-luxury-black", handleClick: () => get().changeBackgroundStyle("luxury-black-background-style") },
        { name: "luxury-poker-background-style", color: "bg-luxury-poker", handleClick: () => get().changeBackgroundStyle("luxury-poker-background-style") },
        { name: "dark-felt-background-style", color: "bg-dark-felt", handleClick: () => get().changeBackgroundStyle("dark-felt-background-style") },
        { name: "pure-black-background-style", color: "bg-black", handleClick: () => get().changeBackgroundStyle("pure-black-background-style") },
        { name: "pure-red-background-style", color: "bg-red-800", handleClick: () => get().changeBackgroundStyle("pure-red-background-style") },
        { name: "pure-gray-background-style", color: "bg-slate-800", handleClick: () => get().changeBackgroundStyle("pure-gray-background-style") },
      ],



      cardBackground: "white-card-background",
      changeCardBackground: (style) => set({ cardBackground: style }),
      cardBackgrounds: [
        { name: "black-card-background", color: "bg-card-black", handleClick: () => get().changeCardBackground("black-card-background") },
        { name: "white-card-background", color: "bg-card-white", handleClick: () => get().changeCardBackground("white-card-background") },
        { name: "dark-grey-card-background", color: "bg-card-grey", handleClick: () => get().changeCardBackground("dark-grey-card-background") },
        { name: "red-card-background", color: "bg-card-red", handleClick: () => get().changeCardBackground("red-card-background") },
        { name: "blue-card-background", color: "bg-card-blue", handleClick: () => get().changeCardBackground("blue-card-background") },
        { name: "green-card-background", color: "bg-card-green", handleClick: () => get().changeCardBackground("green-card-background") },
        { name: "orange-card-background", color: "bg-card-orange", handleClick: () => get().changeCardBackground("orange-card-background") },
        { name: "purple-card-background", color: "bg-card-purple", handleClick: () => get().changeCardBackground("purple-card-background") },
        { name: "teal-card-background", color: "bg-card-teal", handleClick: () => get().changeCardBackground("teal-card-background") },
      ],

      cardOutline: false,
      toggleCardOutline: () => set((state) => ({ cardOutline: !state.cardOutline })),

      cardOutlineColor: "white-card-outline",
      changeCardOutlineColor: (color) => set({ cardOutlineColor: color }),
      cardOutlineColors: [
        { name: "white-card-outline", color: "bg-card-outline-white", handleClick: () => get().changeCardOutlineColor("white-card-outline") },
        { name: "light-grey-card-outline", color: "bg-card-outline-light-grey", handleClick: () => get().changeCardOutlineColor("light-grey-card-outline") },
        { name: "dark-grey-card-outline", color: "bg-card-outline-dark-grey", handleClick: () => get().changeCardOutlineColor("dark-grey-card-outline") },
        { name: "black-card-outline", color: "bg-card-outline-black", handleClick: () => get().changeCardOutlineColor("black-card-outline") },
      ],

      mobileMenu: false,
      toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),
    }),
    {
      name: 'card-store',
      partialize: (state) => ({
        suitStyle: state.suitStyle,
        cardBackground: state.cardBackground,
        backgroundStyle: state.backgroundStyle,
        cardOutline: state.cardOutline,
        cardOutlineColor: state.cardOutlineColor,
      }),
    }
  )
);