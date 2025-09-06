import * as React from "react"
const { useState, useEffect } = React

// Componentes UI básicos
const Button = ({ children, className = "", onClick, disabled = false, variant = "default", size = "default", ...props }: any) => (
  <button 
    className={`px-4 py-2 rounded-md font-medium transition-colors ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${variant === 'outline' ? 'border border-gray-600 bg-transparent hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)

const Card = ({ children, className = "", ...props }: any) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-lg ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }: any) => (
  <div className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }: any) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = "", ...props }: any) => (
  <p className={`text-sm text-gray-400 ${className}`} {...props}>
    {children}
  </p>
)

const CardContent = ({ children, className = "", ...props }: any) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const Input = ({ className = "", ...props }: any) => (
  <input 
    className={`w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
)

const Progress = ({ value, className = "", ...props }: any) => (
  <div className={`w-full bg-gray-700 rounded-full h-2 ${className}`} {...props}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)

const Badge = ({ children, className = "", ...props }: any) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ${className}`} {...props}>
    {children}
  </span>
)

const Separator = ({ className = "", ...props }: any) => (
  <hr className={`border-gray-700 ${className}`} {...props} />
)

const classes = {
  guerreiro: {
    name: "Guerreiro",
    icon: "⚔️",
    baseHp: 140,
    baseMana: 40,
    baseAttack: 18,
    baseDefense: 15,
    skills: [
      {
        name: "Golpe Devastador",
        cost: 15,
        damage: 30,
        type: "attack",
        description: "Um ataque poderoso que causa dano massivo",
      },
      {
        name: "Fúria Berserker",
        cost: 25,
        effect: "buff_attack",
        duration: 4,
        description: "Aumenta drasticamente o ataque por alguns turnos",
      },
      {
        name: "Escudo Protetor",
        cost: 20,
        effect: "buff_defense",
        duration: 5,
        description: "Cria uma barreira protetora",
      },
      { name: "Investida Heroica", cost: 30, damage: 45, type: "attack", description: "Ataque final devastador" },
    ],
    evolution: { level: 15, class: "paladino", name: "Paladino" },
  },
  mago: {
    name: "Mago",
    icon: "🔮",
    baseHp: 90,
    baseMana: 120,
    baseAttack: 10,
    baseDefense: 8,
    skills: [
      {
        name: "Bola de Fogo",
        cost: 25,
        damage: 35,
        type: "magic",
        description: "Projétil flamejante que causa queimaduras",
      },
      {
        name: "Raio Congelante",
        cost: 30,
        damage: 40,
        type: "magic",
        freeze: true,
        description: "Congela o inimigo por um turno",
      },
      { name: "Escudo Arcano", cost: 20, effect: "buff_defense", duration: 6, description: "Proteção mágica poderosa" },
      { name: "Meteoro", cost: 50, damage: 70, type: "magic", description: "Invoca um meteoro devastador" },
    ],
    evolution: { level: 15, class: "arquimago", name: "Arquimago" },
  },
  ladrao: {
    name: "Ladrão",
    icon: "🗡️",
    baseHp: 110,
    baseMana: 70,
    baseAttack: 15,
    baseDefense: 10,
    skills: [
      {
        name: "Ataque Furtivo",
        cost: 20,
        damage: 40,
        critChance: 0.5,
        description: "Ataque pelas costas com alta chance de crítico",
      },
      { name: "Veneno Letal", cost: 25, damage: 20, poison: 3, description: "Aplica veneno que causa dano contínuo" },
      { name: "Desarmar", cost: 15, effect: "disarm", description: "Remove arma do inimigo temporariamente" },
      {
        name: "Golpe Sombrio",
        cost: 35,
        damage: 55,
        type: "shadow",
        description: "Ataque das sombras que ignora defesa",
      },
    ],
    evolution: { level: 15, class: "assassino", name: "Assassino" },
  },
  clerigo: {
    name: "Clérigo",
    icon: "✨",
    baseHp: 120,
    baseMana: 100,
    baseAttack: 12,
    baseDefense: 12,
    skills: [
      { name: "Cura Divina", cost: 25, heal: 50, type: "heal", description: "Restaura vida com poder divino" },
      {
        name: "Luz Sagrada",
        cost: 30,
        damage: 35,
        type: "holy",
        description: "Ataque sagrado contra criaturas das trevas",
      },
      {
        name: "Bênção Protetora",
        cost: 35,
        effect: "buff_all",
        duration: 6,
        description: "Melhora todos os atributos",
      },
      { name: "Ressurreição", cost: 60, effect: "revive", description: "Revive com 50% da vida se morrer" },
    ],
    evolution: { level: 15, class: "sumo_sacerdote", name: "Sumo Sacerdote" },
  },
  paladino: {
    name: "Paladino",
    icon: "🛡️",
    baseHp: 180,
    baseMana: 80,
    baseAttack: 25,
    baseDefense: 22,
    skills: [
      { name: "Golpe Sagrado", cost: 20, damage: 45, type: "holy", description: "Ataque imbuído com poder divino" },
      {
        name: "Aura de Proteção",
        cost: 40,
        effect: "party_defense",
        duration: 8,
        description: "Protege todos os aliados",
      },
      {
        name: "Julgamento Final",
        cost: 60,
        damage: 80,
        type: "holy",
        description: "O poder dos céus desce sobre o inimigo",
      },
    ],
    hidden: true,
  },
  arquimago: {
    name: "Arquimago",
    icon: "🌟",
    baseHp: 120,
    baseMana: 200,
    baseAttack: 15,
    baseDefense: 12,
    skills: [
      {
        name: "Tempestade Arcana",
        cost: 40,
        damage: 60,
        type: "magic",
        aoe: true,
        description: "Magia devastadora em área",
      },
      { name: "Manipular Tempo", cost: 80, effect: "time_stop", description: "Para o tempo por alguns turnos" },
      { name: "Portal Dimensional", cost: 100, damage: 120, type: "magic", description: "Abre um portal para o vazio" },
    ],
    hidden: true,
  },
  assassino: {
    name: "Assassino",
    icon: "🥷",
    baseHp: 140,
    baseMana: 100,
    baseAttack: 22,
    baseDefense: 14,
    skills: [
      { name: "Morte Silenciosa", cost: 30, damage: 70, critChance: 0.8, description: "Ataque letal e silencioso" },
      { name: "Clones Sombrios", cost: 50, effect: "multi_attack", description: "Cria clones para múltiplos ataques" },
      {
        name: "Execução",
        cost: 80,
        damage: 150,
        type: "execute",
        description: "Mata instantaneamente inimigos com pouca vida",
      },
    ],
    hidden: true,
  },
  sumo_sacerdote: {
    name: "Sumo Sacerdote",
    icon: "👼",
    baseHp: 160,
    baseMana: 180,
    baseAttack: 18,
    baseDefense: 18,
    skills: [
      { name: "Cura Milagrosa", cost: 40, heal: 100, type: "heal", description: "Cura completa instantânea" },
      { name: "Ira Divina", cost: 60, damage: 90, type: "holy", description: "A fúria dos deuses" },
      { name: "Ressurreição Completa", cost: 120, effect: "full_revive", description: "Revive com vida completa" },
    ],
    hidden: true,
  },
}

const cities = {
  pedravale: {
    name: "🏰 Vila de Pedravale",
    description: "Uma vila próspera cercada por muralhas antigas. O centro da civilização em Aethermoor.",
    npcs: ["marcus_ferreiro", "elena_curandeira", "tobias_comerciante", "capitao_aldric"],
    connections: ["floresta_sombria", "montanhas_gelidas", "cidade_dourada"],
    shops: true,
    safe: true,
    type: "vila",
  },
  cidade_dourada: {
    name: "🏛️ Cidade Dourada",
    description: "A capital do reino, uma metrópole brilhante com torres que tocam as nuvens.",
    npcs: ["princesa_lyanna", "rei_dourado", "mestre_guilda"],
    connections: ["pedravale", "porto_tempestade", "academia_arcana"],
    shops: true,
    safe: true,
    type: "capital",
    special: "Aqui você pode evoluir sua classe no nível 15",
  },
  porto_tempestade: {
    name: "⚓ Porto da Tempestade",
    description: "Uma cidade portuária onde piratas e comerciantes se misturam.",
    npcs: ["capitao_barbanegra", "comerciante_exotico", "pirata_aposentado"],
    connections: ["cidade_dourada", "ilha_perdida"],
    shops: true,
    safe: false,
    type: "porto",
    danger: "medium",
  },
  academia_arcana: {
    name: "🎓 Academia Arcana",
    description: "Uma torre flutuante onde os maiores magos estudam os mistérios do universo.",
    npcs: ["arquimago_supremo", "professora_luna", "bibliotecario_antigo"],
    connections: ["cidade_dourada", "biblioteca_sabios"],
    shops: true,
    safe: true,
    type: "academia",
    special: "Magos podem aprender magias especiais aqui",
  },
  vila_elfica: {
    name: "🌿 Vila Élfica",
    description: "Uma cidade nas árvores habitada pelos elfos ancestrais.",
    npcs: ["rainha_fadas", "elfo_anciao", "druida_natureza"],
    connections: ["floresta_sombria"],
    shops: true,
    safe: true,
    type: "vila_elfica",
    special: "Relacionamentos com elfos concedem bônus especiais",
  },
  cidade_subterranea: {
    name: "⛏️ Cidade Subterrânea Anã",
    description: "Uma fortaleza escavada na montanha, lar dos anões mestres ferreiros.",
    npcs: ["rei_anao", "mestre_ferreiro", "minerador_veterano"],
    connections: ["montanhas_gelidas"],
    shops: true,
    safe: true,
    type: "cidade_ana",
    special: "Melhores equipamentos e forja lendária",
  },
  ilha_perdida: {
    name: "🏝️ Ilha Perdida",
    description: "Uma ilha misteriosa que aparece apenas para os dignos.",
    npcs: ["eremita_tempo", "guardiao_ilha"],
    connections: ["porto_tempestade"],
    shops: false,
    safe: false,
    type: "ilha",
    danger: "extreme",
    special: "Contém tesouros lendários",
  },
  biblioteca_sabios: {
    name: "📚 Biblioteca dos Sábios",
    description: "Uma biblioteca infinita que contém todo o conhecimento do mundo.",
    npcs: ["oraculo_conhecimento", "guardiao_livros"],
    connections: ["academia_arcana"],
    shops: false,
    safe: true,
    type: "biblioteca",
    special: "Aqui você pode aprender sobre conquistas e segredos",
  },
}

const npcs = {
  // NPCs de Pedravale
  marcus_ferreiro: {
    name: "Marcus, o Ferreiro",
    icon: "🔨",
    location: "pedravale",
    personality: "Rude mas honesto",
    relationship: 50,
    maxRelationship: 100,
    story: "Um ferreiro veterano que perdeu o filho na última invasão de orcs.",
    dialogues: {
      first: "Hmph! Outro aventureiro novato? Espero que você dure mais que os outros...",
      friendly: "Ah, você voltou! Suas façanhas estão se espalhando pela vila.",
      close: "Você me lembra meu filho... Ele também era corajoso como você.",
      romance: null,
    },
    shop: {
      "Espada de Ferro": 100,
      "Machado de Guerra": 150,
      "Armadura de Placas": 300,
      "Escudo de Ferro": 80,
    },
    quests: ["forjar_lamina_lendaria"],
    gifts: ["Minério Raro", "Cerveja Anã"],
    relationshipQuests: [
      { level: 60, name: "Memórias do Passado", reward: "Martelo do Pai" },
      { level: 80, name: "Honrar o Filho", reward: "Lâmina Heróica" },
    ],
  },
  elena_curandeira: {
    name: "Elena, a Curandeira",
    icon: "🌿",
    location: "pedravale",
    personality: "Gentil e sábia",
    relationship: 60,
    maxRelationship: 100,
    story: "Uma curandeira que aprendeu as artes da cura com os elfos.",
    dialogues: {
      first: "Bem-vindo, jovem aventureiro. Posso ver bondade em seus olhos.",
      friendly: "Suas aventuras te machucaram, mas também te fortaleceram.",
      close: "Você se tornou como um filho para mim.",
      romance: "Meu coração... há muito tempo não sentia isso...",
    },
    shop: {
      "Poção de Vida": 25,
      "Poção de Mana": 30,
      "Elixir de Cura": 75,
      Antídoto: 40,
    },
    quests: ["coletar_ervas_raras"],
    gifts: ["Flores Raras", "Livro de Poesias", "Cristal Curativo"],
    romanceable: true,
    relationshipQuests: [
      { level: 70, name: "Segredos Élficos", reward: "Poção da Vida Eterna" },
      { level: 90, name: "Declaração de Amor", reward: "Anel do Coração Élfico" },
    ],
  },
  princesa_lyanna: {
    name: "Princesa Lyanna",
    icon: "👸",
    location: "cidade_dourada",
    personality: "Nobre mas rebelde",
    relationship: 30,
    maxRelationship: 100,
    story: "A princesa do reino, cansada da vida na corte e sonhando com aventuras.",
    dialogues: {
      first: "Um aventureiro na corte? Que interessante...",
      friendly: "Conte-me sobre suas aventuras! Eu sonho em viver assim.",
      close: "Você me mostrou que existe um mundo além destes muros dourados.",
      romance: "Fugiria comigo? Poderíamos governar juntos um novo reino...",
    },
    shop: null,
    quests: ["escapar_corte", "encontro_secreto"],
    gifts: ["Jóias Reais", "Livro de Aventuras", "Rosa Dourada"],
    romanceable: true,
    rival: "principe_rival",
    relationshipQuests: [
      { level: 60, name: "Fuga da Corte", reward: "Coroa da Liberdade" },
      { level: 80, name: "Amor Proibido", reward: "Anel Real" },
      { level: 100, name: "Casamento Real", reward: "Final: Rei/Rainha de Aethermoor" },
    ],
  },
  capitao_barbanegra: {
    name: "Capitão Barbanegra",
    icon: "🏴‍☠️",
    location: "porto_tempestade",
    personality: "Perigoso mas honrado",
    relationship: 20,
    maxRelationship: 100,
    story: "O mais temido pirata dos sete mares, mas com um código de honra.",
    dialogues: {
      first: "Arrr! Outro terrestre querendo brincar de pirata?",
      friendly: "Você tem coragem, eu admito. Talvez sirva para minha tripulação.",
      close: "Você é um verdadeiro pirata agora, meu amigo!",
      rival: "Você me traiu! Agora somos inimigos mortais!",
    },
    shop: {
      "Cutelo Pirata": 200,
      "Pistola Antiga": 250,
      "Mapa do Tesouro": 500,
    },
    quests: ["roubar_tesouro_real", "batalha_naval"],
    gifts: ["Rum Especial", "Tesouro Pirata"],
    canBeRival: true,
    relationshipQuests: [
      { level: 50, name: "Código Pirata", reward: "Bandana do Capitão" },
      { level: 80, name: "Rei dos Piratas", reward: "Navio Lendário" },
    ],
  },
  rainha_fadas: {
    name: "Rainha das Fadas",
    icon: "🧚‍♀️",
    location: "vila_elfica",
    personality: "Misteriosa e sábia",
    relationship: 40,
    maxRelationship: 100,
    story: "A governante imortal das fadas, guardiã dos segredos da natureza.",
    dialogues: {
      first: "Um mortal em nosso reino... interessante.",
      friendly: "Você tem uma aura especial, jovem herói.",
      close: "Você transcendeu sua mortalidade. Aceite nossa bênção eterna.",
      romance: "Um amor entre mortal e imortal... será possível?",
    },
    shop: {
      "Poção Mágica": 100,
      "Amuleto da Natureza": 300,
      "Bênção Élfica": 500,
    },
    quests: ["proteger_floresta", "ritual_imortalidade"],
    gifts: ["Flor Imortal", "Cristal da Lua", "Lágrima de Fada"],
    romanceable: true,
    relationshipQuests: [
      { level: 70, name: "Bênção da Natureza", reward: "Coroa de Flores Eternas" },
      { level: 90, name: "Amor Imortal", reward: "Final: Consorte Imortal" },
    ],
  },
}

const bosses = {
  lich_supremo: {
    name: "Lich Supremo Malachar",
    hp: 800,
    maxHp: 800,
    attack: 45,
    defense: 25,
    phases: [
      {
        name: "Forma Mortal",
        hp: 300,
        abilities: ["drenar_vida", "invocar_esqueletos"],
        dialogue: "Mortais tolos! Vocês não sabem com quem estão lidando!",
      },
      {
        name: "Forma Espectral",
        hp: 300,
        abilities: ["raio_morte", "tempestade_almas"],
        dialogue: "Agora vocês verão meu verdadeiro poder!",
      },
      {
        name: "Forma Final",
        hp: 200,
        abilities: ["apocalipse_sombrio", "ressurreição_forçada"],
        dialogue: "Se eu cair, levarei este mundo comigo!",
      },
    ],
    location: "ruinas_antigas",
    rewards: {
      exp: 1000,
      gold: 500,
      items: ["Cajado do Lich Supremo", "Coroa da Morte", "Grimório Proibido"],
    },
    unlocks: ["final_boss"],
  },
  rei_piratas: {
    name: "Rei dos Piratas Vermelho",
    hp: 600,
    maxHp: 600,
    attack: 40,
    defense: 20,
    phases: [
      {
        name: "Duelo Honrado",
        hp: 400,
        abilities: ["golpe_cutelo", "tiro_certeiro"],
        dialogue: "Arrr! Vamos resolver isso como piratas de verdade!",
      },
      {
        name: "Fúria Pirata",
        hp: 200,
        abilities: ["tempestade_cutelos", "canhonada_devastadora"],
        dialogue: "Você me forçou a usar minha verdadeira força!",
      },
    ],
    location: "ilha_perdida",
    rewards: {
      exp: 800,
      gold: 400,
      items: ["Cutelo Lendário", "Chapéu do Rei Pirata", "Mapa do Tesouro Final"],
    },
  },
  dragao_anciao: {
    name: "Syrathex, o Dragão Ancião",
    hp: 1200,
    maxHp: 1200,
    attack: 60,
    defense: 35,
    phases: [
      {
        name: "Teste de Valor",
        hp: 400,
        abilities: ["sopro_fogo", "garras_dracônicas"],
        dialogue: "Mortal, prove que é digno de enfrentar um dragão!",
      },
      {
        name: "Fúria Ancestral",
        hp: 400,
        abilities: ["tempestade_fogo", "voo_devastador"],
        dialogue: "Impressionante! Mas agora sinta a fúria dos antigos!",
      },
      {
        name: "Poder Absoluto",
        hp: 400,
        abilities: ["apocalipse_dracônico", "regeneração_ancestral"],
        dialogue: "Você é verdadeiramente lendário! Aceite meu poder!",
      },
    ],
    location: "fortaleza_dragao",
    rewards: {
      exp: 2000,
      gold: 1000,
      items: ["Coração do Dragão Ancião", "Escama Lendária", "Coroa de Aethermoor"],
    },
    finalBoss: true,
    canBecomeAlly: true,
  },
}

const achievements = {
  primeiro_passo: {
    name: "Primeiro Passo",
    description: "Complete sua primeira missão",
    icon: "👶",
    reward: { exp: 50, gold: 25 },
    unlocked: false,
  },
  explorador: {
    name: "Explorador de Mundos",
    description: "Visite todas as cidades de Aethermoor",
    icon: "🗺️",
    progress: 0,
    target: 8,
    reward: { exp: 200, gold: 100, item: "Botas do Explorador" },
    unlocked: false,
  },
  cacador_monstros: {
    name: "Caçador de Monstros",
    description: "Derrote 100 criaturas",
    icon: "⚔️",
    progress: 0,
    target: 100,
    reward: { exp: 300, gold: 150, item: "Lâmina do Caçador" },
    unlocked: false,
  },
  matador_dragoes: {
    name: "Matador de Dragões",
    description: "Derrote o Dragão Ancião",
    icon: "🐉",
    reward: { exp: 500, gold: 250, item: "Título: Matador de Dragões" },
    unlocked: false,
  },
  coracao_partido: {
    name: "Coração Partido",
    description: "Tenha um relacionamento romântico rejeitado",
    icon: "💔",
    reward: { exp: 100, item: "Poção da Melancolia" },
    unlocked: false,
  },
  casamento_real: {
    name: "Casamento Real",
    description: "Case-se com a Princesa Lyanna",
    icon: "👑",
    reward: { exp: 1000, gold: 500, ending: "Rei/Rainha de Aethermoor" },
    unlocked: false,
  },
  amor_imortal: {
    name: "Amor Imortal",
    description: "Torne-se consorte da Rainha das Fadas",
    icon: "🧚‍♀️",
    reward: { exp: 800, item: "Imortalidade", ending: "Consorte Imortal" },
    unlocked: false,
  },
  rei_piratas: {
    name: "Rei dos Piratas",
    description: "Torne-se o líder de todos os piratas",
    icon: "🏴‍☠️",
    reward: { exp: 600, gold: 300, ending: "Rei dos Piratas" },
    unlocked: false,
  },
  lenda_viva: {
    name: "Lenda Viva",
    description: "Alcance o nível máximo (50)",
    icon: "⭐",
    reward: { exp: 0, gold: 1000, item: "Auréola Lendária" },
    unlocked: false,
  },
  colecionador: {
    name: "Colecionador Supremo",
    description: "Obtenha todos os itens lendários",
    icon: "💎",
    progress: 0,
    target: 15,
    reward: { exp: 400, gold: 200, item: "Baú do Colecionador" },
    unlocked: false,
  },
}

const equipment = {
  weapons: {
    guerreiro: {
      "Espada de Ferro": { attack: 10, price: 100, slot: "weapon" },
      "Espada Flamejante": { attack: 15, fire: 5, price: 250, slot: "weapon" },
      Excalibur: { attack: 35, holy: 15, price: 1000, legendary: true, slot: "weapon" },
    },
    mago: {
      "Cajado Básico": { attack: 5, mana: 15, price: 80, slot: "weapon" },
      "Cajado Arcano": { attack: 8, mana: 25, price: 150, slot: "weapon" },
      "Bastão Celestial": { attack: 25, mana: 50, holy: 20, price: 800, slot: "weapon" },
    },
    ladrao: {
      "Adaga Simples": { attack: 8, price: 60, slot: "weapon" },
      "Adaga Venenosa": { attack: 12, poison: true, price: 120, slot: "weapon" },
      "Lâminas Gêmeas": { attack: 16, critChance: 0.3, price: 400, slot: "weapon" },
    },
    clerigo: {
      "Martelo Sagrado": { attack: 10, holy: 5, price: 120, slot: "weapon" },
      "Martelo dos Titãs": { attack: 20, stun: true, price: 400, slot: "weapon" },
    },
  },
  armor: {
    all: {
      "Armadura de Couro": { defense: 6, price: 80, slot: "armor" },
      "Armadura de Placas": { defense: 15, hp: 25, price: 250, slot: "armor" },
      "Armadura Dracônica": { defense: 25, hp: 50, fireRes: true, price: 1000, slot: "armor" },
    },
    mago: {
      "Robes Místicos": { defense: 4, mana: 20, price: 100, slot: "armor" },
      "Robes Arcanos": { defense: 8, mana: 40, price: 300, slot: "armor" },
    },
  },
  shields: {
    guerreiro: {
      "Escudo de Ferro": { defense: 8, price: 80, slot: "shield" },
      "Escudo Sagrado": { defense: 15, holyRes: true, price: 300, slot: "shield" },
    },
    clerigo: {
      "Escudo Divino": { defense: 12, holy: 5, price: 200, slot: "shield" },
    },
  },
  accessories: {
    all: {
      "Anel de Força": { attack: 5, price: 200, slot: "accessory" },
      "Anel de Sabedoria": { mana: 15, price: 200, slot: "accessory" },
      "Amuleto de Proteção": { defense: 8, price: 250, slot: "accessory" },
      "Colar da Vida": { hp: 40, price: 300, slot: "accessory" },
    },
  },
}

export default function AethermoorRPG() {
  const [gameState, setGameState] = useState({
    phase: "character-creation", // character-creation, gameplay, combat
    player: {
      name: "",
      class: "",
      level: 1,
      hp: 100,
      maxHp: 100,
      mana: 50,
      maxMana: 50,
      attack: 10,
      defense: 5,
      exp: 0,
      expNeeded: 100,
      gold: 100,
      inventory: [],
      equipment: { weapon: null, armor: null, shield: null, accessory: null },
      location: "pedravale",
      visitedCities: ["pedravale"],
      unlockedCities: ["pedravale", "floresta_sombria"],
    },
    relationships: {},
    achievements: { ...achievements },
    activeQuests: [],
    completedQuests: [],
    currentEnemy: null,
    inCombat: false,
    currentDialogue: null,
    gameLog: ["Bem-vindo às Crônicas de Aethermoor!"],
  })

  const [selectedClass, setSelectedClass] = useState("")

  useEffect(() => {
    const initialRelationships = {}
    Object.keys(npcs).forEach((npcId) => {
      initialRelationships[npcId] = npcs[npcId].relationship || 50
    })
    setGameState((prev) => ({ ...prev, relationships: initialRelationships }))
  }, [])

  const createCharacter = (name: string, className: string) => {
    const classData = classes[className]
    setGameState((prev) => ({
      ...prev,
      phase: "gameplay",
      player: {
        ...prev.player,
        name,
        class: className,
        hp: classData.baseHp,
        maxHp: classData.baseHp,
        mana: classData.baseMana,
        maxMana: classData.baseMana,
        attack: classData.baseAttack,
        defense: classData.baseDefense,
        inventory: ["Poção de Vida", "Poção de Vida", "Poção de Mana"],
      },
    }))
    addLog(`${name} o ${classData.name} inicia sua jornada em Aethermoor!`)
  }

  const addLog = (message: string) => {
    setGameState((prev) => ({
      ...prev,
      gameLog: [...prev.gameLog.slice(-19), message], // Keep last 20 messages
    }))
  }

  const equipItem = (item: string) => {
    const playerClass = gameState.player.class
    let itemData: any = null
    let slot: string | null = null

    // Find item in equipment categories
    Object.entries(equipment).forEach(([category, items]: [string, any]) => {
      if (items[playerClass] && items[playerClass][item]) {
        itemData = items[playerClass][item]
        slot = itemData.slot
      } else if (items.all && items.all[item]) {
        itemData = items.all[item]
        slot = itemData.slot
      }
    })

    if (itemData && slot) {
      // Check class restrictions
      if (slot === "shield" && !["guerreiro", "clerigo"].includes(playerClass)) {
        addLog("Apenas Guerreiros e Clérigos podem usar escudos!")
        return
      }

      setGameState((prev) => {
        const newEquipment = { ...prev.player.equipment }
        const oldItem = newEquipment[slot as keyof typeof newEquipment]

        // Unequip old item
        if (oldItem) {
          prev.player.inventory.push(oldItem)
        }

        // Equip new item
        newEquipment[slot as keyof typeof newEquipment] = item
        const newInventory = prev.player.inventory.filter((invItem) => invItem !== item)

        // Apply stats
        const newStats = { ...prev.player }
        if (itemData.attack) newStats.attack += itemData.attack
        if (itemData.defense) newStats.defense += itemData.defense
        if (itemData.hp) {
          newStats.maxHp += itemData.hp
          newStats.hp += itemData.hp
        }
        if (itemData.mana) {
          newStats.maxMana += itemData.mana
          newStats.mana += itemData.mana
        }

        return {
          ...prev,
          player: {
            ...newStats,
            equipment: newEquipment,
            inventory: newInventory,
          },
        }
      })

      addLog(`${item} equipado com sucesso!`)
    } else {
      addLog("Este item não pode ser equipado!")
    }
  }

  const checkClassEvolution = () => {
    const { player } = gameState
    const classData = classes[player.class]

    if (classData.evolution && player.level >= classData.evolution.level && player.location === "cidade_dourada") {
      setGameState((prev) => ({
        ...prev,
        currentDialogue: {
          type: "class_evolution",
          title: "Evolução de Classe Disponível!",
          text: `Você alcançou o nível ${classData.evolution.level} e pode evoluir para ${classData.evolution.name}!`,
          choices: [
            {
              text: `Evoluir para ${classData.evolution.name}`,
              action: () => evolveClass(classData.evolution.class),
            },
            {
              text: "Manter classe atual",
              action: () => closeDialogue(),
            },
          ],
        },
      }))
    }
  }

  const evolveClass = (newClass: string) => {
    const newClassData = classes[newClass]
    setGameState((prev) => ({
      ...prev,
      player: {
        ...prev.player,
        class: newClass,
        maxHp: prev.player.maxHp + 50,
        hp: prev.player.hp + 50,
        maxMana: prev.player.maxMana + 30,
        mana: prev.player.mana + 30,
        attack: prev.player.attack + 10,
        defense: prev.player.defense + 8,
      },
      currentDialogue: null,
    }))
    addLog(`Parabéns! Você evoluiu para ${newClassData.name}!`)
    unlockAchievement("primeiro_passo")
  }

  const unlockAchievement = (achievementId: string) => {
    setGameState((prev) => {
      if (prev.achievements[achievementId].unlocked) return prev

      const achievement = prev.achievements[achievementId]
      const newAchievements = {
        ...prev.achievements,
        [achievementId]: { ...achievement, unlocked: true },
      }

      // Apply rewards
      const newPlayer = { ...prev.player }
      if (achievement.reward.exp) newPlayer.exp += achievement.reward.exp
      if (achievement.reward.gold) newPlayer.gold += achievement.reward.gold
      if (achievement.reward.item) newPlayer.inventory.push(achievement.reward.item)

      return {
        ...prev,
        player: newPlayer,
        achievements: newAchievements,
      }
    })

    addLog(`🏆 Conquista desbloqueada: ${achievements[achievementId].name}!`)
  }

  const closeDialogue = () => {
    setGameState((prev) => ({ ...prev, currentDialogue: null }))
  }

  const travelTo = (cityId: string) => {
    setGameState((prev) => {
      const newVisited = prev.player.visitedCities.includes(cityId)
        ? prev.player.visitedCities
        : [...prev.player.visitedCities, cityId]

      return {
        ...prev,
        player: {
          ...prev.player,
          location: cityId,
          visitedCities: newVisited,
        },
      }
    })

    addLog(`Você viajou para ${cities[cityId].name}`)

    // Check achievements
    if (gameState.player.visitedCities.length >= 8) {
      unlockAchievement("explorador")
    }

    // Check class evolution
    checkClassEvolution()
  }

  const interactWithNPC = (npcId: string) => {
    const npc = npcs[npcId]
    const relationship = gameState.relationships[npcId] || 50

    let dialogue
    if (relationship >= 80) {
      dialogue = npc.dialogues.close
    } else if (relationship >= 60) {
      dialogue = npc.dialogues.friendly
    } else {
      dialogue = npc.dialogues.first
    }

    setGameState((prev) => ({
      ...prev,
      currentDialogue: {
        type: "npc",
        npc: npcId,
        title: `${npc.icon} ${npc.name}`,
        text: dialogue,
        relationship: relationship,
        choices: [
          {
            text: "💬 Conversar",
            action: () => improveRelationship(npcId, 5),
          },
          ...(npc.shop
            ? [
                {
                  text: "🛒 Ver Loja",
                  action: () => showShop(npcId),
                },
              ]
            : []),
          ...(npc.romanceable && relationship >= 70
            ? [
                {
                  text: "💕 Declarar Amor",
                  action: () => attemptRomance(npcId),
                },
              ]
            : []),
          {
            text: "🔙 Sair",
            action: () => closeDialogue(),
          },
        ],
      },
    }))
  }

  const improveRelationship = (npcId: string, amount: number) => {
    setGameState((prev) => ({
      ...prev,
      relationships: {
        ...prev.relationships,
        [npcId]: Math.min(100, prev.relationships[npcId] + amount),
      },
    }))
    addLog(`Relacionamento com ${npcs[npcId].name} melhorou!`)
    closeDialogue()
  }

  const attemptRomance = (npcId: string) => {
    const relationship = gameState.relationships[npcId]
    const npc = npcs[npcId]

    if (relationship >= 90) {
      addLog(`${npc.name} aceita seu amor! ❤️`)
      if (npcId === "princesa_lyanna") {
        unlockAchievement("casamento_real")
      } else if (npcId === "rainha_fadas") {
        unlockAchievement("amor_imortal")
      }
    } else {
      addLog(`${npc.name} gentilmente recusa... Talvez com mais tempo...`)
      unlockAchievement("coracao_partido")
    }
    closeDialogue()
  }

  const showShop = (npcId: string) => {
    const npc = npcs[npcId]
    setGameState((prev) => ({
      ...prev,
      currentDialogue: {
        type: "shop",
        npc: npcId,
        title: `🛒 Loja de ${npc.name}`,
        text: "O que você gostaria de comprar?",
        choices: Object.entries(npc.shop)
          .map(([item, price]: [string, any]) => ({
            text: `${item} - ${price} ouro`,
            action: () => buyItem(item, price as number, npcId),
          }))
          .concat([
            {
              text: "🔙 Voltar",
              action: () => interactWithNPC(npcId),
            },
          ]),
      },
    }))
  }

  const buyItem = (item: string, price: number, npcId: string) => {
    if (gameState.player.gold >= price) {
      setGameState((prev) => ({
        ...prev,
        player: {
          ...prev.player,
          gold: prev.player.gold - price,
          inventory: [...prev.player.inventory, item],
        },
      }))
      addLog(`Você comprou ${item}!`)
      improveRelationship(npcId, 2)
    } else {
      addLog("Ouro insuficiente!")
    }
  }

  const useItem = (item: string, index: number) => {
    // Simple item usage - can be expanded
    if (item.includes("Poção de Vida")) {
      const healAmount = Math.min(50, gameState.player.maxHp - gameState.player.hp)
      setGameState((prev) => ({
        ...prev,
        player: {
          ...prev.player,
          hp: prev.player.hp + healAmount,
          inventory: prev.player.inventory.filter((_, i) => i !== index),
        },
      }))
      addLog(`Você usou ${item} e recuperou ${healAmount} HP!`)
    } else if (item.includes("Poção de Mana")) {
      const manaAmount = Math.min(40, gameState.player.maxMana - gameState.player.mana)
      setGameState((prev) => ({
        ...prev,
        player: {
          ...prev.player,
          mana: prev.player.mana + manaAmount,
          inventory: prev.player.inventory.filter((_, i) => i !== index),
        },
      }))
      addLog(`Você usou ${item} e recuperou ${manaAmount} mana!`)
    } else {
      // Try to equip item
      equipItem(item)
    }
  }

  // Character Creation Phase
  if (gameState.phase === "character-creation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              ⚔️ Crônicas de Aethermoor ⚔️
            </h1>
            <p className="text-xl text-gray-300">Uma aventura épica te aguarda</p>
          </div>

          <Card className="bg-black/50 border-purple-500">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Crie seu Herói</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome do Personagem</label>
                <Input
                  placeholder="Digite o nome do seu herói"
                  className="bg-gray-800 border-gray-600"
                  onChange={(e) =>
                    setGameState((prev) => ({
                      ...prev,
                      player: { ...prev.player, name: e.target.value },
                    }))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-4">Escolha sua Classe</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(classes)
                    .filter(([_, classData]: [string, any]) => !classData.hidden)
                    .map(([classId, classData]: [string, any]) => (
                      <Card
                        key={classId}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedClass === classId
                            ? "bg-purple-600/50 border-purple-400 transform scale-105"
                            : "bg-gray-800/50 border-gray-600 hover:bg-gray-700/50"
                        }`}
                        onClick={() => setSelectedClass(classId)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-4xl mb-2">{classData.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{classData.name}</h3>
                          <div className="text-sm text-gray-300 space-y-1">
                            <p>
                              HP: {classData.baseHp} | Mana: {classData.baseMana}
                            </p>
                            <p>
                              Ataque: {classData.baseAttack} | Defesa: {classData.baseDefense}
                            </p>
                          </div>
                          {classData.evolution && (
                            <Badge className="mt-2 bg-yellow-600">Evolui para {classData.evolution.name}</Badge>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={!gameState.player.name || !selectedClass}
                onClick={() => createCharacter(gameState.player.name, selectedClass)}
              >
                🚀 Iniciar Aventura
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Main Gameplay Phase
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-4">
          {/* Current Location */}
          <Card className="bg-black/50 border-purple-500">
            <CardHeader>
              <CardTitle className="text-center text-2xl">{cities[gameState.player.location].name}</CardTitle>
              <CardDescription className="text-center">{cities[gameState.player.location].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Travel Options */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">🗺️ Viajar para:</h3>
                <div className="flex flex-wrap gap-2">
                  {cities[gameState.player.location].connections.map((cityId) => (
                    <Button
                      key={cityId}
                      variant="outline"
                      size="sm"
                      onClick={() => travelTo(cityId)}
                      className="border-purple-400 text-purple-300 hover:bg-purple-600"
                    >
                      {cities[cityId].name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* NPCs */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">👥 Personagens:</h3>
                <div className="flex flex-wrap gap-2">
                  {cities[gameState.player.location].npcs?.map((npcId) => (
                    <Button
                      key={npcId}
                      variant="outline"
                      size="sm"
                      onClick={() => interactWithNPC(npcId)}
                      className="border-green-400 text-green-300 hover:bg-green-600"
                    >
                      {npcs[npcId].icon} {npcs[npcId].name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Special Location Features */}
              {cities[gameState.player.location].special && (
                <div className="bg-yellow-900/30 border border-yellow-600 rounded p-3 mb-4">
                  <p className="text-yellow-300">✨ {cities[gameState.player.location].special}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Dialogue Modal */}
          {gameState.currentDialogue && (
            <Card className="bg-black/80 border-yellow-500">
              <CardHeader>
                <CardTitle>{gameState.currentDialogue.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{gameState.currentDialogue.text}</p>

                {gameState.currentDialogue.relationship && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Relacionamento:</span>
                      <span>{gameState.currentDialogue.relationship}/100</span>
                    </div>
                    <Progress value={gameState.currentDialogue.relationship} className="h-2" />
                  </div>
                )}

                <div className="space-y-2">
                  {gameState.currentDialogue.choices.map((choice, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={choice.action}
                    >
                      {choice.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Game Log */}
          <Card className="bg-black/50 border-gray-600">
            <CardHeader>
              <CardTitle className="text-lg">📜 Registro de Aventuras</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 overflow-y-auto space-y-1 text-sm">
                {gameState.gameLog.map((log, index) => (
                  <p key={index} className="text-gray-300">
                    {log}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Character Stats */}
          <Card className="bg-black/50 border-purple-500">
            <CardHeader>
              <CardTitle className="text-center">
                {classes[gameState.player.class].icon} {gameState.player.name}
              </CardTitle>
              <CardDescription className="text-center">
                {classes[gameState.player.class].name} - Nível {gameState.player.level}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* HP */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>❤️ Vida:</span>
                  <span>
                    {gameState.player.hp}/{gameState.player.maxHp}
                  </span>
                </div>
                <Progress value={(gameState.player.hp / gameState.player.maxHp) * 100} className="h-2" />
              </div>

              {/* Mana */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>💙 Mana:</span>
                  <span>
                    {gameState.player.mana}/{gameState.player.maxMana}
                  </span>
                </div>
                <Progress value={(gameState.player.mana / gameState.player.maxMana) * 100} className="h-2" />
              </div>

              {/* EXP */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>⭐ EXP:</span>
                  <span>
                    {gameState.player.exp}/{gameState.player.expNeeded}
                  </span>
                </div>
                <Progress value={(gameState.player.exp / gameState.player.expNeeded) * 100} className="h-2" />
              </div>

              {/* Gold */}
              <div className="flex justify-between">
                <span>💰 Ouro:</span>
                <span>{gameState.player.gold}</span>
              </div>

              <Separator />

              {/* Combat Stats */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>⚔️ Ataque: {gameState.player.attack}</div>
                <div>🛡️ Defesa: {gameState.player.defense}</div>
              </div>
            </CardContent>
          </Card>

          {/* Equipment */}
          <Card className="bg-black/50 border-blue-500">
            <CardHeader>
              <CardTitle className="text-lg">⚔️ Equipamentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(gameState.player.equipment).map(([slot, item]) => (
                <div key={slot} className="flex justify-between text-sm">
                  <span className="capitalize">{slot}:</span>
                  <span className={item ? "text-green-400" : "text-gray-500"}>{item || "Vazio"}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Inventory */}
          <Card className="bg-black/50 border-green-500">
            <CardHeader>
              <CardTitle className="text-lg">🎒 Inventário</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {gameState.player.inventory.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs p-2 h-auto bg-transparent"
                    onClick={() => useItem(item, index)}
                  >
                    {item}
                  </Button>
                ))}
                {Array.from({ length: Math.max(0, 12 - gameState.player.inventory.length) }).map((_, index) => (
                  <div key={`empty-${index}`} className="border border-gray-600 rounded p-2 h-8"></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-black/50 border-yellow-500">
            <CardHeader>
              <CardTitle className="text-lg">🏆 Conquistas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-xs">
                {Object.entries(gameState.achievements)
                  .filter(([_, achievement]: [string, any]) => achievement.unlocked)
                  .slice(0, 5)
                  .map(([id, achievement]: [string, any]) => (
                    <div key={id} className="flex items-center gap-2">
                      <span>{achievement.icon}</span>
                      <span className="text-yellow-400">{achievement.name}</span>
                    </div>
                  ))}
                {Object.values(gameState.achievements).filter((a: any) => a.unlocked).length === 0 && (
                  <p className="text-gray-500">Nenhuma conquista desbloqueada</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
