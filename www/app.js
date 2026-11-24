
"use strict";
/* ===================== DADOS ===================== */
const SPECIES = [{"n":"Aberrant Achatina","v":["Aberrant"],"bp":"Achatina_Character_BP_Aberrant","st":[[75,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[60,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":true,"br":true,"cr":["Unknown","Unknown",null,"Unknown","Unknown","Unknown"]},{"n":"Aberrant Anglerfish","v":["Aberrant"],"bp":"Angler_Character_BP_Aberrant","st":[[450,0.2,0.27,0.3,0],[240,0.1,0.1,0,0],[900,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Ankylosaurus","v":["Aberrant"],"bp":"Ankylo_Character_BP_Aberrant","st":[[700,0.2,0.27,0.5,0],[175,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Shell","Spikes","Scales","Spike tips","Shell stripes","Body"]},{"n":"Aberrant Araneo","v":["Aberrant"],"bp":"SpiderS_Character_BP_Aberrant","st":[[200,0.2,0.135,0.5,0],[150,0.1,0.1,0,0],[80,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[150,0.02,0.08,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Stripes+legs","Pimples","Underbelly",null,"Spots+tips","Body"]},{"n":"Aberrant Arthropluera","v":["Aberrant"],"bp":"Arthro_Character_BP_Aberrant","st":[[500,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Baryonyx","v":["Aberrant"],"bp":"Baryonyx_Character_BP_Aberrant","st":[[440,0.2,0.27,0.5,0],[325,0.1,0.1,0,0],[400,0.06,0,0.5,0],[225,0.1,0.1,0,0],[2250,0.1,0.1,0,0],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body","Top Fins",null,null,"Top Stripes","Underbelly"]},{"n":"Aberrant Beelzebufo","v":["Aberrant"],"bp":"Toad_Character_BP_Aberrant","st":[[220,0.2,0.27,0.5,0],[190,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[160,0.02,0.04,0,0],[1,0.05,0.1,0.2,0.25],[1,0,0.01,1,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,"Unknown","Unknown"]},{"n":"Aberrant Carbonemys","v":["Aberrant"],"bp":"Turtle_Character_BP_Aberrant","st":[[700,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[275,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[270,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.864,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,"Unknown","Unknown"]},{"n":"Aberrant Carnotaurus","v":["Aberrant"],"bp":"Carno_Character_BP_Aberrant","st":[[420,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0125,0.085,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,"Unknown","Unknown"]},{"n":"Aberrant Coelacanth","v":["Aberrant"],"bp":"Coel_Character_BP_Aberrant","st":[[30,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[15,0.06,0,0.5,0],[150,0.1,0.1,0,0],[100,0.1,0.1,0,0],null,null,[8,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":true,"br":false,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Concavenator","v":["Aberrant"],"bp":"Concavenator_Character_BP_Aberrant","st":[[425,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body main",null,"Highlights",null,"Underbelly ","Back color"]},{"n":"Aberrant Dimetrodon","v":["Aberrant"],"bp":"Dimetro_Character_BP_Aberrant","st":[[350,0.2,0.27,0.65,0],[300,0.1,0.1,0,0],[750,0.06,0,0.5,0],[500,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[250,0.02,0.04,0,0],[1,0.02,0.04,0.8,0.5],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown",null]},{"n":"Aberrant Dimorphodon","v":["Aberrant"],"bp":"Dimorph_Character_BP_Aberrant","st":[[125,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Diplocaulus","v":["Aberrant"],"bp":"Diplocaulus_Character_BP_Aberrant","st":[[250,0.2,0.27,0.5,0],[165,0.1,0.1,0,0],[220,0.06,0,0.5,0],[1050,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.25],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body","Fins",null,null,"Body Highlights","Underbelly"]},{"n":"Aberrant Diplodocus","v":["Aberrant"],"bp":"Diplodocus_Character_BP_Aberrant","st":[[1700,0.2,0.27,0.5,0],[550,0.1,0.1,0,0],[3000,0.06,0,0.5,0],[300,0.1,0.1,0,0],[10000,0.1,0.1,0,0],null,null,[800,0.02,0.04,0,0],[1,0,0,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Dire Bear","v":["Aberrant"],"bp":"Direbear_Character_BP_Aberrant","st":[[400,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[270,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[650,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Back",null,null,null,null,"Body"]},{"n":"Aberrant Dodo","v":["Aberrant"],"bp":"Dodo_Character_BP_Aberrant","st":[[40,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Doedicurus","v":["Aberrant"],"bp":"Doed_Character_BP_Aberrant","st":[[850,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0.6,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.864,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,"Unknown","Unknown"]},{"n":"Aberrant Dung Beetle","v":["Aberrant"],"bp":"DungBeetle_Character_BP_Aberrant","st":[[200,0.2,0.135,0.5,0],[100,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[5,0.02,0.08,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Unknown","Unknown",null,"Unknown","Unknown","Unknown"]},{"n":"Aberrant Electrophorus","v":["Aberrant"],"bp":"Eel_Character_BP_Aberrant","st":[[180,0.2,0.27,-0.2,0],[165,0.1,0.1,0,0],[175,0.06,0,0.5,0],[1050,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.25],[1,0,0.01,0,0],null,null],"ds":927,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body Main","Fins","Eel Highlight","Fin Highlight","Unknown","Belly"]},{"n":"Aberrant Equus","v":["Aberrant"],"bp":"Equus_Character_BP_Aberrant","st":[[240,0.2,0.27,0.5,0],[560,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0175,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["BodyMain",null,null,null,"Stripes","Underbelly and Highlights"]},{"n":"Aberrant Fasolasuchus","v":["Aberrant"],"bp":"Fasola_Character_BP_Aberrant","st":[[950,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[1350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2750,0.1,0.1,0,0],null,null,[450,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body","Spots","Spike tips","Nothing","Belly","Back"]},{"n":"Aberrant Gigantopithecus","v":["Aberrant"],"bp":"Bigfoot_Character_BP_Aberrant","st":[[640,0.1,0.27,0.5,0],[300,0.1,0.1,0,0],[1100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[220,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.06,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Gigantoraptor","v":["Aberrant"],"bp":"Gigantoraptor_Character_BP_Aberrant","st":[[770,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[950,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[320,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Feathers main","Wattle","Wattle pattern","Accent","Skin","Main pattern"]},{"n":"Aberrant Iguanodon","v":["Aberrant"],"bp":"Iguanodon_Character_BP_Aberrant","st":[[250,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[210,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[375,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.02,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["MainBody",null,null,null,"Stripes","Highlights and Belly"]},{"n":"Aberrant Lystrosaurus","v":["Aberrant"],"bp":"Lystro_Character_BP_Aberrant","st":[[90,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[100,0.06,0,0.5,0],[215,0.1,0.1,0,0],[500,0.1,0.1,0,0.15],null,null,[90,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Manta","v":["Aberrant"],"bp":"Manta_Character_BP_Aberrant","st":[[320,0.05,0.0675,0.5,0],[270,0.2,0.2,0,0],[700,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.05,1,0.4],[1,0,0.0125,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Megalania","v":["Aberrant"],"bp":"Megalania_Character_BP_Aberrant","st":[[480,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[700,0.06,0,0.5,0],[200,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Stripes","Belly"]},{"n":"Aberrant Megalosaurus","v":["Aberrant"],"bp":"Megalosaurus_Character_BP_Aberrant","st":[[1025,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[775,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Moschops","v":["Aberrant"],"bp":"Moschops_Character_BP_Aberrant","st":[[375,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[300,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Otter","v":["Aberrant"],"bp":"Otter_Character_BP_Aberrant","st":[[40,0.2,0.27,0.5,0],[180,0.1,0.1,0,0],[350,0.06,0,0.5,0],[600,0.1,0.1,0,0],[400,0.1,0.1,0,0],null,null,[30,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Body Stripes and Highlights","Underbelly"]},{"n":"Aberrant Oviraptor","v":["Aberrant"],"bp":"Oviraptor_Character_BP_Aberrant","st":[[140,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[125,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0.15],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1,0.15],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Main","Beak","Spikes",null,"Highlights","Belly"]},{"n":"Aberrant Ovis","v":["Aberrant"],"bp":"Sheep_Character_BP_Aberrant","st":[[100,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[85,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[90,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Paraceratherium","v":["Aberrant"],"bp":"Paracer_Character_BP_Aberrant","st":[[1026,0.2,0.172125,0.5,0],[300,0.1,0.1,0,0],[1300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6500,0.1,0.1,0,0],null,null,[850,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Parasaur","v":["Aberrant"],"bp":"Para_Character_BP_Aberrant","st":[[200,0.2,0.27,0.5,0],[450,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[480,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Piranha","v":["Aberrant"],"bp":"Piranha_Character_BP_Aberrant","st":[[150,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[15,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.284,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":true,"br":false,"cr":["Unknown","Unknown","Unknown",null,"Unknown","Unknown"]},{"n":"Aberrant Pulmonoscorpius","v":["Aberrant"],"bp":"Scorpion_Character_BP_Aberrant","st":[[280,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Purlovia","v":["Aberrant"],"bp":"Purlovia_Character_BP_Aberrant","st":[[275,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[4000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Main Body",null,null,null,"Belly","Highlights"]},{"n":"Aberrant Raptor","v":["Aberrant"],"bp":"Raptor_Character_BP_Aberrant","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown",null,"Unknown","Unknown","Unknown"]},{"n":"Aberrant Salmon","v":["Aberrant"],"bp":"Salmon_Character_Aberrant","st":[[65,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[15,0.06,0,0.5,0],[150,0.1,0.1,0,0],[100,0.1,0.1,0,0],null,null,[18,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":true,"br":false,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Aberrant Sarco","v":["Aberrant"],"bp":"Sarco_Character_BP_Aberrant","st":[[400,0.2,0.27,0.65,0],[450,0.1,0.1,0,0],[400,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.8,0.5],[1,0,0.01,0.6,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Main",null,"Accents","Nose","Back","Belly"]},{"n":"Aberrant Spino","v":["Aberrant"],"bp":"Spino_Character_BP_Aberrant","st":[[805,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[850,0.06,0,0.5,0],[650,0.1,0.1,0,0],[2600,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown",null,"Unknown","Unknown"]},{"n":"Aberrant Stegosaurus","v":["Aberrant"],"bp":"Stego_Character_BP_Aberrant","st":[[650,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.02,0.964,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Titanoboa","v":["Aberrant"],"bp":"BoaFrill_Character_BP_Aberrant","st":[[170,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":true,"br":false,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Aberrant Triceratops","v":["Aberrant"],"bp":"Trike_Character_BP_Aberrant","st":[[375,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,1.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":false,"br":true,"cr":["Unknown","Unknown",null,"Unknown","Unknown","Unknown"]},{"n":"Aberrant Trilobite","v":["Aberrant"],"bp":"Trilobite_Character_Aberrant","st":[[160,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.96,"ng":true,"br":false,"cr":[null,null,null,null,null,null]},{"n":"Achatina","v":[],"bp":"Achatina_Character_BP","st":[[75,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[60,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body","Shell",null,"Shell Highlights","Stripe","Underside"]},{"n":"Acrocanthosaurus","v":[],"bp":"Acrocanthosaurus_Character_BP","st":[[1300,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[600,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body","Dark markings",null,null,"Stripe","Tummy"]},{"n":"Allosaurus","v":[],"bp":"Allo_Character_BP","st":[[630,0.2,0.27,0.5,0],[250,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[380,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,-0.1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,"Unknown","Spine","Belly"]},{"n":"Alpha Carnotaurus","v":["Mega"],"bp":"MegaCarno_Character_BP","st":[[6400,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,null,"Unknown"]},{"n":"Alpha Fire Wyvern","v":["Mega","ScorchedEarth"],"bp":"MegaWyvern_Character_BP_Fire","st":[[8000,0.15,0.162,-785,0],[600,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Scales Main","Wings Main","Fins Highlight","Body Highlights"]},{"n":"Alpha Megalodon","v":["Mega"],"bp":"MEgaMegalodon_Character_BP","st":[[9600,0.2,0.27,0.3,0],[320,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Alpha Mosasaur","v":["Mega"],"bp":"Mosa_Character_BP_Mega","st":[[54000,0.12,0.21,0.3,0],[400,0.1,0.1,0,0],[3000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0.15],null,null,[1300,0.02,0.04,0,0],[1,0.05,0.1,0.65,0.4],[1,0,0.005,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Alpha Ossidon","v":["LostColony","Mega"],"bp":"MegaSnowMonster_Character_BP","st":[[20000,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Dark muted-g",null,null,"Dark muted-g",null,"Dark muted-g"]},{"n":"Alpha Palaeoctopus","v":["Mega"],"bp":"MegaPalaeoctopus_Character_BP","st":[[1050,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[2000,0.06,0,0.5,0],null,[2500,0.1,0.1,0,0],null,null,[1000,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Dark muted-g","Dark muted-g","Unknown","Dark muted-g",null,"Dark muted-g"]},{"n":"Alpha Raptor","v":["Mega"],"bp":"MegaRaptor_Character_BP","st":[[3600,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown",null,"Unknown",null,"Unknown"]},{"n":"Alpha Rex","v":["Mega"],"bp":"MegaRex_Character_BP","st":[[17500,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Alpha Skeletal Carnotaurus","v":["Mega","Skeletal"],"bp":"Bone_MegaCarno_Character_BP","st":[[6400,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,null,"Unknown"]},{"n":"Alpha Skeletal Fire Wyvern","v":["Mega","ScorchedEarth","Skeletal"],"bp":"Bone_MegaWyvern_Character_BP_Fire","st":[[8000,0.15,0.162,-785,0],[600,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Scales Main","Wings Main","Fins Highlight","Body Highlights"]},{"n":"Alpha Skeletal Raptor","v":["Mega","Skeletal"],"bp":"Bone_MegaRaptor_Character_BP","st":[[3600,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown",null,"Unknown",null,"Unknown"]},{"n":"Alpha Skeletal Rex","v":["Mega","Skeletal"],"bp":"Bone_MegaRex_Character_BP","st":[[17500,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Alpha Surface Reaper King","v":["Aberration","Male","Mega","Surface"],"bp":"MegaXenomorph_Character_BP_Male_Surface","st":[[42500,0.2,0.27,0.5,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":[null,null,null,null,null,null]},{"n":"Alpha Tusoteuthis","v":["Mega"],"bp":"Mega_Tusoteuthis_Character_BP","st":[[30000,0.2,0.2025,0.5,0],[300,0.1,0.1,0,0],[1800,0.06,0,0.5,0],[215,0.1,0.1,0,0],[3200,0.1,0.1,0,0.15],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Highlights","Tentacle Highlights",null,null,"Tentacle Main","Body Main"]},{"n":"Amargasaurus","v":["LostIsland"],"bp":"Amargasaurus_Character_BP","st":[[1250,0.2,0.27,0.5,0],[425,0.1,0.1,0,0],[2250,0.06,0,0.5,0],[300,0.1,0.1,0,0],[6300,0.1,0.1,0,0],null,null,[475,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base Skin","Spine Pattern",null,null,"Ridge Color","Side Stripes"]},{"n":"Andrewsarchus","v":["Fjordur"],"bp":"Andrewsarchus_Character_BP","st":[[800,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[800,0.06,0,0.5,0],[650,0.1,0.1,0,0],[2174,0.1,0.1,0,0.15],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.005,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main",null,"Stripes","Back","Spots","Secondary"]},{"n":"Anglerfish","v":[],"bp":"Angler_Character_BP","st":[[450,0.2,0.27,0.3,0],[240,0.1,0.1,0,0],[900,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Spots","Tail fin and Accents"]},{"n":"Anglerfish Ghost","v":["Ghost"],"bp":"Ghost_Angler_Character_BP","st":[[450,0.2,0.27,0.3,0],[240,0.1,0.1,0,0],[900,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body",null,null,null,"Fin tips","Body spots"]},{"n":"Ankylosaurus","v":[],"bp":"Ankylo_Character_BP","st":[[700,0.2,0.27,0.5,0],[175,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Shell","Spikes","Scales","Spike tips","Shell stripes","Body"]},{"n":"Ankylosaurus Ghost","v":["Ghost"],"bp":"Ghost_Ankylo_Character_BP","st":[[700,0.2,0.27,0.5,0],[175,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Shell","Spikes","Scales","Spike tips","Shell stripes","Body"]},{"n":"Araneo","v":[],"bp":"SpiderS_Character_BP","st":[[200,0.2,0.135,0.5,0],[150,0.1,0.1,0,0],[80,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[150,0.02,0.08,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Stripes+legs","Pimples","Underbelly",null,"Spots+tips","Body"]},{"n":"Archaeopteryx","v":[],"bp":"Archa_Character_BP","st":[[125,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[30,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Sides, Tail, Wings and Face",null,"Skin",null,"Top and Wing Tips","Underside and Accents"]},{"n":"Archelon","v":[],"bp":"Archelon_Character_BP_ASA","st":[[1400,0.2,0.1254,0.35,0],[775,0.1,0.1,0,0],[2000,0.06,0,0.5,0],null,[3500,0.1,0.1,0,0],null,null,[1000,0.02,0.04,0,0],[1,0.05,0.1,0.6,0.4],[1,0,0.02,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.9,"ng":false,"br":true,"cr":["Main","Highlights",null,"Tips","Belly, Beak & Cracks",null]},{"n":"Argentavis","v":[],"bp":"Argent_Character_BP","st":[[365,0.2,0.30375,0.5,0],[400,0.05,0.075,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[400,0.02,0.055,0,0],[1,0.05,0.15,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body",null,"Wing Tips","Legs","Head Feathers","Underside"]},{"n":"Argentavis Ghost","v":["Ghost"],"bp":"Ghost_Argent_Character_BP","st":[[365,0.2,0.30375,0.5,0],[400,0.05,0.075,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[400,0.02,0.055,0,0],[1,0.05,0.15,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Main",null,"Wing tips","Legs","Crest","Belly"]},{"n":"Armadoggo","v":["Companion","Wasteland"],"bp":"Doggo_Character_BP","st":[[200,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Skin","Fur highlight","Spikes","Armor","Fur main",null]},{"n":"Arthropluera","v":[],"bp":"Arthro_Character_BP","st":[[500,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Segments","Head","Sternites","Legs, Antennae, and Forcipules","Unknown","Underside of Head/Segments"]},{"n":"Astral Mammoth","v":["Astraeos"],"bp":"AstralMammoth_Character_BP","st":[[17500,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Dark muted-g","Dark muted-g","Unknown",null,"Unknown","Dark muted-g"]},{"n":"Astral Rock Drake","v":["Astraeos"],"bp":"AstralRockDrake_Character_BP","st":[[6400,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Dark muted-g","Dark muted-g","Unknown","Dark muted-g","Unknown","Dark muted-g"]},{"n":"Astrocetus","v":["Genesis"],"bp":"SpaceWhale_Character_BP","st":[[2800,0.14,0.108,0.5,0],[600,0.05,0.05,0,0],[4200,0.02,0,0.5,0],null,[6000,0.1,0.1,0,0.25],null,null,[2000,0.02,0.05,0,0],[1,0.04,0.1,0.4,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.85,"ng":false,"br":true,"cr":["Wing Edges","Unknown","Eyes",null,"Body","Spots"]},{"n":"Astrodelphis","v":["Genesis2"],"bp":"SpaceDolphin_Character_BP","st":[[325,0.2,0.27,0.5,0],[250,0.05,0.06,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[280,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.365,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base Skin","Small Spots","Region2","Region3","Belly","Big Spots"]},{"n":"Aureliax","v":["LostColony"],"bp":"SnowDragon_Character_BP","st":[[1250,0.2,0.135,0.5,0],[800,0.1,0.1,0,0],[1500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[1100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Back & Fin accents","Horns & Tail accent",null,"Accents","Face & Belly"]},{"n":"Autumn Drakeling Ghost","v":["Ghost"],"bp":"Ghost_ShoulderDragon_Character_BP_Autumn","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Baryonyx","v":[],"bp":"Baryonyx_Character_BP","st":[[440,0.2,0.27,0.5,0],[325,0.1,0.1,0,0],[400,0.06,0,0.5,0],[225,0.1,0.1,0,0],[2250,0.1,0.1,0,0],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Spines",null,null,"Stripes","Underside"]},{"n":"Basilisk","v":["Aberration"],"bp":"Basilisk_Character_BP","st":[[2750,0.2,0.27,0.5,0],[650,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.5,"ng":false,"br":true,"cr":["Body Main","Horns","Underbelly",null,"Emissive","Highlights"]},{"n":"Basilisk Ghost","v":["Aberration","Ghost"],"bp":"Ghost_Basilisk_Character_BP","st":[[2750,0.2,0.27,0.5,0],[650,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.5,"ng":true,"br":true,"cr":["Body Main","Horns","Underbelly",null,"Emissive","Highlights"]},{"n":"Basilosaurus","v":[],"bp":"Basilosaurus_Character_BP","st":[[2400,0.2,0.243,0.3,0],[300,0.1,0.1,0,0],[2000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0.15],null,null,[700,0.02,0.04,0,0],[1,0.05,0.1,0.9,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,null,"Belly"]},{"n":"Beelzebufo","v":[],"bp":"Toad_Character_BP","st":[[220,0.2,0.27,0.5,0],[190,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[160,0.02,0.04,0,0],[1,0.05,0.1,0.2,0.25],[1,0,0.01,1,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Spikes",null,null,"Stripes","Belly and Accents"]},{"n":"Bison","v":[],"bp":"Bison_Character_BP","st":[[800,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3250,0.1,0.1,0,0],null,null,[650,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Rear, Eyes & Hoof Ring","Fur Highlights","Horn Tips","Horn","Fur Base",null]},{"n":"Blood Crystal Wyvern","v":["CrystalIsles"],"bp":"CrystalWyvern_Character_BP_Blood","st":[[1295,0.15,0.162,-785,0],[325,0.05,0.05,0,0],[545,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Scales Main",null,"Fins Highlight","Body Highlights"]},{"n":"Bloodstalker","v":["Bog","Genesis"],"bp":"BogSpider_Character_BP","st":[[450,0.2,0.27,0.5,0],[600,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.2],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Legs","Back Plates",null,"Arms","Skin Flap",null]},{"n":"Boaratos","v":[],"bp":"Boaratos_Character_BP","st":[[1050,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[5000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[5000,0.1,0.1,0,0.15],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body","Back fur","Tusks",null,"Fur highlights","Stripes and belly"]},{"n":"Brontosaurus","v":[],"bp":"Sauropod_Character_BP","st":[[2277,0.2,0.1254,0.5,0],[240,0.1,0.1,0,0],[2000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[10000,0.1,0.1,0,0],null,null,[1600,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.02,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.9,"ng":false,"br":true,"cr":["Body","Spine",null,null,"Back","Legs"]},{"n":"Bulbdog","v":["Aberration"],"bp":"LanternPug_Character_BP","st":[[145,0.2,0.27,0.5,0],[200,0.12,0.12,0.05,0],[60,0.06,0,0.5,0],[165,0.11,0.11,0.025,0],[450,0.1,0.1,0,0.15],null,null,[120,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body",null,"Spots",null,"Belly","Back stripes"]},{"n":"Bulbdog Ghost","v":["Aberration","Ghost"],"bp":"Ghost_LanternPug_Character_BP","st":[[145,0.2,0.27,0.5,0],[200,0.12,0.12,0.05,0],[60,0.06,0,0.5,0],[165,0.11,0.11,0.025,0],[450,0.1,0.1,0,0.15],null,null,[120,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Main body",null,"Spots","Lantern","Belly","Back stripes"]},{"n":"Bunny Dodo","v":[],"bp":"Dodo_Character_BP_Bunny","st":[[40,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Bunny Oviraptor","v":[],"bp":"BunnyOviraptor_Character_BP","st":[[140,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[125,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0.15],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1,0.15],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown",null,"Unknown","Unknown"]},{"n":"Burrowbuck","v":[],"bp":"Jackalope_Character_BP","st":[[550,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[650,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body main","Eyes","Spots","Antler accents","Belly","Back"]},{"n":"Carbonemys","v":[],"bp":"Turtle_Character_BP","st":[[700,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[275,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[270,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.9,"ng":false,"br":true,"cr":["Body","Shell Base",null,null,"Shell, Plates, and Claws","Body Accent"]},{"n":"Carcharodontosaurus","v":[],"bp":"Carcha_Character_BP","st":[[70000,0.0008,0.004,-54000,0],[480,0.006,0.025,0,0],[6000,0.06,0,0,0],[150,0.0025,0.025,0,0],[4000,0.0025,0.025,0,0],null,null,[650,0.02,0.01,0,0],[1,0.05,0.05,-0.8,0],[1,0,0.0031,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Spikes","Spike Webbing","Body Underbelly","Spots and Stripes"]},{"n":"Carnotaurus","v":[],"bp":"Carno_Character_BP","st":[[420,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0125,0.085,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Horns",null,null,"Patterning","Belly"]},{"n":"Castoroides","v":[],"bp":"Beaver_Character_BP","st":[[450,0.2,0.27,0.5,0],[180,0.1,0.1,0,0],[350,0.06,0,0.5,0],[750,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Feet",null,null,"Stripe","Tail"]},{"n":"Cat","v":[],"bp":"Cat_Character_BP","st":[[125,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[75,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[60,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body fur","Pattern definition","Calico",null,"Belly","Pattern"]},{"n":"Cat Ghost","v":["Ghost"],"bp":"Ghost_Cat_Character_BP","st":[[125,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[75,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[60,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body fur","Pattern definition","Calico",null,"Belly","Pattern"]},{"n":"Cave Minotaur","v":["Astraeos","Cave"],"bp":"CaveMinotaur_Character_BP_New","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Main","Spine",null,null,"Back",null]},{"n":"Ceratosaurus","v":[],"bp":"Ceratosaurus_Character_BP_ASA","st":[[550,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Accents",null,null,null,"Spikes","Body"]},{"n":"Ceratosaurus Ghost","v":["Ghost"],"bp":"Ghost_Ceratosaurus_Character_BP_ASA","st":[[550,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Stripes+face","Dark markings",null,"Spines","Spines","Body"]},{"n":"Cerberax","v":[],"bp":"Cerberus_Character_BP","st":[[1400,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[1350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[666,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base fire head body","Fire head","Electric head","Corrupt head","Highlights fire and electric","Belly"]},{"n":"Chalicotherium","v":[],"bp":"Chalico_Character_BP","st":[[600,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[4000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body",null,null,null,"Fur Highlights","Stripes and Belly"]},{"n":"Chalk Elemental","v":[],"bp":"ChalkGolem_Character_BP","st":[[25000,0.0125,0.135,-22000,0],[300,0.1,0.1,0,0],[5000,0.02,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[660,0.02,0.04,0,0],[1,0.05,0.1,0.125,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,"Body",null,null,null,null]},{"n":"Coelacanth","v":[],"bp":"Coel_Character_BP","st":[[30,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[15,0.06,0,0.5,0],[150,0.1,0.1,0,0],[100,0.1,0.1,0,0],null,null,[8,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Compy","v":[],"bp":"Compy_Character_BP","st":[[50,0.2,0.32,0.5,0],[100,0.1,0.1,0,0],[25,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[25,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,"Feathers","Patterning","Belly"]},{"n":"Concavenator","v":[],"bp":"Concavenator_Character_BP","st":[[425,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body highlights",null,"Underbelly/fur",null,null,"Main body"]},{"n":"Corrupted Arthropluera","v":["Corrupted","Extinction"],"bp":"Arthro_Character_BP_Corrupt","st":[[500,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":[null,null,null,null,null,null]},{"n":"Cosmo","v":["Steampunk"],"bp":"JumpingSpider_Character_BP","st":[[115,0.2,0.27,0.5,0],[100,0.1,0.125,0,0],[60,0.06,0,0.5,0],[200,0.12,0.115,0.12,0],[450,0.1,0.1,0,0.15],null,null,[70,0.02,0.04,0,0],[1,0.055,0.11,1.11,0.425],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body","Leg pattern ","Blue fur","Lantern","White fur","Red fur"]},{"n":"Cryolophosaurus","v":[],"bp":"Cryolophosaurus_Character_BP","st":[[500,0.2,0.3375,0.5,0],[350,0.1,0.1,0,0],[4000,0.06,0,0.5,0],[250,0.1,0.1,0.1,0],[1200,0.1,0.1,0,0.15],null,null,[500,0.02,0.04,0,0],[1,0.04,0.1,0.3,0.3],[1,0,0.025,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main blend 1",null,"Face highlights","Hyperglow","Fur","Main blend 2"]},{"n":"Daeodon","v":[],"bp":"Daeodon_Character_BP","st":[[900,0.2,0.27,0.5,0],[250,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Underbelly",null,"Top Highlights",null,null,"Body Main"]},{"n":"Deinonychus","v":["Valguero"],"bp":"Deinonychus_Character_BP","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base color","Feathers accents",null,"Feathers main","Stripes","Highlights"]},{"n":"Deinonychus Ghost","v":["Ghost"],"bp":"Ghost_Deinonychus_Character_BP","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Base color","Feathers accents",null,"Feathers main","Stripes","Highlights"]},{"n":"Deinosuchus","v":[],"bp":"DeinosuchusASA_Character_BP","st":[[1000,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[1350,0.06,0,0.5,0],null,[3000,0.1,0.1,0,0],null,null,[600,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main",null,null,null,"Back","Belly"]},{"n":"Deinotherium","v":[],"bp":"DeinotheriumASA_Character_BP","st":[[1750,0.2,0.2025,0.5,0],[450,0.1,0.1,0,0],[2500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Fur",null,null,"Highlights","Stripes"]},{"n":"Desmodus","v":["Fjordur"],"bp":"Desmodus_Character_BP","st":[[325,0.17,0.27,0.5,0],[500,0.05,0.06,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base","Stripe","Wing veins",null,"Back","Wings"]},{"n":"Dilophosaur","v":[],"bp":"Dilo_Character_BP","st":[[130,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[75,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[45,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Back and Face","Spike Tips","Spine and Spike Base","Frill, Crest and Belly","Legs and Arms"]},{"n":"Dimetrodon","v":[],"bp":"Dimetro_Character_BP","st":[[350,0.2,0.27,0.65,0],[300,0.1,0.1,0,0],[750,0.06,0,0.5,0],[500,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[250,0.02,0.04,0,0],[1,0.02,0.04,0.8,0.5],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Side Fin","Sail","Sail Spines","Legs and Belly",null]},{"n":"Dimorphodon","v":[],"bp":"Dimorph_Character_BP","st":[[125,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Face and Wing Membrane","Feathers"]},{"n":"Dinopithecus","v":["LostIsland"],"bp":"Dinopithecus_Character_BP","st":[[775,0.2,0.243,0.5,0],[800,0.1,0.1,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base Skin","Iris","Blue nose","Belly","Red nose","Fur"]},{"n":"Diplocaulus","v":[],"bp":"Diplocaulus_Character_BP","st":[[250,0.2,0.27,0.5,0],[165,0.1,0.1,0,0],[220,0.06,0,0.5,0],[1050,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.25],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Fins",null,null,"Body Highlights","Underbelly"]},{"n":"Diplodocus","v":[],"bp":"Diplodocus_Character_BP","st":[[1700,0.2,0.27,0.5,0],[550,0.1,0.1,0,0],[3000,0.06,0,0.5,0],[300,0.1,0.1,0,0],[10000,0.1,0.1,0,0],null,null,[800,0.02,0.04,0,0],[1,0,0,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Sides, Legs, and Accents","Spines",null,null,"Back","Underside"]},{"n":"Dire Bear","v":[],"bp":"Direbear_Character_BP","st":[[400,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[270,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[650,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back and Head",null,null,null,null,"Belly and Legs"]},{"n":"Dire Polar Bear","v":["Ragnarok"],"bp":"Polar_Bear","st":[[400,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[270,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[650,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":[null,null,null,null,null,null]},{"n":"Direwolf","v":[],"bp":"Direwolf_Character_BP","st":[[330,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[170,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Tail, Back, and Face","Feet"]},{"n":"Direwolf Ghost","v":["Ghost"],"bp":"Ghost_Direwolf_Character_BP","st":[[330,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[170,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Diseased Leech","v":[],"bp":"Leech_Character_Diseased","st":[[120,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[10,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,null,null,null,null,null]},{"n":"Dodo","v":[],"bp":"Dodo_Character_BP","st":[[40,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Face","Beak","Forehead, Neck, and Feet","Head","Wings and Patterning"]},{"n":"Dodo Wyvern","v":["ScorchedEarth"],"bp":"DodoWyvern_Character_BP","st":[[666666,0.2,0.2,0.3,0],[400,0.1,0.1,0,0],[350,0.06,0,0.5,0],[2000,0.1,0.1,0,0],[2600,0.1,0.1,0,0],null,null,[3000,0.02,0.02,0,0],[1,0.05,0.04,0.3,0.3],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Scales Main","Wings Main","Fins Highlight","Body Highlights"]},{"n":"Doedicurus","v":[],"bp":"Doed_Character_BP","st":[[850,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0.6,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.9,"ng":false,"br":true,"cr":["Shell and Plates","Spikes and Claws",null,null,"Shell Patterning","Underside"]},{"n":"Drakeling (Autumn)","v":["Companion"],"bp":"ShoulderDragon_Character_BP_Autumn","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Lower","Wing Pattern","Frill Tips & Stripes","Wings","Underside","Upper"]},{"n":"Drakeling (Spring)","v":["Companion"],"bp":"ShoulderDragon_Character_BP_Spring","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Lower","Wing & Frill Patterns","Pattern","Wings & Frills","Underside","Main"]},{"n":"Drakeling (Summer)","v":["Companion"],"bp":"ShoulderDragon_Character_BP_Summer","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Wing Pattern","Wings & Horns","Wing Secondary","Underside","Body Highlights"]},{"n":"Drakeling (Winter)","v":["Companion"],"bp":"ShoulderDragon_Character_BP_Winter","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Underside","Wing Veins",null,"Wings & Frills","Main","Legs"]},{"n":"Dreadmare","v":[],"bp":"DarkPegasus_Character_BP","st":[[1000,0.2,0.27,0.5,0],[600,0.1,0.1,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1750,0.1,0.1,0,0],null,null,[450,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Feathers","Scales","Feather tips","Underside","Back"]},{"n":"Dreadnoughtus","v":[],"bp":"Dreadnoughtus_Character_BP","st":[[100000,0.032,0.012672,-80000,0],[300,0.1,0.1,0,0],[3250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[13500,0.1,0.1,0,0],null,null,[3000,0.02,0.04,0,0],[1,0.033333,0.066667,0,0],[1,0,0.02,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Stripe Outlines","Secondary Pattern",null,null,"Stripes","Body Main"]},{"n":"Dung Beetle","v":[],"bp":"DungBeetle_Character_BP","st":[[200,0.2,0.135,0.5,0],[100,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[5,0.02,0.08,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Shell","Legs",null,"Palps and Leg Patterning","Shell Patterning","Underside"]},{"n":"Dunkleosteus","v":[],"bp":"Dunkle_Character_BP","st":[[710,0.2,0.27,0.3,0],[200,0.1,0.1,0,0],[1150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[910,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Spots","Head"]},{"n":"Elderclaw","v":[],"bp":"SpiritBear_Character_BP","st":[[800,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[250,0.1,0.1,0,0],[2800,0.1,0.1,0,0],null,null,[650,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Wood Main","Flowers","Flowers & Butterflies","Mushrooms","Wood Accent","Wood Secondary"]},{"n":"Electrophorus","v":[],"bp":"Eel_Character_BP","st":[[180,0.2,0.27,-0.2,0],[165,0.1,0.1,0,0],[175,0.06,0,0.5,0],[1050,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.25],[1,0,0.01,0,0],null,null],"ds":927,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Upper Body","Fins","Spots","Fin Tips",null,"Lower Body"]},{"n":"Ember Crystal Wyvern","v":["CrystalIsles"],"bp":"CrystalWyvern_Character_BP_Ember","st":[[1295,0.15,0.162,-785,0],[325,0.05,0.05,0,0],[545,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Scales Main",null,"Fins Highlight","Body Highlights"]},{"n":"Equus","v":[],"bp":"Equus_Character_BP","st":[[240,0.2,0.27,0.5,0],[560,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0175,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["BodyMain",null,null,null,"Stripes","Underbelly and Highlights"]},{"n":"Fasolasuchus","v":["ScorchedEarth"],"bp":"Fasola_Character_BP","st":[[950,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[1350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2750,0.1,0.1,0,0],null,null,[450,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Body Spots","Spikes",null,"Body Rings","Head/Back Highlights"]},{"n":"Featherlight","v":["Aberration"],"bp":"LanternBird_Character_BP","st":[[115,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[60,0.06,0,0.5,0],[180,0.11,0.11,0.2,0],[450,0.1,0.1,0,0.15],null,null,[70,0.02,0.04,0,0],[1,0.065,0.12,1.1,0.5],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body","Legs",null,"Lantern","Belly","Emissive"]},{"n":"Ferox","v":["Genesis","Large"],"bp":"Shapeshifter_Large_Character_BP","st":[[1100,0.2,0.27,0.5,0],[1000,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.001,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back","Skin",null,null,"Main body","Stripes"]},{"n":"Ferox","v":["Genesis","Small"],"bp":"Shapeshifter_Small_Character_BP","st":[[55,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[55,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.5,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back","Skin",null,null,"Main body","Stripes"]},{"n":"Fire Wyvern","v":[],"bp":"Ragnarok_Wyvern_Override","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back",null,"Belly","Wings main","Fins highlight","Body highlights"]},{"n":"Gacha","v":["Extinction"],"bp":"Gacha_Character_BP","st":[[750,0.2,0.27,0.5,0],[325,0.1,0.1,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[550,0.04,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,[1,0.01,0.01,0,0]],"ds":2975,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Skin",null,"Light stripe","Dark stripe","Algae","Fur main"]},{"n":"Gallimimus","v":[],"bp":"Galli_Character_BP","st":[[150,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[270,0.02,0.04,0,0],[1,0.05,0.2,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Feathers",null,"Back Accents","Spine and Feather Tips","Lower Body"]},{"n":"Gargantar","v":[],"bp":"Gargantar_Character_BP","st":[[1500,0.15,0.108,0.5,0],[400,0.05,0.05,0,0],[475,0.06,0,0.5,0],[150,0.1,0.1,0,0],[4500,0.1,0.1,0,0],null,null,[950,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main upper","Accent accents","Belly",null,"Accents","Main lower"]},{"n":"Gasbags","v":["Extinction"],"bp":"GasBags_Character_BP","st":[[650,0.2,0.27,0.5,0],[600,0.1,0.1,0,0],[450,0.06,0,0.5,0],[1000,0.09,0.09,0,0],[3500,0.1,0.1,0,0],null,null,[3000,0.02,0.0125,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back stripe",null,"Splotches",null,"Back spots","Main body"]},{"n":"Giant Queen Bee","v":[],"bp":"Bee_Queen_Character_BP","st":[[80,0,0,0.5,0],[200,0,0,0,0],[400,0.06,0,0.5,0],[150,0,0,0,0],[800,0,0,0,0],null,null,[150,0,0,0,0],[1,0,0,0,0],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Face & Stripes","Leg Highlights",null,null,null,"Main"]},{"n":"Gigadesmodus","v":["LostColony"],"bp":"BossBat_Character_BP","st":[[1450,0.15,0.162,-785,0],[750,0.05,0.05,0,0],[2000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[600,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Wing edge","Main 1","Horn tips","Horn highlight","Main 2",null]},{"n":"Giganotosaurus","v":[],"bp":"Gigant_Character_BP","st":[[80000,0.0005,0.002,-63000,0],[400,0.0005,0.01,0,0],[10000,0.06,0,0,0],[150,0.0025,0.025,0,0],[4000,0.0025,0.025,0,0],null,null,[700,0.01,0.01,0,0],[1,0.05,0.05,-0.8,0],[1,0,0.0031,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Back, Hands, and Feet","Belly"]},{"n":"Gigantopithecus","v":[],"bp":"Bigfoot_Character_BP","st":[[640,0.1,0.27,0.5,0],[300,0.1,0.1,0,0],[1100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[220,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.06,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Fur Mane",null,null,null,"Fur Accent","Skins"]},{"n":"Gigantoraptor","v":[],"bp":"Gigantoraptor_Character_BP","st":[[770,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[950,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[320,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Feathers main","Wattle","Wattle pattern","Accent","Skin","Main pattern"]},{"n":"Gigantoraptor Ghost","v":["Ghost"],"bp":"Ghost_Gigantoraptor_Character_BP","st":[[770,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[950,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[320,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Feathers main","Wattle","Wattle pattern","Accent","Skin","Main pattern"]},{"n":"Gloon","v":["LostColony"],"bp":"LostCharge_LanternPet_Char_BP","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[600,0.1,0.1,0,0],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main blend 1","Back spikes","Eye stalk & Blobs",null,"Accents","Main blend 2"]},{"n":"Glowtail","v":["Aberration"],"bp":"LanternLizard_Character_BP","st":[[115,0.2,0.27,0.5,0],[100,0.1,0.125,0,0],[60,0.06,0,0.5,0],[200,0.12,0.115,0.12,0],[450,0.1,0.1,0,0.15],null,null,[70,0.02,0.04,0,0],[1,0.055,0.11,1.11,0.425],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body",null,"Wings","Lantern","Belly","Back stripes"]},{"n":"Grand Tortugar","v":[],"bp":"GrandTortugar_Character_BP","st":[[1050,0.2,0.27,0.5,0],[260,0.1,0.1,0,0],[1000,0.06,0,0.5,0],null,[3500,0.1,0.1,0,0],null,null,[2250,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Shell main",null,"Leg scales","Emissive","Soft belly","Shell accent"]},{"n":"Griffin","v":["Ragnarok"],"bp":"Griffin_Character_BP","st":[[950,0.15,0.216,-450,0],[225,0.05,0.06,0,0],[1500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[280,0.02,0.04,0,0],[1,0.05,0.1,-0.5,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Feathers Main",null,null,null,"Rear","Feather Underside"]},{"n":"Helicoprion","v":[],"bp":"Helicoprion_Character_BP","st":[[1300,0.2,0.30375,0.3,0],[500,0.1,0.1,0,0],[800,0.06,0,0.5,0],null,[2000,0.1,0.1,0,0.15],null,null,[500,0.025,0.055,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,[0,0.01,0.002,0,0]],"ds":2967,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main",null,null,null,"Belly","Spots"]},{"n":"Hesperornis","v":[],"bp":"Hesperornis_Character_BP","st":[[95,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0.15],null,null,[70,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Feet",null,"Back Highlights","Underbelly"]},{"n":"Hyaenodon","v":[],"bp":"Hyaenodon_Character_BP","st":[[175,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[170,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Body Highlights and spots","Underbelly"]},{"n":"Ice Elemental","v":[],"bp":"IceGolem_Character_BP","st":[[25000,0.0125,0.135,-22000,0],[300,0.1,0.1,0,0],[5000,0.02,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[660,0.02,0.04,0,0],[1,0.05,0.1,0.125,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,"Body",null,null,null,null]},{"n":"Ice Wyvern","v":[],"bp":"Wyvern_Character_BP_Ice","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Belly","Highlights"]},{"n":"Ichthyornis","v":[],"bp":"Ichthyornis_Character_BP","st":[[50,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[120,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0.15],null,null,[55,0.02,0.04,0,0],[1,0.05,0.1,0.65,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":2,"ng":false,"br":true,"cr":["Body Main","Feet","Beak",null,"Feathers","Head Highlights"]},{"n":"Ichthyosaurus","v":[],"bp":"Dolphin_Character_BP","st":[[275,0.05,0.0675,0.3,0],[300,0.2,0.2,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.05,1,0.4],[1,0,0.015,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Back and Fins","Belly"]},{"n":"Iguanodon","v":[],"bp":"Iguanodon_Character_BP","st":[[250,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[210,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[375,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.02,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["MainBody",null,null,null,"Stripes","Highlights and Belly"]},{"n":"Jerboa","v":["ScorchedEarth"],"bp":"Jerboa_Character_BP","st":[[55,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[120,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.5,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Paws and Back",null,"Accent (mix)",null,"Stripes","Belly and Highlights"]},{"n":"Kairuku","v":[],"bp":"Kairuku_Character_BP","st":[[95,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0.15],null,null,[70,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back and Markings","Beak","Feet",null,"Osteoderms","Main"]},{"n":"Kaprosuchus","v":[],"bp":"Kaprosuchus_Character_BP","st":[[200,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Top Fins",null,null,"Top Scales","Underbelly"]},{"n":"Karkinos","v":["Aberration"],"bp":"Crab_Character_BP","st":[[1200,0.2,0.216,0.5,0],[600,0.1,0.1,0,0],[800,0.05,0,0.5,0],[150,0.1,0.1,0,0],[5000,0.1,0.1,0,0],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Highlights","Underbody"]},{"n":"Kentrosaurus","v":[],"bp":"Kentro_Character_BP","st":[[650,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Plates Main","Spikes","Plates Highlights","Body Highlights","Underbelly"]},{"n":"Kirayli","v":["Astraeos"],"bp":"Kirayli_Character_BP","st":[[100,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[85,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[90,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":[null,null,null,null,null,null]},{"n":"Lamprey","v":["Aberration"],"bp":"Lamprey_Character","st":[[40,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[10,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,null,null,null,null,null]},{"n":"Leech","v":[],"bp":"Leech_Character","st":[[40,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[10,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,null,null,null,null,null]},{"n":"Lightning Wyvern","v":["ScorchedEarth"],"bp":"Wyvern_Character_BP_Lightning","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Wings & Fins","Lightning","Scales Top","Belly & Highlights"]},{"n":"Liopleurodon","v":[],"bp":"Liopleurodon_Character_BP","st":[[3200,0.2,0.27,0.3,0],[800,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[1000,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":false,"cr":["Body Main",null,null,null,"Body Spots","Body Highlights"]},{"n":"Lumina","v":[],"bp":"Lumina_Character_BP","st":[[800,0.15,0.108,0.5,0],[650,0.05,0.05,0,0],[750,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1650,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main",null,"Wing Membrane","Wing Accent","Belly","Back"]},{"n":"Lymantria","v":["ScorchedEarth"],"bp":"Moth_Character_BP","st":[[260,0.2,0.27,0.5,0],[150,0.05,0.06,0,0],[550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[175,0.02,0.03,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Facial Highlights","Wings Main","Legs","Wing Highlights","Facial Main","Stinger and Underbody"]},{"n":"Lystrosaurus","v":[],"bp":"Lystro_Character_BP","st":[[90,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[100,0.06,0,0.5,0],[215,0.1,0.1,0,0],[500,0.1,0.1,0,0.15],null,null,[90,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Underside","Spine and Feet"]},{"n":"Maeguana","v":[],"bp":"Maelizard_Character_BP","st":[[700,0.085,0.2025,0,0],[450,0.05,0.05,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Main body",null,"Stripes","Beak","Belly","Back"]},{"n":"Maewing","v":["Genesis2"],"bp":"MilkGlider_Character_BP","st":[[700,0.085,0.2025,0,0],[450,0.05,0.05,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Main body","Belly","Stripes","Beak","Membrane accents","Back"]},{"n":"Magmasaur","v":["Genesis"],"bp":"Cherufe_Character_BP","st":[[3000,0.05,0.135,3000,0],[500,0.05,0.05,0,0],[725,0.06,0,0.5,0],[200,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[550,0.02,0.04,0,0],[1,0.03,0.03,-0.25,0.4],[1,0,0.005,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main",null,"Tips",null,null,"Gradient"]},{"n":"Malwyn","v":["LostColony"],"bp":"DevilFox_Character_BP","st":[[850,0.2,0.27,0.66,0],[350,0.1,0.1,0,0],[2450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[425,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main blend",null,"Skull",null,"Belly","Accent blend"]},{"n":"Mammoth","v":[],"bp":"Mammoth_Character_BP","st":[[1020,0.2,0.27,0.5,0],[330,0.1,0.1,0,0],[550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[5000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Fur Main","Highlights","Tusks and Toes",null,"Fur Accent","Underside"]},{"n":"Managarmr","v":["Extinction"],"bp":"IceJumper_Character_BP","st":[[825,0.2,0.27,0.5,0],[300,0.1,0.06,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1.5,0,0.0035,0.085,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Side Highlights","Facial Highlights","Wings Main","Body Main","Wing Highlights"]},{"n":"Manta","v":[],"bp":"Manta_Character_BP","st":[[320,0.05,0.0675,0.5,0],[270,0.2,0.2,0,0],[700,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.05,1,0.4],[1,0,0.0125,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Spots",null,null,"Patterning",null]},{"n":"Mantis","v":["ScorchedEarth"],"bp":"Mantis_Character_BP","st":[[275,0.2,0.135,0.5,0],[150,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[220,0.02,0.08,0,0],[1,0.025,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Back","Underneath"]},{"n":"Mantis Ghost","v":["Ghost","ScorchedEarth"],"bp":"Ghost_Mantis_Character_BP","st":[[275,0.2,0.135,0.5,0],[150,0.1,0.1,0,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[220,0.02,0.08,0,0],[1,0.025,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body",null,null,null,"Back","Underneath"]},{"n":"Megachelon","v":["Genesis"],"bp":"GiantTurtle_Character_BP","st":[[1920,0.2,0.2295,0.5,0],[100,0.1,0.1,0,0],[10000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8800,0.1,0.1,0,0],null,null,[2500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Dark Scales","Rocks",null,null,"Light Belly",null]},{"n":"Megalania","v":[],"bp":"Megalania_Character_BP","st":[[480,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[700,0.06,0,0.5,0],[200,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Stripes","Belly"]},{"n":"Megaloceros","v":[],"bp":"Stag_Character_BP","st":[[300,0.2,0.27,0.5,0],[280,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[220,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body & Fur",null,"Antlers",null,"Patterning","Fur Tint"]},{"n":"Megalodon","v":[],"bp":"Megalodon_Character_BP","st":[[600,0.2,0.27,0.3,0],[320,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Stripes","Belly"]},{"n":"Megalodon Ghost","v":["Ghost"],"bp":"Ghost_Megalodon_Character_BP","st":[[600,0.2,0.27,0.3,0],[320,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body top",null,null,null,"Stripes","Underside"]},{"n":"Megalosaurus","v":[],"bp":"Megalosaurus_Character_BP","st":[[1025,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[775,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Megaraptor","v":[],"bp":"ValMegaraptor_Character_BP","st":[[350,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[400,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2250,0.1,0.1,0,0.15],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0125,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Cheeks & Underbelly",null,"Main 1","Accents",null,"Main 2"]},{"n":"Megatherium","v":[],"bp":"Megatherium_Character_BP","st":[[740,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[270,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[725,0.02,0.045,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["BodyMain",null,null,null,null,"Feet and Hands"]},{"n":"Mesopithecus","v":[],"bp":"Monkey_Character_BP","st":[[115,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[60,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[70,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,"Eye Markings",null,"Back, Lower Limbs, and Tail Tip","Skins"]},{"n":"Microraptor","v":[],"bp":"Microraptor_Character_BP","st":[[130,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[75,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[45,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Face & Crest","Claws & Feet",null,"Head & Neck","Belly & Feather Bands"]},{"n":"Morellatops","v":["ScorchedEarth"],"bp":"camelsaurus_Character_BP","st":[[400,0.2,0.27,0.5,0],[220,0.1,0.1,0,0],[315,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],[750,0.01,0.015,0,0],null,[440,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.964,0],null,null],"ds":959,"sk":544,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Spine",null,"Spikes","Furred Stripes","Underside and Legs"]},{"n":"Mosasaurus","v":[],"bp":"Mosa_Character_BP","st":[[3600,0.12,0.21,0.3,0],[400,0.1,0.1,0,0],[3000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0.15],null,null,[1300,0.02,0.04,0,0],[1,0.05,0.1,0.65,0.4],[1,0,0.005,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,"Spinal Ridge",null,"Highlights","Underside"]},{"n":"Moschops","v":[],"bp":"Moschops_Character_BP","st":[[375,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[300,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Spikes",null,null,"Back","Underside & Tail"]},{"n":"Nameless","v":["Aberration"],"bp":"ChupaCabra_Character_BP","st":[[220,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[220,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[180,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body Secondary",null,null,null,"Fur Main","Belly"]},{"n":"Neophyte","v":["Gargoyle","LostColony"],"bp":"Neophyte_Char_BP_Gargoyle","st":[[13500,0.2,0.216,-900,0],[225,0.05,0.06,0,0],[1500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[280,0.02,0.04,0,0],[1,0.05,0.1,-0.5,0.4],null,null,null],"ds":407,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":false,"cr":["Wing and main body",null,null,null,"Fur","Feather highlights"]},{"n":"Noglin","v":["Genesis2"],"bp":"BrainSlug_Character_BP","st":[[50,0.2,0.32,0.5,0],[100,0.1,0.1,0,0],[25,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[80,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":false,"cr":["Main","Emissive","Pattern","Fur","Belly Light","Pattern Detail"]},{"n":"Oasisaur","v":["Frontier","ScorchedEarth"],"bp":"Oasisaur_Character_BP","st":[[20000,0.2,0.2295,0.5,0],[100,0.1,0.1,0,0],[10000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8800,0.1,0.1,0,0],null,null,[2500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":663,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Main","Claw Highlights","Skin","Head Highlights","Accents","Belly & Freckles"]},{"n":"Onyc","v":[],"bp":"Bat_Character_BP","st":[[250,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body","Claws","Membrane Shading",null,"Abdomen and Legs","Wing Membrane"]},{"n":"Ossidon","v":["LostColony"],"bp":"SnowMonster_Character_BP","st":[[1430,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,"Bone Tips","Claws","Belly & Highlights","Bones & Fur"]},{"n":"Otter","v":[],"bp":"Otter_Character_BP","st":[[40,0.2,0.27,0.5,0],[180,0.1,0.1,0,0],[350,0.06,0,0.5,0],[600,0.1,0.1,0,0],[400,0.1,0.1,0,0],null,null,[30,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Body Stripes and Highlights","Underbelly"]},{"n":"Otter Ghost","v":["Ghost"],"bp":"Ghost_Otter_Character_BP","st":[[40,0.2,0.27,0.5,0],[180,0.1,0.1,0,0],[350,0.06,0,0.5,0],[600,0.1,0.1,0,0],[400,0.1,0.1,0,0],null,null,[30,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body main",null,null,null,"Body stripes and highlights","Underbelly"]},{"n":"Oviraptor","v":[],"bp":"Oviraptor_Character_BP","st":[[140,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[125,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0.15],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,1,0.15],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Crest and Beak","Feathers",null,"Patterning","Belly"]},{"n":"Ovis","v":[],"bp":"Sheep_Character_BP","st":[[100,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[85,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[90,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Horns","Hooves and Eye Regions"]},{"n":"Pachy","v":[],"bp":"Pachy_Character_BP","st":[[165,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[160,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,"Spikes and Claws","Beak and Plates","Body Accent"]},{"n":"Pachyrhinosaurus","v":[],"bp":"Pachyrhino_Character_BP","st":[[375,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,"Spikes and Horns",null,"Back","Face, Legs, and Underside"]},{"n":"Palaeoctopus","v":[],"bp":"Palaeoctopus_Character_BP","st":[[1050,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[2000,0.06,0,0.5,0],null,[2500,0.1,0.1,0,0],null,null,[1000,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body main","Belly main","Glow","Belly accent","Body secondary","Pattern"]},{"n":"Paraceratherium","v":[],"bp":"Paracer_Character_BP","st":[[1026,0.2,0.172125,0.5,0],[300,0.1,0.1,0,0],[1300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6500,0.1,0.1,0,0],null,null,[850,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Back","Underside"]},{"n":"Parasaur","v":[],"bp":"Para_Character_BP","st":[[200,0.2,0.27,0.5,0],[450,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[480,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Beak and Frill","Frill Edge","Crest","Patterning","Belly"]},{"n":"Parrot","v":[],"bp":"Parrot_Character_BP","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Feathers main","Wings","Long feathers","Face","Belly","Highlights"]},{"n":"Party Dodo","v":[],"bp":"Dodo_Character_BP_Birthday","st":[[40,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Pegomastax","v":[],"bp":"Pegomastax_Character_BP","st":[[120,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[30,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[55,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.5,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main",null,"Underside",null,"Feathers","Limb Highlights"]},{"n":"Pelagornis","v":[],"bp":"Pela_Character_BP","st":[[240,0.2,0.27,0.5,0],[180,0.05,0.04,0,0],[120,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[150,0.02,0.03,0,0],[1,0.05,0.075,0.65,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Feathers",null,null,null,null,"Skin and Wind/Tail Tips"]},{"n":"Phiomia","v":[],"bp":"Phiomia_Character_BP","st":[[300,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[240,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Spots 1","Spots 2"]},{"n":"Phoenix","v":["ScorchedEarth"],"bp":"Phoenix_Character_BP","st":[[640,0.2,0.27,0.5,0],[352,0.1,0.1,0,0],[200,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[324,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Beak and Feet",null,"Fire","Feather Highlights","Underbelly & Wing Highlights"]},{"n":"Piranha","v":[],"bp":"Piranha_Character_BP","st":[[150,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[15,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.284,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Unknown","Unknown","Unknown",null,"Unknown","Unknown"]},{"n":"Plesiosaur","v":[],"bp":"Plesiosaur_Character_BP","st":[[2400,0.12,0.162,0.16,0],[800,0.1,0.1,0,0],[1600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[5000,0.1,0.1,0,0.15],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.005,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Facial Fins","Underside Highlights",null,"Topside","Underside & Fin Tips"]},{"n":"Poison Wyvern","v":["ScorchedEarth"],"bp":"Wyvern_Character_BP_Poison","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Wings Main","Scales Main","Wings Highlight","Scale Highlights","Body Highlights"]},{"n":"Polar Bear","v":[],"bp":"Direbear_Character_Polar","st":[[800,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[270,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[650,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back",null,null,null,null,"Body"]},{"n":"Polar Purlovia","v":[],"bp":"Purlovia_Character_BP_Polar","st":[[550,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[4000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown",null,"Unknown","Unknown","Unknown","Unknown"]},{"n":"Procoptodon","v":[],"bp":"Procoptodon_Character_BP","st":[[400,0.2,0.27,0.75,0],[350,0.1,0.1,0.1,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[550,0.02,0.04,0,0],[1,0.05,0.1,0.2,0.25],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Back Stripes","Inner Ear, Snout, Belly, Appendages"]},{"n":"Pteranodon","v":[],"bp":"Ptero_Character_BP","st":[[210,0.2,0.15,0.5,0],[150,0.05,0.04,0,0],[120,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[120,0.02,0.03,0,0],[1,0.05,0.075,0.65,0.4],[1,0,0.02,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.9,"ng":false,"br":true,"cr":["Patterning","Wing Base","Face, Crest, and Hands","Inner Crest","Wing Membrane","Body"]},{"n":"Pulmonoscorpius","v":[],"bp":"Scorpion_Character_BP","st":[[280,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Plate Edges","Claw Stripes, Barb Patterning, Body Joints","Limb Joints","Body","Plates","Legs"]},{"n":"Purlovia","v":[],"bp":"Purlovia_Character_BP","st":[[275,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[4000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body",null,null,null,"Belly","Highlights"]},{"n":"Purlovia","v":["Gargoyle","LostColony"],"bp":"Purlovia_Character_BP_Polar_Gargoyle","st":[[550,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[4000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Pyromane","v":[],"bp":"FireLion_Character_BP","st":[[600,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.04,0.08,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":[null,null,"Main body","Lava cracks / Flames",null,"Highlights"]},{"n":"Quetzal","v":[],"bp":"Quetz_Character_BP","st":[[1200,0.2,0.108,0.5,0],[800,0.05,0.05,0,0],[1850,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[800,0.02,0.05,0,0],[1,0.04,0.1,0.4,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.85,"ng":false,"br":true,"cr":["Wing Membrane","Crest","Skins","Freckles","Beak","Body Feathers"]},{"n":"R-Daeodon","v":["Eden","Genesis2"],"bp":"Daeodon_Character_BP_Eden","st":[[900,0.2,0.27,0.5,0],[250,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Accents","Stripes","Accent","Belly","Back"]},{"n":"R-Direwolf","v":["Eden","Genesis2"],"bp":"Direwolf_Character_BP_Eden","st":[[330,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[170,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main",null,null,null,"Belly","Light spots"]},{"n":"R-Equus","v":["Eden","Genesis2"],"bp":"Equus_Character_BP_Eden","st":[[240,0.2,0.27,0.5,0],[560,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0175,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main",null,"Borders","Spots","Extra","Back"]},{"n":"R-Gasbags","v":["Eden","Genesis2"],"bp":"GasBags_Character_BP_Eden","st":[[650,0.2,0.27,0.5,0],[600,0.1,0.1,0,0],[450,0.06,0,0.5,0],[1000,0.09,0.09,0,0],[3500,0.1,0.1,0,0],null,null,[3000,0.02,0.0125,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main",null,"Spots",null,"Belly","Back"]},{"n":"R-Megatherium","v":["Eden","Genesis2"],"bp":"Megatherium_Character_BP_Eden","st":[[740,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[270,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[725,0.02,0.045,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Accents","Stripes","Accent","Back","Accents"]},{"n":"R-Parasaur","v":["Eden","Genesis2"],"bp":"Para_Character_BP_Eden","st":[[200,0.2,0.27,0.5,0],[450,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[480,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Accents","Stripes","Accent","Belly","Back"]},{"n":"R-Procoptodon","v":["Eden","Genesis2"],"bp":"Procoptodon_Character_BP_Eden","st":[[400,0.2,0.27,0.75,0],[350,0.1,0.1,0.1,0],[350,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[550,0.02,0.04,0,0],[1,0.05,0.1,0.2,0.25],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Accents",null,null,"Belly","Back"]},{"n":"R-Reaper King","v":["Genesis2","Male"],"bp":"Xenomorph_Character_BP_Male_Gen2","st":[[2500,0.2,0.27,0.5,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":true,"br":true,"cr":["Main color","Center belly","Membrane",null,"Belly","Pattern"]},{"n":"R-Reaper Queen","v":["Female","Genesis2"],"bp":"Xenomorph_Character_BP_Female_Gen2","st":[[45000,0.0052,0.135,-38500,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":true,"br":true,"cr":[null,null,null,null,null,null]},{"n":"R-Snow Owl","v":["Eden","Genesis2"],"bp":"Owl_Character_BP_Eden","st":[[325,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[375,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Accents","Stripes","Accent","Belly","Back"]},{"n":"R-Thylacoleo","v":["Eden","Genesis2"],"bp":"Thylacoleo_Character_BP_Eden","st":[[700,0.2,0.189,0.5,0],[400,0.1,0.1,0,0],[700,0.06,0,0.5,0],[200,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Accents","Stripes","Accent","Belly","Back"]},{"n":"Raptor","v":[],"bp":"Raptor_Character_BP","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Accent","Feather Tips",null,"Body and Feathers","Spine","Belly"]},{"n":"Ravager","v":["Aberration"],"bp":"CaveWolf_Character_BP","st":[[400,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[500,0.02,0.04,0,0],[1,0.04,0.08,0.3,0.3],[1,0,0.01,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,null,null,"Underbelly","Top Highlights"]},{"n":"Reaper Queen","v":["Aberration","Female"],"bp":"Xenomorph_Character_BP_Female","st":[[45000,0.0052,0.135,-38500,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body Main",null,null,null,"Underbelly","Back color"]},{"n":"Rex","v":[],"bp":"Rex_Character_BP","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Spine",null,null,"Back","Belly"]},{"n":"Rex Ghost","v":["Ghost"],"bp":"Ghost_Rex_Character_BP","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown",null,"Unknown","Unknown","Unknown"]},{"n":"Rhyniognatha","v":[],"bp":"Rhynio_Character_BP","st":[[900,0.136,0.1404,0.5,0],[350,0.05,0.06,0,0],[800,0.06,0,0.5,0],[800,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[1100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Body Stripes","Eyes","Underbelly","Stripe Highlights","Leg Highlights"]},{"n":"Rhyniognatha Drone","v":["Astraeos"],"bp":"RhynioDrone_Character_BP","st":[[900,0.136,0.1404,0.5,0],[350,0.05,0.06,0,0],[800,0.06,0,0.5,0],[800,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[1100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body main",null,null,null,"Body stripes and highlights","Underbelly"]},{"n":"Rock Drake","v":["Aberration"],"bp":"RockDrake_Character_BP","st":[[1950,0.085,0.2025,-1050,0],[450,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main 1","Feathers","Scales","Feather Highlights","Belly & Rachis","Body Main 2"]},{"n":"Rock Elemental","v":["ScorchedEarth"],"bp":"RockGolem_Character_BP","st":[[25000,0.0125,0.135,-22000,0],[300,0.1,0.1,0,0],[5000,0.02,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[660,0.02,0.04,0,0],[1,0.05,0.1,0.125,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,"Body",null,null,null,null]},{"n":"Roll Rat","v":["Aberration"],"bp":"MoleRat_Character_BP","st":[[850,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.9,"ng":false,"br":true,"cr":["Body Highlights","Freckles",null,null,"Scales","Belly / Body"]},{"n":"Sabertooth","v":[],"bp":"Saber_Character_BP","st":[[250,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.32,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,null,null,"Mane and Face","Stripes"]},{"n":"Sabertooth Salmon","v":[],"bp":"Salmon_Character_BP","st":[[65,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[15,0.06,0,0.5,0],[150,0.1,0.1,0,0],[100,0.1,0.1,0,0],null,null,[18,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Sarco","v":[],"bp":"Sarco_Character_BP","st":[[400,0.2,0.27,0.65,0],[450,0.1,0.1,0,0],[400,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.8,0.5],[1,0,0.01,0.6,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body",null,"Stripe, Face, and Tail","Snout and Tail Tip","Plates","Body Accent"]},{"n":"Scorpion","v":["Astraeos"],"bp":"AstralScorpionKing_Character_BP","st":[[20000,0.002,0.27,0.5,0],[100,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[100,0.1,0.1,0,0],null,null,[100,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Dark muted-g","Dark muted-g","Unknown","Dark muted-g","Unknown","Dark muted-g"]},{"n":"Scrap Elemental","v":["ClubARK"],"bp":"ScrapGolem_Character_BP_ClubARK","st":[[25000,0.0125,0.135,-22000,0],[300,0.1,0.1,0,0],[5000,0.02,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[660,0.02,0.04,0,0],[1,0.05,0.1,0.125,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,"Body",null,null,null,null]},{"n":"Shadowmane","v":["Genesis2"],"bp":"LionfishLion_Character_BP","st":[[825,0.2,0.27,0.5,0],[450,0.1,0.1,0,0],[700,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[425,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body",null,"Glowing Spots","Body Highlights","Belly","Back"]},{"n":"Shastasaurus","v":[],"bp":"Shastasaurus_Character_BP","st":[[4500,0.12,0.21,0.3,0],[300,0.1,0.1,0,0],[3000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0.15],null,null,[3000,0.02,0.04,0,0],[1,0.05,0.1,0.65,0.4],[1,0,0.005,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body main",null,"Belly",null,"Accents","Sides"]},{"n":"Shinehorn","v":["Aberration"],"bp":"LanternGoat_Character_BP","st":[[115,0.2,0.27,0.5,0],[180,0.11,0.11,0.1,0],[60,0.06,0,0.5,0],[180,0.11,0.11,0.1,0],[450,0.1,0.1,0,0.15],null,null,[100,0.02,0.04,0,0],[1,0.055,0.115,1.1,0.4],[1,0,0.01,1.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body",null,"Stripes","Lantern","Feet","Back"]},{"n":"Sinomacrops","v":["LostIsland"],"bp":"Sinomacrops_Character_BP","st":[[110,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[80,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main body","Wings bottom",null,"Belly","Wing spots","Back"]},{"n":"Skeletal Bronto","v":["Skeletal"],"bp":"Bone_Sauropod_Character_BP","st":[[34500,0.2,0.27,0.5,0],[240,0.1,0.1,0,0],[2000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[10000,0.1,0.1,0,0],null,null,[1600,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown",null,null,"Unknown","Unknown"]},{"n":"Skeletal Giganotosaurus","v":["Skeletal"],"bp":"Bone_Gigant_Character_BP","st":[[80000,0.0005,0.002,-63000,0],[400,0.0005,0.01,0,0],[10000,0.06,0,0,0],[150,0.0025,0.025,0,0],[4000,0.0025,0.025,0,0],null,null,[700,0.01,0.01,0,0],[1,0.05,0.05,-0.8,0],[1,0,0.0031,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Skeletal Jerboa","v":["ScorchedEarth","Skeletal"],"bp":"Bone_Jerboa_Character_BP","st":[[825,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0.15],null,null,[55,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.5,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Paws and Back",null,null,null,"Stripes","Belly and Highlights"]},{"n":"Skeletal Quetzal","v":["Skeletal"],"bp":"Bone_Quetz_Character_BP","st":[[18000,0.2,0.27,0.5,0],[750,0.1,0.1,0,0],[1850,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[780,0.02,0.04,0,0],[1,0.04,0.1,0.4,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Beak","Unknown"]},{"n":"Skeletal Stego","v":["Skeletal"],"bp":"Bone_Stego_Character_BP","st":[[8550,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[440,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.964,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Skeletal Trike","v":["Skeletal"],"bp":"Bone_Trike_Character_BP","st":[[5625,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown","Unknown",null,"Unknown","Unknown","Unknown"]},{"n":"Snow Owl","v":["Extinction"],"bp":"Owl_Character_BP","st":[[325,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[375,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body & Wing",null,"Wing Highlights",null,"Belly & Face","Body Highlights"]},{"n":"Snow Owl Ghost","v":["Extinction","Ghost"],"bp":"Ghost_Owl_Character_BP","st":[[325,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[375,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body Main",null,"Wing Highlights",null,"Body Lower","Body Highlights"]},{"n":"Solwyn","v":["LostColony"],"bp":"AngelFox_Character_BP","st":[[650,0.2,0.27,0.66,0],[400,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[375,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main blend",null,"Tips & Feet",null,"Chest fur","Accent blend"]},{"n":"Spino","v":[],"bp":"Spino_Character_BP","st":[[805,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[850,0.06,0,0.5,0],[650,0.1,0.1,0,0],[2600,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Sail Edge",null,null,"Fins & Nose","Underside"]},{"n":"Spino Ghost","v":["Ghost"],"bp":"Ghost_Spino_Character_BP","st":[[805,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[850,0.06,0,0.5,0],[650,0.1,0.1,0,0],[2600,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Main","Sail tip",null,null,"Sail","Belly"]},{"n":"Spring Drakeling Ghost","v":["Ghost"],"bp":"Ghost_ShoulderDragon_Character_BP_Spring","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Stegosaurus","v":[],"bp":"Stego_Character_BP","st":[[650,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.02,0.964,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Spine","Plate Base and Spike Base","Back","Plate Edge and Spike Tips","Belly"]},{"n":"Subterranean Reaper King","v":["Aberration","Male"],"bp":"Xenomorph_Character_BP_Male_Chupa","st":[[2000,0.2,0.27,0.5,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body Main",null,null,null,"Underbelly","Back color"]},{"n":"Summer Drakeling Ghost","v":["Ghost"],"bp":"Ghost_ShoulderDragon_Character_BP_Summer","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Surface Reaper King","v":["Aberration","Lunar","Male"],"bp":"Xenomorph_Character_BP_Male_Lunar","st":[[2500,0.2,0.27,0.5,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body Main",null,null,null,"Underbelly","Back color"]},{"n":"Surface Reaper King Ghost","v":["Aberration","Ghost","Male","Surface"],"bp":"Ghost_Xenomorph_Character_BP_Male_Surface","st":[[2500,0.2,0.27,0.5,0],[480,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[415,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Body Main",null,null,null,"Underbelly","Back color"]},{"n":"Tapejara","v":[],"bp":"Tapejara_Character_BP","st":[[325,0.17,0.27,0.5,0],[250,0.05,0.06,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[280,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Wing and Sail Markings",null,"Wings and Sail","Back, Beak and Sail Spines","Sail and Throat"]},{"n":"Tek Giganotosaurus","v":[],"bp":"BionicGigant_Character_BP","st":[[80000,0.0005,0.002,-63000,0],[400,0.0005,0.01,0,0],[10000,0.06,0,0,0],[150,0.0025,0.025,0,0],[4000,0.0025,0.025,0,0],null,null,[700,0.01,0.01,0,0],[1,0.05,0.05,-0.8,0],[1,0,0.0031,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Lower Plates","Arms & Belly","Upper Plates","Accent Plates","Face","Lights"]},{"n":"Tek Parasaur","v":[],"bp":"BionicPara_Character_BP","st":[[200,0.2,0.27,0.5,0],[450,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[480,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Upper Plates & Legs","Lights","Internal Smooth","Internal Pattern","Lower Plates & Spikes","Lower Internals"]},{"n":"Tek Quetzal","v":[],"bp":"BionicQuetz_Character_BP","st":[[1200,0.2,0.108,0.5,0],[800,0.05,0.05,0,0],[1850,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[800,0.02,0.05,0,0],[1,0.04,0.1,0.4,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.85,"ng":false,"br":true,"cr":["Body Main","Joints","Accents","Internals","Lower Plates","Lights & Membrane"]},{"n":"Tek Raptor","v":[],"bp":"BionicRaptor_Character_BP","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Plates","Spine","Upper Internal","Mid Internal","Lower Plates & Spikes","Lights"]},{"n":"Tek Rex","v":[],"bp":"BionicRex_Character_BP","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Plates","Belly & Stripes","Sides","Stripes","Accent Plates","Lights"]},{"n":"Tek Stegosaurus","v":[],"bp":"BionicStego_Character_BP","st":[[650,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.02,0.964,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Inner Body","Spine","Body","Legs and Head","Leg Tops and Spike Plate","Emissive and Spike Tops"]},{"n":"Tek Stryder","v":["Genesis2"],"bp":"TekStrider_Character_BP","st":[[4000,0.2,0.27,0.5,0],[600,0.1,0.1,0,0],[2000,0.06,0,0.5,0],[150,0.1,0.1,0,0],null,null,null,[1250,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":907,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Main rubber","Emissive","Metal accents","Metal accents","Body rubber","Primary body"]},{"n":"Tek Triceratops","v":[],"bp":"BionicTrike_Character_BP","st":[[375,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,1.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Internals","Legs","Upper Plates","Head","Lower Plates","Lights"]},{"n":"Terror Bird","v":[],"bp":"TerrorBird_Character_BP","st":[[270,0.2,0.27,0.5,0],[160,0.1,0.1,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[120,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Feathers",null,null,null,"Belly/Wings Accent","Beak, Skin, Legs"]},{"n":"Therizinosaur","v":[],"bp":"Therizino_Character_BP","st":[[870,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[925,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Back","Stripe accent","Belly","Skin","Stripes","Main"]},{"n":"Thorny Dragon","v":["ScorchedEarth"],"bp":"SpineyLizard_Character_BP","st":[[260,0.2,0.27,0.66,0],[350,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Mid-section and Legs","Quills","Belly",null,"Top","Underside"]},{"n":"Thylacoleo","v":[],"bp":"Thylacoleo_Character_BP","st":[[700,0.2,0.189,0.5,0],[400,0.1,0.1,0,0],[700,0.06,0,0.5,0],[200,0.1,0.1,0,0],[1500,0.1,0.1,0,0.15],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body",null,null,null,"Fur Highlights","Stripes and Belly"]},{"n":"Tidepup (Large)","v":[],"bp":"Axolotl_Large_Character_BP","st":[[850,0.2,0.27,0.5,0],[500,0.1,0.1,0,0],[500,0.06,0,0.5,0],null,[3250,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Fins",null,"Fin pattern ","Body pattern","Body spots"]},{"n":"Tidepup (Small)","v":[],"bp":"Axolotl_Small_Character_BP","st":[[100,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[200,0.06,0,0.5,0],null,[900,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Fins",null,"Fin pattern ","Body pattern","Body spots"]},{"n":"Titanoboa","v":[],"bp":"BoaFrill_Character_BP","st":[[170,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[175,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Body","Frill Middle Line 1","Frill Middle Line 2","Frill Middle Line 3","Body Accent and Inner Frill","Outer Frill"]},{"n":"Titanosaur","v":[],"bp":"Titanosaur_Character_BP","st":[[230000,0,0,-80000,0],[2000,0,0,0,0],[25000,0.06,0,0.5,0],[600,0,0,0,0],[8640,0,0,0,0],null,null,[50000,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1.8,"ng":false,"br":false,"cr":["Body",null,null,null,"Back","Underside"]},{"n":"Triceratops","v":[],"bp":"Trike_Character_BP","st":[[375,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,1.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body","Face and Feet",null,"Patterning","Frill","Body Accent"]},{"n":"Trilobite","v":[],"bp":"Trilobite_Character","st":[[160,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[50,0.06,0,0.5,0],[150,0.1,0.1,0,0],[450,0.1,0.1,0,0],null,null,[150,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":[null,null,null,null,null,null]},{"n":"Troodon","v":[],"bp":"Troodon_Character_BP","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body",null,null,null,"Body Highlights and Feathers","Belly"]},{"n":"Tropeognathus","v":["CrystalIsles"],"bp":"Tropeognathus_Character_BP","st":[[360,0.2,0.243,0.5,0],[250,0.05,0.05,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[340,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Wing Stripes Bottom","Beak Stripes","Fur","Belly Light","Top Stripes"]},{"n":"Tropical Crystal Wyvern","v":["CrystalIsles"],"bp":"CrystalWyvern_Character_BP_WS","st":[[1295,0.15,0.162,-785,0],[325,0.05,0.05,0,0],[545,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main",null,"Scales Main",null,"Fins Highlight","Body Highlights"]},{"n":"Tusoteuthis","v":[],"bp":"Tusoteuthis_Character_BP","st":[[2700,0.2,0.2025,0.5,0],[300,0.1,0.1,0,0],[1800,0.06,0,0.5,0],[215,0.1,0.1,0,0],[3200,0.1,0.1,0,0.15],null,null,[800,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Highlights","Tentacle Highlights",null,null,"Tentacle Main","Body Main"]},{"n":"Umbra","v":[],"bp":"Umbra_Character_BP","st":[[800,0.15,0.108,0.5,0],[650,0.05,0.05,0,0],[750,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1650,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main","Feathers","Wing Membrane","Wing Accent","Belly","Back"]},{"n":"Unicorn","v":[],"bp":"Equus_Character_BP_Unicorn","st":[[240,0.2,0.27,0.5,0],[560,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.0175,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":[null,null,null,null,null,null]},{"n":"Veilwyn","v":["Companion","LostColony"],"bp":"YoungIceFox_DinoCompanion_Character_BP","st":[[200,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Fur","Spine Feathers",null,"Spine Tips","Face & Tail Highlights","Main Feathers & Spots"]},{"n":"Veilwyn Ghost","v":["Ghost","LostColony"],"bp":"Ghost_YoungIceFox_DinoCompanion_Character_BP","st":[[200,0.2,0.27,0.66,0],[260,0.1,0.1,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.3,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Velonasaur","v":["Extinction"],"bp":"Spindles_Character_BP","st":[[440,0.2,0.27,0.5,0],[325,0.1,0.1,0,0],[400,0.06,0,0.5,0],[225,0.1,0.1,0,0],[2250,0.1,0.1,0,0],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Lower","Claws","Armor Plating Highlights","Spikes Base","Belly","Body Upper"]},{"n":"Voidwyrm","v":["Genesis2"],"bp":"TekWyvern_Character_BP","st":[[1575,0.15,0.162,-960,0],[415,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main rubber","Rubber accents","Metal accents","Leg metal accents","Body rubber","Back"]},{"n":"Vulture","v":["ScorchedEarth"],"bp":"Vulture_Character_BP","st":[[125,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[900,0.1,0.1,0,0],null,null,[50,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Head Highlight",null,null,"Head Main","Body Highlights"]},{"n":"Winter Drakeling Ghost","v":["Ghost"],"bp":"Ghost_ShoulderDragon_Character_BP_Winter","st":[[150,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0],null,null,[65,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"Woolly Rhino","v":[],"bp":"Rhino_Character_BP","st":[[500,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[600,0.06,0,0.5,0],[100,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[750,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Skins","Back",null,null,"Underside","Horn"]},{"n":"X-Acrocanthosaurus","v":["Bog","Genesis"],"bp":"Bog_Acrocanthosaurus_Character_BP","st":[[1300,0.2,0.27,0.5,0],[400,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[600,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main color","Accent color","Accent color","Accent color","Secondary color","Tertiary color"]},{"n":"X-Allosaurus","v":["Genesis","Volcano"],"bp":"Volcano_Allo_Character_BP","st":[[630,0.2,0.27,0.5,0],[250,0.1,0.1,0,0],[1000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[380,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,-0.1,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main",null,null,null,"Unknown","Tips"]},{"n":"X-Ankylosaurus","v":["Genesis","Volcano"],"bp":"Volcano_Ankylo_Character_BP","st":[[700,0.2,0.27,0.5,0],[175,0.1,0.1,0,0],[420,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.02,0.35,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Unknown","Gradient","Unknown","Unknown","Tips"]},{"n":"X-Archelon","v":["Genesis","Ocean"],"bp":"Ocean_Archelon_Character_BP","st":[[1400,0.2,0.1254,0.35,0],[775,0.1,0.1,0,0],[2000,0.06,0,0.5,0],null,[3500,0.1,0.1,0,0],null,null,[1000,0.02,0.04,0,0],[1,0.05,0.1,0.6,0.4],[1,0,0.02,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.873,"ng":false,"br":true,"cr":["Main body","Glowing spots","Glowing spots","Secondary color","Secondary color","Lower body"]},{"n":"X-Argentavis","v":["Genesis","Snow"],"bp":"Snow_Argent_Character_BP","st":[[365,0.2,0.30375,0.5,0],[400,0.05,0.075,0,0],[600,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0],null,null,[400,0.02,0.055,0,0],[1,0.05,0.15,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main body",null,"Back","Spots","Belly","Dark accents"]},{"n":"X-Basilosaurus","v":["Genesis","Ocean"],"bp":"Ocean_Basilosaurus_Character_BP","st":[[2400,0.2,0.243,0.3,0],[300,0.1,0.1,0,0],[2000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0.15],null,null,[700,0.02,0.04,0,0],[1,0.05,0.1,0.9,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body","Glowing spots",null,null,"Glowing stripes","Lower body"]},{"n":"X-Concavenator","v":["Genesis","Volcano"],"bp":"Volcano_Concavenator_Character_BP","st":[[425,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2500,0.1,0.1,0,0],null,null,[325,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main color","Accent color","Accent color","Accent color","Secondary color","Tertiary color"]},{"n":"X-Cryolophosaurus","v":["Genesis","Snow"],"bp":"Snow_Cryolophosaurus_Character_BP","st":[[500,0.2,0.3375,0.5,0],[350,0.1,0.1,0,0],[4000,0.06,0,0.5,0],[250,0.1,0.1,0.1,0],[1200,0.1,0.1,0,0.15],null,null,[500,0.02,0.04,0,0],[1,0.04,0.1,0.3,0.3],[1,0,0.025,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"]},{"n":"X-Deinosuchus","v":["Bog","Genesis"],"bp":"Bog_Deinosuchus_Character_BP","st":[[1000,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[1350,0.06,0,0.5,0],null,[3000,0.1,0.1,0,0],null,null,[600,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main",null,"Accents","Flank","Backstripes","Belly"]},{"n":"X-Dunkleosteus","v":["Genesis","Ocean"],"bp":"Ocean_Dunkle_Character_BP","st":[[710,0.2,0.27,0.3,0],[200,0.1,0.1,0,0],[1150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[910,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main Body","Glowing spots","Lines on head","Fins","Glowing stripes","Head"]},{"n":"X-Helicoprion","v":["Genesis","Ocean"],"bp":"Ocean_Helicoprion_Character_BP","st":[[1300,0.2,0.30375,0.3,0],[500,0.1,0.1,0,0],[800,0.06,0,0.5,0],null,[2000,0.1,0.1,0,0.15],null,null,[500,0.025,0.055,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,[0,0.01,0.002,0,0]],"ds":2967,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main body","Glowing spots","Glowing spots","Secondary color","Secondary color","Lower body"]},{"n":"X-Ichthyosaurus","v":["Genesis","Ocean"],"bp":"Ocean_Dolphin_Character_BP","st":[[275,0.05,0.0675,0.3,0],[300,0.2,0.2,0,0],[300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.05,1,0.4],[1,0,0.015,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main Body","Unknown","Spots","Unknown","Unknown","Unknown"]},{"n":"X-Megalodon","v":["Genesis","Ocean"],"bp":"Ocean_Megalodon_Character_BP","st":[[600,0.2,0.27,0.3,0],[320,0.1,0.1,0,0],[800,0.06,0,0.5,0],[150,0.1,0.1,0,0],[2000,0.1,0.1,0,0.15],null,null,[250,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body","Unknown","Spots","Unknown","Unknown","Unknown"]},{"n":"X-Mosasaurus","v":["Genesis","Ocean"],"bp":"Ocean_Mosa_Character_BP","st":[[3600,0.12,0.21,0.3,0],[400,0.1,0.1,0,0],[3000,0.06,0,0.5,0],[150,0.1,0.1,0,0],[8000,0.1,0.1,0,0.15],null,null,[1300,0.02,0.04,0,0],[1,0.05,0.1,0.65,0.4],[1,0,0.005,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main Body","Back fin","Interior spots","Back fin","Highlights","Main glow"]},{"n":"X-Otter","v":["Genesis","Snow"],"bp":"Snow_Otter_Character_BP","st":[[40,0.2,0.27,0.5,0],[180,0.1,0.1,0,0],[350,0.06,0,0.5,0],[600,0.1,0.1,0,0],[400,0.1,0.1,0,0],null,null,[30,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.7,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main body",null,"Dark accents","Spots","Belly","Back"]},{"n":"X-Paraceratherium","v":["Bog","Genesis"],"bp":"Bog_Paracer_Character_BP","st":[[1026,0.2,0.172125,0.5,0],[300,0.1,0.1,0,0],[1300,0.06,0,0.5,0],[150,0.1,0.1,0,0],[6500,0.1,0.1,0,0],null,null,[850,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Lower Body",null,"Feet",null,"Spots","Belly"]},{"n":"X-Parasaur","v":["Bog","Genesis"],"bp":"Bog_Para_Character_BP","st":[[200,0.2,0.27,0.5,0],[450,0.1,0.1,0,0],[150,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[480,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.67,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Lower Body",null,"Spots","Sail spots","Belly","Main Body"]},{"n":"X-Raptor","v":["Bog","Genesis"],"bp":"Bog_Raptor_Character_BP","st":[[200,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,0.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Lower Body",null,"Stripes","Belly","Highlights","Main Body"]},{"n":"X-Rex","v":["Genesis","Volcano"],"bp":"Volcano_Rex_Character_BP","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Body","Spine",null,null,"Back","Belly"]},{"n":"X-Rock Elemental","v":["Genesis","Volcano"],"bp":"Volcano_Golem_Character_BP","st":[[25000,0.0125,0.135,-22000,0],[300,0.1,0.1,0,0],[5000,0.02,0,0.5,0],[150,0.1,0.1,0,0],[6000,0.1,0.1,0,0],null,null,[660,0.02,0.04,0,0],[1,0.05,0.1,0.125,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":true,"br":false,"cr":["Main","Unknown","Gradient","Unknown","Unknown","Tips"]},{"n":"X-Sabertooth","v":["Genesis","Snow"],"bp":"Snow_Saber_Character_BP","st":[[250,0.2,0.27,0.5,0],[200,0.1,0.1,0,0],[500,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0.15],null,null,[200,0.02,0.04,0,0],[1,0.05,0.1,0.4,0.35],[1,0,0.01,0.32,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Belly",null,"Spots","Spots center",null,"Main body"]},{"n":"X-Sabertooth Salmon","v":["Genesis","Lunar"],"bp":"Lunar_Salmon_Character_BP","st":[[65,0.2,0.27,0.5,0],[100,0.1,0.1,0,0],[15,0.06,0,0.5,0],[150,0.1,0.1,0,0],[100,0.1,0.1,0,0],null,null,[18,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":false,"cr":["Side stars","Back color",null,"Back stars","Main body","Wing veins"]},{"n":"X-Spino","v":["Bog","Genesis"],"bp":"Bog_Spino_Character_BP","st":[[805,0.2,0.27,0.5,0],[350,0.1,0.1,0,0],[850,0.06,0,0.5,0],[650,0.1,0.1,0,0],[2600,0.1,0.1,0,0],null,null,[350,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Lower Body",null,"Spots","Sail spots","Belly","Main Body"]},{"n":"X-Tapejara","v":["Bog","Genesis"],"bp":"Bog_Tapejara_Character_BP","st":[[325,0.17,0.27,0.5,0],[250,0.05,0.06,0,0],[450,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1600,0.1,0.1,0,0.15],null,null,[280,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0.365,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main body","Spots","Wings","Wing gradient","Body stripes","Wing veins"]},{"n":"X-Triceratops","v":["Genesis","Volcano"],"bp":"Volcano_Trike_Character_BP","st":[[375,0.2,0.27,0.5,0],[150,0.1,0.1,0,0],[250,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[365,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.015,1.2,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main","Unknown","Gradient","Unknown","Unknown","Tips"]},{"n":"X-Woolly Rhino","v":["Genesis","Snow"],"bp":"Snow_Rhino_Character_BP","st":[[500,0.2,0.27,0.5,0],[120,0.1,0.1,0,0],[600,0.06,0,0.5,0],[100,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[750,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,1.226,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Underside","Skin Accent","Upper Fur Stripes","Back","Skin","Lower Fur Stripes"]},{"n":"X-Xiphactinus","v":["Genesis","Ocean"],"bp":"Ocean_Xiphactinus_Character_BP","st":[[450,0.2,0.27,0.3,0],[420,0.1,0.1,0,0],[1100,0.06,0,0.5,0],null,[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main body","Glowing spots","Glowing spots","Secondary color","Secondary color","Lower body"]},{"n":"X-Yutyrannus","v":["Genesis","Snow"],"bp":"Snow_Yutyrannus_Character_BP","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":0.97,"ng":false,"br":true,"cr":["Main body",null,"Dark accents","Spots","Belly","Back"]},{"n":"Xiphactinus","v":[],"bp":"Xiphactinus_Character_BP_ASA","st":[[450,0.2,0.27,0.3,0],[420,0.1,0.1,0,0],[1100,0.06,0,0.5,0],null,[2000,0.1,0.1,0,0.15],null,null,[300,0.02,0.04,0,0],[1,0.05,0.1,1,0.4],[1,0,0.01,0.2,0],null,null],"ds":919,"sk":520,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Base color",null,null,null,"Spine","Belly and fins"]},{"n":"Yeti","v":[],"bp":"Yeti_Character_BP","st":[[2000,0.1,0.27,0.5,0],[300,0.1,0.1,0,0],[1100,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1500,0.1,0.1,0,0],null,null,[220,0.02,0.04,0,0],[1,0.04,0.1,0.5,0.4],[1,0,0.01,0.06,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Unknown",null,null,null,"Unknown","Unknown"]},{"n":"Yi Ling","v":[],"bp":"YiLing_Character_BP","st":[[325,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Feathers main","Wings",null,"Wing accents","Belly","Main pattern"]},{"n":"Yi Ling Ghost","v":["Ghost"],"bp":"Ghost_YiLing_Character_BP","st":[[325,0.2,0.27,0.5,0],[300,0.1,0.1,0,0],[180,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1200,0.1,0.1,0,0],null,null,[140,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":true,"br":true,"cr":["Feathers main","Wings",null,"Wing accents","Belly","Main pattern"]},{"n":"Yutyrannus","v":[],"bp":"Yutyrannus_Character_BP","st":[[1100,0.2,0.27,0.5,0],[420,0.1,0.1,0,0],[1550,0.06,0,0.5,0],[150,0.1,0.1,0,0],[3000,0.1,0.1,0,0],null,null,[500,0.02,0.04,0,0],[1,0.05,0.1,0.5,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Body Main","Facial crest",null,null,"Facial Highlights and Stripes","Feet and Hands"]},{"n":"Zombie Fire Wyvern","v":["ScorchedEarth"],"bp":"Wyvern_Character_BP_ZombieFire","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body","Wings",null,"Wing Highlights",null,"Underbelly and Arms"]},{"n":"Zombie Lightning Wyvern","v":["ScorchedEarth"],"bp":"Wyvern_Character_BP_ZombieLightning","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body","Wings",null,"Wing Highlights",null,"Underbelly and Arms"]},{"n":"Zombie Poison Wyvern","v":["ScorchedEarth"],"bp":"Wyvern_Character_BP_ZombiePoison","st":[[1295,0.15,0.162,-785,0],[315,0.05,0.05,0,0],[725,0.06,0,0.5,0],[150,0.1,0.1,0,0],[1800,0.1,0.1,0,0],null,null,[400,0.02,0.04,0,0],[1,0.05,0.1,-0.25,0.4],[1,0,0.01,0,0],null,null],"ds":927,"sk":512,"im":[0.2,0,0.2,0,0.2,0.2,0,0.2,0.2,0,0,0],"tb":1,"ng":false,"br":true,"cr":["Main Body","Wings",null,"Wing Highlights",null,"Underbelly and Arms"]}];
const DATA_INFO = {"base": "358.17.12291776", "asa": "94.7.2"};
const COLORS = [[1,"Red","#ff0000"],[2,"Blue","#0000ff"],[3,"Green","#00ff00"],[4,"Yellow","#ffff00"],[5,"Cyan","#00ffff"],[6,"Magenta","#ff00ff"],[7,"Light Green","#c1ffbc"],[8,"Light Grey","#c9cbcb"],[9,"Light Brown","#796859"],[10,"Light Orange","#ffb56c"],[11,"Light Yellow","#fffa8b"],[12,"Light Red","#ff766c"],[13,"Dark Grey","#7c7c7c"],[14,"Black","#383838"],[15,"Brown","#593726"],[16,"Dark Green","#1d4800"],[17,"Dark Red","#821c11"],[18,"White","#ffffff"],[19,"Dino Light Red","#ffaaaa"],[20,"Dino Dark Red","#592727"],[21,"Dino Light Orange","#ffb795"],[22,"Dino Dark Orange","#89522c"],[23,"Dino Light Yellow","#cbcba2"],[24,"Dino Dark Yellow","#95956c"],[25,"Dino Light Green","#e1ffe1"],[26,"Dino Medium Green","#7a957a"],[27,"Dino Dark Green","#1d3f1d"],[28,"Dino Light Blue","#dae1ff"],[29,"Dino Dark Blue","#364163"],[30,"Dino Light Purple","#e5daff"],[31,"Dino Dark Purple","#3e3059"],[32,"Dino Light Brown","#ffe1bc"],[33,"Dino Medium Brown","#958676"],[34,"Dino Dark Brown","#594d3f"],[35,"Dino Darker Grey","#595959"],[36,"Dino Albino","#ffffff"],[37,"BigFoot0","#b89784"],[38,"BigFoot4","#eadbd5"],[39,"BigFoot5","#d1a895"],[40,"WolfFur","#c4b5a0"],[41,"DarkWolfFur","#897766"],[42,"DragonBase0","#a26649"],[43,"DragonBase1","#cc7a55"],[44,"DragonFire","#bd4f00"],[45,"DragonGreen0","#79856c"],[46,"DragonGreen1","#929e79"],[47,"DragonGreen2","#a7a58c"],[48,"DragonGreen3","#75949e"],[49,"WyvernPurple0","#797497"],[50,"WyvernPurple1","#b1a4c1"],[51,"WyvernBlue0","#6282a9"],[52,"WyvernBlue1","#475c76"],[53,"Dino Medium Blue","#5fa6ea"],[54,"Dino Deep Blue","#4368d5"],[55,"NearWhite","#ededed"],[56,"NearBlack","#505050"],[57,"DarkTurquoise","#114344"],[58,"MediumTurquoise","#007160"],[59,"Turquoise","#00c6ac"],[60,"GreenSlate","#3e594b"],[61,"Sage","#3c4e3e"],[62,"DarkWarmGray","#393635"],[63,"MediumWarmGray","#585453"],[64,"LightWarmGray","#9c9391"],[65,"DarkCement","#515b56"],[66,"LightCement","#8ba297"],[67,"LightPink","#e8b1ff"],[68,"DeepPink","#ff099b"],[69,"DarkViolet","#740045"],[70,"DarkMagenta","#b80040"],[71,"BurntSienna","#7f3018"],[72,"MediumAutumn","#aa2d00"],[73,"Vermillion","#ef2e00"],[74,"Coral","#ff5831"],[75,"Orange","#ff8000"],[76,"Peach","#ffa838"],[77,"LightAutumn","#af7100"],[78,"Mustard","#959523"],[79,"ActualBlack","#101010"],[80,"MidnightBlue","#121733"],[81,"DarkBlue","#0e2737"],[82,"BlackSands","#2d202e"],[83,"LemonLime","#a9ff42"],[84,"Mint","#35e986"],[85,"Jade","#00893e"],[86,"PineGreen","#07542a"],[87,"SpruceGreen","#005b43"],[88,"LeafGreen","#5b9820"],[89,"DarkLavender","#5e235f"],[90,"MediumLavender","#863288"],[91,"Lavender","#be78bf"],[92,"DarkTeal","#063e49"],[93,"MediumTeal","#085463"],[94,"Teal","#0c859d"],[95,"PowderBlue","#83a8ff"],[96,"Glacial","#adeaff"],[97,"Cammo","#4f5011"],[98,"DryMoss","#776f3d"],[99,"Custard","#c1be5e"],[100,"Cream","#f4ffc1"],[128,"Burn Coloring","#330000"],[129,"Scab Coloring","#660000"],[130,"Gore Coloring","#b30000"],[131,"Red Coloring","#ff0000"],[132,"Tulip Coloring","#ff7373"],[133,"Salmon Coloring","#ffbfbf"],[134,"Incense Coloring","#d98d8d"],[135,"Edocha Coloring","#a65353"],[136,"Bronze Coloring","#331900"],[137,"Terracotta Coloring","#663300"],[138,"Windsor Coloring","#b35900"],[139,"Orange Coloring","#ff7f00"],[140,"Cantaloupe Coloring","#ffb973"],[141,"Peach Coloring","#ffdfbf"],[142,"Latte Coloring","#d9b38d"],[143,"Dirt Coloring","#a67c53"],[144,"Drab Coloring","#333300"],[145,"Olive Coloring","#666600"],[146,"Citron Coloring","#b2b300"],[147,"Yellow Coloring","#ffff00"],[148,"Canary Coloring","#ffff73"],[149,"Buttermilk Coloring","#ffffbf"],[150,"Khaki Coloring","#d9d98d"],[151,"Mold Coloring","#a6a653"],[152,"Swamp Coloring","#193300"],[153,"Avocado Coloring","#336600"],[154,"Orc Coloring","#59b300"],[155,"Chartreuse Coloring","#80ff00"],[156,"Menthol Coloring","#b9ff73"],[157,"Nyanza Coloring","#dfffbf"],[158,"Putrescence Coloring","#b3d98d"],[159,"Filth Coloring","#7ca653"],[160,"Nori Coloring","#003300"],[161,"Hunter Coloring","#006600"],[162,"Emerald Coloring","#00b300"],[163,"Green Coloring","#00ff00"],[164,"Mint Coloring","#73ff73"],[165,"Pistachio Coloring","#bfffbf"],[166,"Celadon Coloring","#8dd98d"],[167,"Chateau Coloring","#53a653"],[168,"Jungle Coloring","#00331a"],[169,"Forest Coloring","#006633"],[170,"Lagoon Coloring","#00b359"],[171,"Spring Coloring","#00ff80"],[172,"Aquamarine Coloring","#73ffb9"],[173,"Seafoam Coloring","#bfffdf"],[174,"Turquoise Coloring","#8dd9b3"],[175,"Shamrock Coloring","#53a67c"],[176,"Mariana Coloring","#003333"],[177,"Skobeloff Coloring","#006666"],[178,"Teal Coloring","#00b3b3"],[179,"Cyan Coloring","#00ffff"],[180,"Electricity Coloring","#73ffff"],[181,"Celeste Coloring","#bfffff"],[182,"Crystal Coloring","#8dd9d9"],[183,"Ocean Coloring","#53a6a6"],[184,"Cetecean Coloring","#001a33"],[185,"Prussian Coloring","#003366"],[186,"Sapphire Coloring","#0059b3"],[187,"Azure Coloring","#007fff"],[188,"Babyblue Coloring","#73b9ff"],[189,"Cornflower Coloring","#bfdfff"],[190,"Overcast Coloring","#8cb2d9"],[191,"Moonstone Coloring","#537ca6"],[192,"Midnight Coloring","#000033"],[193,"Navy Coloring","#000066"],[194,"Cobalt Coloring","#0000b3"],[195,"Blue Coloring","#0000ff"],[196,"Denim Coloring","#7373ff"],[197,"Ice Coloring","#bfbfff"],[198,"Frost Coloring","#8c8cd9"],[199,"Deepfreeze Coloring","#5353a6"],[200,"Twilight Coloring","#190033"],[201,"Eminence Coloring","#330066"],[202,"Indigo Coloring","#5900b3"],[203,"Violet Coloring","#8000ff"],[204,"Lilac Coloring","#b973ff"],[205,"Lavender Coloring","#dfbfff"],[206,"Mauve Coloring","#b38dd9"],[207,"Royalty Coloring","#7c53a6"],[208,"Eggplant Coloring","#330033"],[209,"Plum Coloring","#660066"],[210,"Purple Coloring","#b200b3"],[211,"Magenta Coloring","#ff00ff"],[212,"Pink Coloring","#ff73ff"],[213,"Cottoncandy Coloring","#ffbfff"],[214,"Orchid Coloring","#d98dd9"],[215,"Bruise Coloring","#a653a6"],[216,"Raisin Coloring","#330019"],[217,"Tyrian Coloring","#660033"],[218,"Lust Coloring","#b30059"],[219,"Fuschia Coloring","#ff007f"],[220,"Flamingo Coloring","#ff73b9"],[221,"Valentine Coloring","#ffbfdf"],[222,"Kobi Coloring","#d98db3"],[223,"Rouge Coloring","#a6537c"],[224,"Black Coloring","#191919"],[225,"Shadow Coloring","#333333"],[226,"Charcoal Coloring","#4d4d4d"],[227,"Gunmetal Coloring","#666666"],[228,"Slate Coloring","#808080"],[229,"Steel Coloring","#999999"],[230,"Grey Coloring","#b3b3b3"],[231,"Silver Coloring","#cccccc"],[232,"Wisp Coloring","#e6e6e6"],[233,"White Coloring","#ffffff"],[234,"Mud Coloring","#403522"],[235,"Bark Coloring","#594724"],[236,"Brown Coloring","#80642d"],[237,"Leather Coloring","#99823d"],[238,"Camel Coloring","#b39c59"],[239,"Tan Coloring","#ccb266"],[240,"Sand Coloring","#e6c973"],[241,"Parchment Coloring","#ffefbf"],[242,"Cream Coloring","#f5f5dc"],[243,"Brick Coloring","#994326"],[244,"Tangerine Coloring","#ffa424"],[245,"Gold Coloring","#ffc000"],[246,"Mustard Coloring","#f0f032"],[247,"Craggy-Dew Coloring","#b3e912"],[248,"Grass Coloring","#227330"],[249,"Stream Coloring","#2ac6b6"],[250,"Marine Coloring","#007189"],[251,"Haze Coloring","#535872"],[252,"Dusk Coloring","#8f4ea5"],[253,"Thistle Coloring","#e6c3dd"],[254,"Bubblegum Coloring","#ffbfcf"]]; // [id, nome, hex]
const IMGMAP = {"Aberrant Achatina":"Aberrant_Achatina_ASA","Aberrant Anglerfish":"Aberrant_Anglerfish_ASA","Aberrant Ankylosaurus":"Aberrant_Ankylosaurus_ASA","Aberrant Araneo":"Aberrant_Araneo_ASA","Aberrant Arthropluera":"Aberrant_Arthropluera_ASA","Aberrant Baryonyx":"Aberrant_Baryonyx_ASA","Aberrant Beelzebufo":"Aberrant_Beelzebufo_ASA","Aberrant Carbonemys":"Aberrant_Carbonemys_ASA","Aberrant Carnotaurus":"Aberrant_Carnotaurus_ASA","Aberrant Coelacanth":"Aberrant_Coelacanth_ASA","Aberrant Concavenator":"Aberrant_Concavenator_ASA","Aberrant Dimetrodon":"Aberrant_Dimetrodon_ASA","Aberrant Dimorphodon":"Aberrant_Dimorphodon_ASA","Aberrant Diplocaulus":"Aberrant_Diplocaulus_ASA","Aberrant Diplodocus":"Aberrant_Diplodocus_ASA","Aberrant Dire Bear":"Aberrant_Dire_Bear_ASA","Aberrant Dodo":"Aberrant_Dodo_ASA","Aberrant Doedicurus":"Aberrant_Doedicurus_ASA","Aberrant Dung Beetle":"Aberrant_Dung_Beetle_ASA","Aberrant Electrophorus":"Aberrant_Electrophorus_ASA","Aberrant Equus":"Aberrant_Equus_ASA","Aberrant Fasolasuchus":"Aberrant_Fasolasuchus_ASA","Aberrant Gigantopithecus":"Aberrant_Gigantopithecus_ASA","Aberrant Gigantoraptor":"Aberrant_Gigantoraptor_ASA","Aberrant Iguanodon":"Aberrant_Iguanodon_ASA","Aberrant Lystrosaurus":"Aberrant_Lystrosaurus_ASA","Aberrant Manta":"Aberrant_Manta_ASA","Aberrant Megalania":"Aberrant_Megalania_ASA","Aberrant Megalosaurus":"Aberrant_Megalosaurus_ASA","Aberrant Moschops":"Aberrant_Moschops_ASA","Aberrant Otter":"Aberrant_Otter_ASA","Aberrant Oviraptor":"Aberrant_Oviraptor_ASA","Aberrant Ovis":"Aberrant_Ovis_ASA","Aberrant Paraceratherium":"Aberrant_Paraceratherium_ASA","Aberrant Parasaur":"Aberrant_Parasaur_ASA","Aberrant Piranha":"Aberrant_Piranha_ASA","Aberrant Pulmonoscorpius":"Aberrant_Pulmonoscorpius_ASA","Aberrant Purlovia":"Aberrant_Purlovia_ASA","Aberrant Raptor":"Aberrant_Raptor_ASA","Aberrant Salmon":"Aberrant_Salmon_ASA","Aberrant Sarco":"Aberrant_Sarco_ASA","Aberrant Spino":"Aberrant_Spino_ASA","Aberrant Stegosaurus":"Aberrant_Stegosaurus_ASA","Aberrant Titanoboa":"Aberrant_Titanoboa_ASA","Aberrant Triceratops":"Aberrant_Triceratops_ASA","Achatina":"Achatina_ASA","Acrocanthosaurus":"Acrocanthosaurus_ASA","Allosaurus":"Allosaurus_ASA","Amargasaurus":"Amargasaurus","Andrewsarchus":"Andrewsarchus","Anglerfish":"Anglerfish_ASA","Ankylosaurus":"Ankylosaurus_ASA","Araneo":"Araneo_ASA","Archaeopteryx":"Archaeopteryx_ASA","Archelon":"Archelon_ASA","Argentavis":"Argentavis_ASA","Armadoggo":"Armadoggo_ASA","Arthropluera":"Arthropluera_ASA","Astrocetus":"Astrocetus_ASA","Astrodelphis":"Astrodelphis","Aureliax":"Aureliax_ASA","Baryonyx":"Baryonyx_ASA","Basilisk":"Basilisk_ASA","Basilosaurus":"Basilosaurus_ASA","Beelzebufo":"Beelzebufo_ASA","Bison":"Bison_ASA","Blood Crystal Wyvern":"Blood_Crystal_Wyvern","Bloodstalker":"Bloodstalker_ASA","Boaratos":"Boaratos_ASA","Brontosaurus":"Brontosaurus_ASA","Bulbdog":"Bulbdog_ASA","Burrowbuck":"Burrowbuck_ASA","Carbonemys":"Carbonemys_ASA","Carcharodontosaurus":"Carcharodontosaurus_ASA","Carnotaurus":"Carnotaurus_ASA","Castoroides":"Castoroides_ASA","Ceratosaurus":"Ceratosaurus_ASA","Cerberax":"Cerberax_ASA","Chalicotherium":"Chalicotherium_ASA","Chalk Elemental":"Chalk_Elemental_ASA","Coelacanth":"Coelacanth_ASA","Compy":"Compy_ASA","Concavenator":"Concavenator_ASA","Cosmo":"Cosmo_ASA","Cryolophosaurus":"Cryolophosaurus_ASA","Daeodon":"Daeodon_ASA","Deinonychus":"Deinonychus_ASA","Deinosuchus":"Deinosuchus_ASA","Deinotherium":"Deinotherium_ASA","Desmodus":"Desmodus_ASA","Dilophosaur":"Dilophosaur","Dimetrodon":"Dimetrodon_ASA","Dimorphodon":"Dimorphodon_ASA","Dinopithecus":"Dinopithecus","Diplocaulus":"Diplocaulus_ASA","Diplodocus":"Diplodocus_ASA","Dire Bear":"Dire_Bear_ASA","Direwolf":"Direwolf_ASA","Dodo":"Dodo_ASA","Doedicurus":"Doedicurus_ASA","Drakeling (Autumn)":"Drakeling_Autumn__ASA","Drakeling (Spring)":"Drakeling_Spring__ASA","Drakeling (Summer)":"Drakeling_Summer__ASA","Drakeling (Winter)":"Drakeling_Winter__ASA","Dreadmare":"Dreadmare_ASA","Dreadnoughtus":"Dreadnoughtus_ASA","Dung Beetle":"Dung_Beetle_ASA","Dunkleosteus":"Dunkleosteus_ASA","Elderclaw":"Elderclaw_ASA","Electrophorus":"Electrophorus_ASA","Ember Crystal Wyvern":"Ember_Crystal_Wyvern","Equus":"Equus_ASA","Fasolasuchus":"Fasolasuchus_ASA","Featherlight":"Featherlight_ASA","Ferox":"Ferox_ASA","Fire Wyvern":"Fire_Wyvern_ASA","Gacha":"Gacha_ASA","Gallimimus":"Gallimimus_ASA","Gargantar":"Gargantar_ASA","Gasbags":"Gasbags_ASA","Giant Queen Bee":"Giant_Queen_Bee_ASA","Gigadesmodus":"Gigadesmodus_ASA","Giganotosaurus":"Giganotosaurus_ASA","Gigantopithecus":"Gigantopithecus_ASA","Gigantoraptor":"Gigantoraptor_ASA","Gloon":"Gloon_ASA","Glowtail":"Glowtail_ASA","Grand Tortugar":"Grand_Tortugar_ASA","Griffin":"Griffin_ASA","Helicoprion":"Helicoprion_ASA","Hesperornis":"Hesperornis_ASA","Hyaenodon":"Hyaenodon_ASA","Ice Elemental":"Ice_Elemental_ASA","Ice Wyvern":"Ice_Wyvern_ASA","Ichthyornis":"Ichthyornis_ASA","Ichthyosaurus":"Ichthyosaurus_ASA","Iguanodon":"Iguanodon_ASA","Jerboa":"Jerboa_ASA","Kairuku":"Kairuku_ASA","Kaprosuchus":"Kaprosuchus_ASA","Karkinos":"Karkinos_ASA","Kentrosaurus":"Kentrosaurus_ASA","Lightning Wyvern":"Lightning_Wyvern_ASA","Liopleurodon":"Liopleurodon_ASA","Lumina":"Lumina_ASA","Lymantria":"Lymantria_ASA","Lystrosaurus":"Lystrosaurus_ASA","Maeguana":"Maeguana_ASA","Maewing":"Maewing","Magmasaur":"Magmasaur_ASA","Malwyn":"Malwyn_ASA","Mammoth":"Mammoth_ASA","Managarmr":"Managarmr_ASA","Manta":"Manta_ASA","Mantis":"Mantis_ASA","Megachelon":"Megachelon_ASA","Megalania":"Megalania_ASA","Megaloceros":"Megaloceros_ASA","Megalodon":"Megalodon_ASA","Megalosaurus":"Megalosaurus_ASA","Megaraptor":"Megaraptor_ASA","Megatherium":"Megatherium_ASA","Mesopithecus":"Mesopithecus","Microraptor":"Microraptor","Morellatops":"Morellatops_ASA","Mosasaurus":"Mosasaurus_ASA","Moschops":"Moschops_ASA","Nameless":"Nameless","Neophyte":"Neophyte_ASA","Noglin":"Noglin","Oasisaur":"Oasisaur_ASA","Onyc":"Onyc_ASA","Ossidon":"Ossidon_ASA","Otter":"Otter_ASA","Oviraptor":"Oviraptor_ASA","Ovis":"Ovis_ASA","Pachy":"Pachy","Pachyrhinosaurus":"Pachyrhinosaurus_ASA","Palaeoctopus":"Palaeoctopus_ASA","Paraceratherium":"Paraceratherium_ASA","Parasaur":"Parasaur_ASA","Parrot":"Parrot_ASA","Pegomastax":"Pegomastax_ASA","Pelagornis":"Pelagornis_ASA","Phiomia":"Phiomia","Phoenix":"Phoenix_ASA","Piranha":"Piranha_ASA","Plesiosaur":"Plesiosaur_ASA","Poison Wyvern":"Poison_Wyvern_ASA","Procoptodon":"Procoptodon_ASA","Pteranodon":"Pteranodon_ASA","Pulmonoscorpius":"Pulmonoscorpius_ASA","Purlovia":"Purlovia_ASA","Pyromane":"Pyromane_ASA","Quetzal":"Quetzal_ASA","R-Daeodon":"R-Daeodon","R-Direwolf":"R-Direwolf","R-Equus":"R-Equus","R-Gasbags":"R-Gasbags","R-Megatherium":"R-Megatherium","R-Parasaur":"R-Parasaur","R-Procoptodon":"R-Procoptodon","R-Reaper King":"R-Reaper_King","R-Snow Owl":"R-Snow_Owl","R-Thylacoleo":"R-Thylacoleo","Raptor":"Raptor_ASA","Ravager":"Ravager_ASA","Reaper Queen":"Reaper_Queen","Rex":"Rex_ASA","Rhyniognatha":"Rhyniognatha_ASA","Rhyniognatha Drone":"Rhyniognatha_Drone_ASA","Rock Drake":"Rock_Drake_ASA","Rock Elemental":"Rock_Elemental_ASA","Roll Rat":"Roll_Rat_ASA","Sabertooth":"Sabertooth_ASA","Sabertooth Salmon":"Sabertooth_Salmon_ASA","Sarco":"Sarco_ASA","Scrap Elemental":"Scrap_Elemental_ASA","Shadowmane":"Shadowmane","Shastasaurus":"Shastasaurus_ASA","Shinehorn":"Shinehorn_ASA","Sinomacrops":"Sinomacrops","Snow Owl":"Snow_Owl_ASA","Solwyn":"Solwyn_ASA","Spino":"Spino_ASA","Stegosaurus":"Stegosaurus_ASA","Tapejara":"Tapejara_ASA","Tek Giganotosaurus":"Tek_Giganotosaurus_ASA","Tek Parasaur":"Tek_Parasaur_ASA","Tek Quetzal":"Tek_Quetzal_ASA","Tek Raptor":"Tek_Raptor_ASA","Tek Rex":"Tek_Rex_ASA","Tek Stegosaurus":"Tek_Stegosaurus_ASA","Tek Stryder":"Tek_Stryder","Tek Triceratops":"Tek_Triceratops_ASA","Terror Bird":"Terror_Bird_ASA","Therizinosaur":"Therizinosaur_ASA","Thorny Dragon":"Thorny_Dragon_ASA","Thylacoleo":"Thylacoleo_ASA","Tidepup (Large)":"Tidepup_Large__ASA","Tidepup (Small)":"Tidepup_Small__ASA","Titanoboa":"Titanoboa_ASA","Titanosaur":"Titanosaur","Triceratops":"Triceratops_ASA","Troodon":"Troodon_ASA","Tropeognathus":"Tropeognathus","Tropical Crystal Wyvern":"Tropical_Crystal_Wyvern","Tusoteuthis":"Tusoteuthis_ASA","Umbra":"Umbra_ASA","Veilwyn":"Veilwyn_ASA","Velonasaur":"Velonasaur_ASA","Voidwyrm":"Voidwyrm","Vulture":"Vulture_ASA","Woolly Rhino":"Woolly_Rhino_ASA","X-Acrocanthosaurus":"X-Acrocanthosaurus_ASA","X-Allosaurus":"X-Allosaurus_ASA","X-Ankylosaurus":"X-Ankylosaurus_ASA","X-Archelon":"X-Archelon_ASA","X-Argentavis":"X-Argentavis_ASA","X-Basilosaurus":"X-Basilosaurus_ASA","X-Concavenator":"X-Concavenator_ASA","X-Cryolophosaurus":"X-Cryolophosaurus_ASA","X-Deinosuchus":"X-Deinosuchus_ASA","X-Dunkleosteus":"X-Dunkleosteus_ASA","X-Helicoprion":"X-Helicoprion_ASA","X-Ichthyosaurus":"X-Ichthyosaurus_ASA","X-Megalodon":"X-Megalodon_ASA","X-Mosasaurus":"X-Mosasaurus_ASA","X-Otter":"X-Otter_ASA","X-Paraceratherium":"X-Paraceratherium_ASA","X-Parasaur":"X-Parasaur_ASA","X-Raptor":"X-Raptor_ASA","X-Rex":"X-Rex_ASA","X-Rock Elemental":"X-Rock_Elemental","X-Sabertooth":"X-Sabertooth_ASA","X-Sabertooth Salmon":"X-Sabertooth_Salmon","X-Spino":"X-Spino_ASA","X-Tapejara":"X-Tapejara_ASA","X-Triceratops":"X-Triceratops_ASA","X-Woolly Rhino":"X-Woolly_Rhino_ASA","X-Xiphactinus":"X-Xiphactinus_ASA","X-Yutyrannus":"X-Yutyrannus_ASA","Xiphactinus":"Xiphactinus_ASA","Yi Ling":"Yi_Ling_ASA","Yutyrannus":"Yutyrannus_ASA","Zombie Fire Wyvern":"Zombie_Fire_Wyvern_ASA","Zombie Lightning Wyvern":"Zombie_Lightning_Wyvern_ASA","Zombie Poison Wyvern":"Zombie_Poison_Wyvern_ASA","Alpha Carnotaurus":"Carnotaurus_ASA","Alpha Fire Wyvern":"Fire_Wyvern_ASA","Alpha Megalodon":"Megalodon_ASA","Alpha Ossidon":"Ossidon_ASA","Alpha Palaeoctopus":"Palaeoctopus_ASA","Alpha Raptor":"Raptor_ASA","Alpha Rex":"Rex_ASA","Alpha Surface Reaper King":"Reaper_King_ASA","Alpha Tusoteuthis":"Tusoteuthis_ASA","Anglerfish Ghost":"Anglerfish_ASA","Ankylosaurus Ghost":"Ankylosaurus_ASA","Argentavis Ghost":"Argentavis_ASA","Astral Mammoth":"Mammoth_ASA","Astral Rock Drake":"Rock_Drake_ASA","Autumn Drakeling Ghost":"Drakeling_Autumn__ASA","Basilisk Ghost":"Basilisk_ASA","Bulbdog Ghost":"Bulbdog_ASA","Bunny Dodo":"Dodo_ASA","Bunny Oviraptor":"Oviraptor_ASA","Ceratosaurus Ghost":"Ceratosaurus_ASA","Corrupted Arthropluera":"Arthropluera_ASA","Deinonychus Ghost":"Deinonychus_ASA","Dire Polar Bear":"Dire_Bear_ASA","Direwolf Ghost":"Direwolf_ASA","Dodo Wyvern":"Dodo_ASA","Gigantoraptor Ghost":"Gigantoraptor_ASA","Mantis Ghost":"Mantis_ASA","Megalodon Ghost":"Megalodon_ASA","Otter Ghost":"Otter_ASA","Party Dodo":"Dodo_ASA","Polar Bear":"Dire_Bear_ASA","Polar Purlovia":"Purlovia_ASA","R-Reaper Queen":"Reaper_Queen","Rex Ghost":"Rex_ASA","Scorpion":"Pulmonoscorpius_ASA","Skeletal Bronto":"Brontosaurus_ASA","Skeletal Giganotosaurus":"Giganotosaurus_ASA","Skeletal Jerboa":"Jerboa_ASA","Skeletal Quetzal":"Quetzal_ASA","Skeletal Stego":"Stegosaurus_ASA","Skeletal Trike":"Triceratops_ASA","Snow Owl Ghost":"Snow_Owl_ASA","Spino Ghost":"Spino_ASA","Spring Drakeling Ghost":"Drakeling_Spring__ASA","Subterranean Reaper King":"Reaper_King_ASA","Summer Drakeling Ghost":"Drakeling_Summer__ASA","Surface Reaper King":"Reaper_King_ASA","Surface Reaper King Ghost":"Reaper_King_ASA","Veilwyn Ghost":"Veilwyn_ASA","Winter Drakeling Ghost":"Drakeling_Winter__ASA","Yi Ling Ghost":"Yi_Ling_ASA"}; // nome da espécie -> arquivo em img/
const COLOR_BY_ID = {}; COLORS.forEach(c=>COLOR_BY_ID[c[0]]=c);
function colorHex(id){ if(id==null||id===""||id===0) return null; if(id===255) return "#ffffff"; const c=COLOR_BY_ID[id]; return c?c[2]:null; }
function colorName(id){ if(!id) return "sem cor"; if(id===255) return "Indefinida (branco)"; const c=COLOR_BY_ID[id]; return c?c[1]:"Cor "+id; }
const REGION_PT={"Main body":"Corpo principal","Main Body":"Corpo principal","Body Main":"Corpo principal","Body main":"Corpo principal","Main":"Principal","Body":"Corpo","Belly":"Barriga","Back":"Costas","Stripes":"Listras","Stripe":"Listra","Spots":"Manchas","Underbelly":"Parte de baixo","Underside":"Parte de baixo","Highlights":"Detalhes","Body Highlights":"Detalhes do corpo","Accents":"Acentos","Accent":"Acento","Spikes":"Espinhos","Skin":"Pele","Spine":"Espinha","Feathers":"Penas","Feathers main":"Penas principais","Legs":"Pernas","Wings":"Asas","Wings Main":"Asas","Beak":"Bico","Fins":"Barbatanas","Feet":"Pés","Scales":"Escamas","Scales Main":"Escamas","Tips":"Pontas","Fur":"Pelo","Shell":"Casco","Tummy":"Barriga","Dark markings":"Marcas escuras","Base color":"Cor base","Head":"Cabeça","Tail":"Cauda","Pattern":"Padrão","Patterning":"Padrão","Secondary color":"Cor secundária","Glowing spots":"Manchas brilhantes","Emissive":"Brilho","Lower Body":"Parte de baixo","Accent color":"Cor de acento","Back color":"Costas","Wing Highlights":"Detalhes das asas","Fins Highlight":"Detalhes das barbatanas"};
function regionName(s,r){ const n=s&&s.cr?s.cr[r]:null; if(!n||n==="Unknown") return "Região "+r; return REGION_PT[n]||n; }
function regionsOf(s){ const out=[]; for(let r=0;r<6;r++) if(s && s.cr && s.cr[r]!=null) out.push(r); return out; }
function dotsHtml(c,s){ const rs=regionsOf(s); if(!rs.length||!c.cores) return ""; const ds=rs.map(r=>{ const hx=colorHex(c.cores[r]); return '<i class="cdot'+(hx?"":" none")+'" style="'+(hx?"background:"+hx:"")+'" title="'+r+'"></i>'; }).join(""); return c.cores.some(x=>x)?'<span class="cdots">'+ds+'</span>':""; }

// Índices de status do ARK (mesma ordem do ASB)
const ST = {HP:0,ST:1,TO:2,OX:3,FO:4,WA:5,TE:6,WE:7,ME:8,SP:9,FT:10,CR:11};
const STAT_NAMES = ["Vida","Estamina","Torpor","Oxigênio","Comida","Água","Temperatura","Peso","Dano","Velocidade","Fortitude","Criação"];
const STAT_SHORT = ["VID","EST","TOR","OXI","COM","ÁGU","TMP","PES","DAN","VEL","FOR","CRI"];
const PERCENT = new Set([ST.ME, ST.SP, ST.CR]);
// Ordem em que aparecem na tela do ASA
const ORDER = [0,1,3,4,5,7,8,9,10,11,2];

// Multiplicadores oficiais [TaM, TmM, IdM, IwM] (ASB serverMultipliers.json "official")
const OFFICIAL = {0:[0.14,0.44,0.2,1], 8:[0.14,0.44,0.17,1]};
const IBM = 1;
function mult(i){ return OFFICIAL[i] || [1,1,1,1]; }

const byBp = {};
const nameCount = {};
SPECIES.forEach(s=>{ byBp[s.bp]=s; nameCount[s.n]=(nameCount[s.n]||0)+1; });
const VAR_PT = {Aberrant:"Aberrante",Genesis:"Genesis",Large:"grande",Small:"pequeno",Gargoyle:"Gárgula",LostColony:"Lost Colony",Polar:"Polar"};
function spLabel(s){
  if(!s) return "Espécie desconhecida";
  if(nameCount[s.n]>1 && s.v.length) return s.n+" ("+s.v.map(v=>VAR_PT[v]||v).join(", ")+")";
  return s.n;
}
function norm(t){ return (t||"").toString().normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim(); }

/* Quais status a espécie mostra / recebe cada tipo de ponto */
function inputStats(s){ return statsOf(s).filter(x=>x.wild||x.dom||x.i===ST.TO); }
function statsOf(s){
  const out=[];
  for(const i of ORDER){
    const raw = s.st[i];
    if(!raw) continue;
    if(!((s.ds>>i)&1)) continue;
    const wild = raw[1]>0 && !((s.sk>>i)&1);
    const dom = raw[2]>0 && i!==ST.TO && i!==ST.SP; // oficial ASA: AllowSpeedLeveling = false
    const mut = wild && i!==ST.TO;
    out.push({i, wild, dom, mut});
  }
  return out;
}

/* ===================== FÓRMULA =====================
 V = (B×(1+Lw×Iw×IwM)×TBHM×(1+IB×IM×IBM) + Ta×TaM) × (1+TE×Tm×TmM) × (1+Ld×Id×IdM)
 Lw = pontos selvagens + pontos de mutação */
function statValue(s, i, w, m, d, origem, te, ib, noTm){
  const raw = s.st[i]; if(!raw) return null;
  const [B,Iw,Id,Ta,Tm] = raw;
  const [TaM,TmM,IdM,IwM] = mult(i);
  const Lw = (w||0)+(m||0);
  let v = B*(1+Lw*Iw*IwM);
  if(origem==="selvagem") return v;
  if(i===ST.HP) v *= (s.tb||1);
  const imp = ib||0; // criado, ou domesticado com impressão extra (ex.: habilidade do Lost Colony)
  v *= 1 + imp*(s.im[i]||0)*IBM;
  v += Ta*(Ta>0?TaM:1);
  const teUse = origem==="criado" ? 1 : te;
  if(noTm){ /* filhote: o jogo pode não aplicar o bônus de domesticação na Comida */ }
  else if(Tm>0){ if(teUse==null) return {aprox:true, v: v*(1+Tm*TmM)*(1+(d||0)*Id*IdM)}; v *= 1+teUse*Tm*TmM; }
  else if(Tm<0){ v *= 1+Tm*TmM; }
  v *= 1+(d||0)*Id*IdM;
  return v;
}
function fmtStat(i, v){
  if(v==null) return "—";
  let aprox=false; if(typeof v==="object"){aprox=true; v=v.v;}
  const t = PERCENT.has(i) ? (Math.round(v*1000)/10).toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1})+"%" :
                            (Math.round(v*10)/10).toLocaleString("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1});
  return (aprox?"≤ ":"")+t;
}

/* ===================== EXTRATOR =====================
 Descobre pontos selvagens (S) e do jogador (J) a partir dos valores exibidos.
 - Torpor só recebe pontos selvagens: o valor dele dá o total de pontos selvagens.
 - Domesticado: total do jogador = nível − 1 − total selvagem.
 - TE (eficiência) é deduzida do status com bônus multiplicativo (normalmente o Dano)
   e conferida com a regra dos níveis bônus: bônus = floor(nível_pré × TE / 2). */

/* impressão mostrada arredondada (ex.: "10%") -> faixa de valores possíveis */
function ibRange(ib){ if(!ib) return [0,0]; const tol = Math.abs(ib*100-Math.round(ib*100))<1e-9 ? 0.005 : 0.0005; return [Math.max(0,ib-tol), Math.min(1,ib+tol)]; }
function valRange(s,i,w,m,d,origem,te,ib,noTm){
  const [a,b]=ibRange(origem==="selvagem"?0:ib);
  let v1=statValue(s,i,w,m,d,origem,te,a,noTm), v2=statValue(s,i,w,m,d,origem,te,b,noTm);
  if(typeof v1==="object") v1=v1.v; if(typeof v2==="object") v2=v2.v;
  return [Math.min(v1,v2), Math.max(v1,v2)];
}
function parseVal(str, pct){
  if(str==null) return null;
  let t=String(str).trim().replace(/[%\s]/g,"");
  const slash=t.indexOf("/"); if(slash>=0) t=t.slice(slash+1); // "1234,5/1234,5" -> usa o máximo
  if(!t) return null;
  let dec=0;
  const hasC=t.includes(","), hasD=t.includes(".");
  if(hasC && hasD){
    if(t.lastIndexOf(",")>t.lastIndexOf(".")) t=t.replace(/\./g,"").replace(",",".");
    else t=t.replace(/,/g,"");
  } else if(hasC||hasD){
    const sep=hasC?",":".";
    const parts=t.split(sep);
    if(parts.length>2 || (parts.length===2 && parts[1].length===3)) t=parts.join(""); // separador de milhar
    else t=parts.join(".");
  }
  if(!/^-?\d+(\.\d+)?$/.test(t)) return null;
  const m=t.match(/\.(\d+)$/); dec=m?m[1].length:0;
  let v=parseFloat(t), tol=0.5*Math.pow(10,-dec);
  if(pct){ v/=100; tol/=100; }
  return {v, tol: tol + Math.max(1e-9, Math.abs(v)*1e-9)};
}

function extractLevels(s, origem, nivel, vals, teHint, ibHint){
  const tamed = origem!=="selvagem";   // domesticado ou criado (ambos podem ter pontos do jogador)
  const bred = origem==="criado";
  const ib = tamed ? (ibHint||0)/100 : 0; // domado também pode ter impressão (Lost Colony)
  const sts = statsOf(s);
  const tor = sts.find(x=>x.i===ST.TO);
  if(!tor) return {err:"Esta espécie não mostra Torpor; use o modo “Já sei os pontos”."};
  const pv={}, faltam=[];
  const leveled=x=>x.wild||x.dom||x.i===ST.TO;
  for(const x of sts){ pv[x.i]=parseVal(vals[x.i], PERCENT.has(x.i)); if(!pv[x.i] && leveled(x)) faltam.push(STAT_NAMES[x.i]); }
  if(faltam.length) return {err:"Preencha o valor de: "+faltam.join(", ")+"."};
  if(tamed && !nivel) return {err:"Informe o nível da criatura."};

  // 1) total selvagem pelo torpor
  const T=pv[ST.TO]; const LwTs=[];
  for(let w=0; w<=2000; w++){
    const [v1,v2]=valRange(s,ST.TO,w,0,0,origem,1,ib);
    if(v2>=T.v-T.tol && v1<=T.v+T.tol) LwTs.push(w);
    if(v1>T.v+T.tol) break;
  }
  if(!LwTs.length) return {err:"O valor do Torpor não fecha com nenhuma quantidade de pontos. Confira se digitou o valor máximo (o número da direita).", bad:[ST.TO]};

  let teRange= bred ? [1,1] : [0,1];
  if(origem==="domesticado" && teHint!=null && !isNaN(teHint)){
    const m=String(teHint).match(/\.(\d+)$/); const dec=m?m[1].length:0;
    const tol=(0.5*Math.pow(10,-dec)+0.02)/100; // meia casa decimal + folga
    teRange=[Math.max(0,teHint/100-tol), Math.min(1,teHint/100+tol)];
  }

  const others=sts.filter(x=>x.i!==ST.TO && leveled(x)); // status sem pontos (ex.: velocidade) não entram
  let solutions=[], bad=new Set(), notes=[];

  for(const relax of [false,true]){
    for(const LwT of LwTs){
      const LdT = tamed ? nivel-1-LwT : 0;
      if(LdT<0){ notes.push("nivel"); continue; }
      // 2) candidatos por status
      const cands=[];
      let dead=false;
      for(const x of others){
        const list=statCands(s,x,LwT,LdT,tamed,pv[x.i],teRange,ib);
        if(!list.length){ bad.add(x.i); dead=true; }
        cands.push({x,list});
      }
      if(dead) continue;
      // 3) combinação: soma S = total selvagem; soma J = total jogador
      cands.sort((a,b)=>a.list.length-b.list.length);
      const n=cands.length;
      const minW=[],maxW=[],minD=[],maxD=[];
      for(let k=n;k>=0;k--){
        if(k===n){minW[k]=maxW[k]=minD[k]=maxD[k]=0;continue;}
        const L=cands[k].list;
        minW[k]=minW[k+1]+Math.min(...L.map(c=>c.w)); maxW[k]=maxW[k+1]+Math.max(...L.map(c=>c.w));
        minD[k]=minD[k+1]+Math.min(...L.map(c=>c.d)); maxD[k]=maxD[k+1]+Math.max(...L.map(c=>c.d));
      }
      const pick=new Array(n);
      const LIMIT=4000; let found=0;
      const dfs=(k,sw,sd,te)=>{
        if(found>=LIMIT) return;
        if(sw+minW[k]>LwT || sd+minD[k]>LdT) return;
        if((!relax && sw+maxW[k]<LwT) || sd+maxD[k]<LdT) return;
        if(k===n){
          if((relax?sw<=LwT:sw===LwT) && sd===LdT){
            let teF=te;
            if(origem==="domesticado" && te){ teF=bonusCheck(LwT,te); if(!teF) return; }
            const pts={}; cands.forEach((c,j)=>{ pts[c.x.i]=[pick[j].w,0,pick[j].d]; });
            pts[ST.TO]=[LwT,0,0];
            sts.forEach(x=>{ if(!pts[x.i]) pts[x.i]=[0,0,0]; });
            solutions.push({pts, te:teF, LwT, LdT, relaxed:relax}); found++;
          }
          return;
        }
        for(const c of cands[k].list){
          let nte=te;
          if(c.te){ nte = te ? [Math.max(te[0],c.te[0]),Math.min(te[1],c.te[1])] : c.te; if(nte[0]>nte[1]) continue; }
          pick[k]=c; dfs(k+1,sw+c.w,sd+c.d,nte);
        }
      };
      dfs(0,0,0,null);
    }
    if(solutions.length) break;
  }
  if(!solutions.length){
    if(notes.includes("nivel") && !bad.size) return {err:"O nível informado é menor que o total de pontos selvagens indicado pelo Torpor. Confira o nível e o Torpor."};
    return {err: bad.size ? "Nenhuma combinação de pontos explica o valor de: "+[...bad].map(i=>STAT_NAMES[i]).join(", ")+". Confira esses números (use o valor máximo)"+(tamed?", o nível e a TE.":".") : "Os valores não fecham entre si. Confira o nível"+(tamed?" e a TE":"")+".", bad:[...bad]};
  }
  return {solutions, relaxed: solutions[0].relaxed, LwT: solutions[0].LwT};
}

function statCands(s,x,LwT,LdT,tamed,P,teRange,ib){
  const i=x.i, raw=s.st[i]; const [B,Iw,Id,Ta,Tm]=raw; const [TaM,TmM,IdM,IwM]=mult(i);
  const lo=P.v-P.tol, hi=P.v+P.tol, out=[];
  const maxW = x.wild ? LwT : 0;
  const maxD = (tamed && x.dom) ? LdT : 0;
  const bred = teRange[0]===1 && teRange[1]===1;
  const origem = !tamed ? "selvagem" : (bred ? "criado" : "domesticado");
  const hit=(r)=> r[1]>=lo && r[0]<=hi;
  for(let w=0; w<=maxW; w++){
    if(!tamed){
      const Vw=B*(1+w*Iw*IwM);
      if(Vw>=lo && Vw<=hi) out.push({w,d:0});
      if(Vw>hi || Iw===0) break;
      continue;
    }
    if(Tm>0 && !bred){
      // domesticado: TE desconhecida -> resolve intervalo de TE
      const [ia,ib2]=ibRange(ib); const Vw=B*(1+w*Iw*IwM)*(i===ST.HP?(s.tb||1):1), add=Ta*(Ta>0?TaM:1);
      const baseLo=Vw*(1+ia*(s.im[i]||0)*IBM)+add, baseHi=Vw*(1+ib2*(s.im[i]||0)*IBM)+add;
      if(baseLo*(1+teRange[0]*Tm*TmM)>hi && !(i===ST.FO)) break;
      if(i===ST.FO && baseLo>hi) break;
      for(let d=0; d<=maxD; d++){
        const f=1+d*Id*IdM;
        const a=Math.max(teRange[0],(lo/(baseHi*f)-1)/(Tm*TmM)), b=Math.min(teRange[1],(hi/(baseLo*f)-1)/(Tm*TmM));
        if(a<=b) out.push({w,d,te:[a,b]});
        if(baseLo*f*(1+teRange[0]*Tm*TmM)>hi || Id===0) break;
      }
      if(i===ST.FO){ // Comida: o jogo às vezes não aplica o bônus de domesticação (visto num Ankylosaurus domado)
        for(let d=0; d<=maxD; d++){ const r=valRange(s,i,w,0,d,origem,1,ib,true); if(hit(r)) out.push({w,d,foodNoTm:true}); if(r[0]>hi || Id===0) break; }
      }
    } else {
      // criado (TE=1, impressão em faixa) ou domesticado sem bônus multiplicativo
      const passes = (i===ST.FO && Tm>0) ? [false,true] : [false];
      let minAll=Infinity;
      for(const noTm of passes){
        for(let d=0; d<=maxD; d++){
          const r=valRange(s,i,w,0,d,origem,1,ib,noTm);
          if(d===0) minAll=Math.min(minAll,r[0]);
          if(hit(r)) out.push({w,d});
          if(r[0]>hi || Id===0) break;
        }
      }
      if(minAll>hi) break;
    }
    if(Iw===0) break;
  }
  // remove repetidos; se a mesma combinação vale com e sem restrição de TE, fica a sem restrição
  out.sort((a,b)=>(a.te?1:0)-(b.te?1:0));
  const seen=new Set(); return out.filter(c=>{ const k=c.w+"|"+c.d; if(seen.has(k)) return false; seen.add(k); return true; });
}

/* nível pré-domesticação L0: LwT = (L0−1) + floor(L0×TE/2) */
function bonusCheck(LwT, te){
  let lo=Infinity, hi=-Infinity;
  for(let L0=1; L0<=LwT+1; L0++){
    const bonus=LwT-(L0-1); if(bonus<0) continue;
    const a=Math.max(te[0],2*bonus/L0), b=Math.min(te[1],2*(bonus+1)/L0-1e-9);
    if(a<=b){ lo=Math.min(lo,a); hi=Math.max(hi,b); }
  }
  return lo<=hi ? [lo,hi] : null;
}

/* opções por status entre as soluções restantes */
function optionsByStat(sols){
  const o={};
  for(const so of sols) for(const [i,p] of Object.entries(so.pts)){
    const k=p[0]+"|"+p[2]; (o[i]=o[i]||new Map()); o[i].set(k,(o[i].get(k)||0)+1);
  }
  return o;
}

/* Cálculo rápido de um status sozinho, supondo 0 pontos do jogador */
function quickPoints(s, i, origem, str, te, ib){
  const P=parseVal(str, PERCENT.has(i)); if(!P) return null;
  const raw=s.st[i]; if(!raw) return null;
  if(origem==="domesticado" && raw[4]>0 && te==null) return {needTE:true};
  const passes = (i===ST.FO && raw[4]>0) ? [false,true] : [false];
  for(const noTm of passes){ const r=_quick(s,i,origem,P,te,ib,raw,noTm); if(r.exact) return noTm?Object.assign(r,{baby:true}):r; }
  return _quick(s,i,origem,P,te,ib,raw,false);
}
function _quick(s,i,origem,P,te,ib,raw,noTm){
  let best=null;
  for(let w=0; w<=3000; w++){
    const [v1,v2]=valRange(s,i,w,0,0,origem,origem==="criado"?1:te,ib,noTm);
    if(v2>=P.v-P.tol && v1<=P.v+P.tol) return {w, exact:true};
    const diff=Math.min(Math.abs(v1-P.v),Math.abs(v2-P.v));
    if(!best || diff<best.diff) best={w,diff};
    if(v1>P.v+P.tol || raw[1]===0) break;
  }
  return best ? {w:best.w, exact:false} : null;
}

/* ===================== LEITURA NO APARELHO (APK, Google ML Kit) =====================
 O plugin nativo devolve linhas de texto com posição (x, y, w, h).
 Este intérprete transforma isso no mesmo objeto que a leitura pelo Claude devolve
 ({especie, nome, nivel, valores:{...}, cores, mutM, mutP, impressao}), para reaproveitar applyPhoto().

 Telas tratadas:
  - Inventário (aba Eles/Them): cada status tem o NOME escrito -> casa nome com o número da mesma linha.
  - Card do cryopod: só ÍCONES -> pega os números "atual / máximo" e testa qual distribuição
    entre os status encaixa nos pontos da espécie (a que fecha exata vence; empate = ordem do card). */

function ocrNative(){
  const cap=window.Capacitor; if(!cap) return null;
  if(cap.Plugins && cap.Plugins.Ocr && cap.Plugins.Ocr.read) return o=>cap.Plugins.Ocr.read(o);
  if(typeof cap.registerPlugin==="function"){ try{ const p=cap.registerPlugin("Ocr"); if(p&&p.read) return o=>p.read(o); }catch(e){} }
  if(typeof cap.nativePromise==="function") return o=>cap.nativePromise("Ocr","read",o);
  return null;
}
function blobToBase64(blob){ return new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(String(r.result).split(",")[1]); r.onerror=rej; r.readAsDataURL(blob); }); }

/* número no formato do jogo: "3888.1", "3.888,1", "13596.5" */
function ocrNum(s){
  if(s==null) return null; let t=String(s).replace(/[Oo]/g,"0").replace(/[lI|]/g,"1").replace(/\s/g,"");
  const p=parseVal(t,false); return p?t:null;
}
/* Rótulos do inventário, em inglês e português. A leitura de foto de TV costuma deformar as letras
   ("EALTH", "OYGEN", "MELIE DAMACE"), então a comparação tolera alguns erros. */
const OCR_NAMES=[[0,["HEALTH","SAUDE","VIDA"]],[1,["STAMINA","ESTAMINA","ENERGIA"]],[3,["OXYGEN","OXIGENIO"]],
  [4,["FOOD","COMIDA"]],[7,["WEIGHT","PESO","CARGA"]],[8,["MELEEDAMAGE","MELEE","DAMAGE","DANO","COMBATE"]],
  [9,["MOVEMENTSPEED","MOVEMENT","SPEED","VELOCIDADE"]],[2,["TORPIDITY","TORPOR","TORPIDEZ"]],
  [11,["CRAFTINGSKILL","CRAFTING","CRIACAO"]],["ib",["IMPRINTING","IMPRINT","IMPRESSAO"]]];
const OCR_ORDER=[0,1,3,4,7,8,9,2,11,"ib"]; // ordem das linhas no inventário
function _lev(a,b){ const d=[...Array(b.length+1).keys()]; for(let i=1;i<=a.length;i++){ let prev=d[0]; d[0]=i; for(let j=1;j<=b.length;j++){ const tmp=d[j]; d[j]=Math.min(d[j]+1,d[j-1]+1,prev+(a[i-1]===b[j-1]?0:1)); prev=tmp; } } return d[b.length]; }
function ocrLabel(text){
  const up=norm(text).toUpperCase().replace(/[^A-Z]+/g," ").trim(); if(!up) return null;
  const words=up.split(" ").filter(w=>w.length>=3); const all=up.replace(/ /g,"");
  const tries=words.concat(words.length>1?[all]:[]);
  let best=null;
  for(const [i,names] of OCR_NAMES) for(const nm of names) for(const w of tries){
    if(Math.abs(w.length-nm.length)>3) continue;
    const d=_lev(w,nm), lim=Math.max(1,Math.floor(nm.length/3));
    if(d<=lim && (!best || d/nm.length<best.r)) best={i, r:d/nm.length};
  }
  return best;
}
/* Um número do jogo lido com erros vira uma lista de candidatos, cada um com um "custo"
   (quanto foi preciso corrigir). Todo valor do jogo tem exatamente uma casa decimal. */
const OCR_SUB={o:["0"],O:["0"],D:["0"],Q:["0"],U:["0"],I:["1"],l:["1"],i:["1"],"|":["1"],"!":["1"],L:["1"],j:["1"],
  z:["2"],Z:["2"],s:["5","8"],S:["5","8"],e:["8","0","6"],E:["8","6"],B:["8","3"],b:["6"],G:["6","0"],g:["9"],q:["9"],T:["7"],
  A:["4","8"],a:["4"],x:[],X:[]};
function _expand(tok){
  // devolve [{d:"dígitos", cost}] — letras viram dígitos (custo 1) ou somem (custo 2)
  let out=[{d:"",cost:0}];
  for(const ch of tok){
    if(/\d/.test(ch)){ out.forEach(o=>o.d+=ch); continue; }
    if(ch==="."||ch===","||ch===" ") continue;
    const subs=OCR_SUB[ch]; const nx=[];
    for(const o of out){ if(subs) subs.forEach(dg=>nx.push({d:o.d+dg,cost:o.cost+1})); nx.push({d:o.d,cost:o.cost+2}); }
    out=nx.sort((a,b)=>a.cost-b.cost).slice(0,48);
  }
  return out.filter(o=>o.d.length>=1);
}
function ocrCands(tok, pct){
  if(!tok) return [];
  let t=String(tok).trim();
  if(pct) t=t.replace(/[%A4xX]$/,"%").replace(/%.*$/,"");
  if(/[.,]$/.test(t)) return []; // número cortado ("44.")
  const out=new Map();
  const add=(d,cost)=>{ d=d.replace(/^0+(?=\d\d)/,""); if(d.length<2) return; const v=d.slice(0,-1)+"."+d.slice(-1); if(!out.has(v)||out.get(v)>cost) out.set(v,cost); };
  for(const o of _expand(t)){
    add(o.d,o.cost);
    if(o.cost<=2){ // confusões entre dígitos parecidos (8↔0, 8↔6, 8↔3), no máximo uma
      for(let k=0;k<o.d.length;k++){ const sw={"0":"8","8":"0","6":"8","3":"8"}[o.d[k]]; if(sw) add(o.d.slice(0,k)+sw+o.d.slice(k+1), o.cost+2); }
    }
    if(pct && o.d.length<=3) add("1"+o.d, o.cost+2); // "07.4" pode ser "107.4"/"187.4" (dígito da frente perdido)
    if(pct && o.d.length<=3) for(let k=0;k<o.d.length;k++){ const sw={"0":"8","8":"0"}[o.d[k]]; if(sw) add("1"+o.d.slice(0,k)+sw+o.d.slice(k+1), o.cost+4); }
  }
  return [...out.entries()].map(([v,cost])=>({v,cost})).sort((a,b)=>a.cost-b.cost);
}
/* texto da linha de valor -> candidatos para o máximo (preferido) e para o atual */
function ocrValue(raw, pct){
  const t=String(raw||"").trim();
  const first=x=>(x.trim().split(/\s+/)[0]||""), last=x=>{ const a=x.trim().split(/\s+/); return a[a.length-1]||""; };
  if(pct){ const m=t.match(/([0-9A-Za-z.,|!]+)\s*%/); return {max:ocrCands(m?m[1]:first(t),true), cur:[]}; }
  const ix=t.search(/[\/|]/);
  if(ix>=0){ const a=t.slice(0,ix), b=t.slice(ix+1); return {max:ocrCands(first(b),false), cur:ocrCands(last(a),false), pair:true}; }
  return {max:ocrCands(first(t),false), cur:[]};
}
function _sim(a,b){ return _lev(String(a),String(b)); }
// "a / b" -> b ; "318.7 %" -> 318.7
const RE_PAIR=/(\d[\d.,]*\d|\d)\s*[\/|]\s*(\d[\d.,]*\d|\d)/g;
const RE_PCT=/(\d[\d.,]*\d|\d)\s*%/g;

/* O leitor às vezes junta numa linha só textos de colunas diferentes que estão na mesma altura
   ("1855.9 / 5060.1     1050.0 / 1050.0"). Pela posição de cada palavra, um vão grande separa as colunas. */
function _splitLine(l){
  const els=(l.e||[]).filter(e=>e && e.t!=null && e.w!=null).map(e=>({t:String(e.t), x:e.x||0, y:e.y||l.y, w:e.w||0, h:e.h||l.h})).sort((a,b)=>a.x-b.x);
  if(els.length<2) return [l];
  const gapMax=Math.max(12, (l.h||10)*1.5);
  const segs=[[els[0]]];
  for(let k=1;k<els.length;k++){ const p=els[k-1], c=els[k]; if(c.x-(p.x+p.w)>gapMax) segs.push([c]); else segs[segs.length-1].push(c); }
  if(segs.length===1) return [l];
  return segs.map(g=>{ const x=Math.min(...g.map(e=>e.x)), r=Math.max(...g.map(e=>e.x+e.w)), y=Math.min(...g.map(e=>e.y)), bt=Math.max(...g.map(e=>e.y+e.h));
    return {t:g.map(e=>e.t).join(" "), x, y, w:r-x, h:Math.max(bt-y,1), e:g}; });
}
function ocrLines(res){
  const L=[];
  for(const l0 of (res&&res.lines||[])){
    const l={t:String(l0.t||""), x:l0.x||0, y:l0.y||0, w:l0.w||0, h:l0.h||10, e:l0.e||[]};
    _splitLine(l).forEach(z=>L.push(z));
  }
  L.forEach(l=>{ l.cy=l.y+l.h/2; l.cx=l.x+l.w/2; });
  return L;
}
function pairsIn(text){ const out=[]; let m; RE_PAIR.lastIndex=0; while((m=RE_PAIR.exec(text))){ const v=ocrNum(m[2]); if(v) out.push(v); } return out; }
function pctsIn(text){ const out=[]; let m; RE_PCT.lastIndex=0; while((m=RE_PCT.exec(text))){ const v=ocrNum(m[1]); if(v) out.push(v); } return out; }

function parseOcr(res, ctx){
  const L=ocrLines(res); const full=L.map(l=>l.t).join("\n");
  const o={valores:{}, _modo:null};
  // nível
  let m=full.match(/(?:LVL|LEVEL|N[IÍ]VEL)\s*:?\s*(\d{1,3})/i); if(m) o.nivel=parseInt(m[1]);
  // espécie: "(PYROMANE)" no título, ou uma linha que seja exatamente o nome de uma espécie
  const spByNorm={}; SPECIES.forEach(s=>{ const k=norm(s.n).replace(/[^a-z0-9]/g,""); if(!spByNorm[k] || !s.v.length) spByNorm[k]=s; });
  const fix=t=>norm(t).replace(/0/g,"o").replace(/[1|]/g,"l").replace(/5/g,"s").replace(/[^a-z]/g,"");
  const spFix={}; SPECIES.forEach(s=>{ const k=fix(s.n); if(!spFix[k] || !s.v.length) spFix[k]=s; });
  const keys=Object.keys(spFix);
  const lev=(a,b)=>{ if(Math.abs(a.length-b.length)>2) return 9; const d=[...Array(b.length+1).keys()]; for(let i=1;i<=a.length;i++){ let prev=d[0]; d[0]=i; for(let j=1;j<=b.length;j++){ const tmp=d[j]; d[j]=Math.min(d[j]+1,d[j-1]+1,prev+(a[i-1]===b[j-1]?0:1)); prev=tmp; } } return d[b.length]; };
  const tryName=t=>{ const k=norm(t).replace(/[^a-z0-9]/g,""); if(k.length>=3 && spByNorm[k]) return spByNorm[k].n;
    const f=fix(t).replace(/i/g,"l"); if(f.length<5) return null;
    let best=null, bd=9; for(const key of keys){ const kk=key.replace(/i/g,"l"); const dd=lev(f,kk); if(dd<bd){bd=dd; best=key;} }
    return bd<=Math.min(2,Math.floor(f.length/4)) ? spFix[best].n : null; };
  m=full.match(/\(([^()\n]{3,40})\)?/); if(m && tryName(m[1])) o.especie=tryName(m[1]);
  if(!o.especie) for(const l of L){ const n=tryName(l.t); if(n){ o.especie=n; break; } }
  // nome: texto antes de " - LVL"
  m=full.match(/^(.{2,40}?)\s*[-–]\s*(?:LVL|LEVEL)/im); if(m) o.nome=m[1].trim();
  // mutações: "256 Mutations" (o da esquerda = materno)
  const mutL=[]; L.filter(l=>/muta/i.test(l.t)).forEach(l=>{ const re=/(\d+)\s*muta/ig; let mm, k=0; while((mm=re.exec(l.t))){ mutL.push({x:l.x+(k++)*1000, n:parseInt(mm[1])}); } });
  mutL.sort((a,b)=>a.x-b.x);
  if(mutL.length){ o.mutM=mutL[0].n; if(mutL[1]) o.mutP=mutL[1].n; }
  // impressão
  for(const l of L){ if(/imprint|impress/i.test(l.t)||/%\s*[-–]\s*\S/.test(l.t)){ const p=pctsIn(l.t)[0] || (L.find(z=>z!==l && Math.abs(z.cy-l.cy)<l.h && z.x>l.x && pctsIn(z.t).length)||{t:""}).t.match(/(\d[\d.,]*)\s*%/)?.[1]; if(p){ o.impressao=parseFloat(String(p).replace(",",".")); break; } } }
  // cores: uma fileira com 6 números inteiros 0–255
  o.cores=ocrColors(L);

  if(/RAISED\s*BY|RA[I1]SED|CRIAD[OA]\s*POR/i.test(full)) o.criado=true;
  // pontos ainda não distribuídos ("POINTS AVAILABLE 4", "PONTOS DISPONÍVEIS 4")
  m=full.match(/P[O0][A-Z0-9]{1,5}S?\s*(?:AV|DISP|DISPON)[A-ZÍI]*\s*:?\s*(\d{1,3})/i); if(m) o.livres=parseInt(m[1]);
  // nível sem número na mesma linha: procura um número logo ao lado
  if(!o.nivel){ const lv=L.find(l=>/(LVL|LEVEL|N[IÍ]VEL)/i.test(l.t)); if(lv){ const nb=L.filter(z=>z!==lv && /^\s*\d{1,3}\s*$/.test(z.t) && Math.abs(z.cy-lv.cy)<lv.h*0.8 && z.x>lv.x).sort((a,b)=>a.x-b.x)[0]; if(nb) o.nivel=parseInt(nb.t); } }

  // ---------- inventário: rótulos escritos (tolerante a erros) ----------
  const lab=L.map(l=>({l, lb:ocrLabel(l.t)})).filter(z=>z.lb);
  const distinct=new Set(lab.map(z=>z.lb.i));
  if(distinct.size>=3){
    o._modo="inventario";
    const H=Math.max(8, ...lab.map(z=>z.l.h)); const y0=Math.min(...lab.map(z=>z.l.cy))-H, y1=Math.max(...lab.map(z=>z.l.cy))+H;
    const isVal=t=>/\d/.test(t) && (/[\/|]/.test(t) || /^[\dA-Za-z.,%|!]{1,12}$/.test(t.replace(/\s/g,"")));
    // linhas (rows) do bloco de status, de cima para baixo
    const rows=[];
    const rowOf=cy=>rows.find(r=>Math.abs(r.cy-cy)<H*0.75);
    for(const z of lab){ let r=rowOf(z.l.cy); if(!r){ r={cy:z.l.cy, i:null, txt:[]}; rows.push(r); } if(r.i==null) r.i=z.lb.i;
      const rest=z.l.t.replace(/^[^\d]*/,""); if(/\d/.test(rest)) r.txt.push({x:z.l.x+z.l.w, t:rest}); }
    const xsL=lab.map(z=>z.l.x).sort((a,b)=>a-b), labelX=xsL[Math.floor(xsL.length/2)];
    for(const l of L){ if(lab.some(z=>z.l===l)) continue; if(l.cy<y0||l.cy>y1||!isVal(l.t)) continue;
      if(l.x<=labelX) continue; // números à esquerda dos nomes são de outra coisa (itens do inventário)
      let r=rowOf(l.cy); if(!r){ r={cy:l.cy, i:null, txt:[]}; rows.push(r); } r.txt.push({x:l.x, t:l.t}); }
    rows.sort((a,b)=>a.cy-b.cy);
    // linha sem rótulo reconhecido: deduz pela ordem fixa do inventário
    const used=new Set(rows.map(r=>r.i).filter(i=>i!=null));
    rows.forEach((r,k)=>{ if(r.i!=null||!r.txt.length) return;
      const prev=rows.slice(0,k).reverse().find(z=>z.i!=null), next=rows.slice(k+1).find(z=>z.i!=null);
      const a=prev?OCR_ORDER.indexOf(prev.i):-1, b=next?OCR_ORDER.indexOf(next.i):OCR_ORDER.length;
      const gap=OCR_ORDER.slice(a+1,b).filter(i=>!used.has(i));
      if(gap.length){ r.i=gap[0]; r.deduzido=true; used.add(gap[0]); }
    });
    o._cands={}; o._cur={}; o._rows=rows;
    for(const r of rows){ if(r.i==null||!r.txt.length) continue;
      const pcs=r.txt.sort((a,b)=>a.x-b.x);
      let k=pcs.findIndex(z=>/\d\s*[\/|]|[\/|]\s*\d|%/.test(z.t));
      let raw;
      if(k<0) raw=pcs.map(z=>z.t).join(" ");
      else { raw=pcs[k].t; if(/[\/|]\s*$/.test(raw) && pcs[k+1]) raw+=" "+pcs[k+1].t; else if(/^\s*[\/|]/.test(raw) && k>0) raw=pcs[k-1].t+" "+raw; }
      if(r.i==="ib"){ const mm=raw.replace(/[Oo]/g,"0").match(/(\d{1,3}(?:[.,]\d)?)/); if(mm && o.impressao==null){ const v=parseFloat(mm[1].replace(",",".")); if(v>=0&&v<=100) o.impressao=v; } continue; }
      const pct=PERCENT.has(r.i); const cv=ocrValue(raw,pct);
      if(o._cands[r.i]) continue;
      o._cands[r.i]={max:cv.max, cur:cv.cur, raw, deduzido:!!r.deduzido};
    }
    ocrPick(o, null);
    return o;
  }

  // ---------- card do cryopod: só ícones ----------
  o._modo="cryopod";
  const items=[];
  for(const l of L){
    if(/cryopod|charge|throw|weight:|recharge|mutation/i.test(l.t)) continue;
    for(const v of pairsIn(l.t)) items.push({v, x:l.x, y:l.y, cx:l.cx, cy:l.cy, pct:false});
    if(/%\s*[-–]/.test(l.t)) continue; // linha da impressão
    for(const v of pctsIn(l.t)) items.push({v, x:l.x, y:l.y, cx:l.cx, cy:l.cy, pct:true});
  }
  if(!items.length) return o;
  // colunas: divide pelo maior intervalo em x
  const xs=items.map(z=>z.cx).sort((a,b)=>a-b); let cut=null, gap=0;
  for(let k=1;k<xs.length;k++){ const g=xs[k]-xs[k-1]; if(g>gap){gap=g; cut=(xs[k]+xs[k-1])/2;} }
  const twoCols = gap > (xs[xs.length-1]-xs[0])*0.25;
  items.forEach(z=>{ z.col = twoCols && z.cx>cut ? 1 : 0; });
  items.sort((a,b)=>a.col-b.col || a.cy-b.cy);
  const nums=items.filter(z=>!z.pct), pcts=items.filter(z=>z.pct);
  // porcentagens: na coluna da direita = dano; na da esquerda = velocidade
  const pR=pcts.filter(z=>z.col===1), pL=pcts.filter(z=>z.col===0);
  if(pR.length) o.valores.dano=pR[0].v; else if(pcts.length) o.valores.dano=pcts[pcts.length-1].v;
  if(pL.length && pR.length) o.valores.velocidade=pL[0].v;
  // ordem do card: esquerda Vida, Peso, Oxigênio, Torpor; direita Estamina, Comida
  o._nums=nums.map(z=>z.v);
  o._ordem=[0,7,3,2,1,4];
  return o;
}
/* Escolhe o melhor candidato de cada status.
   Com a espécie conhecida, prefere o candidato que fecha exatamente em pontos inteiros.
   Marca em o._incertos o que precisou de correção ou não foi confirmado. */
const OCR_CUR_OK=new Set([0,1,3]); // vida, estamina e oxigênio costumam estar cheios: o "atual" serve de reserva
function ocrPick(o, s, origem, ib, nivel){
  if(!o._cands) return o;
  o._incertos=[]; o._faltam=[];
  if(s && o._rows){ // refaz a dedução das linhas sem rótulo usando só os status desta espécie
    const has=new Set(inputStats(s).map(x=>x.i).concat(["ib"]));
    const ord=OCR_ORDER.filter(i=>has.has(i));
    const used=new Set(o._rows.filter(r=>!r.deduzido&&r.i!=null).map(r=>r.i));
    o._rows.forEach((r,k)=>{ if(!r.deduzido) return;
      const prev=o._rows.slice(0,k).reverse().find(z=>z.i!=null&&!z.deduzido), next=o._rows.slice(k+1).find(z=>z.i!=null&&!z.deduzido);
      const a=prev?ord.indexOf(prev.i):-1, b=next?ord.indexOf(next.i):ord.length;
      const gap=ord.slice(a+1,b<0?ord.length:b).filter(i=>!used.has(i));
      const old=r.i; const ni=gap.length?gap[0]:null;
      if(ni!==old && o._cands[old]){ const c=o._cands[old]; delete o._cands[old]; delete o.valores[ocrKey(old)]; if(ni!=null && ni!=="ib") o._cands[ni]=c; }
      r.i=ni; if(ni!=null) used.add(ni);
    });
  }
  for(const [k,c] of Object.entries(o._cands)){
    const i=+k, pct=PERCENT.has(i), key=ocrKey(i);
    let pool=c.max.map(z=>({...z, side:"max"}));
    // o máximo nunca é menor que o atual
    const curBest=c.cur.length?parseFloat(c.cur[0].v):null;
    if(curBest!=null) pool=pool.filter(z=>parseFloat(z.v)>=curBest-0.05);
    if(pct && (i===8)) pool=pool.filter(z=>parseFloat(z.v)>=100);
    if(!pool.length && OCR_CUR_OK.has(i) && c.cur.length) pool=c.cur.map(z=>({...z, cost:z.cost+3, side:"cur"}));
    if(!pool.length){ delete o.valores[key]; o._faltam.push(i); continue; }
    // pontuação: custo da correção, distância ao valor "atual" (desempate) e, se der, se fecha em pontos
    const curTxt=c.cur.length?c.cur[0].v:null;
    const lim = nivel ? nivel+5 : 450;
    for(const z of pool){
      z.score=z.cost*10 + (curTxt? Math.min(_sim(z.v,curTxt),3) : 0);
      if(s){ let q=null; try{ q=quickPoints(s,i,origem||"domesticado",z.v,null,(ib||0)/100); }catch(e){}
        if(q && q.exact && q.w<=lim) { z.exact=true; z.score-=25; }
        let qw=q&&q.w!=null?q.w:null;
        if(qw==null && q && q.needTE){ try{ const q2=quickPoints(s,i,"criado",z.v,null,(ib||0)/100); if(q2&&q2.w!=null) qw=q2.w; }catch(e){} }
        if(qw!=null) z.score+=Math.min(qw,240)/8;
        else if(q && !q.exact && !q.needTE) z.score+=4;
        if(q && q.w>lim) z.score+=40; }
    }
    pool.sort((a,b)=>a.score-b.score);
    const best=pool[0];
    o.valores[key]=best.v;
    if(best.cost>0 || best.side==="cur" || c.deduzido && !best.exact) o._incertos.push(i);
  }
  return o;
}
/* junta a leitura normal com a leitura da imagem realçada */
function mergeOcr(a,b){
  if(!b) return a; if(!a) return b;
  const o=a;
  for(const k of ["especie","nivel","impressao","livres","nome","mutM","mutP","criado"]) if(o[k]==null && b[k]!=null) o[k]=b[k];
  if(!o.cores && b.cores) o.cores=b.cores;
  if(o._modo!=="inventario" && b._modo==="inventario"){ b._extra=true; return mergeOcr(b,{...a,_cands:null}); }
  if(o._modo==="inventario" && b._cands){
    for(const [k,c] of Object.entries(b._cands)){
      const mine=o._cands[k];
      if(!mine){ o._cands[k]=c; continue; }
      const seen=new Map(); [...mine.max,...c.max].forEach(z=>{ if(!seen.has(z.v)||seen.get(z.v)>z.cost) seen.set(z.v,z.cost); });
      mine.max=[...seen.entries()].map(([v,cost])=>({v,cost})).sort((x,y)=>x.cost-y.cost);
      if(!mine.cur.length) mine.cur=c.cur;
      mine.deduzido = mine.deduzido && c.deduzido;
    }
  }
  if(o._modo==="cryopod" && b._modo==="cryopod" && (b._nums||[]).length>(o._nums||[]).length){ o._nums=b._nums; o._ordem=b._ordem; for(const k of ["dano","velocidade"]) if(!o.valores[k]&&b.valores[k]) o.valores[k]=b.valores[k]; }
  return o;
}
function ocrNeedsMore(o){
  if(!o.especie || !o.nivel) return true;
  if(o._modo==="inventario"){ const c=o._cands||{}; return Object.keys(c).length<5 || Object.values(c).some(z=>!z.max.length||z.max[0].cost>0); }
  return (o._nums||[]).length<5;
}
function ocrKey(i){ return {0:"vida",1:"estamina",2:"torpor",3:"oxigenio",4:"comida",7:"peso",8:"dano",9:"velocidade",11:"criacao"}[i]; }
function ocrColors(L){
  // junta elementos por altura e procura 6 inteiros 0–255 lado a lado
  const els=[]; L.forEach(l=>(l.e&&l.e.length?l.e:[l]).forEach(e=>{ const t=String(e.t||"").trim(); if(/^\d{1,3}$/.test(t) && +t<=255) els.push({n:+t, x:e.x||0, cy:(e.y||0)+(e.h||10)/2, h:e.h||10}); }));
  els.sort((a,b)=>a.cy-b.cy);
  for(let i=0;i<els.length;i++){
    const row=els.filter(z=>Math.abs(z.cy-els[i].cy)<els[i].h*0.6).sort((a,b)=>a.x-b.x);
    if(row.length===6) return row.map(z=>z.n);
  }
  return null;
}

/* Card do cryopod: escolhe a distribuição dos números entre os status que fecha com a espécie */
function assignCryopod(o, s, origem, ib){
  if(!o._nums || !s) return o;
  const need=inputStats(s).filter(x=>!PERCENT.has(x.i)).map(x=>x.i);
  const nums=o._nums.slice(0,8);
  const prior=o._ordem.filter(i=>need.includes(i)).concat(need.filter(i=>!o._ordem.includes(i)));
  let best=null;
  const ibF=(ib||0)/100;
  const semTeto = origem==="criado" && ((o.mutM||0)+(o.mutP||0))>0; // mutações não entram no torpor
  const score=(asg)=>{
    let sc=0, sumW=0, tor=null;
    for(const [i,v] of Object.entries(asg)){
      const r=quickPoints(s,+i,origem,v,null,ibF);
      if(r && r.exact){ sc+=10; if(+i===ST.TO) tor=r.w; else sumW+=r.w; } else if(r && r.needTE){ sc+=5; }
    }
    if(tor!=null && sumW===tor) sc+=15; // soma fecha com o torpor
    if(tor!=null && sumW>tor && !semTeto) sc-=30; // sem mutações, nenhum status pode somar mais pontos selvagens que o torpor indica
    prior.forEach((i,k)=>{ if(asg[i]===nums[k]) sc+=1; });
    return sc;
  };
  // permutações (no máximo 6 números -> 720)
  const k=Math.min(need.length, nums.length);
  const perm=(arr,n,cur,used)=>{
    if(cur.length===n){ const asg={}; cur.forEach((v,j)=>asg[prior[j]]=v); const sc=score(asg); if(!best||sc>best.sc) best={sc,asg}; return; }
    for(let j=0;j<arr.length;j++){ if(used[j]) continue; used[j]=true; cur.push(arr[j]); perm(arr,n,cur,used); cur.pop(); used[j]=false; }
  };
  if(k>0) perm(nums,k,[],[]);
  if(best) for(const [i,v] of Object.entries(best.asg)) o.valores[ocrKey(+i)]=v;
  return o;
}

async function readPhotoOnDevice(file){
  const fn=ocrNative(); if(!fn) throw {code:"sem_ocr", message:"plugin de leitura não encontrado"};
  const blob=await shrink(file);
  const b64=await blobToBase64(blob);
  const res=await fn({base64:b64});
  return res;
}

/* ===================== PLANO DE CRIA E MUTAÇÕES (ASA) =====================
 Herança no ASA: em cada status o filhote recebe JUNTOS o maior nível selvagem e o maior
 nível mutado dos pais (55%) ou os dois menores (45%).
 Mutação: 3 sorteios de 2,5%; cada sorteio escolhe um dos pais como origem; se o total de
 mutações (materno + paterno) desse pai for 20 ou mais, o sorteio é perdido. Cada mutação
 dá +2 níveis mutados a um status que pode mutar (não Velocidade nem Torpor). */

const P_HI=0.55, P_LO=0.45, MUT_ROLL=0.025, MUT_LIMIT=20;

function mutTotal(c){ return (c.mutM||0)+(c.mutP||0); }
function canMutate(c){ return mutTotal(c)<MUT_LIMIT; }
function pairMutChance(f,m){
  const elig=(canMutate(f)?1:0)+(canMutate(m)?1:0);
  return 1-Math.pow(1-MUT_ROLL*elig/2,3);
}
function lv(c,i){ const p=c.pts&&c.pts[i]||[0,0,0]; return [p[0]||0,p[1]||0]; }

/* status considerados no plano (os que recebem pontos selvagens, menos Torpor) */
function breedStats(s){ return statsOf(s).filter(x=>x.wild && x.i!==ST.TO).map(x=>x.i); }

/* melhor valor da espécie em cada status (entre as criaturas ativas) */
function speciesBest(list, stats, useMut){
  const b={}; stats.forEach(i=>{ b[i]=0; list.forEach(c=>{ const [w,m]=lv(c,i); b[i]=Math.max(b[i], useMut?w+m:w); }); }); return b;
}

/* avalia um par fêmea × macho */
function evalPair(f, m, stats, useMut, best){
  let pIdeal=1, expected=0, idealSum=0, reach=0;
  const per={};
  for(const i of stats){
    const [wf,mf]=lv(f,i), [wm,mm]=lv(m,i);
    const hi=[Math.max(wf,wm),Math.max(mf,mm)], lo=[Math.min(wf,wm),Math.min(mf,mm)];
    const same = hi[0]===lo[0] && hi[1]===lo[1];
    const vHi = useMut?hi[0]+hi[1]:hi[0], vLo = useMut?lo[0]+lo[1]:lo[0];
    const e = same ? vHi : P_HI*vHi+P_LO*vLo;
    expected+=e; idealSum+=vHi; if(!same) pIdeal*=P_HI;
    if(vHi>=best[i] && best[i]>0) reach++;
    per[i]={hi,lo,vHi,vLo,same,top:vHi>=best[i]&&best[i]>0};
  }
  return {f,m,per,pIdeal,expected,idealSum,reach,pMut:pairMutChance(f,m)};
}

function breedingPlan(bp, stats, useMut, limit){
  const all=[...state.creatures.values()].filter(c=>c.sp===bp && isActive(c));
  const fem=all.filter(c=>c.sexo==="F"), mal=all.filter(c=>c.sexo==="M");
  const best=speciesBest(all, stats, useMut);
  const pairs=[];
  for(const f of fem) for(const m of mal) pairs.push(evalPair(f,m,stats,useMut,best));
  // ordem: mais status no máximo da espécie, depois maior média esperada, depois maior chance do ideal
  pairs.sort((a,b)=> b.reach-a.reach || b.expected-a.expected || b.pIdeal-a.pIdeal);
  return {pairs:pairs.slice(0,limit||15), total:pairs.length, best, fem:fem.length, mal:mal.length, n:all.length};
}

function fmtPct(p){ const v=p*100; return (v>=10?v.toFixed(0):v>=1?v.toFixed(1):v.toFixed(2)).replace(".",",")+"%"; }


/* ===================== ARMAZENAMENTO =====================
 Nuvem (db do artifact) + espelho local para abrir rápido / sem internet */
const LS_KEY="arkbreeding.v1";
const APP_VERSION = "__APPVER__".indexOf("__")===0 ? "dev" : "__APPVER__";
const IS_APK = !!(window.Capacitor && (typeof window.Capacitor.isNativePlatform!=="function" || window.Capacitor.isNativePlatform()));
const state = { creatures:new Map(), view:"lib", spFilter:"", search:"", sortStat:-1, bestSp:"", db:null, col:null, online:false, loaded:false, editing:null };
function lsLoad(){ try{ const j=JSON.parse(localStorage.getItem(LS_KEY)||"{}"); (Array.isArray(j.c)?j.c:[]).forEach(x=>{ const c=normalizeCreature(x,true); if(c) state.creatures.set(c.id,c); }); state.pendingDel=(Array.isArray(j.del)?j.del:[]).filter(id=>_ID_RE.test(String(id))); }catch(e){ state.pendingDel=[]; } }
function lsSave(){ try{ localStorage.setItem(LS_KEY, JSON.stringify({c:[...state.creatures.values()], del:state.pendingDel||[]})); }catch(e){} }
function setSync(cls, txt){ document.getElementById("syncdot").className="dot "+cls; document.getElementById("synctxt").textContent=txt; }
/* Toda criatura que entra no app (backup, .asb, nuvem, armazenamento do celular) passa por aqui:
   só campos conhecidos, números de verdade e textos com limite. Impede HTML/script escondido em backup. */
const _ID_RE=/^[A-Za-z0-9_-]{1,80}$/;
function _num(v,min,max,int){ if(v==null||v==="") return null; const n=typeof v==="number"?v:Number(String(v).replace(",",".")); if(!Number.isFinite(n)) return null; if(n<min||n>max) return null; return int?Math.round(n):n; }
function _str(v,max){ return v==null?"":String(v).slice(0,max); }
function normalizeCreature(x, keepPending){
  if(!x || typeof x!=="object") return null;
  const id=_str(x.id,80); if(!_ID_RE.test(id)) return null;
  const sp=_str(x.sp,160); if(!/^[A-Za-z0-9_]{1,160}$/.test(sp)) return null;
  const c={id, sp,
    nome:_str(x.nome,80), notas:_str(x.notas,4000),
    sexo:["M","F"].includes(x.sexo)?x.sexo:"",
    origem:["domesticado","criado","selvagem"].includes(x.origem)?x.origem:"domesticado",
    estado:Object.prototype.hasOwnProperty.call(ESTADO_PT,x.estado)?x.estado:"vivo",
    modo:["valores","pontos"].includes(x.modo)?x.modo:undefined,
    nivel:_num(x.nivel,1,100000,true), te:_num(x.te,0,100,false), ib:_num(x.ib,0,1000,false),
    mutM:_num(x.mutM,0,100000,true), mutP:_num(x.mutP,0,100000,true), livres:_num(x.livres,0,10000,true),
    mae:_ID_RE.test(_str(x.mae,80))?String(x.mae):"", pai:_ID_RE.test(_str(x.pai,80))?String(x.pai):"",
    criado:_num(x.criado,0,1e14,true)||Date.now(), atualizado:_num(x.atualizado,0,1e14,true)||undefined,
    pts:{}, cores:[0,0,0,0,0,0]};
  if(x.pts && typeof x.pts==="object") for(const [k,a] of Object.entries(x.pts)){ const i=_num(k,0,11,true); if(i==null||!Array.isArray(a)) continue; c.pts[i]=[0,1,2].map(j=>_num(a[j],0,100000,true)||0); }
  if(Array.isArray(x.cores)) c.cores=[0,1,2,3,4,5].map(r=>_num(x.cores[r],0,255,true)||0);
  if(x.vals && typeof x.vals==="object"){ c.vals={}; for(const [k,v] of Object.entries(x.vals)){ const i=_num(k,0,11,true); const s=_str(v,24); if(i!=null && /^[0-9.,\/ %]*$/.test(s)) c.vals[i]=s; } }
  if(keepPending && x._pending) c._pending=true;
  Object.keys(c).forEach(k=>c[k]===undefined&&delete c[k]);
  return c;
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function clean(c){ const o=JSON.parse(JSON.stringify(c)); delete o._pending; return o; }

async function initDb(){
  setSync("warn","conectando…");
  let db=null;
  try{ db = await window.claude?.use?.("db"); }catch(e){ db=null; }
  if(!db){ setSync(IS_APK?"ok":"warn", IS_APK?"salvo no celular":"só neste aparelho"); state.loaded=true; render(); return; }
  state.db=db; state.col=db.collection("criaturas");
  let first=true;
  const timer=setTimeout(()=>{ if(first) setSync("warn","sem conexão com a nuvem"); },10000);
  state.col.onSnapshot(async snap=>{
    if(!snap.metadata.fromCache && first){
      first=false; clearTimeout(timer);
      await flushPending(snap);
    }
    const remote=new Map();
    snap.docs.forEach(d=>{ const c=normalizeCreature(d.data()); if(c) remote.set(c.id, c); });
    // mantém itens locais ainda não enviados
    for(const [id,c] of state.creatures){ if(c._pending && !remote.has(id)) remote.set(id,c); }
    (state.pendingDel||[]).forEach(id=>remote.delete(id));
    state.creatures=remote; state.online=!snap.metadata.fromCache; state.loaded=true;
    setSync(state.online?"ok":"warn", state.online?"salvo na nuvem":"sincronizando…");
    lsSave(); if(!state.editing && !document.querySelector('.ov')) render(false);
  }, err=>{ clearTimeout(timer); setSync("err","erro na nuvem — salvo no aparelho"); state.loaded=true; render(); });
}
async function flushPending(snap){
  const remoteIds=new Set(snap.docs.map(d=>d.id));
  for(const c of [...state.creatures.values()]){
    if(c._pending){ try{ await state.col.doc(c.id).set(clean(c)); delete c._pending; }catch(e){} }
  }
  for(const id of [...(state.pendingDel||[])]){
    try{ if(remoteIds.has(id)) await state.col.doc(id).delete(); state.pendingDel=state.pendingDel.filter(x=>x!==id); }catch(e){}
  }
  lsSave();
}
async function saveCreature(c){
  c.atualizado=Date.now();
  state.creatures.set(c.id,c);
  if(state.col){
    try{ await state.col.doc(c.id).set(clean(c)); delete c._pending; }
    catch(e){ c._pending=true; if(e && e.code==="quota_exceeded") toast("Limite de armazenamento atingido."); else toast("Sem conexão: salvo no aparelho, envio depois."); }
  } else c._pending=true;
  lsSave();
}
async function deleteCreature(id){
  state.creatures.delete(id);
  if(state.col){ try{ await state.col.doc(id).delete(); }catch(e){ state.pendingDel.push(id); } }
  else state.pendingDel.push(id);
  lsSave();
}

/* ===================== UTIL UI ===================== */
const $main=document.getElementById("main");
function esc(t){ return (t==null?"":String(t)).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }
function toast(t){ const d=document.createElement("div"); d.className="toast"; d.textContent=t; document.body.appendChild(d); setTimeout(()=>d.remove(),2600); }
function sheet(html, opts={}){
  const ov=document.createElement("div"); ov.className="ov"+(opts.center?" c":"");
  ov.innerHTML='<div class="sheet'+(opts.center?" center":"")+'">'+html+'</div>';
  ov.addEventListener("click",e=>{ if(e.target===ov) ov.remove(); });
  document.body.appendChild(ov); return ov;
}
function confirmDlg(msg, okTxt="Confirmar", danger=false){
  return new Promise(res=>{
    const ov=sheet('<p style="margin:4px 0 16px">'+esc(msg)+'</p><div class="row"><button class="btn grow" data-a="n">Cancelar</button><button class="btn grow '+(danger?"danger":"pri")+'" data-a="y">'+esc(okTxt)+'</button></div>',{center:true});
    ov.querySelectorAll("button").forEach(b=>b.onclick=()=>{ ov.remove(); res(b.dataset.a==="y"); });
  });
}
const SEX_ICON={M:'<span class="sx m">♂</span>',F:'<span class="sx f">♀</span>'};
const ORIGEM_PT={domesticado:"Domesticado",criado:"Criado",selvagem:"Selvagem"};
const ESTADO_PT={vivo:"Vivo",guardado:"No cryopod",morto:"Morto",vendido:"Vendido/doado"};
function isActive(c){ return c.estado!=="morto" && c.estado!=="vendido"; }

/* melhores pontos por espécie (somente criaturas ativas) */
function topsFor(bp){
  const tops={};
  for(const c of state.creatures.values()){
    if(c.sp!==bp || !isActive(c)) continue;
    for(const [k,p] of Object.entries(c.pts||{})){
      const i=+k; const t=tops[i]||(tops[i]={w:-1,m:-1,wm:-1});
      t.w=Math.max(t.w,p[0]||0); t.m=Math.max(t.m,p[1]||0); t.wm=Math.max(t.wm,(p[0]||0)+(p[1]||0));
    }
  }
  return tops;
}

/* ===================== VIEWS ===================== */
function render(scroll=true){
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on", b.dataset.v===state.view));
  if(state.view!=="add") state.editing=null;
  ({lib:viewLib, add:viewAdd, best:viewBest, cria:viewCria, cfg:viewCfg})[state.view]();
  if(scroll) window.scrollTo(0,0);
}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{ if(b.dataset.v==="add") state.editing=newCreature(); state.view=b.dataset.v; render(); });

/* ---------- Biblioteca ---------- */
function viewLib(){
  const all=[...state.creatures.values()];
  if(!all.length){
    $main.innerHTML = state.loaded ? '<div class="empty"><b>Sua biblioteca está vazia</b>Toque em <b style="display:inline;color:var(--amber)">Adicionar</b> e registre os pontos de uma criatura (selvagem, mutação e jogador), do jeito que aparecem na tela do ASA.</div>'
      : '<div class="empty"><div class="spin" style="margin:0 auto 10px"></div>Carregando…</div>';
    return;
  }
  const spCounts={}; all.forEach(c=>spCounts[c.sp]=(spCounts[c.sp]||0)+1);
  const spList=Object.keys(spCounts).sort((a,b)=>spLabel(byBp[a]).localeCompare(spLabel(byBp[b])));
  let h='<input type="search" id="q" placeholder="Buscar por nome, espécie, nota…" value="'+esc(state.search)+'">';
  h+='<div class="chips"><span class="chip'+(!state.spFilter?" on":"")+'" data-sp="">Todas ('+all.length+')</span>'+spList.map(bp=>'<span class="chip'+(state.spFilter===bp?" on":"")+'" data-sp="'+esc(bp)+'">'+esc(spLabel(byBp[bp]))+' ('+spCounts[bp]+')</span>').join("")+'</div>';
  // ordenação
  const sortOpts=[[-1,"Mais recentes"],[-2,"Nome"],[-3,"Nível"]].concat(ORDER.filter(i=>i!==ST.TO).map(i=>[i,"Pontos em "+STAT_NAMES[i]]));
  h+='<div class="row"><div class="seg" id="libmode" style="flex:none">'+[["cards","Cartões"],["table","Tabela"]].map(([v,tx])=>'<button data-v="'+v+'" class="'+(libMode()===v?"on":"")+'">'+tx+'</button>').join("")+'</div><select id="sort" class="grow">'+sortOpts.map(([v,t])=>'<option value="'+v+'"'+(state.sortStat==v?" selected":"")+'>Ordenar: '+t+'</option>').join("")+'</select></div>';
  const q=norm(state.search);
  let list=all.filter(c=>(!state.spFilter||c.sp===state.spFilter) && (!q || norm([c.nome,spLabel(byBp[c.sp]),c.notas].join(" ")).includes(q)));
  const ss=+state.sortStat;
  list.sort((a,b)=>{
    if(ss===-2) return (a.nome||"").localeCompare(b.nome||"");
    if(ss===-3) return (b.nivel||0)-(a.nivel||0);
    if(ss>=0){ const pa=a.pts?.[ss]||[0,0], pb=b.pts?.[ss]||[0,0]; return ((pb[0]||0)+(pb[1]||0))-((pa[0]||0)+(pa[1]||0)); }
    return (b.atualizado||0)-(a.atualizado||0);
  });
  // agrupa por espécie
  const groups={}; list.forEach(c=>(groups[c.sp]=groups[c.sp]||[]).push(c));
  const gkeys=Object.keys(groups).sort((a,b)=>spLabel(byBp[a]).localeCompare(spLabel(byBp[b])));
  if(!list.length) h+='<div class="empty">Nada encontrado.</div>';
  for(const bp of gkeys){
    const tops=topsFor(bp);
    h+='<div class="grp"><span>'+esc(spLabel(byBp[bp]))+'</span><span class="muted">'+groups[bp].length+'</span></div>';
    if(libMode()==="table") h+=tableHtml(bp,groups[bp],tops); else for(const c of groups[bp]) h+=cardHtml(c,tops);
  }
  $main.innerHTML=h;
  const qi=document.getElementById("q");
  qi.oninput=()=>{ state.search=qi.value; const pos=qi.selectionStart; viewLib(); const n=document.getElementById("q"); n.focus(); n.setSelectionRange(pos,pos); };
  $main.querySelectorAll(".chip").forEach(ch=>ch.onclick=()=>{ state.spFilter=ch.dataset.sp; viewLib(); });
  document.getElementById("sort").onchange=e=>{ state.sortStat=+e.target.value; viewLib(); };
  $main.querySelectorAll(".ccard,table.lib tr[data-id]").forEach(el=>el.onclick=()=>detail(el.dataset.id));
  hydrateImages($main);
  document.querySelectorAll("#libmode button").forEach(b=>b.onclick=()=>{ try{ localStorage.setItem("arkbreeding.libmode",b.dataset.v); }catch(e){} state.libMode=b.dataset.v; viewLib(); });
}
function libMode(){ if(state.libMode) return state.libMode; try{ return localStorage.getItem("arkbreeding.libmode")||"cards"; }catch(e){ return "cards"; } }
function tableHtml(bp,list,tops){
  const s=byBp[bp]; if(!s) return "";
  const sts=statsOf(s).filter(x=>x.wild && x.i!==ST.TO);
  let h='<div class="tblwrap"><table class="lib"><tr><th>Nome</th><th>Nv</th>'+sts.map(x=>'<th>'+STAT_SHORT[x.i]+'</th>').join("")+(regionsOf(s).length?'<th>Cores</th>':'')+'</tr>';
  for(const c of list){
    h+='<tr data-id="'+esc(c.id)+'"><td>'+(SEX_ICON[c.sexo]||"")+' '+esc(c.nome||"(sem nome)")+(c.estado&&c.estado!=="vivo"?' <span class="tag'+(c.estado==="morto"?" dead":"")+'">'+esc(ESTADO_PT[c.estado])+'</span>':'')+'</td><td class="muted">'+esc(c.nivel||"?")+'</td>';
    for(const x of sts){ const p=c.pts?.[x.i]||[0,0,0]; const w=p[0]||0, m=p[1]||0, top=tops[x.i]?tops[x.i].w:0;
      const hue=top>0?Math.round(120*Math.min(1,w/top)):0; const isTop=isActive(c)&&w>0&&w===top;
      h+='<td class="lv'+(isTop?" top":"")+'" style="background:hsl('+hue+' 55% '+(w?24:15)+'%)">'+esc(w)+(m?'<small>+'+esc(m)+'</small>':'')+'</td>'; }
    if(regionsOf(s).length) h+='<td>'+(dotsHtml(c,s)||'<span class="muted">—</span>')+'</td>';
    h+='</tr>';
  }
  return h+'</table></div>';
}
function cardHtml(c,tops){
  const s=byBp[c.sp];
  const sts=s?statsOf(s).filter(x=>x.wild && x.i!==ST.TO):[];
  const bars=sts.map(x=>{
    const p=c.pts?.[x.i]||[0,0,0]; const w=p[0]||0, m=p[1]||0;
    const isTop = isActive(c) && tops[x.i] && w>0 && w===tops[x.i].w;
    return '<div class="bar'+(isTop?" top":"")+'"><div class="k">'+STAT_SHORT[x.i]+'</div><div class="v">'+esc(w)+(m?'<small>+'+esc(m)+'</small>':"")+'</div></div>';
  }).join("");
  const tags=[ORIGEM_PT[c.origem]||""]; if(c.estado && c.estado!=="vivo") tags.push(ESTADO_PT[c.estado]);
  if(c.mutM||c.mutP) tags.push("Mut "+(c.mutM||0)+"/"+(c.mutP||0)+(mutTotal(c)>=MUT_LIMIT?" ⚠":""));
  return '<div class="card ccard" data-id="'+esc(c.id)+'"><div class="chead">'+(hasImage(s)?'<div class="thumb"><img class="cimg" data-cimg="'+esc(c.id)+'" alt=""></div>':'')+'<div class="grow" style="min-width:0"><div class="ctop">'+(SEX_ICON[c.sexo]||"")+'<span class="cname">'+esc(c.nome||"(sem nome)")+'</span><span class="lvl">Nv '+esc(c.nivel||"?")+'</span></div><div class="row wrap" style="gap:6px;margin-top:4px">'+tags.filter(Boolean).map(t=>'<span class="tag'+(c.estado==="morto"&&t===ESTADO_PT.morto?" dead":"")+'">'+esc(t)+'</span>').join("")+dotsHtml(c,s)+'</div></div></div><div class="bars">'+bars+'</div></div>';
}
function detail(id){
  const c=state.creatures.get(id); if(!c) return; const s=byBp[c.sp];
  const sts=s?statsOf(s):[];
  let rows='<div class="h">Status</div><div class="h" style="color:var(--teal)">Selv.</div><div class="h" style="color:var(--purple)">Mut.</div><div class="h" style="color:var(--amber)">Jog.</div><div class="h" style="text-align:right">Valor</div>';
  for(const x of sts){ const p=c.pts?.[x.i]||[0,0,0];
    rows+='<div>'+STAT_NAMES[x.i]+'</div><div class="n">'+(x.wild?p[0]||0:"·")+'</div><div class="n">'+(x.mut?p[1]||0:"·")+'</div><div class="n">'+(x.dom?p[2]||0:"·")+'</div><div class="n">'+fmtStat(x.i,s?statValue(s,x.i,p[0],p[1],p[2],c.origem,c.te!=null?c.te/100:null,(c.ib||0)/100):null)+'</div>'; }
  const par=k=>{ const p=c[k]&&state.creatures.get(c[k]); return p?esc(p.nome||"(sem nome)"):"—"; };
  const kids=[...state.creatures.values()].filter(k=>k.mae===c.id||k.pai===c.id);
  const html=(hasImage(s)?'<div class="hero"><img class="cimg" data-cimg="'+esc(c.id)+'" alt=""></div>':'')+'<div class="row"><div class="grow"><div class="muted" style="font-size:12px">'+esc(spLabel(s))+'</div><h2 style="margin:2px 0">'+(SEX_ICON[c.sexo]||"")+' '+esc(c.nome||"(sem nome)")+'</h2></div><div class="big">'+esc(c.nivel||"?")+'</div></div>'+
    '<div class="row wrap" style="margin:6px 0 12px">'+[ORIGEM_PT[c.origem], ESTADO_PT[c.estado||"vivo"], c.origem!=="selvagem"&&c.ib?"Impressão "+c.ib+"%":null, c.origem==="domesticado"&&c.te!=null?"TE "+c.te+"%":null, (c.mutM||c.mutP)?"Mutações "+(c.mutM||0)+"/"+(c.mutP||0):null].filter(Boolean).map(t=>'<span class="tag">'+esc(t)+'</span>').join("")+'</div>'+
    '<div class="kv">'+rows+'</div>'+
    '<p class="note">Valor calculado com os multiplicadores oficiais. Compare com o valor do jogo para conferir se os pontos foram digitados certo.</p>'+
    '<div class="row" style="margin-top:8px;font-size:14px"><div class="grow"><span class="muted">Mãe:</span> '+par("mae")+'</div><div class="grow"><span class="muted">Pai:</span> '+par("pai")+'</div></div>'+
    (kids.length?'<div style="margin-top:6px;font-size:14px"><span class="muted">Filhotes:</span> '+kids.map(k=>esc(k.nome||"(sem nome)")).join(", ")+'</div>':"")+
    (regionsOf(s).length && c.cores && c.cores.some(x=>x) ? '<div class="card" style="padding:10px 12px"><div class="muted" style="font-size:12px;margin-bottom:6px">Cores</div>'+regionsOf(s).map(r=>{ const hx=colorHex(c.cores[r]); return '<div class="row" style="margin:5px 0;font-size:14px"><i class="cdot'+(hx?"":" none")+'" style="width:18px;height:18px;'+(hx?"background:"+hx:"")+'"></i><span class="grow">'+r+' · '+esc(regionName(s,r))+'</span><span class="muted">'+esc(c.cores[r]||"—")+' · '+esc(colorName(c.cores[r]))+'</span></div>'; }).join("")+'</div>' : "")+
    (c.notas?'<div class="card" style="font-size:14px;white-space:pre-wrap">'+esc(c.notas)+'</div>':"")+
    '<div class="row" style="margin-top:16px"><button class="btn danger" data-a="del">Excluir</button><button class="btn grow" data-a="dup">Duplicar</button><button class="btn pri grow" data-a="edit">Editar</button></div>';
  const ov=sheet(html); hydrateImages(ov);
  ov.querySelector('[data-a=edit]').onclick=()=>{ ov.remove(); state.view="add"; state.editing=JSON.parse(JSON.stringify(c)); render(); };
  ov.querySelector('[data-a=dup]').onclick=()=>{ ov.remove(); const d=JSON.parse(JSON.stringify(c)); d.id=uid(); d.nome=(c.nome||"")+" (cópia)"; d.criado=Date.now(); delete d._pending; state.view="add"; state.editing=d; render(); };
  ov.querySelector('[data-a=del]').onclick=async()=>{ if(await confirmDlg("Excluir "+(c.nome||"esta criatura")+" da biblioteca?","Excluir",true)){ ov.remove(); await deleteCreature(c.id); toast("Excluída."); render(); } };
}

/* ---------- Adicionar / editar ---------- */
function newCreature(){ return {id:uid(), sp:state.lastSp||"", nome:"", sexo:"", origem:"domesticado", nivel:null, te:null, ib:null, pts:{}, mae:"", pai:"", mutM:null, mutP:null, estado:"vivo", notas:"", cores:[0,0,0,0,0,0], criado:Date.now()}; }
function viewAdd(){
  const c=state.editing||(state.editing=newCreature());
  const s=byBp[c.sp];
  const isEdit=state.creatures.has(c.id);
  let h='<h2 style="margin:6px 2px 4px">'+(isEdit?"Editar criatura":"Nova criatura")+'</h2>';
  // foto
  h+='<div id="photoWrap"><div class="photo" id="photoBox" style="display:none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg><div class="grow"><b>Ler da tela do jogo</b><div class="note" style="margin:2px 0 0"><b>Câmera</b>: fotografe a TV com o painel de status aberto (de frente, sem reflexo, a tela ocupando a foto). <b>Galeria</b>: um print ou foto já tirada. Funciona com o inventário e com o card do cryopod.</div></div><div style="display:flex;flex-direction:column;gap:6px;flex:none"><span class="btn filebtn pri" style="padding:9px 14px">Câmera<input id="photoCam" type="file" accept="image/*" capture="environment"></span><span class="btn filebtn" style="padding:9px 14px">Galeria<input id="photoIn" type="file" accept="image/*"></span></div></div></div>';
  // espécie
  h+='<label class="f">Espécie</label><div id="spBox"></div>';
  if(s){
    h+='<label class="f">Nome</label><input type="text" id="nome" value="'+esc(c.nome)+'" placeholder="Ex.: Rex Vida 1">';
    h+='<div class="row" style="gap:10px"><div class="grow"><label class="f">Sexo</label><div class="seg" id="sexo">'+[["M","♂ Macho"],["F","♀ Fêmea"],["","—"]].map(([v,t])=>'<button data-v="'+v+'" class="'+(c.sexo===v?"on":"")+'">'+t+'</button>').join("")+'</div></div></div><div class="row" style="gap:10px;margin-top:8px"><div style="width:120px"><label class="f">Nível</label><input type="number" inputmode="numeric" id="nivel" value="'+(c.nivel??"")+'"></div>'+'</div>';
    h+='<label class="f">Origem</label><div class="seg" id="origem">'+[["domesticado","Domesticado"],["criado","Criado"],["selvagem","Selvagem"]].map(([v,t])=>'<button data-v="'+v+'" class="'+(c.origem===v?"on":"")+'">'+t+'</button>').join("")+'</div>';
    const modo=curMode(c);
    h+='<label class="f">Como informar</label><div class="seg" id="modo">'+[["valores","Pelos valores da tela"],["pontos","Já sei os pontos"]].map(([v,t])=>'<button data-v="'+v+'" class="'+(modo===v?"on":"")+'">'+t+'</button>').join("")+'</div>';
    if(c.origem==="domesticado") h+='<label class="f">Eficiência de domesticação (TE %) — '+(modo==="valores"?'opcional. <b>Se não souber, deixe em branco</b>: o app calcula sozinho (não use a faixa "80–100" do Smart Breeding)':'opcional, só afeta o valor do dano')+'</label><input type="text" inputmode="decimal" id="te" value="'+(c.te??"")+'" placeholder="em branco = o app calcula">';
    if(c.origem==="criado") h+='<label class="f">Impressão (%)</label><input type="text" inputmode="decimal" id="ib" value="'+(c.ib??"")+'" placeholder="0 a 100">';
    if(c.origem==="domesticado") h+='<label class="f">Impressão (%) — só se aparecer na tela (ex.: habilidade do Lost Colony)</label><input type="text" inputmode="decimal" id="ib" value="'+(c.ib??"")+'" placeholder="0">';
    if(modo==="valores"){
      h+='<label class="f">Valores da tela</label><p class="note" style="margin-top:0">Digite o <b>valor máximo</b> de cada status e veja os pontos na hora (o número da direita em “850,0 / 1.100,0”). Dano e Velocidade em %, como aparecem no jogo.</p>';
      h+='<div class="vgrid"><div></div><div class="h">Valor</div><div class="h">Pontos</div>';
      for(const x of inputStats(s)) h+='<div class="nm">'+STAT_NAMES[x.i]+'</div><div class="vin"><input type="text" inputmode="decimal" data-v="'+x.i+'" value="'+esc(c.vals?.[x.i]??"")+'" placeholder="'+(PERCENT.has(x.i)?"100,0":"0,0")+'">'+(PERCENT.has(x.i)?'<span>%</span>':'')+'</div><div class="res" id="res'+x.i+'"></div>';
      h+='</div><button class="btn pri" id="exBtn" style="width:100%;margin-top:12px">Descobrir pontos</button><div id="exMsg"></div>';
    } else {
      h+='<label class="f">Pontos por status</label><div class="stgrid"><div></div><div class="h s">Selvagem</div><div class="h m">Mutação</div><div class="h j">Jogador</div>';
      for(const x of inputStats(s)){
        const p=c.pts[x.i]||[];
        h+='<div class="nm">'+STAT_NAMES[x.i]+'<small id="val'+x.i+'"></small></div>'+
          cell(x.wild,"s",x.i,0,p[0])+cell(x.mut&&c.origem!=="selvagem","m",x.i,1,p[1])+cell(x.dom&&c.origem!=="selvagem","j",x.i,2,p[2]);
      }
      h+='</div><p class="note">O valor embaixo de cada nome é o que o app calcula com os seus pontos. Se não bater com o jogo, algum número foi digitado errado.</p>';
    }
    if(c.origem!=="selvagem"){
      const same=[...state.creatures.values()].filter(o=>o.sp===c.sp && o.id!==c.id);
      const opt=(sel,sx)=>'<option value="">—</option>'+same.filter(o=>!sx||!o.sexo||o.sexo===sx).map(o=>'<option value="'+esc(o.id)+'"'+(sel===o.id?" selected":"")+'>'+esc((o.nome||"(sem nome)")+" · Nv "+esc(o.nivel||"?"))+'</option>').join("");
      h+='<div class="row" style="gap:10px"><div class="grow"><label class="f">Mãe</label><select id="mae">'+opt(c.mae,"F")+'</select></div><div class="grow"><label class="f">Pai</label><select id="pai">'+opt(c.pai,"M")+'</select></div></div>';
      h+='<div class="row" style="gap:10px"><div class="grow"><label class="f">Contador de mutações (lado materno)</label><input type="number" inputmode="numeric" id="mutM" value="'+(c.mutM??"")+'"></div><div class="grow"><label class="f">Contador de mutações (lado paterno)</label><input type="number" inputmode="numeric" id="mutP" value="'+(c.mutP??"")+'"></div></div>';
    }
    const regs=regionsOf(s);
    if(regs.length){
      c.cores=c.cores||[0,0,0,0,0,0];
      h+='<label class="f">Cores por região</label>'+(hasImage(s)?'<div class="prev"><img class="cimg" id="prevImg" data-cimg="__edit" alt=""></div>':'')+'<p class="note">Toque no quadrado para escolher a cor ou digite o número (ID) da cor.</p><div class="cgrid">';
      for(const r of regs){ const hx=colorHex(c.cores[r]);
        h+='<button type="button" class="cswatch'+(hx?"":" none")+'" data-r="'+r+'" style="'+(hx?"background:"+hx:"")+'"></button><div class="rn">'+r+' · '+esc(regionName(s,r))+'<small id="cn'+r+'">'+esc(colorName(c.cores[r]))+'</small></div><input type="text" inputmode="numeric" data-r="'+r+'" value="'+esc(c.cores[r]||"")+'" placeholder="ID">';
      }
      h+='</div>';
    }
    h+='<label class="f">Situação</label><select id="estado">'+Object.entries(ESTADO_PT).map(([v,t])=>'<option value="'+v+'"'+((c.estado||"vivo")===v?" selected":"")+'>'+t+'</option>').join("")+'</select>';
    h+='<label class="f">Observações</label><textarea id="notas" rows="2" placeholder="Cores, servidor, local…">'+esc(c.notas)+'</textarea>';
    h+='<div class="sticky-save"><button class="btn" id="cancel">Cancelar</button><button class="btn pri" id="save">'+(isEdit?"Salvar alterações":"Salvar na biblioteca")+'</button></div>';
  }
  $main.innerHTML=h;
  renderSpBox();
  setupPhoto();
  if(!s) return;
  const bind=(id,key,fn=v=>v)=>{ const el=document.getElementById(id); if(el) el.oninput=()=>{ c[key]=fn(el.value); if(key==="te"||key==="ib") updateVals(); if(key==="te"||key==="nivel"||key==="ib") exInvalidate(); }; };
  bind("nome","nome"); bind("nivel","nivel",numOrNull); bind("te","te",numOrNull); bind("ib","ib",numOrNull);
  bind("mutM","mutM",numOrNull); bind("mutP","mutP",numOrNull); bind("notas","notas");
  ["mae","pai","estado"].forEach(k=>{ const el=document.getElementById(k); if(el) el.onchange=()=>c[k]=el.value; });
  document.querySelectorAll(".cgrid input").forEach(el=>el.oninput=()=>{ const r=+el.dataset.r; const v=parseInt(el.value); c.cores[r]=isNaN(v)?0:v; paintSlot(r); });
  document.querySelectorAll(".cswatch").forEach(b=>b.onclick=()=>pickColor(+b.dataset.r));
  hydrateImages($main);
  let _pv=0; function refreshPreview(){ const el=document.getElementById("prevImg"); if(!el) return; const my=++_pv; creatureImage(s,c.cores).then(u=>{ if(u&&my===_pv){ el.src=u; el.classList.add("on"); } }).catch(()=>{}); }
  function paintSlot(r){ refreshPreview(); const b=document.querySelector('.cswatch[data-r="'+r+'"]'); const hx=colorHex(c.cores[r]); b.className="cswatch"+(hx?"":" none"); b.style.background=hx||""; document.getElementById("cn"+r).textContent=colorName(c.cores[r]); const inp=document.querySelector('.cgrid input[data-r="'+r+'"]'); if(document.activeElement!==inp) inp.value=c.cores[r]||""; }
  function pickColor(r){
    const ov=sheet('<div class="row"><b class="grow">Região '+r+' · '+esc(regionName(s,r))+'</b><button class="btn ghost" data-x>Fechar</button></div><input type="search" id="cq" placeholder="Buscar por nome ou número" style="margin-top:10px"><div class="pick" id="pk"></div>');
    const draw=()=>{ const q=norm(ov.querySelector("#cq").value);
      const list=[[0,"Sem cor",null]].concat(COLORS).filter(x=>!q||String(x[0])===q||norm(x[1]).includes(q));
      ov.querySelector("#pk").innerHTML=list.map(x=>'<button data-id="'+x[0]+'"><i style="'+(x[2]?"background:"+x[2]:"background:repeating-linear-gradient(45deg,#2a363d,#2a363d 4px,#1b2429 4px,#1b2429 8px)")+'"></i><b>'+(x[0]||"—")+'</b><br>'+esc(x[1])+'</button>').join("");
      ov.querySelectorAll("#pk button").forEach(b=>b.onclick=()=>{ c.cores[r]=+b.dataset.id; paintSlot(r); ov.remove(); }); };
    ov.querySelector("#cq").oninput=draw; ov.querySelector("[data-x]").onclick=()=>ov.remove(); draw();
  }
  document.querySelectorAll("#sexo button").forEach(b=>b.onclick=()=>{ c.sexo=b.dataset.v; document.querySelectorAll("#sexo button").forEach(x=>x.classList.toggle("on",x===b)); });
  document.querySelectorAll("#origem button").forEach(b=>b.onclick=()=>{ c.origem=b.dataset.v; state.ex=null; viewAdd(); });
  document.querySelectorAll("#modo button").forEach(b=>b.onclick=()=>{ c.modo=b.dataset.v; state.ex=null; viewAdd(); });
  if(curMode(c)==="valores") setupValues(c,s);
  const inputs=[...document.querySelectorAll(".stgrid input")];
  inputs.forEach((el,ix)=>{
    el.oninput=()=>{ el.classList.remove("miss"); const i=+el.dataset.i, k=+el.dataset.k; const p=c.pts[i]||(c.pts[i]=[0,0,0]); p[k]=Math.max(0,parseInt(el.value)||0); updateVals(); };
    el.onfocus=()=>el.select();
    el.onkeydown=e=>{ if(e.key==="Enter"){ e.preventDefault(); const n=inputs[ix+1]; if(n) n.focus(); else el.blur(); } };
  });
  updateVals();
  document.getElementById("cancel").onclick=()=>{ state.editing=null; state.view="lib"; render(); };
  document.getElementById("save").onclick=async()=>{
    if(curMode(c)==="valores" && !state.ex){ const qp=quickReady(c,s); if(qp){ c.pts=qp; if(!c.nivel){ c.nivel=1+Object.entries(qp).filter(([i])=>+i!==ST.TO).reduce((a,[,p])=>a+p[0],0); } } }
    if(curMode(c)==="valores" && !exResolved() && !(!state.ex && quickReady(c,s))){ toast(state.ex?"Escolha as opções em amarelo antes de salvar.":"Toque em “Descobrir pontos” antes de salvar."); document.getElementById("exBtn")?.scrollIntoView({behavior:"smooth",block:"center"}); return; }
    // limpa pontos que não se aplicam
    const allowed={}; statsOf(s).forEach(x=>allowed[x.i]=x);
    for(const k of Object.keys(c.pts)){ const x=allowed[k]; if(!x){ delete c.pts[k]; continue; } const p=c.pts[k]; if(!x.wild)p[0]=0; if(!x.mut||c.origem==="selvagem")p[1]=0; if(!x.dom||c.origem==="selvagem")p[2]=0; }
    if(c.origem==="selvagem"){ c.mae=c.pai=""; c.te=null; c.ib=null; }
    if(c.origem!=="domesticado") c.te=null;
    const btn=document.getElementById("save"); btn.disabled=true; btn.textContent="Salvando…";
    state.lastSp=c.sp;
    await saveCreature(c); toast("Salvo: "+(c.nome||spLabel(s)));
    state.spFilter=""; state.editing=null; state.view="lib"; render();
  };
  function updateVals(){
    for(const x of statsOf(s)){ const p=c.pts[x.i]||[0,0,0]; const el=document.getElementById("val"+x.i); if(!el) continue;
      if(el) el.textContent=fmtStat(x.i, statValue(s,x.i,p[0],p[1],p[2],c.origem,c.te!=null?c.te/100:null,(c.ib||0)/100)); }
  }
}

function curMode(c){ if(c.modo) return c.modo; return (state.creatures.has(c.id) && !c.vals) ? "pontos" : "valores"; }
function exInvalidate(){ state.ex=null; renderEx(); autoExtract(); }
let _autoT=null;
function autoExtract(){
  clearTimeout(_autoT);
  _autoT=setTimeout(()=>{ const c=state.editing; if(!c||state.ex||curMode(c)!=="valores") return; const s=byBp[c.sp]; if(!s) return;
    if(c.origem!=="selvagem" && !c.nivel) return;
    const falta=inputStats(s).some(x=>(x.wild||x.dom||x.i===ST.TO) && !parseVal((c.vals||{})[x.i], PERCENT.has(x.i)));
    if(falta || !document.getElementById("exMsg")) return;
    runExtract(true);
  }, 600);
}
function exResolved(){ const ex=state.ex; if(!ex||ex.err) return false; return currentSols().length===1 || allUnique(); }
function currentSols(){ const ex=state.ex; if(!ex||!ex.solutions) return []; return ex.solutions.filter(so=>Object.entries(ex.picks).every(([i,k])=>{ const p=so.pts[i]; return p && (p[0]+"|"+p[2])===k; })); }
function allUnique(){ const o=optionsByStat(currentSols()); return Object.values(o).every(m=>m.size===1); }
function quickAll(c,s){
  const out={}; const te=c.origem==="domesticado"&&c.te!=null?c.te/100:null; const ib=c.origem!=="selvagem"?(c.ib||0)/100:0;
  for(const x of inputStats(s)){ const str=c.vals?.[x.i]; if(str==null||String(str).trim()===""){ out[x.i]="vazio"; continue; }
    out[x.i]= x.wild||x.i===ST.TO ? quickPoints(s,x.i,c.origem,str,te,ib) : {w:0,exact:true}; }
  return out;
}
function quickReady(c,s){
  const q=quickAll(c,s); const pts={};
  for(const x of inputStats(s)){ const r=q[x.i]; if(!r||r==="vazio"||r.needTE||!r.exact) return null; pts[x.i]=[x.wild||x.i===ST.TO?r.w:0,0,0]; }
  return pts;
}
function setupValues(c,s){
  c.vals=c.vals||{};
  const ins=[...document.querySelectorAll(".vgrid input")];
  ins.forEach((el,ix)=>{
    el.oninput=()=>{ c.vals[el.dataset.v]=el.value; el.classList.remove("miss"); el.classList.remove("unsure"); exInvalidate(); };
    el.onkeydown=e=>{ if(e.key==="Enter"){ e.preventDefault(); const n=ins[ix+1]; if(n) n.focus(); else { el.blur(); runExtract(); } } };
  });
  document.getElementById("exBtn").onclick=()=>runExtract(false);
  renderEx(); autoExtract();
}
function runExtract(auto){
  const c=state.editing, s=byBp[c.sp];
  const teHint = c.origem==="domesticado" ? c.te : null;
  // o nível mostrado no jogo não inclui os "pontos disponíveis" ainda não distribuídos (confirmado com um Baryonyx nível 217 com 41 pontos livres)
  let r=extractLevels(s,c.origem,c.nivel,c.vals||{},teHint,c.ib), teIgnorada=false;
  if(r.err && teHint!=null){ const r2=extractLevels(s,c.origem,c.nivel,c.vals||{},null,c.ib); if(!r2.err){ r=r2; teIgnorada=true; } }
  state.ex = r.err ? {err:r.err, bad:r.bad||[]} : {solutions:r.solutions, picks:{}, relaxed:r.relaxed, userTE:teHint!=null && !teIgnorada, teIgnorada: teIgnorada?teHint:null};
  renderEx();
  if(!r.err && !exResolved() && !auto) toast("Alguns status têm mais de uma possibilidade. Toque nos amarelos para escolher.");
  if(teIgnorada){ const m=document.getElementById("exMsg"); if(m){ const d=document.createElement("div"); d.className="msg warn"; d.textContent="A TE informada ("+String(teHint).replace(".",",")+"%) não bate com os valores. O cálculo foi feito sem ela; a TE calculada aparece acima. Se quiser, apague o campo TE."; m.appendChild(d); } }
}
function renderEx(){
  const c=state.editing, s=byBp[c.sp]; if(!s) return;
  const ex=state.ex; const msg=document.getElementById("exMsg"); if(!msg) return;
  document.querySelectorAll(".opts").forEach(e=>e.remove());
  const sts=inputStats(s);
  if(!ex){
    const q=quickAll(c,s); let warn=false, needTE=false;
    sts.forEach(x=>{ const el=document.getElementById("res"+x.i); const r=q[x.i];
      if(!x.wild && x.i!==ST.TO){ el.className="res"; el.innerHTML=r&&r!=="vazio"?"0":"—"; return; }
      if(!r||r==="vazio"){ el.className="res"; el.innerHTML="—"; return; }
      if(r.needTE){ needTE=true; el.className="res"; el.innerHTML='<small style="font-size:11px">informe TE</small>'; return; }
      if(r.exact){ el.className="res q"; el.innerHTML='<span class="s">'+r.w+'</span><small style="font-size:11px;color:var(--mut)">pts</small>'; }
      else { warn=true; el.className="res bad"; el.innerHTML='≈ '+r.w+'?'; }
    });
    const any=Object.values(q).some(r=>r&&r!=="vazio");
    msg.innerHTML = !any ? "" :
      '<div class="msg '+(warn?"warn":"ok")+'">Pontos de cada status calculados <b>supondo 0 pontos do jogador</b>'+(c.origem==="criado"?' (numa cria, o número inclui as mutações)':'')+'.'+
      (warn?' Os marcados em vermelho não batem exatamente: confira o valor ou, se você subiu níveis nesse status, toque em “Descobrir pontos”.':' Se você já subiu níveis nessa criatura, toque em “Descobrir pontos” para separar selvagem e jogador.')+
      (needTE?' Para o Dano de um domesticado, informe a TE.':'')+'</div>';
    return;
  }
  if(ex.err){
    sts.forEach(x=>{ const el=document.getElementById("res"+x.i); const b=ex.bad.includes(x.i); el.className="res"+(b?" bad":""); el.innerHTML=b?"confira":"—"; });
    msg.innerHTML='<div class="msg err">'+esc(ex.err)+'</div>'; return;
  }
  const sols=currentSols(); const opts=optionsByStat(sols);
  const tamed=c.origem==="domesticado";
  const fmt=(k,i)=>{ const [w,d]=k.split("|"); const x=sts.find(z=>z.i==i); return '<span class="s">S '+w+'</span>'+(tamed&&x&&x.dom?'<span class="j">J '+d+'</span>':''); };
  let pending=0;
  for(const x of sts){
    const el=document.getElementById("res"+x.i); const m=opts[x.i];
    if(!m){ el.className="res"; el.innerHTML="—"; continue; }
    const keys=[...m.keys()];
    if(keys.length===1){ el.className="res ok"; el.innerHTML=fmt(keys[0],x.i); el.onclick=null; }
    else {
      pending++; el.className="res amb"; el.innerHTML=keys.length+" opções";
      const box=document.createElement("div"); box.className="opts";
      keys.sort((a,b)=>(+a.split("|")[1])-(+b.split("|")[1]));
      box.innerHTML=keys.map(k=>'<button class="opt" data-k="'+k+'">'+fmt(k,x.i)+'</button>').join("");
      box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ ex.picks[x.i]=b.dataset.k; renderEx(); });
      el.after(box);
    }
  }
  // aplica pontos quando tudo resolvido
  let html="";
  if(!pending){
    const so=sols[0]; c.pts=JSON.parse(JSON.stringify(so.pts));
    if(c.origem==="selvagem") c.nivel = c.nivel || so.LwT+1;
    let teTxt="";
    if(tamed){
      const lo=Math.min(...sols.map(z=>z.te?z.te[0]:1)), hi=Math.max(...sols.map(z=>z.te?z.te[1]:0));
      if(lo<=hi){ teTxt=' TE calculada: '+(lo*100).toLocaleString("pt-BR",{maximumFractionDigits:1})+(hi-lo>0.002?'–'+(hi*100).toLocaleString("pt-BR",{maximumFractionDigits:1}):'')+'%.'; if(c.te==null) c.te=Math.round((lo+hi)*500)/10; }
    }
    html='<div class="msg ok"><b>Pronto!</b> '+so.LwT+' pontos selvagens'+(tamed?' e '+so.LdT+' do jogador':'')+'.'+teTxt+' Confira e salve.</div>';
  } else {
    html='<div class="msg warn">Há '+pending+' status com mais de uma combinação possível (os números da tela batem com todas). Toque na opção certa. Dica: se você nunca subiu aquele status, escolha a opção com <b>J 0</b>.'+(tamed&&!ex.userTE?' Informar a <b>TE</b> costuma eliminar as dúvidas.':'')+'</div>';
  }
  if(ex.relaxed && !pending){ const so=sols[0]; const vis=Object.entries(so.pts).reduce((a,[i,p])=>a+(+i===ST.TO?0:p[0]),0); const sobra=so.LwT-vis;
    if(sobra>0) html+='<div class="msg warn"><b>'+sobra+' ponto'+(sobra>1?"s":"")+' selvage'+(sobra>1?"ns":"m")+'</b> não aparece'+(sobra>1?"m":"")+' em nenhum status visível (o Torpor indica '+so.LwT+', os status somam '+vis+'). Normalmente '+(sobra>1?"ficam":"fica")+' na Velocidade, que não muda o valor nessa espécie. Os pontos mostrados acima estão certos.</div>'; }
  msg.innerHTML=html;
}
function numOrNull(v){ if(v===""||v==null) return null; const n=parseFloat(String(v).replace(",",".")); return isNaN(n)?null:n; }
function cell(on,cls,i,k,v){ return on ? '<input class="'+cls+'" type="number" inputmode="numeric" min="0" data-i="'+i+'" data-k="'+k+'" value="'+(v?v:"")+'" placeholder="0">' : '<div class="na">·</div>'; }

function renderSpBox(){
  const c=state.editing; const box=document.getElementById("spBox"); const s=byBp[c.sp];
  if(s){
    box.innerHTML='<div class="picked"><div class="grow"><b>'+esc(spLabel(s))+'</b>'+(s.br?'':'<div class="note" style="margin:0">Esta espécie não procria.</div>')+'</div><button class="btn ghost" id="chSp">Trocar</button></div>';
    document.getElementById("chSp").onclick=()=>{ c.sp=""; viewAdd(); setTimeout(()=>document.getElementById("spq")?.focus(),50); };
    return;
  }
  box.innerHTML='<input type="search" id="spq" placeholder="Digite: rex, raptor, argentavis…" autocomplete="off"><div id="spres"></div>';
  const q=document.getElementById("spq"), res=document.getElementById("spres");
  const recent=[...new Set([...state.creatures.values()].sort((a,b)=>(b.atualizado||0)-(a.atualizado||0)).map(x=>x.sp))].slice(0,8).map(bp=>byBp[bp]).filter(Boolean);
  const show=()=>{
    const t=norm(q.value);
    let list = t ? SPECIES.filter(sp=>norm(spLabel(sp)).includes(t)).sort((a,b)=>{ const sa=norm(a.n).startsWith(t)?0:1, sb=norm(b.n).startsWith(t)?0:1; return sa-sb||a.n.localeCompare(b.n); }).slice(0,40) : recent;
    res.innerHTML = list.length ? '<div class="sp-res">'+(t?"":'<div class="muted" style="cursor:default;font-size:12px">Usadas recentemente</div>')+list.map(sp=>'<div data-bp="'+esc(sp.bp)+'">'+esc(spLabel(sp))+(sp.br?"":' <small>· não procria</small>')+'</div>').join("")+'</div>' : (t?'<div class="note">Nenhuma espécie encontrada.</div>':"");
    res.querySelectorAll("[data-bp]").forEach(d=>d.onclick=()=>{ c.sp=d.dataset.bp; c.pts={}; viewAdd(); });
  };
  q.oninput=show; show();
}

/* ---------- Leitura por foto (Claude) ---------- */
async function setupPhoto(){
  const box=document.getElementById("photoBox"); if(!box) return;
  box.style.display="flex";
  let sample=null, motivo="";
  try{ sample=await window.claude?.use?.("sample"); if(!window.claude) motivo="sem_runtime"; else if(!sample) motivo="sem_capacidade"; }catch(e){ motivo="erro_inicial: "+(e&&e.message||e); }
  if(sample){ try{ const lim=await sample.limits?.(); if(lim && !lim.images){ motivo="sem_imagens"; sample=null; } }catch(e){} }
  if(!document.body.contains(box)) return;
  const explica=(codigo,detalhe)=>{
    const ov=sheet('<h3 style="margin:0 0 8px">Leitura por foto indisponível</h3><p style="margin:0 0 8px;font-size:14px">'+
      ({sem_runtime:"Esta página foi aberta fora do Claude, então não consegue pedir ao Claude para ler a imagem.",
        sem_capacidade:"Nesta forma de abrir a página, o Claude não liberou a leitura de imagens.",
        sem_imagens:"Nesta conta ou visualização, o envio de imagens para o Claude não está liberado."}[codigo]||"O pedido ao Claude falhou.")+
      '</p><p class="note">Tente abrir o link pelo app do Claude, ou pelo claude.ai no navegador com a conta conectada. Enquanto isso, digite os valores.</p>'+
      '<p class="note" style="font-family:monospace;word-break:break-all">Código para o suporte: '+esc(codigo+(detalhe?" · "+detalhe:""))+'</p><button class="btn" style="width:100%;margin-top:8px">Fechar</button>',{center:true});
    ov.querySelector("button").onclick=()=>ov.remove();
  };
  const handlePhoto=async f=>{
    if(!f) return;
    if(IS_APK){
      const ov=sheet('<div class="row"><div class="spin"></div><div id="ocrStep">Preparando a imagem…</div></div>',{center:true});
      const step=t=>{ const el=document.getElementById("ocrStep"); if(el) el.textContent=t; };
      let etapa="preparar a imagem";
      try{
        const fn=ocrNative(); if(!fn) throw {code:"sem_ocr", message:"o leitor de texto do APK não foi encontrado (Capacitor: "+Object.keys(window.Capacitor||{}).join(",")+")"};
        const blob=await shrink(f); etapa="converter a imagem";
        const b64=await blobToBase64(blob);
        etapa="ler o texto (ML Kit)"; step("Lendo o texto da imagem…");
        const res=await fn({base64:b64}); state.lastOcr=res;
        etapa="interpretar o texto";
        let o=parseOcr(res);
        if(ocrNeedsMore(o)){
          etapa="ler de novo com a imagem realçada"; step("Lendo de novo com a imagem realçada…");
          try{ const b2=await enhanceForOcr(f); const res2=await fn({base64:await blobToBase64(b2)}); state.lastOcr2=res2; o=mergeOcr(o, parseOcr(res2)); }catch(e2){ /* a 1ª leitura continua valendo */ }
          etapa="interpretar o texto";
        }
        const c=state.editing;
        let s=byBp[c.sp];
        if(!s && o.especie){ const t0=norm(o.especie); s=SPECIES.find(x=>norm(x.n)===t0 && !x.v.length)||SPECIES.find(x=>norm(x.n)===t0); }
        if(o._modo==="inventario"){
          const org=o.criado?"criado":(c.origem||"domesticado"); const ibv=o.impressao!=null?o.impressao:c.ib;
          ocrPick(o, s, org, ibv, o.nivel||c.nivel||null);
        }
        if(o._modo==="cryopod" && s){
          const origem=((o.mutM||0)+(o.mutP||0))>0 ? "criado" : (c.origem||"domesticado");
          assignCryopod(o, s, origem, o.impressao!=null?o.impressao:c.ib);
        }
        const nums=o._nums||[]; delete o._nums; delete o._ordem;
        ov.remove();
        const nLin=(res&&res.lines||[]).length, nVal=Object.keys(o.valores).length;
        if(nVal||o.especie||o.nivel){ c.modo="valores"; applyPhoto(o); }
        // janela de resultado (não some sozinha)
        const lin=[];
        lin.push("<b>Linhas de texto lidas:</b> "+nLin);
        lin.push("<b>Tipo de tela:</b> "+(o._modo==="inventario"?"inventário (com nomes)":o._modo==="cryopod"?"card do cryopod (ícones)":"não identificado"));
        lin.push("<b>Espécie:</b> "+(o.especie?esc(o.especie):(byBp[c.sp]?esc(spLabel(byBp[c.sp]))+" (já escolhida)":'<span style="color:var(--red)">não reconhecida — escolha no campo Espécie</span>')));
        lin.push("<b>Nível:</b> "+(o.nivel||'<span style="color:var(--red)">não lido — digite</span>')+(o.impressao!=null?" · <b>Impressão:</b> "+o.impressao+"%":"")+((o.mutM||o.mutP)?" · <b>Mutações:</b> "+(o.mutM||0)+"/"+(o.mutP||0):""));
        const vk=Object.entries(o.valores).map(([k,v])=>k+" "+esc(v));
        lin.push("<b>Valores ("+nVal+"):</b> "+(vk.length?vk.join(" · "):'<span style="color:var(--red)">nenhum</span>'));
        const inc=(o._incertos||[]).map(i=>STAT_NAMES[i]);
        if(inc.length) lin.push('<span style="color:var(--amber)">Confira (leitura duvidosa, marcados em amarelo): <b>'+esc(inc.join(", "))+'</b></span>');
        if(o._modo==="cryopod" && !s && nums.length) lin.push('<span style="color:var(--amber)">Achei '+nums.length+' números, mas sem a espécie não sei a qual status cada um pertence. Escolha a espécie e leia a foto de novo.</span>');
        if(!nLin) lin.push('<span style="color:var(--red)">O leitor não encontrou texto. Tente um print, ou uma foto mais reta, nítida e sem reflexo.</span>');
        const rs=sheet('<h3 style="margin:0 0 8px">Resultado da leitura</h3><div style="font-size:14px;line-height:1.6">'+lin.join("<br>")+'</div><div class="row" style="margin-top:12px"><button class="btn grow" data-t>Ver texto lido</button><button class="btn pri grow" data-x>Ok</button></div>',{center:true});
        rs.querySelector("[data-x]").onclick=()=>rs.remove();
        rs.querySelector("[data-t]").onclick=()=>{ rs.remove(); openOcrText(); };
        showOcrLink();
      }catch(err){
        ov.remove();
        explica("falha", "etapa: "+etapa+" · "+(err&&err.code||"erro")+" · "+(err&&err.message||(typeof err==="string"?err:JSON.stringify(err))));
      }
      return;
    }
    if(!sample){ explica(motivo||"sem_capacidade"); return; }
    const ov=sheet('<div class="row"><div class="spin"></div><div>Lendo a foto… isso leva alguns segundos.</div></div>',{center:true});
    try{
      const blob=await shrink(f);
      const cc=state.editing; const modoV = cc && curMode(cc)==="valores";
      const head = "Você recebe uma foto (às vezes tirada com o celular de uma TV) ou print de uma criatura do jogo ARK: Survival Ascended. ";
      const LAYOUT = "MUITO IMPORTANTE: no card do cryopod / painel do ASA os status NÃO têm nome escrito, só ÍCONES. Identifique cada número pelo ícone ao lado: "+
        "cruz/sinal de mais = vida; raio = estamina; mochila/bolsa = peso; punho fechado = dano (em %); garrafa/tanque = oxigênio; coxa de carne = comida; bota = velocidade (em %); estrelas/tontura = torpor; "+
        "e uma linha '100.0% - Nome' (com ícone de pegadas/impressão) é a impressão (imprinting) seguida do nome de quem fez a impressão. "+
        "Quando o número vier como 'atual / máximo' (ex.: 0.0 / 2584.8), use SEMPRE o MÁXIMO (o da direita) — peso e torpor costumam mostrar 0 à esquerda. "+
        "O título costuma ser 'NOME - LVL 362 (ESPÉCIE)': nome é o texto antes do traço, nível é o número depois de LVL, espécie é o que está entre parênteses. "+
        "O sexo é o símbolo ♀ (fêmea) ou ♂ (macho) perto do título. "+
        "Uma fileira de 6 caixinhas coloridas com números (ex.: 21 30 79 79 0 79) são os IDs das cores das regiões 0 a 5, na ordem da esquerda para a direita. "+
        "'N Mutations' ao lado de ♀ é o contador de mutações do lado materno; ao lado de ♂ é o do lado paterno. "+
        "Linhas como 'Cryopod Charge' e 'Weight: 0.5' (peso do item) NÃO são status da criatura: ignore. "+
        "'criado' = true só se a tela indicar claramente que nasceu de cria (ex.: contador de mutações, pais/ancestrais); impressão sozinha NÃO prova que é cria (domados podem ter impressão por habilidade do Lost Colony); se não souber, use null. "+
        "Na tela de INVENTÁRIO do ASA (aba 'Eles'), os status vêm escritos em português: SAÚDE = vida, ESTAMINA, OXIGÊNIO, COMIDA, PESO, DANO DE COMBATE = dano, VELOCIDADE, TORPOR; o nível aparece como 'NÍVEL: 232' e a espécie é o nome logo acima do nível. "+
        "Algumas espécies não mostram VELOCIDADE: nesse caso use null. Ignore XP, Armadura, Dia, Tempo e Temp. ";
      const EXTRA = '"cores":[6 números]|null,"mutM":number|null,"mutP":number|null,"impressao":number|null,"criado":true|false|null';
      const prompt = modoV ?
        head+LAYOUT+"Leia o VALOR de cada status. Copie os números exatamente como aparecem, como texto, com as casas decimais (ex.: \"3888.1\", \"318.7\"). "+
        "Responda SOMENTE com JSON neste formato, usando null quando não der para ler:\n"+
        '{"especie":string|null,"nome":string|null,"nivel":number|null,"sexo":"M"|"F"|null,"te":number|null,'+EXTRA+','+
        '"valores":{"vida":str,"estamina":str,"oxigenio":str,"comida":str,"peso":str,"dano":str,"velocidade":str,"criacao":str,"torpor":str}}\n'+
        "Dano e velocidade: escreva só o número, sem % (ex.: \"318.7\"). 'te' é a eficiência de domesticação, se aparecer escrita. "+
        "Inclua SEMPRE as 9 chaves de 'valores', mesmo que null. Não invente números. A espécie é o nome do animal (ex.: Pyromane, Rex), não o apelido."
      : head+LAYOUT+"Em algumas telas do ASA cada status mostra três números de pontos: selvagens, mutação e jogador (nessa ordem). "+
        "Extraia o que estiver visível. Responda SOMENTE com JSON neste formato, usando null quando não der para ler:\n"+
        '{"especie":string|null,"nome":string|null,"nivel":number|null,"sexo":"M"|"F"|null,'+EXTRA+','+
        '"status":{"vida":[s,m,j],"estamina":[s,m,j],"oxigenio":[s,m,j],"comida":[s,m,j],"peso":[s,m,j],"dano":[s,m,j],"velocidade":[s,m,j],"criacao":[s,m,j],"torpor":[s,m,j]}}\n'+
        "Inclua SEMPRE as 9 chaves de 'status', mesmo que null. Não invente números. A espécie é o nome do animal, não o apelido.";
      let out;
      const r=await sample(prompt,{images:[blob]});
      const m=(r&&r.text||"").match(/\{[\s\S]*\}/);
      if(!m) throw {code:"resposta_sem_json", message:(r&&r.text||"").slice(0,120)};
      out=JSON.parse(m[0]);
      ov.remove(); applyPhoto(out||{});
    }catch(err){
      ov.remove();
      const code=err&&err.code||"erro", msg=err&&err.message||String(err);
      if(code==="rate_limited") toast("Muitas leituras seguidas. Tente de novo em instantes.");
      else if(code==="not_granted"||code==="capability_disabled"||code==="capability_removed") explica("sem_capacidade",code+" "+msg);
      else if(code==="resposta_sem_json"||err instanceof SyntaxError) toast("Não consegui entender a foto. Tente outra mais nítida ou digite os valores.");
      else explica("falha", code+" · "+msg);
    }
  };
  ["photoIn","photoCam"].forEach(id=>{ const inp=document.getElementById(id); if(inp) inp.onchange=e=>{ const f=e.target.files&&e.target.files[0]; e.target.value=""; handlePhoto(f); }; });
  const pb=document.getElementById("pasteBox");
  if(pb){
    const resetTxt=()=>{ pb.innerHTML='ou toque aqui, segure e escolha <b>Colar</b> para usar uma imagem copiada'; };
    pb.addEventListener("paste",ev=>{
      ev.preventDefault();
      const items=[...(ev.clipboardData&&ev.clipboardData.items||[])];
      const it=items.find(x=>x.kind==="file"&&x.type.startsWith("image/"));
      if(it){ handlePhoto(it.getAsFile()); } else toast("A área de transferência não tem imagem. Copie o print primeiro.");
      setTimeout(resetTxt,50); pb.blur();
    });
    pb.addEventListener("input",()=>setTimeout(resetTxt,10));
  }
}
function openOcrText(){
  if(!state.lastOcr) return;
  const txt=(state.lastOcr.lines||[]).map(l=>l.t+"  @"+l.x+","+l.y).join("\n")||"(nenhum texto)";
  const ov=sheet('<h3 style="margin:0 0 8px">Texto que o celular leu</h3><p class="note" style="margin-top:0">Se a leitura errou, copie este texto e mande junto com a foto ao <a href="https://github.com/Chicosl/ark-breeding-app/issues">relatar o problema</a>.</p><textarea rows="12" readonly style="font-family:monospace;font-size:12px">'+esc(txt)+'</textarea><div class="row" style="margin-top:8px"><button class="btn grow" data-c>Copiar</button><button class="btn pri grow" data-x>Fechar</button></div>');
  ov.querySelector("[data-x]").onclick=()=>ov.remove();
  ov.querySelector("[data-c]").onclick=async()=>{ try{ await navigator.clipboard.writeText(txt); toast("Copiado!"); }catch(e){ const ta=ov.querySelector("textarea"); ta.removeAttribute("readonly"); ta.focus(); ta.select(); try{ document.execCommand("copy"); toast("Copiado!"); }catch(e2){ toast("Selecione e copie o texto."); } } };
}
function showOcrLink(){
  const box=document.getElementById("photoWrap"); if(!box || !state.lastOcr || document.getElementById("ocrLink")) return;
  const b=document.createElement("button"); b.id="ocrLink"; b.className="btn ghost"; b.style.cssText="width:100%;margin-top:6px;font-size:13px";
  b.textContent="Ver texto lido da última foto"; box.appendChild(b); b.onclick=openOcrText;
}
function shrink(file){
  return new Promise((res,rej)=>{
    const img=new Image(); const url=URL.createObjectURL(file);
    img.onload=()=>{ const max=1800; let {width:w,height:h}=img; const k=Math.min(1,max/Math.max(w,h)); w=Math.round(w*k); h=Math.round(h*k);
      const cv=document.createElement("canvas"); cv.width=w; cv.height=h; cv.getContext("2d").drawImage(img,0,0,w,h);
      cv.toBlob(b=>{ URL.revokeObjectURL(url); b?res(b):rej(new Error("blob")); },"image/jpeg",0.88); };
    img.onerror=()=>{ URL.revokeObjectURL(url); rej(new Error("img")); };
    img.src=url;
  });
}
/* 2ª leitura: imagem ampliada, em tons de cinza e com contraste esticado (ajuda em foto de TV) */
function enhanceForOcr(file){
  return new Promise((res,rej)=>{
    const img=new Image(); const url=URL.createObjectURL(file);
    img.onload=()=>{ let {width:w,height:h}=img; const L=Math.max(w,h); const k=L<2400?2400/L:Math.min(1,2600/L); w=Math.round(w*k); h=Math.round(h*k);
      const cv=document.createElement("canvas"); cv.width=w; cv.height=h; const ctx=cv.getContext("2d",{willReadFrequently:true});
      ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality="high"; ctx.drawImage(img,0,0,w,h);
      const id=ctx.getImageData(0,0,w,h), d=id.data, hist=new Uint32Array(256), n=w*h;
      for(let i=0;i<d.length;i+=4){ const y=(d[i]*0.299+d[i+1]*0.587+d[i+2]*0.114)|0; d[i]=y; hist[y]++; }
      let lo=0, hi=255, acc=0; for(let v=0;v<256;v++){ acc+=hist[v]; if(acc>n*0.02){ lo=v; break; } }
      acc=0; for(let v=255;v>=0;v--){ acc+=hist[v]; if(acc>n*0.02){ hi=v; break; } }
      const sc=255/Math.max(1,hi-lo);
      for(let i=0;i<d.length;i+=4){ const y=Math.max(0,Math.min(255,(d[i]-lo)*sc)); d[i]=d[i+1]=d[i+2]=y; }
      ctx.putImageData(id,0,0);
      cv.toBlob(b=>{ URL.revokeObjectURL(url); b?res(b):rej(new Error("blob")); },"image/jpeg",0.92); };
    img.onerror=()=>{ URL.revokeObjectURL(url); rej(new Error("img")); };
    img.src=url;
  });
}
function applyPhoto(o){
  const c=state.editing;
  if(o.especie && !c.sp){
    const t=norm(o.especie);
    const m=SPECIES.find(s=>norm(s.n)===t && !s.v.length) || SPECIES.find(s=>norm(s.n)===t) || SPECIES.find(s=>t.includes(norm(s.n))||norm(s.n).includes(t));
    if(m) c.sp=m.bp;
  }
  if(o.nome) c.nome=o.nome; if(o.nivel) c.nivel=o.nivel; if(o.sexo==="M"||o.sexo==="F") c.sexo=o.sexo;
  if(o.impressao!=null && !isNaN(parseFloat(o.impressao))){ c.ib=parseFloat(o.impressao); if(o.criado===true) c.origem="criado"; else if(o.criado===false) c.origem="domesticado"; }
  if(Array.isArray(o.cores) && o.cores.length>=6){ c.cores=[0,1,2,3,4,5].map(r=>{ const v=parseInt(o.cores[r]); return isNaN(v)?0:v; }); }
  if(o.mutM!=null && !isNaN(parseInt(o.mutM))) c.mutM=parseInt(o.mutM);
  if(o.mutP!=null && !isNaN(parseInt(o.mutP))) c.mutP=parseInt(o.mutP);
  if(((c.mutM||0)+(c.mutP||0))>0 && o.criado!==false) c.origem="criado"; // contador de mutações só existe em cria
  if(o.te!=null && c.origem==="domesticado") c.te=o.te;
  const map={vida:0,estamina:1,torpor:2,oxigenio:3,comida:4,peso:7,dano:8,velocidade:9,criacao:11};
  const SYN={vida:0,saude:0,health:0,hp:0,estamina:1,stamina:1,energia:1,torpor:2,torpidity:2,torpidez:2,oxigenio:3,oxygen:3,comida:4,food:4,alimento:4,fome:4,peso:7,weight:7,carga:7,capacidadedecarga:7,dano:8,danodecombate:8,combate:8,melee:8,meleedamage:8,danocorpoacorpo:8,ataque:8,velocidade:9,speed:9,movementspeed:9,criacao:11,crafting:11,craftingskill:11,habilidadedecriacao:11};
  const normObj=obj=>{ const out={}; if(!obj||typeof obj!=="object") return out; for(const [k,v] of Object.entries(obj)){ const kk=norm(k).replace(/[^a-z]/g,""); const i=SYN[kk]; if(i!=null && out[i]==null) out[i]=v; } return out; };
  const VAL=normObj(o.valores), PTS=normObj(o.status);
  let n=0;
  if(o.valores){ c.vals=c.vals||{}; for(const [i,v] of Object.entries(VAL)){ if(v!=null && v!==""){ c.vals[i]=String(v); n++; } } state.ex=null; }
  for(const [i,a0] of Object.entries(PTS)){ const k=null; const a=a0; if(Array.isArray(a)){ c.pts[i]=[0,1,2].map(j=>Math.max(0,parseInt(a[j])||0)); n++; } }
  viewAdd();
  const sp=byBp[c.sp]; let miss=[];
  if(sp){
    const modoV=curMode(c)==="valores";
    for(const x of inputStats(sp)){
      const got = modoV ? (VAL[x.i]!=null && VAL[x.i]!=="") : (PTS[x.i]!=null || !x.wild);
      if(!got){ miss.push(STAT_NAMES[x.i]);
        document.querySelectorAll(modoV?'.vgrid input[data-v="'+x.i+'"]':'.stgrid input[data-i="'+x.i+'"]').forEach(el=>el.classList.add("miss")); }
    }
  }
  (o._incertos||[]).forEach(i=>document.querySelectorAll('.vgrid input[data-v="'+i+'"]').forEach(el=>{ if(!el.classList.contains("miss")) el.classList.add("unsure"); }));
  const box=document.getElementById("exMsg")||document.querySelector(".stgrid");
  if(miss.length && n){
    const d=document.createElement("div"); d.className="msg warn"; d.id="photoMiss";
    d.innerHTML="A foto não mostrou (ou não deu para ler): <b>"+esc(miss.join(", "))+"</b>. Digite "+(miss.length>1?"esses valores":"esse valor")+" no campo marcado em vermelho.";
    const anchor=document.querySelector(".vgrid")||document.querySelector(".stgrid"); if(anchor) anchor.before(d);
  }
  toast(n? (miss.length? "Faltou: "+miss.join(", ")+". Digite no campo em vermelho." : (o.valores?"Valores lidos! Confira e toque em “Descobrir pontos”.":"Pronto! Confira os números antes de salvar.")) : "Não encontrei números na foto.");
  if(!c.sp) toast("Escolha a espécie para ver os campos.");
}

/* ---------- Melhores ---------- */
function viewBest(){
  const all=[...state.creatures.values()].filter(isActive);
  const sps=[...new Set(all.map(c=>c.sp))].filter(bp=>byBp[bp]).sort((a,b)=>spLabel(byBp[a]).localeCompare(spLabel(byBp[b])));
  if(!sps.length){ $main.innerHTML='<div class="empty"><b>Ainda não há o que comparar</b>Cadastre algumas criaturas da mesma espécie para ver os melhores pontos de cada status.</div>'; return; }
  if(!sps.includes(state.bestSp)) state.bestSp=sps[0];
  const bp=state.bestSp, s=byBp[bp];
  const list=all.filter(c=>c.sp===bp);
  const sts=statsOf(s).filter(x=>x.wild && x.i!==ST.TO);
  let h='<h2 style="margin:6px 2px 8px">Melhores por espécie</h2><select id="bsp">'+sps.map(x=>'<option value="'+esc(x)+'"'+(x===bp?" selected":"")+'>'+esc(spLabel(byBp[x]))+' ('+all.filter(c=>c.sp===x).length+')</option>').join("")+'</select>';
  let ideal=0;
  let rows='';
  const holders={};
  for(const x of sts){
    let bw=-1, bwC=[], bm=-1, bmC=[];
    for(const c of list){ const p=c.pts?.[x.i]||[0,0]; const w=p[0]||0, m=p[1]||0;
      if(w>bw){bw=w;bwC=[c];} else if(w===bw) bwC.push(c);
      if(m>bm){bm=m;bmC=[c];} else if(m===bm) bmC.push(c); }
    ideal+=Math.max(bw,0);
    bwC.forEach(c=>{ (holders[c.id]=holders[c.id]||[]).push(x.i); });
    const who=cs=>cs.slice(0,3).map(c=>(c.sexo==="M"?"♂ ":c.sexo==="F"?"♀ ":"")+esc(c.nome||"(sem nome)")).join(", ")+(cs.length>3?" +"+(cs.length-3):"");
    rows+='<tr><td>'+STAT_NAMES[x.i]+'</td><td class="num" style="color:var(--teal)">'+Math.max(bw,0)+'</td><td><div class="who">'+(bw>0?who(bwC):"—")+'</div></td><td class="num" style="color:var(--purple)">'+(bm>0?bm:"—")+'</td><td><div class="who">'+(bm>0?who(bmC):"")+'</div></td></tr>';
  }
  h+='<div class="card"><div class="row"><div class="grow"><div class="muted" style="font-size:12px">Soma dos melhores pontos selvagens</div><div class="muted" style="font-size:12px">(nível de uma criatura “perfeita” sem mutações, antes de subir de nível)</div></div><div class="big">'+(ideal+1)+'</div></div></div>';
  h+='<div class="card" style="padding:6px 8px"><table><tr><th>Status</th><th>Selv.</th><th>Quem tem</th><th>Mut.</th><th>Quem tem</th></tr>'+rows+'</table></div>';
  // reprodutores: quem concentra mais melhores status por sexo
  const rank=sx=>list.filter(c=>c.sexo===sx).map(c=>({c,n:(holders[c.id]||[]).length})).filter(r=>r.n>0).sort((a,b)=>b.n-a.n).slice(0,3);
  const blk=(sx,t)=>{ const r=rank(sx); return '<div class="grow"><div class="muted" style="font-size:12px;margin-bottom:4px">'+t+'</div>'+(r.length?r.map(x=>'<div style="margin:3px 0">'+SEX_ICON[sx]+' '+esc(x.c.nome||"(sem nome)")+' <span class="muted">· '+x.n+' melhor'+(x.n>1?"es":"")+' ('+(holders[x.c.id]||[]).map(i=>STAT_SHORT[i]).join(", ")+')</span></div>').join(""):'<div class="muted">—</div>')+'</div>'; };
  const _mutBlock=mutationsHtml(bp);
  h+='<h3 style="margin:18px 2px 4px">Quem mais concentra os melhores status</h3><div class="card"><div class="row wrap" style="align-items:flex-start;gap:16px">'+blk("F","Fêmeas")+blk("M","Machos")+'</div><p class="note">Cruzar quem tem melhores status diferentes aumenta a chance (55% por status) de um filhote juntar o melhor dos dois.</p></div>';
  h+=_mutBlock;
  $main.innerHTML=h;
  document.getElementById("bsp").onchange=e=>{ state.bestSp=e.target.value; viewBest(); };
}

/* ---------- Mais (backup, sobre) ---------- */
async function viewCfg(){
  const n=state.creatures.size;
  let h='<h2 style="margin:6px 2px 8px">Mais</h2>';
  h+='<div class="card"><h3 style="margin:0 0 4px">Backup</h3><p class="note" style="margin-top:0">'+n+' criatura'+(n===1?"":"s")+' na biblioteca. Guarde uma cópia de vez em quando. <b>Antes de desinstalar o app, salve um backup:</b> a biblioteca fica só no celular.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="btn pri grow" id="exp">Exportar arquivo</button><button class="btn grow" id="shareBk" style="display:none">Compartilhar</button><button class="btn grow" id="copy">Copiar como texto</button><span class="btn filebtn grow" style="text-align:center">Importar arquivo<input type="file" id="imp" accept=".json,application/json"></span></div><button class="btn" id="pasteBk" style="width:100%;margin-top:8px">Colar backup copiado como texto</button></div>';
  h+='<div class="card"><h3 style="margin:0 0 4px">Trazer do ARK Smart Breeding</h3><p class="note" style="margin-top:0">Importa a biblioteca de um arquivo <b>.asb</b> (no ASB: File → Save as…). Pontos selvagens, de mutação e do jogador, sexo, impressão, pais e situação vêm junto. Importar de novo o mesmo arquivo atualiza, não duplica.</p><span class="btn filebtn pri" style="display:block;text-align:center">Escolher arquivo .asb<input type="file" id="impAsb" accept="*/*"></span></div>';
  h+='<div class="card"><h3 style="margin:0 0 4px">Servidor</h3><p style="margin:0">Multiplicadores <b>oficiais</b> de status.</p><p class="note">Vida: TaM 0,14 · TmM 0,44 · IdM 0,2 — Dano: TaM 0,14 · TmM 0,44 · IdM 0,17. Os pontos que você digita não dependem disso; só o valor calculado.</p></div>';
  h+='<div class="card"><h3 style="margin:0 0 4px">Sobre</h3><p style="margin:0 0 2px"><b>Breeding Companion para ARK</b> · versão '+esc(APP_VERSION)+'</p><p class="note" style="margin:0 0 6px">Mantido por <b>ChicoLemke</b></p><p class="note" style="margin-top:0"><b>App de fã, não oficial.</b> Não tem ligação com a Studio Wildcard nem é endossado por ela. ARK: Survival Ascended é marca da Studio Wildcard.</p><p class="note"><b>Privacidade:</b> o app não coleta nem envia nenhum dado. A biblioteca fica só no seu celular, e a leitura das fotos é feita no próprio aparelho.</p><p class="note" style="margin-bottom:0">Créditos:</p><ul class="note aboutlist"><li>Dados das espécies e cálculo dos status: <a href="https://github.com/cadon/ARKStatsExtractor">ARK Smart Breeding</a> (licença MIT).</li><li>Ilustrações coloridas: <a href="https://github.com/arkutils/species-images">arkutils/species-images</a> (licença MIT).</li><li>Leitura de texto nas fotos: Google ML Kit.</li></ul><p class="note">Dados: ASA '+esc(DATA_INFO.asa)+' · base '+esc(DATA_INFO.base)+' · '+SPECIES.length+' espécies.</p><p class="note" style="margin-bottom:0"><a href="https://github.com/Chicosl/ark-breeding-app/releases">Baixar a versão mais recente</a> · <a href="https://github.com/Chicosl/ark-breeding-app/issues">Relatar problema ou sugerir</a></p></div>';
  $main.innerHTML=h;
  const payload=()=>JSON.stringify({app:"ark-breeding",versao:1,exportado:new Date().toISOString(),criaturas:[...state.creatures.values()].map(clean)},null,1);
  let downloads=null; try{ downloads=await window.claude?.use?.("downloads"); }catch(e){}
  const expBtn=document.getElementById("exp"); if(!expBtn) return;
  const bkName=()=>"breeding-companion-backup-"+new Date().toISOString().slice(0,10)+".json";
  const nat=(m,o)=>window.Capacitor.nativePromise("Arquivo",m,o);
  if(IS_APK && window.Capacitor && typeof window.Capacitor.nativePromise==="function"){
    expBtn.textContent="Salvar arquivo";
    expBtn.onclick=async()=>{ try{ const r=await nat("save",{filename:bkName(),data:payload(),mimeType:"application/json"}); if(r&&r.saved) toast("Backup salvo."); }catch(e){ toast("Não consegui salvar. Tente “Compartilhar” ou “Copiar como texto”."); } };
    const sb=document.getElementById("shareBk"); sb.style.display="";
    sb.onclick=async()=>{ try{ await nat("share",{filename:bkName(),data:payload(),mimeType:"application/json"}); }catch(e){ toast("Não consegui compartilhar. Use “Copiar como texto”."); } };
    downloads=null;
  } else if(!downloads) expBtn.style.display="none";
  if(!IS_APK) expBtn.onclick=async()=>{ try{ await downloads.save({filename:"ark-breeding-backup-"+new Date().toISOString().slice(0,10)+".json", data:payload(), mimeType:"application/json"}); }catch(e){ toast("Download cancelado ou indisponível. Use “Copiar como texto”."); } };
  document.getElementById("copy").onclick=async()=>{ try{ await navigator.clipboard.writeText(payload()); toast("Copiado! Cole num e-mail ou nota para guardar."); }catch(e){ const ov=sheet('<p class="note">Copie o texto abaixo:</p><textarea rows="10" readonly>'+esc(payload())+'</textarea><button class="btn" style="margin-top:8px;width:100%">Fechar</button>'); ov.querySelector("button").onclick=()=>ov.remove(); } };
  document.getElementById("impAsb").onchange=async e=>{
    const f=e.target.files[0]; if(!f) return; e.target.value="";
    let j; try{ j=JSON.parse(await f.text()); }catch(err){ toast("Não consegui ler. O arquivo precisa ser um .asb de versão recente do ASB (formato JSON)."); return; }
    const {list:raw, skipped}=fromAsb(j); const list=raw.map(x=>normalizeCreature(x)).filter(Boolean);
    if(!list.length){ toast("Nenhuma criatura reconhecida nesse arquivo."); return; }
    const msg="Importar "+list.length+" criatura(s) do ARK Smart Breeding?"+(skipped.length?" "+skipped.length+" ficarão de fora (espécie não reconhecida ou sem pontos).":"");
    if(!(await confirmDlg(msg,"Importar"))) return;
    const ov=sheet('<div class="row"><div class="spin"></div><div id="impProg">Importando…</div></div>',{center:true});
    let n=0; for(const c of list){ await saveCreature(c); n++; const el=document.getElementById("impProg"); if(el) el.textContent="Importando… "+n+"/"+list.length; }
    ov.remove(); toast(n+" criatura(s) importada(s)."); state.view="lib"; render();
  };
  const importList=async(j)=>{
    const list=(Array.isArray(j&&j.criaturas)?j.criaturas:Array.isArray(j&&j.c)?j.c:[]).map(x=>normalizeCreature(x)).filter(Boolean);
    if(!list.length){ toast("Nenhuma criatura nesse backup."); return false; }
    if(!(await confirmDlg("Importar "+list.length+" criatura(s)? As que já existem com o mesmo código serão atualizadas.","Importar"))) return false;
    for(const c of list) await saveCreature(c);
    toast(list.length+" importada(s)."); viewCfg(); return true;
  };
  document.getElementById("pasteBk").onclick=()=>{
    const ov=sheet('<h3 style="margin:0 0 6px">Colar backup</h3><p class="note" style="margin-top:0">Cole aqui o texto copiado em “Copiar como texto” (também serve o da versão antiga do app).</p><textarea id="pasteTxt" rows="8" placeholder="{&quot;app&quot;:…"></textarea><div class="row" style="margin-top:8px;gap:8px"><button class="btn grow" id="pasteCancel">Cancelar</button><button class="btn pri grow" id="pasteOk">Importar</button></div>');
    ov.querySelector("#pasteCancel").onclick=()=>ov.remove();
    ov.querySelector("#pasteOk").onclick=async()=>{
      let j; try{ j=JSON.parse(ov.querySelector("#pasteTxt").value.trim()); }catch(err){ toast("Esse texto não é um backup válido. Copie de novo, inteiro."); return; }
      ov.remove(); await importList(j);
    };
  };
  document.getElementById("imp").onchange=async e=>{
    const f=e.target.files[0]; if(!f) return;
    try{ const j=JSON.parse(await f.text()); const list=(Array.isArray(j&&j.criaturas)?j.criaturas:Array.isArray(j&&j.c)?j.c:[]).map(x=>normalizeCreature(x)).filter(Boolean);
      if(!list.length){ toast("Arquivo sem criaturas."); return; }
      if(!(await confirmDlg("Importar "+list.length+" criatura(s)? As que já existem com o mesmo código serão atualizadas.","Importar"))) return;
      for(const c of list) await saveCreature(c);
      toast(list.length+" importada(s)."); viewCfg();
    }catch(err){ toast("Não consegui ler esse arquivo."); }
    e.target.value="";
  };
}


/* ===================== IMAGENS COLORIDAS =====================
 Imagens do projeto arkutils/species-images (MIT), as mesmas do ASB.
 Máscara: vermelho=região 0, verde=1, azul=2, amarelo=3, ciano=4, magenta=5. */
const _pairCache={}, _renderCache={};
function _loadImg(src){ return new Promise((res,rej)=>{ const i=new Image(); i.onload=()=>res(i); i.onerror=rej; i.src=src; }); }
function _pair(key){
  if(!_pairCache[key]) _pairCache[key]=_loadImg("sp/"+key+".webp").then(img=>{
    const w=img.naturalWidth/2, h=img.naturalHeight, cv=document.createElement("canvas"); cv.width=w; cv.height=h;
    const ctx=cv.getContext("2d",{willReadFrequently:true});
    ctx.drawImage(img,0,0,w,h,0,0,w,h); const bd=ctx.getImageData(0,0,w,h);
    ctx.clearRect(0,0,w,h); ctx.drawImage(img,w,0,w,h,0,0,w,h); const md=ctx.getImageData(0,0,w,h); return {bd,md,w,h};
  });
  return _pairCache[key];
}
function _rgb(hx){ return hx?[parseInt(hx.slice(1,3),16),parseInt(hx.slice(3,5),16),parseInt(hx.slice(5,7),16)]:null; }
function hasImage(s){ return !!(s && IMGMAP[s.n]); }
async function creatureImage(s, cores){
  const key=s&&IMGMAP[s.n]; if(!key) return null;
  const ck=key+"|"+(cores||[]).join(",");
  if(_renderCache[ck]) return _renderCache[ck];
  const p=(async()=>{
    const {bd,md,w,h}=await _pair(key);
    const rc=[0,1,2,3,4,5].map(r=> (s.cr&&s.cr[r]!=null&&cores&&cores[r]) ? _rgb(colorHex(cores[r])) : null);
    const out=new ImageData(w,h), o=out.data, B=bd.data, M=md.data;
    for(let i=0;i<o.length;i+=4){
      const a=B[i+3]; if(!a) continue;
      let r=B[i], g=B[i+1], b=B[i+2];
      const mr=M[i]/255, mg=M[i+1]/255, mb=M[i+2]/255;
      if(mr+mg+mb>0.02){
        const y=Math.max(0,Math.min(mr,mg)-mb), c=Math.max(0,Math.min(mg,mb)-mr), m=Math.max(0,Math.min(mr,mb)-mg);
        const it=[Math.max(0,mr-y-m),Math.max(0,mg-y-c),Math.max(0,mb-c-m),y,c,m];
        const lum=(0.299*r+0.587*g+0.114*b)/255, k=Math.min(1.3,lum*1.45+0.08);
        for(let q=0;q<6;q++){ const f=it[q], col=rc[q]; if(f<0.01||!col) continue;
          r=r*(1-f)+Math.min(255,col[0]*k)*f; g=g*(1-f)+Math.min(255,col[1]*k)*f; b=b*(1-f)+Math.min(255,col[2]*k)*f; }
      }
      o[i]=r; o[i+1]=g; o[i+2]=b; o[i+3]=a;
    }
    const cv=document.createElement("canvas"); cv.width=w; cv.height=h; cv.getContext("2d").putImageData(out,0,0);
    return cv.toDataURL("image/webp",0.9);
  })();
  _renderCache[ck]=p; return p;
}
/* preenche <img data-cimg="id"> depois de desenhar a lista */
function hydrateImages(root){
  (root||document).querySelectorAll("img[data-cimg]").forEach(async el=>{
    const c = el.dataset.cimg==="__edit" ? state.editing : state.creatures.get(el.dataset.cimg);
    const s=c&&byBp[c.sp]; if(!hasImage(s)) { el.remove(); return; }
    try{ const url=await creatureImage(s,c.cores); if(url) { el.src=url; el.classList.add("on"); } }catch(e){ el.remove(); }
  });
}

/* ---------- Cria (plano de cria) ---------- */
function viewCria(){
  const act=[...state.creatures.values()].filter(isActive);
  const sps=[...new Set(act.map(c=>c.sp))].filter(bp=>{ const s=byBp[bp]; if(!s||s.ng===true||s.br===false) return false;
    const l=act.filter(c=>c.sp===bp); return l.some(c=>c.sexo==="F") && l.some(c=>c.sexo==="M"); })
    .sort((a,b)=>spLabel(byBp[a]).localeCompare(spLabel(byBp[b])));
  if(!sps.length){ $main.innerHTML='<div class="empty"><b>Ainda não dá para planejar</b>O plano de cria precisa de pelo menos uma fêmea e um macho vivos da mesma espécie, com o sexo marcado.</div>'; return; }
  if(!sps.includes(state.criaSp)) state.criaSp=sps[0];
  const bp=state.criaSp, s=byBp[bp], all=breedStats(s);
  state.criaStats=state.criaStats||{}; if(!state.criaStats[bp]) state.criaStats[bp]=all.slice();
  const sel=state.criaStats[bp].filter(i=>all.includes(i)); if(state.criaMut==null) state.criaMut=true;
  const plan=breedingPlan(bp, sel, state.criaMut, 15);
  let h='<h2 style="margin:6px 2px 8px">Plano de cria</h2>';
  h+='<select id="csp">'+sps.map(x=>{ const l=act.filter(c=>c.sp===x); return '<option value="'+esc(x)+'"'+(x===bp?" selected":"")+'>'+esc(spLabel(byBp[x]))+' (♀'+l.filter(c=>c.sexo==="F").length+' ♂'+l.filter(c=>c.sexo==="M").length+')</option>'; }).join("")+'</select>';
  h+='<label class="f">Status que importam para você</label><div class="chips" style="flex-wrap:wrap">'+all.map(i=>'<span class="chip small'+(sel.includes(i)?" on":"")+'" data-st="'+i+'">'+STAT_NAMES[i]+'</span>').join("")+'</div>';
  h+='<div class="seg" id="cmut" style="margin-top:4px">'+[["1","Contar mutações (S+M)"],["0","Só selvagem"]].map(([v,tx])=>'<button data-v="'+v+'" class="'+((state.criaMut?"1":"0")===v?"on":"")+'">'+tx+'</button>').join("")+'</div>';
  if(!sel.length){ $main.innerHTML=h+'<div class="empty">Marque pelo menos um status.</div>'; bindCria(); return; }
  const bestSum=sel.reduce((a,i)=>a+plan.best[i],0);
  h+='<div class="card"><div class="row"><div class="grow"><div class="muted" style="font-size:12px">Filhote perfeito possível hoje (melhor de cada status entre os seus '+plan.n+')</div><div class="kids" style="margin-top:6px">'+sel.map(i=>'<div class="kid top"><div class="k">'+STAT_SHORT[i]+'</div><div class="v">'+plan.best[i]+'</div></div>').join("")+'</div></div></div><div class="note">Soma dos status marcados: <b>'+bestSum+'</b> pontos.</div></div>';
  h+='<h3 style="margin:14px 2px 2px">Melhores pares</h3><p class="note" style="margin-top:0">'+plan.total+' combinações possíveis ♀×♂. Ordenadas por quantos status do filhote podem chegar ao máximo da espécie e pela média esperada.</p>';
  plan.pairs.forEach((p,k)=>{
    h+='<div class="card pair" data-k="'+k+'"><div class="who">'+SEX_ICON.F+' '+esc(p.f.nome||"(sem nome)")+' <span class="x">×</span> '+SEX_ICON.M+' '+esc(p.m.nome||"(sem nome)")+'</div>'+
      '<div class="kids">'+sel.map(i=>{ const q=p.per[i]; const hi=q.hi; return '<div class="kid'+(q.top?" top":"")+'"><div class="k">'+STAT_SHORT[i]+(q.same?"":" 55%")+'</div><div class="v">'+hi[0]+(state.criaMut&&hi[1]?'<small>+'+hi[1]+'</small>':'')+'</div></div>'; }).join("")+'</div>'+
      '<div class="stats3"><span>No máximo: <b>'+p.reach+'/'+sel.length+'</b></span><span>Chance do filhote ideal: <b>'+fmtPct(p.pIdeal)+'</b></span><span>Média esperada: <b>'+p.expected.toFixed(1).replace(".",",")+'</b></span><span>Mutação: <b>'+fmtPct(p.pMut)+'</b>'+(p.pMut<0.07?' <span title="algum lado no limite de 20">⚠</span>':'')+'</span></div></div>';
  });
  h+='<p class="note">Como funciona: em cada status o filhote herda o valor maior dos pais com 55% de chance (selvagem e mutado juntos, regra do ASA). “Chance do filhote ideal” = todos os status marcados vindo no valor maior. Mutação: 3 sorteios de 2,5%; pais com 20+ mutações perdem os sorteios.</p>';
  $main.innerHTML=h; bindCria(plan, sel);
}
function bindCria(plan, sel){
  const c=document.getElementById("csp"); if(c) c.onchange=e=>{ state.criaSp=e.target.value; viewCria(); };
  document.querySelectorAll("[data-st]").forEach(ch=>ch.onclick=()=>{ const i=+ch.dataset.st, bp=state.criaSp; const a=state.criaStats[bp]; const k=a.indexOf(i); if(k>=0) a.splice(k,1); else a.push(i); viewCria(); });
  document.querySelectorAll("#cmut button").forEach(b=>b.onclick=()=>{ state.criaMut=b.dataset.v==="1"; viewCria(); });
  if(plan) document.querySelectorAll(".pair").forEach(el=>el.onclick=()=>pairDetail(plan.pairs[+el.dataset.k], sel));
}
function pairDetail(p, sel){
  let rows='<tr><th>Status</th><th>♀ Mãe</th><th>♂ Pai</th><th>55%</th><th>45%</th></tr>';
  const f=v=>v[0]+(v[1]?'<small style="color:var(--purple)">+'+v[1]+'</small>':'');
  for(const i of sel){ const q=p.per[i]; const a=lv(p.f,i), b=lv(p.m,i);
    rows+='<tr><td>'+STAT_NAMES[i]+'</td><td class="num">'+f(a)+'</td><td class="num">'+f(b)+'</td><td class="num" style="color:var(--teal)">'+f(q.hi)+'</td><td class="num muted">'+(q.same?"=":f(q.lo))+'</td></tr>'; }
  const mutInfo=c=>(c.mutM||0)+"/"+(c.mutP||0)+(canMutate(c)?"":" (limite)");
  const ov=sheet('<h3 style="margin:0 0 4px">'+SEX_ICON.F+' '+esc(p.f.nome||"(sem nome)")+' × '+SEX_ICON.M+' '+esc(p.m.nome||"(sem nome)")+'</h3>'+
    '<table>'+rows+'</table>'+
    '<div class="stats3"><span>Chance do filhote ideal: <b>'+fmtPct(p.pIdeal)+'</b></span><span>Mutação por filhote: <b>'+fmtPct(p.pMut)+'</b></span></div>'+
    '<p class="note">Contadores de mutação: mãe '+mutInfo(p.f)+' · pai '+mutInfo(p.m)+'. O filhote terá contador materno '+mutTotal(p.f)+' e paterno '+mutTotal(p.m)+' (+1 no lado que gerar mutação).</p>'+
    '<button class="btn" style="width:100%;margin-top:8px">Fechar</button>');
  ov.querySelector("button").onclick=()=>ov.remove();
}

/* ---------- Mutações (bloco da aba Melhores) ---------- */
function mutationsHtml(bp){
  const s=byBp[bp]; const list=[...state.creatures.values()].filter(c=>c.sp===bp && isActive(c));
  const mstats=statsOf(s).filter(x=>x.mut).map(x=>x.i);
  let h='<h3 style="margin:18px 2px 4px">Mutações</h3><div class="card" style="padding:6px 8px"><table><tr><th>Status</th><th>Maior mutado</th><th>Quem tem</th></tr>';
  let any=false;
  for(const i of mstats){ let bm=0, who=[]; list.forEach(c=>{ const m=lv(c,i)[1]; if(m>bm){bm=m; who=[c];} else if(m===bm&&m>0) who.push(c); });
    if(bm>0) any=true;
    h+='<tr><td>'+STAT_NAMES[i]+'</td><td class="num" style="color:var(--purple)">'+(bm?"+"+bm+' <small class="muted">('+(bm/2)+' mut.)</small>':"—")+'</td><td><div class="who">'+(bm?who.slice(0,3).map(c=>(c.sexo==="M"?"♂ ":c.sexo==="F"?"♀ ":"")+esc(c.nome||"(sem nome)")).join(", "):"")+'</div></td></tr>'; }
  h+='</table>'+(any?'':'<p class="note" style="margin:6px 4px">Nenhum ponto de mutação registrado. Nas crias, os pontos mutados só aparecem separados se vierem do .asb ou do modo “Já sei os pontos”.</p>')+'</div>';
  const limpos=list.filter(c=>!mutTotal(c) && !mstats.some(i=>lv(c,i)[1]));
  const mut=list.filter(c=>mutTotal(c) || mstats.some(i=>lv(c,i)[1])).sort((a,b)=>mutTotal(a)-mutTotal(b));
  const nm=c=>(c.sexo==="M"?SEX_ICON.M:c.sexo==="F"?SEX_ICON.F:"")+" "+esc(c.nome||"(sem nome)");
  h+='<div class="card"><div class="muted" style="font-size:12px;margin-bottom:4px">Linha limpa (0 mutações): podem gerar mutações pelos dois lados</div>'+(limpos.length?limpos.map(c=>'<div style="margin:3px 0">'+nm(c)+'</div>').join(""):'<div class="muted">—</div>')+
    '<div class="muted" style="font-size:12px;margin:12px 0 4px">Com mutações (contador materno/paterno)</div>'+(mut.length?mut.map(c=>{ const ms=mstats.filter(i=>lv(c,i)[1]).map(i=>STAT_SHORT[i]+" +"+lv(c,i)[1]).join(", ");
      return '<div style="margin:4px 0">'+nm(c)+' <span class="muted">· '+(c.mutM||0)+'/'+(c.mutP||0)+(mutTotal(c)>=MUT_LIMIT?' <span style="color:var(--amber)">⚠ limite de 20: não gera novas mutações por este lado</span>':'')+(ms?' · '+ms:'')+'</span></div>'; }).join(""):'<div class="muted">—</div>')+
    '<p class="note">Dica clássica: mantenha fêmeas limpas (0/0) e troque o macho sempre que nascer uma mutação boa; assim o contador das fêmeas não sobe.</p></div>';
  return h;
}

/* ===================== IMPORTAR .ASB =====================
 ASB: índices de status iguais aos do app; sex 1=macho 2=fêmea; status 0 disponível, 1 morto, 2 indisponível, 3 obelisco, 4 cryopod */
function fromAsb(j){
  const list=[], skipped=[];
  const ok=n=>Number.isInteger(n)&&n>=0&&n<100000?n:null;
  for(const a of (j.creatures||[])){
    const bp=String(a.speciesBlueprint||"").split("/").pop().split(".")[0]; const s=byBp[bp];
    if(!s || !Array.isArray(a.levelsWild)){ skipped.push(a.name||bp); continue; }
    const nn=v=>{ const n=Number(v); return Number.isFinite(n)&&n>=0&&n<100000?Math.round(n):0; };
    const W=a.levelsWild.map(nn), M=(Array.isArray(a.levelsMutated)?a.levelsMutated:[]).map(nn), D=(Array.isArray(a.levelsDom)?a.levelsDom:[]).map(nn);
    const pts={}; for(const x of statsOf(s)) pts[x.i]=[W[x.i]||0, M[x.i]||0, D[x.i]||0];
    const sum=arr=>arr.reduce((p,v,i)=>p+(i===ST.TO?0:(v||0)),0);
    const bred=!!a.isBred;
    list.push({
      id:"asb-"+String(a.guid||"").replace(/[^A-Za-z0-9-]/g,"").slice(0,70), sp:bp, nome:a.name||"", sexo:a.sex===1?"M":a.sex===2?"F":"",
      origem: bred?"criado":"domesticado",
      nivel: 1+(W[ST.TO]||0)+sum(D)+sum(M),
      te: !bred && a.tamingEff!=null ? Math.round(a.tamingEff*1000)/10 : null,
      ib: bred ? Math.round((a.imprintingBonus||0)*1000)/10 : null,
      pts, mae:a.motherGuid?"asb-"+String(a.motherGuid).replace(/[^A-Za-z0-9-]/g,"").slice(0,70):"", pai:a.fatherGuid?"asb-"+String(a.fatherGuid).replace(/[^A-Za-z0-9-]/g,"").slice(0,70):"",
      mutM: ok(a.mutationsMaternal), mutP: ok(a.mutationsPaternal),
      estado: ({0:"vivo",1:"morto",2:"vendido",3:"guardado",4:"guardado"})[a.status]||"vivo",
      cores: Array.isArray(a.colors) ? [0,1,2,3,4,5].map(r=>{ const n=Number(a.colors[r]); return Number.isInteger(n)&&n>=0&&n<=255?n:0; }) : [0,0,0,0,0,0],
      notas: [a.note, a.owner?"Dono: "+a.owner:null].filter(Boolean).join("\n"), modo:"pontos",
      criado: Date.parse(a.addedToLibrary)||Date.now()
    });
  }
  return {list, skipped};
}

/* ===================== INÍCIO ===================== */
lsLoad(); render(); initDb();
