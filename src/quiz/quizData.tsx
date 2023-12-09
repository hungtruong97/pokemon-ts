export interface Quiz {
  id: number;
  typeOfQuestion: string;
  question: string;
  image?: string;
  options: string[];
  answer: string;
}

export const pokemonQuiz: Quiz[] = [
  {
    id: 1,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Pikachu_Image", // Replace with the actual image URL of Pikachu
    options: ["Raichu", "Pikachu", "Electabuzz", "Jolteon"],
    answer: "Pikachu",
  },
  {
    id: 2,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Nidoking_Image", // Replace with the actual image URL of Nidoking
    options: ["Nidoran", "Nidorino", "Nidoking", "Nidoqueen"],
    answer: "Nidorino",
  },
  {
    id: 3,
    typeOfQuestion: "type",
    question: "What is the type of Gastly?",
    options: ["Ghost/Poison", "Dark/Ghost", "Poison", "Ghost"],
    answer: "Ghost/Poison",
  },
  {
    id: 4,
    typeOfQuestion: "evolution",
    question: "What is the next evolution of Mankey?",
    options: ["Primeape", "Machoke", "Poliwrath", "No evolution"],
    answer: "Primeape",
  },
  {
    id: 5,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Abra_Image", // Replace with the actual image URL of Abra
    options: ["Kadabra", "Alakazam", "Abra", "Mewtwo"],
    answer: "Abra",
  },
  {
    id: 6,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Dragonair_Image", // Replace with the actual image URL of Dragonair
    options: ["Dratini", "Dragonair", "Dragonite", "Gyarados"],
    answer: "Dratini",
  },
  {
    id: 7,
    typeOfQuestion: "move",
    question: "Which one is a move of Poliwhirl?",
    options: ["Water Gun", "Bubble Beam", "Hydro Pump", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 8,
    typeOfQuestion: "type",
    question: "What is the type of Clefairy?",
    options: ["Fairy", "Normal", "Fairy/Psychic", "Normal/Fairy"],
    answer: "Fairy",
  },
  {
    id: 9,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Magnemite_Image", // Replace with the actual image URL of Magnemite
    options: ["Magneton", "Voltorb", "Electrode", "Magnemite"],
    answer: "Magnemite",
  },
  {
    id: 10,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Kingler_Image", // Replace with the actual image URL of Kingler
    options: ["Krabby", "Kingler", "Corphish", "Crawdaunt"],
    answer: "Krabby",
  },
  {
    id: 11,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Scyther_Image", // Replace with the actual image URL of Scyther
    options: ["Scyther", "Beedrill", "Pinsir", "Butterfree"],
    answer: "Scyther",
  },
  {
    id: 12,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Poliwrath_Image", // Replace with the actual image URL of Poliwrath
    options: ["Poliwag", "Poliwhirl", "Poliwrath", "Seaking"],
    answer: "Poliwhirl",
  },
  {
    id: 13,
    typeOfQuestion: "type",
    question: "What is the type of Hitmonlee?",
    options: ["Fighting", "Rock", "Ground", "Steel"],
    answer: "Fighting",
  },
  {
    id: 14,
    typeOfQuestion: "evolution",
    question: "What is the next evolution of Diglett?",
    options: ["Dugtrio", "Diglett", "Geodude", "No evolution"],
    answer: "Dugtrio",
  },
  {
    id: 15,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Electabuzz_Image", // Replace with the actual image URL of Electabuzz
    options: ["Electrode", "Voltorb", "Electabuzz", "Jolteon"],
    answer: "Electabuzz",
  },
  {
    id: 16,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Seaking_Image", // Replace with the actual image URL of Seaking
    options: ["Magikarp", "Goldeen", "Seaking", "Gyarados"],
    answer: "Goldeen",
  },
  {
    id: 17,
    typeOfQuestion: "move",
    question: "Which one is a move of Jynx?",
    options: ["Ice Beam", "Psychic", "Lovely Kiss", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 18,
    typeOfQuestion: "type",
    question: "What is the type of Doduo?",
    options: ["Normal/Flying", "Flying", "Normal", "Ground"],
    answer: "Normal/Flying",
  },
  {
    id: 19,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Muk_Image", // Replace with the actual image URL of Muk
    options: ["Grimer", "Muk", "Gloom", "Weezing"],
    answer: "Muk",
  },
  {
    id: 20,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Marowak_Image", // Replace with the actual image URL of Marowak
    options: ["Cubone", "Marowak", "Kangaskhan", "Sandshrew"],
    answer: "Cubone",
  },
  {
    id: 21,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Koffing_Image", // Replace with the actual image URL of Koffing
    options: ["Weezing", "Grimer", "Koffing", "Muk"],
    answer: "Koffing",
  },
  {
    id: 22,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Vileplume_Image", // Replace with the actual image URL of Vileplume
    options: ["Gloom", "Oddish", "Vileplume", "Bellsprout"],
    answer: "Gloom",
  },
  {
    id: 23,
    typeOfQuestion: "type",
    question: "What is the type of Exeggcute?",
    options: ["Grass/Psychic", "Grass", "Psychic", "Normal"],
    answer: "Grass/Psychic",
  },
  {
    id: 24,
    typeOfQuestion: "evolution",
    question: "What is the next evolution of Machop?",
    options: ["Machoke", "Machamp", "Mankey", "No evolution"],
    answer: "Machoke",
  },
  {
    id: 25,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Cubone_Image", // Replace with the actual image URL of Cubone
    options: ["Marowak", "Cubone", "Kangaskhan", "Sandslash"],
    answer: "Cubone",
  },
  {
    id: 26,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Golbat_Image", // Replace with the actual image URL of Golbat
    options: ["Zubat", "Golbat", "Crobat", "Noctowl"],
    answer: "Zubat",
  },
  {
    id: 27,
    typeOfQuestion: "move",
    question: "Which one is a move of Vulpix?",
    options: ["Flamethrower", "Ember", "Fire Spin", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 28,
    typeOfQuestion: "type",
    question: "What is the type of Meowth?",
    options: ["Normal", "Dark", "Psychic", "Steel"],
    answer: "Normal",
  },
  {
    id: 29,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Clefable_Image", // Replace with the actual image URL of Clefable
    options: ["Clefairy", "Clefable", "Jigglypuff", "Wigglytuff"],
    answer: "Clefable",
  },
  {
    id: 30,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Blastoise_Image", // Replace with the actual image URL of Blastoise
    options: ["Squirtle", "Wartortle", "Blastoise", "Lapras"],
    answer: "Wartortle",
  },
  {
    id: 31,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Farfetchd_Image", // Replace with the actual image URL of Farfetch'd
    options: ["Farfetch'd", "Spearow", "Pidgeotto", "Doduo"],
    answer: "Farfetch'd",
  },
  {
    id: 32,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Cloyster_Image", // Replace with the actual image URL of Cloyster
    options: ["Shellder", "Krabby", "Cloyster", "Lapras"],
    answer: "Shellder",
  },
  {
    id: 33,
    typeOfQuestion: "type",
    question: "What is the type of Lickitung?",
    options: ["Normal", "Fairy", "Psychic", "Fighting"],
    answer: "Normal",
  },
  {
    id: 34,
    typeOfQuestion: "evolution",
    question: "What is the next evolution of Rhyhorn?",
    options: ["Rhydon", "Rhyperior", "No evolution", "Nidoking"],
    answer: "Rhydon",
  },
  {
    id: 35,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Chancy_Image", // Replace with the actual image URL of Chansey
    options: ["Clefable", "Wigglytuff", "Blissey", "Chansey"],
    answer: "Chansey",
  },
  {
    id: 36,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Dewgong_Image", // Replace with the actual image URL of Dewgong
    options: ["Seel", "Dewgong", "Lapras", "Seaking"],
    answer: "Seel",
  },
  {
    id: 37,
    typeOfQuestion: "move",
    question: "Which one is a move of Starmie?",
    options: ["Hydro Pump", "Psychic", "Swift", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 38,
    typeOfQuestion: "type",
    question: "What is the type of Mr. Mime?",
    options: ["Psychic/Fairy", "Normal", "Psychic", "Fairy"],
    answer: "Psychic/Fairy",
  },
  {
    id: 39,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Scyther_Image", // Replace with the actual image URL of Scyther
    options: ["Scyther", "Beedrill", "Kabutops", "Pinsir"],
    answer: "Scyther",
  },
  {
    id: 40,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Kingler_Image", // Replace with the actual image URL of Kingler
    options: ["Krabby", "Kingler", "Corphish", "Crawdaunt"],
    answer: "Krabby",
  },
  {
    id: 41,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Pinsir_Image", // Replace with the actual image URL of Pinsir
    options: ["Scyther", "Pinsir", "Heracross", "Beedrill"],
    answer: "Pinsir",
  },
  {
    id: 42,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Alakazam_Image", // Replace with the actual image URL of Alakazam
    options: ["Kadabra", "Abra", "Alakazam", "Machop"],
    answer: "Kadabra",
  },
  {
    id: 43,
    typeOfQuestion: "type",
    question: "What is the type of Magnemite?",
    options: ["Electric/Steel", "Electric", "Steel", "Electric/Rock"],
    answer: "Electric/Steel",
  },
  {
    id: 44,
    typeOfQuestion: "evolution",
    question: "What is the next evolution of Doduo?",
    options: ["Dodrio", "Doduo", "Pidgeot", "No evolution"],
    answer: "Dodrio",
  },
  {
    id: 45,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Growlithe_Image", // Replace with the actual image URL of Growlithe
    options: ["Arcanine", "Growlithe", "Vulpix", "Charmander"],
    answer: "Growlithe",
  },
  {
    id: 46,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Nidoqueen_Image", // Replace with the actual image URL of Nidoqueen
    options: ["Nidorina", "Nidoran♀", "Nidoqueen", "Nidoran♂"],
    answer: "Nidorina",
  },
  {
    id: 47,
    typeOfQuestion: "move",
    question: "Which one is a move of Electabuzz?",
    options: ["Thunder Punch", "Thunderbolt", "Thunder", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 48,
    typeOfQuestion: "type",
    question: "What is the type of Parasect?",
    options: ["Bug/Grass", "Bug/Poison", "Grass/Poison", "Bug/Ground"],
    answer: "Bug/Grass",
  },
  {
    id: 49,
    typeOfQuestion: "name",
    question: "What is the name of this Pokémon?",
    image: "URL_of_Machamp_Image", // Replace with the actual image URL of Machamp
    options: ["Machoke", "Machamp", "Machop", "Hitmonlee"],
    answer: "Machamp",
  },
  {
    id: 50,
    typeOfQuestion: "pastSpecies",
    question: "What is the past species of this Pokémon?",
    image: "URL_of_Golem_Image", // Replace with the actual image URL of Golem
    options: ["Geodude", "Graveler", "Golem", "Onix"],
    answer: "Graveler",
  },
];
