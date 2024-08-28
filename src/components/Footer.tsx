export default function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto  flex justify-between">
        <div className="text-white w-96">
          <div className="flex items-center gap-x-4">
            <img src="/logo-revista.svg" alt="" />
            <p className="text-[20px]">Revista Cultural Horizonte</p>
          </div>
          <div className="border border-[#C67F07]"></div>
          <div className="space-y-4 my-5">
            <p className="text-[16px]">Av. Guillermo Prescott 498, San Isidro</p>
            <p className="text-[16px]">+51 902 562 198</p>
            <p className="underline text-[16px]">horizonte.revistacultural@gmail.com</p>
            <p className="w-80 text-[16px]">
              CB corporation SAC - Todos los derechos reservados
            </p>
          </div>
        </div>

        <div className="border border-[#C67F07]"></div>

        <div className="flex flex-col justify-around items-center">
          <div className="grid grid-cols-4 gap-5">
            <img src="/footer/fo-facebook.svg" alt="" className="w-[60px]" />
            <img src="/footer/spotify.svg" alt="" className="w-[60px]" />
            <img src="/footer/fo-youtube.svg" alt="" className="w-[60px]" />
            <img src="/footer/linkeding.svg" alt="" className="w-[60px]" />
            <img src="/footer/fo-instagram.svg" alt="" className="w-[60px]" />
            <img src="/footer/fo-tiktok.svg" alt="" className="w-[60px]" />
            <img src="/footer/twitch.svg" alt="" className="w-[60px]" />
            <img src="/footer/fo-twitter.svg" alt="" className="w-[60px]" />
          </div>
          <p className="text-white text-[20px] font-bold">
            ©2024 por HORIZONTE
          </p>
        </div>

        <div className="border border-[#C67F07]"></div>

        <div className="flex flex-col text-white space-y-6 mt-3">
          <p className="text-[20px]">Suscríbete</p>
          <p className="underline text-[16px]">Club Horizonte</p>
          <p className="underline text-[16px]">Embajador | Gratis</p>
        </div>

        <div className="border border-[#C67F07]"></div>

        <div className="text-white space-y-6 mt-3">
          <p className="text-[20px]">Nosotros</p>
          <p className="text-[16px]">Contáctenos</p>
          <p className="underline text-[16px]">Trabaja con nosotros</p>
          <p className="underline text-[16px]">Voluntariado</p>
          <p className="text-[16px]">Publicidad</p>
        </div>
      </div>
    </footer>
  );
}
