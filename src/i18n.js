import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      nav: { 
        home: "Bosh sahifa", 
        about: "Men haqimda", 
        projects: "Loyihalar", 
        contact: "Bog‘lanish" 
      },
      hero: {
        title: "Gayratov Oyatulloh",
        role: "Backend dasturchi. Asosiy yo‘nalish — Golang.",
        subtitle: "Tizimlarni sokin, ishonchli va ortiqcha shovqinsiz quraman.",
        cta: "Loyihalarni ko‘rish",
      },
      about: {
        title: "Men haqimda",
        desc1: "Men backend sohasida ishlayman va Golang’dan foydalanaman.",
        desc2: "Kodning soddaligi, tushunarliligi va uzoq muddatda ishonchli ishlashi men uchun muhim.",
        desc3: "Servislar arxitekturasi va optimallashtirish jarayonlari menga qiziq.",
        stack: "Asosiy texnologiyalar: Golang, REST API, PostgreSQL, Docker.",
      },
      contact: {
        title: "Bog‘lanish",
        desc: "Savol, loyiha yoki hamkorlik taklifi bo‘lsa — yozing. Javobni o‘zimdan olasiz.",
        name: "Ismingiz",
        email: "Email",
        message: "Xabar...",
        send: "Yuborish",
      },
      projects: {
        title: "Loyihalar",
        subtitle: "Men yaratgan ishlardan ba'zi namunalar",
        view: "Loyihani ko‘rish →",
      },
      footer: {
        about: "Men haqimda",
        projects: "Loyihalar",
        contact: "Bog‘lanish",
        note: "Ehtiyotkorlik va maqsad bilan yaratilgan.",
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
      hero: {
        title: "Gayratov Oyatulloh",
        role: "Backend developer. Specialized in Golang.",
        subtitle: "I build systems that are calm, reliable, and free of unnecessary complexity.",
        cta: "View Projects",
      },
      about: {
        title: "About Me",
        desc1: "I work in backend development using Golang.",
        desc2: "I value simplicity, clarity, and long-term reliability in code.",
        desc3: "I’m interested in service architecture and performance optimization.",
        stack: "Core technologies: Golang, REST API, PostgreSQL, Docker.",
      },
      contact: {
        title: "Let's Connect",
        desc: "If you have ideas, projects, or collaboration offers — feel free to reach out.",
        name: "Your Name",
        email: "Email",
        message: "Message...",
        send: "Send Message",
      },
      projects: {
        title: "Projects",
        subtitle: "Some examples of the work I've done",
        view: "View Project →",
      },
      footer: {
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
        note: "Created with love and purpose.",
      }
    }
  },
  ru: {
    translation: {
      nav: { home: "Главная", about: "О себе", projects: "Проекты", contact: "Контакты" },
      hero: {
        title: "Гайратов Оятуллох",
        role: "Backend разработчик. Основной стек — Go.",
        subtitle: "Создаю системы, которые работают тихо, стабильно и без лишнего шума.",
        cta: "Посмотреть проекты",
      },
      about: {
        title: "О себе",
        desc1: "Я работаю в backend разработке с использованием Golang.",
        desc2: "Для меня важны простота, ясность и долговременная надежность кода.",
        desc3: "Меня интересуют архитектура сервисов и оптимизация производительности.",
        stack: "Основные технологии: Golang, REST API, PostgreSQL, Docker.",
      },
      contact: {
        title: "Свяжитесь со мной",
        desc: "Если у вас есть идеи, проекты или предложения о сотрудничестве — свяжитесь со мной.",
        name: "Ваше имя",
        email: "Email",
        message: "Сообщение...",
        send: "Отправить сообщение",
      },
      projects: {
        title: "Проекты",
        subtitle: "Некоторые примеры работы",
        view: "Посмотреть проект →",
      },
      footer: {
        about: "О себе",
        projects: "Проекты",
        contact: "Контакты",
        note: "Создано с вниманием и намерением.",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

export default i18n;
