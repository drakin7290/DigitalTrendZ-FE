import styles from './styles.module.scss';
export default function ScrollToTop() {
  return (
    <a className={styles['scroll-to-top']} href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" stroke="#fff"></path>
      </svg>
    </a>
  );
}
