const numberFormatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
});

export class NumberService {
    static format(value: number) {
        return numberFormatter.format(value);
    }
}
