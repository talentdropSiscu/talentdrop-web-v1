# IDI NEXUS bajo /idi-nexus — preparación de Preview

La rama `idi-nexus-public-route-review` incorpora un proxy **limitado** a la ruta
`/idi-nexus` y a los recursos de la web corporativa de IDI NEXUS.

## Antes de probar

1. Confirmar un origen HTTPS de `pnexus-web` con acceso HTTP desde el servidor Vercel,
   no solo desde el navegador autenticado. Las URLs Preview protegidas con SSO no sirven
   como origen público para un proxy sin credenciales.
2. Configurar en el proyecto Vercel de TalentDrop (`talentdrop-web-v1`) la variable
   `IDI_NEXUS_ORIGIN` **solo en Preview** con el origen HTTPS sin ruta final.
3. Verificar que `/idi-nexus/`, `/idi-nexus/es/`,
   `/idi-nexus/es/contacto/`, `/idi-nexus/_astro/...`,
   `/idi-nexus/video/hero-idi-nexus.mp4` y
   `/idi-nexus/brand/idi-nexus-horizontal.svg` responden y se ven correctamente.
4. Revisar diseño en escritorio/móvil, enlaces legales, navegación, estilos,
   reproducción del vídeo y que `/` sigue mostrando TalentDrop.
5. Solo tras aprobación explícita, preparar publicación. No mover dominios ni tocar
   la configuración productiva durante esta revisión.

## Limitaciones conocidas

- Si falta `IDI_NEXUS_ORIGIN`, la subruta devuelve 503 por diseño.
- Si el origen está protegido o no es accesible para el proxy, devuelve 502 o
  una respuesta de autenticación: no considerar lista la integración.
- El código sustituye rutas absolutas de atributos HTML. Hay que comprobar
  visualmente los recursos y enlaces de todas las páginas y probar los
  comportamientos JavaScript antes de autorizar producción.
- No usar el proxy para API de clientes ni documentos; se limita a la web
  corporativa pública.
