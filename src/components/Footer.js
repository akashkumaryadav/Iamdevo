import React from "react"

const Footer = () => {
  return (
    <footer className="shadow-2xl bg-primary w-screen py-20">
      <div className="container mx-auto gap-x-10 grid grid-cols-1 md:grid-cols-2 w-full">
        {/* //#region social */}
        <div>
          <h4 className="text-5xl text-center">Social</h4>
          <section className="flex flex-row justify-center items-center  pt-20 pb-20 space-x-6 text-5xl">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918543064118&text&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <i className="fab fa-whatsapp text-succes text-green-300"></i>
            </a>
            <a href="/" aria-label="instagram">
              <i className="fab fa-instagram text-red-500"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/akash-yadav-a99323183"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <i className="fab fa-linkedin text-blue-600"></i>
            </a>
            <a
              href="https://www.hackerrank.com/AkashKumarYadav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="hackerrank"
            >
              <i className="fab fa-hackerrank text-success"></i>
            </a>
          </section>
        </div>
        {/* //#endregion social */}
        {/* //#region  resources */}
        <div>
          <h4 className="text-5xl text-center">Resources</h4>
          <section className="flex flex-col justify-center items-center  my-20 text-blue-500">
            {/* tailwind */}
            <a
              href="http://https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl "
              aria-label="tailwindcss"
            >
              www.tailwindcss.com
            </a>
            {/* icons moon  */}
            <a
              href="https://icons8.com/icon/"
              className="text-2xl"
              aria-label="icons8"
            >
              www.icons8.com
            </a>
            {/* fontawseome */}
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
              aria-label="fontawseome"
            >
              www.fontawseome.com
            </a>
            {/* gatsby */}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
              aria-label="unsplash"
            >
              www.unsplash.com
            </a>
            {/* unsplash */}
          </section>
        </div>
        {/* //#endregion resources */}
      </div>
      <h4 className="text-center text-primaryText">&copy; akashkumaryadav</h4>
    </footer>
  )
}

export default Footer
