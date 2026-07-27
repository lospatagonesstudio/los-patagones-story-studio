export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-2xl font-bold tracking-widest">
            LPSS
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">

            <a href="#servicios" className="hover:text-sky-400 transition">
              ▶ SERVICIOS
            </a>

            <a href="#proceso" className="hover:text-sky-400 transition">
              ▶ PROCESO
            </a>

            <a href="#nosotros" className="hover:text-sky-400 transition">
              ▶ NOSOTROS
            </a>

            <a href="#contacto" className="hover:text-sky-400 transition">
              ▶ CONTACTO
            </a>

          </div>

        </div>
      </nav>

      {/* HERO */}

      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">

        <p className="uppercase tracking-[6px] text-sky-400 mb-4">
          LOS PATAGONES STORY STUDIO
        </p>

        <h2 className="text-6xl font-black max-w-5xl leading-tight">

          Vos viajá.

          <br />

          Nosotros contamos la historia.

        </h2>

        <p className="max-w-3xl text-xl text-slate-300 mt-8">

          Transformamos ideas, grabaciones y proyectos
          en contenido audiovisual profesional para
          empresas, viajeros y creadores.

        </p>

        <a
          href="#contacto"
          className="mt-12 bg-sky-600 hover:bg-sky-700 transition px-10 py-5 rounded-full text-lg font-bold"
        >
          ▶ CONTANOS TU PROYECTO
        </a>

      </section>

      {/* SERVICIOS */}

      <section
        id="servicios"
        className="max-w-6xl mx-auto py-24 px-6"
      >

        <h3 className="text-4xl font-bold mb-12">

          ▶ SERVICIOS

        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Edición de Video",
            "Subtítulos",
            "Localización",
            "Shorts & Reels",
            "YouTube",
            "Producción Audiovisual",
          ].map((item) => (

            <div
              key={item}
              className="border border-slate-700 rounded-xl p-8 hover:border-sky-500 transition"
            >
              <h4 className="text-2xl font-bold mb-4">
                {item}
              </h4>

              <p className="text-slate-300">
                Soluciones profesionales adaptadas a cada proyecto.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PROCESO */}

      <section
        id="proceso"
        className="bg-slate-900 py-24 px-6"
      >

        <div className="max-w-5xl mx-auto">

          <h3 className="text-4xl font-bold mb-10">

            ▶ CÓMO TRABAJAMOS

          </h3>

          <ol className="space-y-6 text-xl">

            <li>1. Nos contás tu proyecto.</li>

            <li>2. Enviás el material.</li>

            <li>3. Editamos y producimos.</li>

            <li>4. Revisamos juntos.</li>

            <li>5. Entregamos el trabajo final.</li>

          </ol>

        </div>

      </section>

      {/* NOSOTROS */}

      <section
        id="nosotros"
        className="max-w-5xl mx-auto py-24 px-6"
      >

        <h3 className="text-4xl font-bold mb-8">

          ▶ NUESTRA FORMA DE TRABAJAR

        </h3>

        <p className="text-xl text-slate-300 leading-9">

          Creemos que cada proyecto tiene una historia única.
          Nuestro objetivo no es simplemente editar videos,
          sino ayudar a personas, marcas y organizaciones
          a comunicar mejor.

        </p>

      </section>

      {/* CONTACTO */}

      <section
        id="contacto"
        className="bg-sky-700 py-24 text-center px-6"
      >

        <h3 className="text-5xl font-black">

          ¿Comenzamos el próximo viaje?

        </h3>

        <p className="mt-8 text-xl">

          Escribinos y contanos tu proyecto.

        </p>

        <div className="mt-10 flex flex-col gap-4">

          <a
            href="mailto:contacto@lospatagonesstorystudio.com"
            className="text-2xl underline"
          >
            contacto@lospatagonesstorystudio.com
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="text-center py-8 text-slate-500">

        © {new Date().getFullYear()} Los Patagones Story Studio

      </footer>

    </main>
  );
}