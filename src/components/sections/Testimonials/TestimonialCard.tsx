import { useState } from "react";
import styles from "./Testimonials.module.css";
import {
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { RiVerifiedBadgeFill, RiDoubleQuotesL } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi";
import type { Testimonial } from "./";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [showShare, setShowShare] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={`full-${i}`} className={styles.starFilled} />);
    }

    if (hasHalf) {
      stars.push(<IoStarHalf key="half" className={styles.starFilled} />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <IoStarOutline key={`empty-${i}`} className={styles.starEmpty} />,
      );
    }

    return stars;
  };

  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteIcon}>
        <RiDoubleQuotesL />
      </div>

      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.author}>
          <div className={styles.authorImageWrapper}>
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className={styles.authorImage}
              loading="lazy"
            />
            {testimonial.verified && (
              <div className={styles.verifiedBadge}>
                <MdVerified />
              </div>
            )}
          </div>
          <div className={styles.authorInfo}>
            <h3 className={styles.authorName}>
              {testimonial.name}
              {testimonial.verified && (
                <RiVerifiedBadgeFill className={styles.verifiedIcon} />
              )}
            </h3>
            <p className={styles.authorRole}>{testimonial.role}</p>
            <div className={styles.authorMeta}>
              {testimonial.location && (
                <span className={styles.metaItem}>
                  📍 {testimonial.location}
                </span>
              )}
              {testimonial.eventYear && (
                <span className={styles.metaItem}>
                  🎫 {testimonial.eventYear}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Share */}
        <div className={styles.shareContainer}>
          <button
            className={styles.shareButton}
            onClick={() => setShowShare(!showShare)}
            aria-label="Compartilhar"
          >
            <IoShareSocialOutline />
          </button>

          {showShare && (
            <div className={styles.shareTooltip}>
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(testimonial.content)}`,
                    "_blank",
                  )
                }
              >
                <FaWhatsapp />
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                    "_blank",
                  )
                }
              >
                <FaFacebook />
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(testimonial.content)}`,
                    "_blank",
                  )
                }
              >
                <FaTwitter />
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                    "_blank",
                  )
                }
              >
                <FaLinkedin />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className={styles.rating}>
        {renderStars(testimonial.rating)}
        <span className={styles.ratingValue}>{testimonial.rating}</span>
      </div>

      {/* Content */}
      <p className={styles.content}>"{testimonial.content}"</p>

      {/* Tags */}
      {testimonial.tags && testimonial.tags.length > 0 && (
        <div className={styles.tags}>
          {testimonial.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className={styles.cardFooter}>
        <span className={styles.date}>{testimonial.date}</span>
        {testimonial.video && (
          <button className={styles.videoButton}>
            <HiOutlineVideoCamera /> Ver vídeo
          </button>
        )}
      </div>
    </div>
  );
}
