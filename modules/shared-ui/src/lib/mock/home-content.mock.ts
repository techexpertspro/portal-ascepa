export const homeContentMock = [
  {
    title: 'Quem somos',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    mainImage: {
      src: 'image-placeholder.png',
      description: 'Foto de equipe da família ASCEPA',
    },
  },
  {
    title: 'Últimas notícias',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit. Id volutpat lacus laoreet non curabitur. Nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus vitae congue mauris rhoncus aenean. Ornare lectus sit amet est placerat. Tortor at risus viverra adipiscing at in tellus integer.',
    mainImage: {
      src: 'main-notice.svg',
      description: 'Foto de equipe da família ASCEPA',
      alt: 'noticia principal',
    },
    imageList: [
      {
        src: 'image-placeholder.png',
        description: 'Foto de equipe da família ASCEPA',
        alt: 'noticia lateral',
      },
      {
        src: 'image-placeholder.png',
        description: 'Foto de equipe da família ASCEPA',
        alt: 'noticia lateral',
      },
      {
        src: 'image-placeholder.png',
        description: 'Foto de equipe da família ASCEPA',
        alt: 'noticia lateral',
      },
    ],
  },
  {
    title: 'Vagas',
    cardList: [
      {
        title: 'Programador Front-end pleno',
        company: 'Empresa Lorem',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        insights: ['Remoto', 'Full time'],
        buttonList: [
          { label: 'Aplicar', type: 'primary' },
          { label: 'Ver detalhes', type: 'secondary' },
        ],
      },
    ],
  },
  {
    title: 'Filie-se',
    text: 'Junte-se a nós e fortaleça a luta pelos direitos das pessoas com deficiência visual no Pará! Ao se filiar à nossa associação, você contribuirá para ampliar o acesso a oportunidades de inclusão, educação e suporte para a comunidade de cegos. Faça parte dessa rede e ajude a construir um futuro mais acessível para todos.',
    mainImage: {
      src: 'joinus.png',
      alt: 'Foto de equipe da família ASCEPA',
    },
    buttonList: [{ label: 'Saiba como', type: 'primary' }],
  },
];
