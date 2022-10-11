export function validate(number, search) {
  if (isNaN(number)) {
    console.log(`No record found for ${search}`);
    return 1;
  }
}
