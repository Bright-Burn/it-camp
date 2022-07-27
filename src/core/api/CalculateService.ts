import { dataType } from "../utils/utils";
import { dataType as data} from "../pages/Sidebar/Sidebar.Types";

const baseUrl = window.location.port === '3000' ? 'http://127.0.0.1:8004/well_model/calc' : '/api/well_model/calc'

export const calculate = async (data: Partial<data>): Promise<dataType | {detail: any[]}> => {
  const response = await fetch(baseUrl, {
    body: JSON.stringify(data),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
