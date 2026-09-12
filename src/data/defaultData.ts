import { LoveDeclarationData } from '../types';

export const DEFAULT_LOVE_DATA: LoveDeclarationData = {
  senderName: 'Caio',
  receiverName: 'Natacha',
  startDate: '2021-06-12', // 5 anos de história
  headline: 'Eu não quero recuperar o que tínhamos. Quero construir algo ainda melhor com você.',
  subheadline: 'Crescemos, mudamos, erramos... mas o meu amor por você continua. Essa página é o meu pedido sincero de um novo começo — para te reconquistar todos os dias, com atitudes.',
  letterTitle: 'Um Novo Começo Para Nós',
  letterGreeting: 'Meu amor,',
  letterBody: [
    'A gente se conheceu tão jovem, quando tudo era mais simples. Tínhamos nossos interesses em comum, conversávamos por horas, jogávamos juntos e, aos poucos, fomos construindo uma história que já dura cinco anos.',
    'Só que nós crescemos. Hoje somos adultos, temos responsabilidades, nossas vidas mudaram e eu reconheço que, no meio de tudo isso, acabei deixando você de lado. Meu trabalho, minha rotina, academia, jiu-jitsu... eu chegava em casa e muitas vezes escolhia fazer outras coisas, até jogar sozinho, quando na verdade poderia estar dando atenção para a pessoa que mais importa para mim.',
    'Eu reconheço meus erros e não quero fugir deles. Sei que te magoei, sei que deixei de te dar a atenção e o carinho que você merecia, e sinto muito por isso.',
    'Mas eu também entendi uma coisa: eu não quero que a gente tente voltar a ser quem éramos. Nós mudamos. Somos pessoas diferentes agora. E eu quero conhecer essa nova você, quero que você conheça esse novo eu, e quero que a gente comece um novo relacionamento, com mais maturidade, respeito, compreensão e amor.',
    'A partir de hoje, eu quero reconquistar você todos os dias. Não apenas com palavras, mas com atitudes. Quero te mostrar o quanto você é importante para mim e o quanto você significa na minha vida.',
    'Eu ainda amo você, e se você me permitir, eu quero tentar novamente. Quero cuidar melhor de nós, aprender com os meus erros e construir uma nova história ao seu lado.',
    'Eu não quero simplesmente recuperar o que a gente tinha. Eu quero construir algo ainda melhor com você.'
  ],
  letterClosing: 'Com todo o meu amor e arrependimento sincero,',
  letterSignature: 'Eu te amo. ❤️',
  songDedication: {
    title: 'Nossa História',
    artist: '5 anos e um novo começo',
    message: '“Não quero ser quem éramos — quero conhecer quem nos tornamos...”'
  },
  proposalQuestion: 'Você me permite tentar novamente e começar um novo relacionamento com você?',
  proposalSubtext: 'Não com promessas vazias, mas com atitudes diárias. Quero te reconquistar todos os dias.',
  reasons: [
    {
      id: '1',
      title: 'Nossa história de 5 anos',
      description: 'Começamos tão jovens, entre conversas longas e jogos juntos. Tudo o que vivemos me mostrou que você é a pessoa da minha vida.',
      category: 'magia',
      icon: 'Heart'
    },
    {
      id: '2',
      title: 'Quem você se tornou',
      description: 'Você cresceu, amadureceu, mudou — e eu quero conhecer essa nova você, todos os dias, com admiração renovada.',
      category: 'cumplicidade',
      icon: 'Sparkles'
    },
    {
      id: '3',
      title: 'Meu arrependimento sincero',
      description: 'Reconheço que te deixei de lado pela rotina, trabalho e distrações. Sinto muito. Aprendi e quero fazer diferente.',
      category: 'cuidado',
      icon: 'ShieldCheck'
    },
    {
      id: '4',
      title: 'Te escolher com maturidade',
      description: 'Não como adolescentes, mas como adultos que se respeitam, se compreendem e se cuidam de verdade.',
      category: 'futuro',
      icon: 'HeartHandshake'
    },
    {
      id: '5',
      title: 'Presença de verdade',
      description: 'Menos tempo sozinho no jogo, mais tempo com você. Mais atenção, mais carinho, mais nós dois.',
      category: 'abraço',
      icon: 'Sun'
    },
    {
      id: '6',
      title: 'Reconquista diária',
      description: 'Quero te provar com atitudes, não só palavras, o quanto você é importante e insubstituível para mim.',
      category: 'cuidado',
      icon: 'Music'
    },
    {
      id: '7',
      title: 'Respeito e compreensão',
      description: 'Quero ouvir mais, julgar menos e construir um amor leve, maduro e seguro para nós dois.',
      category: 'sorriso',
      icon: 'Smile'
    },
    {
      id: '8',
      title: 'Um futuro ainda melhor',
      description: 'Não quero o passado de volta. Quero um futuro novo ao seu lado — maior, mais forte e mais feliz.',
      category: 'futuro',
      icon: 'Compass'
    }
  ],
  timeline: [
    {
      id: 't1',
      dateStr: 'Há 5 anos',
      title: 'Quando tudo era mais simples',
      description: 'Nos conhecemos tão jovens, com interesses em comum, conversas por horas e jogos juntos. Ali começou a nossa história.',
      tag: 'O Início'
    },
    {
      id: 't2',
      dateStr: 'Nossa conexão',
      title: 'Horas que viravam minutos',
      description: 'Conversávamos sem ver o tempo passar, ríamos, jogávamos e construíamos aos poucos algo que só nós dois entendíamos.',
      tag: 'Cumplicidade'
    },
    {
      id: 't3',
      dateStr: 'Crescemos',
      title: 'A vida adulta chegou',
      description: 'Veio o trabalho, as responsabilidades, a rotina, academia, jiu-jitsu... e no meio de tudo isso, eu acabei me afastando e deixando você de lado.',
      tag: 'Distância'
    },
    {
      id: 't4',
      dateStr: 'O reconhecimento',
      title: 'Eu errei e sinto muito',
      description: 'Escolhi outras coisas quando deveria ter escolhido você. Te magoei com a falta de atenção e carinho, e assumo isso com todo o meu coração.',
      tag: 'Perdão'
    },
    {
      id: 't5',
      dateStr: 'A partir de hoje',
      title: 'Um novo relacionamento',
      description: 'Não quero voltar a ser quem éramos. Quero conhecer a nova você, te reconquistar todos os dias com atitudes e construir algo ainda melhor.',
      tag: 'Recomeço'
    }
  ]
};
