(this["webpackJsonpposso-uscire"]=this["webpackJsonpposso-uscire"]||[]).push([[0],{84:function(e,i,o){"use strict";o.r(i);var a=o(5),n=o(0),t=o(11),r=o.n(t),s=o(139),l=o(138),c=o(125),g=o(137),m=o(14),u=o(37),d=o(141),p=["it","en"];function b(){var e=(window.navigator.languages?window.navigator.languages[0]:window.navigator.userLanguage||window.navigator.language).substr(0,2);return p.includes(e)?e:"en"}var f=Object(n.createContext)(null);function h(e){var i=e.children,o=Object(n.useState)(b()),t=Object(m.a)(o,2),r=t[0],s=t[1];return Object(a.jsx)(f.Provider,{value:[r,s],children:i})}function j(){return Object(n.useContext)(f)}var O=Object(c.a)((function(e){return{subTitle:{marginTop:e.spacing(6),marginBottom:e.spacing(1)},changeLanguageBox:{marginBottom:e.spacing(1)}}})),v={MAY_I_EXIT:{it:"Posso uscire?",en:"Can I get out?"},INSERT_CITY:{it:"Inserisci la tua provincia per conoscere le restrizioni.",en:"Enter your city to know the restrictions."}};function C(){var e=O(),i=j(),o=Object(m.a)(i,2),n=o[0],t=o[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{gutterBottom:!0,children:Object(a.jsx)(d.a,{textAlign:"center",fontSize:"h3.fontSize",fontFamily:"Roboto",m:1,children:v.MAY_I_EXIT[n]})}),Object(a.jsx)(d.a,{textAlign:"center",className:e.changeLanguageBox,onClick:function(){return t("it"===n?"en":"it")},children:"it"===n?"\ud83c\udde9\ud83c\uddec Switch to English":"\ud83c\uddee\ud83c\uddf9 Passa all' Italiano"}),Object(a.jsx)(u.a,{className:e.subTitle,color:"textPrimary",children:Object(a.jsx)(d.a,{textAlign:"left",fontSize:20,children:v.INSERT_CITY[n]})})]})}var S=o(128),T=Object(c.a)((function(e){return{copyrightBox:{marginTop:e.spacing(10),marginBottom:e.spacing(5)},contributeBox:{marginTop:e.spacing(.7)},lastUpdateBox:{marginBottom:e.spacing(1)}}})),z={DISCLAIMER_1:{it:"Le informazioni fornite potrebbero essere incomplete o non corrette.",en:"The information provided may be incomplete or incorrect."},DISCLAIMER_2:{it:"Attenersi sempre a fonti governative ufficiali.",en:"Always stick to official government sources."},CONTRIBUTE:{it:"Contribuisci al progetto su Github",en:"Contribute on Github"},LAST_UPDATE:{it:"Ultimo aggiornamento: ",en:"Last update: "}};function x(){var e=T(),i=j(),o=Object(m.a)(i,1)[0];return Object(a.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",className:e.copyrightBox,children:[Object(a.jsxs)(d.a,{className:e.lastUpdateBox,fontWeight:"fontWeightBold",children:[z.LAST_UPDATE[o]," ",new Date(1610751756435).toLocaleDateString()]}),Object(a.jsx)(d.a,{children:z.DISCLAIMER_1[o]}),Object(a.jsx)(d.a,{children:z.DISCLAIMER_2[o]}),Object(a.jsx)(d.a,{className:e.contributeBox,children:Object(a.jsx)(S.a,{href:"http://github.com/Guglio95/posso-uscire",children:z.CONTRIBUTE[o]})})]})}var w=o(12),A=o(140),y=o(142),R=[{nome:"Agrigento",sigla:"AG",regione:"Sicilia"},{nome:"Alessandria",sigla:"AL",regione:"Piemonte"},{nome:"Ancona",sigla:"AN",regione:"Marche"},{nome:"Arezzo",sigla:"AR",regione:"Toscana"},{nome:"Ascoli Piceno",sigla:"AP",regione:"Marche"},{nome:"Asti",sigla:"AT",regione:"Piemonte"},{nome:"Avellino",sigla:"AV",regione:"Campania"},{nome:"Bari",sigla:"BA",regione:"Puglia"},{nome:"Barletta-Andria-Trani",sigla:"BT",regione:"Puglia"},{nome:"Belluno",sigla:"BL",regione:"Veneto"},{nome:"Benevento",sigla:"BN",regione:"Campania"},{nome:"Bergamo",sigla:"BG",regione:"Lombardia"},{nome:"Biella",sigla:"BI",regione:"Piemonte"},{nome:"Bologna",sigla:"BO",regione:"Emilia-Romagna"},{nome:"Bolzano/Bozen",sigla:"BZ",regione:"Trentino-Alto Adige/S\xfcdtirol"},{nome:"Brescia",sigla:"BS",regione:"Lombardia"},{nome:"Brindisi",sigla:"BR",regione:"Puglia"},{nome:"Cagliari",sigla:"CA",regione:"Sardegna"},{nome:"Caltanissetta",sigla:"CL",regione:"Sicilia"},{nome:"Campobasso",sigla:"CB",regione:"Molise"},{nome:"Carbonia-Iglesias",sigla:"CI",regione:"Sardegna"},{nome:"Caserta",sigla:"CE",regione:"Campania"},{nome:"Catania",sigla:"CT",regione:"Sicilia"},{nome:"Catanzaro",sigla:"CZ",regione:"Calabria"},{nome:"Chieti",sigla:"CH",regione:"Abruzzo"},{nome:"Como",sigla:"CO",regione:"Lombardia"},{nome:"Cosenza",sigla:"CS",regione:"Calabria"},{nome:"Cremona",sigla:"CR",regione:"Lombardia"},{nome:"Crotone",sigla:"KR",regione:"Calabria"},{nome:"Cuneo",sigla:"CN",regione:"Piemonte"},{nome:"Enna",sigla:"EN",regione:"Sicilia"},{nome:"Fermo",sigla:"FM",regione:"Marche"},{nome:"Ferrara",sigla:"FE",regione:"Emilia-Romagna"},{nome:"Firenze",sigla:"FI",regione:"Toscana"},{nome:"Foggia",sigla:"FG",regione:"Puglia"},{nome:"Forl\xec-Cesena",sigla:"FC",regione:"Emilia-Romagna"},{nome:"Frosinone",sigla:"FR",regione:"Lazio"},{nome:"Genova",sigla:"GE",regione:"Liguria"},{nome:"Gorizia",sigla:"GO",regione:"Friuli-Venezia Giulia"},{nome:"Grosseto",sigla:"GR",regione:"Toscana"},{nome:"Imperia",sigla:"IM",regione:"Liguria"},{nome:"Isernia",sigla:"IS",regione:"Molise"},{nome:"L'Aquila",sigla:"AQ",regione:"Abruzzo"},{nome:"La Spezia",sigla:"SP",regione:"Liguria"},{nome:"Latina",sigla:"LT",regione:"Lazio"},{nome:"Lecce",sigla:"LE",regione:"Puglia"},{nome:"Lecco",sigla:"LC",regione:"Lombardia"},{nome:"Livorno",sigla:"LI",regione:"Toscana"},{nome:"Lodi",sigla:"LO",regione:"Lombardia"},{nome:"Lucca",sigla:"LU",regione:"Toscana"},{nome:"Macerata",sigla:"MC",regione:"Marche"},{nome:"Mantova",sigla:"MN",regione:"Lombardia"},{nome:"Massa-Carrara",sigla:"MS",regione:"Toscana"},{nome:"Matera",sigla:"MT",regione:"Basilicata"},{nome:"Medio Campidano",sigla:"VS",regione:"Sardegna"},{nome:"Messina",sigla:"ME",regione:"Sicilia"},{nome:"Milano",sigla:"MI",regione:"Lombardia"},{nome:"Modena",sigla:"MO",regione:"Emilia-Romagna"},{nome:"Monza e della Brianza",sigla:"MB",regione:"Lombardia"},{nome:"Napoli",sigla:"NA",regione:"Campania"},{nome:"Novara",sigla:"NO",regione:"Piemonte"},{nome:"Nuoro",sigla:"NU",regione:"Sardegna"},{nome:"Ogliastra",sigla:"OG",regione:"Sardegna"},{nome:"Olbia-Tempio",sigla:"OT",regione:"Sardegna"},{nome:"Oristano",sigla:"OR",regione:"Sardegna"},{nome:"Padova",sigla:"PD",regione:"Veneto"},{nome:"Palermo",sigla:"PA",regione:"Sicilia"},{nome:"Parma",sigla:"PR",regione:"Emilia-Romagna"},{nome:"Pavia",sigla:"PV",regione:"Lombardia"},{nome:"Perugia",sigla:"PG",regione:"Umbria"},{nome:"Pesaro e Urbino",sigla:"PU",regione:"Marche"},{nome:"Pescara",sigla:"PE",regione:"Abruzzo"},{nome:"Piacenza",sigla:"PC",regione:"Emilia-Romagna"},{nome:"Pisa",sigla:"PI",regione:"Toscana"},{nome:"Pistoia",sigla:"PT",regione:"Toscana"},{nome:"Pordenone",sigla:"PN",regione:"Friuli-Venezia Giulia"},{nome:"Potenza",sigla:"PZ",regione:"Basilicata"},{nome:"Prato",sigla:"PO",regione:"Toscana"},{nome:"Ragusa",sigla:"RG",regione:"Sicilia"},{nome:"Ravenna",sigla:"RA",regione:"Emilia-Romagna"},{nome:"Reggio di Calabria",sigla:"RC",regione:"Calabria"},{nome:"Reggio nell'Emilia",sigla:"RE",regione:"Emilia-Romagna"},{nome:"Rieti",sigla:"RI",regione:"Lazio"},{nome:"Rimini",sigla:"RN",regione:"Emilia-Romagna"},{nome:"Roma",sigla:"RM",regione:"Lazio"},{nome:"Rovigo",sigla:"RO",regione:"Veneto"},{nome:"Salerno",sigla:"SA",regione:"Campania"},{nome:"Sassari",sigla:"SS",regione:"Sardegna"},{nome:"Savona",sigla:"SV",regione:"Liguria"},{nome:"Siena",sigla:"SI",regione:"Toscana"},{nome:"Siracusa",sigla:"SR",regione:"Sicilia"},{nome:"Sondrio",sigla:"SO",regione:"Lombardia"},{nome:"Taranto",sigla:"TA",regione:"Puglia"},{nome:"Teramo",sigla:"TE",regione:"Abruzzo"},{nome:"Terni",sigla:"TR",regione:"Umbria"},{nome:"Torino",sigla:"TO",regione:"Piemonte"},{nome:"Trapani",sigla:"TP",regione:"Sicilia"},{nome:"Trento",sigla:"TN",regione:"Trentino-Alto Adige/S\xfcdtirol"},{nome:"Treviso",sigla:"TV",regione:"Veneto"},{nome:"Trieste",sigla:"TS",regione:"Friuli-Venezia Giulia"},{nome:"Udine",sigla:"UD",regione:"Friuli-Venezia Giulia"},{nome:"Valle d'Aosta",sigla:"AO",regione:"Valle d'Aosta"},{nome:"Varese",sigla:"VA",regione:"Lombardia"},{nome:"Venezia",sigla:"VE",regione:"Veneto"},{nome:"Verbano-Cusio-Ossola",sigla:"VB",regione:"Piemonte"},{nome:"Vercelli",sigla:"VC",regione:"Piemonte"},{nome:"Verona",sigla:"VR",regione:"Veneto"},{nome:"Vibo Valentia",sigla:"VV",regione:"Calabria"},{nome:"Vicenza",sigla:"VI",regione:"Veneto"},{nome:"Viterbo",sigla:"VT",regione:"Lazio"}],L=o(58),P=o.n(L);function B(e){return P()(e.trim()).replace(/ +/g,"-")}var I={setHash:function(e){var i="#".concat(encodeURI(B(e)));history.pushState?history.pushState(null,null,i):location.hash=i},hashConsumer:function(e){return Object(n.useEffect)((function(){var i=decodeURI(window.location.hash.substr(1));i&&e(i)}),[])},prettify:B},E=o(26),M=o(135),N=o(129),V=o(134),F=o(130),G=o(131),U=o(132),D=o(133),k="ALL_REGIONS",_="Sicilia",Z="Piemonte",q="Marche",Y="Toscana",H="Campania",W="Puglia",J="Veneto",X="Lombardia",K="Emilia-Romagna",Q="Sardegna",$="Molise",ee="Calabria",ie="Abruzzo",oe="Lazio",ae="Liguria",ne="Friuli-Venezia Giulia",te="Basilicata",re="Umbria",se="Valle d'Aosta",le={name:{it:"\ud83d\udfe7 Zona Arancione",en:"\ud83d\udfe7 Orange Zone"},details:[{it:"\ud83c\udf63 Bar aperti per asporto fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",en:"\ud83c\udf63 Bars open for takeaway until 6pm. Restaurants open for takeaway until 10pm. The home-delivery service is always allowed."},{it:"\ud83d\udecd Negozi aperti.",en:"\ud83d\udecd Shops are open."},{it:"\u274c Centri commerciali chiusi durante i festivi e prefestivi.",en:"\u274c Shopping malls are closed on holidays and days before holidays."},{it:"\ud83d\udecf Coprifuoco dalle 22.00 alle 05.00.",en:"\ud83d\udecf Curfew from 10 PM to 5 AM."},{it:"\ud83d\udcdd Serve l'autocertificazione per gli spostamenti al di fuori del comune.",en:"\ud83d\udcdd Self-certification is needed to justify shifts across municipalities."},{it:"\ud83c\udf0e Puoi andare nella seconda casa ma solo se nel tuo comune.",en:"\ud83c\udf0e You can travel to the second home just if it is in your same town."},{it:"\u26d4\ufe0f Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessit\xe0 o motivi di salute.",en:"\u26d4\ufe0f It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons."}],moreDetails:[{it:"\ud83d\udc6d Si pu\xf2 uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessit\xe0.",en:"\ud83d\udc6d Shifts across municipalities are allowed for work requirements, health needs, and situations of need."},{it:"\ud83d\uded2 Si pu\xf2 uscire dal comune per fruire di servizi altrimenti non disponibili o economicamente pi\xf9 convenienti.",en:"\ud83d\uded2 It is allowed to travel between different municipalities to access services which are not-available/more-expensive in your own municipality."},{it:"\ud83c\udfda Consentito il rientro alla propria residenza, domicilio o abitazione.",en:"\ud83c\udfda The return to one's residence, domicile or home is allowed."},{it:"\u26ea Consentito l' accesso ai luoghi di culto e funzioni religiose.",en:"\u26ea It is allowed to access places of worship and religious functions."},{it:"\ud83c\udfc3 Consentito svolgere attivit\xe0 sportiva e motoria all'aperto, senza uscire dal comune.",en:"\ud83c\udfc3 It is allowed to carry out outdoor sports and motor activities, without crossing municipality boundaries."}]},ce=[Object(w.a)(Object(w.a)({},le),{},{from:"2021/01/09 00:00:00",to:"2021/01/10 23:59:59",regions:k}),Object(w.a)(Object(w.a)({},le),{},{from:"2021/01/11 00:00:00",to:"2021/01/15 23:59:59",regions:[X,J,K,ee,_]}),Object(w.a)(Object(w.a)({},le),{},{from:"2021/01/16 00:00:00",to:"2021/02/15 23:59:59",regions:[se,Z,ae,K,J,ne,oe,q,re,ie,W,ee]})],ge=[{it:"\ud83c\udf7b Bar e ristoranti aperti fino alle 18. Asporto e consegna a domicilio fino alle 22.",en:"\ud83c\udf7b Bar and resturants are open until 6 PM. Take-away and home-delivery available until 10 PM."},{it:"\ud83d\udecd Negozi e centri commerciali aperti.",en:"\ud83d\udecd Shops and shopping malls are open."},{it:"\ud83d\udecf Coprifuoco dalle 22.00 alle 05.00.",en:"\ud83d\udecf Curfew from 10 PM to 5 AM."},{it:"\u2747\ufe0f Musei aperti dal Luned\xec al Venerd\xec.",en:"\u2747\ufe0f  Museums open from Monday to Friday."},{it:"\ud83d\udcdd Ci si pu\xf2 muovere liberamente, senza autocertificazione.",en:"\ud83d\udcdd It is allowed to have shifts without carrying the self-certification."},{it:"\u26d4\ufe0f Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessit\xe0 o motivi di salute.",en:"\u26d4\ufe0f It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons."}],me=[{it:"\ud83c\udfda Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.",en:"\ud83c\udfda The return to one's residence, domicile or home is allowed, with the exception of second homes outside the region."},{it:"\u26ea Consentito l' accesso ai luoghi di culto e funzioni religiose.",en:"\u26ea It is allowed to access places of worship and religious functions."},{it:"\ud83c\udfc3 Consentito svolgere attivit\xe0 sportiva e motoria all'aperto.",en:"\ud83c\udfc3 It is allowed to carry out outdoor sports and motor activities."}],ue=([].concat(ge,[{it:"\u2705 Consentiti spostamenti in altre regioni gialle.",en:"\u2705 Shifts to other yellow regions are allowed."}]),{name:{it:"\ud83d\udfe8 Zona Gialla Rafforzata",en:"\ud83d\udfe8 Strengthened Yellow Zone"},details:[].concat(ge,[{it:"\ud83d\udeab Non si possono superare i confini della regione.",en:"\ud83d\udeab Shifts towards other regions are not allowed."}]),moreDetails:me}),de=[Object(w.a)(Object(w.a)({},ue),{},{from:"2021/01/07 00:00:00",to:"2021/01/08 23:59:59",regions:k}),Object(w.a)(Object(w.a)({},ue),{},{from:"2021/01/11 00:00:00",to:"2021/01/15 23:59:59",regions:[Z,q,Y,H,W,"Trentino-Alto Adige/S\xfcdtirol",Q,$,ie,oe,ae,ne,te,re,se]}),Object(w.a)(Object(w.a)({},ue),{},{from:"2021/01/16 00:00:00",to:"2021/02/15 23:59:59",regions:[Y,Q,$,H,te],cities:["TN"]})],pe={name:{it:"\ud83d\udfe5 Zona Rossa",en:"\ud83d\udfe5 Red Zone"},details:[{it:"\ud83c\udf63 Bar aperti per asporto fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",en:"\ud83c\udf63 Bars open for takeaway until 6pm. Restaurants open for takeaway until 10pm. The home-delivery service is always allowed."},{it:"\ud83d\udecd Negozi e mercati chiusi ad esclusione di generi alimentati e prima necessit\xe0.",en:"\ud83d\udecd All the shops and markets are closed except for groceries and convinence stores."},{it:"\ud83d\udc6d Si pu\xf2 uscire (al massimo in coppia) per raggiungere amici e parenti una volta al giorno. Senza cambiare comune.",en:"\ud83d\udc6d It is allowed to travel (not more than 2 people at a time) to friends and relatives once a day without changing municipality."},{it:"\ud83d\udecf Coprifuoco dalle 22.00 alle 05.00.",en:"\ud83d\udecf Curfew from 10 PM to 5 AM."},{it:"\ud83d\udcdd Serve l'autocertificazione per qualsiasi spostamento.",en:"\ud83d\udcdd Self-certification is needed to justify any shift."}],moreDetails:[{it:"\ud83d\udc6d Si pu\xf2 uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessit\xe0.",en:"\ud83d\udc6d Shifts across municipalities are allowed for work requirements, health needs, and situations of need."},{it:"\ud83c\udfda Consentito il rientro alla propria residenza, domicilio o abitazione.",en:"\ud83c\udfda The return to one's residence, domicile or home is allowed."},{it:"\u26ea Consentito l' accesso ai luoghi di culto e funzioni religiose.",en:"\u26ea It is allowed to access places of worship and religious functions."},{it:"\ud83c\udfc3 Consentito svolgere attivit\xe0 sportiva (correre) esclusivamente all'aperto ed individualmente.",en:"\ud83c\udfc3 It is allowed to carry out sports activities (running) exclusively outdoors and individually."},{it:"\ud83d\udeb6 Consentito svolgere attivit\xe0 motoria (camminare) in prossimit\xe0 della propria abitazione, con mascherina.\u200d",en:"\ud83d\udeb6 It is allowed to carry out motor activities (walking) near your home, with the mask."},{it:"\u2705 Aperte edicole, tabaccai, farmacie e parafarmacie.",en:"\u2705 Newsstand, tobacconists, pharmacies, and parapharmacies are open."}]},be=[Object(w.a)(Object(w.a)({},pe),{},{name:"\ud83d\udfe5 Epifania",from:"2021/01/05 00:00:00",to:"2021/01/06 23:59:59",regions:k}),Object(w.a)(Object(w.a)({},pe),{},{from:"2021/01/16 00:00:00",to:"2021/02/15 23:59:59",regions:[X,_],cities:["BZ"]})],fe=o(36),he=o.n(fe),je=[].concat(Object(E.a)(de),Object(E.a)(ce),Object(E.a)(be)),Oe=function(e,i){return e&&i&&he.a.isEqual(e.name,i.name)&&he.a.isEqual(e.details,i.details)&&he.a.isEqual(e.moreDetails,i.moreDetails)},ve=function(e,i,o,a){var n=a[o-1];return he.a.isEqualWith(i,n,Oe)?(e.pop(),e.push(Object(w.a)(Object(w.a)({},n),{},{to:i.to}))):e.push(i),e};var Ce=Object(c.a)((function(e){return{copyrightBox:{marginTop:e.spacing(4)},contributeBox:{marginTop:e.spacing(.4)},cardRoot:{marginBottom:e.spacing(2)},dateFromTo:{fontSize:18},rulesList:{marginTop:4},rule:{fontSize:17},cardActions:{justifyContent:"center",marginBottom:10}}})),Se={FROM:{it:"Da",en:"From"},TO:{it:"al",en:"to"},MORE_INFO:{it:"Scopri di pi\xf9",en:"More"},NO_RESULTS:{it:"Nessun risultato trovato",en:"Nothing was found"}};function Te(e){return new Date(e).toLocaleDateString()}function ze(e){var i=j(),o=Object(m.a)(i,1)[0];return"string"===typeof e?e:e[o]}function xe(e){var i=e.rule,o=Object(n.useState)(!1),t=Object(m.a)(o,2),r=t[0],s=t[1],l=j(),c=Object(m.a)(l,1)[0],g=Ce(),d=i.from,p=i.to,b=i.details,f=i.moreDetails,h=[d?"".concat(Se.FROM[c]," ").concat(Te(d)):"",p?"".concat(Se.TO[c]," ").concat(Te(p)):""].join(" ");return Object(a.jsxs)(N.a,{className:g.cardRoot,variant:"outlined",children:[Object(a.jsxs)(F.a,{children:[h&&Object(a.jsxs)(u.a,{className:g.dateFromTo,color:"textPrimary",gutterBottom:!0,children:["\ud83d\udcc6 ",h]}),i.name&&Object(a.jsx)(u.a,{variant:"h5",component:"h2",children:ze(i.name)}),b&&Object(a.jsx)(u.a,{color:"textPrimary",className:g.rulesList,children:Object(a.jsx)(G.a,{component:"nav",dense:!0,children:[].concat(Object(E.a)(b),Object(E.a)(r?f:[])).map((function(e){return Object(a.jsx)(U.a,{button:!0,children:Object(a.jsx)(D.a,{classes:{primary:g.rule},primary:ze(e)})},e)}))})})]}),!r&&f&&Object(a.jsx)(V.a,{classes:{root:g.cardActions},children:Object(a.jsx)(M.a,{size:"medium",color:"primary",variant:"outlined",onClick:function(){return s(!0)},children:Se.MORE_INFO[c]})})]})}function we(e){var i=e.province,o=Ce(),n=function(e){var i=Date.now();return je.filter((function(e){return!e.to||new Date(e.to)>i})).filter((function(i){return i.regions===k||i.regions&&i.regions.includes(e.regione)||i.cities&&i.cities.includes(e.sigla)})).sort((function(e,i){return new Date(e.from)-new Date(i.from)})).reduce(ve,[])}(i),t=j(),r=Object(m.a)(t,1)[0];return Object(a.jsx)(u.a,{variant:"body2",color:"textPrimary",className:o.copyrightBox,children:0===n.length?Object(a.jsx)(d.a,{textAlign:"center",fontSize:20,color:"red",children:Se.NO_RESULTS[r]}):n.map((function(e){return Object(a.jsx)(xe,{rule:e},"".concat(i.nome,"-").concat(e.from,"-").concat(e.to))}))})}var Ae={CITY:{it:"Provincia",en:"City"},CHANGE_LANGUAGE:{it:"Cambia provincia",en:"Change city"}};function ye(){var e=Object(n.useState)(),i=Object(m.a)(e,2),o=i[0],t=i[1],r=j(),s=Object(m.a)(r,1)[0],l=function(e){t(e),I.setHash((null===e||void 0===e?void 0:e.nome)||"")};return I.hashConsumer((function(e){var i=R.find((function(i){return I.prettify(i.nome.trim()).toUpperCase()===e.toUpperCase().trim()}));i&&t(i)})),Object(a.jsxs)(a.Fragment,{children:[o?Object(a.jsxs)(u.a,{color:"textPrimary",fontFamily:"Roboto",children:[Object(a.jsx)(d.a,{textAlign:"left",fontSize:15,children:Object(a.jsx)(S.a,{onClick:function(){return l(null)},children:Ae.CHANGE_LANGUAGE[s]})}),Object(a.jsxs)(d.a,{textAlign:"center",fontSize:"h4.fontSize",children:["\ud83d\udccd ",o.nome]})]}):Object(a.jsx)(d.a,{display:"flex",justifyContent:"center",children:Object(a.jsx)(y.a,{id:"province",onChange:function(e,i){return l(i)},options:R,getOptionLabel:function(e){return e.nome},style:{width:"80%",marginTop:20},renderInput:function(e){return Object(a.jsx)(A.a,Object(w.a)(Object(w.a)({},e),{},{label:Ae.CITY[s],variant:"outlined"}))}})}),o&&Object(a.jsx)(we,{province:o})]})}var Re=Object(c.a)((function(e){return{container:{marginTop:e.spacing(5)}}}));function Le(){var e=Re();return Object(a.jsxs)(g.a,{maxWidth:"sm",className:e.container,children:[Object(a.jsx)(C,{}),Object(a.jsx)(ye,{}),Object(a.jsx)(x,{})]})}var Pe=o(47),Be=o(61),Ie=Object(Be.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:Pe.a.A400},background:{default:"#fff"}}});r.a.render(Object(a.jsxs)(l.a,{theme:Ie,children:[Object(a.jsx)(s.a,{}),Object(a.jsx)(h,{children:Object(a.jsx)(Le,{})})]}),document.querySelector("#root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.6818fb57.chunk.js.map