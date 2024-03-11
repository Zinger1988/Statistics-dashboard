export const config = {
  error: {
    fill: 'fill-red-500',
    outline: 'border border-red-600/40 bg-red-700/20 rounded rounded-md',
    icon: 'warning-circled',
    progress: 'bg-red-500',
  },
  warning: {
    fill: 'fill-orange-500',
    outline: 'border border-orange-600/40 bg-orange-700/20 rounded rounded-md',
    icon: 'warning-triangle',
    progress: 'bg-orange-500',
  },
  success: {
    fill: 'fill-green-500',
    outline: 'border border-green-600/40 bg-green-700/20 rounded rounded-md',
    icon: 'check-circled',
    progress: 'bg-green-500',
  },
  info: {
    fill: 'fill-blue-500',
    outline: 'border border-blue-500/40 bg-blue-700/20',
    icon: 'check-circled',
    progress: 'bg-blue-500',
  },
};

export const sizes = {
  small: {
    padding: 'p-2.5',
    title: 'text-[1rem]',
    description: 'text-[.825rem]',
    icon: 'w-5 h-5',
    gap: 'gap-x-2',
  },
  medium: {
    padding: 'p-3',
    title: 'text-[1.4rem]',
    description: 'text-[1.155rem]',
    icon: 'w-7 h-7',
    gap: 'gap-x-3',
  },
  large: {
    padding: 'p-5',
    title: 'text-[1.6rem]',
    description: 'text-[1.2rem]',
    icon: 'w-8 h-8',
    gap: 'gap-x-5',
  },
};
