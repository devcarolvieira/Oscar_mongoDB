// 1.1
// R: 10889
db.oscar.countDocuments({})

// 1.2
// R: 'ACTOR',
  'ACTOR IN A LEADING ROLE',
  'ACTOR IN A SUPPORTING ROLE',
  'ACTRESS',
  'ACTRESS IN A LEADING ROLE',
  'ACTRESS IN A SUPPORTING ROLE',
  'ANIMATED FEATURE FILM',
  'ART DIRECTION',
  'ART DIRECTION (Black-and-White)',
  'ART DIRECTION (Color)',
  'ASSISTANT DIRECTOR',
  'AWARD OF COMMENDATION',
  'BEST MOTION PICTURE',
  'BEST PICTURE',
  'CINEMATOGRAPHY',
  'CINEMATOGRAPHY (Black-and-White)',
  'CINEMATOGRAPHY (Color)',
  'COSTUME DESIGN',
  'COSTUME DESIGN (Black-and-White)',
  'COSTUME DESIGN (Color)',
  'DANCE DIRECTION',
  'DIRECTING',
  'DIRECTING (Comedy Picture)',
  'DIRECTING (Dramatic Picture)',
  'DOCUMENTARY',
  'DOCUMENTARY (Feature)',
  'DOCUMENTARY (Short Subject)',
  'DOCUMENTARY FEATURE FILM',
  'DOCUMENTARY SHORT FILM',
  'ENGINEERING EFFECTS',
  'FILM EDITING',
  'FOREIGN LANGUAGE FILM',
  'GORDON E. SAWYER AWARD',
  'HONORARY AWARD',
  'HONORARY FOREIGN LANGUAGE FILM AWARD',
  'INTERNATIONAL FEATURE FILM',
  'IRVING G. THALBERG MEMORIAL AWARD',
  'JEAN HERSHOLT HUMANITARIAN AWARD',
  'MAKEUP',
  'MAKEUP AND HAIRSTYLING',
  'MUSIC (Adaptation Score)',
  'MUSIC (Music Score of a Dramatic Picture)',
  'MUSIC (Music Score of a Dramatic or Comedy Picture)',
  'MUSIC (Music Score--substantially original)',
  'MUSIC (Original Dramatic Score)',
  'MUSIC (Original Music Score)',
  'MUSIC (Original Musical or Comedy Score)',
  'MUSIC (Original Score)',
  'MUSIC (Original Score--for a motion picture [not a musical])',
  'MUSIC (Original Song Score and Its Adaptation -or- Adaptation Score)',
  'MUSIC (Original Song Score and Its Adaptation or Adaptation Score)',
  'MUSIC (Original Song Score or Adaptation Score)',
  'MUSIC (Original Song Score)',
  'MUSIC (Original Song)',
  'MUSIC (Score of a Musical Picture--original or adaptation)',
  'MUSIC (Scoring of Music--adaptation or treatment)',
  'MUSIC (Scoring of a Musical Picture)',
  'MUSIC (Scoring)',
  'MUSIC (Scoring: Adaptation and Original Song Score)',
  'MUSIC (Scoring: Original Song Score and Adaptation -or- Scoring: Adaptation)',
  'MUSIC (Song)',
  'MUSIC (Song--Original for the Picture)',
  'OUTSTANDING MOTION PICTURE',
  'OUTSTANDING PICTURE',
  'OUTSTANDING PRODUCTION',
  'PRODUCTION DESIGN',
  'SHORT FILM (Animated)',
  'SHORT FILM (Dramatic Live Action)',
  'SHORT FILM (Live Action)',
  'SHORT SUBJECT (Animated)',
  'SHORT SUBJECT (Cartoon)',
  'SHORT SUBJECT (Color)',
  'SHORT SUBJECT (Comedy)',
  'SHORT SUBJECT (Live Action)',
  'SHORT SUBJECT (Novelty)',
  'SHORT SUBJECT (One-reel)',
  'SHORT SUBJECT (Two-reel)',
  'SOUND',
  'SOUND EDITING',
  'SOUND EFFECTS',
  'SOUND EFFECTS EDITING',
  'SOUND MIXING',
  'SOUND RECORDING',
  'SPECIAL ACHIEVEMENT AWARD',
  'SPECIAL ACHIEVEMENT AWARD (Sound Editing)',
  'SPECIAL ACHIEVEMENT AWARD (Sound Effects Editing)',
  'SPECIAL ACHIEVEMENT AWARD (Sound Effects)',
  'SPECIAL ACHIEVEMENT AWARD (Visual Effects)',
  'SPECIAL AWARD',
  'SPECIAL EFFECTS',
  'SPECIAL FOREIGN LANGUAGE FILM AWARD',
  'SPECIAL VISUAL EFFECTS',
  'UNIQUE AND ARTISTIC PICTURE',
  'VISUAL EFFECTS',
  'WRITING',
  'WRITING (Adaptation)',
  'WRITING (Adapted Screenplay)',
  'WRITING (Motion Picture Story)',
  'WRITING (Original Motion Picture Story)',
  'WRITING (Original Screenplay)',
  'WRITING (Original Story)',
  'WRITING (Screenplay Adapted from Other Material)',
  'WRITING (Screenplay Based on Material Previously Produced or Published)',
  'WRITING (Screenplay Based on Material from Another Medium)',
  'WRITING (Screenplay Written Directly for the Screen)',
  'WRITING (Screenplay Written Directly for the Screen--based on factual material or on story material not previously published or produced)',
  'WRITING (Screenplay)',
  'WRITING (Screenplay--Adapted)',
  'WRITING (Screenplay--Original)',
  'WRITING (Screenplay--based on material from another medium)',
  'WRITING (Story and Screenplay)',
  'WRITING (Story and Screenplay--based on factual material or material not previously published or produced)',
  'WRITING (Story and Screenplay--based on material not previously published or produced)',
  'WRITING (Story and Screenplay--written directly for the screen)',
  'WRITING (Title Writing)'

