export const getBackgroundStyle = (style) => {
    switch (style) {
        case "pool-table-background-style":
            return "bg-pool-table";
        case "poker-table-background-style":
            return "bg-poker-table";
        case "luxury-poker-background-style":
            return "bg-luxury-poker";
        case "casino-night-background-style":
            return "bg-casino-night";
        case "luxury-black-background-style":
            return "bg-luxury-black";
        case "dark-felt-background-style":
            return "bg-dark-felt";
        case "pure-black-background-style":
            return "bg-black";
        case "pure-red-background-style":
            return "bg-red-800";
        case "pure-gray-background-style":
            return "bg-slate-800";
    }
};

export const getCardBackground = (background) => {
    switch (background) {
        case "black-card-background":
            return "bg-card-black text-white";
        case "white-card-background":
            return "bg-card-white text-black";
        case "dark-grey-card-background":
            return "bg-card-dark-gray text-white";
        case "red-card-background":
            return "bg-card-red text-white";
        case "blue-card-background":
            return "bg-card-blue text-white";
        case "green-card-background":
            return "bg-card-green text-white";
        case "orange-card-background":
            return "bg-card-orange";
        case "purple-card-background":
            return "bg-card-purple";
        case "teal-card-background":
            return "bg-card-teal";
    }
};

export const getCardOutlineColor = (color) => {
    switch (color) {
        case "black-card-outline":
            return "border-card-outline-black";
        case "white-card-outline":
            return "border-card-outline-white";
        case "light-grey-card-outline":
            return "border-card-outline-light-grey";
        case "dark-grey-card-outline":
            return "border-card-outline-dark-grey";
        case "red-card-outline":
            return "border-card-outline-red";
        case "yellow-card-outline":
            return "border-card-outline-yellow";
    }
};


export const getSuitColor = (color) => {
    switch (color) {
        case "black-suit-color":
            return "#000";
        case "white-suit-color":
            return "#FFF";
    }
}