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

      getSuit: (suit) => {
        const { suits, suitType } = get();
        const suitGroup = suits.find((item) => item.type === suitType);
        if (!suitGroup) return null; // Handle case where suitStyle doesn't match any type
        const chosenSuit = suitGroup.suits.find((item) => item.name === suit);
        return chosenSuit ? chosenSuit.suit : null; // Return icon or null if not found
      },

      // suit colors
      spadesColor: "#000",
      changeSpadesColor: (color) => set({ SpadesColor: color }),
      heartsColor: "#000",
      changeHeartsColor: (color) => set({ HeartsColor: color }),
      diamondsColor: "#000",
      changeDiamondsColor: (color) => set({ diamondsColor: color }),
      clubsColor: "#000",
      changeClubsColor: (color) => set({ clubsColor: color }),

      setAllSuitColors: (color) =>
        set({
          heartsColor: color,
          diamondsColor: color,
          spadesColor: color,
          clubsColor: color,
        }),

      suitColor: "all-black",
      setSuitColors: (style) => set(() => {
        switch (style) {
          case "all-black":
            return {
              suitColor: "all-black",
              clubsColor: "#000",
              spadesColor: "#000",
              heartsColor: "#000",
              diamondsColor: "#000",
            };
            break;
          case "all-white":
            return {
              suitColor: "all-white",
              clubsColor: "#fff",
              spadesColor: "#fff",
              heartsColor: "#fff",
              diamondsColor: "#fff",
            };
            break;
          case "all-blue":
            return {
              suitColor: "all-blue",
              clubsColor: "#112ff0",
              spadesColor: "#112ff0",
              heartsColor: "#112ff0",
              diamondsColor: "#112ff0",
            };
          case "all-red":
            return {
              suitColor: "all-red",
              clubsColor: "#fc2a2a",
              spadesColor: "#fc2a2a",
              heartsColor: "#fc2a2a",
              diamondsColor: "#fc2a2a",
            };
          case "all-yellow":
            return {
              suitColor: "all-yellow",
              clubsColor: "#eae705",
              spadesColor: "#eae705",
              heartsColor: "#eae705",
              diamondsColor: "#eae705",
            };
          case "colorful":
            return {
              suitColor: "colorful",
              clubsColor: "#00d72b",
              spadesColor: "#00d72b",
              heartsColor: "#fc2a2a",
              diamondsColor: "#fc2a2a",
            };
          case "colorful-darker":
            return {
              suitColor: "colorful-darker",
              clubsColor: "#01931e",
              spadesColor: "#01931e",
              heartsColor: "#b70505",
              diamondsColor: "#b70505",
            };
          case "all-different":
            return {
              suitColor: "all-different",
              clubsColor: "#00d72b",
              spadesColor: "#111cf8",
              heartsColor: "#fc2a2a",
              diamondsColor: "#eae705",
            };
          case "all-different-alternative":
            return {
              suitColor: "all-different-alternative",
              clubsColor: "#4aff25",
              spadesColor: "#4b7dfb",
              heartsColor: "#fc4141",
              diamondsColor: "#f420c2",
            };
          default:
            return {}; // No state change for unrecognized styles
        }
      }),


      suitColors: [
        {
          name: "all-black",
          colors: { hearts: "#000", spades: "#000", clubs: "#000", diamonds: "#000" },
          handleClick: () => get().setSuitColors("all-black")
        },
        {
          name: "all-white",
          colors: { hearts: "#FFF", spades: "#FFF", clubs: "#FFF", diamonds: "#FFF" },
          handleClick: () => get().setSuitColors("all-white")
        },
        {
          name: "all-blue",
          colors: { hearts: "#112ff0", spades: "#112ff0", clubs: "#112ff0", diamonds: "#112ff0" },
          handleClick: () => get().setSuitColors("all-blue")
        },
        {
          name: "all-red",
          colors: { hearts: "#fc2a2a", spades: "#fc2a2a", clubs: "#fc2a2a", diamonds: "#fc2a2a" },
          handleClick: () => get().setSuitColors("all-red")
        },
        {
          name: "all-yellow",
          colors: { hearts: "#eae705", spades: "#eae705", clubs: "#eae705", diamonds: "#eae705" },
          handleClick: () => get().setSuitColors("all-yellow")
        },
        {
          name: "colorful",
          colors: { hearts: "#fc2a2a", spades: "#00d72b", clubs: "#00d72b", diamonds: "#fc2a2a" },
          handleClick: () => get().setSuitColors("colorful")
        },
        {
          name: "colorful-darker",
          colors: { hearts: "#b70505", spades: "#01931e", clubs: "#01931e", diamonds: "#b70505" },
          handleClick: () => get().setSuitColors("colorful-darker")
        },
        {
          name: "all-different",
          colors: { hearts: "#fc2a2a", spades: "#111cf8", clubs: "#00d72b", diamonds: "#eae705" },
          handleClick: () => get().setSuitColors("all-different")
        },
        {
          name: "all-different-alternative",
          colors: { hearts: "#fc4141", spades: "#4b7dfb", clubs: "#4aff25", diamonds: "#f420c2" },
          handleClick: () => get().setSuitColors("all-different-alternative")
        },
      ],

      getSuitColor: (suit) => {
        const { heartsColor, spadesColor, diamondsColor, clubsColor } = get();

        switch (suit) {
          case "hearts":
            return heartsColor;
          case "spades":
            return spadesColor;
          case "clubs":
            return clubsColor;
          case "diamonds":
            return diamondsColor;
        };
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
        { name: "blue-card-outline", color: "bg-card-outline-blue", handleClick: () => get().changeCardOutlineColor("blue-card-outline") },
        { name: "orange-card-outline", color: "bg-card-outline-orange", handleClick: () => get().changeCardOutlineColor("orange-card-outline") },
        { name: "purple-card-outline", color: "bg-card-outline-purple", handleClick: () => get().changeCardOutlineColor("purple-card-outline") },
        { name: "orchid-card-outline", color: "bg-card-outline-orchid", handleClick: () => get().changeCardOutlineColor("orchid-card-outline") },
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
        heartsColor: state.heartsColor,
        spadesColor: state.spadesColor,
        diamondsColor: state.diamondsColor,
        clubsColor: state.clubsColor,
      }),
    }
  )
);