db.oscar.distinct("categoria");

// 1.3
// R: 1928
db.oscar.find().sort({ ano_cerimonia: 1 }).limit(1)

// 1.4
// R: 2024
db.Oscar.find().sort({ ano_cerimonia: -1 }).limit(1)

// 1.5
// R: 96
db.oscar.distinct("cerimonia").length

// 1.6
// registros atualizados

// 2.1
// R: DIRECTING = 470, FILM EDITING = 450, ACTRESS IN A SUPPORTING ROLE = 441, ACTOR IN A SUPPORTING ROLE = 441, DOCUMENTARY (Short Subject) = 378, BEST PICTURE = 372, DOCUMENTARY (Feature) = 345, CINEMATOGRAPHY = 338, FOREIGN LANGUAGE FILM = 315, ART DIRECTION = 307, COSTUME DESIGN = 295, MUSIC (Original Score) = 270, SOUND = 245, ACTRESS IN A LEADING ROLE = 241, ACTOR IN A LEADING ROLE = 241, ACTRESS  = 236, MUSIC (Original Song) = 235, ACTOR = 232, SHORT FILM (Live Action) = 226, SHORT FILM (Animated) = 2115

db.oscar.aggregate([
  {
    $group: {
      _id: "$categoria",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  }
])

// 2.2
// R: DIRECTING = 470

db.oscar.aggregate([
  {
    $group: {
      _id: "$categoria",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  },
  {
    $limit: 1
    }
])

// 2.3
// R: AWARD OF COMMENDATION = 1

db.oscar.aggregate([
  {
    $group: {
      _id: "$categoria",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: 1
    }
  },
  {
    $limit: 1
  }
])

// 2.4
// R: 1976

db.oscar.find(
  { categoria: "ACTRESS" }
).sort({ ano_cerimonia: -1 }).limit(1)

// 2.5
// R: ACTOR, ART DIRECTION, CINEMATOGRAPHY, DIRECTING (Comedy Picture), DIRECTING (Dramatic Picture), ENGINEERING EFFECTS, OUTSTANDING PICTURE, SPECIAL AWARD, UNIQUE AND ARTISTIC PICTURE, WRITING (Adaptation), WRITING (Original Story), WRITING (Title Writing)

db.oscar.distinct("categoria", { cerimonia: 1 })

// 2.6
// R: DIRECTING, DIRECTING (Comedy Picture), DIRECTING (Dramatic Picture)
db.oscar.find(
  { categoria: /DIRECTING/ },
  { _id: 0, categoria: 1 }
)

// 3.1
// R: 3 indicações
db.oscar.countDocuments({
  nome_do_indicado: "Natalie Portman"
})

// 3.2
// R: 1 Oscar ganho
db.oscar.countDocuments({
  nome_do_indicado: "Natalie Portman",
  vencedor: 1
})

// 3.3
// R:
// 2005 - Closer
// 2011 - Black Swan
// 2017 - Jackie
db.oscar.find(
  { nome_do_indicado: "Natalie Portman" },
  { _id: 0, ano_cerimonia: 1, nome_do_filme: 1 }
)

// 3.4
// R:
// 2005 - ACTRESS IN A SUPPORTING ROLE - Closer - Não venceu
// 2011 - ACTRESS IN A LEADING ROLE - Black Swan - Venceu
// 2017 - ACTRESS IN A LEADING ROLE - Jackie - Não venceu
db.oscar.find(
  { nome_do_indicado: "Natalie Portman" },
  { _id: 0, ano_cerimonia: 1, categoria: 1, nome_do_filme: 1, vencedor: 1 }
)

// 3.5
// R: 4 indicações
db.oscar.countDocuments({
  nome_do_indicado: "Viola Davis"
})

// 3.6
// R: 1 Oscar ganho
db.oscar.countDocuments({
  nome_do_indicado: "Viola Davis",
  vencedor: 1
})

// 3.7
// R:
// Doubt
// The Help
// Fences
// Ma Rainey's Black Bottom
db.oscar.find(
  { nome_do_indicado: "Viola Davis" },
  { _id: 0, nome_do_filme: 1 }
)

// 3.8
// R: Não. Amy Adams nunca ganhou um Oscar.
db.oscar.find(
  {
    nome_do_indicado: "Amy Adams",
    vencedor: 1
  }
)

// 3.9
// R: 6 indicações sem vitória
db.oscar.countDocuments({
  nome_do_indicado: "Amy Adams",
  vencedor: 0
})

// 3.10
// R: Sim. Denzel Washington ganhou 2 Oscars.
db.oscar.find(
  {
    nome_do_indicado: "Denzel Washington",
    vencedor: 1
  }
)

// 3.11
// R: 9 indicações
db.oscar.countDocuments({
  nome_do_indicado: "Denzel Washington"
})

// 3.12
// R:
// 1990 - ACTOR IN A SUPPORTING ROLE - Glory
// 2002 - ACTOR IN A LEADING ROLE - Training Day
db.oscar.find(
  {
    nome_do_indicado: "Denzel Washington",
    vencedor: 1
  },
  {
    _id: 0,
    ano_cerimonia: 1,
    categoria: 1,
    nome_do_filme: 1
  }
)

// 4.1
// R: Janet Gaynor - 1928 - 7th Heaven
db.oscar.find(
  {
    categoria: "ACTRESS",
    vencedor: 1
  },
  {
    _id: 0,
    nome_do_indicado: 1,
    ano_cerimonia: 1,
    nome_do_filme: 1
  }
).sort({ ano_cerimonia: 1 }).limit(1)

// 4.2
// R: Emil Jannings - 1928 - The Last Command
db.oscar.find(
  {
    categoria: "ACTOR",
    vencedor: 1
  },
  {
    _id: 0,
    nome_do_indicado: 1,
    ano_cerimonia: 1,
    nome_do_filme: 1
  }
).sort({ ano_cerimonia: 1 }).limit(1)

// 4.3
// R: 2472
db.oscar.countDocuments({
  vencedor: 1
})

// 4.4
// R: Wings, The Broadway Melody, Lawrence of Arabia, Tom Jones, My Fair Lady, The Sound of Music, A Man for All Seasons, In the Heat of the Night, Oliver!, Midnight Cowboy, Patton, The French Connection, The Godfather, The Sting, The Godfather Part II, One Flew over the Cuckoo's Nest, Rocky, Annie Hall, The Deer Hunter, Kramer vs. Kramer
db.oscar.find(
  {
    categoria: {
      $in: ["OUTSTANDING PICTURE", "BEST PICTURE"]
    },
    vencedor: 1
  },
  {
    _id: 0,
    ano_cerimonia: 1,
    nome_do_filme: 1
  }
).sort({ ano_cerimonia: 1 })

// 4.5
// R: 1335
db.oscar.distinct(
  "nome_do_filme",
  { vencedor: 1 }
).length

// 5.1
// R: // Metro-Goldwyn-Mayer - 64
// Walt Disney, Producer - 59
// John Williams - 46
// Warner Bros. - 44
// France - 37
// Alfred Newman - 34
// Italy - 29
// Paramount - 25
// RKO Radio - 22
// Gordon Hollingshead, Producer - 22
// Edith Head - 22
// Spain - 21
// Meryl Streep - 21

db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $match: {
      totalIndicacoes: { $gt: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  }
])

// 5.2
R: R: Metro-Goldwyn-Mayer — 64 indicações.
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      totalIndicacoes: { $sum: 1 }
    }
  },
  { $sort: { totalIndicacoes: -1 } },
  { $limit: 1 }
])

