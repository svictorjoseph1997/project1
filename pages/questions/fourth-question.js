
import Link from 'next/link';

export default function SeventhQuestiont() {
  return (
    <>
      <h1>Add a temporary in-app redirect to your project, redirecting /hello-vercel (or any
path – but be sure to tell us which!) to https://vercel.com
</h1>

        <p>Please launch https://project1-wine.vercel.app/hello-vercel and it should redirect to https://vercel.com</p>
         
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}