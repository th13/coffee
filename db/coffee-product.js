var db = require('../db').get();
var _ = require('lodash');

var coffeeProducts = [
  [
    "el hijo",
    "vienna",
    33.73
  ],
  [
    "el ascensor",
    "cinnamon",
    18.21
  ],
  [
    "la sopa",
    "Light-city",
    19.21
  ],
  [
    "el petirrojo",
    "city",
    28.95
  ],
  [
    "la tapa",
    "continental",
    33.13
  ],
  [
    "el basurero",
    "Half-city",
    25.18
  ],
  [
    "la pasteleria",
    "italian",
    23.81
  ],
  [
    "el cactus",
    "Light-city",
    20.23
  ],
  [
    "las medias",
    "italian",
    3.99
  ],
  [
    "el tio",
    "french",
    21.43
  ],
  [
    "el destapador",
    "",
    33.17
  ],
  [
    "la tina",
    "italian",
    4.23
  ],
  [
    "el sueter",
    "Full-city",
    11.78
  ],
  [
    "el hermana",
    "vienna",
    15.14
  ],
  [
    "el edificio",
    "Full-city",
    30.94
  ],
  [
    "la guitarra",
    "city",
    37.51
  ],
  [
    "la cocina",
    "spanish",
    16.89
  ],
  [
    "el sombrero",
    "breakfast",
    20.60
  ],
  [
    "la lagartija",
    "Half-city",
    27.51
  ],
  [
    "bronceadora",
    "continental",
    30.18
  ],
  [
    "el basurero",
    "Full-city",
    38.70
  ],
  [
    "la comida",
    "regular",
    16.49
  ],
  [
    "el menu",
    "city",
    12.91
  ],
  [
    "la temperatura",
    "breakfast",
    7.85
  ],
  [
    "el huracan",
    "Half-city",
    11.66
  ],
  [
    "el pavo",
    "Full-city",
    12.90
  ],
  [
    "el tio",
    "Half-city",
    32.57
  ],
  [
    "los guantes",
    "spanish",
    30.71
  ],
  [
    "el sombrero",
    "regular",
    13.60
  ],
  [
    "la cuna",
    "breakfast",
    28.64
  ],
  [
    "el salmon",
    "breakfast",
    19.71
  ],
  [
    "la camisa",
    "spanish",
    11.51
  ],
  [
    "el destapador",
    "Full-city",
    35.51
  ],
  [
    "el sombrero",
    "Light-city",
    20.31
  ],
  [
    "la mostaza",
    "Half-city",
    7.24
  ],
  [
    "el pavo",
    "Half-city",
    28.30
  ],
  [
    "el tigre",
    "Full-city",
    33.23
  ],
  [
    "el cuarto",
    "italian",
    19.54
  ],
  [
    "la pina",
    "french",
    7.08
  ],
  [
    "el cactus",
    "vienna",
    9.07
  ],
  [
    "el salmon",
    "espresso",
    15.61
  ],
  [
    "la cobija",
    "regular",
    33.51
  ],
  [
    "el tallo",
    "Half-city",
    38.90
  ],
  [
    "los guantes",
    "french",
    35.71
  ],
  [
    "de servicios",
    "Full-city",
    31.57
  ],
  [
    "la mesa",
    "vienna",
    36.60
  ],
  [
    "el claxon",
    "Light-city",
    17.21
  ],
  [
    "la mostaza",
    "espresso",
    8.66
  ],
  [
    "el dulce",
    "city",
    33.01
  ],
  [
    "la tapa",
    "italian",
    4.96
  ],
  [
    "el tomate",
    "spanish",
    9.87
  ],
  [
    "la rosa",
    "vienna",
    13.18
  ],
  [
    "el arbol",
    "Half-city",
    11.77
  ],
  [
    "la ardillita",
    "continental",
    11.51
  ],
  [
    "el lavaplatos",
    "espresso",
    24.01
  ],
  [
    "el cocodrilo",
    "italian",
    27.59
  ],
  [
    "el yerno",
    "continental",
    7.70
  ],
  [
    "el abrigo",
    "italian",
    35.01
  ],
  [
    "el mosuito",
    "city",
    17.08
  ],
  [
    "la pera",
    "city",
    25.28
  ],
  [
    "el formon",
    "spanish",
    25.45
  ],
  [
    "la pina",
    "continental",
    14.26
  ],
  [
    "el aguila",
    "espresso",
    29.00
  ],
  [
    "el azucar",
    "vienna",
    12.10
  ],
  [
    "la servilleta",
    "continental",
    22.13
  ],
  [
    "la abuela",
    "spanish",
    36.77
  ],
  [
    "el tulipan",
    "Light-city",
    14.01
  ],
  [
    "la comida",
    "Light-city",
    33.51
  ],
  [
    "el equipo",
    "Light-city",
    39.41
  ],
  [
    "morado",
    "french",
    23.91
  ],
  [
    "el cinturon",
    "espresso",
    27.31
  ],
  [
    "verde",
    "espresso",
    4.17
  ],
  [
    "la orquidea",
    "cinnamon",
    9.56
  ],
  [
    "los guantes",
    "Full-city",
    28.15
  ],
  [
    "el lavaplatos",
    "continental",
    39.71
  ],
  [
    "la guitarra",
    "continental",
    24.86
  ],
  [
    "la tapa",
    "Light-city",
    23.67
  ],
  [
    "la crema",
    "french",
    22.30
  ],
  [
    "la cinta",
    "espresso",
    32.79
  ],
  [
    "el hipo",
    "italian",
    23.64
  ],
  [
    "las medias",
    "cinnamon",
    31.66
  ],
  [
    "la cuna",
    "regular",
    26.30
  ],
  [
    "la crema",
    "Light-city",
    14.54
  ],
  [
    "la ensalada",
    "Half-city",
    13.43
  ],
  [
    "el tulipan",
    "city",
    17.85
  ],
  [
    "el ascensor",
    "breakfast",
    25.37
  ],
  [
    "la cocina",
    "espresso",
    6.55
  ],
  [
    "las medias",
    "spanish",
    15.03
  ],
  [
    "la lechuga",
    "regular",
    30.51
  ],
  [
    "la tapa",
    "regular",
    11.44
  ],
  [
    "la tapa",
    "spanish",
    13.73
  ],
  [
    "el horno",
    "french",
    7.20
  ],
  [
    "la sopa",
    "breakfast",
    9.59
  ],
  [
    "bronceadora",
    "spanish",
    16.98
  ],
  [
    "la sopa",
    "french",
    18.01
  ],
  [
    "el tigre",
    "breakfast",
    35.76
  ],
  [
    "el edificio",
    "french",
    21.53
  ],
  [
    "la esponja",
    "italian",
    15.85
  ],
  [
    "el colgador",
    "italian",
    39.81
  ],
  [
    "el mosuito",
    "Full-city",
    10.49
  ],
  [
    "el sillon",
    "city",
    30.36
  ],
  [
    "la pescaderia",
    "Full-city",
    39.44
  ],
  [
    "el papa",
    "city",
    35.93
  ],
  [
    "el limon",
    "cinnamon",
    35.04
  ],
  [
    "los apartos",
    "italian",
    26.75
  ],
  [
    "el holpog",
    "regular",
    16.45
  ],
  [
    "la mermelada",
    "Half-city",
    5.44
  ],
  [
    "la tortuga",
    "regular",
    8.15
  ],
  [
    "el oso",
    "Half-city",
    12.88
  ],
  [
    "los zapatos",
    "city",
    6.67
  ],
  [
    "la pantimedia",
    "espresso",
    39.14
  ],
  [
    "los calcetines",
    "espresso",
    15.23
  ],
  [
    "la cuchara",
    "continental",
    33.87
  ],
  [
    "",
    "Half-city",
    30.85
  ],
  [
    "el holpog",
    "espresso",
    23.43
  ],
  [
    "la sierra",
    "espresso",
    27.76
  ],
  [
    "la trompa",
    "spanish",
    28.63
  ],
  [
    "el bisonte",
    "Light-city",
    36.61
  ],
  [
    "el papa",
    "city",
    31.10
  ],
  [
    "el helado",
    "regular",
    32.99
  ],
  [
    "la spalomita",
    "espresso",
    18.13
  ],
  [
    "la ardilla",
    "italian",
    9.95
  ],
  [
    "la almohada",
    "french",
    37.17
  ],
  [
    "la lavadora",
    "italian",
    13.60
  ],
  [
    "la carnederes",
    "Half-city",
    23.41
  ],
  [
    "el jugo",
    "french",
    39.81
  ],
  [
    "el gusano",
    "espresso",
    21.11
  ],
  [
    "la ventana",
    "Light-city",
    33.54
  ],
  [
    "la familia",
    "Half-city",
    13.01
  ],
  [
    "la pasa",
    "Full-city",
    25.40
  ],
  [
    "el microon",
    "Light-city",
    17.84
  ],
  [
    "la gasolinera",
    "breakfast",
    8.44
  ],
  [
    "la lateria",
    "Full-city",
    13.27
  ],
  [
    "natacion",
    "Half-city",
    23.27
  ],
  [
    "el albaricoque",
    "spanish",
    32.65
  ],
  [
    "el chofer",
    "espresso",
    26.33
  ],
  [
    "el aubus",
    "Full-city",
    6.79
  ],
  [
    "la pantimedia",
    "italian",
    36.61
  ],
  [
    "el jabon",
    "city",
    31.78
  ],
  [
    "las papas",
    "Half-city",
    25.31
  ],
  [
    "el postre",
    "italian",
    32.99
  ],
  [
    "el microon",
    "spanish",
    20.75
  ],
  [
    "el arbusto",
    "continental",
    32.14
  ],
  [
    "la jobonera",
    "city",
    25.63
  ],
  [
    "la ventana",
    "continental",
    24.07
  ],
  [
    "el queso",
    "Light-city",
    16.61
  ],
  [
    "el queso",
    "french",
    14.31
  ],
  [
    "la lateria",
    "espresso",
    11.79
  ],
  [
    "el termometro",
    "vienna",
    19.60
  ],
  [
    "la miel",
    "Half-city",
    20.20
  ],
  [
    "el resaura",
    "Half-city",
    9.66
  ],
  [
    "la familia",
    "vienna",
    5.93
  ],
  [
    "el jabon",
    "continental",
    5.75
  ],
  [
    "los calcetines",
    "spanish",
    24.75
  ],
  [
    "el bano",
    "Half-city",
    36.40
  ],
  [
    "la cebra",
    "continental",
    13.73
  ],
  [
    "el jugo",
    "Light-city",
    33.21
  ],
  [
    "el chofer",
    "regular",
    4.33
  ],
  [
    "la comoda",
    "spanish",
    35.49
  ],
  [
    "el bano",
    "Light-city",
    13.03
  ],
  [
    "la mantequilla",
    "italian",
    20.38
  ],
  [
    "la carnederes",
    "Half-city",
    25.79
  ],
  [
    "el helado",
    "Half-city",
    11.86
  ],
  [
    "la trucha",
    "regular",
    26.45
  ],
  [
    "el alce",
    "Half-city",
    35.21
  ],
  [
    "los apartos",
    "spanish",
    28.91
  ],
  [
    "la jobonera",
    "italian",
    19.10
  ],
  [
    "el mani",
    "breakfast",
    6.26
  ],
  [
    "los apartos",
    "french",
    15.69
  ],
  [
    "la pasa",
    "continental",
    25.69
  ],
  [
    "la orilla",
    "Half-city",
    3.91
  ],
  [
    "los apartos",
    "Half-city",
    28.23
  ],
  [
    "la carnederes",
    "vienna",
    17.00
  ],
  [
    "el bisonte",
    "cinnamon",
    37.16
  ],
  [
    "los muebles",
    "regular",
    30.71
  ],
  [
    "el jugo",
    "Light-city",
    17.73
  ],
  [
    "la almohada",
    "italian",
    13.61
  ],
  [
    "el piano",
    "continental",
    15.09
  ],
  [
    "la hija",
    "regular",
    15.00
  ],
  [
    "",
    "vienna",
    25.04
  ],
  [
    "ela lampara",
    "cinnamon",
    26.44
  ],
  [
    "el termometro",
    "continental",
    15.07
  ],
  [
    "los apartos",
    "cinnamon",
    25.29
  ],
  [
    "la pescaderia",
    "breakfast",
    25.85
  ],
  [
    "el grillo",
    "regular",
    5.80
  ],
  [
    "ela lampara",
    "espresso",
    20.95
  ],
  [
    "el jabon",
    "continental",
    38.78
  ],
  [
    "el albaricoque",
    "espresso",
    36.93
  ],
  [
    "la pasa",
    "vienna",
    19.86
  ],
  [
    "ela lampara",
    "italian",
    15.20
  ],
  [
    "la almohada",
    "Half-city",
    37.21
  ],
  [
    "el mani",
    "cinnamon",
    27.28
  ],
  [
    "el postre",
    "Full-city",
    15.98
  ],
  [
    "los apartos",
    "Full-city",
    3.21
  ],
  [
    "la comoda",
    "italian",
    20.21
  ],
  [
    "el tenedor",
    "french",
    38.41
  ],
  [
    "las gafas",
    "regular",
    5.80
  ],
  [
    "el puerco",
    "Half-city",
    8.13
  ],
  [
    "la pescaderia",
    "Full-city",
    16.91
  ],
  [
    "la trompeta",
    "regular",
    19.94
  ]
];

db.serialize(function() {
  var statement = db.prepare('INSERT INTO CoffeeProduct VALUES (?, ?, ?, ?)');
  var i = 0;
  _.each(coffeeProducts, function(coffee) {
    statement.run(i, coffee[0], coffee[1], coffee[2]);
    i++;
  });

  statement.finalize();
});

db.close();
