import axios from "axios";

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
