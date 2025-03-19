import styles from "./layout.module.css";

export default function NavbarLink({ children, Icon, href, props }) {
  return (
    <a role="link" className={styles.navbarLink} href={href} {...props}>
      <Icon className={styles.navbarLinkIcon} />
      <div className={styles.navbarLinkLabel}>{children}</div>
    </a>
  )
}