// 5.3
R: // Thomas Newman - 14 indicações
// George Folsey - 12 indicações
// Diane Warren - 11 indicações
// Walter Lantz - 10 indicações
// Israel - 10 indicações
// Randy Newman - 9 indicações
// Glenn Close - 8 indicações
// Peter O'Toole - 8 indicações
// Richard Burton - 7 indicações
// Thelma Ritter - 6 indicações
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      totalIndicacoes: { $sum: 1 },
      totalVitorias: { $sum: "$vencedor" }
    }
  },
  {
    $match: {
      totalIndicacoes: { $gt: 3 },
      totalVitorias: 0
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  }
])

// 5.4
// R: Foram encontrados 633 artistas/indicados com participação em mais de uma categoria.

db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      categorias: {
        $addToSet: "$categoria"
      }
    }
  },
  {
    $project: {
      quantidadeCategorias: {
        $size: "$categorias"
      }
    }
  },
  {
    $match: {
      quantidadeCategorias: { $gt: 1 }
    }
  }
])

// 5.5
R: 5595
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $match: {
      totalIndicacoes: 1
    }
  },
  {
    $count: "total"
  }
])

// 5.6
R: 1943
db.oscar.aggregate([
  {
    $group: {
      _id: "$ano_cerimonia",
      totalIndicados: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicados: -1
    }
  },
  {
    $limit: 1
  }
])

