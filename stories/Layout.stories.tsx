import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { Layout, LayoutProps } from '../src/index';

const meta: Meta = {
  title: 'Layout',
  component: Layout.Root,
};

export default meta;

const logo = () => (
  <div>Loginho</div>
)

const Template: Story<LayoutProps> = args => (
  <Layout.Root {...args} themeSwitcher  
    colorSchemeDark={{
      background: '#a82121',
    }}
    colorSchemeDefault={{
    }}
  >
    <Layout.Logo src="https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo.png" />
    
    <Layout.HeaderActions>
      <button>Botão 1</button>
      <button>Botão 2</button>
    </Layout.HeaderActions>
    
    <Layout.HeaderMenu userName="Alexandre safar paim" >
      <Layout.HeaderMenuItem href="/perfil">Perfil</Layout.HeaderMenuItem>
    </Layout.HeaderMenu>
    
    <Layout.Menu>
      <Layout.MenuItem href="/?path=/story/layout--default">
        Layout
      </Layout.MenuItem>
      <Layout.MenuItem href="/?path=/story/list--default">List</Layout.MenuItem>
      <Layout.MenuItem
        icon={FiActivity}
        collapseItens={[
          { label: 'Ex 1', href: '/iframe' },
          { label: 'Ex 2', href: '#' },
        ]}
      >
        Exemplo Collapse
      </Layout.MenuItem>
      
      <Layout.MenuEndItem onClick={()=>{console.log('teste')}}>
        List
      </Layout.MenuEndItem>
    </Layout.Menu>
    
    <Layout.Content>
      
    </Layout.Content>
  </Layout.Root>
);

export const Default = Template.bind({});
Default.args = {};
