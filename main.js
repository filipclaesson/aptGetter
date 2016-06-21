var aptgetter = require('./aptgetter.js');
var async = require("async");

areas = getOmraden()
function hej(){
	console.log("hej nu är det slut")
}


//aptgetter.testPop(areas, hej)





aptgetter.createCSVrecursive(areas)
//aptgetter.createCSVrecursive(areas[0].areaCode, areas[0].subArea, areas[0].area, getOmraden)

//aptgetter.createCSVrecursive(areas[0].areaCode, areas[0].subArea, areas[0].area,)
//aptgetter.createCSVrecursive(areas[0].areaCode, areas[0].subArea, areas[0].area)

/*

stop = 2
timeBetween = 10000;

(function myLoop (i) {       
   setTimeout(function () {   
      console.log(i)
      aptgetter.createcsvfromarea(areas[i].areaCode, areas[i].subArea, areas[i].area)          //  your code here                
      if (i++ < stop-1) myLoop(i);  
   }, timeBetween)
})(0);
*/

function getOmraden(){
	areas = [
	{ 
		"areaCode": 874648,
		"subArea": "Enskede Gård",
		"area": "Grön Hagsätra"
	},
	{ 
		"areaCode": 1454,
		"subArea": "Gamla Enskede",
		"area": "Grön Hagsätra"
	}]/*,
	{ 
		"areaCode": 4175,
		"subArea": "Gubbängen",
		"area": "Grön Hagsätra"
	},
	{ 
		"areaCode": 221,
		"subArea": "Stureby",
		"area": "Grön Hagsätra"
	},
	{ 
		"areaCode": 21723,
		"subArea": "Svedmyra",
		"area": "Grön Hagsätra"
	},
	{ 
		"areaCode": 787,
		"subArea": "Bandhagen",
		"area": "Grön Hagsätra"
	},
	{ 
		"areaCode": 2115,
		"subArea": "Högdalen",
		"area": "Grön Hagsätra"
	},
	{ 
		"areaCode": 6553,
		"subArea": "Rågsved",
		"area": "Grön Hagsätra"
	}
	*/
	

	return areas

}

// Blå linje mot hagsätra 

//aptgetter.createcsvfromarea(874648, "Enskede Gård", "Grön Hagsätra"); 		// Enskede Gård
//aptgetter.createcsvfromarea(1454, "Gamla Enskede", "Grön Hagsätra");			// Gamla Enskede
//aptgetter.createcsvfromarea(4175, "Gubbängen", "Grön Hagsätra");				// Gubbängen
//aptgetter.createcsvfromarea(221, "Stureby", "Grön Hagsätra");					// Stureby 
//aptgetter.createcsvfromarea(21723, "Svedmyra", "Grön Hagsätra");				// Svedmyra
//aptgetter.createcsvfromarea(787, "Bandhagen", "Grön Hagsätra");				// Bandhagen
//aptgetter.createcsvfromarea(2115, "Högdalen", "Grön Hagsätra");				// Högdalen
//aptgetter.createcsvfromarea(6553, "Rågsved", "Grön Hagsätra");				// Rågsved

// Röd linje mot fruängen 

//aptgetter.createcsvfromarea(30, "Hägerstensåsen", "Röd Fruängen"); 		// Hägerstensåsen
//aptgetter.createcsvfromarea(1381, "Fruängen", "Röd Fruängen");			// Fruängen 
//aptgetter.createcsvfromarea(874654, "Liljeholmen", "Röd Fruängen");		// Liljeholmen
//aptgetter.createcsvfromarea(874697, "Midsommarkransen", "Röd Fruängen");	// Midsommarkransen
//aptgetter.createcsvfromarea(1425, "Västertorp", "Röd Fruängen");			// Västertorp

// Röd linje mot Norsborg 
// https://www.booli.se/slutpriser/aspudden,grondal,malarhojden,fittja,varby,satra,varberg,bredang,segeltorp/874661,874646,318143,14232,1774,2640,1276,2675,1140/
//aptgetter.createcsvfromarea(874661, "Aspudden", "Röd Norsborg"); 			// Aspudden
//aptgetter.createcsvfromarea(874646, "Gröndal", "Röd Norsborg");			// Gröndal 
//aptgetter.createcsvfromarea(318143, "Mälarhojden", "Röd Norsborg");		// Mälarhojden
//aptgetter.createcsvfromarea(14232, "Fittja", "Röd Norsborg");			// Fittja
//aptgetter.createcsvfromarea(1774, "Vårby", "Röd Norsborg");				// Vårby
//aptgetter.createcsvfromarea(2640, "Sätra", "Röd Norsborg");				// Sätra
//aptgetter.createcsvfromarea(1276, "Vårberg", "Röd Norsborg");			// Vårberg
//aptgetter.createcsvfromarea(2675, "Bredang", "Röd Norsborg");				// Bredang
//aptgetter.createcsvfromarea(1140, "Segeltorp", "Röd Norsborg");			// Segeltorp


