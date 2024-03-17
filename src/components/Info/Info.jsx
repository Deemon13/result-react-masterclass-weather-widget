import styles from './info.module.css';

export const Info = ({ temp, feels, hum }) => {
	return (
		<div className={styles.info}>
			<div className={styles['info-temp']}>
				<span>Температура</span>
				<span>{temp}</span>
			</div>
			<div className={styles['info-feels']}>
				<span>Ощущается как</span>
				<span>{feels}</span>
			</div>
			<div className={styles['info-hum']}>
				<span>Влажность</span>
				<span>{hum}</span>
			</div>
		</div>
	);
};
