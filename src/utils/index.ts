import { decamelize } from 'humps';

export const alphaAsc = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

export const separateWords = (s: string) => decamelize(
  s,
  { separator: ' ' }
);

export const fauxShadowStyle = `
text-shadow:
  calc(var(--stroke-width, 1px) * 1) calc(var(--stroke-width, 1px) * 0) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0.9239) calc(var(--stroke-width, 1px) * 0.3827) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0.7071) calc(var(--stroke-width, 1px) * 0.7071) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0.3827) calc(var(--stroke-width, 1px) * 0.9239) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0) calc(var(--stroke-width, 1px) * 1) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -0.3827) calc(var(--stroke-width, 1px) * 0.9239) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -0.7071) calc(var(--stroke-width, 1px) * 0.7071) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -0.9239) calc(var(--stroke-width, 1px) * 0.3827) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -1) calc(var(--stroke-width, 1px) * 0) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -0.9239) calc(var(--stroke-width, 1px) * -0.3827) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -0.7071) calc(var(--stroke-width, 1px) * -0.7071) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * -0.3827) calc(var(--stroke-width, 1px) * -0.9239) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0) calc(var(--stroke-width, 1px) * -1) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0.3827) calc(var(--stroke-width, 1px) * -0.9239) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0.7071) calc(var(--stroke-width, 1px) * -0.7071) 0 var(--stroke-color, #000000),
  calc(var(--stroke-width, 1px) * 0.9239) calc(var(--stroke-width, 1px) * -0.3827) 0 var(--stroke-color, #000000);
`;