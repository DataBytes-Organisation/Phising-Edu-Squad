import React, { useState } from 'react';

import test from './scam1.jpg';
import scam from './scam2.jpg';
import scam2 from './Phishing2.jpg';
import './Homepage.css';


// Sample data for articles
const articles = [
  {
    id: 1,
    title: 'What is phishing? Get to know more!',
    image: test,
    description: 'Phishing refers to social engineering cyber-attacks that use fraudulent emails ...',
    content: `Phishing refers to social engineering cyber-attacks that use fraudulent emails, texts, phone calls or websites posing as trustworthy sources to trick users into sharing passwords, sensitive data and account details that allow access to personal information. Phishing messages often have a sense of urgency or controversy to entice response. 

    Why should you be careful about phishing attack? 
    
    Phishing, extending its threats beyond significant security breaches, poses serious dangers in individual attacks by enabling identity theft or account takeover through the harvesting of login credentials. It can also deceive users into unwittingly downloading malicious software such as spyware, ransomware, or viruses which can be compromising to the security of your or even your networks systems. Furthermore, phishing schemes exploit individuals by convincing them to make payments to scammers masquerading as legitimate businesses. Additionally, this deceptive technique serves as a gateway for business email compromise attacks, allowing cybercriminals to impersonate executives and potentially cause substantial financial and reputational harm. 
    
    How can you look out for a phishing attack? 
    
    Individuals and organisations can fortify their defenses against phishing threats through a series of proactive measures. For individuals heightened awareness is crucial as we should remain vigilant for potential red flags such as poor grammar, spelling errors or urgent tones in phishing messages. Verifying the sender's email and scrutinising lookalike domains can further enhance personal security. Additionally, individuals are advised to exercise caution when interacting with links or attachments in emails and refrain from clicking them until the legitimacy has been verified. Leveraging security keys for account logins when available can also be beneficial as it adds an extra layer of authentication security. 
    
    On the organisational front businesses can bolster their defenses by prioritising employee education on recognizing and mitigating phishing techniques. This can be done by conducting simulated phishing campaigns which serve as an effective tool to gauge and improve employee susceptibility. Another method of mitigation is the implementation of multi-factor authentication (MFA) across accounts which serves to add an additional layer of protection against unauthorized access. To further bolster the aforementioned mitigation techniques, employing email filtering solutions equipped with anti-phishing software enhances the ability to screen and block suspicious emails. On top of this, regularly updating and patching software is essential in preventing potential vulnerabilities from being exploited. These collective efforts as guided by best practices play a crucial role in mitigating the pervasive threat of phishing attacks in the ever-evolving digital landscape. 
    
    Written entirely by Aiden Wiltshire`,
    
  },
  {
    id: 2,
  title: 'Types of phishing attack and how to prevent them',
  image: scam,
  description: 'Phishing can take a variety of forms and it pays to be able to understand...',
  content: `Phishing can take a variety of forms, and it pays to understand attackers' different approaches to gaining access to restricted or personal data, such as credentials, personal records, and even credit card details. The most common types of approaches are as follows:

  BEC (Business Email Compromise) attacks are carefully planned and researched attacks that impersonate an organizational executive, vendor, or supplier.

    Top phishing threats related to BEC

    Email account compromise: This is a common type of BEC scam in which an employee's email account is hacked and used to request payments from vendors. The money is then sent to attacker-controlled bank accounts.

    Employee impersonation: This type of BEC takes the form of an email scam, in which a bad actor impersonates a trusted internal employee or vendor to steal money or sensitive information through email.

    VIP impersonation: This type of attack occurs when a malicious actor sends an email to an unsuspecting victim, using a compromised email of a legitimate company, individual or VIP, asking for payment or funds transfer.

    External payment fraud: An email attack is sent to an unsuspecting victim impersonating trusted vendors for invoice payment requests. It is also known as Vendor Email Compromise (VEC).

    Internal payment fraud: Using stolen credentials an attacker can gain access to internal payment systems such as payment platforms and set up fraudulent vendors, change payment recipients, or redirect payments to their accounts.

    Payroll diversion fraud: Using stolen email credentials, an attacker emails an organization's payroll or finance department requesting a change to direct-deposit information.

    Social engineering: Persuasion through psychology is used to gain a target's trust, causing them to lower their guard and take unsafe action such as divulging personal information.

    Extortion: Threatening or intimidating action is used to obtain monetary or other financial gain, commonly used in vishing scams.

    Malicious recon emails: This looks like legitimate email communication but is actually an email sent by an attacker with the purpose of eliciting a response prior to extracting sensitive user or organizational data.

    Credential phishing: A bad actor steals login credentials by posing as a legitimate entity using emails and fake login pages. The bad actor then uses the victim's stolen credentials to carry out a secondary attack or extract data.

    Account takeover (ATO)

    The methods used by attackers to gain access to cloud email, such as a Microsoft 365 email account, are fairly simple and increasingly common. These phishing campaigns usually take the form of a fake email from Microsoft. The email contains a request to log in, stating the user needs to reset their password, hasn't logged in recently, or that there's a problem with the account that needs their attention. A URL is included, enticing the user to click to remedy the issue.

    Spear phishing

    Spear phishing targets specific individuals instead of a wide group of people. That way, the attackers can customize their communications and appear more authentic. Spear phishing is often the first step used to penetrate a company's defenses and carry out a targeted attack. According to the SANS Institute, 95 percent of all attacks on enterprise networks are the result of successful spear phishing.

    Whaling

    When attackers go after a "big fish" like a CEO, it's called whaling. These attackers often spend considerable time profiling the target to find the opportune moment and means to steal login credentials. Whaling is of particular concern because high-level executives have access to a great deal of sensitive organizational information.

    Voice phishing (vishing)

    Voice phishing, or vishing, is a form of social engineering. It is a fraudulent phone call or voice message designed to obtain sensitive information such as login credentials. For instance, the attacker might call pretending to be a support agent or representative of your organization or a subscription service. New employees are often vulnerable to these types of scams, but they can happen to anyone—and are becoming more common. Deploying spam call-blocking software is a common tactic to prevent these types of calls. 

    SMS phishing (SMiShing) 

    Text message, or SMS phishing, can come through random broadcast text messages or portray a known coworker in your organization. Sometimes SMIShing messages contain a link or can request you to take immediate action. 

    Either way, if you don't recognise the mobile number, delete the message. 

    If you are ever unsure, call the individual using a valid phone number to make sure the task is legitimate. 

    Angler phishing 

    Angler phishing is similar to vishing, but instead of a phone call, attackers reach out by direct messaging on social media platforms. Victims are targeted by fake customer service agents. These attacks have even tricked professional anti-scammers, so don't underestimate the efficacy of this method.

    With these methods of attacks being utilised often within the real world it pays for companies and individuals to be well prepared and plan ahead for these attacks. Now one single cyber security solution cannot avert all phishing attacks directed toward a company, this leads us to needing to take a layered security approach to reduce the number of phishing attacks that get through to your company and minimize the impact of them if they do get through. The following are some of the approaches in which should be used to ensure a comprehensive security approach to a company.

    Deploy tiered security solutions 

    Your organization can deploy Cisco Umbrella for phishing protection and Cisco Secure Email Threat Defense to safeguard inboxes. Organizations may also consider Cisco Secure Access, a cloud-delivered security service edge (SSE) solution, grounded in zero trust, that provides secure access from anything to anywhere, including phishing protection.  

    Conduct regular training 

    Phishing training and anti-phishing strategies will help enlist employees in efforts to defend your organization. Include Cisco Secure Awareness Training as part of this approach. Phishing simulations and awareness training help you educate users on how to spot and report phishing attempts. 

    Avoid posting contact information online 

    Some attackers collect info by scraping information from these social media and websites. They collect mobile numbers for key stakeholders from email signatures and use that information for spear phishing and SMiShing campaigns. 

    Develop unique email address conventions 

    Common email address naming conventions are shared on the open internet and most patterns are easy to guess. Consider developing an email naming convention that doesn't follow the standard first name (dot) last name or the first-initial, last-name pattern. Randomising email names across the organization will make them impossible to guess on a mass scale. 

    Deploy secure messaging platforms 

    With email remaining the number one vector for phishing attacks, many organizations are turning to the security of messaging platforms, including Cisco Webex Messaging for internal communication. Messaging platforms reduce the overall dependency on email for communication and in turn reduces email volume. 

    When combined with anti-phishing training, this approach gives employees more time and the ability to detect fraudulent emails.

  Written mostly by Imran Mughal with additions and edits by Aiden Wiltshire.`,

  },
  {
    id: 1,
    title: 'What is phishing? Get to know more!',
    image: scam2,
    description: 'Phishing refers to social engineering cyber-attacks that use fraudulent emails ...',
    content: `Phishing refers to social engineering cyber-attacks that use fraudulent emails, texts, phone calls or websites posing as trustworthy sources to trick users into sharing passwords, sensitive data and account details that allow access to personal information. Phishing messages often have a sense of urgency or controversy to entice response. 

    Why should you be careful about phishing attack? 
    
    Phishing, extending its threats beyond significant security breaches, poses serious dangers in individual attacks by enabling identity theft or account takeover through the harvesting of login credentials. It can also deceive users into unwittingly downloading malicious software such as spyware, ransomware, or viruses which can be compromising to the security of your or even your networks systems. Furthermore, phishing schemes exploit individuals by convincing them to make payments to scammers masquerading as legitimate businesses. Additionally, this deceptive technique serves as a gateway for business email compromise attacks, allowing cybercriminals to impersonate executives and potentially cause substantial financial and reputational harm. 
    
    How can you look out for a phishing attack? 
    
    Individuals and organisations can fortify their defenses against phishing threats through a series of proactive measures. For individuals heightened awareness is crucial as we should remain vigilant for potential red flags such as poor grammar, spelling errors or urgent tones in phishing messages. Verifying the sender's email and scrutinising lookalike domains can further enhance personal security. Additionally, individuals are advised to exercise caution when interacting with links or attachments in emails and refrain from clicking them until the legitimacy has been verified. Leveraging security keys for account logins when available can also be beneficial as it adds an extra layer of authentication security. 
    
    On the organisational front businesses can bolster their defenses by prioritising employee education on recognizing and mitigating phishing techniques. This can be done by conducting simulated phishing campaigns which serve as an effective tool to gauge and improve employee susceptibility. Another method of mitigation is the implementation of multi-factor authentication (MFA) across accounts which serves to add an additional layer of protection against unauthorized access. To further bolster the aforementioned mitigation techniques, employing email filtering solutions equipped with anti-phishing software enhances the ability to screen and block suspicious emails. On top of this, regularly updating and patching software is essential in preventing potential vulnerabilities from being exploited. These collective efforts as guided by best practices play a crucial role in mitigating the pervasive threat of phishing attacks in the ever-evolving digital landscape. 
    
    Written entirely by Aiden Wiltshire`,
  },
  // Add more articles as needed
];

const Homepage = () => {
  

  const [selectedArticle, setSelectedArticle] = useState(null);

  // Function to handle article click
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  // Function to handle going back to the homepage
  const handleGoBack = () => {
    setSelectedArticle(null);
  };

  // Renders the content of the article into paragraphs
  const renderContent = (content) => {
    return content.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph.trim()}</p>
    ));
  };

  return (
    <div className="home">
      <div className="home-container" style={{ border: '2px solid #f0f8ff' }}></div>
      <h1>Welcome to Dolfin Cyber News</h1>
      {selectedArticle ? (
        // Display extended details when an article is selected
        <div>
          <button onClick={handleGoBack}>Go Back</button>
          <h2>{selectedArticle.title}</h2>
          <img src={selectedArticle.image} alt={selectedArticle.title} className="article-image"/>
          <div className="article-content">
            {renderContent(selectedArticle.content)}
          </div>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      ) : (
        // Display a list of articles with short descriptions
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <div onClick={() => handleArticleClick(article)} style={{ cursor: 'pointer' }}>
                <img src={article.image} alt={article.title} className="article-list-image" />
              </div>
              <p>{article.description}</p>
              <button onClick={() => handleArticleClick(article)}>Read More</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Homepage;