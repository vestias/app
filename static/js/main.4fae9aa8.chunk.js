(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(34),i=a.n(s),r=(a(43),a(44),a(13)),l=a(3),o=a(7),j=a(8),d=a(10),p=a(9),m=(a(45),a(18)),b=a(17),h=a(0),u=[],O=0,x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var c,s=Object(b.a)(n.props.Array.entries());try{for(s.s();!(c=s.n()).done;){var i=Object(m.a)(c.value,2),r=(i[0],i[1]);0==O?(O=-1,u.push(Object(h.jsx)("div",{className:"carousel-item active","data-interval":"5000",children:Object(h.jsx)("img",{src:r.src,className:"d-block w-100",alt:"...",height:"700"})}))):u.push(Object(h.jsx)("div",{className:"carousel-item","data-interval":"5000",children:Object(h.jsx)("img",{src:r.src,className:"d-block w-100",alt:"...",height:"700"})}))}}catch(l){s.e(l)}finally{s.f()}return n}return Object(j.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"home_slider",children:Object(h.jsxs)("div",{id:"carouselExampleInterval",className:"carousel slide","data-ride":"carousel",children:[Object(h.jsx)("div",{className:"carousel-inner",children:u}),Object(h.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleInterval",role:"button","data-slide":"prev",children:[Object(h.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(h.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(h.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleInterval",role:"button","data-slide":"next",children:[Object(h.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(h.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}}]),a}(c.a.Component),v=(a(47),a(35)),g=a.n(v);function f(e,t){var a=e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),n=new RegExp("^"+a,"i");return t.filter((function(e){return n.test(e.name)}))}function w(e){return e.name}function N(e){return Object(h.jsx)("span",{children:e.name})}var C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).placeholder="",n.onChange=function(e,t){var a=t.newValue;t.method;n.setState({value:a})},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.setState({suggestions:f(t,n.props.data)})},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.shouldRenderSuggestions=function(){return!0},n.storeInputReference=function(e){null!==e&&(n.input=e.input)},n.onButtonClick=function(){n.input.focus()},n.placeholder=e.placeholder,n.state={value:"",suggestions:[]},n}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:this.placeholder,value:t,onChange:this.onChange};return Object(h.jsx)(g.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:w,renderSuggestion:N,inputProps:n,shouldRenderSuggestions:this.shouldRenderSuggestions,ref:this.storeInputReference})}}]),a}(c.a.Component),y=[{name:"Appartements",year:1972},{name:"locaux commerciaux et autres",year:2e3},{name:"Maisons et Villas"},{name:"Plateaux Bureaux"},{name:"Terrains et Fermes"}],A=[{name:"A LOUER"},{name:"A VENDRE"},{name:"LOCATION DE VACANCES"}],S=function(){return Object(h.jsxs)("div",{className:"searchBox",children:[Object(h.jsx)("h1",{className:"title5",children:"Trouvez votre logement"}),Object(h.jsxs)("div",{className:"search_Container",children:[Object(h.jsx)("div",{className:"area1",children:Object(h.jsx)("button",{class:"resetB",children:"r\xe9initialiser"})}),Object(h.jsx)("div",{className:"area2",children:Object(h.jsx)(r.b,{to:"/Decouvert?type=shirt&Categorie=blue",children:Object(h.jsx)("button",{className:"SearchB",children:"Recherche"})})}),Object(h.jsx)("div",{className:"area3",children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",className:"SearchA",placeholder:"Mots cl\xe9s"})})}),Object(h.jsx)("div",{className:"area4",children:Object(h.jsx)("form",{children:Object(h.jsx)(C,{placeholder:"Categories",data:A})})}),Object(h.jsx)("div",{className:"area5",children:Object(h.jsx)("form",{children:Object(h.jsx)(C,{placeholder:"Type",data:y})})})]})]})},T=a(29),D=a(15),E=a(37),R=a.n(E),k=(a(75),a(76),a(77),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e,t,a=(e={dots:!1,accessibility:!0,adaptiveHeight:!0,centerMode:!0,className:"sliider",slidesToShow:3,draggable:!0},Object(D.a)(e,"centerMode",!1),Object(D.a)(e,"arrows",!1),Object(D.a)(e,"autoplay",!0),Object(D.a)(e,"autoplaySpeed",3e3),e),n=[],c=Object(b.a)([{type:"A VENDRE",price:"42.840.000 MAD",surface:"102",lits:"4",bains:"3"},{type:"A LOUER",price:"1.500.000 MAD",surface:"125",lits:"2",bains:"1"},{type:"A VENDRE",price:"1.200.000 MAD",surface:"240",lits:"2",bains:"1"},{type:"A VENDRE",price:"2.000.000 MAD",surface:"172",lits:"3",bains:"2"}].entries());try{for(c.s();!(t=c.n()).done;){var s=Object(m.a)(t.value,2),i=(s[0],s[1]);n.push(Object(h.jsxs)("div",{className:"slide_content",children:[Object(h.jsxs)("div",{className:"slide_top",children:[Object(h.jsx)(r.b,{to:"Fiche",style:{textDecoration:"none"},children:Object(h.jsx)("span",{href:"fiche",children:i.type})})," ",Object(h.jsx)("span",{children:i.price})]}),Object(h.jsxs)("div",{className:"slide_bottom",children:[Object(h.jsxs)("span",{children:[i.surface," m2"]}),Object(h.jsxs)("span",{children:[i.lits," lits"]}),Object(h.jsxs)("span",{children:[i.bains," bains"]})]})]}))}}catch(l){c.e(l)}finally{c.f()}return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container2",children:Object(h.jsx)(R.a,Object(T.a)(Object(T.a)({},a),{},{children:n}))})})}}]),a}(c.a.Component)),V=(a(78),function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"title5",children:"Annonces recommand\xe9es"})})});fetch("http://localhost:8080/users").then((function(e){return e.json()})).then((function(e){return console.log(e[0].email)}));var M=[{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Studio-Anfa-Sky-Casa-Anfa.jpg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Salon-studio-Casa-Anfa.jpg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"}],I=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"App"}),Object(h.jsx)(x,{Array:M}),Object(h.jsx)(S,{}),Object(h.jsx)(V,{}),Object(h.jsx)("div",{id:"container",children:Object(h.jsx)(k,{})}),Object(h.jsxs)("div",{className:"buy_container",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"title6",children:"J'achete ma maison"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{width:"1000px",src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Entre%CC%81e-de-l-appartement.jpg"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet"})]})]})]})]})}}]),a}(c.a.Component),P=(a(79),a(80),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsx)("div",{className:"c1",children:Object(h.jsx)(r.b,{to:"Fiche",children:Object(h.jsx)("img",{className:"img",src:"https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",alt:"alt"})})}),Object(h.jsxs)("div",{className:"c2",children:[Object(h.jsxs)("div",{className:"title-price",children:[Object(h.jsx)("p",{className:"item_title",children:this.props.title}),Object(h.jsxs)("span",{children:[this.props.price," DH"]})]}),Object(h.jsx)("p",{className:"item_text",children:this.props.description}),Object(h.jsx)(r.b,{to:"Fiche",children:Object(h.jsx)("button",{className:"detail_button",children:"Details"})})]})]})})}}]),a}(c.a.Component)),q=function(){var e=window.location.search,t=new URLSearchParams(e),a=t.get("type");console.log(a);var n=t.get("Categorie");console.log(n);var c,s=[],i=Object(b.a)([{title:"Appartement \xc0 Vendre \xe0 Nejma Tanger",price:"20.000.000",description:" Appartement \xc0 Vendre \xe0 Tanger Particulier met en vente un joli appartement meubl\xe9 au premier \xe9tage d\u2019une r\xe9sidence r\xe9cente (moins de 10 ans) strat\xe9giquement situ\xe9 au quartier Nejma \xe0 Tanger. \u2013 Superficie : 106 m\xb2. \u2013 Composition : Une entr\xe9e, un salon marocain avec grand balcon, 2 chambres \xe0 coucher avec rangements et"},{title:"Appartement \xc0 Vendre \xe0 Nejma Tanger",price:"45.000.000",description:" Appartement \xc0 Vendre \xe0 Tanger Particulier met en vente un joli appartement meubl\xe9 au premier \xe9tage d\u2019une r\xe9sidence r\xe9cente (moins de 10 ans) strat\xe9giquement situ\xe9 au quartier Nejma \xe0 Tanger. \u2013 Superficie : 106 m\xb2. \u2013 Composition : Une entr\xe9e, un salon marocain avec grand balcon, 2 chambres \xe0 coucher avec rangements et"},{title:"Appartement \xc0 Vendre \xe0 Nejma Tanger",price:"12.000.000",description:" Appartement \xc0 Vendre \xe0 Tanger Particulier met en vente un joli appartement meubl\xe9 au premier \xe9tage d\u2019une r\xe9sidence r\xe9cente (moins de 10 ans) strat\xe9giquement situ\xe9 au quartier Nejma \xe0 Tanger. \u2013 Superficie : 106 m\xb2. \u2013 Composition : Une entr\xe9e, un salon marocain avec grand balcon, 2 chambres \xe0 coucher avec rangements et"},{title:"Appartement \xc0 Vendre \xe0 Nejma Tanger",price:"25.000.000",description:" Appartement \xc0 Vendre \xe0 Tanger Particulier met en vente un joli appartement meubl\xe9 au premier \xe9tage d\u2019une r\xe9sidence r\xe9cente (moins de 10 ans) strat\xe9giquement situ\xe9 au quartier Nejma \xe0 Tanger. \u2013 Superficie : 106 m\xb2. \u2013 Composition : Une entr\xe9e, un salon marocain avec grand balcon, 2 chambres \xe0 coucher avec rangements et"},{title:"Appartement \xc0 Vendre \xe0 Nejma Tanger",price:"17.000.000",description:" Appartement \xc0 Vendre \xe0 Tanger Particulier met en vente un joli appartement meubl\xe9 au premier \xe9tage d\u2019une r\xe9sidence r\xe9cente (moins de 10 ans) strat\xe9giquement situ\xe9 au quartier Nejma \xe0 Tanger. \u2013 Superficie : 106 m\xb2. \u2013 Composition : Une entr\xe9e, un salon marocain avec grand balcon, 2 chambres \xe0 coucher avec rangements et"}].entries());try{for(i.s();!(c=i.n()).done;){var r=Object(m.a)(c.value,2),l=(r[0],r[1]);s.push(Object(h.jsx)(P,{title:l.title,price:l.price,description:l.description}))}}catch(o){i.e(o)}finally{i.f()}return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{}),Object(h.jsx)("div",{children:Object(h.jsx)(x,{Array:[{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Studio-Anfa-Sky-Casa-Anfa.jpg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Salon-studio-Casa-Anfa.jpg"},{src:"https://www.immobilio.ma/wp-content/uploads/2021/02/Terrain-Ain-Diab.jpeg"}]})}),Object(h.jsx)(S,{}),Object(h.jsx)("h1",{}),Object(h.jsxs)("div",{children:[s,Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("a",{href:"/Decouvert",children:"\xab"}),Object(h.jsx)("a",{href:"/Decouvert",children:"1"}),Object(h.jsx)("a",{className:"active",href:"/Decouvert",children:"2"}),Object(h.jsx)("a",{href:"/Decouvert",children:"3"}),Object(h.jsx)("a",{href:"/Decouvert",children:"4"}),Object(h.jsx)("a",{href:"/Decouvert",children:"5"}),Object(h.jsx)("a",{href:"/Decouvert",children:"6"}),Object(h.jsx)("a",{href:"/Decouvert",children:"\xbb"})]})]})]})},F=(a(81),function(){return Object(h.jsx)("div",{className:"contact_div",children:Object(h.jsxs)("div",{className:"grid-container5",children:[Object(h.jsxs)("div",{className:"a1",children:[Object(h.jsx)("p",{className:"title1",children:"Vous souhaitez faire appel \xe0 nos services ?"}),Object(h.jsx)("p",{className:"title2",children:"N\u2019h\xe9sitez pas \xe0 nous contacter via WhatsApp ou via le formulaire ci-apr\xe8s :"}),Object(h.jsx)("p",{className:"title3",children:"(+212) 06 60 16 32 32"}),Object(h.jsx)("p",{className:"title3",children:"Contact@immobilio.ma"}),Object(h.jsx)("p",{className:"title3",children:"201, Rue Mustapha Al Ma\xe2ni, 2\xe8me \xe9tage, Bureau 9, Casablanca."})]}),Object(h.jsx)("div",{className:"a2",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("p",{children:"Nom & Pr\xe9nom *"}),Object(h.jsx)("input",{type:"text",name:"name"}),Object(h.jsx)("p",{children:"T\xe9l\xe9phone *"}),Object(h.jsx)("input",{type:"text",name:"T\xe9l\xe9phone"}),Object(h.jsx)("p",{children:"Email"}),Object(h.jsx)("input",{type:"text",name:"Email"}),Object(h.jsx)("p",{children:"Message"}),Object(h.jsx)("input",{className:"Message",type:"text",name:"Message"}),Object(h.jsx)("input",{type:"submit",value:"Envoyer"})]})})]})})}),U=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Error: Page does not exist!"})})},L=a(38),B=a.n(L),_=(a(88),a(89),a(12)),G=[{original:"https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",thumbnail:"https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg"},{original:"https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg",thumbnail:"https://www.immobilio.ma/wp-content/uploads/2021/04/Grand-Salon-Marocain.jpeg"},{original:"https://www.immobilio.ma/wp-content/uploads/2021/04/Entre%CC%81e-appartement.jpeg",thumbnail:"https://www.immobilio.ma/wp-content/uploads/2021/04/Entre%CC%81e-appartement.jpeg"},{original:"https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-1.jpeg",thumbnail:"https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-1.jpeg"},{original:"https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-2.jpeg",thumbnail:"https://www.immobilio.ma/wp-content/uploads/2021/04/Chambre-2.jpeg"}],z=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),window.scrollTo(0,0),n}return Object(j.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"fiche",children:[Object(h.jsx)("p",{className:"firstp",children:" Appartement \xc0 Vendre \xe0 Nejma Tanger"}),Object(h.jsx)("p",{className:"secondp",children:" \xc0 VENDRE    1.590.000 MAD"}),Object(h.jsxs)("div",{className:"grid-container2",children:[Object(h.jsx)("div",{className:"c11",children:Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("div",{className:"c4",children:Object(h.jsx)(_.SocialIcon,{url:"https://twitter.com/"})}),Object(h.jsx)("div",{className:"c5",children:Object(h.jsx)(_.SocialIcon,{url:"https://facebook.com"})}),Object(h.jsx)("div",{className:"c6",children:Object(h.jsx)(_.SocialIcon,{url:"https://instagram.com"})}),Object(h.jsx)("div",{className:"c7",children:Object(h.jsx)(_.SocialIcon,{url:"https://youtube.com"})})]})}),Object(h.jsxs)("div",{className:"c22",children:[" ",Object(h.jsx)(B.a,{items:G})]}),Object(h.jsx)("div",{className:"c33",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("p",{children:"EN SAVOIR PLUS SUR CETTE PROPRI\xc9T\xc9"}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Votre nom"}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"Votre adresse email"}),Object(h.jsx)("input",{type:"tel",name:"tel",placeholder:"Votre num\xe9ro de t\xe9lephone"}),Object(h.jsx)("input",{type:"submit",value:"CONTACTER"})]})})]}),Object(h.jsxs)("div",{className:"tabs",children:[Object(h.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","data-toggle":"tab",href:"#tabs-1",role:"tab",children:"Description"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link","data-toggle":"tab",href:"#tabs-2",role:"tab",children:"Details technique du fiche"})})]}),Object(h.jsxs)("div",{className:"tab-content",children:[Object(h.jsxs)("div",{className:"tab-pane active",id:"tabs-1",role:"tabpanel",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("p",{children:"IMMOBILIO met en location de vacances une magnifique villa avec piscine et \xe0 seulement 100 m\xe8tres de la plage, situ\xe9e sur la Route c\xf4ti\xe8re d\u2019Azemmour, r\xe9gion Tnin Chtouka \xe0 15 min de Sidi Rehal et 50 min de Casablanca."}),Object(h.jsxs)("p",{children:["\u2013 Composition :",Object(h.jsx)("br",{}),"\u2013 Hall d\u2019entr\xe9e.",Object(h.jsx)("br",{}),"\u2013 Un grand salon moderne avec chemin\xe9e.",Object(h.jsx)("br",{}),"\u2013 Une cuisine ouverte.",Object(h.jsx)("br",{}),"\u2013 3 Chambres \xe0 coucher dont 1 suite parentale avec salle de bain priv\xe9e.",Object(h.jsx)("br",{}),"\u2013 1 Salles de bain avec douche.",Object(h.jsx)("br",{}),"\u2013 Un grand jardin avec piscine.",Object(h.jsx)("br",{}),"\u2013 Garage pour une voiture.",Object(h.jsx)("br",{}),"\u2013 Un puit."]}),Object(h.jsx)("p",{children:"Prix d\xe9gressif selon la dur\xe9e souhait\xe9e / Minimum 3 nuit\xe9es."}),Object(h.jsx)("p",{children:"Contactez-nous pour toute demande d\u2019infos ou r\xe9servation !"})]}),Object(h.jsx)("p",{})]}),Object(h.jsx)("div",{className:"tab-pane",id:"tabs-2",role:"tabpanel",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("p",{children:"Chambres: 2"}),Object(h.jsx)("p",{children:"Salles de bain: 2"}),Object(h.jsx)("p",{children:"Etages: 1"}),Object(h.jsx)("p",{children:"Superficie: 106 m\xb2"}),Object(h.jsx)("p",{children:"Type: Appartements"}),Object(h.jsx)("p",{children:"Ville: Tanger"})]})})]})]})]})}}]),a}(n.Component),J=(a(95),function(){return Object(h.jsx)("header",{className:"container-fluid",children:Object(h.jsxs)("nav",{className:"container-nav navbar navbar-expand-lg navbar-light px-5",children:[Object(h.jsx)("a",{className:"navbar-brand font-weight-bold",href:"/Accueil",children:Object(h.jsx)("img",{alt:"alt",src:"https://www.immobilio.ma/wp-content/uploads/2018/09/Logo-01.png"})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",itemscope:!0,itemType:"http://www.schema.org/SiteNavigationElement",children:[Object(h.jsx)("li",{className:"nav-item",itemprop:"name",children:Object(h.jsx)("a",{className:"nav-link",href:"/Accueil",itemprop:"url",children:"Accueil"})}),Object(h.jsx)("li",{className:"nav-item",itemprop:"name",children:Object(h.jsx)("a",{className:"nav-link",href:"/Decouvert",itemprop:"url",children:"Decouverte"})}),Object(h.jsx)("li",{className:"nav-item",itemprop:"name",children:Object(h.jsx)("a",{className:"nav-link",href:"/Contact",itemprop:"url",children:"Contact"})}),Object(h.jsx)("li",{className:"nav-item",itemprop:"name",children:Object(h.jsx)("a",{className:"nav-link",href:"/Contact",itemprop:"url",children:"Connexion"})})]})})]})})});a(96);var W=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:""}),Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(r.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(J,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",component:I,exact:!0}),Object(h.jsx)(l.a,{path:"/Accueil",component:I,exact:!0}),Object(h.jsx)(l.a,{path:"/Decouvert",component:q}),Object(h.jsx)(l.a,{path:"/Contact",component:F}),Object(h.jsx)(l.a,{path:"/Fiche",component:z}),Object(h.jsx)(l.a,{component:U})]})]})})}),Object(h.jsxs)("footer",{children:[Object(h.jsxs)("div",{class:"footer-links-container",children:[Object(h.jsxs)("div",{class:"links1",children:[Object(h.jsx)("h3",{children:"Contact"}),Object(h.jsx)("p",{children:"E-mail:"}),Object(h.jsx)("span",{children:"Contact@immobilio.ma"}),Object(h.jsx)("p",{children:"T\xe9l / WhatsApp :"}),Object(h.jsx)("span",{children:"(+212) 0660163232"})]}),Object(h.jsxs)("div",{class:"links2",children:[Object(h.jsx)("h3",{children:"Besoin d\u2019aide ?"}),Object(h.jsx)("span",{children:"Publier une annonce"}),Object(h.jsx)("span",{children:"Trouver une maison"}),Object(h.jsx)("span",{children:"Conditions d\u2019utilisation"})]}),Object(h.jsxs)("div",{class:"links3",children:[Object(h.jsx)("h3",{children:"Suivez-nous sur"}),Object(h.jsxs)("div",{class:"icons-footer",children:[Object(h.jsx)("div",{class:"ts",children:Object(h.jsx)(_.SocialIcon,{style:{height:40,width:40},bgColor:"#fff",fgcolor:"#1a789a",url:"https://twitter.com/"})}),Object(h.jsx)("div",{children:Object(h.jsx)(_.SocialIcon,{bgColor:"#fff",style:{height:40,width:40},fgcolor:"#1a789a",url:"https://facebook.com"})}),Object(h.jsx)("div",{children:Object(h.jsx)(_.SocialIcon,{bgColor:"#fff",style:{height:40,width:40},fgcolor:"#1a789a",url:"https://instagram.com"})}),Object(h.jsx)("div",{children:Object(h.jsx)(_.SocialIcon,{bgColor:"#fff",style:{height:40,width:40},fgcolor:"#1a789a",url:"https://youtube.com"})})]}),Object(h.jsx)("img",{alt:"alt",src:"https://www.immobilio.ma/wp-content/uploads/2018/09/Logo-01.png"})]})]}),Object(h.jsx)("div",{class:"cpy",children:"Copyright \xa9 2021. Tous droits r\xe9serv\xe9s."})]})]})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root")),X()}},[[99,1,2]]]);
//# sourceMappingURL=main.4fae9aa8.chunk.js.map