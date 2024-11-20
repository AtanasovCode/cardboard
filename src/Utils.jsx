

export const getBackgroundStyle = (style) => {
    switch (style) {
        case "Pool Table":
            return "bg-pool-table";
        case "Poker Table":
            return "bg-poker-table";
        case "Luxury Poker":
            return "bg-luxury-poker";
        case "Casino Night":
            return "bg-casino-night";
        case "Luxury Black":
            return "bg-luxury-black";
        case "Dark Felt":
            return "bg-dark-felt";
        case "Pure Black":
            return "bg-black";
        case "Pure Red":
            return "bg-red-800";
        case "Pure Gray":
            return "bg-slate-800";
    }
};

export const getCardBackground = (background) => {
    switch (background) {
        case "Black":
            return "bg-card-black text-white";
        case "White":
            return "bg-card-white text-black";
        case "Dark Grey":
            return "bg-card-dark-gray text-white";
        case "Red":
            return "bg-card-red text-white";
        case "Blue":
            return "bg-card-blue text-white";
        case "Green":
            return "bg-card-green text-white";
        case "Orange":
            return "bg-card-orange";
        case "Purple":
            return "bg-card-purple";
        case "Teal":
            return "bg-card-teal";
    }
};

export const getCardOutlineColor = (color) => {
    switch (color) {
        case "Black":
            return "border-card-outline-black";
        case "White":
            return "border-card-outline-white";
        case "Light Grey":
            return "border-border-card-outline-light-grey";
        case "Dark Grey":
            return "border-card-outline-dark-grey";
        default:
            return "border-card-outline-white";
    }
};