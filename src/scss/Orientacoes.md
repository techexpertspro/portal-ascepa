### ORIENTAÇÕES

## Tarefa de Styleguide de "CORES"

1 - Ir na pasta "arquivos_para_quebra" e pegar os tokens de cores do arquivo "\_tokens.scss"
2 - Colocar no arquivo "\_token.scss" da pasta "tokens/colors"
3 - Importar o arquivo "\_token.scss" da pasta colors no "\_index.scss" da pasta "tokens"
4 - Essa é a primeira entrega que precisa ser feita ou, fazer uma branch e trabalhar em paralelo com as duplas das demais tarefas abaixo, pois sem ele, as cores não serão aplicadas.
5 - Depois que finalizar tudo, apagar a pasta "COMECE_POR_AQUI".

## Tarefa de Styleguide de "TITULOS"

1 - Ir na pasta "arquivos_para_quebra" e pegar os tokens de tipografia do arquivo "\_tokens.scss"
2 - Colocar no arquivo "\_token.scss" da basta "tokens/typography"
3 - Importar o arquivo "\_token.scss" da pasta "typography" no "\_index.scss" da pasta "tokens"
4 - Para as cores funcionarem, precisa do styleguide de cores acima disponível
6 - No arquivo "\_mixins.scss" da pasta "arquivos_para_quebra", pegar os mixins de textos e incluir em "components/typography/\_mixin.scss"
7 - Pegar os styles da tipografia no arquivo "\_global.scss" da pasta "\[COMECE_POR_AQUI]/arquivos_para_quebra" e colocar no arquivo "\_styles.scss"
8 - Importar o mixin no arquivo "\_styles.scss"
9 - Importar o arquivo "\_mixin.scss" no arquivo "\_index.scss" da pasta "components"
10 - Depois que finalizar tudo, apagar a pasta "COMECE_POR_AQUI".

## Tarefa de Styleguide de "GRID"

1 - Ir na pasta "arquivos_para_quebra" e pegar os tokens de grid do arquivo "\_tokens.scss"
2 - Colocar no arquivo "\_token.scss" da basta "tokens/grid"
3 - Importar o arquivo "\_token.scss" da pasta "grid" no "\_index.scss" da pasta "tokens"
4 - Os tokens de grid provavelmente vá precisar de alterações. Pesquisem como poder melhorar ainda mais os tokens
5 - Depois que finalizar tudo, apagar a pasta "COMECE_POR_AQUI".

## Tarefa de Criação de Botões

No styleguide, tem uma configuração de estilos padrão do figma, uma vez que, serão componentes padronizados. é importante utilizar esse styleguide para cores e tipografias, pois, se um dia, por exemplo, mudar as cores do projeto, ele aplica para todo o site.

1 - No arquivo "\_mixins.scss" da pasta "arquivos_para_quebra", pegar os mixins de textos e incluir em "components/buttons/\_mixin.scss"
2 - Importar o arquivo "\_mixin.scss" no arquivo "\_index.scss" da pasta "components"
3 - Pegar os styles de botões no arquivo "\_global.scss" da pasta "\[COMECE_POR_AQUI]/arquivos_para_quebra" e colocar no arquivo "\_styles.scss"
4 - Importar o mixin no arquivo "\_styles.scss"
5 - Por ser um componente, eu sugiro criar uma pasta chamada "shared/components/" dentro de "/src/app" e dentro da pasta "component", criar o componente "button"
6 - Para buscar os estilos, basta usar as classes ".btn-primary" e ".btn-secondary" (exemplo no arquivo app.component.html)
7 - Para ter efeito, as tarefas de styleguide acima precisam estar prontas e disponíveis na sua branch.

## Tarefa de Criação de Card

Vou deixar 2 sugestões:

1ª Sugestão:

- Criar um mixin na pasta "components" no mesmo padrão de buttons
- Criar uma classe .card no arquivo styles e seguir as demais etapas da criação do botão
- Criar o componente "card" na pasta "shared/components" e usar a classe do mixin

2ª Sugestão:

- Criar o componente "card" na pasta "shared/components", fazer sua estilização no seu arquivo card.component.scss, usando os tokens de cores e tipografia.

## Para as demais tarefas (Header, Footer, Label, etc)

No arquivo app.component.html e na Wiki de Styleguide, tem exemplos de como utilizar as margins, paddings, h1, h2, h3 e outros textos, pois o projeto como um todo está ajustado via Styleguide já com as cores do Figma.

Pra quem precisa criar componentes, como no caso de Label, a sugestão é seguir o mesmo padrão da pasta shared do componente button da tarefa acima e utilizar os exemplos do app.component.html
