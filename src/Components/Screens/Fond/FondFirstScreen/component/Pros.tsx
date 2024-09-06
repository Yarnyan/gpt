import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
type Props = {
  id: number;
  subtitle: string;
  title: string;
};

export default function Pros({ id, subtitle, title }: Props) {
  const { t } = useTranslation();

      
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={styles.Pros}
      ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}
    >
      <div className={styles.ProsId}>
        <p>{id}</p>
      </div>
      <div className={styles.ProsText}>
        <p>{t(subtitle)}</p>
        <p>{t(title)}</p>
      </div>
    </motion.div>
  );
}
