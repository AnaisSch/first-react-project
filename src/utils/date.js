export const formatDate = (date) => { // Export qui a pour but d'être multiple.
    if (!date) {
        return "";
    }
    
    let parsedDate = date;

    if (typeof date === "string") {
        parsedDate = new Date(date);
    }

    return parsedDate.getDate() + "/" + (parsedDate.getMonth() + 1) + "/" + parsedDate.getFullYear();
    // Concaténation + "/" pour préciser qu'on veut que se soit rendu en string.
};