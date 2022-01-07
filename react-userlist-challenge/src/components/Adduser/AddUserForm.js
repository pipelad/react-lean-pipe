import { useState } from 'react';
import styles from './AddUserForm.module.css';
import Femenine from '../Images/PersonF';
import Masculine from '../Images/PersonM';

const AddUserForm = props => {
	const [userName, setUserName] = useState(''),
	      [userAge, setUserAge] = useState(''),
	      [userGen, setUserGen] = useState(''),
	      [genChecked, setGenChecked] = useState('');

	const userNameChangeHandler = (event) => { setUserName(event.target.value) },
		  userAgeChangeHandler = (event) => { setUserAge(event.target.value) },
		  userGenChangeHandler = (event) => { 
		  	if(genChecked !== '') {
		  		genChecked.checked = false;
		  	}
		  	setGenChecked(event.target);
		  	setUserGen(event.target.value);
		  };

	const userInformation = (event) => {
		event.preventDefault();
		let error = false, 
		    errorType = '';
		if(userName.trim().length === 0 || userAge.trim().length === 0) {
			error = true;
			errorType = 'anyEmpty';
		}
		if(userName.trim().length === 0 && userAge.trim().length === 0) {
			error = true;
			errorType = 'bothEmtpy';
		}
		if(userAge < 0) {
			error = true;
			errorType = 'negativeAge';
		}

		const userData = {
	 		name: userName,
	 		age: +userAge,
	 		gen: userGen,
	 		error: error,
	 		errorType: errorType
	 	}

		props.onSaveUser(userData);

		if(!error) {
			setUserName('');
			setUserAge('');
			genChecked.checked = false;
		}
	}
	
	return (
		<form onSubmit={userInformation} className={styles.form}>
			<div className={`${styles['form-input']}`}>
				<label htmlFor="name">Name:</label>
				<input value={userName} type="text" id="form-user__name" name="name" onChange={userNameChangeHandler} />
			</div>
			<div className={styles['form-input']}>
				<label htmlFor="age">Age:</label>
				<input value={userAge} type="number" id="form-user__age" max="99" name="age" placeholder="years" onChange={userAgeChangeHandler} />
			</div>
			<div className={styles['form-gender']}>
				<Femenine />
				<div className={styles['gen-check']}>
					<div>Femenine</div>
					<input type="checkbox" value="Femenine" onChange={userGenChangeHandler} />
				</div>
				<Masculine />
				<div className={styles['gen-check']}>
					<div>Masculine</div>
					<input type="checkbox" value="Masculine" onChange={userGenChangeHandler} />
				</div>
			</div>
			<button type="submit" className={styles.submit}>Add User</button>
		</form>
	);
};

export default AddUserForm;