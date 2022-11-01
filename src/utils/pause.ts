export default function pause(seconds: number) {
  return new Promise((r) => setTimeout(r, seconds * 1000));
}
