/* eslint-disable */
import Link from 'next/link';

export default function FirstQuestiont() {
  return (
    <>
      <h1>A customer writes in to the Helpdesk asking "How do I do a redirect from
/hello-vercel to https://vercel.com?" In a couple of paragraphs, how do you
respond?</h1>

        <h3>Please find my response below:</h3>
         <p>Dear customer_name,</p>

         <p>Thank you for contacting Vercel Support!</p>
         
         <p>We have acknowledged your request and understand that you need assistance to add a redirect from /hello-vercel to https://vercel.com. This can be achieved by using In-Application Redirects. Please follow the below steps to add this redirect to your website:</p>
         <p>1. Go to the configuration file ('next.config.js' configuration file for Next.js projects, or a 'vercel.json' file for all other use cases).</p>
         <p>2. Please add the following configs to the configuration file.</p> 
            <p>     "source": '/hello-vercel', </p>
            <p>    "destination": 'https://vercel.com', </p>
          <p>3. Please ensure to follow this Documentation where you just need to copy and paste the configs present under In-Application Redirects and replace it with the above mentioned values: https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects</p> 
         <p>4. Please ensure to have re-deployed the product to reflect your latest cahnges.</p> 

         <p>Please note that The permanent property is a boolean to toggle between permanent and temporary redirect (default true). When true, the status code is 308. When false the status code is 307.</p>
        
         <p>Please let us know if you have any issues or questions and we will be more than happy to help.

         <p>Respectfully,</p>
         <p>S. Victor Joseph</p>

         
         </p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}