# Protege Tu Psique - Landing Page

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Producci%C3%B3n-success)
![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%7C%20Auth%20%7C%20Firestore-orange)

**🌐 Sitio en Vivo:** [https://protege-tu-psique.web.app](https://protege-tu-psique.web.app)

Una landing page moderna y profesional diseñada para un consultorio de psicología, enfocada en ofrecer servicios de terapia online y presencial. Incluye un panel de administración completo para la gestión de citas.

## ✨ Características Principales

### 🏠 Landing Page (Pública)

- **Diseño Bento**: Estética moderna con cuadrículas asimétricas.
- **Totalmente Responsiva**: Adaptable a cualquier dispositivo.
- **Formulario de Contacto**: Integrado con Firestore para agendar citas.
- **Enlaces Sociales**: Conexión directa a WhatsApp (con mensaje predefinido), Instagram y TikTok.

### 🔐 Panel de Administración (Privado)

- **Autenticación Segura**: Login con Firebase Auth.
- **Gestión de Citas (CRUD)**:
  - **Ver**: Detalles completos de cada solicitud.
  - **Editar**: Modificar datos de la cita.
  - **Eliminar**: Borrar registros con confirmación.
  - **Estados**: Cambiar estado (Pendiente ↔ Confirmada) con un clic.
- **Búsqueda**: Filtrado rápido de citas por nombre, email o teléfono.

## 🚀 Tecnologías Utilizadas

### Core & Backend

- **[React](https://react.dev/)** (v18) + **[Vite](https://vitejs.dev/)**
- **[Firebase](https://firebase.google.com/)**:
  - **Hosting**: Despliegue rápido y seguro.
  - **Authentication**: Sistema de login.
  - **Firestore**: Base de datos NoSQL en tiempo real.

### UI & Estilos

- **[Material UI (MUI)](https://mui.com/)** (v6)
- **[Emotion](https://emotion.sh/)** & **[Styled Components](https://styled-components.com/)**
- **[Phosphor Icons](https://phosphoricons.com/)** / **MUI Icons**

### Formularios & Utilidades

- **[Formik](https://formik.org/)** + **[Yup](https://github.com/jquense/yup)** (Validación)
- **[React Router](https://reactrouter.com/)** (Navegación)
- **[jsPDF](https://github.com/parallax/jsPDF)** (Generación de documentos)

## 🛠️ Instalación y Ejecución Local

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/svkenier/LandingPagePsicology.git
    cd LandingPagePsicology
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crear un archivo `.env` o configurar `src/config/firebaseConfig.js` con tus credenciales de Firebase.

4.  **Ejecutar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

5.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 📞 Contacto y Redes

- **WhatsApp**: [+58 412-7713052](https://wa.me/584127713052?text=me%20gustaria%20solicitar%20informacion%20de%20su%20servicios)
- **Instagram**: [@protegetupsique](https://www.instagram.com/protegetupsique/)
- **TikTok**: [@protegetupsique](https://www.tiktok.com/@protegetupsique)

---

© 2025 Protege Tu Psique. Todos los derechos reservados.
