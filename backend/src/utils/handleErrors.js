/**
 * Handle error specify
 * @param {*} res
 * @param {*} message
 */
const handleError = (res, message="Algo paso") => {
  res.send({error: message});
}

/**
 * Handle error specify
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
const handleHttpError = (res, message="Algo paso", code=403) => {
  res.status(code);
  res.send({error: message});
}

/**
 * Handle error specify
 * @param {*} res
 * @param {*} message
 * @param {*} code
 */
const handleHttpResponse = (res, message="Otro error", code=403) => {
  res.status(code);
  res.send({error: message});
}

module.exports = { handleHttpResponse, handleHttpError};
