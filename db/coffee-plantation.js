var db = require('../db').get();
var _ = require('lodash');

var cps = [
  [
    "82700",
    "(356) 334-0788",
    "Sencillo Centro de Cafe ",
    "P.O. Box 938, 1271 Diam. Ave"
  ],
  [
    "91821",
    "(749) 491-6630",
    "El Bulto Plantacion de Cafe ",
    "419-5008 Dolor St."
  ],
  [
    "88678",
    "(145) 687-1072",
    "La Tarde Productos ",
    "490-1555 Luctus Avenue"
  ],
  [
    "12386",
    "(283) 516-5110",
    "La Taza Produccion de Cafe ",
    "Ap #928-9645 Ligula. Road"
  ],
  [
    "69606",
    "(475) 237-4119",
    "Encima Centro de Cafe ",
    "101-2922 Ac Av."
  ],
  [
    "44713",
    "(521) 109-1890",
    "El Siglo Plantacion ",
    "6350 Cubilia Avenue"
  ],
  [
    "33362",
    "(112) 126-6146",
    "Rico Cafe del Fabricante ",
    "P.O. Box 655, 8045 Sapien, Avenue"
  ],
  [
    "52292",
    "(444) 788-1621",
    "Abierto Compania ",
    "P.O. Box 388, 3864 Dolor. Rd."
  ],
  [
    "92790",
    "(286) 636-1906",
    "La Lluvia Compania ",
    "P.O. Box 151, 105 Nunc Road"
  ],
  [
    "31822",
    "(507) 473-5367",
    "El Plano Plantacion ",
    "P.O. Box 427, 1080 Tincidunt, Av."
  ],
  [
    "92478",
    "(677) 262-3648",
    "La Maleta Produccion de Cafe ",
    "986-1805 Feugiat Ave"
  ],
  [
    "42125",
    "(717) 680-8414",
    "La Cena Centro de Cafe ",
    "P.O. Box 843, 9008 Cras Av."
  ],
  [
    "67668",
    "(645) 564-7779",
    "Empezar Productos ",
    "466-208 Mus. Road"
  ],
  [
    "28002",
    "(780) 613-4345",
    "El Plano Plantacion ",
    "961-6792 Montes, St."
  ],
  [
    "85171",
    "(415) 546-3702",
    "Sencillo Centro de Cafe ",
    "697-8835 Vitae St."
  ],
  [
    "57894",
    "(610) 857-2960",
    "La Boca Plantacion de Cafe ",
    "P.O. Box 447, 6904 Nascetur Road"
  ],
  [
    "87368",
    "(758) 281-9796",
    "La Parada Compania ",
    "449-1607 Nulla St."
  ],
  [
    "08788",
    "(848) 130-0283",
    "La Senora Produccion de Cafe ",
    "Ap #757-989 Scelerisque St."
  ],
  [
    "38882",
    "(601) 688-8266",
    "El Siglo Plantacion ",
    "826-9294 Leo, Street"
  ],
  [
    "12342",
    "(878) 510-8200",
    "EL Frente Plantacion ",
    "849-7520 Montes, Avenue"
  ],
  [
    "79679",
    "(846) 200-1307",
    "El Saco Plantacion de Cafe ",
    "Ap #559-7152 Lacus. Road"
  ],
  [
    "07869",
    "(403) 601-8974",
    "El Segundo Cafe del Fabricante ",
    "979-3739 Magna. Ave"
  ],
  [
    "30693",
    "(977) 131-4079",
    "La Plaza Cafe del Fabricante ",
    "Ap #620-9269 Dictum St."
  ],
  [
    "11264",
    "(183) 829-8087",
    "El Partido Productos ",
    "Ap #769-1653 Eu Rd."
  ],
  [
    "86981",
    "(960) 219-7279",
    "El Fin Centro de Cafe ",
    "P.O. Box 286, 7158 Leo. Street"
  ],
  [
    "43613",
    "(910) 887-2503",
    "Rapido Compania ",
    "P.O. Box 168, 469 Molestie Street"
  ],
  [
    "04096",
    "(310) 497-7545",
    "El Regalo Productos ",
    "Ap #892-3670 Euismod Avenue"
  ],
  [
    "49786",
    "(237) 592-7542",
    "El Segundo Cafe del Fabricante ",
    "638-9925 Vel, Rd."
  ],
  [
    "44871",
    "(592) 522-9202",
    "La Parte Centro de Cafe ",
    "Ap #389-3668 A, Rd."
  ],
  [
    "31864",
    "(314) 181-6801",
    "La Senora Produccion de Cafe ",
    "123-9705 Quisque Ave"
  ],
  [
    "25723",
    "(628) 999-8552",
    "Las Tapas Centro de Cafe ",
    "7562 Luctus, St."
  ],
  [
    "30809",
    "(707) 393-0983",
    "Pasar Produccion de Cafe ",
    "727-6698 Interdum Rd."
  ],
  [
    "51600",
    "(442) 531-6314",
    "",
    "P.O. Box 339, 169 Etiam Rd."
  ],
  [
    "88820",
    "(766) 982-0219",
    "La Familia Centro de Cafe ",
    "480-5715 Magnis Street"
  ],
  [
    "40061",
    "(726) 156-4407",
    "El Servicio Compania ",
    "712-2512 Congue Street"
  ],
  [
    "99681",
    "(248) 708-1964",
    "El Catarro Plantacion de Cafe ",
    "429-4561 Dui. Avenue"
  ],
  [
    "86401",
    "(125) 644-2502",
    "El Saco Plantacion de Cafe ",
    "Ap #630-262 Aliquam Road"
  ],
  [
    "35125",
    "(223) 400-9386",
    "Casi Plantacion de Cafe ",
    "7881 Fusce Ave"
  ],
  [
    "61787",
    "(880) 147-2832",
    "El Edad Compania ",
    "771-2011 Eu St."
  ],
  [
    "69873",
    "(298) 906-3545",
    "La Orden Produccion de Cafe ",
    "Ap #169-4996 In Street"
  ],
  [
    "12144",
    "(166) 132-1037",
    "La Oficina Cafe del Fabricante ",
    "4540 Integer Street"
  ],
  [
    "51529",
    "(931) 522-2778",
    "El Edad Compania ",
    "Ap #134-4848 Arcu Av."
  ],
  [
    "68249",
    "(553) 969-9011",
    "La Accion Centro de Cafe ",
    "P.O. Box 609, 8350 Semper Rd."
  ],
  [
    "80000",
    "(960) 189-3338",
    "La Razon Cafe del Fabricante ",
    "P.O. Box 976, 4441 Sit Av."
  ],
  [
    "43866",
    "(726) 982-5966",
    "La Taza Produccion de Cafe ",
    "Ap #113-7394 Ornare, Road"
  ],
  [
    "23927",
    "(983) 428-3389",
    "Le Sale Plantacion ",
    "Ap #268-4734 Feugiat St."
  ],
  [
    "49137",
    "(103) 221-2218",
    "Acerca de Compania ",
    "595-4052 Accumsan Av."
  ],
  [
    "85841",
    "(896) 202-3247",
    "Empezar Productos ",
    "Ap #144-9581 Lobortis. Ave"
  ],
  [
    "99107",
    "(391) 570-0115",
    "La Frase Productos ",
    "939-8016 Ornare. Avenue"
  ],
  [
    "12151",
    "(819) 726-6367",
    "El Segundo Cafe del Fabricante ",
    "793-4807 Aliquam Ave"
  ],
  [
    "98489",
    "(478) 650-6079",
    "La Carta Cafe del Fabricante ",
    "Ap #741-5939 Aenean Rd."
  ],
  [
    "02234",
    "(152) 690-9879",
    "El Fin Centro de Cafe ",
    "395-7248 Magna. St."
  ],
  [
    "38896",
    "(219) 375-5291",
    "La Frase Productos ",
    "Ap #535-8074 Amet Rd."
  ],
  [
    "97568",
    "(992) 190-8237",
    "La Bebida Plantacion de Cafe ",
    "Ap #901-9024 Scelerisque, Rd."
  ],
  [
    "80675",
    "(379) 442-0376",
    "La Piel Productos ",
    "807 Lorem Avenue"
  ],
  [
    "92633",
    "(204) 385-0923",
    "El Fin Centro de Cafe ",
    "412-848 Eu St."
  ],
  [
    "45981",
    "(232) 719-2102",
    "La Taza Produccion de Cafe ",
    "Ap #942-6308 Facilisis Street"
  ],
  [
    "98373",
    "(916) 679-7038",
    "El Abanico Plantacion ",
    "P.O. Box 360, 4966 Lobortis. Rd."
  ],
  [
    "64770",
    "(971) 278-5705",
    "Empezar Productos ",
    "3571 Ut St."
  ],
  [
    "57994",
    "(829) 193-3665",
    "Sencillo Centro de Cafe ",
    "Ap #342-7958 At Rd."
  ],
  [
    "47633",
    "(292) 234-9554",
    "La Queja Productos ",
    "P.O. Box 813, 4812 Fusce Street"
  ],
  [
    "83711",
    "(219) 418-3924",
    "El Bosillo Cafe del Fabricante ",
    "683-2210 Velit. Av."
  ],
  [
    "03549",
    "(167) 377-9777",
    "Abrazar Plantacion ",
    "P.O. Box 971, 7830 Dictum Av."
  ],
  [
    "67112",
    "(206) 382-6071",
    "La Oficina Cafe del Fabricante ",
    "Ap #561-895 Vitae Avenue"
  ],
  [
    "69796",
    "(218) 363-2241",
    "La Escalera Cafe del Fabricante ",
    "876-7606 Libero. St."
  ],
  [
    "11879",
    "(394) 244-7149",
    "El Abrigo Compania ",
    "P.O. Box 836, 2780 Et, Road"
  ],
  [
    "48354",
    "(723) 670-8312",
    "Quitar Produccion de Cafe ",
    "2537 Sem, Street"
  ],
  [
    "36061",
    "(874) 938-2356",
    "Pronto Plantacion ",
    "1697 Aliquet Av."
  ],
  [
    "01976",
    "(445) 497-1441",
    "Rato Plantacion de Cafe ",
    "Ap #461-2265 Magna Road"
  ],
  [
    "92883",
    "(854) 660-7431",
    "El Segundo Cafe del Fabricante ",
    "Ap #402-5217 Duis Road"
  ],
  [
    "90916",
    "(711) 492-8487",
    "La Senal Productos ",
    "P.O. Box 564, 4555 Ante Road"
  ],
  [
    "62548",
    "(502) 405-0332",
    "El Sol Plantacion de Cafe ",
    "P.O. Box 506, 3612 Enim. St."
  ],
  [
    "43998",
    "(681) 736-1254",
    "La Parte Centro de Cafe ",
    "6262 Aliquet Rd."
  ],
  [
    "16422",
    "(777) 483-0390",
    "Sencillo Centro de Cafe ",
    "Ap #630-9463 Metus Rd."
  ],
  [
    "90641",
    "(907) 583-3218",
    "El Lugar Plantacion de Cafe ",
    "8545 Vulputate, Rd."
  ],
  [
    "70366",
    "(719) 497-6105",
    "El Abanico Plantacion ",
    "536-4714 Malesuada Ave"
  ],
  [
    "37186",
    "(740) 961-4248",
    "El Par Plantacion ",
    "975-3673 Libero. Rd."
  ],
  [
    "91599",
    "(809) 234-7428",
    "Le Sale Plantacion ",
    "942-8374 A, St."
  ],
  [
    "18963",
    "(229) 480-8247",
    "Encima Centro de Cafe ",
    "Ap #973-1001 Diam. Av."
  ],
  [
    "30267",
    "(375) 165-4683",
    "Rico Cafe del Fabricante ",
    "286-6930 Sodales St."
  ],
  [
    "40186",
    "(806) 417-1871",
    "El Plano Plantacion ",
    "Ap #372-4680 Vestibulum. St."
  ],
  [
    "53782",
    "(426) 978-0547",
    "La Puerta Centro de Cafe ",
    "7161 Aptent Street"
  ],
  [
    "52251",
    "(981) 363-8437",
    "EL Esfuerzo Centro de Cafe ",
    "Ap #876-1145 Morbi Road"
  ],
  [
    "26369",
    "(848) 358-1929",
    "La Parada Compania ",
    "P.O. Box 616, 2877 Mauris Rd."
  ],
  [
    "40781",
    "(578) 221-9539",
    "La Familia Centro de Cafe ",
    "844-2065 Ornare, St."
  ],
  [
    "49905",
    "(274) 176-2817",
    "El Rio Centro de Cafe ",
    "P.O. Box 281, 3718 Vulputate Street"
  ],
  [
    "70191",
    "(421) 891-7893",
    "El Pueblo Plantacion de Cafe ",
    "P.O. Box 696, 7781 Sapien, Avenue"
  ],
  [
    "88746",
    "(489) 946-0872",
    "La Plaza Cafe del Fabricante ",
    "835-9631 Imperdiet Rd."
  ],
  [
    "36210",
    "(608) 247-1025",
    "El Bulto Plantacion de Cafe ",
    "P.O. Box 742, 4497 Tincidunt Rd."
  ],
  [
    "16503",
    "(855) 707-4361",
    "La Lluvia Compania ",
    "2697 Aliquam Rd."
  ],
  [
    "14826",
    "(210) 682-7626",
    "EL Frente Plantacion ",
    "422-4048 Aliquam St."
  ],
  [
    "91616",
    "(122) 215-8860",
    "El Boleto Plantacion ",
    "Ap #710-8909 Nulla Ave"
  ],
  [
    "26267",
    "(420) 153-9557",
    "Frascar Produccion de Cafe ",
    "Ap #102-7048 Libero. St."
  ],
  [
    "66074",
    "(980) 972-2016",
    "La Bebida Plantacion de Cafe ",
    "9567 Ornare, Rd."
  ],
  [
    "49888",
    "(816) 568-4515",
    "El Bosillo Cafe del Fabricante ",
    "3388 Enim. St."
  ],
  [
    "89243",
    "(368) 790-5665",
    "Abierto Compania ",
    "Ap #733-1652 Hendrerit St."
  ],
  [
    "93207",
    "(683) 481-1302",
    "El Boleto Plantacion ",
    "5228 Imperdiet Road"
  ],
  [
    "97998",
    "(236) 479-6362",
    "Acerca de Compania ",
    "P.O. Box 483, 682 Ipsum. Rd."
  ],
  [
    "30235",
    "(970) 940-2981",
    "Rico Cafe del Fabricante ",
    "285-6529 Nunc. Road"
  ],
  [
    "65364",
    "(978) 740-8104",
    "El Sombrero Cafe del Fabricante ",
    "Ap #706-1267 Et Avenue"
  ],
  [
    "74141",
    "(239) 301-6054",
    "El Corazon Centro de Cafe ",
    "360-9290 Sem Rd."
  ],
  [
    "10783",
    "(405) 712-1571",
    "La Copa Compania ",
    "375-8424 Euismod St."
  ],
  [
    "97847",
    "(539) 800-1077",
    "La Cuadra Produccion de Cafe ",
    "474-1523 Parturient Ave"
  ],
  [
    "99652",
    "(673) 421-0246",
    "El Paseo Produccion de Cafe ",
    "950-5026 Mauris Road"
  ],
  [
    "39107",
    "(747) 984-3614",
    "Aconsejar Productos ",
    "5134 Tempor St."
  ],
  [
    "99237",
    "(516) 760-5886",
    "Dulce Produccion de Cafe ",
    "P.O. Box 149, 1822 Hendrerit St."
  ],
  [
    "08520",
    "(771) 313-6942",
    "",
    "805-1836 Molestie St."
  ],
  [
    "91236",
    "(136) 911-8716",
    "Desde Cafe del Fabricante ",
    "Ap #801-855 Libero Rd."
  ],
  [
    "94096",
    "(168) 971-5636",
    "La Inglaterra Compania ",
    "P.O. Box 542, 2599 Tellus. Road"
  ],
  [
    "68571",
    "(398) 472-0108",
    "El Letrero Cafe del Fabricante ",
    "601-3071 Dui. St."
  ],
  [
    "23093",
    "(587) 799-1580",
    "Hola Centro de Cafe ",
    "Ap #459-8134 Nec, Ave"
  ],
  [
    "70283",
    "(338) 828-9327",
    "La Cita Plantacion de Cafe ",
    "P.O. Box 310, 3500 Duis Avenue"
  ],
  [
    "02447",
    "(705) 290-6966",
    "La Joya Plantacion ",
    "Ap #109-594 Nostra, Street"
  ],
  [
    "47120",
    "(579) 321-9289",
    "El Fuego Centro de Cafe ",
    "P.O. Box 278, 9342 Aliquet. Rd."
  ],
  [
    "80032",
    "(602) 516-0871",
    "El Acuerdo Plantacion de Cafe ",
    "9422 Consectetuer Rd."
  ],
  [
    "21612",
    "(275) 346-8365",
    "El Gusto Produccion de Cafe ",
    "Ap #844-9839 Arcu Av."
  ],
  [
    "89727",
    "(611) 953-5489",
    "Ademas Centro de Cafe ",
    "8293 Diam Street"
  ],
  [
    "53623",
    "(850) 459-2388",
    "La Noche Centro de Cafe ",
    "P.O. Box 153, 4383 Vitae Road"
  ],
  [
    "73702",
    "(403) 513-8933",
    "La Noche Centro de Cafe ",
    "937-1480 Odio. Rd."
  ],
  [
    "88440",
    "(171) 525-5283",
    "Aguantar Compania ",
    "471-7652 Dolor Av."
  ],
  [
    "47454",
    "(375) 153-5574",
    "Caro Plantacion ",
    "548 Leo Ave"
  ],
  [
    "99264",
    "(218) 841-0267",
    "El Caballero Plantacion ",
    "P.O. Box 102, 8006 Taciti Road"
  ],
  [
    "45129",
    "(681) 385-6539",
    "La Ganga Productos ",
    "946-3109 Metus St."
  ],
  [
    "53453",
    "(428) 546-3527",
    "La Mentira Plantacion de Cafe ",
    "1664 Vitae Street"
  ],
  [
    "06294",
    "(347) 592-4760",
    "Derecho Compania ",
    "1913 Non, Street"
  ],
  [
    "67052",
    "(249) 796-3431",
    "EL Golpe Compania ",
    "P.O. Box 752, 1724 Nibh Road"
  ],
  [
    "31687",
    "(576) 700-4176",
    "Aguantar Compania ",
    "P.O. Box 218, 7408 Ut Road"
  ],
  [
    "84812",
    "(481) 852-6752",
    "EL Mozo Produccion de Cafe ",
    "330-8049 Mus. Street"
  ],
  [
    "00528",
    "(118) 881-7156",
    "Derecho Compania ",
    "786-6519 Vitae St."
  ],
  [
    "04343",
    "(436) 420-3347",
    "Ahora Centro de Cafe ",
    "P.O. Box 737, 3512 Scelerisque Street"
  ],
  [
    "57526",
    "(542) 606-7270",
    "El Desayuno Compania ",
    "Ap #833-3708 Nec Rd."
  ],
  [
    "62902",
    "(227) 578-3503",
    "Los Pendientes Plantacion ",
    "212-7767 Sapien St."
  ],
  [
    "43009",
    "(860) 745-6397",
    "El Paseo Produccion de Cafe ",
    "3110 Lacus. Street"
  ],
  [
    "99826",
    "(705) 620-5161",
    "Ademas Centro de Cafe ",
    "P.O. Box 771, 6902 Ac Street"
  ],
  [
    "08192",
    "(647) 946-1091",
    "La Desgracia Productos ",
    "2841 Euismod St."
  ],
  [
    "26115",
    "(321) 860-7933",
    "El Alcalde Plantacion de Cafe ",
    "9842 Metus Avenue"
  ],
  [
    "17100",
    "(403) 502-3347",
    "Necesitar Plantacion de Cafe ",
    "997-6055 Quisque St."
  ],
  [
    "86649",
    "(610) 976-5157",
    "La Docena Plantacion ",
    "9402 Nunc Ave"
  ],
  [
    "35008",
    "(639) 797-2154",
    "La Copa Compania ",
    "8705 Malesuada Av."
  ],
  [
    "54050",
    "(829) 404-3052",
    "La Gota Plantacion de Cafe ",
    "883-2128 Sed Road"
  ],
  [
    "09236",
    "(184) 270-3460",
    "La Ganga Productos ",
    "5470 Tellus St."
  ],
  [
    "57754",
    "(598) 957-3540",
    "El Peligro Cafe del Fabricante ",
    "681-4782 Eu St."
  ],
  [
    "10718",
    "(281) 697-1067",
    "Mucho Compania ",
    "P.O. Box 889, 1139 Ac, St."
  ],
  [
    "01952",
    "(370) 238-1818",
    "El Peligro Cafe del Fabricante ",
    "203-2230 Malesuada St."
  ],
  [
    "53721",
    "(294) 163-2390",
    "Pegar Plantacion ",
    "P.O. Box 357, 4361 Lectus Av."
  ],
  [
    "10854",
    "(801) 948-1472",
    "El Dolar Produccion de Cafe ",
    "349-1938 Donec Road"
  ],
  [
    "51825",
    "(926) 848-2186",
    "Acordarse Cafe del Fabricante ",
    "103-3162 Vel, Rd."
  ],
  [
    "89812",
    "(168) 111-5302",
    "La Joya Plantacion ",
    "1920 Tempus Rd."
  ],
  [
    "33190",
    "(368) 715-6517",
    "Moreno Productos ",
    "Ap #999-7027 A Avenue"
  ],
  [
    "76522",
    "(569) 398-3830",
    "El Jabon Produccion de Cafe ",
    "3688 Ridiculus Ave"
  ],
  [
    "63791",
    "(408) 581-6651",
    "La Copa Compania ",
    "P.O. Box 212, 7258 Eu St."
  ],
  [
    "39984",
    "(429) 584-0118",
    "La Joya Plantacion ",
    "P.O. Box 500, 4242 Sit Av."
  ],
  [
    "03203",
    "(795) 925-8629",
    "El Limite Plantacion ",
    "146-6200 Eget, Rd."
  ],
  [
    "67666",
    "(954) 622-7166",
    "Cantar Produccion de Cafe ",
    "436-1291 Mauris St."
  ],
  [
    "81294",
    "(568) 431-9144",
    "La Guerra Plantacion de Cafe ",
    "P.O. Box 728, 1563 Vitae St."
  ],
  [
    "72838",
    "(337) 131-7019",
    "La Gota Plantacion de Cafe ",
    "7678 Et, Av."
  ],
  [
    "93172",
    "(564) 840-7570",
    "La Caja Produccion de Cafe ",
    "P.O. Box 976, 8259 Tincidunt Road"
  ],
  [
    "44989",
    "(461) 942-0078",
    "La Noche Centro de Cafe ",
    "Ap #984-4743 Ornare St."
  ],
  [
    "87498",
    "(826) 427-0581",
    "El Campo Plantacion ",
    "P.O. Box 183, 1694 Donec Rd."
  ],
  [
    "62426",
    "(489) 333-2123",
    "El Campo Plantacion ",
    "Ap #583-7208 Vitae St."
  ],
  [
    "10669",
    "(281) 834-8498",
    "Mio Plantacion de Cafe ",
    "Ap #310-6404 Tempus St."
  ],
  [
    "95841",
    "(624) 918-0867",
    "Casado Productos ",
    "P.O. Box 369, 6502 Duis Street"
  ],
  [
    "98021",
    "(500) 903-0551",
    "La Noche Centro de Cafe ",
    "P.O. Box 868, 5013 Egestas. St."
  ],
  [
    "20153",
    "(165) 555-9144",
    "La Capital Cafe del Fabricante ",
    "P.O. Box 562, 7610 Luctus Street"
  ],
  [
    "41061",
    "(930) 626-7446",
    "Mio Plantacion de Cafe ",
    "490-9171 Ante St."
  ],
  [
    "91530",
    "(802) 549-1676",
    "La Hora Plantacion ",
    "P.O. Box 959, 3955 Ullamcorper. St."
  ],
  [
    "06038",
    "(355) 239-9825",
    "La Campana Productos ",
    "3611 Et Rd."
  ],
  [
    "27374",
    "(410) 753-9798",
    "Caro Plantacion ",
    "P.O. Box 816, 2167 Nunc Rd."
  ],
  [
    "64311",
    "(210) 976-8374",
    "El Agua Plantacion de Cafe ",
    "455 Etiam Rd."
  ],
  [
    "18539",
    "(421) 856-7183",
    "Ahora Centro de Cafe ",
    "413-8883 Convallis Street"
  ],
  [
    "94555",
    "(207) 808-7578",
    "Dulce Produccion de Cafe ",
    "961-1518 Semper Rd."
  ],
  [
    "46860",
    "(584) 333-0009",
    "Nuevo Plantacion de Cafe ",
    "893-5860 Enim Street"
  ],
  [
    "85646",
    "(763) 332-2643",
    "La Camera Produccion de Cafe ",
    "P.O. Box 739, 9686 Vestibulum St."
  ],
  [
    "01750",
    "(758) 650-8714",
    "El Campo Plantacion ",
    "3731 Amet, Avenue"
  ],
  [
    "31253",
    "(800) 620-6923",
    "Acostarse Productos ",
    "819-5520 Tempus Rd."
  ],
  [
    "18504",
    "(745) 777-0558",
    "El Letrero Cafe del Fabricante ",
    "823-911 Consequat St."
  ],
  [
    "41120",
    "(827) 915-3176",
    "Hasta Plantacion ",
    "P.O. Box 958, 8034 Pede. Street"
  ],
  [
    "32796",
    "(936) 747-5349",
    "El Nombre Productos ",
    "9625 Ultrices Street"
  ],
  [
    "63208",
    "(509) 598-3623",
    "El Mapa Cafe del Fabricante ",
    "Ap #706-4793 Amet Avenue"
  ],
  [
    "61467",
    "(612) 875-1103",
    "El Acuerdo Plantacion de Cafe ",
    "Ap #508-8525 Vel Street"
  ],
  [
    "28996",
    "(844) 811-0616",
    "EL Ingeniero Cafe del Fabricante ",
    "P.O. Box 744, 3731 Aliquam St."
  ],
  [
    "39551",
    "(936) 729-0349",
    "La Caja Produccion de Cafe ",
    "P.O. Box 309, 531 Nibh St."
  ],
  [
    "54927",
    "(514) 991-9397",
    "La Noche Centro de Cafe ",
    "P.O. Box 579, 8030 Congue. St."
  ],
  [
    "03239",
    "(895) 916-6828",
    "Casado Productos ",
    "P.O. Box 992, 7232 Ornare Rd."
  ],
  [
    "30122",
    "(597) 802-3159",
    "La Docena Plantacion ",
    "Ap #529-9189 Nulla Road"
  ],
  [
    "71395",
    "(535) 564-8897",
    "El Dia Productos ",
    "Ap #425-2308 Sed Rd."
  ],
  [
    "11113",
    "(127) 301-3040",
    "El Juego Produccion de Cafe ",
    "4789 Suspendisse Rd."
  ],
  [
    "82694",
    "(664) 438-8894",
    "Adelante Cafe del Fabricante ",
    "1365 Fermentum Rd."
  ],
  [
    "17379",
    "(114) 623-1170",
    "El Peligro Cafe del Fabricante ",
    "P.O. Box 465, 3925 Ipsum Av."
  ],
  [
    "94510",
    "(362) 425-2926",
    "Los Pendientes Plantacion ",
    "Ap #827-5910 Iaculis Avenue"
  ],
  [
    "77587",
    "(741) 516-1255",
    "El Agua Plantacion de Cafe ",
    "P.O. Box 699, 5908 Enim. Rd."
  ],
  [
    "10339",
    "(745) 205-6132",
    "Duro Cafe del Fabricante ",
    "Ap #628-1019 Mauris, Avenue"
  ],
  [
    "00270",
    "(412) 970-9449",
    "El Jabon Produccion de Cafe ",
    "2654 Feugiat St."
  ],
  [
    "09501",
    "(605) 227-4711",
    "EL Dedo Plantacion de Cafe ",
    "P.O. Box 472, 2794 Nonummy St."
  ],
  [
    "83262",
    "(903) 665-9255",
    "Aconsejar Productos ",
    "301-893 Nullam Street"
  ],
  [
    "66652",
    "(852) 119-1384",
    "Juntos Cafe del Fabricante ",
    "776-7950 Id Rd."
  ],
  [
    "28911",
    "(124) 448-3380",
    "La Ganga Productos ",
    "Ap #906-8293 Dignissim Ave"
  ],
  [
    "64926",
    "(201) 815-5299",
    "Delgado Centro de Cafe ",
    "414-2124 Ut Rd."
  ],
  [
    "27948",
    "(853) 400-6618",
    "Los Muebles Plantacion ",
    "P.O. Box 920, 9161 Vitae, Road"
  ],
  [
    "48847",
    "(874) 439-0850",
    "La Cita Plantacion de Cafe ",
    "Ap #627-491 Fringilla Street"
  ]
];

