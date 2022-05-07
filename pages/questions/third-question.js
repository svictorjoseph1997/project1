import Link from 'next/link';

export default function ThirdQuestiont() {
  return (
    <>
      <h1>Which technical article, guide or lightning talk left the biggest positive impression
on you? Why? Ideally, this article would not be associated with Vercel or web
development, by the way! Please provide links</h1>

        <p>I liked this talk on youtube: <a href='https://www.youtube.com/watch?v=Di73SCkK5QU'>Link here</a></p>
        <p>It is because I believe that women can achieve a lot in the tech industry and they should be encouraged to step forward and take action.</p>
         
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}