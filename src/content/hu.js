/*{
  "header": {
    "name": "Schmelczer András",
    "picture": "/static/me.jpg",
    "about": [
      "Mind a szoftverfejlesztés, mind pedig a design fontos számomra. Élvezem a problémák megoldását. Motivál, hogy hasznos és érdekes projektekben vegyek részt. Szeretek tanulni.",

      "2017-ben kezdtem tanulmányaimat a Budapesti Műszaki és Gazdaságtudományi Egyetem mérnökinformatikus szakán. Azóta is minden félévemet kiváló eredménnyel zártam. Tavaly csatlakoztam a Simonyi Károly Szakkollégium schdesign köréhez. Korábban a Pécsi Tudományegyetem Gyakorló Gimnáziumába jártam, mialatt angol komplex C1-es nyelvvizsgát is szereztem.",

      "Az alábbiakban összeszedtem pár izgalmasabb projektemet. A képekből természetesen csak a megoldások megjelenítés részét lehet látni. Emellett azonban igyekeztem a háttérben zajló folyamatokról is írni, hiszen az igazi kihívások általában ott rejlenek."
    ]
  },
  "timeline": [
    {
      "date": "2018 október - november",
      "title": "Atomreaktor hűtőrendszerének szimulációja",
      "picture": "/static/process-simulator.jpg",
      "description": "Egy csőrendszerben lévő víz hőmérsékletének és áramlásának dinamikus számítása.",
      "more": [
        "A reaktorok (vízmelegítők), szivattyúk, hőcserélők adataiból és a csőrendszer felépítéséből kiszámolja az alkalmazás, hogy melyik időpillanatban hol, mennyi víz folyik, és az milyen meleg.",
        "Ezt egy érdekes gráfelméleti algoritmussal, illetve egy mátrix ügyes manipulálásával éri el.",
        "A szimuláció backendje python Flask-ben lett írva. Ezzel kommunikálni egy REST API-n keresztül lehet. A megjelenítés HTML5 canvas segítségével történik."
      ]
    },
    {
      "date": "2018 október - november",
      "title": "Gráf szerkesztő alkalmazás",
      "picture": "/static/process-simulator-input.jpg",
      "description": "A fentebb látható szoftverhez tartozó csőrendszert lehet vele létrehozni.",
      "more": [
        "A grafikus és felhasználóbarát szerkesztőprogram a végeredményt megfelelő JSON formátumba alakítja, amit a szimulátor már könnyedén fel tud dolgozni.",
        "Szerkeszteni klikkeléssel, illetve drag & droppal lehetséges. Az alkalmazásban továbbá lehet a vízmelegítők, szivattyúk stb. paramétereit is beállítani.",
        "Java-ban lett írva, a megjelenítést a JavaFX biztosítja."
      ]
    },
    {
      "date": "2018 július - augusztus",
      "title": "Közlekedés szimuláció",
      "picture": "/static/sim.jpg",
      "description": "A modellek Blenderben, a szimuláció Unityben készült.",
      "more": [
        "Egy versenyhez készült program. REST API-kon keresztül lehet a lámpák színét változtatni és a szimulációt befolyásolni, (akár még tweet-et is lehet beküldeni), az autók pedig ettől függően közlekednek, esetlegesen karamboloznak és felrobbannak.",
        "Az egész érdekessége, hogy egy szerver-kliens architektúrát valósít meg, a szervezés egyszerűbbé tétele végett. Izgalmas kihívás volt a netes kommunikációból fakadó laggot kompenzálni.",
        "Az összes képen látható modellt és animációt én készítettem. A scriptelés C# segítségével történt."
      ]
    },
    {
      "date": "2018 június",
      "title": "Színszerkesztő",
      "picture": "/static/szinezo.jpg",
      "description": "Egy innovatív color grader képekhez.",
      "more": [
        "Ki lehet választani bizonyos színeket, és a többi színt az előbbiektől lévő távolságának függvényében lehet módosítani, telitettséget, színezettségét változtatni.",
        "Egyelőre proof of concept stádiumban van, viszont tervezem befejezni.",
        "A színes gombokra való kattintással lehet az opciók közt váltani. Színes gombot a nagy körbe való kattintással lehet létrehozni (mozgatni pedig drag & droppal).",
        { "type": "a", "href": "/szinezo", "text": "schmelczer.hu/szinezo" }
      ]
    },
    {
      "date": "2017 ősz",
      "title": "Platform játék",
      "picture": "/static/platform.png",
      "description": "Írtam egy 3D-s játékot C-ben az SDL 1.2 segítségével.",
      "more": [
        "A pályák véletlenszerűen generálódnak, menthetők és rombolhatók is. A játékost repülő ellenségek üldözik.",
        "Ez volt a Programozás alapjai I. tárgyhoz készített házifeladatom. Összességében egy élvezhető játék lett.",
        { "type": "a", "href": "/platform", "text": "schmelczer.hu/platform" }
      ]
    },
    {
      "date": "2016 nyár",
      "title": "Fényképek",
      "picture": "/static/kepek.jpg",
      "description": "Csináltam egy oldalt, ahol a fényképeimet lehet megnézni.",
      "link": "schmelczer.hu/kepek"
    },
    {
      "date": "2016 tavasz",
      "title": "Zenére világító ledsorok",
      "picture": "/static/LED.jpg",
      "description": "Egy alkalmazást készítettem, amivel RGB ledsorok színét lehet a zene ritmusára változtatni.",
      "more": [
        "Ez volt az első nagyobb projektem, ez természetesen a megvalósítás minőségén is érezhető. Ettől független büszke vagyok a végeredményre.",
        "Pythonban lett írva, amivel egy webes frontenden keresztül lehet kommunikálni. Továbbá beépítésre került egy zenelejátszó is a programba.",
        "A működő rendszerről készítettem egy videót, ami alább tekinthető meg.",
        { "type": "video", "src": "static/led720.mp4" }
      ]
    }
  ],
  "footer": {
    "email": "andras.schmelczer@schdesign.hu"
  }
}
*/
