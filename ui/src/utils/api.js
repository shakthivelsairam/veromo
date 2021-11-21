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