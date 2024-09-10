let dados =
    [
        {
            nome: 'Kendrick Lamar',
            descricao: 'Considerado um dos maiores rappers da atualidade, conhecido por suas letras profundas e sociais.',
            albuns: ['good kid, m.A.A.d city', 'To Pimp a Butterfly', 'DAMN.', 'Mr. Morale & the Big Steppers'],
            spotify: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhdQG',
            appleMusic: 'https://music.apple.com/us/artist/kendrick-lamar/319055319',
            youtube: 'https://www.youtube.com/user/kendricklamar',
            premios: ['Pulitzer Prize', 'Multiple Grammy Awards'],
            musicas: ['HUMBLE.', 'Alright', 'DNA.', 'N.W.A'],
            tags: "kendrick lamar good kid maad city to pimp a butterfly damn mr morale big steppers humble alright dna nwa pulitzer prize grammy awards hip hop rap social consciente",
          },
          {
            nome: 'Kanye West',
            descricao: 'Produtor e rapper influente, conhecido por suas produções inovadoras e personalidade controversa.',
            albuns: ['The College Dropout', 'Late Registration', 'Graduation', 'My Beautiful Dark Twisted Fantasy'],
            spotify: 'https://open.spotify.com/artist/5K4W6rqBFWBq66LhZtYeYD',
            appleMusic: 'https://music.apple.com/us/artist/kanye-west/319055319',
            youtube: 'https://www.youtube.com/user/kanyewest',
            premios: ['Multiple Grammy Awards'],
            musicas: ['Through the Wire', 'Gold Digger', 'Stronger'],
            tags: 'Kanye West The College Dropout Late Registration Graduation My Beautiful Dark Twisted Fantasy Through the Wire Gold Digger Stronger producer'

          },
          {
            nome: 'Travis Scott',
            descricao: 'Rapper e produtor, conhecido por sua estética dark e shows energéticos.',
            albuns: ['Rodeo', 'Birds in the Trap Sing McKnight', 'Astroworld'],
            spotify: 'https://open.spotify.com/artist/0Y5tJX13DFF03e92y2uE6I',
            appleMusic: 'https://music.apple.com/us/artist/travis-scott/319055319',
            youtube: 'https://www.youtube.com/user/travisscott',
            premios: ['Grammy Award'],
            musicas: ['Sicko Mode', 'Antidote', 'Goosebumps']
          },
          {
            nome: 'Tyler, the Creator',
            descricao: 'Rapper, produtor e designer de moda, conhecido por sua versatilidade e estilo único.',
            albuns: ['Goblin', 'Wolf', 'Flower Boy', 'IGOR'],
            spotify: 'https://open.spotify.com/artist/4V8LLVIU89D5oE3DsqXZKF',
            appleMusic: 'https://music.apple.com/us/artist/tyler-the-creator/319055319',
            youtube: 'https://www.youtube.com/user/tylerthecreator',
            premios: ['Grammy Award'],
            musicas: ['Yonkers', 'See You Again', 'EARFQUAKE']
          },
          {
            nome: 'Yeat',
            descricao: 'Rapper emergente, conhecido por seu flow melódico e estilo experimental.',
            albuns: ['Up 2 Me', 'Lyrical Lemonade', 'AfterLyfe'],
            spotify: 'https://open.spotify.com/artist/3qiq0Z6lDb4LnX50cK3cWV',
            appleMusic: 'https://music.apple.com/us/artist/yeat/1586533428',
            youtube: 'https://www.youtube.com/channel/UCyJ-79j329000Yj4653k1g',
            premios: [],
            musicas: ["Gettin’ Active', ‘Poppin’’, ‘No More"]
          },
          {
            nome: 'Pusha T',
            descricao: 'Rapper conhecido por suas rimas cruas e letras sobre o tráfico de drogas.',
            albuns: ["My Name Is My Name', 'King Push', 'It's Almost Dry"],
            spotify: 'https://open.spotify.com/artist/0X7mrb8SUl51CMAnyr3PYz',
            appleMusic: 'https://music.apple.com/us/artist/pusha-t/319055319',
            youtube: 'https://www.youtube.com/channel/UCyJ-79j329000Yj4653k1g',
            premios: ['Grammy Award'],
            musicas: ["Drug Dealers Anonymous', 'If You Know You Know', 'Diet Coke"]
          },
          {
            nome: 'Drake',
            descricao: 'Um dos rappers mais populares da atualidade, conhecido por seus hits e versatilidade.',
            albuns: ["Take Care', 'Nothing Was the Same', 'Views', 'Scorpion', 'Certified Lover Boy"],
            spotify: 'https://open.spotify.com/artist/3TVXtAsR1InumOm363oCI2',
            appleMusic: 'https://music.apple.com/us/artist/drake/319055319',
            youtube: 'https://www.youtube.com/user/drake',
            premios: ['Multiple Grammy Awards'],
            musicas: ["Hotline Bling', 'One Dance', 'God's Plan"]
          },
          {
            nome: 'Childish Gambino',
            descricao: 'Artista multifacetado, conhecido por sua música, atuação e comédia.',
            albuns: ["Because the Internet', 'Awaken, My Love!', '3.15.20"],
            spotify: 'https://open.spotify.com/artist/7jhhN9AKA0z3VTqkO44QuK',
            appleMusic: 'https://music.apple.com/us/artist/childish-gambino/319055319',
            youtube: 'https://www.youtube.com/user/childishgambino',
            premios: ['Grammy Award'],
            musicas: ['This Is America', 'Redbone', '3005']
          },
          {
            nome: 'The Weeknd',
            descricao: 'Cantor e compositor canadense, conhecido por sua voz melódica e estilo R&B.',
            albums: ['Kiss Land', 'Beauty Behind the Madness', 'Starboy', 'After Hours'],
            spotify: 'https://open.spotify.com/artist/1Xyo4u8uJ5tilNRsYLDzJg',
            appleMusic: 'https://music.apple.com/us/artist/the-weeknd/319055319',
            youtube: 'https://www.youtube.com/user/theweeknd',
            premios: ['Multiple Grammy Awards'],
            musicas: ["Blinding Lights', 'Starboy', 'Can't Feel My Face"]
          },
          {
            nome: 'Future',
            descricao: 'Rapper conhecido por seu flow melódico e letras sobre amor e perda.',
            albuns: ['DS2', 'EVOL', 'HNDRXX', 'FUTURE'],
            spotify: 'https://open.spotify.com/artist/1RyvyyTE3xzDtwFRnW9eWb',
            appleMusic: 'https://music.apple.com/us/artist/future/319055319',
            youtube: 'https://www.youtube.com/user/future',
            premios: ['Grammy Award'],
            musicas: ['Mask Off', 'Life Is Good', 'Jumpman']
          },
          {
            nome: 'Metro Boomin',
            descricao: 'Produtor musical conhecido por seus beats trap e colaborações com diversos artistas.',
            albuns: ['Not All Heroes Wear Capes', 'Heroes & Villains'],
            spotify: 'https://open.spotify.com/artist/1Xyo4u8uJ5tilNRsYLDzJg',
            appleMusic: 'https://music.apple.com/us/artist/metro-boomin/1028888085',
            youtube: 'https://www.youtube.com/channel/UCyJ-79j329000Yj4653k1g',
          }
    ];