// Grön linje mot skarpnäck

//aptgetter.createcsvfromarea(874652, "Hammarbyhojden", "Grön Skarpnäck"); 	// Hammarbyhöjden
//aptgetter.createcsvfromarea(8521, "Kärrtorp", "Grön Skarpnäck");			// Kärrtorp
//aptgetter.createcsvfromarea(874650, "Bagarmossen", "Grön Skarpnäck");		// Bagarmossen
//aptgetter.createcsvfromarea(2474, "Skarpnäck", "Grön Skarpnäck");			// Skarpnäck

/* ===================================================================================================== */




/* ============================ Södermalm  ===================================================== */

//aptgetter.createcsvfromarea(7197, "Katarina", "Södermalm"); 				// Katarina
//aptgetter.createcsvfromarea(4796, "Sofia", "Södermalm");					// Sofia
//aptgetter.createcsvfromarea(8069, "Maria", "Södermalm");					// Maria
//aptgetter.createcsvfromarea(845555, "Hornstull", "Södermalm");			// Hornstull 
//aptgetter.createcsvfromarea(300476, "Zinkensdamm", "Södermalm");			// Zinkensdamm
//aptgetter.createcsvfromarea(874680, "Tullgården", "Södermalm");			// Tullgården
//aptgetter.createcsvfromarea(351791, "helgalunden", "Södermalm");			// helgalunden
//aptgetter.createcsvfromarea(115342, "Reimersholme", "Södermalm");			// Reimersholme

/*
Södermalm
Katarina
Sofia
Maria
Hornstull
Zinkensdamm
Tullgården
helgalunden
Reimersholme
*/

/* ===================================================================================================== */


/* ============================ Kungsholmen  ===================================================== */


//aptgetter.createcsvfromarea(7197, "Västra Kungsholmen", "Kungsholmen"); 	// Västra Kungsholmen
//aptgetter.createcsvfromarea(4796, "Fredhall", "Kungsholmen");				// Fredhall
//aptgetter.createcsvfromarea(8069, "Marieberg", "Kungsholmen");			// Marieberg
//aptgetter.createcsvfromarea(845555, "Främre Kungsholmen", "Kungsholmen");	// Främre Kungsholmen 

/*
Kungsholmen
Västra Kungsholmen
Fredhall
Marieberg
Främre Kungsholmen
*/
/* ===================================================================================================== */

/* ============================ Stan  ===================================================== */


//aptgetter.createcsvfromarea(115349, "Vasastan", "City"); 					// Vasastan
//aptgetter.createcsvfromarea(115350, "Norrmalm", "City");					// Fredhall
//aptgetter.createcsvfromarea(115348, "Östermalm", "City");					// Marieberg

/*
City
Vasastan
Norrmalm
Östermalm
*/

/* ===================================================================================================== */

/* ============================ Grön Hässelby  ===================================================== */
//https://www.booli.se/slutpriser/traneberg,akeshov,olovslund,abrahamsberg,akeslund,alvik,appelviken,sodra+angby,norra+angby,blackeberg,vallingby,stora+mossen,riksby/874660,172444,75722,867414,27567,874659,72510,122122,14698,10927,393540,74934,874656/

//aptgetter.createcsvfromarea(874660, "Traneberg", "Grön Hässelby"); 			// Traneberg
//aptgetter.createcsvfromarea(874659, "Alvik", "Grön Hässelby");				// Alvik
//aptgetter.createcsvfromarea(72510, "Äppelviken", "Grön Hässelby");			// Äppelviken

//aptgetter.createcsvfromarea(74934, "Stora Mossen", "Grön Hässelby");			// Stora Mossen
//aptgetter.createcsvfromarea(874656, "Riksby", "Grön Hässelby");				// Riksby 
//aptgetter.createcsvfromarea(867414, "Abrahamsberg", "Grön Hässelby");			// Abrahamsberg
//aptgetter.createcsvfromarea(27567, "Åkeslund", "Grön Hässelby");				// Åkeslund

