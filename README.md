# Teste Técnico Orbital

Este projeto é uma aplicação web que consiste em uma API em Laravel 10 para cadastro de produtos, utilizando autenticação JWT, e um frontend em Vue.js 3.


## Requisitos

 - PHP >= 8
 - Composer
 - Node.js >= 14
 - NPM ou Yarn
 - MySQL

## Configuração
### Laravel
Clone o repositório desse projeto com o seguinte comando:
```
git clone https://github.com/jorjbarbosa/teste-orbital.git
```
Entre no diretório do projeto:
```
cd teste-orbital
```
Instale as dependências do Laravel:
```
composer install
```
crie uma cópia do arquivo `.env.example` e o renomeie para `.env` e configure as variáveis de ambiente, incluindo a conexão com o banco de dados e as configurações JWT.
```
php artisan key:generate
php artisan jwt:secret
```
Adicione também o endereço da aplicação na variável `VITE_APP_URL` do arquivo `.env`
crie um link simbólico para tornar o storage acessível:
```
php artisan storage:link
```
Execute as migrações para criar as tabelas no banco de dados:
```
php artisan migrate
```
Inicie o servidor Laravel:
```
php artisan serve
```
### Vue.js
No mesmo diretório do projeto, instale as dependências via `npm` ou `yarn`
```
npm install #ou yarn install
```
Execute o servidor de desenvolvimento:
```
npm run dev
```
ou faça o build dos assets para produção:
```
npm run build
```
### Acessando a aplicação localmente
Acesse a URL `localhost:8000` para acessar a interface da aplicação

## Endpoints da API
### API Laravel

-   **GET /api/products:** Retorna a lista de produtos.
-   **POST /api/products:** Cria um novo produto.
-   **POST /api/users:** Cria um novo usuário
-   **POST /api/register:** Registra um novo usuário.
-   **POST /api/login:** Autentica o usuário e retorna um token JWT.
-   **POST /api/logout:** Desautentica o usuário logado.
-   **POST /api/verify_token:** Verifica se o token do usuario é válido.

## Frontend
A interface da aplicação consistem em um SPA desenvolvido com Vue.js, Bootstrap 5 e Vitejs

![Tela de login](https://i.imgur.com/XJsSbAW.jpg)

## Demonstração da aplicação (Nova URL):
[Demo](https://727c-2804-14d-148e-8062-74c6-6f37-91a9-ff4.ngrok-free.app)
