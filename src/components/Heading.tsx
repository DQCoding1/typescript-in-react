// handle props with destructuring
const Heading = ({ title }: { title:string }) => {
  return (
    <header>
      <p>{title}</p>
    </header>
  )
}


// handle props without destructuring
// const Heading = (props: {title: string}) => {
//   return (
//     <header>
//       <p>{props.title}</p>
//     </header>
//   )
// }

export default Heading