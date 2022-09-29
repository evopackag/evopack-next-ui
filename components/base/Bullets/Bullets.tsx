import styles from "./Bullets.module.css";

interface IProps {
  bulletTitle?: string;
  bulletText?: string;
}

const Bullets = ({ bulletTitle, bulletText }: IProps) => {
  return (
    <ul className={styles.bullets}>
      <li className={styles.bullet} id={bulletTitle}>
        <span className="bold">{bulletTitle}</span>
        {bulletText}
      </li>
    </ul>
  );
};

export default Bullets;
