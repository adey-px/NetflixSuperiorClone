import { FC } from 'react';

// Set types for Input component props
interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: any;
}

// Input Component, with above props
const Input: FC<InputProps> = ({ label, id, type, value, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
        text-white
        bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          invalid:border-b-1
          peer
        "
        placeholder=" " 
      />

      <label 
        htmlFor={id} 
        className="
          absolute 
          text-md
        text-zinc-400
          duration-150 
          transform 
          -translate-y-3 
          scale-75 
          top-4 
          left-6
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >{label}</label>
    </div>
  )
}

export default Input;