import { BsDownload } from "react-icons/bs"

export const DownloadCV = () => {
  return (
    <>
      <a href="/Lebenslauf Daniel Adrian Gendik.pdf" download>
        <button
          className=" border-2 border-black rounded-xl whitespace-nowrap
       px-1 py-3 font-bold flex items-center gap-2 hover:bg-black hover:text-white duration-150
        dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          {" "}
          Download CV
          <BsDownload />
        </button>
      </a>
    </>
  )
}
