import { dataType } from "../utils/utils";
import { dataType as data} from "../pages/Sidebar/Sidebar.Types";

export const calculate = async (data: Partial<data>): Promise<dataType | {detail: any[]}> => {
  const response = await fetch('http://127.0.0.1:8004/well_model/calc', {
    body: JSON.stringify(data),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}