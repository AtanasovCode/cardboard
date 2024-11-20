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


      backgroundStyle: "Pool Table",
      changeBackgroundStyle: (style) => set({ backgroundStyle: style }),
      backgroundStyles: [
        { name: "Pool Table", color: "bg-pool-table", handleClick: () => get().changeBackgroundStyle("Pool Table") },
        { name: "Poker Table", color: "bg-poker-table", handleClick: () => get().changeBackgroundStyle("Poker Table") },
        { name: "Casino Night", color: "bg-casino-night", handleClick: () => get().changeBackgroundStyle("Casino Night") },
        { name: "Luxury Black", color: "bg-luxury-black", handleClick: () => get().changeBackgroundStyle("Luxury Black") },
        { name: "Luxury Poker", color: "bg-luxury-poker", handleClick: () => get().changeBackgroundStyle("Luxury Poker") },
        { name: "Dark Felt", color: "bg-dark-felt", handleClick: () => get().changeBackgroundStyle("Dark Felt") },
        { name: "Pure Black", color: "bg-black", handleClick: () => get().changeBackgroundStyle("Pure Black") },
        { name: "Pure Red", color: "bg-red-800", handleClick: () => get().changeBackgroundStyle("Pure Red") },
        { name: "Pure Gray", color: "bg-slate-800", handleClick: () => get().changeBackgroundStyle("Pure Gray") },
      ],



      cardBackground: "White",
      changeCardBackground: (style) => set({ cardBackground: style }),
      cardBackgrounds: [
        { name: "Black", color: "bg-card-black", handleClick: () => get().changeCardBackground("Black") },
        { name: "White", color: "bg-card-white", handleClick: () => get().changeCardBackground("White") },
        { name: "Dark Grey", color: "bg-card-grey", handleClick: () => get().changeCardBackground("Dark Grey") },
        { name: "Red", color: "bg-card-red", handleClick: () => get().changeCardBackground("Red") },
        { name: "Blue", color: "bg-card-blue", handleClick: () => get().changeCardBackground("Blue") },
        { name: "Green", color: "bg-card-green", handleClick: () => get().changeCardBackground("Green") },
        { name: "Orange", color: "bg-card-orange", handleClick: () => get().changeCardBackground("Orange") },
        { name: "Purple", color: "bg-card-purple", handleClick: () => get().changeCardBackground("Purple") },
        { name: "Teal", color: "bg-card-teal", handleClick: () => get().changeCardBackground("Teal") },
      ],

      cardOutline: false,
      toggleCardOutline: () => set((state) => ({ cardOutline: !state.cardOutline })),

      cardOutlineColor: "white",
      changeCardOutlineColor: (color) => set({ cardOutlineColor: color }),
      cardOutlineColors: [
        { name: "White", color: "bg-card-outline-white", handleClick: () => get().changeCardOutlineColor("White") },
        { name: "Light Grey", color: "bg-card-outline-light-grey", handleClick: () => get().changeCardOutlineColor("Light Grey") },
        { name: "Dark Grey", color: "bg-card-outline-dark-grey", handleClick: () => get().changeCardOutlineColor("Dark Grey") },
        { name: "Black", color: "bg-card-outline-black", handleClick: () => get().changeCardOutlineColor("Black") },
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