import React from "react";

const ContactHeader = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col ContactHeader h-[50vh] lg:h-[60vh] relative">
      <h1 className="text-white text-4xl lg:text-7xl font-semibold">Contact</h1>

      <p className="text-white font-semibold absolute bottom-6 2xl:left-72">
        Home {">"} Contact
      </p>
    </main>
  );
};

export default ContactHeader;
