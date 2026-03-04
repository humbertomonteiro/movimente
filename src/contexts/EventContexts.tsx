import { createContext, useContext, useState, type ReactNode } from "react";

/* =========================
     Tipagens
  ========================= */

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  daysWeek: string;
  time: string;
  location: string;
  address: string;
  linkWaze: string;
  linkLocation: string;
  image: string;
  mapGoogle: React.ReactNode;
}

interface EventContextType {
  events: EventData[];
  addEvent: (event: Omit<EventData, "id">) => void;
  removeEvent: (id: string) => void;
}

/* =========================
     Criação do Context
  ========================= */

const EventContext = createContext<EventContextType | undefined>(undefined);

/* =========================
     Provider
  ========================= */

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<EventData[]>([
    {
      id: "movemente2026",
      title: "Movimente",
      date: "19 e 20 de Setembro",
      daysWeek: "Sábado e Domingo",
      time: "8h às 18h",
      description: "",
      location: "Centro de Convenções MultCenter SEBRAE",
      address:
        "Altura do n° 50, Av. Jerônimo de Albuquerque, s/n - Alto do Calhau, São Luís - MA, 65074-220",
      linkLocation: "https://maps.app.goo.gl/ChkRkoqeNb4mXJD88",
      linkWaze:
        "https://www.waze.com/en/live-map/directions/br/ma/sebrae-multicenter?navigate=yes&place=ChIJnXHEi92N9gcRZVaK2qqgZ7k",
      image:
        "https://ma.agenciasebrae.com.br/wp-content/uploads/sites/10/2024/05/02_p8817_cover_image_resized.jpg",
      mapGoogle: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.0107219608594!2d-44.26959642601701!3d-2.5033477381654454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68ddd8bc4719d%3A0xb967a0aada8a5665!2sMulticenter%20Sebrae%20-%20MA!5e0!3m2!1sen!2sbr!4v1772651070538!5m2!1sen!2sbr"
          loading="lazy"
        ></iframe>
      ),
    },
  ]);

  const addEvent = (event: Omit<EventData, "id">) => {
    const newEvent: EventData = {
      id: crypto.randomUUID(),
      ...event,
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  const removeEvent = (id: string) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, removeEvent }}>
      {children}
    </EventContext.Provider>
  );
};

/* =========================
     Hook Customizado
  ========================= */

export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useEvent deve ser usado dentro de um EventProvider");
  }

  return context;
};
