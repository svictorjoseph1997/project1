/* eslint-disable */
import Link from 'next/link';

export default function SixthQuestiont() {
  return (
    <>
      <h1>A customer writes in to the Helpdesk stating "I have a custom domain which I
purchased at GoDaddy and I want to use it on my project". In a couple of
paragraphs, how do you respond?</h1>

        <p>Dear customer_name,</p>
        
        <p>Thank you for contacting Vercel Support!</p>
        
        <p>We have acknowledged your request and understand that you have a custom domain purchased at GoDaddy and you would like to use it on your project. </p>
        <p>The first step is to add the domain. You may find more information about it here: https://vercel.com/docs/concepts/projects/custom-domains#adding-a-domain</p> 
        <p>Once the custom domain is added, you will be asked to verify it. You may find the steps to verify access to domain here: https://vercel.com/docs/concepts/projects/custom-domains#verification-challenge</p>
        <p>The next step is to configure the domain to ensure it works as expected. You may find all the steps related to it here: https://vercel.com/docs/concepts/projects/custom-domains</p>      
        <p>Once the domain has been added, all of its DNS Records can be found in the advanced Settings page. From there you can view and manage the records. This document will help you with all the steps: https://vercel.com/docs/concepts/projects/custom-domains</p>
        <p>Also, you can use Custom Domain as a Wildcard Domain by prefixing it with '*.'. You may find more information about it here: https://vercel.com/docs/concepts/projects/custom-domains#wildcard-domains</p>
        
        <p>Please let us know if you have any issues or questions regarding this and we will be more than happy to help you. In case if you have any difficulty with any of the steps then we would also be happy to schedule a call with you to work on it together.</p>
        
        <p>Respectfully,</p>
        <p>S. Victor Joseph</p>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