// 6.1
// R: 1996 (Toy Story) e 2011 (Toy Story 3)
db.oscar.find(
  {
    nome_do_filme: /Toy Story/,
    vencedor: 1
  },
  {
    _id: 0,
    ano_cerimonia: 1,
    nome_do_filme: 1,
    categoria: 1
  }
)

// 6.2
// R: 17 indicações
db.oscar.countDocuments({
  nome_do_filme: /Toy Story/
})

// 6.3
// R:
// BEST PICTURE
// ANIMATED FEATURE FILM
// WRITING (Adapted Screenplay)
// MUSIC (Original Song)
// SOUND EDITING
// SOUND MIXING
// VISUAL EFFECTS
// SPECIAL ACHIEVEMENT AWARD
db.oscar.distinct(
  "categoria",
  { nome_do_filme: /Toy Story/ }
)

// 6.4
// R: 78ª cerimônia (Oscar de 2006)
db.oscar.find(
  { nome_do_filme: "Crash" },
  {
    _id: 0,
    cerimonia: 1,
    ano_cerimonia: 1
  }
)

// 6.5
// R: 6 indicações
db.oscar.countDocuments({
  nome_do_filme: "Crash"
})

// 6.6
// R: Sim. Crash venceu na categoria BEST PICTURE em 2006.
db.oscar.find(
  {
    nome_do_filme: "Crash",
    categoria: "BEST PICTURE",
    vencedor: 1
  }
)

// 6.7
// R: Sim. O filme aparece como "Central Station".
db.oscar.find({
  nome_do_filme: "Central Station"
})

// 6.8
// R: 2 indicações
db.oscar.countDocuments({
  nome_do_filme: "Central Station"
})

// 7.1
// R: Todos os valores "true"/"false" (string) foram convertidos para booleanos true/false.
db.oscar.updateMany(
  { vencedor: "true" },
  { $set: { vencedor: true } }
)

db.oscar.updateMany(
  { vencedor: "false" },
  { $set: { vencedor: false } }
)

// 7.2
// R: Foram adicionados 3 filmes fictícios que nunca foram indicados ao Oscar.
db.oscar.insertMany([
  {
    id_registro: 999001,
    ano_filmagem: 2023,
    ano_cerimonia: 2024,
    cerimonia: 96,
    categoria: "BEST PICTURE",
    nome_do_indicado: "Lucas Almeida",
    nome_do_filme: "The Last Horizon",
    vencedor: false
  },
  {
    id_registro: 999002,
    ano_filmagem: 2022,
    ano_cerimonia: 2023,
    cerimonia: 95,
    categoria: "BEST PICTURE",
    nome_do_indicado: "Marina Costa",
    nome_do_filme: "Beyond the River",
    vencedor: false
  },
  {
    id_registro: 999003,
    ano_filmagem: 2024,
    ano_cerimonia: 2025,
    cerimonia: 97,
    categoria: "BEST PICTURE",
    nome_do_indicado: "Pedro Santos",
    nome_do_filme: "Echoes of Tomorrow",
    vencedor: false
  }
])

// 7.3
// R: Foi criada a categoria BEST INTERNATIONAL FEATURE FILM com vencedores de 2020 a 2024.
db.oscar.insertMany([
  {
    ano_cerimonia: 2020,
    categoria: "BEST INTERNATIONAL FEATURE FILM",
    nome_do_filme: "Parasite",
    vencedor: true
  },
  {
    ano_cerimonia: 2021,
    categoria: "BEST INTERNATIONAL FEATURE FILM",
    nome_do_filme: "Another Round",
    vencedor: true
  },
  {
    ano_cerimonia: 2022,
    categoria: "BEST INTERNATIONAL FEATURE FILM",
    nome_do_filme: "Drive My Car",
    vencedor: true
  },
  {
    ano_cerimonia: 2023,
    categoria: "BEST INTERNATIONAL FEATURE FILM",
    nome_do_filme: "All Quiet on the Western Front",
    vencedor: true
  },
  {
    ano_cerimonia: 2024,
    categoria: "BEST INTERNATIONAL FEATURE FILM",
    nome_do_filme: "The Zone of Interest",
    vencedor: true
  }
])

// 7.4
// R: Foram removidos espaços extras do início e do fim dos nomes dos filmes.
db.oscar.updateMany(
  {},
  [
    {
      $set: {
        nome_do_filme: {
          $trim: {
            input: "$nome_do_filme"
          }
        }
      }
    }
  ]
)

// 7.5
// R: Todos os registros com nome_do_filme igual a NULL foram removidos.
db.oscar.deleteMany({
  $or: [
    { nome_do_filme: null },
    { nome_do_filme: "NULL" }
  ]
})

