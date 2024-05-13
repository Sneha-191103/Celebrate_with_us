import '../../css/style.css'
const PrivacyPolicy = () => {
  return (
    <>
     <div className="container-fluid p-[6%] bg-purple-100">
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <div className="privacy-content">
        <section className="privacy-section">
          <h3 className="privacy-section-title">1. Introduction</h3>
          <p className="privacy-section-text">
            Welcome to our Privacy Policy. Your privacy is important to us. This policy outlines how we collect, use, disclose, and protect your personal information when you use our website and services.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-section-title">2. Information We Collect</h3>
          <p className="privacy-section-text">
            We may collect personal information such as your name, email address, contact details, and other relevant information when you use our services, register for an account, or interact with our website.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-section-title">3. How We Use Your Information</h3>
          <p className="privacy-section-text">
            We use the information we collect to provide and improve our services, customize your experience, send you updates and promotions, and ensure the security of your data.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-section-title">4. Information Sharing</h3>
          <p className="privacy-section-text">
            We may share your personal information with trusted partners and service providers for specific purposes such as payment processing and customer support. We do not sell your information to third parties.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-section-title">5. Security Measures</h3>
          <p className="privacy-section-text">
            We take reasonable security measures to protect your data. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-section-title">6. Your Choices</h3>
          <p className="privacy-section-text">
            You have the right to access, correct, or delete your personal information. You can also opt out of receiving promotional emails or notifications.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-section-title">7. Contact Us</h3>
          <p className="privacy-section-text">
            If you have any questions or concerns about our Privacy Policy, please contact us at [email address].
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
    </div>
    </>
    
  );
};

export default PrivacyPolicy;




