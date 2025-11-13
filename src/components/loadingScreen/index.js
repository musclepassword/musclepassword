import { Flex, Typography, Space } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import Image from "next/image";
import { useTranslation } from "next-i18next";

const { Text, Title } = Typography;

export default function MinimalLoading() {
    const { t } = useTranslation();
    return (
        <Flex
            vertical
            align="center"
            justify="center"
            gap={32}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "#fff",
            }}
        >
            <Flex align="center" justify="flex-end">
                <Image
                    width={80}
                    height={80}
                    src="/assets/images/logo.png"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    alt="Logo"
                />
                <Flex vertical style={{ lineHeight: '1.2' }}>
                    <Title
                        level={4}
                        style={{
                            padding: 0,
                            margin: 0,
                            fontSize: '16px',
                            fontWeight: '900',
                            color: "#939393"
                        }}
                    >
                        MUSCLE
                    </Title>
                    <Title
                        level={5}
                        style={{
                            padding: 0,
                            margin: 0,
                            fontSize: '15px',
                            fontWeight: '500',
                            color: "#939393"
                        }}
                    >
                        PASSWORD
                    </Title>
                </Flex>
            </Flex>
            <Space direction="vertical" align="center" size={16}>
                <LoadingOutlined
                    style={{
                        fontSize: 36,
                        color: "#000"
                    }}
                    spin
                />
                <Text type="secondary" style={{ fontSize: 14 }}>
                    {t("Loading")}...
                </Text>
            </Space>
        </Flex>
    );
}