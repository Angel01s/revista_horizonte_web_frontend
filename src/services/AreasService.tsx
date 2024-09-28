import BaseService from './BaseService';

const AREA_ENDPOINT = 'areas'; // Cambia esto si tu endpoint es diferente

interface Area {
  idarea: number;
  name: string;
  foto: string;
  // Agrega otros campos según tu modelo de área
}

const areaService = {
  getAllAreas: async (): Promise<Area[]> => BaseService.get(AREA_ENDPOINT),

  getAreaById: async (id: number): Promise<Area> => BaseService.get(`${AREA_ENDPOINT}/${id}`),

  createArea: async (data: Area): Promise<Area> => BaseService.post(AREA_ENDPOINT, data),

  updateArea: async (id: number, data: Area): Promise<Area> => BaseService.put(`${AREA_ENDPOINT}/${id}`, data),

  deleteArea: async (id: number): Promise<void> => BaseService.delete(`${AREA_ENDPOINT}/${id}`)
};

export default areaService;
