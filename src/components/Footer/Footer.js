import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            {
                (new Date().getFullYear() == '2021') ?
                    <span>Wesley Webster Copyright &copy; 2021. Powered by the <a href="https://www.weatherapi.com/" target="_blank" rel="noreferrer noopener">Weather API</a></span>
                    : <span>Wesley Webster Copyright &copy; 2021 - {new Date().getFullYear()}. Powered by the <a href="https://www.weatherapi.com/" target="_blank" rel="noreferrer noopener">Weather API</a> </span>
            }
        </footer>
    );
};

export default Footer;