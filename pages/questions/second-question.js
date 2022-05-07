/* eslint-disable */
import Link from 'next/link';

export default function SecondQuestiont() {
  return (
    <>
      <h1>What do you want to learn, or do more of, at work?</h1>

        <h3>I would like to learn the following: </h3>
         <p>- Next.js</p>
         <p>- Edge Functions</p>
         <p>- CLI&API</p>
         <p>- Analytics</p>
         <p>- Frontend Infrastructure</p>
         <p>- Integrations</p>
         <p>In conclusion, I'd like to learn everything about the product since I really look forward to becoming an asset to the team.</p>
        
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}