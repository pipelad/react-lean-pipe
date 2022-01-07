import styles from './ModalError.module.css';

const ModalError = props => {
	if(!props.errorState) {
		return('');
	}

	let errorMsg = '';
	if(props.errorData === 'bothEmtpy') {
		errorMsg = `Please add a Name and Age`;
	}
	if(props.errorData === 'anyEmpty') {
		errorMsg = `Name or Age Missing, please try again`;
	}
	if(props.errorData === 'negativeAge') {
		errorMsg = `Age must be a positive number, (age > 0)`;
	}

	
    
	return (
		<div onClick={props.onClose} className={styles.overlay}>
			<div className={styles['modal-error']}>
				<div className={styles['modal-error__title']}>
					{`Error, please review:`}
				</div>
				<div className={styles['modal-error__content']}>
					{ errorMsg }<br />
					<button onClick={props.onClose} className={styles['modal-error__close']}>Okay</button>
				</div>
			</div>
		</div>
	);
}

export default ModalError;