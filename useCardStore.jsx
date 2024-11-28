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
      setSuitColors: (name, colors) => set(() => {
        return {
          suitColor: name,
          clubsColor: colors["clubs"],
          spadesColor: colors["spades"],
          heartsColor: colors["hearts"],
          diamondsColor: colors["diamonds"],
        };
      }),

      // creates a brand new suit color scheme
      createSuit: (name, colors) => {
        const { setSuitColors } = get();

        return {
          name,
          colors,
          handleClick: () => setSuitColors(name, colors),
        };
      },

      suitColors: () => {
        const { createSuit } = get();

        // predefined colors
        const white = "#FFF";
        const black = "#000";
        const night = "#3f3f3f"
        const green = "#34f51e";
        const red = "#f83f52";
        const blue = "#1db6e9";
        const darkGreen = "#07d50e";
        const darkRed = "#e12316";
        const orange = "#f19509";
        const yellow = "#f8e328";

        return (
          [
            createSuit("black", { hearts: black, spades: black, clubs: black, diamonds: black }),
            createSuit("white", { hearts: white, spades: white, clubs: white, diamonds: white }),
            createSuit("night", { hearts: night, spades: night, clubs: night, diamonds: night }),
            createSuit("green", { hearts: green, spades: green, clubs: green, diamonds: green }),
            createSuit("red", { hearts: red, spades: red, clubs: red, diamonds: red }),
            createSuit("blue", { hearts: blue, spades: blue, clubs: blue, diamonds: blue }),
            createSuit("orange", { hearts: orange, spades: orange, clubs: orange, diamonds: orange }),
            createSuit("colorful", { hearts: red, spades: green, clubs: green, diamonds: red }),
            createSuit("colorful-darker", { hearts: darkRed, spades: darkGreen, clubs: darkGreen, diamonds: darkRed }),
            createSuit("black-red", { hearts: red, spades: black, clubs: black, diamonds: red }),
            createSuit("white-blue", { hearts: white, spades: blue, clubs: blue, diamonds: white }),
            createSuit("different", { hearts: red, spades: blue, clubs: green, diamonds: yellow }),
            createSuit("different-v2", { hearts: "#f200ff", spades: "#ba0098", clubs: "#1648ef", diamonds: "#5cc600" }),
          ]
        );
      },

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

      createBackgroundStyle: (name, color) => {
        const { changeBackgroundStyle } = get();

        return {
          name,
          color,
          handleClick: () => changeBackgroundStyle(name),
        };
      },

      backgroundStyles: () => {
        const { createBackgroundStyle } = get();

        return [
          createBackgroundStyle("pool-table-background-style", "bg-pool-table"),
          createBackgroundStyle("poker-table-background-style", "bg-poker-table"),
          createBackgroundStyle("casino-night-background-style", "bg-casino-night"),
          createBackgroundStyle("luxury-black-background-style", "bg-luxury-black"),
          createBackgroundStyle("luxury-poker-background-style", "bg-luxury-poker"),
          createBackgroundStyle("dark-felt-background-style", "bg-dark-felt"),
          createBackgroundStyle("pure-gray-background-style", "bg-slate-800"),
          createBackgroundStyle("pure-red-background-style", "bg-red-800"),
          createBackgroundStyle("pure-blue-background-style", "bg-blue-800"),
          createBackgroundStyle("pure-green-background-style", "bg-green-800"),
          createBackgroundStyle("pure-black-background-style", "bg-black"),
        ];
      },

      getBackgroundStyle: () => {
        const { backgroundStyle, backgroundStyles, } = get();

        const group = backgroundStyles().find((s) => s.name === backgroundStyle);

        return group ? group.color : "";
      },



      cardBackground: "white-card-background",
      changeCardBackground: (style) => set({ cardBackground: style }),

      createCardBackground: (name, color) => {
        const { changeCardBackground } = get();

        return {
          name,
          color,
          handleClick: () => changeCardBackground(name)
        }
      },

      cardBackgrounds: () => {
        const { createCardBackground } = get();

        return [
          createCardBackground("black-card-background", "bg-card-black"),
          createCardBackground("white-card-background", "bg-card-white"),
          createCardBackground("dark-grey-card-background", "bg-card-dark-grey"),
          createCardBackground("red-card-background", "bg-card-red"),
          createCardBackground("blue-card-background", "bg-card-blue"),
          createCardBackground("green-card-background", "bg-card-green"),
          createCardBackground("orange-card-background", "bg-card-orange"),
          createCardBackground("purple-card-background", "bg-card-purple"),
          createCardBackground("teal-card-background", "bg-card-teal"),
        ];
      },

      getCardBackground: () => {
        const { cardBackground, cardBackgrounds } = get();

        const group = cardBackgrounds().find((i) => i.name === cardBackground);

        return group ? group.color : "";
      },

      isCardOutlineEnabled: false,
      toggleCardOutline: () => set((state) => ({ isCardOutlineEnabled: !state.isCardOutlineEnabled })),

      cardOutline: "white-card-outline",
      changeCardOutline: (color) => set({ cardOutline: color }),

      createCardOutline: (name, color, outline) => {
        const { changeCardOutline } = get();

        return {
          name,
          color,
          outline,
          handleClick: () => changeCardOutline(name),
        };
      },

      cardOutlines: () => {
        const { createCardOutline } = get();

        return [
          createCardOutline("white-card-outline", "bg-card-outline-white", "border-card-outline-white"),
          createCardOutline("light-grey-card-outline", "bg-card-outline-light-grey", "border-card-outline-light-grey"),
          createCardOutline("dark-grey-card-outline", "bg-card-outline-dark-grey", "border-card-outline-dark-grey"),
          createCardOutline("black-card-outline", "bg-card-outline-black", "border-card-outline-black"),
          createCardOutline("red-card-outline", "bg-card-outline-red", "border-card-outline-red"),
          createCardOutline("yellow-card-outline", "bg-card-outline-yellow", "border-card-outline-yellow"),
          createCardOutline("blue-card-outline", "bg-card-outline-blue", "border-card-outline-blue"),
          createCardOutline("orange-card-outline", "bg-card-outline-orange", "border-card-outline-orange"),
          createCardOutline("purple-card-outline", "bg-card-outline-purple", "border-card-outline-purple"),
          createCardOutline("orchid-card-outline", "bg-card-outline-orchid", "border-card-outline-orchid"),
        ];
      },

      getCardOutline: () => {
        const { cardOutline, cardOutlines } = get();

        const group = cardOutlines().find((i) => i.name === cardOutline);

        return group ? group.outline : "";
      },

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
        isCardOutlineEnabled: state.isCardOutlineEnabled,
        heartsColor: state.heartsColor,
        spadesColor: state.spadesColor,
        diamondsColor: state.diamondsColor,
        clubsColor: state.clubsColor,
      }),
    }
  )
);