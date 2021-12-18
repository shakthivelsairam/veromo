export const create = (data, isError = false) => {
  let apiResonse = { error: isError, data }
  return apiResonse
}

export const createBadInput = (data) => {
  let error = create(data, true)
  error.isExternal = true
  error.isBadInput = true
  return error
}

export const createDuplicateInput = (data) => {
  let error = create(data, true)
  error.isExternal = true
  error.isBadInput = true
  error.isDuplicateInput = true
  return error
}

export const createUnauthorized = (data) => {
  let error = create(data, true)
  error.isExternal = true
  error.isUnauthorized = true
  return error
}

export const createForbidden = (data) => {
  let error = create(data, true)
  error.isExternal = true
  error.isForbidden = true
  return error
}

export const createResourceNotFound = (data) => {
  let error = create(data, true)
  error.isExternal = true
  error.resourceNotFound = true
  return error
}

export const createInternalError = (data) => {
  let error = create(data || "Internal server error", true)
  error.isExternal = false
  return error
}

export const createNotImplementedError = (data) => {
  const error = create(data, true)
  error.isNotImplemented = true
  error.isExternal = true
  return error
}

/**
 *
 * Sends the correct http status and body to res
 * The HTTP status is determined by the boolean property set.
 */
export const sendResponse = (res, resObj) => {
  console.log("api sendResponse resObj", resObj)
  let resOutput = resObj.data
  if (!resObj.error) {
    res.status(200).json(resOutput)
  } else {
    if (!resObj.isExternal) {
      res.status(500).json(resOutput)
    } else {
      if (resObj.isBadInput) {
        res.status(400).json(resOutput)
      } else if (resObj.isUnauthorized) {
        res.status(401).json(resOutput)
      } else if (resObj.isForbidden) {
        res.status(403).json(resOutput)
      } else if (resObj.resourceNotFound) {
        res.status(404).json(resOutput)
      } else if (resObj.isNotImplemented) {
        res.status(501).json(resOutput)
      } else {
        res.status(500).json(resOutput)
      }
    }
  }
}
