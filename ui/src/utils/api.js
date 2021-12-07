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