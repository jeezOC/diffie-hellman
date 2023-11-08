import { useField } from "formik";
import { useState } from "react";

interface InputProps {
  name: string
  label: string
  type?: string
  onChange?: (e: any) => void
  colorAccent?: keyof typeof colorVariants
  isDisabled?: boolean
}

const colorVariants = {
  blue: {
    focusColor: 'text-blue-600',
    borderFocusColor: 'outline-blue-400'
  },
  green: {
    focusColor: 'text-green-600',
    borderFocusColor: 'outline-green-400'
  },
  rose: {
    focusColor: 'text-rose-600',
    borderFocusColor: 'outline-rose-400'
  },
  none: {
    focusColor: 'text-gray-800',
    borderFocusColor: 'outline-gray-300'
  }
}

const Input: React.FC<InputProps> = (props) => {
  const { name, label, type, colorAccent = 'blue', isDisabled = false,  onChange } = props;
  const [field, meta, helpers] = useField(name);

  const [isFieldFocused, setIsFieldFocused] = useState(false)

  const handleFocus = () => {
    setIsFieldFocused(true)
  }

  const handleBlur = () => {
    helpers.setTouched(!meta.touched)
    setIsFieldFocused(false)
  }

  const thinLetter = 7
  const thickLetter = 16
  const getWordLength = (word: string) => {
    return word.split('').reduce((sum: number, letter: string) => {
      const thinLetters = ['I', 'i', 'l', 't', 'f', 'j', 'r', 's', 'v', ' ', ':']
      if (thinLetters.includes(letter)) {
        return sum + thinLetter
      } else {
        return sum + thickLetter
      }

    }, thickLetter)
  }


  return (
    <div className="flex relative items-center">
      <label
        htmlFor={name}
        className={`block text-gray-700 text-xl absolute ml-2 ${isFieldFocused && colorVariants[colorAccent].focusColor}`}

      >{label}</label>
      <input
        {...field}
        value={field.value || ''}
        onChange={onChange || field.onChange}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`outline-1 rounded-md w-full  p-2 text-xl ${colorVariants[colorAccent].borderFocusColor}`}
        style={{ paddingLeft: `${getWordLength(label)}px` }}
        disabled={isDisabled}
      />
    </div>

  );
}

export default Input;