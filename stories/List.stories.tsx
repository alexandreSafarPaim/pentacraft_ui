import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { FiActivity } from 'react-icons/fi';
import { CustomSelect, Input, Layout, LayoutProps, List, Table } from '../src/index';

const meta: Meta = {
  title: 'List',
  component: List.Root,
};

export default meta;

const Template: Story<LayoutProps> = args => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [perPage, setPerPage] = useState(10);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const changePerPage = (perPage: number) => {
    setTotalPages(perPage);
  };

  return (
    <Layout.Root {...args} colorSchemeDefault={{}}>
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

        
        <List.Root
          title="Usuários"
          createButtonTitle="Criar Novo Usuário"
          onCreateClick={() => console.log('Criar novo usuário')}
        >
          <List.Filters
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
              placeholder='Selecione uma opção'
              // multiple
              // error="Selecione uma opção"
            />
            </div>
          </List.Filters>

          <List.Content>
            <Table.Root>
              <Table.THead>
                <Table.TH>Nome</Table.TH>
                <Table.TH>Email</Table.TH>
                <Table.TH>Telefone</Table.TH>
                <Table.TH>CPF</Table.TH>
              </Table.THead>

              <Table.TBody>
                <Table.TR>
                  <Table.TD>João</Table.TD>
                  <Table.TD>joao@email.com</Table.TD>
                  <Table.TD>999999999</Table.TD>
                  <Table.TD>99999999999</Table.TD>
                </Table.TR>
              </Table.TBody>

              <Table.Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePage={changePage}
                perPage={perPage}
                onChangePerPage={changePerPage}
              />
            </Table.Root>
          </List.Content>
        </List.Root>
      </Layout.Content>
    </Layout.Root>
  );
};

export const Default = Template.bind({});
Default.args = {};
