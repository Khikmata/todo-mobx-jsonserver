import { observer } from 'mobx-react-lite'
import { AuthForm } from '../../components/AuthForm'
import styles from './AuthPage.styles.module.scss'



export const AuthPage = observer(() => {




	return (
		<div className={styles['auth-page']}>
			<AuthForm />
		</div>
	)
})
