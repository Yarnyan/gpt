import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
type Props = {
  subtitle: string,
  title: string,
}

export default function RedefineComponent({ subtitle, title }: Props) {

  const { t } = useTranslation();

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={styles.container}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <p>{t(subtitle)}</p>
      <p>{t(title)}</p>
    </motion.div>
  )
}