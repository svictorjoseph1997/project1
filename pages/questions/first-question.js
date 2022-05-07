/* eslint-disable */
import Link from 'next/link';

export default function FirstQuestiont() {
  return (
    <>
      <h1>From this list, rank your 5 most favourite and 5 least favourite tasks. Please
provide reasons why each task is your most or least favourite.</h1>

        <h3>Please find my response below:</h3>
         <p>- Dig through logs to troubleshoot a customer's broken project - It excites me to dive deep into the issue and logs are one of the best ways to do that.</p>
         <p>- Write and maintain support articles and docs pages - This will allow me to contribute to the team and will make the job easy for new joinees.</p>
         <p>- Create video tutorials to help teach users a specific feature or use case - This will help our customers to do their job more efficiently.</p>
         <p>- Analyze hundreds of support tickets to spot trends the product team can use - This will help us all as a team to know what type of cases usually come in. It might even give us a chance to automate the process.</p>
         <p>- Manage a support team - This is something I want to do down the line.</p>

         <h3>My 5 least tasks along with the reasons</h3>
         <p>- Scheduling time-off coverage and collaborating as part of a growing cohesive support team - That is a tough part to do because sometimes I might have to say no to someone for taking a leave</p>
         <p>- Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems - I personally believe to help customers one by one. Having multiple users/customes at once is manageable but might not bring out the best results.</p>
         <p>- Work with people to figure out if Vercel is suitable for their use case - Honestly, I believe that vercel is the best if they are using it for frontend frameworks and static sites. If they know about this then they should blindly go ahead with Vercel. :p </p>
         <p>- Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites - This is not bad but communicating via email is the best option. However, I am sure that some of the customers would prefer to contact via different channels and supporting through other channels is not that bad.</p>
         <p>- The remaining seems to be good but for the sake of it, I will add one more - Work with 3rd party partners to track down a tricky situation for a joint customer - The reason is sometimes the 3rd party partners might not be responsive.</p>
        
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}