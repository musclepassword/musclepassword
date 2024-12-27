import { Collapse } from 'antd';
import { useTranslation } from 'next-i18next';
import FAQ from "../../staticData/faq.json";
import { PlusOutlined } from '@ant-design/icons';

export default function FAQSection() {
    const { t } = useTranslation('faq');

    const items = FAQ.map((item, i) => (
        {
            key: i,
            label: (<span style={{ fontWeight: 'bold' }}>{t(item.title)}</span>),
            children: (<p>{t(item.description)}</p>)
        }
    ));

    return (
        <section className="faq-section">
            <div className="container">
                <article>
                    <h2>{t("Password Generator FAQs")}</h2>
                    <p>{t("Questions about this random password generator? Answers below!")}</p>
                </article>
                <Collapse
                    style={{ backgroundColor: 'transparent' }}
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <PlusOutlined style={{ fontSize: 20, color: '#53baf9' }} rotate={isActive ? 45 : 0} />}
                    expandIconPosition="end"
                    items={items}
                />
            </div>
        </section>
    );
};