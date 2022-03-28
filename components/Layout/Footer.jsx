import FacebookIcon from '../SVG/Facebook';
import InstagramIcon from '../SVG/Instagram';
import TwitterIcon from '../SVG/Twitter';

import styles from '../../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <span>
            customer service
          </span>
          <span>&#43;</span>
        </div>
        <div>
          <ul>
            <li>
              <a>
                Accessability
              </a>
            </li>
            <li>
              <a>
                contact us
              </a>
            </li>
            <li>
              <a>
                return policy
              </a>
            </li>
            <li>
              <a>
                FAQ
              </a>
            </li>
            <li>
              <a>
                gift certificates
              </a>
            </li>
            <li>
              <a>
                Wishlist
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <span>
            company
          </span>
          <span>&#43;</span>
        </div>
        <div>
          <ul>
            <li>
              <a>
                about us
              </a>
            </li>
            <li>
              <a>
                careers
              </a>
            </li>
            <li>
              <a>
                press
              </a>
            </li>
            <li>
              <a>
                affiliates
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <span>
            follow us
          </span>
          <span>&#43;</span>
        </div>
        <div>
          <ul>
            <li>
              <a>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a>
               <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;