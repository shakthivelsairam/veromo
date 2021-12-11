import * as env from "./env"

// use api enpoint env vars, if set
let apiBaseURL = env.getBackendAPI() + "/api/v1"

/**
 * Sets common headers such as content-type and authorization.
 */
 export const getHeaders = async () => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    return headers
  }
  
  /**
   * Sets common fetch params such as headers and calls fetch
   * @param {string} url
   * @param {object} params for fetch
   * @returns fetch result
   */
  export const wrappedFetch = async (url, params) => {
    const headers = await getHeaders()
    return await fetch(url, {
      ...params,
      headers,
    })
  }
  
  export async function getTenants() {
    try {
        console.log("getTenants apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/tenants`, {
              method: "GET",
          })
          console.log("getTenants response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
      } catch (error) {
          console.error("getTenants error: ", error)
          throw new Error("Unauthorized")
      }
  }

// Facility API

export async function getFacility() {
  try {
   
      console.log("getFacility apiBaseURL = ", apiBaseURL)
        const response = await wrappedFetch(`${apiBaseURL}/facilities`, {
            method: "GET",
        })
        console.log("getFacility response = ", response)
        if (response.status === 401) {
            throw new Error("Unauthorized")
        } else {
            return response.json()
        }
       
    } catch (error) {
        console.error("getFacility error: ", error)
        throw new Error("Unauthorized")
    }
}

export async function getSingleFacility(id) {
    try {
     
        console.log("getFacility apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/facilities/`+id, {
              method: "GET",
          })
          console.log("getFacility response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getFacility error: ", error)
          throw new Error("Unauthorized")
      }
  }
  
export async function setFacility(facilityData) {
  try {
     console.log(facilityData);
      console.log("getFacility apiBaseURL = ", apiBaseURL)
        const response = await wrappedFetch(`${apiBaseURL}/facilities`, {
            method: "POST",
            body: JSON.stringify(facilityData)
        })
        console.log("getFacility response = ", response)
        if (response.status === 401) {
            throw new Error("Unauthorized")
        } else {
            return response
        }
    } catch (error) {
        console.error("getFacility error: ", error)
        throw new Error("Unauthorized")
    }
}

// Department

export async function getDepartment() {
    try {
     
        console.log("getDepartment apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/departments`, {
              method: "GET",
          })
          console.log("getDepartment response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getDepartment error: ", error)
          throw new Error("Unauthorized")
      }
  }

export async function getSingleDept(id) {
    try {
     
        console.log("getSingleDept apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/departments/`+id, {
              method: "GET",
          })
          console.log("getSingleDept response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getSingleDept error: ", error)
          throw new Error("Unauthorized")
      }
  }
  export async function setDepartment(deptData) {
    try {
        console.log("setDepartment apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/departments`, {
              method: "POST",
              body: JSON.stringify(deptData)
          })
          console.log("setDepartment response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response
          }
      } catch (error) {
          console.error("setDepartment error: ", error)
          throw new Error("Unauthorized")
      }
  }
  
  // Samples


  export async function getSample() {
    try {
     
        console.log("getSample apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/samples`, {
              method: "GET",
          })
          console.log("getSample response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getSample error: ", error)
          throw new Error("Unauthorized")
      }
  }

export async function getSingleSample(id) {
    try {
     
        console.log("getSingleSample apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/samples/`+id, {
              method: "GET",
          })
          console.log("getSingleSample response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getSingleSample error: ", error)
          throw new Error("Unauthorized")
      }
  }
  export async function setSample(deptData) {
    try {
        console.log("setSample apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/samples`, {
              method: "POST",
              body: JSON.stringify(deptData)
          })
          console.log("setSample response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response
          }
      } catch (error) {
          console.error("setSample error: ", error)
          throw new Error("Unauthorized")
      }
  }

  // Container


  export async function getContainer() {
    try {
     
        console.log("getContainer apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/containers`, {
              method: "GET",
          })
          console.log("getContainer response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getContainer error: ", error)
          throw new Error("Unauthorized")
      }
  }

export async function getSingleContainer(id) {
    try {
     
        console.log("getSingleContainer apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/containers/`+id, {
              method: "GET",
          })
          console.log("getSingleContainer response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getSingleContainer error: ", error)
          throw new Error("Unauthorized")
      }
  }
  export async function setContainer(deptData) {
    try {
        console.log("setContainer apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/containers`, {
              method: "POST",
              body: JSON.stringify(deptData)
          })
          console.log("setContainer response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response
          }
      } catch (error) {
          console.error("setContainer error: ", error)
          throw new Error("Unauthorized")
      }
  }

  // Metho


  export async function getMethod() {
    try {
     
        console.log("getMethod apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/methods`, {
              method: "GET",
          })
          console.log("getMethod response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getMethod error: ", error)
          throw new Error("Unauthorized")
      }
  }

export async function getSingleMethod(id) {
    try {
     
        console.log("getSingleMethod apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/methods/`+id, {
              method: "GET",
          })
          console.log("getSingleMethod response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getSingleMethod error: ", error)
          throw new Error("Unauthorized")
      }
  }
  export async function setMethod(deptData) {
    try {
        console.log("setMethod apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/methods`, {
              method: "POST",
              body: JSON.stringify(deptData)
          })
          console.log("setMethod response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response
          }
      } catch (error) {
          console.error("setMethod error: ", error)
          throw new Error("Unauthorized")
      }
  }

  export async function setMetaType(metadata) {
    try {
     
        console.log("tenenat apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/metatypes`, {
            method: "POST",
            body: JSON.stringify(metadata)
          })
          console.log("tenent response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("tenenat error: ", error)
          throw new Error("Unauthorized")
      }
  }
  
  
  export async function getMetaTypes() {
    try {
     
        console.log("getMetaTypes apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/metatypes`, {
              method: "GET",
          })
          console.log("getMetaTypes response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getMetaTypes error: ", error)
          throw new Error("Unauthorized")
      }
  }
  
  export async function setMetaData(metadata) {
    try {
     
        console.log("setMetaData apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/metadatas`, {
            method: "POST",
            body: JSON.stringify(metadata)
          })
          console.log("setMetaData response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("setMetaData error: ", error)
          throw new Error("Unauthorized")
      }
  }
  
  export async function getMetaData() {
    try {
     
        console.log("getMetaData apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/metadatas`, {
              method: "GET",
          })
          console.log("getMetaData response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getMetaData error: ", error)
          throw new Error("Unauthorized")
      }
  }
  export async function getSingleMetadata(id) {
    try {
     
        console.log("getSingleMetadata apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/metadatas/`+id, {
              method: "GET",
          })
          console.log("getSingleMetadata response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("getSingleMetadata error: ", error)
          throw new Error("Unauthorized")
      }
  }
  
   // Lookup data API's

  export async function getLookupTenant() {
    try {
     
        console.log("tenenat apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/tenantslookup`, {
              method: "GET",
          })
          console.log("tenent response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("tenenat error: ", error)
          throw new Error("Unauthorized")
      }
  }

  // Lookup meta_types

    export async function getLookupMetaTypes() {
    try {
     
        console.log("Meta types apiBaseURL = ", apiBaseURL)
          const response = await wrappedFetch(`${apiBaseURL}/metatypeslookup`, {
              method: "GET",
          })
          console.log("tenent response = ", response)
          if (response.status === 401) {
              throw new Error("Unauthorized")
          } else {
              return response.json()
          }
         
      } catch (error) {
          console.error("tenenat error: ", error)
          throw new Error("Unauthorized")
      }
  }
     
  