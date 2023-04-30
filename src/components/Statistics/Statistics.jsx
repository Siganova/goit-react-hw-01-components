import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={styles.section}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{
            backgroundColor: `#${Math.floor(Math.random() * 16000000).toString(
              16
            )}`,
          }}
          key={id}
          className={styles.item}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};