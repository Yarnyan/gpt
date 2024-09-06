import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
type Props = {
    id: number,
    subtitle: string,
    title: string,
}

export default function RedefineComponent({ id, subtitle, title }: Props) {

    const { t } = useTranslation();

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={styles.Pros}
        >
            <div className={styles.ProsId}>
                <p>{id}</p>
            </div>
            <div className={styles.ProsText}>
                <p>{t(subtitle)}</p>
                <p>{t(title)}</p>
            </div>
        </motion.div>
    )
}