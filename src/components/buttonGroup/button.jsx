import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

// function button({ icon, title }) {
function Button(props) {
  const { count, icon, title, buttonClass, iconClass, titleClass, onClick } = props;

  return (
    <button className={`${styles.button} ${styles[`${buttonClass}`]}`} onClick={onClick}>
      <span className={`${styles.icon} ${styles[`${iconClass}`]}`}>{icon}</span>

      <span className={`${styles.title} ${styles[`${titleClass}`]}`}>
        {title}
      </span>
      {count !== 0 && (
        <span className={`${styles.title} ${count < 0 ? styles.red : styles[`${titleClass}`]}`}>
          {count}
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  buttonClass: PropTypes.oneOf(['button_primary', 'button_secondary']),
  iconClass: PropTypes.oneOf(['icon_primary', 'icon_secondary']),
  titleClass: PropTypes.oneOf(['title_primary', 'title_secondary']),
};

Button.defaultProps = {
  count: 0,
  buttonClass: 'button_primary',
  iconClass: 'icon_primary',
  titleClass: 'title_primary',
};

export default Button;
