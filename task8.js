let animals = new Map;
animals.set('dog', 'bulldog');
animals.set('cat', 'tiger');
animals.set('fish', 'salmon');
for (let entry of animals)
console.log(`Ключ - ${entry[0]}, значение - ${entry[1]}`);

