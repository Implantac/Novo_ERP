# Backend USE SISTEMAS

Backend do sistema ERP da USE SISTEMAS, desenvolvido com Node.js, Express e MongoDB.

## Estrutura do Projeto

```
backend/
├── models/          # Modelos do MongoDB
│   ├── Usuario.js   # Modelo de usuário
│   └── Produto.js   # Modelo de produto
├── routes/          # Rotas da API
│   ├── auth.routes.js    # Rotas de autenticação
│   └── estoque.routes.js # Rotas de estoque
├── scripts/         # Scripts utilitários
│   └── init-admin.js     # Script para criar admin inicial
├── .env             # Variáveis de ambiente
├── .gitignore       # Arquivos ignorados pelo Git
├── package.json     # Dependências e scripts
├── README.md        # Esta documentação
└── server.js        # Ponto de entrada da aplicação
```

## Requisitos

- Node.js 14+
- MongoDB 4.4+
- NPM ou Yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Implantac/Novo_ERP.git
cd Novo_ERP/backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Crie o usuário administrador inicial:
```bash
npm run init-admin
```

## Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

## API Endpoints

### Autenticação
- POST /api/auth/login - Login de usuário
- POST /api/auth/registro - Registro de novo usuário (requer admin)
- GET /api/auth/verificar - Verifica token JWT

### Estoque
- GET /api/estoque - Lista todos os produtos
- GET /api/estoque/:id - Obtém produto específico
- POST /api/estoque - Cadastra novo produto
- PUT /api/estoque/:id - Atualiza produto
- POST /api/estoque/:id/movimentacao - Registra movimentação
- GET /api/estoque/:id/movimentacoes - Histórico de movimentações
- GET /api/estoque/relatorios/estoque-baixo - Relatório de produtos com estoque baixo

## Segurança

- Autenticação via JWT
- Senhas criptografadas com bcrypt
- Validação de dados
- Controle de acesso baseado em cargos

## Cargos de Usuário

- admin: Acesso total ao sistema
- gerente: Acesso a gestão e relatórios
- vendedor: Acesso a vendas e consultas
- estoquista: Acesso ao controle de estoque

## Desenvolvimento

### Instalando novas dependências
```bash
npm install nome-do-pacote
```

### Executando testes
```bash
npm test
```

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença ISC.
