export const getKeyOfEnum = (value: any, type: any): any => {
  return Object.keys(type)[Object.values(type as any).indexOf(value)];
};

export interface enumOBJ {
  [id: string]: string;
}

export const enumAsObj = (type: any): enumOBJ => {
  let finalObj: enumOBJ = {};
  const vals = Object.values(type);

  for (const val of vals) {
    finalObj[getKeyOfEnum(val, type)] = val as string;
  }

  return finalObj;
};
