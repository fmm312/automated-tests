import { Dropdown } from ".";

import { screen, render, userEvent } from '../../tests';

const title = "Selecione o Pokemon";
const options = ['Bulbasauro', 'Squirtle', 'Charmander'];

describe('Dropdown', () => {

  //  1. Dropdown comece fechado
  it('should start closed', () => {
    render(
      <Dropdown 
        title={title} 
        options={options}
        onSelect={() => {}}
      />
    );

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  //  2. Dropdown mostrar as opções de menu quando for clicado
  it('should show options when open', () => {
    render(
      <Dropdown 
        title={title} 
        options={options}
        onSelect={() => {}}
      />
    );

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: title }));

    expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument();
  });

  // 3. Quando clicar em um menu, fechar o dropdown e indicar item selecionado
  it('should signal an option was selected and close the dropdown', () => {
    render(
      <Dropdown 
        title={title} 
        options={options}
        onSelect={jest.fn()}
      />
    );

    userEvent.click(screen.getByRole('button', { name: title }));

    expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument();

    userEvent.click(screen.getByRole('menuitem', { name: options[1] }));

    // expect(jest.fn()).toHaveBeenCalledWith(options[1]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  }); 
});