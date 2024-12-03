import Image from 'next/image';
import Link from 'next/link'
import { Button } from 'antd';
import SelectLang from '../SelectLang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';

export default function Header() {

  return (
    <div className="container">
      <header>
        <div className="logo">
          <Image src="/logo.png" alt="logo" width={100} height={100} style={{ maxWidth: '100%', height: 'auto' }} priority />
          <span>
            <h1>
              <div className='logo_first_title'>MUSCLE</div>
              <div>PASSWORD</div>
            </h1>
          </span>
        </div>
        <span>
          <Link href="https://chromewebstore.google.com/detail/muscle-password/iimjcckbcjoehbfekigjpnlgmjllmgdk" target='_blank'>
            <Button shape='round' size='large' icon={<FontAwesomeIcon icon={faChrome} />}>
              Get Extenstion
            </Button>
          </Link>
          <SelectLang />
        </span>
      </header>
    </div>
  );
};