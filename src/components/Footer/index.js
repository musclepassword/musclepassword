import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer>
      <div className="container">
        <Image
          className='logo'
          src="/logo.png"
          alt="Muscle Password Logo"
          width={70}
          height={70}
          style={{ maxWidth: '100%', height: 'auto' }}
          priority
        />
        <h6>Muscle Password</h6>
        <p className='text'>
          {t("Strong and random password generator.")}<br />
          {t("Create strong passwords to ensure your security.")}
        </p>
        <Link href="https://github.com/musclepassword" target='_blank'>
          <GithubOutlined />
        </Link>
        <Link href="mailto:cuneydbolukogluu@gmail.com" target='_blank'>
          <MailOutlined />
        </Link>
        <div className='copyright'>
          <div>
          {t("Copyright")} © 2024
          </div>
          <div>
            {t("Design & Development by")}
            <Link href="https://cuneydbolukoglu.com" target='_blank'>
              <Button style={{ marginLeft: "-10px"}} type="link">Cüneyd BÖLÜKOĞLU</Button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/images/footer-image.png"
        alt="footer-image"
        width={591}
        height={267}
        style={{
          maxWidth: '100%',
          height: 'auto',
          position: 'absolute',
          right: 0,
          top: 0
        }}
        priority
      />
    </footer>
  );
};