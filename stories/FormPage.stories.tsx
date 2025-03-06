import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { FiActivity } from 'react-icons/fi';
import { Form, Layout, LayoutProps, Input, Button } from '../src/index';
import { CustomSelect } from '../src/components/Inputs/Select';

const meta: Meta = {
  title: 'FormPage',
  component: Form.Root,
};

export default meta;

const Template: Story<LayoutProps> = args => {
  const [passShow, setPassShow] = useState(false);

  const [select, setSelect] = useState<string>('1');

  useEffect(() => {
    setTimeout(() => {
      setSelect('2');
    }
    , 2000);
  }, [])
  

  return (
    <Layout.Root>
      <Layout.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png" />
      <Layout.HeaderMenu userName="Alexandre safar paim">
        <Layout.HeaderMenuItem href="/perfil">Perfil</Layout.HeaderMenuItem>
      </Layout.HeaderMenu>
      <Layout.Menu>
        <Layout.MenuItem href="/?path=/story/layout--default">
          Layout
        </Layout.MenuItem>
        <Layout.MenuItem href="/?path=/story/list--default">
          List
        </Layout.MenuItem>
        <Layout.MenuItem
          icon={FiActivity}
          collapseItens={[
            { label: 'Ex 1', href: '/iframe' },
            { label: 'Ex 2', href: '#' },
          ]}
        >
          Exemplo Collapse
        </Layout.MenuItem>
      </Layout.Menu>
      <Layout.Content>


        <Form.Root
          title="Novo Usuário"
          onSubmit={(e, v) => {
            console.log(v);
          }}
        >
          <Form.Actions>
            <Button type="button" 
              style={{
                backgroundColor: '#e74c3c',
                color: '#fff',
              }}
              onClick={() => {
                //roll back
              }}
            >Cancelar</Button>
            <Button type="submit">Cadastrar</Button>
          </Form.Actions>


          <Form.Content className="flex flex-col gap-3 p-3">
            <Input
              label="Nome"
              name="nome"
              placeholder="Digite o nome"
            />
            <Input
              label="Text Area"
              name="textArea"
              placeholder="Text Area"
              customInput={(props) => <textarea style={props.style} className={props.className} />}
            />
            <Input label="Data" name="date" type="date" />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Digite o email"
              error="Email inválido"
              prefixElement={() => (
                <span className="w-full h-full p-1 bg-slate-700 flex items-center justify-center text-white font-bold text-2xl">
                  @
                </span>
              )}
            />
            <Input
              label="Senha"
              name="senha"
              type={passShow ? 'text' : 'password'}
              placeholder="Digite a senha"
              suffixElement={() => (
                <button
                  className="w-full h-full p-1 bg-slate-700 flex items-center justify-center text-white font-bold text-2xl"
                  onClick={() => setPassShow(!passShow)}
                >
                  O
                </button>
              )}
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
              label="Selecione1"
              placeholder='Selecione uma opção1'
              onChange={(e) => {
                setSelect(e as string);
              }}
              value={select}
              // multiple
              // error="Selecione uma opção"
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
              // value={"3"}
              defaultValue={select}
              label="Selecione2"
              placeholder='Selecione uma opção2'
              // multiple
              // error="Selecione uma opção"
            />
          </Form.Content>
        </Form.Root>

        
      </Layout.Content>
    </Layout.Root>
  );
};

export const Default = Template.bind({});
Default.args = {};
