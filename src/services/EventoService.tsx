import BaseService from './BaseService';

const EVENTO_ENDPOINT = 'evento'; // Cambia esto si tu endpoint es diferente

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

const eventoService = {
  getAllEventos: async (): Promise<Evento[]> => BaseService.get(EVENTO_ENDPOINT),

  getEventoById: async (id: number): Promise<Evento> => BaseService.get(`${EVENTO_ENDPOINT}/${id}`),

  createEvento: async (data: Evento): Promise<Evento> => BaseService.post(EVENTO_ENDPOINT, data),

  updateEvento: async (id: number, data: Evento): Promise<Evento> => BaseService.put(`${EVENTO_ENDPOINT}/${id}`, data),

  deleteEvento: async (id: number): Promise<void> => BaseService.delete(`${EVENTO_ENDPOINT}/${id}`)
};

export default eventoService;
