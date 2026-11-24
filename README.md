# Portfolio personal — Rodrigo Emanuel Gomez Muñoz

Portfolio personal de una sola página desarrollado con HTML, CSS y JavaScript. Presenta el perfil profesional de Rodrigo Emanuel Gomez Muñoz como desarrollador frontend, estudiante de la Tecnicatura Superior en Desarrollo de Software del IFTS N.º 16 y su trayectoria académica.

El sitio está disponible en español y utiliza una interfaz oscura, adaptable a computadora, tablet y teléfono.

## Contenido del sitio

- **Inicio:** presentación personal, descripción profesional y accesos a proyectos y contacto.
- **Sobre mí:** historia personal, intereses, objetivos profesionales y forma de trabajo.
- **Qué hago:** áreas de interés en desarrollo web y aplicaciones móviles.
- **Habilidades:** HTML5, CSS3 y JavaScript.
- **Proyectos:** dos trabajos realizados durante la formación en el IFTS N.º 16.
- **Educación:** formación académica en el IFTS N.º 16 y formación complementaria en TalentoTech y Tecno3F.
- **Contacto:** correo electrónico, WhatsApp y GitHub.
- **Pie de página:** nombre, navegación secundaria, perfil de GitHub y año actual generado automáticamente.

## Proyectos incluidos

### Tienda de té — Cura Té Alma

- Trabajo: TPO 1 y 2 del IFTS N.º 16.
- Objetivo: rediseño temático de una tienda de té.
- Tecnologías: HTML5, CSS3 y JavaScript.
- Repositorio: [nicoHernan/Frontend_TPO1Y2_Ifts16](https://github.com/nicoHernan/Frontend_TPO1Y2_Ifts16)

### Flash News — Edición Argentina

- Trabajo: TPO 2 del IFTS N.º 16.
- Objetivo: reproducción frontend de la portada de elDiarioAR.
- Tecnologías: HTML5, CSS3, JavaScript y Currents API.
- Repositorio: [emanuelmunoz0/t2_frontend_ifts16](https://github.com/emanuelmunoz0/t2_frontend_ifts16)

## Tecnologías utilizadas

- HTML5 para la estructura y el contenido semántico.
- CSS3 para estilos, distribución, diseño responsive y animaciones.
- JavaScript vanilla para el menú móvil, los carruseles y el año del pie.
- SVG locales para los iconos.
- Imágenes WebP optimizadas para fotografía y capturas.
- Sin frameworks, bibliotecas de componentes ni procesos de compilación.

## Funcionalidades

- Navegación mediante enlaces internos con desplazamiento suave.
- Encabezado fijo durante el desplazamiento.
- Botón **Inicio** que lleva al comienzo de la página.
- Menú móvil desplegable con actualización de `aria-expanded` y `aria-label`.
- Dos carruseles independientes con botones anterior/siguiente e indicadores.
- Portada con llamada a proyectos y contacto.
- Tarjetas de contacto con correo, WhatsApp y GitHub.
- Año del pie actualizado mediante JavaScript.
- Enlaces externos abiertos en una pestaña nueva con atributos de seguridad.
- Accesibilidad básica mediante etiquetas ARIA, textos alternativos y navegación por teclado.

## Diseño responsive

El CSS se adapta mediante puntos de corte principales:

- Hasta `56.25rem`: reduce el ancho de la fotografía y los espacios.
- Hasta `47.5rem`: activa el menú móvil y organiza las cuadrículas en columnas.
- Hasta `26.25rem`: ajusta tipografías, contenedor, botones y carrusel.

## Estructura del proyecto

```text
portafolio_frontend_ifts16/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── img/
│   ├── perfil.webp
│   ├── proyecto1-1.webp
│   ├── proyecto1-2.webp
│   ├── proyecto1-3.webp
│   ├── proyecto2-1.webp
│   ├── proyecto2-2.webp
│   └── proyecto2-3.webp
└── assets/
    └── icons/
        ├── aplicaciones-moviles.svg
        ├── css3.svg
        ├── desarrollo-web.svg
        ├── flecha.svg
        ├── github.svg
        ├── gmail.svg
        ├── html5.svg
        ├── javascript.svg
        └── whatsapp.svg
```

## Archivos principales

### `index.html`

Contiene toda la estructura y el contenido del portfolio: navegación, portada, secciones, proyectos, educación, contacto y pie de página.

### `css/styles.css`

Define la paleta oscura, tipografías, espacios, tarjetas, carruseles, encabezado fijo, menú móvil y los puntos de corte responsive.

### `js/main.js`

Implementa:

- Apertura y cierre del menú móvil.
- Cierre automático del menú al seleccionar una opción.
- Desplazamiento al comienzo de la página desde los enlaces de inicio.
- Funcionamiento independiente de ambos carruseles.
- Cambio de imágenes mediante flechas e indicadores.
- Inserción del año actual en el pie de página.

## Ejecutar el proyecto

No se requiere instalar dependencias ni utilizar Node.js.

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `portafolio_frontend_ifts16`.
3. Abrir `index.html` directamente en el navegador.

También puede ejecutarse con la extensión **Live Server** de Visual Studio Code para recargar el sitio durante el desarrollo.

## Personalizar el contenido

Editar `index.html` para modificar textos, enlaces, datos personales y estructura de las secciones.

### Capturas de proyectos

Las imágenes se encuentran en `img/` y deben conservar los nombres actuales:

- Proyecto 1: `proyecto1-1.webp`, `proyecto1-2.webp`, `proyecto1-3.webp`
- Proyecto 2: `proyecto2-1.webp`, `proyecto2-2.webp`, `proyecto2-3.webp`

Las capturas se muestran con una proporción `16 / 10`, cubriendo el contenedor sin deformación.

### Datos de contacto

Los datos se pueden actualizar en la sección `contacto` de `index.html`:

- Correo: `mailto:`
- WhatsApp: `https://wa.me/5491122516925`
- GitHub: `https://github.com/emanuelmunoz0`

### Agregar o duplicar proyectos

Cada proyecto utiliza un artículo `.tarjeta-proyecto` y un elemento `.carrusel`. Al duplicar un proyecto debe añadirse:

- Un contenedor único para el carrusel.
- Tres imágenes adicionales o las que se desee mostrar.
- Botones anterior y siguiente.
- Indicadores que correspondan a cada imagen.

Todos los carruseles se inicializan automáticamente al cargar `js/main.js` mediante `initializeCarousel`.