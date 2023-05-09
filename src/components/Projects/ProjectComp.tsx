type ProjectProps = {
  image: any
}
export const Project: React.FC<ProjectProps> = ({ image }) => {
  return (
    <div className="w-full  max-h-[250px]  ring-8 ring-white rounded-md">
      <img
        src={image}
        alt="Project_screen"
        className="w-full h-full hover:opacity-50"
      />
    </div>
  )
}