// 8.1
// R:
// 1920s - 67 indicações
// 1930s - 662 indicações
// 1940s - 1459 indicações
// 1950s - 1146 indicações
// 1960s - 1167 indicações
// 1970s - 1026 indicações
// 1980s - 1036 indicações
// 1990s - 1090 indicações
// 2000s - 1103 indicações
// 2010s - 1211 indicações
// 2020s - 619 indicações
db.oscar.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          {
            $toString: {
              $multiply: [
                { $floor: { $divide: ["$ano_cerimonia", 10] } },
                10
              ]
            }
          },
          "s"
        ]
      },
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// 8.2
// R: A década de 1940 foi a que teve o maior número de indicações,
// totalizando 1459 indicações.
db.oscar.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          {
            $toString: {
              $multiply: [
                { $floor: { $divide: ["$ano_cerimonia", 10] } },
                10
              ]
            }
          },
          "s"
        ]
      },
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: { totalIndicacoes: -1 }
  },
  {
    $limit: 1
  }
])

// 8.3
// R:
// 1920s - 14 categorias
// 1930s - 25 categorias
// 1940s - 35 categorias
// 1950s - 37 categorias
// 1960s - 37 categorias
// 1970s - 46 categorias
// 1980s - 30 categorias
// 1990s - 27 categorias
// 2000s - 28 categorias
// 2010s - 26 categorias
// 2020s - 29 categorias
//
// A década de 1970 apresentou o maior número de categorias distintas (46).
db.oscar.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          {
            $toString: {
              $multiply: [
                { $floor: { $divide: ["$ano_cerimonia", 10] } },
                10
              ]
            }
          },
          "s"
        ]
      },
      categorias: {
        $addToSet: "$categoria"
      }
    }
  },
  {
    $project: {
      totalCategorias: {
        $size: "$categorias"
      }
    }
  }
])

// 8.4
// R: O ano de 1943 foi o que registrou o maior número de indicações,
// com 186 indicações.
db.oscar.aggregate([
  {
    $group: {
      _id: "$ano_cerimonia",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  },
  {
    $limit: 1
  }
])

// 8.5
// R: Comparando a década de 1920 com a década de 2020,
// houve um crescimento de aproximadamente 823,88% no número de indicações.

// 9.1
// R: Sidney Poitier foi indicado pela primeira vez ao Oscar em 1959,
// na categoria ACTOR, pelo filme "The Defiant Ones".
db.oscar.find(
  {
    nome_do_indicado: "Sidney Poitier",
    categoria: "ACTOR"
  },
  {
    _id: 0,
    ano_cerimonia: 1,
    nome_do_filme: 1,
    vencedor: 1
  }
).sort({ ano_cerimonia: 1 }).limit(1)

// 9.2
// R: Não. Sidney Poitier não ganhou o Oscar nessa primeira indicação.
// O vencedor daquele ano foi David Niven.
db.oscar.find(
  {
    nome_do_indicado: "Sidney Poitier",
    ano_cerimonia: 1959
  }
)

// 9.3
// R: A base não possui informação sobre raça/etnia dos indicados.
// Portanto não é possível determinar automaticamente essa quantidade.
db.oscar.find(
  {
    categoria: { $in: ["ACTOR", "ACTRESS"] },
    ano_cerimonia: { $lt: 1970 }
  },
  {
    _id: 0,
    nome_do_indicado: 1,
    ano_cerimonia: 1,
    categoria: 1
  }
)

// 9.4
// R: Não é possível determinar automaticamente apenas com os dados da base,
// pois não existe um campo indicando o gênero dos diretores.
db.oscar.find(
  {
    diretor: { $exists: true },
    vencedor: true
  },
  {
    _id: 0,
    diretor: 1,
    nome_do_filme: 1,
    categoria: 1,
    ano_cerimonia: 1
  }
)

// 9.5
// R: Sim. Denzel Washington e Jamie Foxx concorreram ao Oscar no mesmo ano.
db.oscar.aggregate([
  {
    $match: {
      nome_do_indicado: {
        $in: ["Denzel Washington", "Jamie Foxx"]
      }
    }
  },
  {
    $group: {
      _id: "$ano_cerimonia",
      indicados: {
        $addToSet: "$nome_do_indicado"
      }
    }
  },
  {
    $match: {
      "indicados.1": { $exists: true }
    }
  }
])

// 9.6
// R: 2005. Jamie Foxx venceu o Oscar de ACTOR por "Ray".
// Denzel Washington também estava indicado naquele ano por "The Manchurian Candidate".
db.oscar.find(
  {
    ano_cerimonia: 2005,
    nome_do_indicado: {
      $in: ["Denzel Washington", "Jamie Foxx"]
    }
  },
  {
    _id: 0,
    ano_cerimonia: 1,
    nome_do_indicado: 1,
    categoria: 1,
    nome_do_filme: 1,
    vencedor: 1
  }
)

// 9.7
// R: Filmes que ganharam Oscar em múltiplas categorias na mesma cerimônia.
db.oscar.aggregate([
  {
    $match: {
      vencedor: true
    }
  },
  {
    $group: {
      _id: {
        filme: "$nome_do_filme",
        ano: "$ano_cerimonia"
      },
      categoriasVencidas: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      categoriasVencidas: { $gt: 1 }
    }
  },
  {
    $sort: {
      categoriasVencidas: -1
    }
  }
])

// 10.1
// R: Kramer vs. Kramer, Parasite, The Deer Hunter, The Hurt Locker, The King's Speech etc
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      categoria: {
        $in: [
          "BEST PICTURE",
          "OUTSTANDING PICTURE",
          "DIRECTING",
          "DIRECTING (Comedy Picture)",
          "DIRECTING (Dramatic Picture)"
        ]
      }
    }
  },
  {
    $group: {
      _id: {
        ano: "$ano_cerimonia",
        filme: "$nome_do_filme"
      },
      categorias: {
        $addToSet: "$categoria"
      }
    }
  },
  {
    $match: {
      categorias: { $all: ["BEST PICTURE", "DIRECTING"] }
    }
  }
])

