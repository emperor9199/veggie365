import axios from "axios";
import { BOOK_CAB } from "../constants/cabConstants";

export const bookCab = (cabData) => async (dispatch) => {
  try {
    const authAxios = axios.create({
      baseURL: "https://dharm.ga/api",
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });

    await authAxios.post("https://dharm.ga/api/caborder", cabData);
  } catch (e) {}
};
