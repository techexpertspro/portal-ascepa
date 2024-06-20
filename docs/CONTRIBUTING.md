# Contributions

### Where to Start?

**1.** _Fork_ the project.

**2.** [Understand how the contribution flow works.](#fluxo).

**3.** [Read and practice the project's best practices.](#boas-pr%C3%A1ticas).

### Flow

All help is welcome to build a reference application for the Open Source community. If you find any part that can be improved, do not hesitate to participate! Check below how easy it is to contribute to the project:

**1.** Reference the official repository after _fork_:

```
git remote add upstream https://github.com/techexpertspro/portal-ascepa.git
```

**2.** Before starting the contribution process, create a new branch to make your changes.

Some examples:

- For adjustments: `git checkout -b fix/ajuste-X-001`
- For implementations: `git checkout -b feat/feature-X-002`
- For refactoring: `git checkout -b refactor/refatoracao-X-003`
- You can check more branch names in this [article](https://medium.com/@jacoblarte/padr%C3%B5es-de-nomenclatura-para-branches-e-commits-dfe10c9392bd)

> Use any name that is coherent with the contribution being made.
> `X` represents a description of what is in the branch
> The number at the end is used to reference the issue, if necessary

**3.** After making the changes, it's time to commit with a coherent message about what was done (following the [conventional commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657) pattern). Example:

```
git add --all
git commit -m ‘fix: Adiciona tradução/revisão/melhoria X’
git push origin fix/ajuste-X-001
```

**4.** Send a Pull Request with the changes made, referencing the `main` branch of the official repositor.

Tips for the pull request:

- Don't hesitate to write the pull request, detail what was done in the branch;
- Add photos, videos, gifs, of before and after the adjustments, if possible;

**5.** Your contribution will be reviewed by the team. In some cases, we will ask for some changes and adjustments before merging.

After the merge:

- Delete the used branch:

```
git checkout main
git push origin :ajusteX
git branch -D ajusteX
```

- Update your repository with the official repository:

```
git fetch upstream
git rebase upstream/main
git push -f origin main
```

**6.** When starting a new contribution, repeat the process from step 2.

### Best Practices

- Do not translate code blocks, variables, etc., keep the project's language standard in English;
- If you have made multiple commits, [squash them](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html) before making the _Pull Request_;
- If you have any kind of doubt, open an Issue or find someone in the discussions, and we will do our best to help you;
- Contribute to the discussions;
- Try not to write monosyllabic commit messages. E.g.: '.', 'adjustment', 'test'. As mentioned earlier, always make a detailed description and use the conventional commits as a basis;

Let's go for it! 🚀🚀🚀
