var Vehicule = function(ispremium, modele, moteur, couleur) {
  this.kilometrage = 0;
  this.modele = modele;
  this.moteur = "1.2";
  this.couleur = "Gris";
  this.ispremium = ispremium;
  
  if(ispremium === true) {
    this.moteur = moteur;
    this.couleur = couleur;
  }
  this.voyage = function(num) {
    if(num) {
      this.kilometrage += num;
    } else {
      this.kilometrage = this.kilometrage + 500;
    }
  }
} 


var ferrari = new Vehicule(true, "laFerrari", "V8", "Rouge")
ferrari.voyage(30)

var serie1 = new Vehicule(true, "Serie 1", "1.6", "Grise")

var espace = new Vehicule(false, "Renault Espace", "1.8", "Rose")

var punto = new Vehicule(false, "Punto")

var berlingo = new Vehicule(false, "Berlingo")

