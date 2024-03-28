// Odstraní z řetězce všechny nečíselné znaky a zkrátí jej na 16 znaků
const filterNonDigits = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 16);
};

const formatCardNumber = (input: string): string => {
  const digitsOnly = filterNonDigits(input)
  const formattedGroups = [];
  for (let i = 0; i < digitsOnly.length; i += 4) {
    formattedGroups.push(digitsOnly.slice(i, i + 4));
  }

  return formattedGroups.join('-');
}

const cardInput = document.querySelector('.card-input') as HTMLInputElement;
cardInput.addEventListener('input', () => {
  const formattedValue = formatCardNumber(cardInput.value);
  cardInput.value = formattedValue;
});
