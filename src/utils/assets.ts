/**
 * Resolves an asset path to work seamlessly across development,
 * AI Studio preview, and GitHub Pages deployments (e.g. /The-Creative-Forest-Spanish/).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  try {
    const decoded = decodeURI(cleanPath);
    return `${prefix}${encodeURI(decoded)}`;
  } catch {
    return `${prefix}${encodeURI(cleanPath)}`;
  }
}