//aptgetter.createcsvfromarea(172444, "Åkeshov", "Grön Hässelby");				// Åkeshov
////aptgetter.createcsvfromarea(75722, "Olovslund", "Grön Hässelby");				// Olovslund 
////aptgetter.createcsvfromarea(122122, "Södra Ångby", "Grön Hässelby");			// Södra Ångby
//aptgetter.createcsvfromarea(14698, "Norra Ångby,", "Grön Hässelby");			// Norra Ångby
//aptgetter.createcsvfromarea(10927, "Blackeberg", "Grön Hässelby");			// Blackeberg
//aptgetter.createcsvfromarea(393540, "Vällingby", "Grön Hässelby");			// Vällingby

/*
Grön Hässelby
Traneberg
Alvik
Äppelviken
Stora Mossen
Riksby
Abrahamsberg
Åkeslund
Åkeshov
Olovslund
Södra Ångby
Norra Ångby
Blackeberg
Vällingby
*/

/* ===================================================================================================== */


/* ============================ Blå Solna  ===================================================== */
//https://www.booli.se/slutpriser/hagalund,centrala+solna,jarvastaden,hallonbergen,ursvik,kista,solna+rasunda/753,7568,9555,891944,4790,393539,380138/




//aptgetter.createcsvfromarea(753, "Hagalund", "Blå Solna");					// Hagalund
//aptgetter.createcsvfromarea(7568, "Centrala Solna", "Blå Solna");				// Centrala Solna
//aptgetter.createcsvfromarea(9555, "Järvastaden", "Blå Solna");				// Järvastaden
//aptgetter.createcsvfromarea(891944, "Hallonbergen", "Blå Solna");				// Hallonbergen
//aptgetter.createcsvfromarea(4790, "Ursvik", "Blå Solna");						// Ursvik
//aptgetter.createcsvfromarea(393539, "Kista", "Blå Solna");					// Kista
//aptgetter.createcsvfromarea(380138, "Råsunda", "Blå Solna");					// Råsunda

/*
Blå Solna
Hagalund
Centrala Solna
Järvastaden
Hallonbergen
Ursvik
Kista
Råsunda
*/


/* ===================================================================================================== */


/* ============================ Blå Sunbyberg  ===================================================== */
//https://www.booli.se/slutpriser/huvudsta,centrum,mariehall,duvbo,tulemarken/39,7300,9955,1227,384576/

//aptgetter.createcsvfromarea(39, "Huvudsta", "Blå Sundbyberg");					// Huvudsta
//aptgetter.createcsvfromarea(7300, "Sundbyberg Centrum", "Blå Sundbyberg");		// Sundbyberg Centrum
//aptgetter.createcsvfromarea(9955, "Mariehäll", "Blå Sundbyberg"); 				// Mariehäll
//aptgetter.createcsvfromarea(1227, "Duvbo", "Blå Sundbyberg");						// Duvbo
//aptgetter.createcsvfromarea(384576, "Tulemarken", "Blå Sundbyberg");				// Tulemarken

/*
Blå Sunbyberg
Huvudsta
Sundbyberg Centrum
Mariehäll
Duvbo
Tulemarken
*/









//Södermalm 				aptgetter.createcsvfromarea(874648, "sodermalm");
//Sundbyberg Centrum 		aptgetter.createcsvfromarea(7300, "sundbybergcentrum");


/* ============================ Söder om Söder ===================================================== */

// Blå linje mot hagsätra 

//aptgetter.createcsvfromarea(874648, "Enskede Gård", "Grön Hagsätra"); 		// Enskede Gård
//aptgetter.createcsvfromarea(1454, "Gamla Enskede", "Grön Hagsätra");			// Gamla Enskede
//aptgetter.createcsvfromarea(4175, "Gubbängen", "Grön Hagsätra");				// Gubbängen
//aptgetter.createcsvfromarea(221, "Stureby", "Grön Hagsätra");					// Stureby 
//aptgetter.createcsvfromarea(21723, "Svedmyra", "Grön Hagsätra");				// Svedmyra
//aptgetter.createcsvfromarea(787, "Bandhagen", "Grön Hagsätra");				// Bandhagen
//aptgetter.createcsvfromarea(2115, "Högdalen", "Grön Hagsätra");				// Högdalen
//aptgetter.createcsvfromarea(6553, "Rågsved", "Grön Hagsätra");				// Rågsved

// Röd linje mot fruängen 

