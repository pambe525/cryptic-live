import styles from "./navbar.module.css";

export default function NavBarLink({ children, Icon, props }) {
  return (
    <a role="link" className={styles.navbarLink} {...props}>
      <Icon className={styles.navbarLinkIcon} />
      <div className={styles.navbarLinkLabel}>{children}</div>
    </a>
  )
}
