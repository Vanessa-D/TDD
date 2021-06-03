describe('Les chaines de caractères : ', function(){//on décrit la fonctionnalité
    // "it" indique le comportement attendu
    it('Donner la taille d\'une chaîne de caractères', function(){
      // on crée un exemple
      let result = stringSize('Ce texte a une certaine taille');
      // on donne le résultat attendu
      expect(result).toEqual(30);
    });

    it('Remplacer le premier e d\'une chaîne par un espace', function() {
      let result = replaceString('Ce texte a une certaine taille');
      expect(result).toEqual('C  texte a une certaine taille');
    });
    
    it('Concaténer deux chaînes de caractères', function(){
      let result = concatString('Hello', 'world!');
      expect(result).toContain('Hello world!');
    });
    
    it('Afficher le cinquième caractère d\'une chaîne', function(){
      let result = fifthChar('T\'as compris ou bien ?');
      expect(result).toMatch(' ');
    });
    
    it('Afficher les 9 premiers caractères d\'une chaîne de caractère', function(){
      let result = ninthFirstChar('What-The-Fuck');
      expect(result).toMatch('What-The-');
    });
    
    it('Mettre en majuscule la chaîne', function(){
      let result = stringToUpp('bla bla bla');
      expect(result).toMatch('BLA BLA BLA');
    });
    
    it('Mettre en minuscule la chaîne', function(){
      let result = stringToLow('BLA BLA bla');
      expect(result).toMatch('bla bla bla');
    });

    it('Supprimer les espaces avant et après la chaîne', function(){
      let result = spacesDeleted(' Helloooo ');
      expect(result).toMatch('Helloooo');
    });

    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function(){
      let result = displayTrue('String');
      expect(result).toEqual(true);
    });

    it('Afficher l\'extension du fichier', function(){
      let result = displayFileExtension('tdd.zip');
      expect(result).toEqual('zip');
    });

    it('Compter le nombre d\'espaces dans la chaîne', function () {
      let result = countSpaces('Un texte à espaces');
      expect(result).toEqual(3);
    });

    it('Inverser une chaîne de caractères', function () {
      let result = reverseString('Hello');
      expect(result).toMatch('olleH');
    });
})