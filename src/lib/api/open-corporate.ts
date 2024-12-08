import { apiClient } from "./api-client";

const openCorporates = apiClient("OpenCorporates");

export const getCompanyDetails = async (id: string) => {
  try {
    const data = await openCorporates.getCompanyDetails(id);
    return data;
  } catch (error) {
    console.error("Error fetching company details:", error);
    throw error;
  }
};

export const searchCompanies = async (query: string) => {
  try {
    const data = await openCorporates.searchCompanies(query);
    return data;
  } catch (error) {
    console.error("Error searching companies:", error);
    throw error;
  }
};