//aptgetter.createcsvfromarea(30, "Hägerstensåsen", "Röd Fruängen"); 		// Hägerstensåsen
//aptgetter.createcsvfromarea(1381, "Fruängen", "Röd Fruängen");			// Fruängen 
//aptgetter.createcsvfromarea(874654, "Liljeholmen", "Röd Fruängen");		// Liljeholmen
//aptgetter.createcsvfromarea(874697, "Midsommarkransen", "Röd Fruängen");	// Midsommarkransen
//aptgetter.createcsvfromarea(1425, "Västertorp", "Röd Fruängen");			// Västertorp

// Röd linje mot Norsborg 
// https://www.booli.se/slutpriser/aspudden,grondal,malarhojden,fittja,varby,satra,varberg,bredang,segeltorp/874661,874646,318143,14232,1774,2640,1276,2675,1140/
//aptgetter.createcsvfromarea(874661, "Aspudden", "Röd Norsborg"); 			// Aspudden
//aptgetter.createcsvfromarea(874646, "Gröndal", "Röd Norsborg");			// Gröndal 
//aptgetter.createcsvfromarea(318143, "Mälarhojden", "Röd Norsborg");		// Mälarhojden
//aptgetter.createcsvfromarea(14232, "Fittja", "Röd Norsborg");			// Fittja
//aptgetter.createcsvfromarea(1774, "Vårby", "Röd Norsborg");				// Vårby
//aptgetter.createcsvfromarea(2640, "Sätra", "Röd Norsborg");				// Sätra
//aptgetter.createcsvfromarea(1276, "Vårberg", "Röd Norsborg");			// Vårberg
//aptgetter.createcsvfromarea(2675, "Bredang", "Röd Norsborg");				// Bredang
//aptgetter.createcsvfromarea(1140, "Segeltorp", "Röd Norsborg");			// Segeltorp


// Grön linje mot skarpnäck

//aptgetter.createcsvfromarea(874652, "Hammarbyhojden", "Grön Skarpnäck"); 	// Hammarbyhöjden
//aptgetter.createcsvfromarea(8521, "Kärrtorp", "Grön Skarpnäck");			// Kärrtorp
//aptgetter.createcsvfromarea(874650, "Bagarmossen", "Grön Skarpnäck");		// Bagarmossen
//aptgetter.createcsvfromarea(2474, "Skarpnäck", "Grön Skarpnäck");			// Skarpnäck

/* ===================================================================================================== */




/* ============================ Södermalm  ===================================================== */

//aptgetter.createcsvfromarea(7197, "Katarina", "Södermalm"); 				// Katarina
//aptgetter.createcsvfromarea(4796, "Sofia", "Södermalm");					// Sofia
//aptgetter.createcsvfromarea(8069, "Maria", "Södermalm");					// Maria
//aptgetter.createcsvfromarea(845555, "Hornstull", "Södermalm");			// Hornstull 
//aptgetter.createcsvfromarea(300476, "Zinkensdamm", "Södermalm");			// Zinkensdamm
//aptgetter.createcsvfromarea(874680, "Tullgården", "Södermalm");			// Tullgården
//aptgetter.createcsvfromarea(351791, "helgalunden", "Södermalm");			// helgalunden
//aptgetter.createcsvfromarea(115342, "Reimersholme", "Södermalm");			// Reimersholme

/*
Södermalm
Katarina
Sofia
Maria
Hornstull
Zinkensdamm
Tullgården
helgalunden
Reimersholme
*/

/* ===================================================================================================== */


/* ============================ Kungsholmen  ===================================================== */


//aptgetter.createcsvfromarea(7197, "Västra Kungsholmen", "Kungsholmen"); 	// Västra Kungsholmen
//aptgetter.createcsvfromarea(4796, "Fredhall", "Kungsholmen");				// Fredhall
//aptgetter.createcsvfromarea(8069, "Marieberg", "Kungsholmen");			// Marieberg
//aptgetter.createcsvfromarea(845555, "Främre Kungsholmen", "Kungsholmen");	// Främre Kungsholmen 

/*
Kungsholmen
Västra Kungsholmen
Fredhall
Marieberg
Främre Kungsholmen
*/
/* ===================================================================================================== */

/* ============================ Stan  ===================================================== */


//aptgetter.createcsvfromarea(115349, "Vasastan", "City"); 					// Vasastan
//aptgetter.createcsvfromarea(115350, "Norrmalm", "City");					// Fredhall
//aptgetter.createcsvfromarea(115348, "Östermalm", "City");					// Marieberg

