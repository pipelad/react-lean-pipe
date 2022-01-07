import { useState } from 'react';
import AddUserForm from './AddUserForm';
import './AddUser.css';
import ModalError from '../Modal/ModalError';
import Section from '../Ui/Section';

const AddUser = props => {
	const [errorState, setErrorState] = useState(false),
	      [errorData, setErrorData] = useState('');

	const userDatahandler = (enteredData) => {
		setErrorData(enteredData.errorType);
		setErrorState(enteredData.error);

		props.onUserAdd(enteredData);
	}

	const closeErrorHandler = () => {
		setErrorState(false);
	}

	return(
		<Section class='add-user'>
			<ModalError errorTitle={'Error, please review:'} errorState={errorState} errorData={errorData} onClose={closeErrorHandler}/>
			<AddUserForm onSaveUser={userDatahandler}/>
		</Section>
	);
}

export default AddUser;
