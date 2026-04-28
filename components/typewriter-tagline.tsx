'use client';

import { useEffect, useState } from 'react';

const WORDS = ['ink', 'paper', 'energy', 'make-ready'];
const TYPE_MS = 90;
const DELETE_MS = 50;
const HOLD_MS = 1400;

type Props = { prefix?: string; inline?: boolean };

export function TypewriterTagline({ prefix = 'Reduce', inline = false }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text === target) {
        timeout = setTimeout(() => setIsDeleting(true), HOLD_MS);
      } else {
        timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_MS);
      }
    } else {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      } else {
        timeout = setTimeout(() => setText(target.slice(0, text.length - 1)), DELETE_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  const content = (
    <>
      <span className="typewriter-prefix">{prefix}:</span>{' '}
      <span className="typewriter-word">
        <span className="typewriter-text">{text}</span>
        <span className="typewriter-caret" aria-hidden="true" />
      </span>
    </>
  );

  if (inline) {
    return (
      <span className="typewriter-inline" aria-live="polite">
        {content}
      </span>
    );
  }

  return (
    <p className="typewriter-tagline" aria-live="polite">
      {content}
    </p>
  );
}
