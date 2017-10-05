let size = 20;
let line = '';
let offset = 0;

for (let i = 1; i <= size * size; i++) {
	if ((i + offset) % 2 === 0) line += '#';
	else if ((i + offset) % 2 === 1) line += ' ';
	if (i % size === 0) {
		offset = 1 - offset;
		line += '\n';
	}
}

print(line);
