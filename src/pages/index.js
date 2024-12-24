import Head from "next/head";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";
import HeaderComponent from "@/components/header";
import HomeSection from "@/components/HomeSection";
import { ConfigProvider } from "antd";
import AboutSection from "@/components/About";
import FAQSection from "@/components/FAQ";
import ChromeExtenstionSection from "@/components/ChromeExtenstion";
import ContactSection from "@/components/Contact";
import FooterComponent from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Muscle Password - Strong Random Password Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      > */}
      {/* <main className={styles.main}> */}
      <ConfigProvider
        theme={{
          // algorithm: [darkAlgorithm, defaultAlgorithm],
          token: {
            colorPrimary: "#53baf9",
            // borderRadius: 7,
          },
          components: {
            // Button: {
            //     colorPrimary: 'red',
            //     algorithm: true,
            // },
          },
        }}
      >
        <HeaderComponent />
        <HomeSection />
        <AboutSection />
        <FAQSection />
        <ChromeExtenstionSection />
        <ContactSection />
        <FooterComponent />
      </ConfigProvider>
    </>
  );
}
