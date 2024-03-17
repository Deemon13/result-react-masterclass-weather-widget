import { useState } from 'react';
import { Info } from '../Info';
import { TextField } from '../TextField';
import styles from './widget.module.css';

export const Widget = () => {
	const [search, setSearch] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<div className={styles.widget}>
			<form className={styles['widget-form']} onSubmit={handleSubmit}>
				<TextField
					name="search"
					type="text"
					value={search}
					onChange={({ target }) => {
						setSearch(target.value);
					}}
				/>
				<h2 className={styles['widget-title']}>{search}</h2>
				<img className={styles['widget-img']} src="" alt="weather-img" />
				<Info temp={10} feels={10} hum={10} />
				<p className={styles['widget-description']}>Description</p>
				<button className={styles['widget-submit']} type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};
