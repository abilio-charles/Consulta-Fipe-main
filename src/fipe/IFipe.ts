import axios from 'axios';

abstract class IFipe {
  protected static URL = 'https://parallelum.com.br/fipe/api/v1/';
  protected static tipo: string = '';

  protected static async request(uri: string) {
    try {
      const response = await axios.get(uri);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public static async getMarcas() {
    const uri = `${this.URL}${this.tipo}/marcas`;
    return this.request(uri);
  }

  public static async getModelos(codMarca: string) {
    const uri = `${this.URL}${this.tipo}/marcas/${codMarca}/modelos`;
    return this.request(uri);
  }

  public static async getAnos(codMarca: string, codModelo: string) {
    const uri = `${this.URL}${this.tipo}/marcas/${codMarca}/modelos/${codModelo}/anos`;
    return this.request(uri);
  }

  public static async getVeiculo(codMarca: string, codModelo: string, codAno: string) {
    const uri = `${this.URL}${this.tipo}/marcas/${codMarca}/modelos/${codModelo}/anos/${codAno}`;
    return this.request(uri);
  }
}

export default IFipe;
