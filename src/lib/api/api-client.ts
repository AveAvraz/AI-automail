export interface ApiClient {
  getCompanyDetails: (id: string) => Promise<any>;
  searchCompanies: (query: string) => Promise<any>;
}

export const apiClient = (apiProvider: string): ApiClient => {
  if (apiProvider === "OpenCorporates") {
    const baseURL = "https://api.opencorporates.com/v0.4";
    return {
      getCompanyDetails: async (id) => {
        const response = await fetch(`${baseURL}/companies/${id}`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch company details: ${response.statusText}`,
          );
        }
        return response.json();
      },
      searchCompanies: async (query) => {
        const response = await fetch(
          `${baseURL}/companies/search?q=${encodeURIComponent(query)}`,
        );
        if (!response.ok) {
          throw new Error(`Failed to search companies: ${response.statusText}`);
        }
        return response.json();
      },
    };
  } else if (apiProvider === "OtherApi") {
    const baseURL = "https://api.newapi.com/v1";
    return {
      getCompanyDetails: async (id) => {
        const response = await fetch(`${baseURL}/company/${id}`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch company details: ${response.statusText}`,
          );
        }
        return response.json();
      },
      searchCompanies: async (query) => {
        const response = await fetch(
          `${baseURL}/search/companies?keyword=${encodeURIComponent(query)}`,
        );
        if (!response.ok) {
          throw new Error(`Failed to search companies: ${response.statusText}`);
        }
        return response.json();
      },
    };
  } else {
    throw new Error("Invalid API Provider");
  }
};
