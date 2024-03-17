import styles from './textField.module.css';

export const TextField = ({ type, name, ...propsInput }) => {
	return <input className={styles.textField} type={type} name={name} {...propsInput} />;
};
