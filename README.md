Biblioteca para NextJs de interface gráfica usada na empresa Pentagrama

## Instalação

```bash
npm install @alexandrepaim/pentacraft_ui
```

## Components

## Layout
### Componente: `Layout.Root`
- **Parâmetros Aceitos:**
  - `themeSwitcher`: Booleano para alternar o tema.
  - `colorSchemeDark`: Objeto com propriedades de estilo para o tema escuro.
  - `colorSchemeDefault`: Objeto com propriedades de estilo para o tema padrão.

### Componente: `Layout.Logo`
- **Parâmetros Aceitos:**
  - `src`: URL da imagem do logo.
  - `element`: Função que retorna um elemento React para o logo.

### Componente: `Layout.HeaderActions`
- **Parâmetros Aceitos:** Não possui parâmetros específicos.

### Componente: `Layout.HeaderMenu`
- **Parâmetros Aceitos:**
  - `userName`: Nome do usuário.
  - `userImage`: URL da imagem do usuário.
  - `customAvatar`: Função que retorna um elemento React para um avatar personalizado.
  - `children`: Layout.HeaderMenuItem.

### Componente: `Layout.HeaderMenuItem`
- **Parâmetros Aceitos:**
  - `href`: URL para redirecionar ao clicar no item do menu.
  - `onClick`: Função a ser executada ao clicar no item do menu.
  - `children`: Elementos React a serem exibidos no item do menu.
  
### Componente: `Layout.Menu`
- **Parâmetros Aceitos:**
  - `style`: Objeto com propriedades de estilo para o menu.
  - `className`: String com classes CSS para o menu.
  - `children`: Layout.MenuItem ou Layout.MenuEndItem.

### Componente: `Layout.MenuItem`
- **Parâmetros Aceitos:**
  - `href`: URL para redirecionar ao clicar no item do menu.
  - `icon`: Ícone a ser exibido ao lado do item do menu.
  - `collapseItens`: Array de objetos com propriedades de itens colapsáveis.
  - `children`: Elementos React a serem exibidos no item do menu.

### Componente: `Layout.MenuEndItem`
- **Parâmetros Aceitos:**
  - `href`: URL para redirecionar ao clicar no item do menu.
  - `icon`: Ícone a ser exibido ao lado do item do menu.
  - `onClick`: Função a ser executada ao clicar no item do menu.
  - `children`: Elementos React a serem exibidos no item do menu.

### Componente: `Layout.Content`
- **Parâmetros Aceitos:**
  - `children`: Elementos React a serem exibidos no conteúdo.


## Form

### Componente: `orm.Root`
- **Parâmetros Aceitos:** O componente Form.Root aceita os seguintes parâmetros:
  - `title`: String opcional para o título do formulário.
  - `onSubmit`: Função opcional para ser executada ao submeter o formulário. Ela recebe dois parâmetros: event (do tipo React.FormEvent<HTMLFormElement>) e values (do tipo any).
  - Além disso, o componente Form.Root também herda os parâmetros do React.FormHTMLAttributes<HTMLFormElement>.


