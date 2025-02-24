# Aprendendo React.js

### Passo a passo

Clone Repositório

```sh
git clone https://github.com/rafajefer/course-reactjs.git
```

```sh
cd course-reactjs
```

### Instale as dependências do projeto

```sh
docker compose up -d
```

```sh
docker exec -it reactjs-container npm install
```

### Rodando o projeto

```sh
docker exec -it reactjs-container npm run dev
```

### Comandos docker

Para start o container utilizando o docker composer

```sh
docker compose up -d
```

Acesse o container

```sh
docker exec -it reactjs-container bash
```

### Para encerrar o container

```sh
docker compose down
```
