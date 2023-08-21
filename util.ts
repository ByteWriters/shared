export interface Duration {
  Y?: number
  M?: number
  D?: number
  h?: number
  m?: number
  s?: number
}

const ivRegex = /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/

export const duration2str = (duration: Duration) => {
  if (!Object.keys(duration).length) return null;
  let output = 'P';

  (['Y', 'M', 'D', 'T', 'h', 'm', 's']).forEach(elm => {
    if (elm === 'T') output += 'T';
    else if (elm in duration) output += `${duration[elm]}${elm.toUpperCase()}`;
  });

  return output;
}

export const str2duration = (str: string) => {
  if (str === undefined || str === null) return null;

  const parts = (str.match(ivRegex) || []).slice(1) as string[];
  const output: Duration = {};

  (['Y', 'M', 'D', 'h', 'm', 's']).forEach((elm, idx) => {
    const partValue = parts[idx];
    if (!partValue) return;

    try {
      const parsed = parseInt(partValue, 10);
      if (isNaN(parsed)) return;

      output[elm] = parsed;
    } catch(e) {}
  });
  return output;
}
