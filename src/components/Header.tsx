import styles from './Header.module.css';

import todolistLogo from '../assets/logo.svg';

export function Header() {
  return (
    <div className={styles.header} >
      <img src={todolistLogo} alt="Logotipo do todo-list" />
    </div>
  )
}