// destructuring 
const Heading = ({ title }: { title:string }) => {
  return (
    <header>
      <p>{title}</p>
    </header>
  )
}


// without destructuring
// const Heading = (props: {title: string}) => {
//   return (
//     <header>
//       <p>{props.title}</p>
//     </header>
//   )
// }

export default Heading