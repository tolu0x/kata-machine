export default function bs_list(haystack: number[], needle: number): boolean {
  let hi = haystack.length;
  let lo = 0

  do {
    const mid = Math.floor(lo + (hi - lo) / 2);

    if (needle === haystack[mid]) {
      return true
    } else if (needle > haystack[mid]) {
      lo = mid + 1;
    } else if (needle < haystack[mid]) {
      hi = mid;
    }
  } while (lo < hi);

  return false;
}
