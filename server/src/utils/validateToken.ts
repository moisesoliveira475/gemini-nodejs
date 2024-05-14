export function validateToken(authorizationHeader: string | undefined) {
  if (typeof (authorizationHeader) !== 'string') {
    {
      throw new Error('API key is undefined')
    }
  }
  const token = authorizationHeader.slice(7, authorizationHeader.length);

  return token
}