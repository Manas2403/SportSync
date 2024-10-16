// Function to send a 200 OK response
export function response_200(res, message, data) {
  return res.status(200).json({
    status: 'OK', // Status of the response
    message,     // Custom message
    data,        // Data returned in the response
  });
}

// Function to send a 201 Created response
export function response_201(res, message, data) {
  return res.status(201).json({
    status: 'Inserted', // Status indicating a resource was created
    message,           // Custom message
    data,              // Data related to the created resource
  });
}

// Function to send a 204 No Content response
export function response_204(res, message) {
  return res.status(204).json({
    status: 'No content', // Status indicating no content to return
    message,             // Custom message
  });
}

// Function to send a 400 Bad Request response
export function response_400(res, message) {
  return res.status(400).json({
    status: 'error',    // Status indicating an error occurred
    error: message,     // Custom error message
  });
}

// Function to send a 401 Unauthorized response
export function response_401(res, message) {
  return res.status(401).json({
    status: 'error',    // Status indicating unauthorized access
    error: message,     // Custom error message
  });
}

// Function to send a 403 Forbidden response
export function response_403(res, message) {
  return res.status(403).json({
    status: 'error',    // Status indicating forbidden access
    error: message,     // Custom error message
  });
}

// Function to send a 404 Not Found response
export function response_404(res, message) {
  return res.status(404).json({
    status: 'error',    // Status indicating the resource was not found
    error: message,     // Custom error message
  });
}

// Function to send a 500 Internal Server Error response
export function response_500(res, log_message, err) {
  // Creating a message that includes the error if it exists
  const message = err != null ? `${log_message}: ${err}` : log_message;

  // Log the error message for debugging
  console.debug(message);

  return res.status(500).json({
    status: 'error',                     // Status indicating a server error
    error: `Something went wrong.\n${message}`, // Custom error message
  });
}
