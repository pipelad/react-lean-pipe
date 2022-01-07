import styles from './Section.module.css';

const Section = props => {

	return(
		<section className={`${styles.section} ${props.class}`}>{props.children}</section>
	);
}

export default Section;