export const proyectos = [
  {
    id: "app-escolar",
    destacado: true,
    nombre: "App Escolar",
    resumen:
      "Sistema web desarrollado para instituciones educativas que permite administrar alumnos, maestros, padres y calificaciones desde una interfaz intuitiva y adaptable a cualquier dispositivo.",
    duracion: "1 año",
    rol: "Desarrollador Full Stack",
    cliente: "Aplicación Escolar",
    anio: 2024,
    link: "https://aplicacionescolar.com/",
    codigo: "#!",
    imagen: "/img/proyecto1.png",
    subtitulo: "Página web informativa",
    stack: [
      { id: "css", color: 1, title: "CSS", text: "Estilos responsivos con SASS." },
      { id: "html", color: 2, title: "HTML", text: "Estructura semántica accesible." },
      { id: "reactnative", color: 3, title: "React Native", text: "App móvil Android/iOS." },
      { id: "php", color: 4, title: "PHP", text: "Backend API" },
      { id: "mysql", color: 5, title: "MySQL", text: "Base de datos relacional." },
      { id: "js", color: 6, title: "JavaScript", text: "Interactividad dinámica." },
    ],
    descripcion: {
      objetivos:
        `
        Digitalizar la gestión escolar mediante una plataforma unificada que simplifica tareas administrativas y mejora la comunicación entre directivos, docentes, padres y alumnos. 
        Cuenta con un Dashboard para administración de las escuelas el comunmente llamado super admin
        Un dashboard para cada escuela que contrata el servicio este permite tener todos sus datso aislados por institucion
        La aplicación móvil que permite a los padres ver y realizar algunas acciones con respecto a sus hijos
        `,
      desafios: [
        "Gestión de usuarios con diferentes roles: (padres, maestros, alumnos, administradores).",
        "Integración de módulos múltiples: (calificaciones, asistencia, mensajes, pagos, reportes).",
        "Optimización de carga: para funcionar en dispositivos móviles de baja gama.",
        "Escalabilidad: para soportar varias escuelas en un mismo entorno.",
      ],
      soluciones: [
        "Creación de un backend modular en PHP con controladores segmentados por roles.",
        "Implementación de autenticación y cifrado de contraseñas.",
        "Panel administrativo en HTML(bootstrap) para gestionar usuarios y estadísticas.",
        "Certificado SSL configurado en Apache para navegación segura.",
        "Despliegue automatizado en AWS con EC2 y backups diarios.",
      ],
    },
  },
  {
    id: "sistema-rehab",
    destacado: true,
    nombre: "Sistema Rehab",
    resumen:
      "Sistema realizado para administrar terapeutas, pacientes y terapias, un CRUD donde se guardan y enlazan los datos de los modulos mencionados antes para dar un seguimiento y guardar la información de los mismos.",
    duracion: "4 meses",
    rol: "Desarrollador Full Stack",
    cliente: "Clínica Rehab",
    anio: 2025,
    link: "https://clinicarehabsys.com/",
    codigo: "#!",
    imagen: "/img/proyecto2.png",
    subtitulo: "Panel de calendario",
    stack: [
      { id: "react", color: 1, title: "React", text: "Interface modular" },
      { id: "node", color: 3, title: "Node", text: "API REST" },
      { id: "mysql", color: 5, title: "MySQL", text: "Base de datos relacional." },
      { id: "js", color: 8, title: "JavaScript", text: "Interactividad dinámica." },
    ],
    descripcion: {
      objetivos:
         `
        Formalizar las citas y seguimientos con pacientes asi como tener un registro digital de la actividad de cada paciente en formato PDF. El dashboard y las fucionalidades perimitiran mantener al personal así como pacientes actualizados sobre el status de cada cita dando notificaciones en tiempo real sobre el whatsapp de la clinica y los pacientes.
        `,
      desafios: [
        "Conexion API twilio para whatsapp.",
        "Acciones en tiempo real para citas conectadas con base de datos y twilio.",
        "Optimización de base de datos.",
        "Formato sistema web pero 100% responsivo.",
      ],
      soluciones: [
        "Implementacion de un modulo para detectar las llamadas a la API y generar una respuesta",
        "Actualizacion mediente la API una vez con la respuesta de la misma se almacena en BD",
        "Se guardaron datos en tipo JSON para aumentar la eficiencia en construccion de PDF y llamado de datos",
        "Se opta por un sistema de tarjetas para solucionar el problema de las tablas",
      ],
    },
  },
  {
    id: "passwordcloud",
    destacado: true,
    nombre: "Password Cloud",
    resumen:
      "Ultimo proyecto personal, un administrador de contraseñas simple, con login, registro y la funcion principal almacenar cualquier tipo de cuenta con contraseña y una referenacia o link.",
    duracion: "5 meses",
    rol: "Desarrollador Full Stack",
    cliente: "Desarrollo personal",
    anio: 2024,
    link: "https://passwordcloud.netlify.app",
    codigo: "#!",
    imagen: "/img/proyecto3.png",
    subtitulo: "Pantalla de Login ",
    stack: [
      { id: "react", color: 1, title: "React", text: "Interface modular" },
      { id: "node", color: 3, title: "Node", text: "API REST" },
      { id: "mysql", color: 5, title: "MySQL", text: "Base de datos relacional." },
      { id: "js", color: 8, title: "JavaScript", text: "Interactividad dinámica." },
    ],
    descripcion: {
      objetivos:
         `
        Guardar las contraseñas de cada usuario encriptando de manera segura cada una de estas, asi como una gestion simple y opción a categorias.
        `,
      desafios: [
        "Encriptado de contraseñas.",
        "Inicio de sesion por JWT y recuperacion de cuenta por correo",
        "Optimización para móviles tipo responsive.",
      ],
      soluciones: [
        "Se usan dos metodos de encripatacion uno para el usuario y otro para sus cuentas",
        "Se realiza una peticion a travez del JWT a la api verificamos datos y damos inicio a sesion o restablecemos contraseña",
        "Se usa una interface simple tipo tarjeta para el uso en dispositivos pequeños",
      ],
    },
  },
  {
    id: "urgemedica",
    destacado: true,
    nombre: "Urgemedica",
    resumen:
      "Página web estatica realizada para mostrar la información sobre los servicios que realiza la empresa, así como detalles extra que ayudaran a crear confianza en los usuarios.",
    duracion: "1 mes",
    rol: "Desarrollador web",
    cliente: "Urgemedica Ambulancias",
    anio: 2021,
    link: "https://urgemedicambulancias.com/",
    codigo: "#!",
    imagen: "/img/proyecto4.png",
    subtitulo: "Página web informativa",
    stack: [
      { id: "css", color: 1, title: "CSS", text: "Estilos responsivos con SASS." },
      { id: "html", color: 2, title: "HTML", text: "Estructura semántica accesible." },
      { id: "php", color: 4, title: "PHP", text: "Modularidad con templates " },
      { id: "js", color: 8, title: "JavaScript", text: "Interactividad dinámica." },
    ],
    descripcion: {
      objetivos:
         `
        Realizar una web informativa para validar la confianza de clientes y manejo de información sobre la empresa así como contacto directo para emergencias.
        `,
      desafios: [
        "Estuctura semántica en modulos",
        "SEO para posicionamiento en navegadores.",
        "Animaciones para hacer la experiencia mas interactiva",
      ],
      soluciones: [
        "Uso modular PHP para realizar templates y reutilizarlos.",
        "Palabras clave, implementación de Analitycs y de Clarity.",
        "mezclando js y sass para realizar las interactividad de la web",
      ],
    },
  },
  {
    id: "sistema-koena",
    destacado: true,
    nombre: "Sistema Koena",
    resumen:
      "Sistema realizado para administrar terapeutas, pacientes y terapias, un CRUD donde se guardan y enlazan los datos de los modulos mencionados antes para dar un seguimiento y guardar la información de los mismos.",
    duracion: "4 meses",
    rol: "Desarrollador Full Stack",
    cliente: "KOENA Psicología",
    anio: 2022,
    link: "https://koena.com.mx/sistema/",
    codigo: "#!",
    imagen: "/img/proyecto5.png",
    subtitulo: "Panel de bloques terapeuticos",
    stack: [
      { id: "php", color: 4, title: "PHP", text: "Backend API" },
      { id: "html", color: 2, title: "HTML", text: "Estructura semántica accesible." },
      { id: "css", color: 1, title: "CSS", text: "Estilos responsivos con SASS." },
      { id: "mysql", color: 5, title: "MySQL", text: "Base de datos relacional." },
      { id: "js", color: 6, title: "JavaScript", text: "Interactividad dinámica." },
    ],
    descripcion: {
      objetivos:
         `
        Concentrar los archivos de los pacientes la institución psicologica pretende pasar a digital todo el papelo y dar un seguimiento a travez de el dashboard teniendo registro de sus sesiones y pacientes así como terapeutas.
        `,
      desafios: [
        "Gestión de usuarios con diferentes roles.",
        "Generación de PDFs",
        "Concentracion de información para omitir papeleo",
      ],
      soluciones: [
        "Control por terapeutas y administradores donde se limitan funciones segun el rol",
        "Generacion de una función general para PDFs",
        "Gestion y normalización de datos para obtener toda la información",
      ],
    },
  },
  {
    id: "coreincorp",
    destacado: true,
    nombre: "Core Incorp",
    resumen:
      "Sistema ERP con manejo de roles módulos e información concentrado en pequeñas empresas para administración de sus recursos pasando su operación manual a digital y dando metricas sobre el negocio",
    duracion: "8 meses",
    rol: "Desarrollador Full Stack",
    cliente: "Software incorp",
    anio: 2025,
    link: "#!",
    codigo: "#!",
    imagen: "/img/proyecto6.png",
    subtitulo: "Panel de Usuarios",
    stack: [
      { id: "react", color: 1, title: "React", text: "Interface." },
      { id: "node", color: 3, title: "Node", text: "API REST." },
      { id: "mysql", color: 5, title: "MySQL", text: "Base de datos relacional." },
      { id: "js", color: 8, title: "JavaScript", text: "Interactividad dinámica." },
    ],
    descripcion: {
      objetivos:
         `
        Control y gestion de recursos por medio de un sistema de roles y modular donde se tiene acceso a la información independientemente del modulo ya que no dependen uno del otro pero a la vez se pueden unir. Creacion de metricas para la optimización de materiales, recursos e inventarios. Optimizacion de interface, datos y api para consultas instantaneas atravez de cualquier dispositivo. 
        `,
      desafios: [
        "Gestión de usuarios con diferentes roles.",
        "Integración de módulos múltiples.",
        "Optimización de carga para cualquier dispositivo.",
        "Escalabilidad multi-modulo.",
      ],
      soluciones: [
        "Autenticación con JWT y definiendo roles para acceso a lo necesario.",
        "Modularizacion de la base de datos asi como de la API para extraer solo lo necesario.",
        "Sistema de tarejetas y tablas ",
        "Cada modulo funciona por si mismo pueden ser escalables.",
      ],
    },
  },
];
