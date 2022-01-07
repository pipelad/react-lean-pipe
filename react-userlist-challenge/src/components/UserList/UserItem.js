import styles from './UserItem.module.css';
import Femenine from '../Images/PersonF';
import Masculine from '../Images/PersonM';

const userItem = props => {

	return (
		<div className={styles['user-item']}>
			{props.user.gen === 'Femenine' && <Femenine />}
			{props.user.gen === 'Masculine' && <Masculine />}
			<div className={styles['user-item__data']}>
				<div>
					{props.user.name}
				</div>
				<div className={styles['user-item__age']}>
					{props.user.age}
				</div>
			</div>
		</div>
	)
}

export default userItem;