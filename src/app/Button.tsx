'use client';

import { helloWorld } from './server';

const Button = () => {
  return (
    <button
      className="bg-slate-600 border border-slate-300 rounded-lg p-3 hover:bg-slate-500"
      onClick={() => helloWorld()}
    >
      Hello World
    </button>
  );
};
export default Button;
