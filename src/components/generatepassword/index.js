import React, { useEffect, useState } from "react";
import { Button, Input, Switch, Slider, Tooltip } from 'antd';
import { SyncOutlined, CopyOutlined, CheckOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import strong from '../../assets/image/strong.png';
import weak from '../../assets/image/weak.png';

const GeneratePassword = () => {
    const { i18n } = useTranslation();
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(15);
    const [copied, setCopied] = useState(false);
    const [checkBoxList, setCheckBoxList] = useState([
        { name: 'uppercase', value: 'ABC', default: true, character: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
        { name: 'lowercase', value: 'abc', default: true, character: 'abcdefghijklmnopqrstuvwxyz' },
        { name: 'digits', value: '123', default: true, character: '0123456789' },
        { name: 'symbols', value: '#$&', default: false, character: '!@#$%^&' },
    ]);
    const [strength, setStrength] = useState('');
    const [char, setChar] = useState(() => {
        let initialChar = '';
        checkBoxList.map(item => {
            if (item.default) {
                initialChar += item.character;
            }
        });
        return initialChar;
    });
    const [value, setValue] = useState([15, 100]);
    const start = value[0] / 100;
    const end = value[value.length - 1] / 100;

    useEffect(() => {
        generatePassword();
    }, []);

    useEffect(() => {
        charChange();
    }, [checkBoxList]);

    const generatePassword = (e) => {
        setLength(e ? e : length);
        let initialLength = e ? e : length;

        let initialPassword = "";
        for (var i = 0, n = char.length; i < initialLength; ++i) {
            initialPassword += char.charAt(Math.floor(Math.random() * n));
        }
        evaluatePassword(initialPassword)
        setPassword(initialPassword);
    };

    const copyClipboard = () => {
        navigator.clipboard.writeText(password);

        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    const handleCheckboxChange = (value, checked) => {
        setCheckBoxList(prevState => {
            const updatedList = prevState.map(item => {
                if (item.value === value) {
                    return { ...item, default: checked };
                }
                return item;
            });

            // Seçili öğeleri sayıyoruz
            const activeSelections = updatedList.filter(item => item.default).length;

            if (activeSelections === 1) {
                // Eğer yalnızca bir öğe seçili ise, diğer öğeleri disable yapıyoruz
                return updatedList.map(item => {
                    if (item.default === false) {
                        return { ...item, disabled: false };  // Eğer o öğe seçili değilse, onu aktif bırak
                    }
                    return { ...item, disabled: true };  // Seçili öğe dışındakiler disable olur
                });
            } else {
                // Eğer birden fazla öğe seçili ise, tüm öğeleri aktif yapıyoruz
                return updatedList.map(item => ({ ...item, disabled: false }));
            }
        });
    };

    const charChange = () => {
        let updatedChar = '';
        checkBoxList.map(item => {
            if (item.default) {
                updatedChar += item.character;
            }
        });
        setChar(updatedChar);
    };

    const evaluatePassword = (password) => {
        let score = 0;

        // Uzunluk
        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;

        // Büyük ve küçük harf içeriyor mu?
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;

        // Rakam içeriyor mu?
        if (/\d/.test(password)) score += 1;

        // Özel karakter içeriyor mu?
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

        // Gücü belirleme
        if (score <= 1) {
            setStrength(<div className='strength'><img src={weak} alt='weak password' />{i18n.t('weak_password')}</div>);
        } else if (score === 2) {
            setStrength(<div className='strength'><img src={strong} alt='strong password' />{i18n.t('fairly_strong_password')}</div>);
        } else if (score >= 3) {
            setStrength(<div className='strength'><img src={strong} alt='strong password' />{i18n.t('strong_password')}</div>);
        }
    }

    return (
        <section className="generate-password">
            <div className="container">
                <h2>{i18n.t('generate_password_title')}</h2>
                <p>{i18n.t('generate_password_desc')}</p>
                <div className="input-range">
                    <label>{i18n.t('password_length') + ': '}<b>{length}</b></label>
                    <Slider
                        defaultValue={value}
                        onChange={(e) => setValue(e) || generatePassword(e)}
                        className="slider"
                        min={4}
                        max={32}
                    />
                </div>
                <div className="input-password">
                    <Input className="input-text" type="text" variant="borderless" value={password} />
                    <Tooltip title={i18n.t('copy')}>
                        <Button className="button-transparent" type="link" onClick={() => copyClipboard()}>
                            {copied ? <CheckOutlined style={{ fontSize: 20 }} /> : <CopyOutlined style={{ fontSize: 20 }} />}
                        </Button>
                    </Tooltip>
                    <Button className="sync-button" type="primary" onClick={() => generatePassword()}>
                        <SyncOutlined style={{ fontSize: 20 }} />
                    </Button>
                </div>
                <div>
                    {strength}
                </div>
                <div className="char-checkbox">
                    {checkBoxList.map((item, key) => (
                        <div>
                            <span>{i18n.t(item.name) + ' (' + item.value + ')'}</span>{' '}
                            <Switch
                                key={key}
                                defaultValue={item.default}
                                disabled={item.disabled}
                                onChange={(e) => {
                                    handleCheckboxChange(item.value, e);
                                }}
                            />
                        </div>
                    ))}
                </div>
                <Button type="primary" className="copy-button" onClick={() => generatePassword()}>
                    {i18n.t('generate_password')}
                </Button>
            </div>
        </section>
    );
}

export default GeneratePassword;