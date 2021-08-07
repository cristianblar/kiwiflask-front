import styles from './Loading.module.css';

function Loading() {
  return <div className={styles['lds-hourglass']}></div>;
}

export default Loading;
