interface SectionProps {
  children?: React.ReactNode
  color?: string
}

const Section = (props: SectionProps) => {
  const { children, color } = props
  
  return (
    <div className={`border-2 rounded-md border-${color}-400 h-full`}>
      {children}
    </div>
  );
}

export default Section;