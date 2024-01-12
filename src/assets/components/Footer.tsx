interface FooterProps {
    text: string;
}
const Footer = (props: FooterProps) => {
  return (
    <div className="flex justify-center text-1xl mt-10">{props.text}</div>
  )
}

export default Footer