var cIDs = [
  9843409,
  19327569,
  24387725,
  36101944,
  39899128,
  45317839,
  46524505,
  47709603,
  50687224,
  52233992,
  60291568,
  61365729,
  64006449,
  66334873,
  68483207,
  70796691,
  74638462,
  82351507,
  88608798,
  91877118,
  93123077,
  101178156,
  101431727,
  108053569,
  116014000,
  120328868,
  122828616,
  127916710,
  128804469,
  129208195,
  131307918,
  132411597,
  132741311,
  141091470,
  151029827,
  163012765,
  166064031,
  178072567,
  178701202,
  182383706,
  186681530,
  188284180,
  197955334,
  198590674,
  203543174,
  205023697,
  207670921,
  218549891,
  220564490,
  226374710,
  229032716,
  229377404,
  230512753,
  235081396,
  242148764,
  244720589,
  247148641,
  255220985,
  255641771,
  257205810,
  260539238,
  260652542,
  269901074,
  269950419,
  282613904,
  292638680,
  299465376,
  302960153,
  306504478,
  306576883,
  310708393,
  315095611,
  321116438,
  324813600,
  324962617,
  331369805,
  333609791,
  339346866,
  346568443,
  357677371,
  367158870,
  370609677,
  370642089,
  390795222,
  391967816,
  392175944,
  397643367,
  418247203,
  423104463,
  426779747,
  427680729,
  428717049,
  439090912,
  467358146,
  470816776,
  472962764,
  485656031,
  487388682,
  489374609,
  499628344,
  500656777,
  513208523,
  518660486,
  519558219,
  528155343,
  538049671,
  549511418,
  558081321,
  563960998,
  564982488,
  567417056,
  568080286,
  579868874,
  588412832,
  596173091,
  596504489,
  598185572,
  598557923,
  599430900,
  603467627,
  604343291,
  606513879,
  608266558,
  613075945,
  614809639,
  625150209,
  625819463,
  627895662,
  644053876,
  678613150,
  686802329,
  691169537,
  692095921,
  694894457,
  705117155,
  708204982,
  714048047,
  729748715,
  733424452,
  744246562,
  744744904,
  746671711,
  747563072,
  776038937,
  776450319,
  780844509,
  782202502,
  789056933,
  789737751,
  794840381,
  796991810,
  797299298,
  801511398,
  808894954,
  823727282,
  825262213,
  830510308,
  833238704,
  834401836,
  839037977,
  839258120,
  845436053,
  852517669,
  852880916,
  853316707,
  858446867,
  867131108,
  869772760,
  876122980,
  877149480,
  880719667,
  887382298,
  891228050,
  893577989,
  895939257,
  899104672,
  899658964,
  903068543,
  906378574,
  908181148,
  908739592,
  910784413,
  924348399,
  933171502,
  937062451,
  937096234,
  952692847,
  958380039,
  959135255,
  964393347,
  971314730,
  971464065,
  972036757,
  973550320,
  975024909,
  976872522,
  981401115,
  990893566,
  995804377,
  999735051,
];

db.serialize(function() {
  var statement = db.prepare('INSERT INTO CoffeePlantation VALUES (?, ?, ?, ?, ?)');
  var i = 0;
  _.each(cps, function(cp) {
    statement.run(cp[0], cp[1], cp[2], cp[3], cIDs[0]);
    i++;
  });

  statement.finalize();
});

db.close();
