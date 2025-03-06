<div align="center">

[![Latest Version on npm](https://img.shields.io/npm/v/@alexandrepaim/pentacraft_ui)](https://www.npmjs.com/package/@alexandrepaim/pentacraft_ui)
[![npm](https://img.shields.io/npm/dt/@alexandrepaim/pentacraft_ui)](https://www.npmjs.com/package/@alexandrepaim/pentacraft_ui)
[![Next][Next.js]][Next-url]


# Pentacraft UI
</div>

**Pentacraft UI** é uma biblioteca de componentes para Next.js desenvolvida pela equipe da **Pentagrama**. Ela oferece uma estrutura completa para criar interfaces consistentes e responsivas, com suporte a temas (claro/escuro), páginas de listagem, formulários, layouts padrão e componentes auxiliares para inputs, botões e paginação.

---


## Sumário

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Visão Geral](#visão-geral)
- [Componentes de Layout](#componentes-de-layout)
- [Componentes para Listagem](#componentes-para-listagem)
- [Componentes para Formulários](#componentes-para-formulários)
- [Componentes para Páginas Padrão](#componentes-para-páginas-padrão)
- [Componentes Auxiliares](#componentes-auxiliares)
- [Exemplos de Uso](#exemplos-de-uso)

---

## Instalação

Instale a biblioteca via npm ou yarn:

```bash
npm install @alexandrepaim/pentacraft_ui
```

ou

```bash
yarn add @alexandrepaim/pentacraft_ui
```

---

## Configuração


Para utilizar os estilos padrão da Pentacraft UI, importe o arquivo CSS no seu projeto no arquivo `_app.js` (page route) ou `layout.js` (app route):

```jsx
import '@alexandrepaim/pentacraft_ui/dist/pentacraft.css';
```

## Visão Geral

A Pentacraft UI foi construída para facilitar o desenvolvimento de interfaces em Next.js, proporcionando:

- **Layouts Completos**: Estrutura para cabeçalho, menu lateral, área de conteúdo e troca de tema.
- **Listagem de Dados**: Componentes para criar páginas de listagem com filtros, áreas de conteúdo e botões de ação.
- **Formulários**: Estrutura modular para formulários, com áreas para campos e ações (submit, reset, etc.).
- **Páginas Padrão**: Integração de filtros, conteúdo e paginação para uma experiência consistente.
- **Componentes Auxiliares**: Inputs, botões, selects, switcher e paginação para facilitar a criação de interfaces ricas.

---

## Componentes de Layout

### Layout.Root
- **Descrição**: Componente principal que organiza a estrutura da aplicação (cabeçalho, menu e conteúdo).
- **Props**:
  - `children`: Elementos filhos que serão distribuídos entre logo, menu, header e conteúdo.
  - `themeSwitcher` (boolean): Ativa o botão para troca de tema.
  - `colorSchemeDark` (object): Configurações para o tema escuro.
  - `colorSchemeDefault` (object): Configurações para o tema padrão.

### Layout.Logo
- **Descrição**: Renderiza o logo da aplicação.
- **Props**:
  - `src` (string): URL da imagem do logo.
  - `element` (function): Função que retorna um elemento React customizado para o logo.

### Layout.HeaderActions
- **Descrição**: Container para ações no cabeçalho.
- **Props**: Sem props específicas.

### Layout.HeaderMenu & HeaderMenuItem
- **Descrição**: Gerencia o menu do cabeçalho, exibindo avatar e opções do usuário.
- **Props do HeaderMenu**:
  - `userName` (string): Nome do usuário.
  - `userImage` (string): URL da imagem do usuário.
  - `customAvatar` (function): Renderiza um avatar customizado.
  - `children`: Itens do menu, utilizando `HeaderMenuItem`.
- **Props do HeaderMenuItem**:
  - `href` (string): URL de redirecionamento.
  - `onClick` (function): Ação no clique.
  - `children`: Conteúdo do item.

### Layout.Menu, MenuItem e MenuEndItem
- **Descrição**: Menu lateral com itens regulares e itens para ações específicas.
- **Props do Menu**:
  - `style` (object): Estilos inline.
  - `className` (string): Classes CSS adicionais.
  - `children`: Itens de menu (`MenuItem` e `MenuEndItem`).
- **Props do MenuItem**:
  - `href` (string): URL de redirecionamento.
  - `icon` (React Element): Ícone para o item.
  - `collapseItens` (array): Itens para submenu.
  - `children`: Conteúdo do item.
- **Props do MenuEndItem**:
  - `href` (string): URL de redirecionamento.
  - `icon` (React Element): Ícone do item.
  - `onClick` (function): Ação no clique.
  - `children`: Conteúdo do item.

### Layout.Content
- **Descrição**: Área principal para renderizar o conteúdo da aplicação.
- **Props**:
  - `children`: Elementos React que compõem o conteúdo.

---

## Componentes para Listagem

### List.Root
- **Descrição**: Componente raiz para páginas de listagem.
- **Props**:
  - `title` (string): Título da página.
  - `createButtonTitle` (string): Texto do botão para criação.
  - `onCreateClick` (function): Função executada ao clicar no botão.
  - `createButtonHref` (string): URL de redirecionamento para criação.
  - `renderPreList` / `renderPosList` (functions): Renderizam conteúdo antes ou depois da lista.
  - `actions` (function): Ações adicionais no cabeçalho.

### List.Content
- **Descrição**: Área para renderizar o conteúdo da listagem (ex.: tabela de dados).
- **Props**:
  - `children`: Elementos ou componente de tabela.

### List.Filters
- **Descrição**: Componente para aplicar filtros na listagem.
- **Utilização**: Geralmente incluído como filho de `List.Root`.

---

## Componentes para Formulários

### Form.Root
- **Descrição**: Estrutura principal para criação de formulários.
- **Props**:
  - `title` (string): Título do formulário.
  - `onSubmit` (function): Função executada na submissão; recebe o evento e os valores.
  - `children`: Deve conter `Form.Content` e `Form.Actions`.
  
### Form.Content
- **Descrição**: Área onde os campos do formulário são renderizados.
- **Props**:
  - `children`: Elementos React (inputs, selects, etc.).

### Form.Actions
- **Descrição**: Container para ações do formulário (ex.: botões de submit e reset).
- **Props**:
  - `children`: Elementos de ação.

---

## Componentes para Páginas Padrão

### Page.Root
- **Descrição**: Componente raiz para páginas com estrutura padrão.
- **Props**:
  - `title` (string): Título da página.
  - `actions` (function): Ações adicionais no cabeçalho.
  - `children`: Deve conter filtros, conteúdo e, opcionalmente, paginação.

### Page.Content
- **Descrição**: Área principal da página.
- **Props**:
  - `children`: Conteúdo da página.

### Page.Filters
- **Descrição**: Componente para aplicar filtros na página.
- **Utilização**: Normalmente renderizado logo abaixo do título.

### Page.Pagination
- **Descrição**: Componente para navegação entre páginas.
- **Props**:
  - `currentPage` (number): Página atual.
  - `totalPages` (number): Total de páginas.
  - `perPage` (number, opcional): Quantidade de itens por página.
  - `onChangePerPage` (function, opcional): Callback para alteração de itens por página.
  - `onChangePage` (function): Callback para alteração da página.
  
> **Observação:** O componente de paginação gera automaticamente botões com números, seta de voltar e avançar, além de exibir reticências quando necessário para representar páginas intermediárias.

---

## Componentes Auxiliares

### Filtros
- **PCLayoutFilters**: Permite a aplicação de filtros com ações de submissão e limpeza.  
  - Suporta callbacks `onSubmit` e `onClear` e exibe um formulário dinâmico de filtros.

### Botões e Inputs
- **Button**: Botão customizado com efeitos de hover e compatibilidade com o tema.
- **LinkButton**: Botão que atua como link, com suporte a atributos como `href`, `target` e `download`.
- **NavigationButton**: Botão para navegação, que pode renderizar um `<Link>` se for informado um `href`.
- **Input**: Campo de input customizado com suporte a labels, mensagens de erro e customização via props.

### Outros Componentes de Inputs
- **CustomSelect**: Select customizado que suporta busca interna, seleção múltipla e exibe opções filtradas.
- **Switcher**: Componente para alternar entre temas (claro/escuro) com animação e ícones dinâmicos.

---

## Exemplos de Uso

### 1. Layout Básico

```jsx
import React from 'react';
import { Layout } from '@alexandrepaim/pentacraft_ui';

function App() {
  return (
    <Layout.Root 
      themeSwitcher={true} 
      colorSchemeDark={{ background: '#1a1a1a', textPrimary: '#fff' }} 
      colorSchemeDefault={{ background: '#fff', textPrimary: '#000' }}
    >
      <Layout.HeaderMenu 
        userName="Maria Silva" 
        userImage="https://exemplo.com/avatar.jpg"
      >
        <Layout.HeaderMenuItem href="/perfil">Perfil</Layout.HeaderMenuItem>
        <Layout.HeaderMenuItem href="/sair">Sair</Layout.HeaderMenuItem>
      </Layout.HeaderMenu>
      <Layout.Content>
        <h2>Bem-vindo à Pentacraft UI!</h2>
      </Layout.Content>
      <Layout.Menu>
        <Layout.MenuItem href="/dashboard" icon={<i className="icon-dashboard" />}>
          Dashboard
        </Layout.MenuItem>
        <Layout.MenuEndItem href="/configuracoes" icon={<i className="icon-settings" />}>
          Configurações
        </Layout.MenuEndItem>
      </Layout.Menu>
    </Layout.Root>
  );
}

export default App;
```

### 2. Página de Listagem

```jsx
import React from 'react';
import List from '@alexandrepaim/pentacraft_ui/dist/List';
import Table from '@alexandrepaim/pentacraft_ui/dist/Table';

function ListagemUsuarios() {
  return (
    <List.Root 
      title="Usuários" 
      createButtonTitle="Novo Usuário" 
      createButtonHref="/usuarios/novo"
    >
      <List.Filters>
        {/* Componentes de filtros */}
      </List.Filters>
      <List.Content>
        <Table.Root>
          {/* Conteúdo da tabela */}
        </Table.Root>
      </List.Content>
    </List.Root>
  );
}

export default ListagemUsuarios;
```

### 3. Formulário

```jsx
import React from 'react';
import Form from '@alexandrepaim/pentacraft_ui/dist/Form';
import { Input } from '@alexandrepaim/pentacraft_ui/dist/Inputs';

function Cadastro() {
  const handleSubmit = (event, values) => {
    console.log('Valores do formulário:', values);
  };

  return (
    <Form.Root title="Cadastro" onSubmit={handleSubmit}>
      <Form.Content>
        <Input name="nome" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
      </Form.Content>
      <Form.Actions>
        <button type="submit">Salvar</button>
      </Form.Actions>
    </Form.Root>
  );
}

export default Cadastro;
```

### 4. Página Padrão

```jsx
import React from 'react';
import Page from '@alexandrepaim/pentacraft_ui/dist/Page';

function PaginaPadrao() {
  return (
    <Page.Root 
      title="Página Padrão" 
      actions={() => <button>Ação Extra</button>}
    >
      <Page.Filters>
        {/* Filtros da página */}
      </Page.Filters>
      <Page.Content>
        <p>Conteúdo da página...</p>
      </Page.Content>
      <Page.Pagination 
        currentPage={2} 
        totalPages={10} 
        perPage={10}
        onChangePage={(page) => console.log('Mudar para página:', page)}
        onChangePerPage={(perPage) => console.log('Itens por página:', perPage)}
      />
    </Page.Root>
  );
}

export default PaginaPadrao;
```

### 5. Uso dos Componentes Auxiliares

```jsx
import React from 'react';
import { CustomSelect, Button, Switcher } from '@alexandrepaim/pentacraft_ui';

function ExemploAuxiliares() {
  const [temaEscuro, setTemaEscuro] = React.useState(false);
  const [opcao, setOpcao] = React.useState();

  return (
    <div>
      <Switcher value={temaEscuro} onChange={setTemaEscuro} />
      <CustomSelect 
        name="categoria" 
        options={[
          { value: '1', label: 'Categoria 1' },
          { value: '2', label: 'Categoria 2' },
        ]}
        placeholder="Selecione a categoria"
        onChange={setOpcao}
      />
      <Button onClick={() => alert('Clicou no botão!')}>
        Clique Aqui
      </Button>
    </div>
  );
}

export default ExemploAuxiliares;
```

## Desenvolvido por:
<div align="center">

||
|---
|[<img src="https://avatars.githubusercontent.com/u/76395975?v=4" width=115 style="border-radius: 50%;"> <br> <sub> Alexandre Safar Paim </sub>](https://github.com/alexandreSafarPaim)

</div>