// 10.2
// R: La La Land - 14
db.oscar.aggregate([
  {
    $group: {
      _id: {
        filme: "$nome_do_filme",
        ano: "$ano_cerimonia"
      },
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  },
  {
    $limit: 1
  }
])

// 10.3
// R: The Lord of the Rings: The Return of the King - 100%
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_filme",
      indicacoes: { $sum: 1 },
      vitorias: {
        $sum: {
          $cond: ["$vencedor", 1, 0]
        }
      }
    }
  },
  {
    $project: {
      indicacoes: 1,
      vitorias: 1,
      taxaConversao: {
        $multiply: [
          { $divide: ["$vitorias", "$indicacoes"] },
          100
        ]
      }
    }
  },
  {
    $sort: {
      taxaConversao: -1,
      indicacoes: -1
    }
  },
  {
    $limit: 1
  }
])

// 10.4
// R: Cloris Leachman - 1972, Richard Dreyfuss - 1978,1996, Walter Brennan - 1939, 1942, 1937, 1941 etc
db.oscar.aggregate([
  {
    $match: {
      categoria: {
        $in: [
          "ACTOR",
          "ACTRESS",
          "ACTOR IN A LEADING ROLE",
          "ACTRESS IN A LEADING ROLE",
          "ACTOR IN A SUPPORTING ROLE",
          "ACTRESS IN A SUPPORTING ROLE"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$nome_do_indicado",
      anos: {
        $addToSet: "$ano_cerimonia"
      }
    }
  }
])

// 10.5
// R: Média de 109 indicações por cerimônia
db.oscar.aggregate([
  {
    $group: {
      _id: "$ano_cerimonia",
      total: { $sum: 1 }
    }
  },
  {
    $group: {
      _id: null,
      media: { $avg: "$total" }
    }
  }
])

// 10.6
// R: Sadie Thompson única indicação em ACTRESS, The Pawnbroker única indicação em ACTOR
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_filme",
      totalIndicacoes: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      totalIndicacoes: 1
    }
  },
  {
    $lookup: {
      from: "oscar",
      localField: "_id",
      foreignField: "nome_do_filme",
      as: "dados"
    }
  },
  {
    $unwind: "$dados"
  },
  {
    $match: {
      "dados.categoria": {
        $in: [
          "ACTOR",
          "ACTRESS",
          "BEST PICTURE"
        ]
      }
    }
  }
])

// 11.1
// R: Titanic - 12, West Side Story - 11, Ben-Hur - 11, The Lord of the Rings: The Return of the King - 11, The Last Emperor - 9, Gigi - 9, The English Patient - 9, On the Waterfront - 8, Gone with the Wind - 8, Slumdog Millionaire - 8
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      nome_do_filme: { $ne: null }
    }
  },
  {
    $group: {
      _id: "$nome_do_filme",
      totalOscars: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalOscars: -1
    }
  },
  {
    $limit: 10
  }
])

// 11.2
// R: Metro-Goldwyn-Mayer - 64, Walt Disney, Producer - 59, John Williams - 46, Warner Bros. - 43, France - 37, Alfred Newman - 34, Italy - 29, Paramount - 25, 'Edith Head' - 22, Gordon Hollingshead, Producer' - 22
db.oscar.aggregate([
  {
    $match: {
      nome_do_indicado: { $ne: null }
    }
  },
  {
    $group: {
      _id: "$nome_do_indicado",
      totalIndicacoes: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalIndicacoes: -1
    }
  },
  {
    $limit: 10
  }
])

// 11.3
// R: Richard Burton, Amy Adams, Yugoslavia, Bill Thomas...
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      indicacoes: { $sum: 1 },
      vitorias: {
        $sum: {
          $cond: ["$vencedor", 1, 0]
        }
      }
    }
  },
  {
    $match: {
      indicacoes: { $gt: 5 },
      vitorias: 0
    }
  },
  {
    $sort: {
      indicacoes: -1
    }
  }
])

// 11.4
// R: BEST INTERNATIONAL FEATURE FILM
db.oscar.aggregate([
  {
    $match: {
      vencedor: true
    }
  },
  {
    $group: {
      _id: "$categoria",
      vencedores: {
        $addToSet: "$nome_do_indicado"
      }
    }
  },
  {
    $project: {
      totalVencedores: {
        $size: "$vencedores"
      }
    }
  },
  {
    $sort: {
      totalVencedores: 1
    }
  },
  {
    $limit: 1
  }
])

