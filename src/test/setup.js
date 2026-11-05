import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';
import { resetDb } from '../api/mockDb';

beforeEach(() => {
  window.localStorage.clear();
  resetDb();
});

afterEach(() => {
  cleanup();
});
