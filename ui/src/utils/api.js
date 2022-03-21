import * as env from "./env";

// use api enpoint env vars, if set
let apiBaseURL = env.getBackendAPI() + "/api/v1";

/**
 * Sets common headers such as content-type and authorization.
 */
export const getHeaders = async () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
};

/**
 * Sets common fetch params such as headers and calls fetch
 * @param {string} url
 * @param {object} params for fetch
 * @returns fetch result
 */
export const wrappedFetch = async (url, params) => {
  const headers = await getHeaders();
  return await fetch(url, {
    ...params,
    headers,
  });
};

export async function getTenants() {
  try {
    console.log("getTenants apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tenants`, {
      method: "GET",
    });
    console.log("getTenants response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getTenants error: ", error);
    throw new Error("Unauthorized");
  }
}

// Facility API

export async function getFacility() {
  try {
    console.log("getFacility apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/facilities`, {
      method: "GET",
    });
    console.log("getFacility response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getFacility error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleFacility(id) {
  try {
    console.log("getFacility apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/facilities/` + id, {
      method: "GET",
    });
    console.log("getFacility response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getFacility error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function getBaseFacility(id) {
  try {
    console.log("getFacility apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(
      `${apiBaseURL}/facilities/basebranch/` + id,
      {
        method: "GET",
      }
    );
    console.log("getFacility response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getFacility error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function setFacility(facilityData) {
  try {
    console.log(facilityData);
    console.log("getFacility apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/facilities`, {
      method: "POST",
      body: JSON.stringify(facilityData),
    });
    console.log("getFacility response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("getFacility error: ", error);
    throw new Error("Unauthorized");
  }
}

// Department

export async function getDepartment() {
  try {
    console.log("getDepartment apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/departments`, {
      method: "GET",
    });
    console.log("getDepartment response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getDepartment error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleDept(id) {
  try {
    console.log("getSingleDept apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/departments/` + id, {
      method: "GET",
    });
    console.log("getSingleDept response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleDept error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function setDepartment(deptData) {
  try {
    console.log("setDepartment apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/departments`, {
      method: "POST",
      body: JSON.stringify(deptData),
    });
    console.log("setDepartment response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setDepartment error: ", error);
    throw new Error("Unauthorized");
  }
}

// Samples

export async function getSample() {
  try {
    console.log("getSample apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/samples`, {
      method: "GET",
    });
    console.log("getSample response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSample error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleSample(id) {
  try {
    console.log("getSingleSample apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/samples/` + id, {
      method: "GET",
    });
    console.log("getSingleSample response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleSample error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function setSample(deptData) {
  try {
    console.log("setSample apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/samples`, {
      method: "POST",
      body: JSON.stringify(deptData),
    });
    console.log("setSample response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setSample error: ", error);
    throw new Error("Unauthorized");
  }
}

//Client Master
export async function setClients(clientData) {
  try {
    console.log("setClients apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/clients`, {
      method: "POST",
      body: JSON.stringify(clientData),
    });
    console.log("setClients response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setClients error: ", error);
    throw new Error("Unauthorized");
  }
}
//User Master
export async function getUsers() {
  try {
    console.log("setUsers apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/users`, {
      method: "GET",
      body: JSON.stringify(),
    });
    console.log("setUsers response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setUsers error: ", error);
    throw new Error("Unauthorized");
  }
}
// Container
export async function getContainer() {
  try {
    console.log("getContainer apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/containers`, {
      method: "GET",
    });
    console.log("getContainer response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getContainer error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleContainer(id) {
  try {
    console.log("getSingleContainer apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/containers/` + id, {
      method: "GET",
    });
    console.log("getSingleContainer response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleContainer error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function setContainer(deptData) {
  try {
    console.log("setContainer apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/containers`, {
      method: "POST",
      body: JSON.stringify(deptData),
    });
    console.log("setContainer response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setContainer error: ", error);
    throw new Error("Unauthorized");
  }
}

// Metho

export async function getMethod() {
  try {
    console.log("getMethod apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/methods`, {
      method: "GET",
    });
    console.log("getMethod response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getMethod error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleMethod(id) {
  try {
    console.log("getSingleMethod apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/methods/` + id, {
      method: "GET",
    });
    console.log("getSingleMethod response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleMethod error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function setMethod(deptData) {
  try {
    console.log("setMethod apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/methods`, {
      method: "POST",
      body: JSON.stringify(deptData),
    });
    console.log("setMethod response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setMethod error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function setMetaType(metadata) {
  try {
    console.log("tenenat apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/metatypes`, {
      method: "POST",
      body: JSON.stringify(metadata),
    });
    console.log("tenent response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("tenenat error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getMetaTypes() {
  try {
    console.log("getMetaTypes apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/metatypes`, {
      method: "GET",
    });
    console.log("getMetaTypes response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getMetaTypes error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function setMetaData(metadata) {
  try {
    console.log("setMetaData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/metadatas`, {
      method: "POST",
      body: JSON.stringify(metadata),
    });
    console.log("setMetaData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("setMetaData error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getMetaData() {
  try {
    console.log("getMetaData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/metadatas`, {
      method: "GET",
    });
    console.log("getMetaData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getMetaData error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function getSingleMetadata(id) {
  try {
    console.log("getSingleMetadata apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/metadatas/` + id, {
      method: "GET",
    });
    console.log("getSingleMetadata response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleMetadata error: ", error);
    throw new Error("Unauthorized");
  }
}

// Instrument data
export async function getInstrumentData() {
  try {
    console.log("getInstrumentData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumentdata`, {
      method: "GET",
    });
    console.log("getInstrumentData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getInstrumentData error: ", error);
    throw new Error("Unauthorized");
  }
}
// Set instrument data
export async function setInstrumentData(metadata) {
  try {
    console.log("setMetaData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumentdata`, {
      method: "POST",
      body: JSON.stringify(metadata),
    });
    console.log("setMetaData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("setMetaData error: ", error);
    throw new Error("Unauthorized");
  }
}

// get single instrument data
export async function getSingleInstrumentData(id) {
  try {
    console.log("getSingleInstrumentData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumentdata/` + id, {
      method: "GET",
    });
    console.log("getSingleInstrumentData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleInstrumentData error: ", error);
    throw new Error("Unauthorized");
  }
}

// Instrument type
export async function getInstrumentType() {
  try {
    console.log("getInstrumentData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumenttype`, {
      method: "GET",
    });
    console.log("getInstrumentData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getInstrumentData error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleInstrumentType(id) {
  try {
    console.log("getSingleInstrumentdata apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumenttype/` + id, {
      method: "GET",
    });
    console.log("getSingleInstrumentdata response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleInstrumentdata error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function setInstrumentType(metadata) {
  try {
    console.log("setInstrumentType apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumenttype`, {
      method: "POST",
      body: JSON.stringify(metadata),
    });
    console.log("setInstrumentType response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("setMetaData error: ", error);
    throw new Error("Unauthorized");
  }
}
// Lookup data API's

export async function getLookupTenant() {
  try {
    console.log("tenenat apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tenantslookup`, {
      method: "GET",
    });
    console.log("tenent response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("tenenat error: ", error);
    throw new Error("Unauthorized");
  }
}

// Lookup meta_types

export async function getLookupMetaTypes() {
  try {
    console.log("Meta types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/metatypeslookup`, {
      method: "GET",
    });
    console.log("tenent response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("tenenat error: ", error);
    throw new Error("Unauthorized");
  }
}

// Lookup instrument types

export async function getLookupInstrumentType() {
  try {
    console.log("Meta types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumenttypelookup`, {
      method: "GET",
    });
    console.log("tenent response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("tenenat error: ", error);
    throw new Error("Unauthorized");
  }
}

// Lookup Faility
export async function getLookupFacility() {
  try {
    console.log("Meta types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/facilitylookup`, {
      method: "GET",
    });
    console.log("tenent response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("tenenat error: ", error);
    throw new Error("Unauthorized");
  }
}

// Look up Service Group

export async function getLookupServiceGroup() {
  try {
    console.log("servicelookup types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/servicelookup`, {
      method: "GET",
    });
    console.log("servicelookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("servicelookup error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getTenant(tenantId) {
  try {
    console.log("getTenants apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tenants/${tenantId}`, {
      method: "GET",
    });
    console.log("getTenants response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getTenants error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function saveTenant(tenantDetails) {
  try {
    console.log("saveTenant apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tenants`, {
      method: "POST",
      body: JSON.stringify(tenantDetails),
    });
    console.log("saveTenant response = ", response);
    if (response.status >= 200 && response.status < 299) {
      return { status: "success", message: response.json() };
    } else {
      return { status: "error", message: response.json() };
    }
  } catch (error) {
    console.error("saveTenant error: ", error);
    return { status: "error" };
  }
}

export async function updateTenant(tenantId, tenantDetails) {
  try {
    console.log("updateTenant apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tenants/${tenantId}`, {
      method: "PUT",
      body: JSON.stringify(tenantDetails),
    });
    console.log("updateTenant response = ", response);
    if (response.status >= 200 && response.status < 299) {
      return { status: "success", message: response.json() };
    } else {
      return { status: "error", message: response.json() };
    }
  } catch (error) {
    console.error("updateTenant error: ", error);
    return { status: "error" };
  }
}

export async function deleteTenant(tenantId) {
  try {
    console.log("deleteTenant apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tenants/${tenantId}`, {
      method: "DELETE",
    });
    console.log("deleteTenant response = ", response);
    if (response.status >= 200 && response.status < 299) {
      return { status: "success", message: response.json() };
    } else {
      return { status: "error", message: response.json() };
    }
  } catch (error) {
    console.error("deleteTenant error: ", error);
    return { status: "error" };
  }
}

export async function getAllCountries() {
  try {
    console.log("getAllCountries apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/countries`, {
      method: "GET",
    });
    console.log("getAllCountries response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getAllCountries error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getAllStates() {
  try {
    console.log("getAllStates apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/states`, {
      method: "GET",
    });
    console.log("getAllStates response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getAllStates error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getAllCities() {
  try {
    console.log("getAllCities apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/cities`, {
      method: "GET",
    });
    console.log("getAllCities response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getAllCities error: ", error);
    throw new Error("Unauthorized");
  }
}
// Save Analyste master table

export async function setAnalyte(analyteData) {
  try {
    console.log("setAnalyte apiBaseURL = ", analyteData);
    const response = await wrappedFetch(`${apiBaseURL}/analyte`, {
      method: "POST",
      body: JSON.stringify(analyteData),
    });
    console.log("setAnalyte response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("setAnalyte error: ", error);
    throw new Error("Unauthorized");
  }
}
// getAnalyte data
export async function getAnalyte() {
  try {
    console.log("getAnalyte apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/analyte`, {
      method: "GET",
    });
    console.log("getAnalyte response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getAnalyte error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getSingleAnalyte(id) {
  try {
    console.log("getSingleAnalyte apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/analyte/` + id, {
      method: "GET",
    });
    console.log("getSingleAnalyte response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getSingleAnalyte error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function getAnalyteRefRangeData(id) {
  try {
    console.log("getAnalyteRefRangeData apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/analyterange/` + id, {
      method: "GET",
    });
    console.log("getAnalyteRefRangeData response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getAnalyteRefRangeData error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function getInstrumentAnalyte() {
  try {
    console.log("getInstrumentAnalyte apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/instrumentanalytes`, {
      method: "GET",
    });
    console.log("getInstrumentAnalyte response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getInstrumentAnalyte error: ", error);
    throw new Error("Unauthorized");
  }
}

// Container lookup
export async function getLookupContainer() {
  try {
    console.log("servicelookup types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/containerlookup`, {
      method: "GET",
    });
    console.log("servicelookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("servicelookup error: ", error);
    throw new Error("Unauthorized");
  }
}

// Method Lookup

export async function getLookupMethod() {
  try {
    console.log("servicelookup types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/methodlookup`, {
      method: "GET",
    });
    console.log("servicelookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("servicelookup error: ", error);
    throw new Error("Unauthorized");
  }
}
// Uom Lookup

export async function getLookupUom() {
  try {
    console.log("getLookupUom types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/uomlookup`, {
      method: "GET",
    });
    console.log("getLookupUom response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getLookupUom error: ", error);
    throw new Error("Unauthorized");
  }
}
// loniclookup
export async function getLookupLonicCode() {
  try {
    console.log("loniclookup types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/loniclookup`, {
      method: "GET",
    });
    console.log("loniclookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("loniclookup error: ", error);
    throw new Error("Unauthorized");
  }
}

// getLookupInputPatter
export async function getLookupInputPatter() {
  try {
    console.log("getLookupInputPatter types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/inputpatternlookup`, {
      method: "GET",
    });
    console.log("getLookupInputPatter response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getLookupInputPatter error: ", error);
    throw new Error("Unauthorized");
  }
}
// getLookupResultDataTypes
export async function getLookupResultDataTypes(customflag) {
  try {
    console.log("getLookupResultDataTypes types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(
      `${apiBaseURL}/resultdatatypelookup/` + customflag,
      {
        method: "GET",
      }
    );
    console.log("getLookupResultDataTypes response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getLookupResultDataTypes error: ", error);
    throw new Error("Unauthorized");
  }
}
// Reference range

export async function getLookupRefRange() {
  try {
    console.log("getLookupResultDataTypes types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/refrangelookup`, {
      method: "GET",
    });
    console.log("getLookupResultDataTypes response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getLookupResultDataTypes error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function getLookupMetaData(type) {
  try {
    console.log("getLookupResultDataTypes types apiBaseURL = ", type);
    const response = await wrappedFetch(
      `${apiBaseURL}/getLookupmetadata/` + type,
      {
        method: "GET",
      }
    );
    console.log("getLookupResultDataTypes response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getLookupResultDataTypes error: ", error);
    throw new Error("Unauthorized");
  }
}
export async function getLookupDevice(type) {
  try {
    console.log("getLookupDevice types apiBaseURL = ", type);
    const response = await wrappedFetch(`${apiBaseURL}/getLookupdevice`, {
      method: "GET",
    });
    console.log("getLookupDevice response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getLookupDevice error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getLookupDepartment() {
  try {
    console.log("servicelookup types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/departmentlookup`, {
      method: "GET",
    });
    console.log("servicelookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("servicelookup error: ", error);
    throw new Error("Unauthorized");
  }
}

// Sample lookups

export async function getLookupSample() {
  try {
    console.log("servicelookup types apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/sampleslookup`, {
      method: "GET",
    });
    console.log("servicelookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("servicelookup error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getTariffCards() {
  try {
    console.log("getTariffCards apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tariffcard`, {
      method: "GET",
    });
    console.log("getTariffCards response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getTariffCards error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getTariffCard(tariffCardId) {
  try {
    console.log("getTariffCard apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(
      `${apiBaseURL}/tariffcard/${tariffCardId}`,
      {
        method: "GET",
      }
    );
    console.log("getTariffCard response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getTariffCard error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function saveTariffCard(tariffCard) {
  try {
    console.log("saveTariffCard apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tariffcard`, {
      method: "POST",
      body: JSON.stringify(tariffCard),
    });
    console.log("saveTariffCard response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("saveTariffCard error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function updateTariffCard(tariffCardId, tariffCard) {
  try {
    console.log("updateTariffCard apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(
      `${apiBaseURL}/tariffcard/${tariffCardId}`,
      {
        method: "PUT",
        body: JSON.stringify(tariffCard),
      }
    );
    console.log("updateTariffCard response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("updateTariffCard error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function removeTariffCard(tariffCardId) {
  try {
    console.log("removeTariffCard apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(
      `${apiBaseURL}/tariffcard/${tariffCardId}`,
      {
        method: "DELETE",
      }
    );
    console.log("removeTariffCard response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("removeTariffCard error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getPrices(tariffCardId, testId) {
  try {
    console.log("getPrices apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/prices/test`, {
      method: "POST",
      body: JSON.stringify({
        tariffCardId: tariffCardId,
        identifyingId: testId,
        identifyingType: "Test",
      }),
    });
    console.log("getPrices response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getPrices error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function savePrices(prices) {
  try {
    console.log("savePrices apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/prices`, {
      method: "POST",
      body: JSON.stringify(prices),
    });
    console.log("savePrices response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response;
    }
  } catch (error) {
    console.error("savePrices error: ", error);
    throw new Error("Unauthorized");
  }
}

export async function getTestsLookup() {
  try {
    console.log("getTestsLookup apiBaseURL = ", apiBaseURL);
    const response = await wrappedFetch(`${apiBaseURL}/tests/lookup`, {
      method: "GET",
    });
    console.log("getTestsLookup response = ", response);
    if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      return response.json();
    }
  } catch (error) {
    console.error("getTestsLookup error: ", error);
    throw new Error("Unauthorized");
  }
}
