import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MOBILE_WIDTH } from '~/context/defaultConst';
import useResize from '~/hooks/useResize';
import styles from './styles.module.scss';
export default function Button({
  className = '',
  children,
  onClick = function () { },
  style = {},
  styleMobile = {},
  upperCase = true,
  center = false,
  to = '',
  backgroundColor = '',
  responsive = true,
  disabled,
  outline = false,
  usePrimaryStype = true,
  type = 'button',
  ...props
}) {
  let upperCaseClass = '';

  const [styleForMobile, setStyleForMobile] = useState({});
  const { device } = useResize();
  useEffect(() => {
    if (device === 'extra-small') {
      setStyleForMobile(styleMobile);
    } else {
      setStyleForMobile({});
    }
  });

  if (upperCase === false) upperCaseClass = styles.normalCase;

  return (
    <button
      type={type}
      className={clsx(className, upperCaseClass, {
        [styles['btn-primary']]: usePrimaryStype,
        [styles['center']]: center,
        [styles['responsive']]: responsive,
        [styles['disabled']]: disabled,
        [styles['outline']]: outline,
      })}
      onClick={(e) => {
        onClick(e);
      }}
      style={{
        color: outline,
        borderColor: outline,
        ...style,
        ...styleForMobile,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {children}
      {to != '' && (
        <Link href={to}>
          <a className={styles['link-href']}></a>
        </Link>
      )}
    </button>
  );
}
