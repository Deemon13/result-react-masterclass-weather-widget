import styles from './app.module.css';
import { Widget } from './components';

export const App = () => {
	return (
		<div className={styles.app}>
			<Widget />
		</div>
	);
};
