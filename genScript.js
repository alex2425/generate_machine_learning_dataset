   
    function download() 
    {
      var data = '';
      var tableData = [];
      var firstname = [
        'Günter',
        'Tobias',
        'Günter',
        'Maria',
        'Katy',
        'Mariele',
        'Heinz-Walter',
        'Reinhart',
        'Susanna',
        'Andy',
        'Leopoldine',
        'Jennifer',
        'Leonie',
        'Anette',
        'Annelie',
        'Magarete',
        'Ronny',
        'Trude',
        'Geraldine',
        'Imre',
        'Eitel',
        'Hendrik',
        'Salih',
        'Irmela',
        'Horst-Günter',
        'Regina',
        'Matthias',
        'Fabienne',
        'Tomislav',
        'Louise',
        'Eckard',
        'Stanislaw',
        'Gusti',
        'Hubert',
        'Celal',
        'Hans-Herbert',
        'Marina',
        'Irmi',
        'Rolf-Dieter',
        'Lucie',
        'Ilja',
        'Cord',
        'Lilija',
        'Jürgen',
        'Ada',
        'Niklas',
        'Nurten',
        'Liliana',
        'Horst-Peter',
        'Henri',
        'Leszek',
        'Riza',
        'Insa',
        'Tassilo',
        'Marcella',
        'Ria',
        'Remo',
        'Balthasar',
        'Ismail',
        'Marjan',
        'Kenan',
        'Ottomar',
        'Nicolas',
        'Jeanette',
        'Nurettin',
        'Jelena',
        'Sonja',
        'Dominik',
        'Edelbert',
        'Sophie',
        'Veli',
        'Samuel',
        'Nadine',
        'Oskar',
        'Otfried',
        'Paulina',
        'Oliver',
        'Pamela',
        'Freia',
        'Knut',
        'Jobst',
        'Lilo',
        'Clemens',
        'Susan',
        'Adolfine',
        'Claus-Peter',
        'Anita',
        'Ditmar',
        'Laurenz',
        'Gottlieb',
        'John',
        'Meral',
        'Gertrud',
        'Cornelius',
        'Rosi',
        'Hedda',
        'Manuel',
        'Chantal',
        'Ulrike',
        'Lea'
      ];

      var lastname = [
        'Knab',
        'Weser',
        'Schachtner',
        'Fassbender',
        'Dörfler',
        'Kunde',
        'Roder',
        'Malinowski',
        'Arenz',
        'Meiners',
        'Reindl',
        'Sing',
        'Bock',
        'Landmann',
        'Wasmuth',
        'Heckel',
        'Irle',
        'Homburg',
        'Nagler',
        'Weisenburger',
        'Pleines',
        'Mehling',
        'Schmalzl',
        'Kurzhals',
        'Nutz',
        'Brinkmann',
        'Mittendorf',
        'Semrau',
        'Haubrich',
        'Helbig',
        'Senft',
        'Salzmann',
        'Uhlig',
        'Brech',
        'Rieß',
        'Berz',
        'Burgdorf',
        'Fock',
        'Eicher',
        'Morath',
        'Geschke',
        'Köppen',
        'Hein',
        'Dreger',
        'Kleinke',
        'Fach',
        'Bäge',
        'Seibel',
        'Leiner',
        'Wölfer',
        'Domin',
        'Redel',
        'Bart',
        'Kaufmann',
        'Prause',
        'Senioren',
        'Huch',
        'Abeln',
        'Knight',
        'Eichmann',
        'Blair',
        'Kus',
        'Glinka',
        'Offermann',
        'Alberts',
        'Riewe',
        'Henneberger',
        'Ranke',
        'Klostermann',
        'Lohmann',
        'Alten',
        'Dachser',
        'Veith',
        'Kupka',
        'Ettl',
        'Naumann',
        'Krämert',
        'Ebel',
        'Sippel',
        'Gräser',
        'Rieper',
        'Remmers',
        'Doege',
        'Winterhalter',
        'Marquard',
        'Pätzold',
        'Rösner',
        'Ammon',
        'Teubner',
        'Beil',
        'Rieger',
        'Salamon',
        'Ehl',
        'Schmied',
        'Eckes',
        'Rusch',
        'Klima',
        'Kampa',
        'Burckhardt',
        'Falter'
      ];

      var street = [
        'Landrat-Jost-Straße',
        'Klausstraße',
        'Barbarossastraße',
        'Johannisberg',
        'Waisenhausstraße',
        'Badstraße',
        'Kobergstraße',
        'Zillestraße',
        'Peter-Dausenau-Straße',
        'Im Rosenacker',
        'Gellertstraße',
        'Rheinische Straße',
        'Altfelder Straße',
        'Bassenheimer Straße',
        'Gerhardstraße',
        'Heubergsweg',
        'Im Grändchen',
        'Konsul-Cassel-Straße',
        'Maischeider Weg',
        'Burg',
        'Franz-Mehring-Straße',
        'Haehlstraße',
        'Rohrkampstraße',
        'Neuhof',
        'Warschauer Straße',
        'Kohlwiese',
        'Mähltalstraße',
        'Ebbinghook',
        'Marienburgstraße',
        'Schultenhof',
        'Breitscheider Straße',
        'Bleidenberger Weg',
        'Vorster Straße',
        'Am Berler Kamp',
        'Lättringhauser Straße',
        'Kaiser-Heinrich-Straße',
        'Am Flärchen',
        'Raingasse',
        'Bodelschwinghstraße',
        'Im Niederdorf',
        'Ruhrbachstraße',
        'An der Kirchenwiese',
        'An der Ziegelei',
        'Schreinerstraße',
        'Gräne Gasse',
        'Am Wehebach',
        'In der Grafschaft',
        'Kringelweg',
        'Barthstraße',
        'Schwabacher Straße',
        'Westholz',
        'Vorster Straße',
        'Hetzert',
        'Sölder Straße',
        'Im Kehr',
        'Berger Weg',
        'Hölzerne Ecke',
        'Holthausen',
        'Steinmetzstraße',
        'Finnentroper Straße',
        'Schachtweg',
        'Rehkopfweg',
        'Johann-Kalb-Straße',
        'Stäbecker Weg',
        'Hilbuskamp',
        'Bierlingsweg',
        'Weetfelder Straße',
        'Waldblick',
        'Hähnerkamp',
        'Wolfshovener Straße',
        'Birkenbähl',
        'Ludwig-Uhland-Straße',
        'Spechtstraße',
        'Lärchenhof',
        'Hillscheider Weg',
        'Salzwiese',
        'An der Kapelle',
        'Marbach',
        'Bäderstraße',
        'Hembergener Straße',
        'Weilburger Straße',
        'Nellheck',
        'Dreisbachtal',
        'Tannenhof',
        'Rentmeisterskamp',
        'Hombrede',
        'Servaisstraße',
        'Papenbusch',
        'Illericher Straße',
        'Marienau',
        'Apfelbaumer Weg',
        'Bärenbachstraße',
        'Taunusblick',
        'Rigaer Straße',
        'Am Schulberg',
        'Rauenberg',
        'Ahr-Rotweinstraße',
        'Wännenberg',
        'Reinharzstraße',
        'Hufschmiedskamp'
      ];
	  
      var city = [
        'Untermünkheim',
        'Hamburg',
        'Ofterdingen',
        'Blaufelden',
        'Wurmsham',
        'Breitenbach',
        'Lathen',
        'Brettin',
        'Oberotterbach',
        'Beinhausen',
        'Süderhöft',
        'Scheibenhardt',
        'Schieren',
        'Lobbach',
        'Dorstadt',
        'Masburg',
        'Maasbüll',
        'Rickert',
        'Berod',
        'Burgbernheim',
        'Algenstedt',
        'Diespeck',
        'Weener',
        'Hährsberg',
        'Dreis',
        'Duisburg',
        'Duisburg',
        'Augsburg',
        'Wolfsburg',
        'Renquishausen',
        'Mertingen',
        'Nürburg',
        'Urmitz',
        'Schülp',
        'Moosinning',
        'Saarbrücken',
        'Aichtal',
        'Oschersleben',
        'Eisenhüttenstadt',
        'Kieselbronn',
        'Pforzheim',
        'Ellenberg',
        'Fockbek',
        'Dissen am Teutoburger Wald',
        'Weiler',
        'Nottuln',
        'Sternenfels',
        'Morbach',
        'Röfingen',
        'Apensen',
        'Westerkappeln',
        'Berlin',
        'Holzheim',
        'Remscheid',
        'Oberweis',
        'Reifferscheid',
        'Homberg',
        'Sien',
        'Laupheim',
        'Rohrbach',
        'Fichtenau',
        'Dudenhofen',
        'Maasholm',
        'Redwitz an der Rodach',
        'Haserich',
        'Orlenbach',
        'Kassel',
        'Saarburg',
        'Rimbach',
        'Bad Dürkheim an der Weinstraße',
        'Högsdorf',
        'Hohenau',
        'Waltrop',
        'Bitzen',
        'Hambrücken',
        'Dinklage',
        'Röderland',
        'Raisting',
        'Bottrop',
        'Velden',
        'Ludwigsburg',
        'Dirmstein',
        'Inzigkofen',
        'Wilsleben',
        'Riedelberg',
        'Oberhausen-Rheinhausen',
        'Buhlenberg',
        'Spelle',
        'Ramhusen',
        'Waltenhofen',
        'Riederich',
        'Lambertsberg',
        'Tapfheim',
        'Rammingen',
        'Güllesheim',
        'Bühl',
        'Adelmannsfelden',
        'Stafstedt',
        'Presseck',
        'Theisseil'
      ]

      var emailprovider = [
        '@gmail.com',
        '@yahoo.com',
        '@web.de',
        '@outlook.com',
        '@gmx.de',
        '@mail.de',
        '@aol.com',
        '@t-online.de',
        '@1und1.de'
      ]

      var bankname = [
        'Pommersche Volksbank',
        'Volksbank Wismar -alt-',
        'Sparkasse Mecklenburg-Nordwest',
        'Sparkasse Parchim-Lübz',
        'Sparkasse Mecklenburg-Schwerin',
        'Volks- und Raiffeisenbank',
        'Raiffeisen-Volksbank -alt-',
        'VR-Bank',
        'Bundesbank',
        'Müritz-Sparkasse',
        'Sparkasse Neubrandenburg-Demmin',
        'Sparkasse Uecker-Randow',
        'Sparkasse Vorpommern',
        'Sparkasse Mecklenburg-Strelitz',
        'Raiffeisenbank Mecklenburger Seenplatte',
        'Volksbank Raiffeisenbank',
        'Raiffeisenbank Malchin',
        'Volksbank Demmin',
        'VR-Bank Uckermark-Randow',
        'UniCredit Bank - HypoVereinsbank',
        'Mittelbrandenburgische Sparkasse in Potsdam',
        'Sparkasse Prignitz',
        'Sparkasse Ostprignitz-Ruppin',
        'Volks- und Raiffeisenbank Prignitz',
        'Raiffeisenbank Ostprignitz-Ruppin',
        'VR-Bank Fläming',
        'Brandenburger Bank',
        'Volksbank Rathenow',
        'UniCredit Bank - HypoVereinsbank',
        'Sparkasse Barnim',
        'Stadtsparkasse Schwedt',
        'Sparkasse Märkisch-Oderland',
        'Sparkasse Oder-Spree',
        'Sparkasse Uckermark',
        'Raiffeisenbank-Volksbank Oder-Spree',
        'VR Bank Fürstenwalde Seelow Wriezen',
        'UniCredit Bank - HypoVereinsbank',
        'Sparkasse Spree-Neiße',
        'Sparkasse Elbe-Elster',
        'Sparkasse Niederlausitz',
        'VR Bank Lausitz',
        'VR Bank Forst',
        'Spreewaldbank',
        'Volksbank Spree-Neiße',
        'Bundesbank',
        'Postbank (Giro)',
        'UniCredit Bank - HypoVereinsbank',
        'DONNER & REUSCHEL',
        'Marcard, Stein & Co Bankiers',
        'Sydbank Fil Hamburg',
        'Merck Finck & Co',
        'comdirect bank'
      ]

      var sex =  [
        'm',
        'w'
      ]


      //generate random 1 million mock data and push it into the table 
      for (var i = 0; i <= 1000000; ++i) 
      {
        var randomfirstname = Math.floor(Math.random() * firstname.length);
        var randomlastname = Math.floor(Math.random() * lastname.length);
        var randomstreet = Math.floor(Math.random() * street.length);
		var randomhousNr = houseNumberGen(Math.floor(Math.random() * ( 2 ) + 1 ));
        var randomcity = Math.floor(Math.random() * city.length);
		var randomzipCode = zipGen(5);
        var randomphoneNumber = numberGen(8);
        var randomiban = ibanGen(20);
        var randombank = Math.floor(Math.random() * bankname.length);
        var randomemail = Math.floor(Math.random() * emailprovider.length);
        var randomsex = Math.floor(Math.random() * sex.length);
        var emailName = emailGen(firstname[randomfirstname], lastname[randomlastname]);
        tableData.push(firstname[randomfirstname] + ';' + lastname[randomlastname] + ';' + sex[randomsex] + ';' + street[randomstreet] + ';' + randomhousNr + ';' + randomzipCode + ';' + city[randomcity] + ';' + randomphoneNumber + ';' + emailName.toLowerCase() + emailprovider[randomemail] + ';' + randomiban + ';' + bankname[randombank]);
      }

      //duplicate random the data and push it into the table
      for (var i = 0; i <= 100; ++i) 
      {
        var random = Math.floor(Math.random() * tableData.length);
        tableData.push(tableData[random]);
      }
      //the table get sorted in lines 
      data += tableData.join('\n');
      //creates a link to download 
      const a = document.createElement('a');
      //here you can change your download file type for example to "csv"
      a.href = URL.createObjectURL(new Blob([data], { type: 'text/plain;charset=utf-8' }));
      a.setAttribute('download', 'mockdata.txt');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    }

    //generate the iban numbers randomly
    function ibanGen(length) 
    {
      var result = 'DE'; //prefix for germany start always with (DE)

      for (var i = 0; i < length; i++)
        result += Math.floor(Math.random() * 9);

      return result;
    }

    //generate the email
    function emailGen(firstname, lastname) 
    {
      var email = '';
      var length = firstname.length + lastname.length;
      var name = firstname + lastname;

      for (var i = 0; i < length; i++)
        email += name.charAt(Math.floor(Math.random() * name.length));

      return email;
    }
	
	//generate the phone number 
	function numberGen(length)
	{
		var result = '0';	//prefix start always with 0 (germany)
		var vrw_length = Math.floor(Math.random() * (4 - 2 + 1)) + 2;	//random length between 2-4 for the prefix
		
		for (var i=0;i< vrw_length; ++i)
			result += Math.floor(Math.random() * 9) + 1;
	
		result+='/';
		
		for(var i = 0; i < length; ++i)
			result += Math.floor(Math.random() * 9);
		
		return result;
	}
	
	//generate the zip code
	function zipGen(length)
	{
		var result = '';
		
		for (var i = 0; i < length; i++)
			result += Math.floor(Math.random() * 9) + 1; 

      return result;
	}
	
	//generate the house number 
	function houseNumberGen(length)
	{
		var result = '';
		result += Math.floor(Math.random() * 9) + 1;

		for (var i = 0; i < length; i++)
			result += Math.floor(Math.random() * 9);

      return result;
	}
