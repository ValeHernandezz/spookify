
# 👻 Spookify

¡Convierte tus fotos en imágenes aterradoras con Spookify! Genera fondos espeluznantes, transforma personas en criaturas de miedo, añade disfraces o máscaras, y descarga tus creaciones para compartirlas con amigos. ¡Todo esto usando la magia de la inteligencia artificial!

![mockup-desktop](https://github.com/user-attachments/assets/2f89b6d8-d4f2-49c4-b281-9e00e98d2407)

![mockup-mobile](https://github.com/user-attachments/assets/ce7d43da-0545-40f9-93a0-38f790e50bc5)

## ✔ Funcionalidades

- **Generar fondos de terror**: Cambia el fondo de tus imágenes por escenarios espeluznantes como cementerios embrujados o paisajes apocalípticos.
- **Transformar las personas**: Aplica efectos terroríficos a las personas en tus fotos, como convertirlas en zombis o monstruos.
- **Poner máscaras**: Añade máscaras icónicas de personajes de películas de terror como Jason Voorhees o Freddy Krueger.
- **Rellenar fotos o recortarlas**: Ajusta el tamaño de tus imágenes, añade o recorta áreas para lograr el encuadre perfecto.
- **Ponerle disfraz a las personas**: Transforma la ropa de los personajes en disfraces aterradores, perfectos para la temática de Halloween.
- **Efectos personalizados con IA**: Si no te gustan los efectos predeterminados, puedes crear el efecto que se te ocurra mediante inteligencia artificial.
- **Descargar y compartir tus fotos**: Guarda y comparte tus creaciones terroríficas con amigos y familiares a través de redes sociales.

## 🔧 Configuración del entorno

Antes de ejecutar la aplicación, asegúrate de configurar las variables de entorno en un archivo `.env` en el directorio raíz del proyecto. A continuación, se muestran las variables requeridas:

```sh
NEXT_PUBLIC_CLOUDINARY_URL= #tu_cloudinary_url
CLOUDINARY_API_KEY= #tu_api_key
CLOUDINARY_API_SECRET= #tu_api_secret
CLOUDINARY_UPLOAD_PRESET= #tu_upload_preset
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= #tu_cloud_name
PERPLEXITY_API_KEY= #tu_perplexity_api_key
NEXT_PUBLIC_URL_FRONTEND= #http://localhost:3000
```

### 📦 Instalación de dependencias

Para instalar los paquetes necesarios, puedes utilizar cualquiera de los siguientes gestores de paquetes:

- `pnpm` (recomendado por su eficiencia y rapidez)

  ```sh
  npm install -g pnpm
  ```

- `npm`

  ```sh
  npm install npm@latest -g
  ```

### 🚀 Iniciar el proyecto

Una vez que hayas configurado tu archivo `.env`, puedes iniciar el proyecto usando uno de los siguientes comandos:

### ▶️ Ejecutar el proyecto

```sh
pnpm run dev
```

o

```sh
npm run dev
```

## 🛠️ Construido con

- [![Cloudinary_API](https://img.shields.io/badge/Cloudinary_API-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)](https://next.cloudinary.dev/cldimage/examples) - Plataforma para gestionar, optimizar y transformar imágenes y videos a través de su API.
- [![Perplexity_API](https://img.shields.io/badge/Perplexity_API-20808d?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjIuMzk4IDcuMDloLTIuMzFWLjA2OGwtNy41MSA2LjM1NFYuMTU4aC0xLjE1NnY2LjE5Nkw0LjQ5IDB2Ny4wOUgxLjYwMnYxMC4zOTdINC40OVYyNGw2LjkzMy02LjM2djYuMjAxaDEuMTU1di02LjA0N2w2LjkzMiA2LjE4MXYtNi40ODhoMi44ODh6bS0zLjQ2Ni00LjUzMXY0LjUzaC01LjM1NXptLTEzLjI4Ni4wNjdsNC44NjkgNC40NjRoLTQuODd6TTIuNzU4IDE2LjMzMlY4LjI0NWg3Ljg0N0w0LjQ5IDE0LjM2djEuOTcyem0yLjg4OCA1LjA0di02LjUzNGw1Ljc3Ni01Ljc3NnY3LjAxMXptMTIuNzA4LjAyNWwtNS43NzYtNS4xNVY5LjA2MWw1Ljc3NiA1Ljc3NnptMi44ODktNS4wNjVIMTkuNTFWMTQuMzZsLTYuMTE1LTYuMTE1aDcuODQ4eiIvPjwvc3ZnPg==)](https://docs.perplexity.ai/home) -  Plataforma que ofrece modelos de lenguaje generativo a través de su API para desarrolladores.
- [![Next_JS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) - Framework de React que permite construir sitios web.
- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) - Biblioteca para interfaces de usuario web y nativas.
- [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Lenguaje de programación para desarrollar funciones interactivas en páginas web.
- [![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/es/) - Superconjunto de JavaScript que añade tipos estáticos y objetos basados en clases.
- [![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) - Framework de CSS para crear diseños web con clases predefinidas.

## 💻 Desarrollado por

|  |  |  |
|--|--|--|
| **👨‍💻 [nicomelendez](https://github.com/nicomelendez)** | [![portfolio](https://img.shields.io/badge/portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.nicomelendez.dev/) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nicolas-melendez/) |
| **👩‍💻 [ValeHernandezz](https://github.com/ValeHernandezz)** | [![portfolio](https://img.shields.io/badge/portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://valehernandez.com) | [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/valentina-hernandez-modino) |
