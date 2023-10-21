import { DoorOpen, File, Paperclip, PartyPopper } from "lucide-react";

const Work = () => {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-2xl font-bold">How does it work?</h1>
        <p>Say Less</p>
      </div>

      <div className="bg-primary/10">
        <div className="container h-full py-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Sign In",
              icon: DoorOpen,
            },
            {
              name: "Fill Informations",
              icon: Paperclip,
            },
            {
              name: "Upload CV",
              icon: File,
            },
            {
              name: "Get Hired",
              icon: PartyPopper,
            },
          ].map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white border rounded-md px-4 py-8 flex flex-col items-center justify-center text-center gap-4 text-lg font-semibold hover:text-primary"
            >
              <Icon className="w-6 h-6" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Work
