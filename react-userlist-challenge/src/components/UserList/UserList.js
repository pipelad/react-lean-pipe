import styles from './UserList.module.css';
import UserItem from './UserItem';
import Section from '../Ui/Section';

const UserList = props => {
	//console.log(props.users[0]);
	if(props.users.length === 0){
		return <h2>No users yet! <br />start by adding your first user</h2>
	}

	return(
		<Section class={styles.user}>
			<div className={styles['user-list']}>
				<h2>Our users:</h2>
				{props.users.map(user => {
					return <UserItem user={user} key={user.id} />
				})}
			</div>
		</Section>
	);
}

export default UserList;