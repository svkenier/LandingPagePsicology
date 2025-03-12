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
    "Politica de privacidad",
    "Terminos y condiciones",
    "Aviso legal"
  ]

  const listSocialMedia =[
    {
      icon: <WhatsAppIcon/>,
      title:"WhatsApp",
      link: "Agendar consulta",
    },
    {
      icon: <InstagramIcon/>,
      title:"Instagram",
      link: "@protegetupsique",
    },
    {
      icon: <MusicNoteIcon/>,
      title:"TikTok",
      link: "@protegetupsique",
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
