export enum NumericOperators {
  equalTo = '===',
  lessOrEqual = '<=',
  lessThan = '<',
  greaterOrEqual = '>=',
  greaterThan = '>',
  notEqual = '!==',
  containsNumber = '!',
  lenghtDigitsGreater = '.string().length >',
  lenghtDigitsLess = '.string().length <',
  lenghtDigitsEqual = '.string().length ===',
}

const operations: {
  [id: string]: (val: number, compareVal: number | number[]) => boolean;
} = {
  [NumericOperators.containsNumber]: (
    val: number,
    compareVal: number | number[]
  ): boolean =>
    (compareVal as number[]) ? (compareVal as number[]).includes(val) : false,
  [NumericOperators.equalTo]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val === compareVal,
  [NumericOperators.greaterOrEqual]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val >= compareVal,
  [NumericOperators.greaterThan]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val > compareVal,
  [NumericOperators.lenghtDigitsEqual]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val.toString().length === compareVal,
  [NumericOperators.lenghtDigitsGreater]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val.toString().length > compareVal,
  [NumericOperators.lenghtDigitsLess]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val.toString().length < compareVal,
  [NumericOperators.lessOrEqual]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val <= compareVal,
  [NumericOperators.lessThan]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val < compareVal,
  [NumericOperators.notEqual]: (
    val: number,
    compareVal: number | number[]
  ): boolean => val !== compareVal,
};

export const MathOper = (
  operator: NumericOperators,
  val: number,
  compareVal: number
): boolean => {
  return operations[operator](val, compareVal);
};
