import styles from './common-ui.module.css';

/* eslint-disable-next-line */
export interface CommonUiProps {}

export function CommonUi(props: CommonUiProps) {
  const x: boolean = 1;

  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonUi! {x}</h1>
    </div>
  );
}

export default CommonUi;
