import { FC } from 'react'

// Assets
import { logoIcon } from 'assets/images'

// Styles
import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={logoIcon} alt="Logo" />
    </header>
  )
}