/*
City
Vasastan
Norrmalm
Östermalm
*/

/* ===================================================================================================== */

/* ============================ Grön Hässelby  ===================================================== */
//https://www.booli.se/slutpriser/traneberg,akeshov,olovslund,abrahamsberg,akeslund,alvik,appelviken,sodra+angby,norra+angby,blackeberg,vallingby,stora+mossen,riksby/874660,172444,75722,867414,27567,874659,72510,122122,14698,10927,393540,74934,874656/

//aptgetter.createcsvfromarea(874660, "Traneberg", "Grön Hässelby"); 			// Traneberg
//aptgetter.createcsvfromarea(874659, "Alvik", "Grön Hässelby");				// Alvik
//aptgetter.createcsvfromarea(72510, "Äppelviken", "Grön Hässelby");			// Äppelviken

//aptgetter.createcsvfromarea(74934, "Stora Mossen", "Grön Hässelby");			// Stora Mossen
//aptgetter.createcsvfromarea(874656, "Riksby", "Grön Hässelby");				// Riksby 
//aptgetter.createcsvfromarea(867414, "Abrahamsberg", "Grön Hässelby");			// Abrahamsberg
//aptgetter.createcsvfromarea(27567, "Åkeslund", "Grön Hässelby");				// Åkeslund

//aptgetter.createcsvfromarea(172444, "Åkeshov", "Grön Hässelby");				// Åkeshov
////aptgetter.createcsvfromarea(75722, "Olovslund", "Grön Hässelby");				// Olovslund 
////aptgetter.createcsvfromarea(122122, "Södra Ångby", "Grön Hässelby");			// Södra Ångby
//aptgetter.createcsvfromarea(14698, "Norra Ångby,", "Grön Hässelby");			// Norra Ångby
//aptgetter.createcsvfromarea(10927, "Blackeberg", "Grön Hässelby");			// Blackeberg
//aptgetter.createcsvfromarea(393540, "Vällingby", "Grön Hässelby");			// Vällingby

/*
Grön Hässelby
Traneberg
Alvik
Äppelviken
Stora Mossen
Riksby
Abrahamsberg
Åkeslund
Åkeshov
Olovslund
Södra Ångby
Norra Ångby
Blackeberg
Vällingby
*/

/* ===================================================================================================== */


/* ============================ Blå Solna  ===================================================== */
//https://www.booli.se/slutpriser/hagalund,centrala+solna,jarvastaden,hallonbergen,ursvik,kista,solna+rasunda/753,7568,9555,891944,4790,393539,380138/




//aptgetter.createcsvfromarea(753, "Hagalund", "Blå Solna");					// Hagalund
//aptgetter.createcsvfromarea(7568, "Centrala Solna", "Blå Solna");				// Centrala Solna
//aptgetter.createcsvfromarea(9555, "Järvastaden", "Blå Solna");				// Järvastaden
//aptgetter.createcsvfromarea(891944, "Hallonbergen", "Blå Solna");				// Hallonbergen
//aptgetter.createcsvfromarea(4790, "Ursvik", "Blå Solna");						// Ursvik
//aptgetter.createcsvfromarea(393539, "Kista", "Blå Solna");					// Kista
//aptgetter.createcsvfromarea(380138, "Råsunda", "Blå Solna");					// Råsunda

/*
Blå Solna
Hagalund
Centrala Solna
Järvastaden
Hallonbergen
Ursvik
Kista
Råsunda
*/


/* ===================================================================================================== */


/* ============================ Blå Sunbyberg  ===================================================== */
//https://www.booli.se/slutpriser/huvudsta,centrum,mariehall,duvbo,tulemarken/39,7300,9955,1227,384576/

//aptgetter.createcsvfromarea(39, "Huvudsta", "Blå Sundbyberg");					// Huvudsta
//aptgetter.createcsvfromarea(7300, "Sundbyberg Centrum", "Blå Sundbyberg");		// Sundbyberg Centrum
//aptgetter.createcsvfromarea(9955, "Mariehäll", "Blå Sundbyberg"); 				// Mariehäll
//aptgetter.createcsvfromarea(1227, "Duvbo", "Blå Sundbyberg");						// Duvbo
//aptgetter.createcsvfromarea(384576, "Tulemarken", "Blå Sundbyberg");				// Tulemarken

/*
Blå Sunbyberg
Huvudsta
Sundbyberg Centrum
Mariehäll
Duvbo
Tulemarken
*/


/* ===================================================================================================== */













