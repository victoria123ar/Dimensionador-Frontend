# Dimensionador de Placa de Orifício

Este projeto é um dimensionador de placa de orifício, uma ferramenta que auxilia no cálculo de vazão de fluido, diâmetro do orifício e diferença de pressão em sistemas que utilizam esse dispositivo de medição. O dimensionador permite escolher o tipo de tomada, a composição do fluido e a fase do mesmo, fornecendo resultados precisos para uma ampla gama de aplicações.

## Funcionalidades

O dimensionador de placa de orifício possui as seguintes funcionalidades:

1. *Cálculo de Vazão*: Com base nos parâmetros fornecidos, como diâmetro do orifício, diferença de pressão e propriedades do fluido, o dimensionador pode calcular a vazão do fluido em um sistema.

2. *Cálculo do Diâmetro do Orifício*: Se a vazão desejada é conhecida, o dimensionador permite calcular o diâmetro adequado do orifício necessário para atingir essa vazão.

3. *Cálculo da Diferença de Pressão*: Se a vazão e o diâmetro do orifício são conhecidos, o dimensionador pode determinar a diferença de pressão correspondente para esse sistema.

4. *Seleção do Tipo de Tomada*: O dimensionador oferece opções para selecionar o tipo de tomada da placa de orifício, como tomada flangeada, tomada de solda, entre outras.

5. *Composição do Fluido*: O dimensionador permite especificar a composição do fluido, incluindo sua densidade, viscosidade e outras propriedades relevantes para o cálculo.

6. *Fase do Fluido*: É possível escolher a fase do fluido, se é líquido, gás ou vapor, para ajustar os cálculos adequadamente.

## Como usar

1. *Acesse o Dimensionador*: Abra o aplicativo do dimensionador de placa de orifício.

2. *Forneça as Informações*: Insira os parâmetros necessários, como vazão desejada, tipo de tomada, composição do fluido e fase do mesmo.

3. *Calcule*: Selecione o cálculo desejado (vazão, diâmetro do orifício ou diferença de pressão) e clique no botão de calcular.

4. *Visualize os Resultados*: O dimensionador irá exibir os resultados do cálculo de acordo com as informações fornecidas.

5. *Ajuste os Parâmetros*: Se necessário, você pode ajustar os parâmetros e repetir o cálculo para obter diferentes resultados.

Esperamos que o dimensionador de placa de orifício seja útil e facilite o dimensionamento e cálculo necessário para suas aplicações.

## Como Executar o Projeto em Ambiente de Desenvolvimento

Siga as etapas abaixo para executar o projeto em seu ambiente de desenvolvimento:

1. **Clonar o repositório**: Faça uma cópia local deste repositório em seu computador.

2. **Instalar as dependências**: No diretório raiz do projeto, execute o seguinte comando no terminal para instalar todas as dependências necessárias:

**npm install**

3. **Configurar o arquivo .env**: Renomeie o arquivo `.env.example` para `.env`. Abra o arquivo `.env` e preencha as variáveis de ambiente de acordo com as configurações do seu ambiente de desenvolvimento. Certifique-se de que a variável `REACT_APP_API_BASE_URL` esteja apontando para o servidor de API correto. Por exemplo:

**REACT_APP_API_BASE_URL=http://localhost:8000**

4. **Iniciar o servidor de desenvolvimento**: Execute o seguinte comando no terminal para iniciar o servidor de desenvolvimento. Isso iniciará a aplicação e abrirá automaticamente no seu navegador padrão.

**npm start**

Agora você pode explorar e utilizar o projeto em seu ambiente de desenvolvimento. Qualquer alteração no código-fonte será automaticamente recarregada no navegador para facilitar o desenvolvimento contínuo.

Certifique-se de que todas as dependências foram instaladas corretamente e que as configurações do arquivo `.env` estão corretas para garantir o funcionamento adequado do projeto durante o desenvolvimento.
