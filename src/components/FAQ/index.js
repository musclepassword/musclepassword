import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import FAQ from "../../static/faq.json";

export default function FAQSection() {
    const { t } = useTranslation('common');

    const items = FAQ.map((item, i) => (
        {
            key: i,
            label: item.title
            ,
            children: <p>{item.description}</p>
        }
    ));

    return (
        <section className='faq-section'>
            <div className="container">
                <article>
                    <h2>{t("Password Generator FAQs")}</h2>
                    <p>{t("Questions about this random password generator? Answers below!")}</p>
                </article>
                <Collapse defaultActiveKey={['0']} items={items} />
            </div>
        </section>
    );
};