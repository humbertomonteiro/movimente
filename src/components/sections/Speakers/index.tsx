import styles from "./Speakers.module.css";
import ButtonCTA from "../../shared/ButtonCTA";
import palestrante from "../../../assets/imgs/speakers/palestrante.jpeg";
import GridOverlay from "../../shared/GridOverlay";

interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  photo: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Nome",
    role: "",
    company: "",
    bio: "lorem ipson",
    photo: palestrante,
    expertise: ["expertise"],
    social: {
      linkedin: "linkedin",
      twitter: "twitter",
      instagram: "insta",
      website: "web",
    },
  },
  {
    id: "1",
    name: "Nome",
    role: "",
    company: "",
    bio: "lorem ipson",
    photo: palestrante,
    expertise: ["expertise"],
    social: {
      linkedin: "linkedin",
      twitter: "twitter",
      instagram: "insta",
      website: "web",
    },
  },
  {
    id: "1",
    name: "Nome",
    role: "",
    company: "",
    bio: "lorem ipson",
    photo: palestrante,
    expertise: ["expertise"],
    social: {
      linkedin: "linkedin",
      twitter: "twitter",
      instagram: "insta",
      website: "web",
    },
  },
  {
    id: "1",
    name: "Nome",
    role: "",
    company: "",
    bio: "lorem ipson",
    photo: palestrante,
    expertise: ["expertise"],
    social: {
      linkedin: "linkedin",
      twitter: "twitter",
      instagram: "insta",
      website: "web",
    },
  },
  {
    id: "1",
    name: "Nome",
    role: "",
    company: "",
    bio: "lorem ipson",
    photo: palestrante,
    expertise: ["expertise"],
    social: {
      linkedin: "linkedin",
      twitter: "twitter",
      instagram: "insta",
      website: "web",
    },
  },
  {
    id: "1",
    name: "Nome",
    role: "",
    company: "",
    bio: "lorem ipson",
    photo: palestrante,
    expertise: ["expertise"],
    social: {
      linkedin: "linkedin",
      twitter: "twitter",
      instagram: "insta",
      website: "web",
    },
  },
];

const eventName = "Movimente";

export default function Speakers({}) {
  return (
    <section className={styles.section} id="speakers">
      <GridOverlay />
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.sphereTopLeft}></div>
      <div className={styles.sphereBottomRight}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-aos="zoom-in">
          <h2 className={styles.title}>Palestrantes confirmados</h2>
          <p className={styles.subtitle}>Conheça nosso time de Palestrantes</p>
        </div>

        {/* Speakers Grid */}
        <div className={styles.grid}>
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.cardInner}>
                {/* Avatar Section */}
                <div className={styles.avatarSection}>
                  <div className={styles.avatarContainer}>
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className={styles.avatar}
                      loading="lazy"
                    />
                    {eventName && (
                      <span className={styles.eventBadge}>{eventName}</span>
                    )}
                  </div>

                  {/* Social Links Overlay */}
                  {speaker.social && (
                    <div className={styles.socialOverlay}>
                      {speaker.social.linkedin && (
                        <a
                          href={speaker.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`LinkedIn de ${speaker.name}`}
                        >
                          <svg
                            className={styles.socialIcon}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {speaker.social.twitter && (
                        <a
                          href={speaker.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`Twitter de ${speaker.name}`}
                        >
                          <svg
                            className={styles.socialIcon}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.533-3.797 13.94 13.94 0 001.543-6.169c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                      {speaker.social.instagram && (
                        <a
                          href={speaker.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`Instagram de ${speaker.name}`}
                        >
                          <svg
                            className={styles.socialIcon}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                          </svg>
                        </a>
                      )}
                      {speaker.social.website && (
                        <a
                          href={speaker.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.socialLink}
                          aria-label={`Website de ${speaker.name}`}
                        >
                          <svg
                            className={styles.socialIcon}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h3 className={styles.name}>{speaker.name}</h3>
                  <p className={styles.role}>{speaker.role}</p>
                  <p className={styles.company}>{speaker.company}</p>

                  <p className={styles.bio}>{speaker.bio}</p>

                  {/* Expertise Tags */}
                  <div className={styles.expertise}>
                    {speaker.expertise.map((skill, index) => (
                      <span key={index} className={styles.tag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <ButtonCTA link="#tickets" text="Garantir Vaga" />
        </div>
      </div>
    </section>
  );
}
