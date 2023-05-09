import { BsDownload } from "react-icons/bs"

export const DownloadCV = () => {
  return (
    <>
      <button className=" border-2 border-black rounded-xl
       px-4 py-3 font-bold flex items-center gap-2 hover:bg-black hover:text-white duration-150">
        {" "}
        Download CV
        <BsDownload />
      </button>
    </>
  )
}
