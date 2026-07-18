export const CATEGORIES: { id: number, name: string, pathUrl: string }[] = [
  { id: 1, name: 'Burgerler', pathUrl: 'burgers' },
  { id: 2, name: 'Aperatifler', pathUrl: 'snacks' },
  { id: 3, name: 'İçecekler', pathUrl: 'drinks' },
  { id: 4, name: 'Tatlılar', pathUrl: 'desserts' },
  { id: 5, name: 'Soslar', pathUrl: 'sauces' }
];

export const API_BASE_URL = 'https://api-quattrocafe.nufusistatistikleri.online';
//export const API_BASE_URL = 'https://localhost:44311';
export const TENANT_SLUG = 'quattrocafe';
export const API_ROOT_URL = `${API_BASE_URL}/api/${TENANT_SLUG}`;
export const MENU_HUB_URL = `${API_BASE_URL}/menuhub`;
export const R2_PUBLIC_BASE_URL = 'https://cdn.nufusistatistikleri.online';
