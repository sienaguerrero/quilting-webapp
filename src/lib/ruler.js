const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

export class Fraction {
  constructor(numerator, denominator = 1) {
    if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator === 0) {
      throw new RangeError(`not a fraction: ${numerator}/${denominator}`);
    }
    const sign = denominator < 0 ? -1 : 1;
    const divisor = gcd(numerator, denominator) || 1;
    this.n = (sign * numerator) / divisor;
    this.d = Math.abs(denominator) / divisor;
    Object.freeze(this);
  }

  static from(value) {
    if (value instanceof Fraction) return value;
    if (Number.isInteger(value)) return new Fraction(value);
    if (typeof value === 'number') return Fraction.from(String(value));
    const text = String(value).trim();
    const decimal = text.match(/^(\d*)\.(\d+)$/);
    if (decimal) {
      const [, whole, digits] = decimal;
      return new Fraction(Number(whole + digits), 10 ** digits.length);
    }
    const ratio = text.match(/^(-?\d+)(?:\/(\d+))?$/);
    if (ratio) return new Fraction(Number(ratio[1]), Number(ratio[2] ?? 1));
    throw new RangeError(`can't read ${JSON.stringify(value)} as a fraction`);
  }

  add(other) {
    const o = Fraction.from(other);
    return new Fraction(this.n * o.d + o.n * this.d, this.d * o.d);
  }

  sub(other) {
    const o = Fraction.from(other);
    return new Fraction(this.n * o.d - o.n * this.d, this.d * o.d);
  }

  mul(other) {
    const o = Fraction.from(other);
    return new Fraction(this.n * o.n, this.d * o.d);
  }

  div(other) {
    const o = Fraction.from(other);
    return new Fraction(this.n * o.d, this.d * o.n);
  }

  compare(other) {
    const o = Fraction.from(other);
    return Math.sign(this.n * o.d - o.n * this.d);
  }

  equals(other) {
    return this.compare(other) === 0;
  }

  floor() {
    return Math.floor(this.n / this.d);
  }

  valueOf() {
    return this.n / this.d;
  }

  toString() {
    return this.d === 1 ? `${this.n}` : `${this.n}/${this.d}`;
  }
}

export const EIGHTH = new Fraction(1, 8);

export function parseInches(text) {
  const parts = String(text).trim().replace(/["″]$/, '').replace(/-/g, ' ').split(/\s+/);
  if (parts.length < 1 || parts.length > 2 || parts[0] === '') {
    throw new RangeError(`can't read ${JSON.stringify(text)} as inches`);
  }
  return parts.map(Fraction.from).reduce((sum, part) => sum.add(part), new Fraction(0));
}

export function onRuler(length) {
  return Fraction.from(length).div(EIGHTH).d === 1;
}

export function roundUpToRuler(length) {
  if (typeof length === 'number' && !Number.isInteger(length * 8)) {
    return new Fraction(Math.ceil(length * 8), 8);
  }
  const eighths = Fraction.from(length).div(EIGHTH);
  return new Fraction(eighths.d === 1 ? eighths.n : eighths.floor() + 1, 8);
}

const GLYPHS = {
  '1/8': '⅛', '1/4': '¼', '3/8': '⅜', '1/2': '½', '5/8': '⅝', '3/4': '¾', '7/8': '⅞',
  '1/3': '⅓', '2/3': '⅔', '1/6': '⅙', '5/6': '⅚',
};

export function ruler(length) {
  const f = Fraction.from(length);
  const whole = f.floor();
  const rest = f.sub(whole);
  if (rest.n === 0) return `${whole}″`;
  const part = GLYPHS[rest.toString()] ?? ` ${rest.n}⁄${rest.d}`;
  return whole === 0 ? `${part.trim()}″` : `${whole}${part}″`;
}
