import Image from 'next/image';

function VisitGitHub({ ghLink }) {
  return (
    <a
      href={ghLink}
      target="_blank"
      aria-label="GitHub Repository"
      rel="noreferrer external"
    >
      <article>
        <Image src="/BigGitHub.png" alt="GitHub Cat" width={120} height={120} />
        <h4>Visit the GitHub Repository!</h4>
      </article>
    </a>
  );
}

export default VisitGitHub;
