// Donner la taille d'une chaîne de caractères
let stringSize = function(text){
    return text.length;
};

// Remplacer le premier 'e' de la chaîne par un espace
let replaceString = function(text){
    let result = text.replace('e', ' ');
    return result;
};

// Concaténer deux chaînes de caractères
let concatString = function(string1, string2){
    return string1 + ' ' + string2;
}

// Afficher le 5ème élément de la chaîne de caractères
let fifthChar = function(text){
    return text.charAt(4);
}

// Afficher les 9 premiers caractères d'une chaîne de caractères
let ninthFirstChar = function(text){
    return text.substr(0, 9);
}

// Mettre en majuscule une chaîne de caractères
let stringToUpp = function(text){
    return text.toUpperCase();
}

// Mettre en minuscule une chaîne de caractères
let stringToLow = function(text){
    return text.toLowerCase();
}

// Supprimer les espaces avant et après une chaîne
let spacesDeleted = function(text){
    return text.trim();
}

// Afficher true si le paramètre d'entrée de la fonction est de type string
let displayTrue = function(text){
    if(typeof text === 'string'){
        return true;
    }
}

// Afficher l'extension d'un fichier
let displayFileExtension = function(text){
    return text.split('.').pop();
}

// Compter le nombre d'espaces dans une chaîne
let countSpaces = function(text){
    return text.split(' ').length - 1;
}

// Inverser une chaîne de caractères
let reverseString = function(text){
    return text.split('').reverse('').join('');
}