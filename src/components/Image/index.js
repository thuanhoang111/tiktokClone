import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss';
import images from '~/assets/image';
import PropTypes from 'prop-types';
const Image = forwardRef(({ classname, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
   const [fallback, setFallback] = useState('');
   const handleError = () => {
      setFallback(customFallback);
   };
   return (
      <img
         className={classNames(styles.wrapper, classname)}
         ref={ref}
         src={fallback || src}
         alt={alt}
         {...props}
         onError={handleError}
      />
   );
});
Image.propTypes = {
   classname: PropTypes.string,
   src: PropTypes.string,
   alt: PropTypes.string,
   fallback: PropTypes.string,
};

export default Image;
