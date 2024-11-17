

export const getBackgroundStyle = (style) => {
    switch (style) {
        case "Pool Table":
            return "bg-pool-table";
            break;
        case "Poker Table":
            return "bg-poker-table";
            break;
        case "Luxury Poker":
            return "bg-luxury-poker";
            break;
        case "Casino Night":
            return "bg-casino-night";
            break;
        case "Green Gold":
            return "bg-green-gold";
            break;
        case "Dark Felt":
            return "bg-dark-felt";
            break;
        case "Pure Black":
            return "bg-slate-900";
            break;
        case "Pure Red":
            return "bg-red-800";
            break;
        case "Pure Gray":
            return "bg-slate-800";
            break;
        default: 
            return "bg-pool-table";
            break;
    }
};

export const getCardBackground = (background) => {
    switch (background) {
        case "Black":
            return "bg-card-black text-white";
            break;
        case "White":
            return "bg-card-white text-black";
            break;
        case "Dark Grey":
            return "bg-card-dark-gray text-white";
            break;
        case "Red":
            return "bg-card-red text-white";
            break;
        case "Blue":
            return "bg-card-blue text-white";
            break;
        case "Green":
            return "bg-card-green text-white";
            break;
        case "Orange":
            return "bg-card-orange";
            break;
        case "Purple":
            return "bg-card-purple";
            break;
        case "Teal":
            return "bg-card-teal";
            break;
        default:
            return "bg-card-white text-black";
            break;
    }
};