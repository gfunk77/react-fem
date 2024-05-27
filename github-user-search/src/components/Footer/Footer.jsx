import './footer.css';
import { IoLocationSharp, IoLinkSharp, IoLogoTwitter, IoBusinessSharp } from 'react-icons/io5';

function Footer({ user }) {
  const userInfo = [
    { icon: IoLocationSharp, property: 'location', default: 'Somewhere on Earth' },
    { icon: IoLinkSharp, property: 'blog', default: 'No blog provided' },
    { icon: IoLogoTwitter, property: 'twitter_username', default: 'Not Available' },
    { icon: IoBusinessSharp, property: 'company', default: 'Not Available' },
  ];

  const getPColor = (userProperty) => {
    if (user[userProperty] === null || user[userProperty] === '') {
      return 'footer-info no-info';
    } else {
      return 'footer-info';
    }
  };
  return (
    <div className="footer">
      {userInfo.map(({ icon: Icon, property, default: defaultValue }, index) => (
        <div key={index} className={getPColor(property)}>
          <Icon />
          <p>{user[property] || defaultValue}</p>
        </div>
      ))}
    </div>
  );
}
export default Footer;
