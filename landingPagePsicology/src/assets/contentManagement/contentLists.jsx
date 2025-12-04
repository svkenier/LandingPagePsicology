////import images//////
import imgServiceOnline from "@/assets/images/imgServiceOnline.png";
import imgSevicePresencial from "@/assets/images/imgServicePresencial.png";
import cardImg1 from "@/assets/images/cardImg01.png";
import cardImg2 from "@/assets/images/cardImg02.png";
import cardImg3 from "@/assets/images/cardImg03.png";
////import icons/////
import CheckIcon from "@mui/icons-material/Check";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SpaIcon from "@mui/icons-material/Spa";
import SupportIcon from "@mui/icons-material/Support";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
//// import color palette //////
import { colorsPalette } from "@/styles/colorsPalette";
export const contentLists = () => {
  const { details , } = colorsPalette();

  ////////// Abaut Us lists //////////////////////////

  const listsCards = [
    {
      image: cardImg1,
      title: "Gestionar desafíos emocionales",
      description: "estrés, ansiedad, relaciones interpersonales",
    },
    {
      image: cardImg2,
      title: "Potenciar tu autoconocimiento",
      description: "autoestima y habilidades de afrontamiento.",
    },
    {
      image: cardImg3,
      title: "Proteger tu bienestar psicológico",
      description: "mediante estrategias preventivas y de autocuidado.",
    },
  ];

  ///////// skills lists /////////////////

  const listSkills = [
    {
      title: "Credenciales clave:",

      skills: [
        {
          icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
          subTitle: "Psicólogo",
          info: "(Universidad Rafael Urdaneta, 2019)",
        },
        {
          icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
          subTitle: "Maestría en Psicología Clínica",
          info: "(Universidad Rafael Urdaneta, 2023).",
        },
        {
          icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
          subTitle:
            "Miembro activo de la Federación de Psicólogo de Venezuela",
          info: "(Nº Registro FPV: 16.605).",
        },
      ],
    },
    {
      title: "Áreas de intervención frecuentes:",

      skills: [
        {
          icon: (
            <PsychologyIcon sx={{ color: `${details} `, fontSize: "1.5rem" }} />
          ),
          info: "Ansiedad generalizada y trastornos asociados.",
        },
        {
          icon: (
            <SelfImprovementIcon
              sx={{ color: `${details}`, fontSize: "1.5rem" }}
            />
          ),
          info: "Fortalecimiento de la autoestima y el autoconcepto.",
        },
        {
          icon: <SpaIcon sx={{ color: `${details}`, fontSize: "1.5rem" }} />,
          info: "Regulación emocional y manejo del estrés.",
        },
        {
          icon: (
            <SupportIcon sx={{ color: `${details}`, fontSize: "1.5rem" }} />
          ),
          info: "Crisis vitales y procesos de duelo.",
        },
      ],
    },
  ];

  const listMethology = [
    {
      title: "Evaluación integral:",
      info: "Identificamos juntos las raíces de tu malestar emocional.",
    },
    {
      title: "Plan personalizado:",
      info: "Técnicas adaptadas a tu contexto y necesidades.",
    },
    {
      title: "Seguimiento activo:",
      info: "Acompañamiento continuo para consolidar cambios.",
    },
  ];

  /////////// services lists//////////////////

  const listServices = [
    {
      title: "Modalidad Presencial",
      image: imgSevicePresencial,
      info: [
        " Centro Comercial Puente Cristal (Casco Central, Maracaibo)",
        "Sesiones cara a cara en un espacio privado y confidencial, diseñado para facilitar la introspección y el diálogo terapéutico.",
        "Ideal para quienes buscan un ambiente físico libre de distracciones.",
      ],
    },
    {
      title: "Modalidad Online",
      image: imgServiceOnline,
      info: [
        "  Sesiones por video llamada (plataforma segura y cifrada)",
        "Terapia accesible desde cualquier lugar de Venezuela o el mundo, con horarios flexibles (mañana, tarde o noche).",
        "Perfecta para agendas ocupadas, movilidad reducida o preferencia por la comodidad del hogar.",
      ],
    },
  ];

  const sesionContent = [
    {
      title: "Evaluación inicial:",
      Info: "Análisis de tus necesidades y definición de metas.",
    },
    {
      title: "Herramientas prácticas:",
      Info: "Ejercicios para gestionar ansiedad, mejorar la autoestima o regular emociones.",
    },
    {
      title: "Feedback constructivo:",
      Info: "Orientación clara y acciones concretas para avanzar.",
    },
  ];

  const keyBenefits = [
    {
      icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
      title: "Confidencialidad garantizada",
      Info: "en ambas modalidades.",
    },
    {
      icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
      title: "Enfoque cognitivo-conductual",
      Info: "(TCC) con técnicas validadas científicamente.",
    },
    {
      icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
      title: "Planes personalizados",
      Info: "Duración y frecuencia adaptadas a tu ritmo y objetivos.",
    },
    {
      icon: <CheckIcon sx={{ color: "#0fbb4d", fontSize: "1.5rem" }} />,
      title: "Seguimiento continuo",
      Info: ": Recursos y ejercicios prácticos entre sesiones.",
    },
  ];

  /////////////// form lists /////////////////////

  const listConditionsForm = [
    {
      title: "Horarios de Atención",
      description:
        "Nuestro horario de atención es de Lunes a Sabado, de 9:00 AM a 6:00 PM. Estamos comprometidos a brindarte un espacio seguro y dedicado para tu bienestar emocional.",
    },
    {
      title: "Política de Cancelación",
      description: "Entendemos que pueden surgir imprevistos. Si necesitas cancelar o reprogramar tu cita, te pedimos que nos avises con al menos 24 horas de anticipación. Esto nos permite ofrecer ese horario a otra persona que lo necesite.",
    },
    {
      title: "Recordatorio de Puntualidad",
      description: "Para aprovechar al máximo tu sesión, te recomendamos llegar 5 minutos antes de tu hora programada. La puntualidad nos permite dedicarte el tiempo que mereces sin interrupciones.",
    },
  ];

  ////////////// footer lists //////////

  const listQuickLinks = [
    "Inicio",
    "Sobre el psicologo",
    "Servicios",
    "Contacto",
  ]

  const listLegalLinks = [
    {
      title: "Politica de privacidad",
      fileName: "politica_privacidad.pdf",
      content: `POLÍTICA DE PRIVACIDAD

1. RESPONSABLE DEL TRATAMIENTO
Protege Tu Psique, con domicilio en Maracaibo, Venezuela, es responsable del tratamiento de sus datos personales.

2. FINALIDAD DEL TRATAMIENTO
Los datos personales que nos proporciona serán utilizados para:
- Gestionar sus citas y consultas.
- Enviarle información sobre nuestros servicios.
- Cumplir con obligaciones legales.

3. DERECHOS DEL USUARIO
Usted tiene derecho a acceder, rectificar y suprimir sus datos, así como a oponerse al tratamiento de los mismos.

4. SEGURIDAD
Implementamos medidas de seguridad para proteger sus datos contra acceso no autorizado o pérdida.

Fecha de última actualización: 2025`
    },
    {
      title: "Terminos y condiciones",
      fileName: "terminos_condiciones.pdf",
      content: `TÉRMINOS Y CONDICIONES DE USO

1. ACEPTACIÓN DE LOS TÉRMINOS
Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones.

2. SERVICIOS
Protege Tu Psique ofrece servicios de psicología clínica online y presencial. Los servicios están sujetos a disponibilidad.

3. PROPIEDAD INTELECTUAL
Todo el contenido de este sitio web (textos, imágenes, logos) es propiedad de Protege Tu Psique y está protegido por leyes de derechos de autor.

4. LIMITACIÓN DE RESPONSABILIDAD
No nos hacemos responsables por daños directos o indirectos derivados del uso de este sitio web.

5. MODIFICACIONES
Nos reservamos el derecho de modificar estos términos en cualquier momento.

Fecha de última actualización: 2025`
    },
    {
      title: "Aviso legal",
      fileName: "aviso_legal.pdf",
      content: `AVISO LEGAL

1. DATOS IDENTIFICATIVOS
En cumplimiento con el deber de información, se notifica que este sitio web es operado por Protege Tu Psique.

2. USO DEL SITIO WEB
El usuario se compromete a utilizar el sitio web de conformidad con la ley y el orden público.

3. ENLACES A TERCEROS
Este sitio puede contener enlaces a sitios de terceros. No asumimos responsabilidad por el contenido de dichos sitios.

4. LEY APLICABLE
Este aviso legal se rige por las leyes de la República Bolivariana de Venezuela.

Contacto: contacto@protegetupsique.com`
    }
  ]

  const listSocialMedia =[
    {
      icon: <WhatsAppIcon/>,
      title:"WhatsApp",
      link: "Agendar consulta",
      href: "https://wa.me/584127713052?text=me%20gustaria%20solicitar%20informacion%20de%20su%20servicios",
    },
    {
      icon: <InstagramIcon/>,
      title:"Instagram",
      link: "@protegetupsique",
      href: "https://www.instagram.com/protegetupsique/",
    },
    {
      icon: <MusicNoteIcon/>,
      title:"TikTok",
      link: "@protegetupsique",
      href: "https://www.tiktok.com/@protegetupsique?_r=1&_t=ZM-91x1AhtH69z",
    }
  ]

  return {
    sesionContent,
    listMethology,
    listServices,
    listSkills,
    keyBenefits,
    listsCards,
    listConditionsForm,
    listQuickLinks,
    listLegalLinks,
    listSocialMedia
  };
};
