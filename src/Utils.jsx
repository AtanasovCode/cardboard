

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
        default: 
            return "bg-pool-table";
            break;
    }
}