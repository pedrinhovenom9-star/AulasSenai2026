export const businesses = [
  // Alimentação
  {
    id: 1,
    name: "Padaria da Maria",
    category: "Alimentação",
    rating: 4.8,
    address: "Rua das Flores, 123 - Centro",
    phone: "(11) 98765-4321",
    hours: {
      monday: "6:00 - 20:00",
      tuesday: "6:00 - 20:00",
      wednesday: "6:00 - 20:00",
      thursday: "6:00 - 20:00",
      friday: "6:00 - 20:00",
      saturday: "6:00 - 18:00",
      sunday: "7:00 - 13:00"
    },
    description: "Pães fresquinhos, bolos caseiros e salgados deliciosos feitos com muito carinho todos os dias.",
    fullDescription: "A Padaria da Maria é uma tradição no bairro há mais de 20 anos. Oferecemos pães artesanais, bolos de festa, salgados para eventos e um café da manhã completo. Nossos produtos são feitos diariamente com ingredientes selecionados e muito amor. Venha experimentar nosso famoso pão francês quentinho!",
    featured: true,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    reviews: [
      { author: "João Silva", rating: 5, comment: "Melhor pão francês da região! Sempre fresquinho.", date: "2026-02-28" },
      { author: "Ana Costa", rating: 5, comment: "Os bolos são maravilhosos, recomendo!", date: "2026-02-25" },
      { author: "Carlos Mendes", rating: 4, comment: "Ótimo atendimento e produtos de qualidade.", date: "2026-02-20" }
    ]
  },
  {
    id: 2,
    name: "Pizzaria do João",
    category: "Alimentação",
    rating: 4.6,
    address: "Av. Principal, 456 - Jardim Alegre",
    phone: "(11) 97654-3210",
    hours: {
      monday: "Fechado",
      tuesday: "18:00 - 23:00",
      wednesday: "18:00 - 23:00",
      thursday: "18:00 - 23:00",
      friday: "18:00 - 00:00",
      saturday: "18:00 - 00:00",
      sunday: "18:00 - 23:00"
    },
    description: "Pizzas artesanais com massa fina e ingredientes frescos. Delivery rápido!",
    fullDescription: "Na Pizzaria do João, cada pizza é uma obra de arte! Trabalhamos com massa artesanal fermentada por 48 horas, molho de tomate caseiro e ingredientes premium. Oferecemos mais de 30 sabores diferentes, incluindo opções vegetarianas e veganas. Delivery em até 40 minutos!",
    featured: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    reviews: [
      { author: "Maria Santos", rating: 5, comment: "Pizza deliciosa e entrega super rápida!", date: "2026-03-01" },
      { author: "Pedro Oliveira", rating: 4, comment: "Boa pizza, preço justo.", date: "2026-02-27" }
    ]
  },
  {
    id: 3,
    name: "Café da Dona Rosa",
    category: "Alimentação",
    rating: 4.9,
    address: "Rua do Comércio, 789 - Vila Nova",
    phone: "(11) 96543-2109",
    hours: {
      monday: "7:00 - 19:00",
      tuesday: "7:00 - 19:00",
      wednesday: "7:00 - 19:00",
      thursday: "7:00 - 19:00",
      friday: "7:00 - 19:00",
      saturday: "8:00 - 17:00",
      sunday: "Fechado"
    },
    description: "Café especial, doces caseiros e ambiente aconchegante para relaxar.",
    fullDescription: "O Café da Dona Rosa é o lugar perfeito para começar o dia ou fazer uma pausa relaxante. Servimos cafés especiais de diversas regiões do Brasil, acompanhados de bolos, tortas e doces caseiros. Nosso ambiente é acolhedor e perfeito para trabalhar ou encontrar amigos.",
    featured: false,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    reviews: [
      { author: "Lucia Ferreira", rating: 5, comment: "Ambiente maravilhoso e café delicioso!", date: "2026-03-02" },
      { author: "Roberto Lima", rating: 5, comment: "Melhor café da região, sem dúvida!", date: "2026-02-29" }
    ]
  },
  {
    id: 4,
    name: "Açaí do Bairro",
    category: "Alimentação",
    rating: 4.5,
    address: "Rua das Palmeiras, 321 - Parque Verde",
    phone: "(11) 95432-1098",
    hours: {
      monday: "10:00 - 22:00",
      tuesday: "10:00 - 22:00",
      wednesday: "10:00 - 22:00",
      thursday: "10:00 - 22:00",
      friday: "10:00 - 23:00",
      saturday: "10:00 - 23:00",
      sunday: "10:00 - 22:00"
    },
    description: "Açaí cremoso e natural com diversos complementos. Também temos sorvetes!",
    fullDescription: "No Açaí do Bairro você encontra o melhor açaí da região! Trabalhamos apenas com polpa pura e natural, sem adição de corantes ou conservantes. Oferecemos mais de 20 opções de complementos, desde frutas frescas até granola artesanal. Também temos sorvetes artesanais de diversos sabores!",
    featured: true,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    reviews: [
      { author: "Fernanda Souza", rating: 5, comment: "Açaí delicioso e bem servido!", date: "2026-03-03" },
      { author: "Marcos Alves", rating: 4, comment: "Bom açaí, preço acessível.", date: "2026-03-01" }
    ]
  },
  {
    id: 5,
    name: "Pastelaria Mineira",
    category: "Alimentação",
    rating: 4.7,
    address: "Av. dos Trabalhadores, 654 - Industrial",
    phone: "(11) 94321-0987",
    hours: {
      monday: "8:00 - 18:00",
      tuesday: "8:00 - 18:00",
      wednesday: "8:00 - 18:00",
      thursday: "8:00 - 18:00",
      friday: "8:00 - 18:00",
      saturday: "8:00 - 14:00",
      sunday: "Fechado"
    },
    description: "Pastéis gigantes e caldo de cana fresquinho. Tradição mineira!",
    fullDescription: "A Pastelaria Mineira traz o sabor autêntico de Minas Gerais para o seu bairro! Nossos pastéis são feitos na hora, com massa crocante e recheios generosos. Temos mais de 15 sabores, incluindo o famoso pastel de queijo com catupiry. Acompanhe com nosso caldo de cana natural!",
    featured: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    reviews: [
      { author: "Sandra Ribeiro", rating: 5, comment: "Pastel maravilhoso, bem recheado!", date: "2026-02-26" },
      { author: "José Carlos", rating: 4, comment: "Muito bom, recomendo!", date: "2026-02-24" }
    ]
  },
  {
    id: 6,
    name: "Sorveteria Gelato",
    category: "Alimentação",
    rating: 4.8,
    address: "Rua da Praia, 147 - Beira Mar",
    phone: "(11) 93210-9876",
    hours: {
      monday: "12:00 - 22:00",
      tuesday: "12:00 - 22:00",
      wednesday: "12:00 - 22:00",
      thursday: "12:00 - 22:00",
      friday: "12:00 - 23:00",
      saturday: "11:00 - 23:00",
      sunday: "11:00 - 22:00"
    },
    description: "Sorvetes artesanais italianos com sabores únicos e ingredientes premium.",
    fullDescription: "A Sorveteria Gelato oferece autênticos gelatos italianos feitos artesanalmente. Nossos sorvetes são preparados diariamente com ingredientes naturais e sem conservantes. Temos sabores clássicos e criações exclusivas que mudam a cada estação. Venha experimentar!",
    featured: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    reviews: [
      { author: "Beatriz Martins", rating: 5, comment: "Melhor sorvete que já comi!", date: "2026-03-04" },
      { author: "Rafael Gomes", rating: 5, comment: "Sabores incríveis, super cremoso!", date: "2026-03-02" }
    ]
  },
  {
    id: 7,
    name: "Restaurante Caseiro",
    category: "Alimentação",
    rating: 4.6,
    address: "Rua Central, 258 - Centro",
    phone: "(11) 92109-8765",
    hours: {
      monday: "11:00 - 15:00",
      tuesday: "11:00 - 15:00",
      wednesday: "11:00 - 15:00",
      thursday: "11:00 - 15:00",
      friday: "11:00 - 15:00",
      saturday: "11:00 - 15:00",
      sunday: "Fechado"
    },
    description: "Comida caseira por quilo com variedade e tempero de mãe.",
    fullDescription: "No Restaurante Caseiro você encontra aquele sabor de comida feita em casa! Servimos almoço por quilo com mais de 30 opções de saladas, pratos quentes, carnes e sobremesas. Tudo preparado diariamente com ingredientes frescos e muito carinho. Ambiente familiar e acolhedor.",
    featured: false,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    reviews: [
      { author: "Claudia Rocha", rating: 5, comment: "Comida deliciosa e caseira mesmo!", date: "2026-03-01" },
      { author: "Antonio Silva", rating: 4, comment: "Boa variedade e preço justo.", date: "2026-02-28" }
    ]
  },

  // Serviços
  {
    id: 8,
    name: "Costureira Ana",
    category: "Serviços",
    rating: 4.9,
    address: "Rua das Agulhas, 369 - Vila Costura",
    phone: "(11) 91098-7654",
    hours: {
      monday: "9:00 - 18:00",
      tuesday: "9:00 - 18:00",
      wednesday: "9:00 - 18:00",
      thursday: "9:00 - 18:00",
      friday: "9:00 - 18:00",
      saturday: "9:00 - 13:00",
      sunday: "Fechado"
    },
    description: "Consertos, ajustes e customização de roupas. Trabalho rápido e caprichado!",
    fullDescription: "A Costureira Ana tem mais de 15 anos de experiência em costura e ajustes. Realizamos consertos de roupas, ajustes de tamanho, customizações, bordados e criação de peças sob medida. Atendimento personalizado e entrega rápida. Sua roupa em boas mãos!",
    featured: true,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8e5d?w=400&h=300&fit=crop",
    reviews: [
      { author: "Patricia Nunes", rating: 5, comment: "Trabalho impecável, super recomendo!", date: "2026-03-03" },
      { author: "Renata Costa", rating: 5, comment: "Ajustou meu vestido perfeitamente!", date: "2026-02-29" }
    ]
  },
  {
    id: 9,
    name: "Encanador Carlos",
    category: "Serviços",
    rating: 4.7,
    address: "Rua dos Canos, 741 - Jardim Hidráulico",
    phone: "(11) 90987-6543",
    hours: {
      monday: "8:00 - 18:00",
      tuesday: "8:00 - 18:00",
      wednesday: "8:00 - 18:00",
      thursday: "8:00 - 18:00",
      friday: "8:00 - 18:00",
      saturday: "8:00 - 12:00",
      sunday: "Emergências"
    },
    description: "Serviços de encanamento, desentupimento e instalações hidráulicas.",
    fullDescription: "O Encanador Carlos oferece serviços completos de hidráulica residencial e comercial. Realizamos instalações, manutenções, consertos de vazamentos, desentupimentos e troca de registros. Atendimento rápido e preço justo. Disponível para emergências!",
    featured: false,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    reviews: [
      { author: "Marcelo Dias", rating: 5, comment: "Resolveu meu problema rapidinho!", date: "2026-03-02" },
      { author: "Julia Campos", rating: 4, comment: "Bom serviço e preço honesto.", date: "2026-02-27" }
    ]
  },
  {
    id: 10,
    name: "Eletricista Pedro",
    category: "Serviços",
    rating: 4.8,
    address: "Av. da Energia, 852 - Luz Elétrica",
    phone: "(11) 99876-5432",
    hours: {
      monday: "8:00 - 19:00",
      tuesday: "8:00 - 19:00",
      wednesday: "8:00 - 19:00",
      thursday: "8:00 - 19:00",
      friday: "8:00 - 19:00",
      saturday: "8:00 - 14:00",
      sunday: "Emergências"
    },
    description: "Instalações elétricas, manutenção e reparos. Atendimento 24h para emergências.",
    fullDescription: "O Eletricista Pedro é especialista em instalações elétricas residenciais e comerciais. Oferecemos serviços de instalação de tomadas, interruptores, luminárias, quadros de distribuição e muito mais. Trabalhamos com segurança e qualidade. Emergências atendidas 24 horas!",
    featured: false,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    reviews: [
      { author: "Eduardo Santos", rating: 5, comment: "Profissional excelente, muito competente!", date: "2026-03-04" },
      { author: "Carla Mendes", rating: 5, comment: "Resolveu tudo com rapidez e eficiência!", date: "2026-03-01" }
    ]
  },
  {
    id: 11,
    name: "Salão de Beleza Glamour",
    category: "Serviços",
    rating: 4.9,
    address: "Rua da Beleza, 159 - Fashion",
    phone: "(11) 98765-4321",
    hours: {
      monday: "9:00 - 19:00",
      tuesday: "9:00 - 19:00",
      wednesday: "9:00 - 19:00",
      thursday: "9:00 - 19:00",
      friday: "9:00 - 20:00",
      saturday: "9:00 - 18:00",
      sunday: "Fechado"
    },
    description: "Cortes, coloração, escova, manicure e muito mais. Agende seu horário!",
    fullDescription: "O Salão de Beleza Glamour oferece serviços completos de beleza e estética. Nossa equipe é formada por profissionais experientes e atualizados com as últimas tendências. Oferecemos cortes femininos e masculinos, coloração, mechas, escova progressiva, manicure, pedicure e design de sobrancelhas. Ambiente climatizado e acolhedor!",
    featured: true,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    reviews: [
      { author: "Amanda Silva", rating: 5, comment: "Adorei meu novo visual! Equipe maravilhosa!", date: "2026-03-05" },
      { author: "Isabela Rocha", rating: 5, comment: "Melhor salão da região!", date: "2026-03-03" }
    ]
  },
  {
    id: 12,
    name: "Mecânico Rápido",
    category: "Serviços",
    rating: 4.6,
    address: "Av. dos Motores, 963 - Auto Center",
    phone: "(11) 97654-3210",
    hours: {
      monday: "8:00 - 18:00",
      tuesday: "8:00 - 18:00",
      wednesday: "8:00 - 18:00",
      thursday: "8:00 - 18:00",
      friday: "8:00 - 18:00",
      saturday: "8:00 - 13:00",
      sunday: "Fechado"
    },
    description: "Manutenção automotiva, troca de óleo, freios e revisões completas.",
    fullDescription: "O Mecânico Rápido é sua oficina de confiança! Realizamos manutenção preventiva e corretiva em veículos de todas as marcas. Oferecemos troca de óleo, alinhamento, balanceamento, freios, suspensão e diagnóstico computadorizado. Peças originais e garantia em todos os serviços!",
    featured: false,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    reviews: [
      { author: "Ricardo Alves", rating: 5, comment: "Serviço de qualidade e preço justo!", date: "2026-03-02" },
      { author: "Fernando Lima", rating: 4, comment: "Bom atendimento e trabalho bem feito.", date: "2026-02-28" }
    ]
  },
  {
    id: 13,
    name: "Manicure & Pedicure",
    category: "Serviços",
    rating: 4.8,
    address: "Rua das Unhas, 357 - Beleza",
    phone: "(11) 96543-2109",
    hours: {
      monday: "9:00 - 19:00",
      tuesday: "9:00 - 19:00",
      wednesday: "9:00 - 19:00",
      thursday: "9:00 - 19:00",
      friday: "9:00 - 20:00",
      saturday: "9:00 - 17:00",
      sunday: "Fechado"
    },
    description: "Manicure e pedicure com esmaltação em gel. Atendimento personalizado!",
    fullDescription: "No Manicure & Pedicure você encontra cuidado completo para suas unhas! Oferecemos manicure, pedicure, esmaltação em gel, alongamento de unhas, nail art e muito mais. Trabalhamos com produtos de qualidade e esterilização de todos os materiais. Agende seu horário!",
    featured: false,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    reviews: [
      { author: "Vanessa Souza", rating: 5, comment: "Unhas perfeitas, adorei!", date: "2026-03-04" },
      { author: "Camila Ferreira", rating: 5, comment: "Atendimento excelente e caprichado!", date: "2026-03-01" }
    ]
  },
  {
    id: 14,
    name: "Aulas de Violão",
    category: "Serviços",
    rating: 4.7,
    address: "Rua da Música, 753 - Harmonia",
    phone: "(11) 95432-1098",
    hours: {
      monday: "14:00 - 21:00",
      tuesday: "14:00 - 21:00",
      wednesday: "14:00 - 21:00",
      thursday: "14:00 - 21:00",
      friday: "14:00 - 21:00",
      saturday: "9:00 - 13:00",
      sunday: "Fechado"
    },
    description: "Aulas particulares de violão para iniciantes e avançados. Método prático!",
    fullDescription: "Aprenda a tocar violão com aulas personalizadas! Oferecemos aulas para todos os níveis, do iniciante ao avançado. Método prático e dinâmico, focado em fazer você tocar suas músicas favoritas rapidamente. Aulas individuais ou em grupo. Primeira aula experimental grátis!",
    featured: false,
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
    reviews: [
      { author: "Lucas Martins", rating: 5, comment: "Ótimo professor, aprendi muito rápido!", date: "2026-03-03" },
      { author: "Gabriel Costa", rating: 4, comment: "Aulas muito boas, recomendo!", date: "2026-02-29" }
    ]
  },

  // Lojas
  {
    id: 15,
    name: "Mini Mercado Bom Preço",
    category: "Lojas",
    rating: 4.5,
    address: "Rua do Comércio, 456 - Centro",
    phone: "(11) 94321-0987",
    hours: {
      monday: "7:00 - 21:00",
      tuesday: "7:00 - 21:00",
      wednesday: "7:00 - 21:00",
      thursday: "7:00 - 21:00",
      friday: "7:00 - 21:00",
      saturday: "7:00 - 21:00",
      sunday: "8:00 - 18:00"
    },
    description: "Mercadinho de bairro com produtos frescos, hortifruti e mercearia completa.",
    fullDescription: "O Mini Mercado Bom Preço é o mercadinho do seu bairro! Oferecemos produtos frescos, hortifruti de qualidade, mercearia completa, frios, laticínios e muito mais. Preços competitivos e atendimento familiar. Aceitamos cartões e fazemos entregas!",
    featured: false,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
    reviews: [
      { author: "Silvia Oliveira", rating: 5, comment: "Sempre encontro tudo que preciso!", date: "2026-03-04" },
      { author: "Paulo Ribeiro", rating: 4, comment: "Bom mercadinho, preços justos.", date: "2026-03-01" }
    ]
  },
  {
    id: 16,
    name: "Loja de Roupas Vintage",
    category: "Lojas",
    rating: 4.8,
    address: "Rua da Moda, 258 - Fashion District",
    phone: "(11) 93210-9876",
    hours: {
      monday: "10:00 - 19:00",
      tuesday: "10:00 - 19:00",
      wednesday: "10:00 - 19:00",
      thursday: "10:00 - 19:00",
      friday: "10:00 - 20:00",
      saturday: "10:00 - 20:00",
      sunday: "Fechado"
    },
    description: "Roupas vintage selecionadas, peças únicas e estilo retrô autêntico.",
    fullDescription: "A Loja de Roupas Vintage é o paraíso para quem ama moda retrô! Trabalhamos com peças vintage cuidadosamente selecionadas das décadas de 60, 70, 80 e 90. Cada item é único e tem sua própria história. Também oferecemos acessórios vintage e customização de peças!",
    featured: true,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop",
    reviews: [
      { author: "Marina Santos", rating: 5, comment: "Peças incríveis e únicas!", date: "2026-03-05" },
      { author: "Laura Gomes", rating: 5, comment: "Adoro essa loja, sempre encontro tesouros!", date: "2026-03-02" }
    ]
  },
  {
    id: 17,
    name: "Livraria do Bairro",
    category: "Lojas",
    rating: 4.7,
    address: "Rua dos Livros, 147 - Cultural",
    phone: "(11) 92109-8765",
    hours: {
      monday: "9:00 - 19:00",
      tuesday: "9:00 - 19:00",
      wednesday: "9:00 - 19:00",
      thursday: "9:00 - 19:00",
      friday: "9:00 - 20:00",
      saturday: "9:00 - 18:00",
      sunday: "10:00 - 14:00"
    },
    description: "Livros novos e usados, literatura nacional e internacional, espaço de leitura.",
    fullDescription: "A Livraria do Bairro é um espaço cultural dedicado aos amantes da leitura! Oferecemos livros novos e usados de todos os gêneros, literatura nacional e internacional, livros infantis e didáticos. Temos um espaço aconchegante para leitura e realizamos eventos literários mensais. Venha nos visitar!",
    featured: false,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop",
    reviews: [
      { author: "Daniela Rocha", rating: 5, comment: "Livraria maravilhosa, ambiente acolhedor!", date: "2026-03-03" },
      { author: "Thiago Alves", rating: 4, comment: "Boa seleção de livros!", date: "2026-02-28" }
    ]
  },
  {
    id: 18,
    name: "Loja de Plantas",
    category: "Lojas",
    rating: 4.6,
    address: "Av. Verde, 369 - Jardim Botânico",
    phone: "(11) 91098-7654",
    hours: {
      monday: "8:00 - 18:00",
      tuesday: "8:00 - 18:00",
      wednesday: "8:00 - 18:00",
      thursday: "8:00 - 18:00",
      friday: "8:00 - 18:00",
      saturday: "8:00 - 17:00",
      sunday: "9:00 - 13:00"
    },
    description: "Plantas ornamentais, suculentas, vasos decorativos e acessórios para jardinagem.",
    fullDescription: "A Loja de Plantas é o lugar perfeito para quem ama jardinagem! Oferecemos uma grande variedade de plantas ornamentais, suculentas, cactos, flores, árvores frutíferas e muito mais. Também vendemos vasos decorativos, terra adubada, ferramentas e acessórios para jardinagem. Damos dicas de cultivo!",
    featured: false,
    image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=400&h=300&fit=crop",
    reviews: [
      { author: "Rosa Lima", rating: 5, comment: "Plantas lindas e saudáveis!", date: "2026-03-04" },
      { author: "Jorge Mendes", rating: 4, comment: "Boa variedade e preços acessíveis.", date: "2026-03-01" }
    ]
  },
  {
    id: 19,
    name: "Bazar Completo",
    category: "Lojas",
    rating: 4.4,
    address: "Rua das Utilidades, 741 - Centro",
    phone: "(11) 90987-6543",
    hours: {
      monday: "8:00 - 19:00",
      tuesday: "8:00 - 19:00",
      wednesday: "8:00 - 19:00",
      thursday: "8:00 - 19:00",
      friday: "8:00 - 19:00",
      saturday: "8:00 - 18:00",
      sunday: "Fechado"
    },
    description: "Utilidades domésticas, presentes, decoração e muito mais. Tudo em um só lugar!",
    fullDescription: "O Bazar Completo tem tudo que você precisa para sua casa! Oferecemos utilidades domésticas, produtos de limpeza, decoração, presentes, brinquedos, papelaria e muito mais. Preços acessíveis e grande variedade de produtos. Venha conhecer!",
    featured: false,
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop",
    reviews: [
      { author: "Cristina Souza", rating: 4, comment: "Sempre encontro o que preciso!", date: "2026-03-02" },
      { author: "Alberto Costa", rating: 4, comment: "Boa variedade de produtos.", date: "2026-02-27" }
    ]
  },
  {
    id: 20,
    name: "Loja de Calçados",
    category: "Lojas",
    rating: 4.7,
    address: "Rua dos Sapatos, 852 - Fashion",
    phone: "(11) 99876-5432",
    hours: {
      monday: "9:00 - 19:00",
      tuesday: "9:00 - 19:00",
      wednesday: "9:00 - 19:00",
      thursday: "9:00 - 19:00",
      friday: "9:00 - 20:00",
      saturday: "9:00 - 19:00",
      sunday: "Fechado"
    },
    description: "Calçados masculinos, femininos e infantis. Marcas nacionais e importadas.",
    fullDescription: "A Loja de Calçados oferece uma ampla seleção de sapatos para toda a família! Trabalhamos com marcas nacionais e importadas, oferecendo tênis, sandálias, botas, sapatilhas e muito mais. Todos os tamanhos disponíveis e atendimento especializado. Venha experimentar!",
    featured: false,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop",
    reviews: [
      { author: "Adriana Martins", rating: 5, comment: "Ótima variedade e preços!", date: "2026-03-05" },
      { author: "Rodrigo Silva", rating: 4, comment: "Bom atendimento e qualidade.", date: "2026-03-03" }
    ]
  },

  // Eventos
  {
    id: 21,
    name: "Feira do Bairro",
    category: "Eventos",
    rating: 4.8,
    address: "Praça Central - Centro",
    phone: "(11) 98765-4321",
    hours: {
      monday: "Fechado",
      tuesday: "Fechado",
      wednesday: "Fechado",
      thursday: "Fechado",
      friday: "Fechado",
      saturday: "8:00 - 14:00",
      sunday: "8:00 - 13:00"
    },
    description: "Feira livre aos sábados e domingos com produtos frescos, artesanato e comidas típicas.",
    fullDescription: "A Feira do Bairro acontece todos os finais de semana na Praça Central! Você encontra frutas, verduras, legumes frescos, produtos orgânicos, artesanato local, roupas, calçados e deliciosas comidas típicas. É o ponto de encontro da comunidade! Venha fazer suas compras e aproveitar o clima de feira!",
    featured: true,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
    reviews: [
      { author: "Helena Ferreira", rating: 5, comment: "Adoro a feira, produtos fresquinhos!", date: "2026-03-02" },
      { author: "Sergio Rocha", rating: 5, comment: "Melhor feira da região!", date: "2026-02-29" }
    ]
  },
  {
    id: 22,
    name: "Festa Junina",
    category: "Eventos",
    rating: 4.9,
    address: "Quadra da Escola Municipal - Vila Nova",
    phone: "(11) 97654-3210",
    hours: {
      monday: "Fechado",
      tuesday: "Fechado",
      wednesday: "Fechado",
      thursday: "Fechado",
      friday: "Fechado",
      saturday: "18:00 - 23:00",
      sunday: "Fechado"
    },
    description: "Festa Junina tradicional com quadrilha, comidas típicas e brincadeiras. Todo mês de junho!",
    fullDescription: "A Festa Junina do bairro é a mais animada da região! Realizada todos os anos em junho, conta com quadrilha tradicional, barraquinhas de comidas típicas (pipoca, quentão, canjica, paçoca), pescaria, correio elegante, bingo e muita música. Traga toda a família para se divertir! Entrada gratuita!",
    featured: true,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
    reviews: [
      { author: "Mariana Santos", rating: 5, comment: "Festa maravilhosa, muito divertida!", date: "2026-02-25" },
      { author: "Felipe Alves", rating: 5, comment: "Tradição do bairro, imperdível!", date: "2026-02-23" }
    ]
  },
  {
    id: 23,
    name: "Mercado Orgânico",
    category: "Eventos",
    rating: 4.7,
    address: "Parque Verde - Jardim Alegre",
    phone: "(11) 96543-2109",
    hours: {
      monday: "Fechado",
      tuesday: "Fechado",
      wednesday: "Fechado",
      thursday: "Fechado",
      friday: "Fechado",
      saturday: "Fechado",
      sunday: "9:00 - 14:00"
    },
    description: "Mercado de produtos orgânicos e naturais todo domingo. Alimentação saudável!",
    fullDescription: "O Mercado Orgânico acontece todos os domingos no Parque Verde! Produtores locais trazem frutas, verduras, legumes, ovos, mel, pães artesanais e outros produtos 100% orgânicos e naturais. Também há opções de comidas veganas e vegetarianas. Venha fazer suas compras e apoiar a agricultura local!",
    featured: false,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    reviews: [
      { author: "Juliana Lima", rating: 5, comment: "Produtos de excelente qualidade!", date: "2026-03-03" },
      { author: "Gustavo Mendes", rating: 4, comment: "Bom mercado, preços um pouco altos.", date: "2026-02-28" }
    ]
  },
  {
    id: 24,
    name: "Show de Música",
    category: "Eventos",
    rating: 4.6,
    address: "Bar do Zé - Av. Principal",
    phone: "(11) 95432-1098",
    hours: {
      monday: "Fechado",
      tuesday: "Fechado",
      wednesday: "Fechado",
      thursday: "Fechado",
      friday: "20:00 - 00:00",
      saturday: "20:00 - 01:00",
      sunday: "Fechado"
    },
    description: "Shows de música ao vivo toda sexta e sábado. MPB, samba, rock e muito mais!",
    fullDescription: "O Bar do Zé promove shows de música ao vivo todas as sextas e sábados! Bandas locais e artistas convidados apresentam o melhor da MPB, samba, rock, blues e música popular. Ambiente descontraído, petiscos deliciosos e bebidas geladas. Entrada gratuita ou couvert artístico. Venha curtir!",
    featured: false,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
    reviews: [
      { author: "Bruno Costa", rating: 5, comment: "Shows incríveis, ambiente top!", date: "2026-03-04" },
      { author: "Tatiana Souza", rating: 4, comment: "Boa música e ambiente agradável.", date: "2026-03-01" }
    ]
  },
  {
    id: 25,
    name: "Exposição de Arte",
    category: "Eventos",
    rating: 4.8,
    address: "Galeria Cultural - Rua das Artes",
    phone: "(11) 94321-0987",
    hours: {
      monday: "Fechado",
      tuesday: "10:00 - 18:00",
      wednesday: "10:00 - 18:00",
      thursday: "10:00 - 18:00",
      friday: "10:00 - 20:00",
      saturday: "10:00 - 18:00",
      sunday: "10:00 - 14:00"
    },
    description: "Exposições mensais de artistas locais. Pinturas, esculturas, fotografias e instalações.",
    fullDescription: "A Galeria Cultural promove exposições mensais de artistas locais e regionais! Apresentamos pinturas, esculturas, fotografias, instalações e outras formas de expressão artística. As exposições ficam em cartaz por 30 dias e a entrada é gratuita. Também realizamos vernissages e encontros com os artistas. Venha apreciar a arte local!",
    featured: false,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
    reviews: [
      { author: "Cecilia Martins", rating: 5, comment: "Exposições maravilhosas, muito cultura!", date: "2026-03-05" },
      { author: "Vinicius Rocha", rating: 5, comment: "Espaço incrível, arte de qualidade!", date: "2026-03-02" }
    ]
  }
];

export const categories = [
  { name: "Alimentação", icon: "UtensilsCrossed", count: 7 },
  { name: "Serviços", icon: "Wrench", count: 7 },
  { name: "Lojas", icon: "ShoppingBag", count: 6 },
  { name: "Eventos", icon: "Calendar", count: 5 }
];