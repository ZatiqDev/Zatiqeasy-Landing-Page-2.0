import React from "react";
import styles from "./privacy-policy.module.scss";

export const metadata = {
  title: "Privacy Policy | ZatiqEasy",
  description: "Transform your business with the fastest E-commerce builder",
  openGraph: {
    title: "Privacy Policy | ZatiqEasy",
    description: "Transform your business with the fastest E-commerce builder",
    images: [
      {
        url: "/assets/images/content-image.webp",
        width: 1200,
        height: 630,
        alt: "ZatiqEasy",
      },
    ],
    siteName: "ZatiqEasy",
  },
};

const HomePage = () => {
  return (
    <div className="space-y-14 md:space-y-[110px] pb-15 md:pb-[110px]">
       <div className={styles["container"]}>
        <div className={styles["inner"]}>
        <h1 className="text-[30px] md:text-[40px] font-semibold my-5 md:my-10 pt-[30px] text-center">Privacy Policy</h1>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Zatiq Easy. This Privacy Policy outlines our guidelines and processes regarding the gathering, utilisation, and sharing of your information when you engage with the Service. It also informs you about your privacy entitlements and the legal safeguards in place to protect you. 
            </p>
            <br />
            <p>
            Your personal data is employed to enhance and furnish the Service. By utilising the Service, you consent to the acquisition and utilisation of information as outlined in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2>2. Information Collection and Use</h2>
            <p>
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information. The information that we request will be retained by
              us and used as described in this privacy policy.
            </p>
          </section>

          <section>
            <h2>3. App Permissions</h2>
            <p>Our app requires the following permissions on your device:</p>
            <ul>
              <li>Microphone: To record audio.</li>
              <li>
                Storage: To read the contents of your USB storage and modify or
                delete the contents of your USB storage.
              </li>
              <li>
                Photos/Media/Files: To read the contents of your USB storage and
                modify or delete the contents of your USB storage.
              </li>
              <li>
                Location: To access approximate location (network-based) and
                precise location (GPS and network-based).
              </li>
              <li>Wi-Fi connection information: To view Wi-Fi connections.</li>
              <li>Camera: To take pictures and videos.</li>
              <li>
                Other: To pair with Bluetooth devices, access Bluetooth
                settings, full network access, view network connections.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Log Data</h2>
            <p>
              We want to inform you that whenever you use our Service, in case
              of an error in the app we collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service, the time and
              date of your use of the Service, and other statistics.
            </p>
          </section>

          <section>
            <h2>5. Cookies</h2>
            <p>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device’s internal memory.
            </p>
          </section>

          <section>
            <h2>6. Service Providers</h2>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
          </section>

          <section>
            <h2>7. Security</h2>
            <p>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. Please
              remember that this is just a template and might not cover all the
              aspects of your app or comply with all legal requirements. It’s
              always a good idea to consult with a legal expert when drafting a
              privacy policy.
            </p>
          </section>

          <section>
            <h2>9. User Data Deletion</h2>
            <p>
              If you wish to delete your data, you can make a request to us and
              we will respond in a reasonable time. Please note that some or all
              of the User Provided Data may be required in order for the
              Application to function properly, and we may be required to retain
              certain information by law. Upon your request to delete your data,
              we will delete, anonymize, or de-identify your information from
              our servers unless an exception applies. Exceptions include
              situations where the information is needed:
            </p>
            <ul>
              <li>
                To complete the transaction for which the personal information
                was collected, provide a good or service requested by you, or
                perform a contract we have with you.
              </li>
              <li>
                To detect security incidents, protect against malicious,
                deceptive, fraudulent, or illegal activity; or prosecute those
                responsible for that activity.
              </li>
              <li>
                To debug to identify and repair errors that impair existing
                intended functionality.
              </li>
              <li>To comply with a legal obligation.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
