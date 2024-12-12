import Image from 'next/image';
import Link from 'next/link'
import { Button } from 'antd';
import SelectLang from '../SelectLang';
import { ChromeFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <div className="container">
      <header>
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Muscle Password Logo"
            width={100}
            height={100}
            style={{ maxWidth: '100%', height: 'auto' }}
            priority
          />
          <h1>
            <div className="logo-first">MUSCLE</div>
            <div className="logo-second">PASSWORD</div>
          </h1>
        </div>
        <nav>
          <Link href="https://chromewebstore.google.com/detail/muscle-password/iimjcckbcjoehbfekigjpnlgmjllmgdk" target='_blank'>
            <Button
              shape="round"
              size="large"
              icon={<ChromeFilled />}
            >
              {t("Add to Chrome")}
            </Button>
          </Link>
          <SelectLang />
        </nav>
      </header>
    </div>
  );
};