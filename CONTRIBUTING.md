# Contribuições

### Por onde começar?

**1.** Faça o _fork_ do projeto.

**2.** [Entenda como funciona o fluxo de contribuição](#fluxo).

**3.** [Leia e pratique as boas práticas no projeto](#boas-pr%C3%A1ticas).

### Fluxo

Toda ajuda será bem-vinda para construirmos uma aplicação referência para a comunidade Open Source. Se encontrar qualquer parte que possa ser melhorada, não hesite em participar! Confira abaixo como é facil contribuir com o projeto:

**1.** Faça referência ao repositório oficial após o _fork_

```
git remote add upstream https://github.com/techexpertspro/portal-ascepa.git 
```

**2.** Antes de iniciar o processo de contribuição, crie uma nova branch para fazer suas alterações.

Alguns exemplos:

- Para ajustes: `git checkout -b fix/ajuste-X-001`
- Para implementações: `git checkout -b feat/feature-X-002`
- Para refatorações: `git checkout -b refactor/refatoracao-X-003`
- Voce pode conferir demais nomes para branch nesse [artigo](https://medium.com/@jacoblarte/padr%C3%B5es-de-nomenclatura-para-branches-e-commits-dfe10c9392bd)

> Use qualquer nome que seja coerente com a contribuição que está sendo feita.
> `X` representa uma descrição do que contem na branch
> O numero no final serve para referenciar a issue, caso necessário

**3.** Após realizar as alterações, é hora de fazer um commit com uma mensagem coerente do que foi feito(seguindo o padrão dos [conventional commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657). Exemplo:

```
git add --all
git commit -m ‘fix: Adiciona tradução/revisão/melhoria X’
git push origin fix/ajuste-X-001
```

**4.** Envie um _Pull Request_ com as alterações feitas, fazendo referência para o `master` do repositório oficial.
  Dicas para o pull request:
  - Não tenha dó de escrever o pull request, detalhe o que foi feito na branch;
  - Adicione fotos, videos, gifs, de antes e depois dos ajustes, caso seja possível;

**5.** Sua contribuição será analisada pelo time. Em alguns casos pediremos algumas alterações e ajustes antes de dar merge.

Após o merge:

- Delete a branch utilizada:

```
git checkout master
git push origin :ajusteX
git branch -D ajusteX
```

- Atualize seu repositório com o repositório oficial:

```
git fetch upstream
git rebase upstream/master
git push -f origin master
```

**6.** Quando iniciar uma nova contribuição, inicie repita o processo pelo passo 2.

### Boas práticas

- Não traduza blocos de codigo, variaveis, etc., mantenha o padrão de linguagem em inglês do projeto;
- Caso tenha feito vários commits, [esmague-os](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) antes de fazer o _Pull Request_;
- Caso tenha qualquer tipo de dúvida, abre uma _Issue_ ou procure alguem nas discussions, que faremos o possível para te ajudar;
- Contribua com as discussões;
- Busque não escrever as mensagens de commit de maneira monossilábica. Ex: '.', 'ajuste', 'teste'. Como dito anteriormente, sempre faça uma descrição detalhada e use de base os conventional commits;

Bora pra cima! 🚀🚀🚀
