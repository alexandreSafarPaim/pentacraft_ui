import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { FiActivity } from 'react-icons/fi';
import {
  CustomSelect,
  Input,
  Layout,
  LayoutProps,
  Page,
  Table,
  useTheme,
} from '../src/index';

const meta: Meta = {
  title: 'Page',
  component: Page.Root,
};

export default meta;

const Template: Story<LayoutProps> = args => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [perPage, setPerPage] = useState(10);

  const scheme = useTheme();

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const changePerPage = (perPage: number) => {
    setTotalPages(perPage);
  };

  const data = [
    {
      ramal: '1234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '5678',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '91234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '1234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '1234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '1234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '1234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
    {
      ramal: '1234',
      empresa: 'Coca-Cola',
      listagem: [
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
        { nome: 'Alexandre', telefone: '1234-5678' },
      ],
    },
  ];

  return (
    <Layout.Root {...args}>
      <Layout.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png" />
      <Layout.HeaderMenu userName="Alexandre safar paim">
        <Layout.HeaderMenuItem href="/perfil">Perfil</Layout.HeaderMenuItem>
      </Layout.HeaderMenu>
      <Layout.Menu>
        <Layout.MenuItem href="/?path=/story/layout--default">
          Layout
        </Layout.MenuItem>
        <Layout.MenuItem href="iframe">List</Layout.MenuItem>
        <Layout.MenuItem
          icon={FiActivity}
          collapseItens={[
            { label: 'Ex 1', href: '#' },
            { label: 'Ex 2', href: '#' },
          ]}
        >
          Exemplo Collapse
        </Layout.MenuItem>
      </Layout.Menu>
      <Layout.Content>

        <Page.Root title="Usuários"
        >
          <Page.Filters
            onSubmit={values => console.log(values)}
            onClear={() => console.log('Limpar')}
          >
            <div className="flex flex-col py-2 gap-3">
              <Input
                name="name"
                label="Nome"
                placeholder="Digite o nome do usuário"
              />
              <CustomSelect
                name="select"
                options={[
                  { label: 'Opção 1', value: '1' },
                  { label: 'Opção 2', value: '2' },
                  { label: 'Opção 3', value: '3' },
                  { label: 'Opção 4', value: '4' },
                  { label: 'Opção 5', value: '5' },
                ]}
                value={['1', '2']}
                label="Selecione"
                placeholder="Selecione uma opção"
              />
            </div>
          </Page.Filters>

          <Page.Content>
            <div>
              Filtros aplicados
            </div>
              <Extrutura item={data[currentPage -1]}/>
          </Page.Content>
          <Page.Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            perPage={perPage}
            onChangePage={changePage}
            onChangePerPage={changePerPage}
          />
        </Page.Root>
      </Layout.Content>
    </Layout.Root>
  );
};

export const Default = Template.bind({});
Default.args = {};

function Extrutura({ item }) {
  return (
    <div
      style={{
        paddingBlock: '20px',
      }}
    >
        <h2>{item.ramal}</h2>
        <h3>{item.empresa}</h3>
      <Table.Root>
        <Table.THead>
          <Table.TH>Nome</Table.TH>
          <Table.TH>Telefone</Table.TH>
        </Table.THead>
        <Table.TBody>
          {item.listagem.map((list, index) => (
            <Table.TR key={index}>
              <Table.TD>{list.nome}</Table.TD>
              <Table.TD>{list.telefone}</Table.TD>
            </Table.TR>
          ))}
        </Table.TBody>
      </Table.Root>
    </div>
  );
}
