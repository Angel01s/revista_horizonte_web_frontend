import React, { useEffect, useState } from 'react';
import areaService from '../services/AreasService';
import eventoService from '../services/EventoService';
import '../index.css';
import './styles/carousel.css';


interface Area {
  idarea: number;
  name: string;
  foto: string; // Imagen asociada al área
}
interface Evento {
  idevento: number;
  titulo: string;
  idarea: number;
  descripcion: string;
  fecha: Date;
  idautor: number;
  foto: string;
  hora: Date;
  lugar: string;
  pais: string;
}


export default function IndexPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { 
        src: 'images/arqueologia.jpg', 
        title: 'Título 1', 
        subtitle: 'Subtítulo 1', 
        author: 'Autor 1', 
        date: 'Fecha 1' 
    },
    { 
        src: 'images/deportes.jpg', 
        title: 'Título 2', 
        subtitle: 'Subtítulo 2', 
        author: 'Autor 2', 
        date: 'Fecha 2' 
    },
    { 
        src: 'images/gastronomia.jpg', 
        title: 'Título 3', 
        subtitle: 'Subtítulo 3', 
        author: 'Autor 3', 
        date: 'Fecha 3' 
    },
    // Agrega más imágenes según sea necesario
];

  const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const [areas, setAreas] = useState<Area[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // const fetchAreas = async () => {
    //   try {
    //     const data = await areaService.getAllAreas();
    //     setAreas(data);
    //   } catch (err) {
    //     setError('Failed to fetch areas');
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    setLoading(true);
  fetch('http://localhost:8000/inicio')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        setAreas(data.areas || []); 
        setEventos(data.eventos || []);
        setLoading(false);
    })
    .catch(error => {
        console.error('Error:', error);
        setError('Failed to fetch data');
        setLoading(false);
    });

    // const fetchEventos = async () => {
    //   try {
    //     const dataevento = await eventoService.getAllEventos();
    //     setEventos(dataevento);
    //   } catch (err) {
    //     setError('Failed to fetch eventos');
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchEventos();
    // fetchAreas();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
console.log('Areas:', areas);
console.log('Eventos:', eventos);
  return ( 
    <>
      
      
      <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {eventos.map(evento => (
                    <div className="carousel-card" key={evento.idevento}>
                        <div className="espaciado"></div>
                        <img src={evento.foto} alt={evento.lugar} className="carousel-image" />
                        <div className="carousel-content">
                            <h2 className="carousel-title">{evento.titulo}</h2>
                            <p className="carousel-subtitle">{evento.descripcion}</p>
                            <p className="carousel-author">{evento.idautor}</p>
                            <p className="carousel-date">{new Date(evento.fecha).toLocaleDateString()}</p>
                        </div>
                        <div className="espaciado"></div>
                    </div>
                ))}
            </div>
              <button className="carousel-button left" onClick={prevSlide}>❮</button>
              <button className="carousel-button right" onClick={nextSlide}>❯</button>
       </div>

      <div className="explora-container">
        <center><h1 className="explora-title">EXPLORA</h1></center>
        <br />
        <div className="areas-grid">
          {areas.map(area => (
            <button 
              key={area.idarea}
              className="area-button"
              onClick={() => console.log()}>
              <img 
                src={area.foto} 
                alt={area.name} 
                className="area-image"
              />
              <div className="area-overlay">
                <h2 className="area-name">{area.name}</h2>
              </div>
            </button>
          ))}
        </div>
      </div>

    </>
  );
}
