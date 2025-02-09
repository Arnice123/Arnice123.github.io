import React from 'react';
import '../App.css'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ borderBottom: '2px solid pink', paddingBottom: 5 }}>{title}</h2>
      {children}
    </div>
  );
}

const Experience = () => {

  return (
    <div style={{marginBottom: '100px',margin: '10px', fontSize:20, wordSpacing:1.25, lineHeight:1.5, color: '#FFFFFF'}}>
      <h1 className='title'>Experience</h1>
      {/* Job Section */}
      <Section title="Job Experience">
        <ul style={{ listStyleType: 'none', paddingLeft: 10 }}>
          <li style={{ marginBottom: 20 }}>
            <strong>Cashier</strong> Save-On-Foods (Jun. 2022 - Sept. 2022)
            <ul style={{ listStyleType: 'disc', paddingLeft: 20, marginTop: 10 }}>
              <li>Provided customer-focused support and problem-solving assistance, ensuring a positive user experience.</li>
              <li>Developed strong communication skills by explaining product details and guiding users to solutions.</li>
              <li>Demonstrated adaptability by quickly learning and navigating systems to locate information efficiently.</li>
            </ul>
          </li>
          <li style={{ marginBottom: 20 }}>
            <strong>Cashier and Cook</strong> A&W (Jun. 2022 - Sept. 2022)
            <ul style={{ listStyleType: 'disc', paddingLeft: 20, marginTop: 10 }}>
              <li>Managed multiple tasks independently, ensuring timely and accurate completion of responsibilities.</li>
              <li>Developed strong organizational and time-management skills by prioritizing tasks in a fast-paced environment.</li>
              <li>Maintained high standards of quality control, ensuring consistency and accuracy in deliverables.</li>
            </ul>
          </li>
          
        </ul>
      </Section>

      {/* Education Section */}
      <Section title="Education">
        <ul style={{ listStyleType: 'none', paddingLeft: 10 }}>
          <li style={{ marginBottom: 10 }}>
            <strong>Bachelor of Science with a Major in Computer Science</strong> - Simon Fraser University (2023 - Current)
          </li>
          <li style={{ marginBottom: 10 }}>
            <strong>High School Diploma</strong> - Argyle High School (2018 - 2023)
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default Experience;