export function normalizePhone(value: string) {
  const westernDigits = value.replace(/[၀-၉]/g, (digit) =>
    String('၀၁၂၃၄၅၆၇၈၉'.indexOf(digit)),
  );
  const digits = westernDigits.replace(/\D/g, '');

  if (digits.startsWith('959')) return `0${digits.slice(2)}`;
  if (digits.startsWith('09')) return digits;

  return digits;
}

export function isMyanmarPhone(value: string) {
  return /^09\d{7,9}$/.test(value);
}

export function maskPhone(value: string) {
  if (value.length <= 5) return value;

  return `${value.slice(0, 3)}${'*'.repeat(Math.max(value.length - 6, 3))}${value.slice(-3)}`;
}