// 11.5
// R: DOCUMENTARY = 25, MUSIC (Music Score of a Dramatic Picture) = 20, SOUND RECORDING' = 7 etc
db.oscar.aggregate([
  {
    $group: {
      _id: {
        categoria: "$categoria",
        ano: "$ano_cerimonia"
      },
      indicados: { $sum: 1 }
    }
  },
  {
    $group: {
      _id: "$_id.categoria",
      mediaIndicados: {
        $avg: "$indicados"
      }
    }
  },
  {
    $sort: {
      mediaIndicados: -1
    }
  }
])

// 11.6
// R: The Elephant Man, Big Fish, The Cotton Club, Another Year etc
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_filme",
      registros: {
        $push: {
          ano: "$ano_cerimonia",
          categoria: "$categoria",
          vencedor: "$vencedor"
        }
      }
    }
  }
])

// 12.1
// R: Titanic, West Side Story, The Lord of the Rings: The Return of the King, Ben-Hur, Gigi, The English Patient, The Last Emperor, Gandhi, Slumdog Millionaire, Gone with the Wind, From Here to Eternity, My Fair Lady, On the Waterfront', Cabaret, Amadeus, Schindler's List, Everything Everywhere All at Once, Going My Way, Dances With Wolves, Lawrence of Arabia
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      nome_do_filme: { $ne: null }
    }
  },
  {
    $group: {
      _id: "$nome_do_filme",
      totalOscars: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalOscars: -1
    }
  },
  {
    $limit: 20
  }
])

// 12.2
// R: Sunrise, Ferdinand the Bull, One Hundred Men and a Girl, Two Arabian Knights, Flowers and Trees
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      nome_do_filme: { $ne: null }
    }
  },
  {
    $group: {
      _id: {
        decada: {
          $concat: [
            {
              $toString: {
                $multiply: [
                  { $floor: { $divide: ["$ano_cerimonia", 10] } },
                  10
                ]
              }
            },
            "s"
          ]
        },
        filme: "$nome_do_filme"
      }
    }
  },
  {
    $sort: {
      "_id.decada": 1
    }
  }
])

// 12.3
// R: King of Jazz, In Old Arizona, The Bridge of San Luis Rey, The Dove, Two Arabian Knights, 7th Heaven, Underworld
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      ano_cerimonia: {
        $lte: 1976
      },
      nome_do_filme: {
        $ne: null
      }
    }
  },
  {
    $group: {
      _id: "$nome_do_filme",
      primeiroOscar: {
        $min: "$ano_cerimonia"
      },
      totalOscars: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      primeiroOscar: 1
    }
  }
])

// 12.4
// R: 1957, 1950, 1953, 1943, 1964
db.oscar.aggregate([
  {
    $match: {
      vencedor: true
    }
  },
  {
    $group: {
      _id: "$ano_cerimonia",
      totalPremios: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalPremios: -1
    }
  },
  {
    $limit: 5
  }
])

// 12.5
// R: Kathryn Bigelow
db.oscar.find(
  {
    categoria: /DIRECTING/,
    vencedor: true,
    nome_do_indicado: "Kathryn Bigelow"
  }
)

// 12.6
// R: 20 casos
db.oscar.aggregate([
  {
    $group: {
      _id: "$nome_do_indicado",
      indicacoes: { $sum: 1 },
      vitorias: {
        $sum: {
          $cond: ["$vencedor", 1, 0]
        }
      }
    }
  },
  {
    $match: {
      indicacoes: { $gte: 5 },
      vitorias: 0
    }
  },
  {
    $sort: {
      indicacoes: -1
    }
  }
])

// 12.7
// R: 5 
db.oscar.aggregate([
  {
    $group: {
      _id: {
        filme: "$nome_do_filme",
        ano: "$ano_cerimonia"
      },
      indicacoes: { $sum: 1 },
      ganhouMelhorFilme: {
        $max: {
          $cond: [
            {
              $and: [
                { $eq: ["$vencedor", true] },
                {
                  $in: [
                    "$categoria",
                    ["BEST PICTURE", "OUTSTANDING PICTURE"]
                  ]
                }
              ]
            },
            1,
            0
          ]
        }
      }
    }
  },
  {
    $match: {
      indicacoes: { $gte: 10 }
    }
  }
])


// 12.8
// R: A maioria dos vencedores de Melhor Ator conquista o prêmio entre a 2ª e a 4ª indicação.
db.oscar.aggregate([
  {
    $match: {
      categoria: {
        $in: [
          "ACTOR",
          "ACTOR IN A LEADING ROLE"
        ]
      }
    }
  }
])

// 12.9
// R: Categorias técnicas tendem a apresentar maior repetição de vencedores ao longo dos anos.
db.oscar.aggregate([
  {
    $match: {
      vencedor: true
    }
  },
  {
    $group: {
      _id: "$categoria",
      vencedores: {
        $addToSet: "$nome_do_indicado"
      },
      totalPremios: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      totalPremios: 1,
      totalVencedores: {
        $size: "$vencedores"
      }
    }
  },
  {
    $sort: {
      totalVencedores: 1
    }
  }
])

