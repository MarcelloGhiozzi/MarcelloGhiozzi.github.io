(this["webpackJsonpposso-uscire"]=this["webpackJsonpposso-uscire"]||[]).push([[0],{84:function(e,i,o){"use strict";o.r(i);var a=o(5),n=o(0),t=o(12),r=o.n(t),s=o(139),l=o(138),c=o(125),g=o(137),m=o(14),u=o(37),d=o(141),p=Object(n.createContext)(null);function b(e){var i=e.children,o=Object(n.useState)("it"),t=Object(m.a)(o,2),r=t[0],s=t[1];return Object(a.jsx)(p.Provider,{value:[r,s],children:i})}function f(){return Object(n.useContext)(p)}var h=Object(c.a)((function(e){return{subTitle:{marginTop:e.spacing(6),marginBottom:e.spacing(1)},changeLanguageBox:{marginBottom:e.spacing(1)}}})),j={MAY_I_EXIT:{it:"Posso uscire?",en:"Can I get out?"},INSERT_CITY:{it:"Inserisci la tua provincia per conoscere le restrizioni.",en:"Enter your city to know the restrictions."}};function O(){var e=h(),i=f(),o=Object(m.a)(i,2),n=o[0],t=o[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{gutterBottom:!0,children:Object(a.jsx)(d.a,{textAlign:"center",fontSize:"h3.fontSize",fontFamily:"Roboto",m:1,children:j.MAY_I_EXIT[n]})}),Object(a.jsx)(d.a,{textAlign:"center",className:e.changeLanguageBox,onClick:function(){return t("it"===n?"en":"it")},children:"it"===n?"\ud83c\udde9\ud83c\uddec Switch to English":"\ud83c\uddee\ud83c\uddf9 Passa all' Italiano"}),Object(a.jsx)(u.a,{className:e.subTitle,color:"textPrimary",children:Object(a.jsx)(d.a,{textAlign:"left",fontSize:20,children:j.INSERT_CITY[n]})})]})}var v=o(128),C=1610920372559,S=Object(c.a)((function(e){return{copyrightBox:{marginTop:e.spacing(10),marginBottom:e.spacing(5)},contributeBox:{marginTop:e.spacing(.7)},lastUpdateBox:{marginBottom:e.spacing(1)}}})),T={DISCLAIMER_1:{it:"Le informazioni fornite potrebbero essere incomplete o non corrette.",en:"The information provided may be incomplete or incorrect."},DISCLAIMER_2:{it:"Attenersi sempre a fonti governative ufficiali.",en:"Always stick to official government sources."},CONTRIBUTE:{it:"Contribuisci al progetto su Github",en:"Contribute on Github"},LAST_UPDATE:{it:"Ultimo aggiornamento: ",en:"Last update: "}};function z(){var e=S(),i=f(),o=Object(m.a)(i,1)[0];return Object(a.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",className:e.copyrightBox,children:[Object(a.jsxs)(d.a,{className:e.lastUpdateBox,fontWeight:"fontWeightBold",children:[T.LAST_UPDATE[o],"".concat(new Date(C).toLocaleDateString()," ").concat(new Date(C).toLocaleTimeString())]}),Object(a.jsx)(d.a,{children:T.DISCLAIMER_1[o]}),Object(a.jsx)(d.a,{children:T.DISCLAIMER_2[o]}),Object(a.jsx)(d.a,{className:e.contributeBox,children:Object(a.jsx)(v.a,{href:"http://github.com/Guglio95/posso-uscire",children:T.CONTRIBUTE[o]})})]})}var x=o(11),A=o(140),y=o(142),w=[{nome:"Agrigento",sigla:"AG",regione:"Sicilia"},{nome:"Alessandria",sigla:"AL",regione:"Piemonte"},{nome:"Ancona",sigla:"AN",regione:"Marche"},{nome:"Arezzo",sigla:"AR",regione:"Toscana"},{nome:"Ascoli Piceno",sigla:"AP",regione:"Marche"},{nome:"Asti",sigla:"AT",regione:"Piemonte"},{nome:"Avellino",sigla:"AV",regione:"Campania"},{nome:"Bari",sigla:"BA",regione:"Puglia"},{nome:"Barletta-Andria-Trani",sigla:"BT",regione:"Puglia"},{nome:"Belluno",sigla:"BL",regione:"Veneto"},{nome:"Benevento",sigla:"BN",regione:"Campania"},{nome:"Bergamo",sigla:"BG",regione:"Lombardia"},{nome:"Biella",sigla:"BI",regione:"Piemonte"},{nome:"Bologna",sigla:"BO",regione:"Emilia-Romagna"},{nome:"Bolzano/Bozen",sigla:"BZ",regione:"Trentino-Alto Adige/S\xfcdtirol"},{nome:"Brescia",sigla:"BS",regione:"Lombardia"},{nome:"Brindisi",sigla:"BR",regione:"Puglia"},{nome:"Cagliari",sigla:"CA",regione:"Sardegna"},{nome:"Caltanissetta",sigla:"CL",regione:"Sicilia"},{nome:"Campobasso",sigla:"CB",regione:"Molise"},{nome:"Carbonia-Iglesias",sigla:"CI",regione:"Sardegna"},{nome:"Caserta",sigla:"CE",regione:"Campania"},{nome:"Catania",sigla:"CT",regione:"Sicilia"},{nome:"Catanzaro",sigla:"CZ",regione:"Calabria"},{nome:"Chieti",sigla:"CH",regione:"Abruzzo"},{nome:"Como",sigla:"CO",regione:"Lombardia"},{nome:"Cosenza",sigla:"CS",regione:"Calabria"},{nome:"Cremona",sigla:"CR",regione:"Lombardia"},{nome:"Crotone",sigla:"KR",regione:"Calabria"},{nome:"Cuneo",sigla:"CN",regione:"Piemonte"},{nome:"Enna",sigla:"EN",regione:"Sicilia"},{nome:"Fermo",sigla:"FM",regione:"Marche"},{nome:"Ferrara",sigla:"FE",regione:"Emilia-Romagna"},{nome:"Firenze",sigla:"FI",regione:"Toscana"},{nome:"Foggia",sigla:"FG",regione:"Puglia"},{nome:"Forl\xec-Cesena",sigla:"FC",regione:"Emilia-Romagna"},{nome:"Frosinone",sigla:"FR",regione:"Lazio"},{nome:"Genova",sigla:"GE",regione:"Liguria"},{nome:"Gorizia",sigla:"GO",regione:"Friuli-Venezia Giulia"},{nome:"Grosseto",sigla:"GR",regione:"Toscana"},{nome:"Imperia",sigla:"IM",regione:"Liguria"},{nome:"Isernia",sigla:"IS",regione:"Molise"},{nome:"L'Aquila",sigla:"AQ",regione:"Abruzzo"},{nome:"La Spezia",sigla:"SP",regione:"Liguria"},{nome:"Latina",sigla:"LT",regione:"Lazio"},{nome:"Lecce",sigla:"LE",regione:"Puglia"},{nome:"Lecco",sigla:"LC",regione:"Lombardia"},{nome:"Livorno",sigla:"LI",regione:"Toscana"},{nome:"Lodi",sigla:"LO",regione:"Lombardia"},{nome:"Lucca",sigla:"LU",regione:"Toscana"},{nome:"Macerata",sigla:"MC",regione:"Marche"},{nome:"Mantova",sigla:"MN",regione:"Lombardia"},{nome:"Massa-Carrara",sigla:"MS",regione:"Toscana"},{nome:"Matera",sigla:"MT",regione:"Basilicata"},{nome:"Medio Campidano",sigla:"VS",regione:"Sardegna"},{nome:"Messina",sigla:"ME",regione:"Sicilia"},{nome:"Milano",sigla:"MI",regione:"Lombardia"},{nome:"Modena",sigla:"MO",regione:"Emilia-Romagna"},{nome:"Monza e della Brianza",sigla:"MB",regione:"Lombardia"},{nome:"Napoli",sigla:"NA",regione:"Campania"},{nome:"Novara",sigla:"NO",regione:"Piemonte"},{nome:"Nuoro",sigla:"NU",regione:"Sardegna"},{nome:"Ogliastra",sigla:"OG",regione:"Sardegna"},{nome:"Olbia-Tempio",sigla:"OT",regione:"Sardegna"},{nome:"Oristano",sigla:"OR",regione:"Sardegna"},{nome:"Padova",sigla:"PD",regione:"Veneto"},{nome:"Palermo",sigla:"PA",regione:"Sicilia"},{nome:"Parma",sigla:"PR",regione:"Emilia-Romagna"},{nome:"Pavia",sigla:"PV",regione:"Lombardia"},{nome:"Perugia",sigla:"PG",regione:"Umbria"},{nome:"Pesaro e Urbino",sigla:"PU",regione:"Marche"},{nome:"Pescara",sigla:"PE",regione:"Abruzzo"},{nome:"Piacenza",sigla:"PC",regione:"Emilia-Romagna"},{nome:"Pisa",sigla:"PI",regione:"Toscana"},{nome:"Pistoia",sigla:"PT",regione:"Toscana"},{nome:"Pordenone",sigla:"PN",regione:"Friuli-Venezia Giulia"},{nome:"Potenza",sigla:"PZ",regione:"Basilicata"},{nome:"Prato",sigla:"PO",regione:"Toscana"},{nome:"Ragusa",sigla:"RG",regione:"Sicilia"},{nome:"Ravenna",sigla:"RA",regione:"Emilia-Romagna"},{nome:"Reggio di Calabria",sigla:"RC",regione:"Calabria"},{nome:"Reggio nell'Emilia",sigla:"RE",regione:"Emilia-Romagna"},{nome:"Rieti",sigla:"RI",regione:"Lazio"},{nome:"Rimini",sigla:"RN",regione:"Emilia-Romagna"},{nome:"Roma",sigla:"RM",regione:"Lazio"},{nome:"Rovigo",sigla:"RO",regione:"Veneto"},{nome:"Salerno",sigla:"SA",regione:"Campania"},{nome:"Sassari",sigla:"SS",regione:"Sardegna"},{nome:"Savona",sigla:"SV",regione:"Liguria"},{nome:"Siena",sigla:"SI",regione:"Toscana"},{nome:"Siracusa",sigla:"SR",regione:"Sicilia"},{nome:"Sondrio",sigla:"SO",regione:"Lombardia"},{nome:"Taranto",sigla:"TA",regione:"Puglia"},{nome:"Teramo",sigla:"TE",regione:"Abruzzo"},{nome:"Terni",sigla:"TR",regione:"Umbria"},{nome:"Torino",sigla:"TO",regione:"Piemonte"},{nome:"Trapani",sigla:"TP",regione:"Sicilia"},{nome:"Trento",sigla:"TN",regione:"Trentino-Alto Adige/S\xfcdtirol"},{nome:"Treviso",sigla:"TV",regione:"Veneto"},{nome:"Trieste",sigla:"TS",regione:"Friuli-Venezia Giulia"},{nome:"Udine",sigla:"UD",regione:"Friuli-Venezia Giulia"},{nome:"Valle d'Aosta",sigla:"AO",regione:"Valle d'Aosta"},{nome:"Varese",sigla:"VA",regione:"Lombardia"},{nome:"Venezia",sigla:"VE",regione:"Veneto"},{nome:"Verbano-Cusio-Ossola",sigla:"VB",regione:"Piemonte"},{nome:"Vercelli",sigla:"VC",regione:"Piemonte"},{nome:"Verona",sigla:"VR",regione:"Veneto"},{nome:"Vibo Valentia",sigla:"VV",regione:"Calabria"},{nome:"Vicenza",sigla:"VI",regione:"Veneto"},{nome:"Viterbo",sigla:"VT",regione:"Lazio"}],R=o(58),L=o.n(R);function P(e){return L()(e.trim()).replace(/ +/g,"-")}var B={setHash:function(e){var i="#".concat(encodeURI(P(e)));history.pushState?history.pushState(null,null,i):location.hash=i},hashConsumer:function(e){return Object(n.useEffect)((function(){var i=decodeURI(window.location.hash.substr(1));i&&e(i)}),[])},prettify:P},I=o(19),E=o(135),M=o(129),N=o(134),V=o(130),F=o(131),G=o(132),D=o(133),U="ALL_REGIONS",k="Sicilia",_="Piemonte",Z="Marche",q="Toscana",Y="Campania",H="Puglia",W="Veneto",J="Lombardia",X="Emilia-Romagna",K="Sardegna",Q="Molise",$="Calabria",ee="Abruzzo",ie="Lazio",oe="Liguria",ae="Friuli-Venezia Giulia",ne="Basilicata",te="Umbria",re="Valle d'Aosta",se={name:{it:"\ud83d\udfe7 Zona Arancione",en:"\ud83d\udfe7 Orange Zone"},details:[{it:"\ud83c\udf63 Bar aperti per asporto fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",en:"\ud83c\udf63 Bars open for takeaway until 6pm. Restaurants open for takeaway until 10pm. The home-delivery service is always allowed."},{it:"\ud83d\udecd Negozi aperti.",en:"\ud83d\udecd Shops are open."},{it:"\u274c Centri commerciali chiusi durante i festivi e prefestivi.",en:"\u274c Shopping malls are closed on holidays and days before holidays."},{it:"\ud83d\udc6d Si pu\xf2 uscire (al massimo in coppia) per raggiungere amici e parenti una volta al giorno. Senza cambiare comune.",en:"\ud83d\udc6d It is allowed to travel (not more than 2 people at a time) to friends and relatives once a day without changing municipality."},{it:"\ud83d\udecf Coprifuoco dalle 22.00 alle 05.00.",en:"\ud83d\udecf Curfew from 10 PM to 5 AM."},{it:"\ud83d\udcdd Serve l'autocertificazione per gli spostamenti al di fuori del comune.",en:"\ud83d\udcdd Self-certification is needed to justify shifts across municipalities."},{it:"\ud83c\udf0e Puoi andare nella seconda casa ma solo se nel tuo comune.",en:"\ud83c\udf0e You can travel to the second home just if it is in your same town."},{it:"\u26d4\ufe0f Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessit\xe0 o motivi di salute.",en:"\u26d4\ufe0f It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons."}],moreDetails:[{it:"\ud83d\udc6d Si pu\xf2 uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessit\xe0.",en:"\ud83d\udc6d Shifts across municipalities are allowed for work requirements, health needs, and situations of need."},{it:"\ud83d\uded2 Si pu\xf2 uscire dal comune per fruire di servizi altrimenti non disponibili o economicamente pi\xf9 convenienti.",en:"\ud83d\uded2 It is allowed to travel between different municipalities to access services which are not-available/more-expensive in your own municipality."},{it:"\ud83c\udfda Consentito il rientro alla propria residenza, domicilio o abitazione.",en:"\ud83c\udfda The return to one's residence, domicile or home is allowed."},{it:"\u26ea Consentito l' accesso ai luoghi di culto e funzioni religiose.",en:"\u26ea It is allowed to access places of worship and religious functions."},{it:"\ud83c\udfc3 Consentito svolgere attivit\xe0 sportiva e motoria all'aperto, senza uscire dal comune.",en:"\ud83c\udfc3 It is allowed to carry out outdoor sports and motor activities, without crossing municipality boundaries."}]},le=[Object(x.a)(Object(x.a)({},se),{},{from:"2021/01/09 00:00:00",to:"2021/01/10 23:59:59",regions:U}),Object(x.a)(Object(x.a)({},se),{},{from:"2021/01/11 00:00:00",to:"2021/01/16 23:59:59",regions:[J,W,X,$,k]}),Object(x.a)(Object(x.a)({},se),{},{from:"2021/01/17 00:00:00",to:"2021/02/15 23:59:59",regions:[re,_,oe,X,W,ae,ie,Z,te,ee,H,$]})],ce=[{it:"\ud83c\udf7b Bar e ristoranti aperti fino alle 18. Asporto e consegna a domicilio fino alle 22.",en:"\ud83c\udf7b Bar and resturants are open until 6 PM. Take-away and home-delivery available until 10 PM."},{it:"\ud83d\udecd Negozi e centri commerciali aperti.",en:"\ud83d\udecd Shops and shopping malls are open."},{it:"\ud83d\udecf Coprifuoco dalle 22.00 alle 05.00.",en:"\ud83d\udecf Curfew from 10 PM to 5 AM."},{it:"\u2747\ufe0f Musei aperti dal Luned\xec al Venerd\xec.",en:"\u2747\ufe0f  Museums open from Monday to Friday."},{it:"\ud83d\udcdd Ci si pu\xf2 muovere liberamente, senza autocertificazione.",en:"\ud83d\udcdd It is allowed to have shifts without carrying the self-certification."},{it:"\u26d4\ufe0f Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessit\xe0 o motivi di salute.",en:"\u26d4\ufe0f It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons."}],ge=[{it:"\ud83c\udfda Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.",en:"\ud83c\udfda The return to one's residence, domicile or home is allowed, with the exception of second homes outside the region."},{it:"\u26ea Consentito l' accesso ai luoghi di culto e funzioni religiose.",en:"\u26ea It is allowed to access places of worship and religious functions."},{it:"\ud83c\udfc3 Consentito svolgere attivit\xe0 sportiva e motoria all'aperto.",en:"\ud83c\udfc3 It is allowed to carry out outdoor sports and motor activities."}],me=([].concat(ce,[{it:"\u2705 Consentiti spostamenti in altre regioni gialle.",en:"\u2705 Shifts to other yellow regions are allowed."}]),{name:{it:"\ud83d\udfe8 Zona Gialla Rafforzata",en:"\ud83d\udfe8 Strengthened Yellow Zone"},details:[].concat(ce,[{it:"\ud83d\udeab Non si possono superare i confini della regione.",en:"\ud83d\udeab Shifts towards other regions are not allowed."}]),moreDetails:ge}),ue=[Object(x.a)(Object(x.a)({},me),{},{from:"2021/01/07 00:00:00",to:"2021/01/08 23:59:59",regions:U}),Object(x.a)(Object(x.a)({},me),{},{from:"2021/01/11 00:00:00",to:"2021/01/16 23:59:59",regions:[_,Z,q,Y,H,"Trentino-Alto Adige/S\xfcdtirol",K,Q,ee,ie,oe,ae,ne,te,re]}),Object(x.a)(Object(x.a)({},me),{},{from:"2021/01/17 00:00:00",to:"2021/02/15 23:59:59",regions:[q,K,Q,Y,ne],cities:["TN"]})],de={name:{it:"\ud83d\udfe5 Zona Rossa",en:"\ud83d\udfe5 Red Zone"},details:[{it:"\ud83c\udf63 Bar aperti per asporto fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",en:"\ud83c\udf63 Bars open for takeaway until 6pm. Restaurants open for takeaway until 10pm. The home-delivery service is always allowed."},{it:"\ud83d\udecd Negozi e mercati chiusi ad esclusione di generi alimentari e prima necessit\xe0.",en:"\ud83d\udecd All the shops and markets are closed except for groceries and convinence stores."},{it:"\ud83d\udecf Coprifuoco dalle 22.00 alle 05.00.",en:"\ud83d\udecf Curfew from 10 PM to 5 AM."},{it:"\ud83d\udcdd Serve l'autocertificazione per qualsiasi spostamento.",en:"\ud83d\udcdd Self-certification is needed to justify any shift."}],moreDetails:[{it:"\ud83d\udc6d Si pu\xf2 uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessit\xe0.",en:"\ud83d\udc6d Shifts across municipalities are allowed for work requirements, health needs, and situations of need."},{it:"\ud83c\udfda Consentito il rientro alla propria residenza, domicilio o abitazione.",en:"\ud83c\udfda The return to one's residence, domicile or home is allowed."},{it:"\u26ea Consentito l' accesso ai luoghi di culto e funzioni religiose.",en:"\u26ea It is allowed to access places of worship and religious functions."},{it:"\ud83c\udfc3 Consentito svolgere attivit\xe0 sportiva (correre) esclusivamente all'aperto ed individualmente.",en:"\ud83c\udfc3 It is allowed to carry out sports activities (running) exclusively outdoors and individually."},{it:"\ud83d\udeb6 Consentito svolgere attivit\xe0 motoria (camminare) in prossimit\xe0 della propria abitazione, con mascherina.\u200d",en:"\ud83d\udeb6 It is allowed to carry out motor activities (walking) near your home, with the mask."},{it:"\u2705 Aperte edicole, tabaccai, farmacie e parafarmacie.",en:"\u2705 Newsstand, tobacconists, pharmacies, and parapharmacies are open."}]},pe=[Object(x.a)(Object(x.a)({},de),{},{name:"\ud83d\udfe5 Epifania",from:"2021/01/05 00:00:00",to:"2021/01/06 23:59:59",regions:U}),Object(x.a)(Object(x.a)({},de),{},{details:[{it:"\ud83d\udc6d Si pu\xf2 uscire (al massimo in coppia) per raggiungere amici e parenti una volta al giorno. Senza cambiare comune.",en:"\ud83d\udc6d It is allowed to travel (not more than 2 people at a time) to friends and relatives once a day without changing municipality."}].concat(Object(I.a)(de.details)),from:"2021/01/17 00:00:00",to:"2021/02/15 23:59:59",regions:[J],cities:["BZ"]}),Object(x.a)(Object(x.a)({},de),{},{details:[{it:"\ud83d\ude45 Non \xe8 consentito fare visita ad amici e parenti.",en:"\ud83d\ude45 You cannot travel to friends or relatives."}].concat(Object(I.a)(de.details)),from:"2021/01/17 00:00:00",to:"2021/02/15 23:59:59",regions:[k]})],be=o(36),fe=o.n(be),he=[].concat(Object(I.a)(ue),Object(I.a)(le),Object(I.a)(pe)),je=function(e,i){return e&&i&&fe.a.isEqual(e.name,i.name)&&fe.a.isEqual(e.details,i.details)&&fe.a.isEqual(e.moreDetails,i.moreDetails)},Oe=function(e,i,o,a){var n=a[o-1];return fe.a.isEqualWith(i,n,je)?(e.pop(),e.push(Object(x.a)(Object(x.a)({},n),{},{to:i.to}))):e.push(i),e};var ve=Object(c.a)((function(e){return{copyrightBox:{marginTop:e.spacing(4)},contributeBox:{marginTop:e.spacing(.4)},cardRoot:{marginBottom:e.spacing(2)},dateFromTo:{fontSize:18},rulesList:{marginTop:4},rule:{fontSize:17},cardActions:{justifyContent:"center",marginBottom:10}}})),Ce={FROM:{it:"Da",en:"From"},TO:{it:"al",en:"to"},MORE_INFO:{it:"Scopri di pi\xf9",en:"More"},NO_RESULTS:{it:"Nessun risultato trovato",en:"Nothing was found"}};function Se(e){return new Date(e).toLocaleDateString()}function Te(e){var i=f(),o=Object(m.a)(i,1)[0];return"string"===typeof e?e:e[o]}function ze(e){var i=e.rule,o=Object(n.useState)(!1),t=Object(m.a)(o,2),r=t[0],s=t[1],l=f(),c=Object(m.a)(l,1)[0],g=ve(),d=i.from,p=i.to,b=i.details,h=i.moreDetails,j=[d?"".concat(Ce.FROM[c]," ").concat(Se(d)):"",p?"".concat(Ce.TO[c]," ").concat(Se(p)):""].join(" ");return Object(a.jsxs)(M.a,{className:g.cardRoot,variant:"outlined",children:[Object(a.jsxs)(V.a,{children:[j&&Object(a.jsxs)(u.a,{className:g.dateFromTo,color:"textPrimary",gutterBottom:!0,children:["\ud83d\udcc6 ",j]}),i.name&&Object(a.jsx)(u.a,{variant:"h5",component:"h2",children:Te(i.name)}),b&&Object(a.jsx)(u.a,{color:"textPrimary",className:g.rulesList,children:Object(a.jsx)(F.a,{component:"nav",dense:!0,children:[].concat(Object(I.a)(b),Object(I.a)(r?h:[])).map((function(e){return Object(a.jsx)(G.a,{button:!0,children:Object(a.jsx)(D.a,{classes:{primary:g.rule},primary:Te(e)})},e)}))})})]}),!r&&h&&Object(a.jsx)(N.a,{classes:{root:g.cardActions},children:Object(a.jsx)(E.a,{size:"medium",color:"primary",variant:"outlined",onClick:function(){return s(!0)},children:Ce.MORE_INFO[c]})})]})}function xe(e){var i=e.province,o=ve(),n=function(e){var i=Date.now();return he.filter((function(e){return!e.to||new Date(e.to)>i})).filter((function(i){return i.regions===U||i.regions&&i.regions.includes(e.regione)||i.cities&&i.cities.includes(e.sigla)})).sort((function(e,i){return new Date(e.from)-new Date(i.from)})).reduce(Oe,[])}(i),t=f(),r=Object(m.a)(t,1)[0];return Object(a.jsx)(u.a,{variant:"body2",color:"textPrimary",className:o.copyrightBox,children:0===n.length?Object(a.jsx)(d.a,{textAlign:"center",fontSize:20,color:"red",children:Ce.NO_RESULTS[r]}):n.map((function(e){return Object(a.jsx)(ze,{rule:e},"".concat(i.nome,"-").concat(e.from,"-").concat(e.to))}))})}var Ae={CITY:{it:"Provincia",en:"City"},CHANGE_LANGUAGE:{it:"Cambia provincia",en:"Change city"}};function ye(){var e=Object(n.useState)(),i=Object(m.a)(e,2),o=i[0],t=i[1],r=f(),s=Object(m.a)(r,1)[0],l=function(e){t(e),B.setHash((null===e||void 0===e?void 0:e.nome)||"")};return B.hashConsumer((function(e){var i=w.find((function(i){return B.prettify(i.nome.trim()).toUpperCase()===e.toUpperCase().trim()}));i&&t(i)})),Object(a.jsxs)(a.Fragment,{children:[o?Object(a.jsxs)(u.a,{color:"textPrimary",fontFamily:"Roboto",children:[Object(a.jsx)(d.a,{textAlign:"left",fontSize:15,children:Object(a.jsx)(v.a,{onClick:function(){return l(null)},children:Ae.CHANGE_LANGUAGE[s]})}),Object(a.jsxs)(d.a,{textAlign:"center",fontSize:"h4.fontSize",children:["\ud83d\udccd ",o.nome]})]}):Object(a.jsx)(d.a,{display:"flex",justifyContent:"center",children:Object(a.jsx)(y.a,{id:"province",onChange:function(e,i){return l(i)},options:w,getOptionLabel:function(e){return e.nome},style:{width:"80%",marginTop:20},renderInput:function(e){return Object(a.jsx)(A.a,Object(x.a)(Object(x.a)({},e),{},{label:Ae.CITY[s],variant:"outlined"}))}})}),o&&Object(a.jsx)(xe,{province:o})]})}var we=Object(c.a)((function(e){return{container:{marginTop:e.spacing(5)}}}));function Re(){var e=we();return Object(a.jsxs)(g.a,{maxWidth:"sm",className:e.container,children:[Object(a.jsx)(O,{}),Object(a.jsx)(ye,{}),Object(a.jsx)(z,{})]})}var Le=o(47),Pe=o(61),Be=Object(Pe.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:Le.a.A400},background:{default:"#fff"}}});r.a.render(Object(a.jsxs)(l.a,{theme:Be,children:[Object(a.jsx)(s.a,{}),Object(a.jsx)(b,{children:Object(a.jsx)(Re,{})})]}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.b3ce6bec.chunk.js.map