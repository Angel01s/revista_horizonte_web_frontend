import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto mt-12">
      <div className="flex justify-between items-center mb-12">
        <div className="border-2 border-black rounded-2xl hover:bg-black hover:rounded-2xl hover:text-white">
          <p className="px-2 py-1  font-semibold">Suscribirse</p>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-8xl font-semibold">Horizonte</h1>
            <p className="text-xl">Revista Cultural</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between items-center">
            <img src="/redes/instagram.svg" alt="" />
            <img src="/redes/facebook.svg" alt="" />
            <img src="/redes/youtube.svg" alt="" />
            <img src="/redes/twitter.svg" alt="" />
            <img src="/redes/tiktok.svg" alt="" />
          </div>
          <div className="">
            <input type="text" className="rounded-lg border-2 border-black"/>
          </div>
        </div>
      </div>

      <div className="border border-[#C67F07]">
      </div>

      <nav className="flex justify-between my-4">
        <NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Inicio</NavLink>
        <NavLink to={'/nosotros'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Nosotros</NavLink>
        <NavLink to={'/actualidad'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Actualidad</NavLink>
        <NavLink to={'/politica-cultural'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Política Cultural</NavLink>
        <NavLink to={'/entretenimiento'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Entretenimiento</NavLink>
        <NavLink to={'/bellas-artes'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Bellas Artes</NavLink>
        <NavLink to={'/lugares'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Lugares</NavLink>
        <NavLink to={'/destinos'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Destinos</NavLink>
        <NavLink to={'/agenda-cultural'} className={({isActive}) => isActive ? 'text-[#C67F07] font-bold uppercase text-xl' : 'text-black uppercase text-xl'}>Agenda Cultural</NavLink>
      </nav>


      <div className="border border-[#C67F07]">
      </div>


    </header>
  );
}