// 13.1
// R: // The Abyss
// The Accidental Tourist
// 'The Accused'
// The Adventures of Don Juan'
// The Adventures of Priscilla, Queen of the Desert'
// The Adventures of Robin Hood'
// The African Queen'
// The Age of Innocence'
// 'The Alamo'
// The Alaskan Eskimo'
// 'The Anderson Platoon'
// The Apartment'
// The Appointments of Dennis Jennings'
// 'The Artist'
// 'The Assault'
// The Aviator'
// The Awful Truth'
// The Bachelor and the Bobby-Soxer'
//'The Bad and the Beautiful'
// 'The Barbarian Invasions'
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      nome_do_filme: /^The /
    }
  },
  {
    $group: {
      _id: "$nome_do_filme"
    }
  },
  {
    $sort: {
      _id: 1
    }
  }
])

// 13.2
// R: Metro-Goldwyn-Mayer, Metro-Goldwyn-Mayer, Metro-Goldwyn-Mayer etc
db.oscar.find(
  {
    nome_do_indicado: /-/
  },
  {
    _id: 0,
    nome_do_indicado: 1,
    categoria: 1,
    ano_cerimonia: 1
  }
)

// 13.3
// R: ACTOR, DOCUMENTARY, CINEMATOGRAPHY, ACTRESS etc
db.oscar.aggregate([
  {
    $match: {
      vencedor: true
    }
  },
  {
    $group: {
      _id: {
        ano: "$ano_cerimonia",
        categoria: "$categoria"
      },
      vencedores: {
        $sum: 1
      }
    }
  },
  {
    $match: {
      vencedores: {
        $gt: 1
      }
    }
  },
  {
    $sort: {
      "_id.ano": 1
    }
  }
])

// 13.4
// R: Parasite 2020, The Deer Hunter 1979, The Broadway Melody 1929, In the Heat of the Night 1968, Ordinary People 1981
db.oscar.aggregate([
  {
    $match: {
      categoria: {
        $in: [
          "BEST PICTURE",
          "OUTSTANDING PICTURE"
        ]
      },
      vencedor: true
    }
  },
  {
    $sample: {
      size: 5
    }
  },
  {
    $project: {
      _id: 0,
      nome_do_filme: 1,
      ano_cerimonia: 1
    }
  }
])

// 13.5
// R: 1 palavra = 249 filmes
// 2 palavras = 339 filmes
// 3 palavras = 358 filmes
// 4 palavras = 175 filmes
db.oscar.aggregate([
  {
    $match: {
      vencedor: true,
      nome_do_filme: {
        $ne: null
      }
    }
  },
  {
    $group: {
      _id: "$nome_do_filme"
    }
  },
  {
    $project: {
      quantidadePalavras: {
        $size: {
          $split: ["$_id", " "]
        }
      }
    }
  },
  {
    $group: {
      _id: "$quantidadePalavras",
      totalFilmes: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      _id: 1
    }
  }
])

// 14.1
// R: Dashboard executivo contendo métricas gerais da base.
db.oscar.aggregate([
  {
    $facet: {

      totalIndicacoes: [
        {
          $count: "valor"
        }
      ],

      totalCerimonias: [
        {
          $group: {
            _id: "$ano_cerimonia"
          }
        },
        {
          $count: "valor"
        }
      ],

      totalVencedores: [
        {
          $match: {
            vencedor: true
          }
        },
        {
          $count: "valor"
        }
      ],

      categoriaComMaisIndicacoes: [
        {
          $group: {
            _id: "$categoria",
            total: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            total: -1
          }
        },
        {
          $limit: 1
        }
      ],

      filmeMaisPremiado: [
        {
          $match: {
            vencedor: true,
            nome_do_filme: {
              $ne: null
            }
          }
        },
        {
          $group: {
            _id: "$nome_do_filme",
            premios: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            premios: -1
          }
        },
        {
          $limit: 1
        }
      ],

      artistaMaisIndicado: [
        {
          $match: {
            nome_do_indicado: {
              $ne: null
            }
          }
        },
        {
          $group: {
            _id: "$nome_do_indicado",
            indicacoes: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            indicacoes: -1
          }
        },
        {
          $limit: 1
        }
      ],

      decadaComMaisPremiacoes: [
        {
          $match: {
            vencedor: true
          }
        },
        {
          $group: {
            _id: {
              $concat: [
                {
                  $toString: {
                    $multiply: [
                      {
                        $floor: {
                          $divide: [
                            "$ano_cerimonia",
                            10
                          ]
                        }
                      },
                      10
                    ]
                  }
                },
                "s"
              ]
            },
            premios: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            premios: -1
          }
        },
        {
          $limit: 1
        }
      ],

      categoriasUnicas: [
        {
          $group: {
            _id: "$categoria"
          }
        },
        {
          $count: "valor"
        }
      ]
    }
  }
])
