/**
 * Fake JWT used by the mock API. It has the same three-part shape and the
 * same payload (`user_id`, `exp`) as the Rails `AuthenticationTokenService`,
 * but the signature is not cryptographic: this is demo-only.
 */
const TOKEN_TTL_SECONDS = 24 * 60 * 60;
const SIGNATURE = 'mock-signature';

const encode = (value) => btoa(JSON.stringify(value))
  .replace(/=+$/, '')
  .replace(/\+/g, '-')
  .replace(/\//g, '_');

const decode = (value) => JSON.parse(atob(value.replace(/-/g, '+').replace(/_/g, '/')));

export const createToken = (userId, now = Date.now()) => [
  encode({ alg: 'none', typ: 'JWT' }),
  encode({ user_id: userId, exp: Math.floor(now / 1000) + TOKEN_TTL_SECONDS }),
  SIGNATURE,
].join('.');

/** Returns the user id inside a valid, non-expired token, or `null`. */
export const verifyToken = (token, now = Date.now()) => {
  try {
    const [, payload, signature] = String(token).split('.');
    if (signature !== SIGNATURE) return null;
    const { user_id: userId, exp } = decode(payload);
    if (!userId || exp * 1000 < now) return null;
    return userId;
  } catch {
    return null;
  }
};
