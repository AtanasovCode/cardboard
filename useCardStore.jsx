import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import DiamondsSuit from './src/components/suits/DiamondsSuit';
import HeartsSuit from './src/components/suits/HeartsSuit';
import SpadesSuit from './src/components/suits/SpadesSuit';
import ClubsSuit from './src/components/suits/ClubsSuit';

export const useCardStore = create(
  persist(
    (set, get) => ({
      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
      suits: [
        {
          type: "simple",
          suits: [
            { name: "hearts", suit: <HeartsSuit /> },
            { name: "spades", suit: <SpadesSuit /> },
            { name: "clubs", suit: <ClubsSuit /> },
            { name: "diamonds", suit: <DiamondsSuit /> },
          ],
        }
      ],

      // customization
      suitType: "simple",
      changeSuitType: (style) => set({ suitStyle: style }),
      suitColor: "White",
      changeSuitColor: (color) => set({ suitColor: color }),

      getSuit: (suit) => {
        const { suits, suitType } = get();
        const suitGroup = suits.find((item) => item.type === suitType);
        if (!suitGroup) return null; // Handle case where suitStyle doesn't match any type
        const chosenSuit = suitGroup.suits.find((item) => item.name === suit);
        return chosenSuit ? chosenSuit.suit : null; // Return icon or null if not found
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
        { name: "red-card-outline", color: "bg-card-outline-red", handleClick: () => get().changeCardOutlineColor("red-card-outline") },
        { name: "yellow-card-outline", color: "bg-card-outline-yellow", handleClick: () => get().changeCardOutlineColor("yellow-card-outline") },
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